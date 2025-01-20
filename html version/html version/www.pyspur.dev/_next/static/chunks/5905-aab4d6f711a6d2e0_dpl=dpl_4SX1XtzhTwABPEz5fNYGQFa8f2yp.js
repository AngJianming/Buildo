(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5905],
  {
    66648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var i = n(55601),
        r = n.n(i);
    },
    86300: function (e) {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = l(e),
                  n = t[0],
                  i = t[1];
                return ((n + i) * 3) / 4 - i;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    n,
                    s = l(e),
                    o = s[0],
                    a = s[1],
                    u = new r(((o + a) * 3) / 4 - a),
                    h = 0,
                    c = a > 0 ? o - 4 : o;
                  for (n = 0; n < c; n += 4)
                    (t =
                      (i[e.charCodeAt(n)] << 18) |
                      (i[e.charCodeAt(n + 1)] << 12) |
                      (i[e.charCodeAt(n + 2)] << 6) |
                      i[e.charCodeAt(n + 3)]),
                      (u[h++] = (t >> 16) & 255),
                      (u[h++] = (t >> 8) & 255),
                      (u[h++] = 255 & t);
                  return (
                    2 === a &&
                      ((t =
                        (i[e.charCodeAt(n)] << 2) |
                        (i[e.charCodeAt(n + 1)] >> 4)),
                      (u[h++] = 255 & t)),
                    1 === a &&
                      ((t =
                        (i[e.charCodeAt(n)] << 10) |
                        (i[e.charCodeAt(n + 1)] << 4) |
                        (i[e.charCodeAt(n + 2)] >> 2)),
                      (u[h++] = (t >> 8) & 255),
                      (u[h++] = 255 & t)),
                    u
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, i = e.length, r = i % 3, s = [], o = 0, a = i - r;
                    o < a;
                    o += 16383
                  )
                    s.push(
                      (function (e, t, i) {
                        for (var r, s = [], o = t; o < i; o += 3)
                          s.push(
                            n[
                              ((r =
                                ((e[o] << 16) & 16711680) +
                                ((e[o + 1] << 8) & 65280) +
                                (255 & e[o + 2])) >>
                                18) &
                                63
                            ] +
                              n[(r >> 12) & 63] +
                              n[(r >> 6) & 63] +
                              n[63 & r]
                          );
                        return s.join("");
                      })(e, o, o + 16383 > a ? a : o + 16383)
                    );
                  return (
                    1 === r
                      ? s.push(n[(t = e[i - 1]) >> 2] + n[(t << 4) & 63] + "==")
                      : 2 === r &&
                        s.push(
                          n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] +
                            n[(t >> 4) & 63] +
                            n[(t << 2) & 63] +
                            "="
                        ),
                    s.join("")
                  );
                });
              for (
                var n = [],
                  i = [],
                  r = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  s =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  o = 0,
                  a = s.length;
                o < a;
                ++o
              )
                (n[o] = s[o]), (i[s.charCodeAt(o)] = o);
              function l(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                -1 === n && (n = t);
                var i = n === t ? 0 : 4 - (n % 4);
                return [n, i];
              }
              (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, n) {
              "use strict";
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */ var i = n(675),
                r = n(783),
                s =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function o(e) {
                if (e > 2147483647)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, a.prototype), t;
              }
              function a(e, t, n) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return h(e);
                }
                return l(e, t, n);
              }
              function l(e, t, n) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !a.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    var n = 0 | p(e, t),
                      i = o(n),
                      r = i.write(e, t);
                    return r !== n && (i = i.slice(0, r)), i;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return c(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  E(e, ArrayBuffer) ||
                  (e && E(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (E(e, SharedArrayBuffer) ||
                      (e && E(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, n) {
                    var i;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (i =
                          void 0 === t && void 0 === n
                            ? new Uint8Array(e)
                            : void 0 === n
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, n)),
                        a.prototype
                      ),
                      i
                    );
                  })(e, t, n);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return a.from(i, t, n);
                var r = (function (e) {
                  if (a.isBuffer(e)) {
                    var t,
                      n = 0 | d(e.length),
                      i = o(n);
                    return 0 === i.length || e.copy(i, 0, 0, n), i;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? o(0)
                      : c(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? c(e.data)
                    : void 0;
                })(e);
                if (r) return r;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return a.from(e[Symbol.toPrimitive]("string"), t, n);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function u(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function h(e) {
                return u(e), o(e < 0 ? 0 : 0 | d(e));
              }
              function c(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | d(e.length), n = o(t), i = 0;
                  i < t;
                  i += 1
                )
                  n[i] = 255 & e[i];
                return n;
              }
              function d(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function p(e, t) {
                if (a.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || E(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var n = e.length,
                  i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === n) return 0;
                for (var r = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return n;
                    case "utf8":
                    case "utf-8":
                      return A(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * n;
                    case "hex":
                      return n >>> 1;
                    case "base64":
                      return T(e).length;
                    default:
                      if (r) return i ? -1 : A(e).length;
                      (t = ("" + t).toLowerCase()), (r = !0);
                  }
              }
              function m(e, t, n) {
                var r,
                  s,
                  o = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0 || (n >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, n) {
                        var i = e.length;
                        (!t || t < 0) && (t = 0),
                          (!n || n < 0 || n > i) && (n = i);
                        for (var r = "", s = t; s < n; ++s) r += R[e[s]];
                        return r;
                      })(this, t, n);
                    case "utf8":
                    case "utf-8":
                      return v(this, t, n);
                    case "ascii":
                      return (function (e, t, n) {
                        var i = "";
                        n = Math.min(e.length, n);
                        for (var r = t; r < n; ++r)
                          i += String.fromCharCode(127 & e[r]);
                        return i;
                      })(this, t, n);
                    case "latin1":
                    case "binary":
                      return (function (e, t, n) {
                        var i = "";
                        n = Math.min(e.length, n);
                        for (var r = t; r < n; ++r)
                          i += String.fromCharCode(e[r]);
                        return i;
                      })(this, t, n);
                    case "base64":
                      return (
                        (r = t),
                        (s = n),
                        0 === r && s === this.length
                          ? i.fromByteArray(this)
                          : i.fromByteArray(this.slice(r, s))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, n) {
                        for (
                          var i = e.slice(t, n), r = "", s = 0;
                          s < i.length;
                          s += 2
                        )
                          r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                        return r;
                      })(this, t, n);
                    default:
                      if (o) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (o = !0);
                  }
              }
              function f(e, t, n) {
                var i = e[t];
                (e[t] = e[n]), (e[n] = i);
              }
              function g(e, t, n, i, r) {
                var s;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof n
                    ? ((i = n), (n = 0))
                    : n > 2147483647
                    ? (n = 2147483647)
                    : n < -2147483648 && (n = -2147483648),
                  (s = n = +n) != s && (n = r ? 0 : e.length - 1),
                  n < 0 && (n = e.length + n),
                  n >= e.length)
                ) {
                  if (r) return -1;
                  n = e.length - 1;
                } else if (n < 0) {
                  if (!r) return -1;
                  n = 0;
                }
                if (("string" == typeof t && (t = a.from(t, i)), a.isBuffer(t)))
                  return 0 === t.length ? -1 : y(e, t, n, i, r);
                if ("number" == typeof t)
                  return ((t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? r
                      ? Uint8Array.prototype.indexOf.call(e, t, n)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                    : y(e, [t], n, i, r);
                throw TypeError("val must be string, number or Buffer");
              }
              function y(e, t, n, i, r) {
                var s,
                  o = 1,
                  a = e.length,
                  l = t.length;
                if (
                  void 0 !== i &&
                  ("ucs2" === (i = String(i).toLowerCase()) ||
                    "ucs-2" === i ||
                    "utf16le" === i ||
                    "utf-16le" === i)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (o = 2), (a /= 2), (l /= 2), (n /= 2);
                }
                function u(e, t) {
                  return 1 === o ? e[t] : e.readUInt16BE(t * o);
                }
                if (r) {
                  var h = -1;
                  for (s = n; s < a; s++)
                    if (u(e, s) === u(t, -1 === h ? 0 : s - h)) {
                      if ((-1 === h && (h = s), s - h + 1 === l)) return h * o;
                    } else -1 !== h && (s -= s - h), (h = -1);
                } else
                  for (n + l > a && (n = a - l), s = n; s >= 0; s--) {
                    for (var c = !0, d = 0; d < l; d++)
                      if (u(e, s + d) !== u(t, d)) {
                        c = !1;
                        break;
                      }
                    if (c) return s;
                  }
                return -1;
              }
              function v(e, t, n) {
                n = Math.min(e.length, n);
                for (var i = [], r = t; r < n; ) {
                  var s,
                    o,
                    a,
                    l,
                    u = e[r],
                    h = null,
                    c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (r + c <= n)
                    switch (c) {
                      case 1:
                        u < 128 && (h = u);
                        break;
                      case 2:
                        (192 & (s = e[r + 1])) == 128 &&
                          (l = ((31 & u) << 6) | (63 & s)) > 127 &&
                          (h = l);
                        break;
                      case 3:
                        (s = e[r + 1]),
                          (o = e[r + 2]),
                          (192 & s) == 128 &&
                            (192 & o) == 128 &&
                            (l =
                              ((15 & u) << 12) | ((63 & s) << 6) | (63 & o)) >
                              2047 &&
                            (l < 55296 || l > 57343) &&
                            (h = l);
                        break;
                      case 4:
                        (s = e[r + 1]),
                          (o = e[r + 2]),
                          (a = e[r + 3]),
                          (192 & s) == 128 &&
                            (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (l =
                              ((15 & u) << 18) |
                              ((63 & s) << 12) |
                              ((63 & o) << 6) |
                              (63 & a)) > 65535 &&
                            l < 1114112 &&
                            (h = l);
                    }
                  null === h
                    ? ((h = 65533), (c = 1))
                    : h > 65535 &&
                      ((h -= 65536),
                      i.push(((h >>> 10) & 1023) | 55296),
                      (h = 56320 | (1023 & h))),
                    i.push(h),
                    (r += c);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var n = "", i = 0; i < t; )
                    n += String.fromCharCode.apply(
                      String,
                      e.slice(i, (i += 4096))
                    );
                  return n;
                })(i);
              }
              function b(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > n)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function w(e, t, n, i, r, s) {
                if (!a.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > r || t < s)
                  throw RangeError('"value" argument is out of bounds');
                if (n + i > e.length) throw RangeError("Index out of range");
              }
              function S(e, t, n, i, r, s) {
                if (n + i > e.length || n < 0)
                  throw RangeError("Index out of range");
              }
              function k(e, t, n, i, s) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  s ||
                    S(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  r.write(e, t, n, i, 23, 4),
                  n + 4
                );
              }
              function x(e, t, n, i, s) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  s ||
                    S(
                      e,
                      t,
                      n,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  r.write(e, t, n, i, 52, 8),
                  n + 8
                );
              }
              (t.Buffer = a),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), a.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 2147483647),
                (a.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                a.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(a.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(a.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (a.poolSize = 8192),
                (a.from = function (e, t, n) {
                  return l(e, t, n);
                }),
                Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(a, Uint8Array),
                (a.alloc = function (e, t, n) {
                  return (u(e), e <= 0)
                    ? o(e)
                    : void 0 !== t
                    ? "string" == typeof n
                      ? o(e).fill(t, n)
                      : o(e).fill(t)
                    : o(e);
                }),
                (a.allocUnsafe = function (e) {
                  return h(e);
                }),
                (a.allocUnsafeSlow = function (e) {
                  return h(e);
                }),
                (a.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== a.prototype;
                }),
                (a.compare = function (e, t) {
                  if (
                    (E(e, Uint8Array) &&
                      (e = a.from(e, e.offset, e.byteLength)),
                    E(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                    !a.isBuffer(e) || !a.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var n = e.length, i = t.length, r = 0, s = Math.min(n, i);
                    r < s;
                    ++r
                  )
                    if (e[r] !== t[r]) {
                      (n = e[r]), (i = t[r]);
                      break;
                    }
                  return n < i ? -1 : i < n ? 1 : 0;
                }),
                (a.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (a.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return a.alloc(0);
                  if (void 0 === t)
                    for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                  var n,
                    i = a.allocUnsafe(t),
                    r = 0;
                  for (n = 0; n < e.length; ++n) {
                    var s = e[n];
                    if ((E(s, Uint8Array) && (s = a.from(s)), !a.isBuffer(s)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    s.copy(i, r), (r += s.length);
                  }
                  return i;
                }),
                (a.byteLength = p),
                (a.prototype._isBuffer = !0),
                (a.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) f(this, t, t + 1);
                  return this;
                }),
                (a.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    f(this, t, t + 3), f(this, t + 1, t + 2);
                  return this;
                }),
                (a.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    f(this, t, t + 7),
                      f(this, t + 1, t + 6),
                      f(this, t + 2, t + 5),
                      f(this, t + 3, t + 4);
                  return this;
                }),
                (a.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? v(this, 0, e)
                    : m.apply(this, arguments);
                }),
                (a.prototype.toLocaleString = a.prototype.toString),
                (a.prototype.equals = function (e) {
                  if (!a.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === a.compare(this, e);
                }),
                (a.prototype.inspect = function () {
                  var e = "",
                    n = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, n)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > n && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                s && (a.prototype[s] = a.prototype.inspect),
                (a.prototype.compare = function (e, t, n, i, r) {
                  if (
                    (E(e, Uint8Array) &&
                      (e = a.from(e, e.offset, e.byteLength)),
                    !a.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === n && (n = e ? e.length : 0),
                    void 0 === i && (i = 0),
                    void 0 === r && (r = this.length),
                    t < 0 || n > e.length || i < 0 || r > this.length)
                  )
                    throw RangeError("out of range index");
                  if (i >= r && t >= n) return 0;
                  if (i >= r) return -1;
                  if (t >= n) return 1;
                  if (
                    ((t >>>= 0), (n >>>= 0), (i >>>= 0), (r >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var s = r - i,
                      o = n - t,
                      l = Math.min(s, o),
                      u = this.slice(i, r),
                      h = e.slice(t, n),
                      c = 0;
                    c < l;
                    ++c
                  )
                    if (u[c] !== h[c]) {
                      (s = u[c]), (o = h[c]);
                      break;
                    }
                  return s < o ? -1 : o < s ? 1 : 0;
                }),
                (a.prototype.includes = function (e, t, n) {
                  return -1 !== this.indexOf(e, t, n);
                }),
                (a.prototype.indexOf = function (e, t, n) {
                  return g(this, e, t, n, !0);
                }),
                (a.prototype.lastIndexOf = function (e, t, n) {
                  return g(this, e, t, n, !1);
                }),
                (a.prototype.write = function (e, t, n, i) {
                  if (void 0 === t) (i = "utf8"), (n = this.length), (t = 0);
                  else if (void 0 === n && "string" == typeof t)
                    (i = t), (n = this.length), (t = 0);
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(n)
                        ? ((n >>>= 0), void 0 === i && (i = "utf8"))
                        : ((i = n), (n = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    h,
                    c,
                    d,
                    p,
                    m,
                    f,
                    g = this.length - t;
                  if (
                    ((void 0 === n || n > g) && (n = g),
                    (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  i || (i = "utf8");
                  for (var y = !1; ; )
                    switch (i) {
                      case "hex":
                        return (function (e, t, n, i) {
                          n = Number(n) || 0;
                          var r = e.length - n;
                          i ? (i = Number(i)) > r && (i = r) : (i = r);
                          var s = t.length;
                          i > s / 2 && (i = s / 2);
                          for (var o = 0; o < i; ++o) {
                            var a = parseInt(t.substr(2 * o, 2), 16);
                            if (a != a) break;
                            e[n + o] = a;
                          }
                          return o;
                        })(this, e, t, n);
                      case "utf8":
                      case "utf-8":
                        return (
                          (l = t), (u = n), _(A(e, this.length - l), this, l, u)
                        );
                      case "ascii":
                        return (h = t), (c = n), _(C(e), this, h, c);
                      case "latin1":
                      case "binary":
                        return (
                          (r = this),
                          (s = e),
                          (o = t),
                          (a = n),
                          _(C(s), r, o, a)
                        );
                      case "base64":
                        return (d = t), (p = n), _(T(e), this, d, p);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (m = t),
                          (f = n),
                          _(
                            (function (e, t) {
                              for (
                                var n, i, r = [], s = 0;
                                s < e.length && !((t -= 2) < 0);
                                ++s
                              )
                                (i = (n = e.charCodeAt(s)) >> 8),
                                  r.push(n % 256),
                                  r.push(i);
                              return r;
                            })(e, this.length - m),
                            this,
                            m,
                            f
                          )
                        );
                      default:
                        if (y) throw TypeError("Unknown encoding: " + i);
                        (i = ("" + i).toLowerCase()), (y = !0);
                    }
                }),
                (a.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (a.prototype.slice = function (e, t) {
                  var n = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? n : ~~t),
                    e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                    t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                    t < e && (t = e);
                  var i = this.subarray(e, t);
                  return Object.setPrototypeOf(i, a.prototype), i;
                }),
                (a.prototype.readUIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); )
                    i += this[e + s] * r;
                  return i;
                }),
                (a.prototype.readUIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
                    i += this[e + --t] * r;
                  return i;
                }),
                (a.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || b(e, 1, this.length), this[e];
                }),
                (a.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (a.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (a.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (a.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (a.prototype.readIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); )
                    i += this[e + s] * r;
                  return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i;
                }),
                (a.prototype.readIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (
                    var i = t, r = 1, s = this[e + --i];
                    i > 0 && (r *= 256);

                  )
                    s += this[e + --i] * r;
                  return s >= (r *= 128) && (s -= Math.pow(2, 8 * t)), s;
                }),
                (a.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || b(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (a.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || b(e, 2, this.length);
                  var n = this[e] | (this[e + 1] << 8);
                  return 32768 & n ? 4294901760 | n : n;
                }),
                (a.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || b(e, 2, this.length);
                  var n = this[e + 1] | (this[e] << 8);
                  return 32768 & n ? 4294901760 | n : n;
                }),
                (a.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (a.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (a.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    r.read(this, e, !0, 23, 4)
                  );
                }),
                (a.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    r.read(this, e, !1, 23, 4)
                  );
                }),
                (a.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 8, this.length),
                    r.read(this, e, !0, 52, 8)
                  );
                }),
                (a.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 8, this.length),
                    r.read(this, e, !1, 52, 8)
                  );
                }),
                (a.prototype.writeUIntLE = function (e, t, n, i) {
                  if (((e = +e), (t >>>= 0), (n >>>= 0), !i)) {
                    var r = Math.pow(2, 8 * n) - 1;
                    w(this, e, t, n, r, 0);
                  }
                  var s = 1,
                    o = 0;
                  for (this[t] = 255 & e; ++o < n && (s *= 256); )
                    this[t + o] = (e / s) & 255;
                  return t + n;
                }),
                (a.prototype.writeUIntBE = function (e, t, n, i) {
                  if (((e = +e), (t >>>= 0), (n >>>= 0), !i)) {
                    var r = Math.pow(2, 8 * n) - 1;
                    w(this, e, t, n, r, 0);
                  }
                  var s = n - 1,
                    o = 1;
                  for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                    this[t + s] = (e / o) & 255;
                  return t + n;
                }),
                (a.prototype.writeUInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeUInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (a.prototype.writeUInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (a.prototype.writeUInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 4, 4294967295, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeUInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 4, 4294967295, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeIntLE = function (e, t, n, i) {
                  if (((e = +e), (t >>>= 0), !i)) {
                    var r = Math.pow(2, 8 * n - 1);
                    w(this, e, t, n, r - 1, -r);
                  }
                  var s = 0,
                    o = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++s < n && (o *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                      (this[t + s] = (((e / o) >> 0) - a) & 255);
                  return t + n;
                }),
                (a.prototype.writeIntBE = function (e, t, n, i) {
                  if (((e = +e), (t >>>= 0), !i)) {
                    var r = Math.pow(2, 8 * n - 1);
                    w(this, e, t, n, r - 1, -r);
                  }
                  var s = n - 1,
                    o = 1,
                    a = 0;
                  for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                      (this[t + s] = (((e / o) >> 0) - a) & 255);
                  return t + n;
                }),
                (a.prototype.writeInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (a.prototype.writeInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (a.prototype.writeInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (a.prototype.writeInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || w(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeFloatLE = function (e, t, n) {
                  return k(this, e, t, !0, n);
                }),
                (a.prototype.writeFloatBE = function (e, t, n) {
                  return k(this, e, t, !1, n);
                }),
                (a.prototype.writeDoubleLE = function (e, t, n) {
                  return x(this, e, t, !0, n);
                }),
                (a.prototype.writeDoubleBE = function (e, t, n) {
                  return x(this, e, t, !1, n);
                }),
                (a.prototype.copy = function (e, t, n, i) {
                  if (!a.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (n || (n = 0),
                    i || 0 === i || (i = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    i > 0 && i < n && (i = n),
                    i === n || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (n < 0 || n >= this.length)
                    throw RangeError("Index out of range");
                  if (i < 0) throw RangeError("sourceEnd out of bounds");
                  i > this.length && (i = this.length),
                    e.length - t < i - n && (i = e.length - t + n);
                  var r = i - n;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, n, i);
                  else if (this === e && n < t && t < i)
                    for (var s = r - 1; s >= 0; --s) e[s + t] = this[s + n];
                  else Uint8Array.prototype.set.call(e, this.subarray(n, i), t);
                  return r;
                }),
                (a.prototype.fill = function (e, t, n, i) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((i = t), (t = 0), (n = this.length))
                        : "string" == typeof n && ((i = n), (n = this.length)),
                      void 0 !== i && "string" != typeof i)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof i && !a.isEncoding(i))
                      throw TypeError("Unknown encoding: " + i);
                    if (1 === e.length) {
                      var r,
                        s = e.charCodeAt(0);
                      (("utf8" === i && s < 128) || "latin1" === i) && (e = s);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < n)
                    throw RangeError("Out of range index");
                  if (n <= t) return this;
                  if (
                    ((t >>>= 0),
                    (n = void 0 === n ? this.length : n >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (r = t; r < n; ++r) this[r] = e;
                  else {
                    var o = a.isBuffer(e) ? e : a.from(e, i),
                      l = o.length;
                    if (0 === l)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (r = 0; r < n - t; ++r) this[r + t] = o[r % l];
                  }
                  return this;
                });
              var P = /[^+/0-9A-Za-z-_]/g;
              function A(e, t) {
                t = t || 1 / 0;
                for (var n, i = e.length, r = null, s = [], o = 0; o < i; ++o) {
                  if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                    if (!r) {
                      if (n > 56319 || o + 1 === i) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue;
                      }
                      r = n;
                      continue;
                    }
                    if (n < 56320) {
                      (t -= 3) > -1 && s.push(239, 191, 189), (r = n);
                      continue;
                    }
                    n = (((r - 55296) << 10) | (n - 56320)) + 65536;
                  } else r && (t -= 3) > -1 && s.push(239, 191, 189);
                  if (((r = null), n < 128)) {
                    if ((t -= 1) < 0) break;
                    s.push(n);
                  } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    s.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    s.push(
                      (n >> 12) | 224,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  } else if (n < 1114112) {
                    if ((t -= 4) < 0) break;
                    s.push(
                      (n >> 18) | 240,
                      ((n >> 12) & 63) | 128,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return s;
              }
              function C(e) {
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(255 & e.charCodeAt(n));
                return t;
              }
              function T(e) {
                return i.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(P, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function _(e, t, n, i) {
                for (
                  var r = 0;
                  r < i && !(r + n >= t.length) && !(r >= e.length);
                  ++r
                )
                  t[r + n] = e[r];
                return r;
              }
              function E(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var R = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), n = 0;
                  n < 16;
                  ++n
                )
                  for (var i = 16 * n, r = 0; r < 16; ++r)
                    t[i + r] = e[n] + e[r];
                return t;
              })();
            },
            783: function (e, t) {
              /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read =
                function (e, t, n, i, r) {
                  var s,
                    o,
                    a = 8 * r - i - 1,
                    l = (1 << a) - 1,
                    u = l >> 1,
                    h = -7,
                    c = n ? r - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + c];
                  for (
                    c += d, s = p & ((1 << -h) - 1), p >>= -h, h += a;
                    h > 0;
                    s = 256 * s + e[t + c], c += d, h -= 8
                  );
                  for (
                    o = s & ((1 << -h) - 1), s >>= -h, h += i;
                    h > 0;
                    o = 256 * o + e[t + c], c += d, h -= 8
                  );
                  if (0 === s) s = 1 - u;
                  else {
                    if (s === l) return o ? NaN : (1 / 0) * (p ? -1 : 1);
                    (o += Math.pow(2, i)), (s -= u);
                  }
                  return (p ? -1 : 1) * o * Math.pow(2, s - i);
                }),
                (t.write = function (e, t, n, i, r, s) {
                  var o,
                    a,
                    l,
                    u = 8 * s - r - 1,
                    h = (1 << u) - 1,
                    c = h >> 1,
                    d = 23 === r ? 5960464477539062e-23 : 0,
                    p = i ? 0 : s - 1,
                    m = i ? 1 : -1,
                    f = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((a = isNaN(t) ? 1 : 0), (o = h))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                        o + c >= 1
                          ? (t += d / l)
                          : (t += d * Math.pow(2, 1 - c)),
                        t * l >= 2 && (o++, (l /= 2)),
                        o + c >= h
                          ? ((a = 0), (o = h))
                          : o + c >= 1
                          ? ((a = (t * l - 1) * Math.pow(2, r)), (o += c))
                          : ((a = t * Math.pow(2, c - 1) * Math.pow(2, r)),
                            (o = 0)));
                    r >= 8;
                    e[n + p] = 255 & a, p += m, a /= 256, r -= 8
                  );
                  for (
                    o = (o << r) | a, u += r;
                    u > 0;
                    e[n + p] = 255 & o, p += m, o /= 256, u -= 8
                  );
                  e[n + p - m] |= 128 * f;
                });
            },
          },
          n = {};
        function i(e) {
          var r = n[e];
          if (void 0 !== r) return r.exports;
          var s = (n[e] = { exports: {} }),
            o = !0;
          try {
            t[e](s, s.exports, i), (o = !1);
          } finally {
            o && delete n[e];
          }
          return s.exports;
        }
        i.ab = "//";
        var r = i(72);
        e.exports = r;
      })();
    },
    55601: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let i = n(99920),
        r = n(80497),
        s = n(38173),
        o = i._(n(21241));
      function a(e) {
        let { props: t } = (0, r.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = s.Image;
    },
    64756: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return eo;
        },
        h4: function () {
          return er;
        },
        ck: function () {
          return ei;
        },
        fC: function () {
          return en;
        },
        xz: function () {
          return es;
        },
      });
      var i = n(2265),
        r = n(98324),
        s = n(76402),
        o = n(1584),
        a = n(78149),
        l = n(91715),
        u = n(25171),
        h = n(1336),
        c = n(31383),
        d = n(53201),
        p = n(57437),
        m = "Collapsible",
        [f, g] = (0, r.b)(m),
        [y, v] = f(m),
        b = i.forwardRef((e, t) => {
          let {
              __scopeCollapsible: n,
              open: r,
              defaultOpen: s,
              disabled: o,
              onOpenChange: a,
              ...h
            } = e,
            [c = !1, m] = (0, l.T)({ prop: r, defaultProp: s, onChange: a });
          return (0, p.jsx)(y, {
            scope: n,
            disabled: o,
            contentId: (0, d.M)(),
            open: c,
            onOpenToggle: i.useCallback(() => m((e) => !e), [m]),
            children: (0, p.jsx)(u.WV.div, {
              "data-state": A(c),
              "data-disabled": o ? "" : void 0,
              ...h,
              ref: t,
            }),
          });
        });
      b.displayName = m;
      var w = "CollapsibleTrigger",
        S = i.forwardRef((e, t) => {
          let { __scopeCollapsible: n, ...i } = e,
            r = v(w, n);
          return (0, p.jsx)(u.WV.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": A(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...i,
            ref: t,
            onClick: (0, a.M)(e.onClick, r.onOpenToggle),
          });
        });
      S.displayName = w;
      var k = "CollapsibleContent",
        x = i.forwardRef((e, t) => {
          let { forceMount: n, ...i } = e,
            r = v(k, e.__scopeCollapsible);
          return (0, p.jsx)(c.z, {
            present: n || r.open,
            children: (e) => {
              let { present: n } = e;
              return (0, p.jsx)(P, { ...i, ref: t, present: n });
            },
          });
        });
      x.displayName = k;
      var P = i.forwardRef((e, t) => {
        let { __scopeCollapsible: n, present: r, children: s, ...a } = e,
          l = v(k, n),
          [c, d] = i.useState(r),
          m = i.useRef(null),
          f = (0, o.e)(t, m),
          g = i.useRef(0),
          y = g.current,
          b = i.useRef(0),
          w = b.current,
          S = l.open || c,
          x = i.useRef(S),
          P = i.useRef();
        return (
          i.useEffect(() => {
            let e = requestAnimationFrame(() => (x.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, h.b)(() => {
            let e = m.current;
            if (e) {
              (P.current = P.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none");
              let t = e.getBoundingClientRect();
              (g.current = t.height),
                (b.current = t.width),
                x.current ||
                  ((e.style.transitionDuration = P.current.transitionDuration),
                  (e.style.animationName = P.current.animationName)),
                d(r);
            }
          }, [l.open, r]),
          (0, p.jsx)(u.WV.div, {
            "data-state": A(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            id: l.contentId,
            hidden: !S,
            ...a,
            ref: f,
            style: {
              "--radix-collapsible-content-height": y
                ? "".concat(y, "px")
                : void 0,
              "--radix-collapsible-content-width": w
                ? "".concat(w, "px")
                : void 0,
              ...e.style,
            },
            children: S && s,
          })
        );
      });
      function A(e) {
        return e ? "open" : "closed";
      }
      var C = n(87513),
        T = "Accordion",
        _ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, R, L] = (0, s.B)(T),
        [N, M] = (0, r.b)(T, [L, g]),
        D = g(),
        O = i.forwardRef((e, t) => {
          let { type: n, ...i } = e;
          return (0, p.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === n
                ? (0, p.jsx)(F, { ...i, ref: t })
                : (0, p.jsx)(U, { ...i, ref: t }),
          });
        });
      O.displayName = T;
      var [I, B] = N(T),
        [j, V] = N(T, { collapsible: !1 }),
        U = i.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: r,
              onValueChange: s = () => {},
              collapsible: o = !1,
              ...a
            } = e,
            [u, h] = (0, l.T)({ prop: n, defaultProp: r, onChange: s });
          return (0, p.jsx)(I, {
            scope: e.__scopeAccordion,
            value: u ? [u] : [],
            onItemOpen: h,
            onItemClose: i.useCallback(() => o && h(""), [o, h]),
            children: (0, p.jsx)(j, {
              scope: e.__scopeAccordion,
              collapsible: o,
              children: (0, p.jsx)(W, { ...a, ref: t }),
            }),
          });
        }),
        F = i.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: r,
              onValueChange: s = () => {},
              ...o
            } = e,
            [a = [], u] = (0, l.T)({ prop: n, defaultProp: r, onChange: s }),
            h = i.useCallback(
              (e) =>
                u(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return [...t, e];
                }),
              [u]
            ),
            c = i.useCallback(
              (e) =>
                u(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return t.filter((t) => t !== e);
                }),
              [u]
            );
          return (0, p.jsx)(I, {
            scope: e.__scopeAccordion,
            value: a,
            onItemOpen: h,
            onItemClose: c,
            children: (0, p.jsx)(j, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(W, { ...o, ref: t }),
            }),
          });
        }),
        [G, $] = N(T),
        W = i.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: r,
              dir: s,
              orientation: l = "vertical",
              ...h
            } = e,
            c = i.useRef(null),
            d = (0, o.e)(c, t),
            m = R(n),
            f = "ltr" === (0, C.gm)(s),
            g = (0, a.M)(e.onKeyDown, (e) => {
              var t;
              if (!_.includes(e.key)) return;
              let n = e.target,
                i = m().filter((e) => {
                  var t;
                  return !(null === (t = e.ref.current) || void 0 === t
                    ? void 0
                    : t.disabled);
                }),
                r = i.findIndex((e) => e.ref.current === n),
                s = i.length;
              if (-1 === r) return;
              e.preventDefault();
              let o = r,
                a = s - 1,
                u = () => {
                  (o = r + 1) > a && (o = 0);
                },
                h = () => {
                  (o = r - 1) < 0 && (o = a);
                };
              switch (e.key) {
                case "Home":
                  o = 0;
                  break;
                case "End":
                  o = a;
                  break;
                case "ArrowRight":
                  "horizontal" === l && (f ? u() : h());
                  break;
                case "ArrowDown":
                  "vertical" === l && u();
                  break;
                case "ArrowLeft":
                  "horizontal" === l && (f ? h() : u());
                  break;
                case "ArrowUp":
                  "vertical" === l && h();
              }
              null === (t = i[o % s].ref.current) || void 0 === t || t.focus();
            });
          return (0, p.jsx)(G, {
            scope: n,
            disabled: r,
            direction: s,
            orientation: l,
            children: (0, p.jsx)(E.Slot, {
              scope: n,
              children: (0, p.jsx)(u.WV.div, {
                ...h,
                "data-orientation": l,
                ref: d,
                onKeyDown: r ? void 0 : g,
              }),
            }),
          });
        }),
        z = "AccordionItem",
        [H, q] = N(z),
        Y = i.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: i, ...r } = e,
            s = $(z, n),
            o = B(z, n),
            a = D(n),
            l = (0, d.M)(),
            u = (i && o.value.includes(i)) || !1,
            h = s.disabled || e.disabled;
          return (0, p.jsx)(H, {
            scope: n,
            open: u,
            disabled: h,
            triggerId: l,
            children: (0, p.jsx)(b, {
              "data-orientation": s.orientation,
              "data-state": et(u),
              ...a,
              ...r,
              ref: t,
              disabled: h,
              open: u,
              onOpenChange: (e) => {
                e ? o.onItemOpen(i) : o.onItemClose(i);
              },
            }),
          });
        });
      Y.displayName = z;
      var K = "AccordionHeader",
        X = i.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            r = $(T, n),
            s = q(K, n);
          return (0, p.jsx)(u.WV.h3, {
            "data-orientation": r.orientation,
            "data-state": et(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...i,
            ref: t,
          });
        });
      X.displayName = K;
      var J = "AccordionTrigger",
        Z = i.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            r = $(T, n),
            s = q(J, n),
            o = V(J, n),
            a = D(n);
          return (0, p.jsx)(E.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(S, {
              "aria-disabled": (s.open && !o.collapsible) || void 0,
              "data-orientation": r.orientation,
              id: s.triggerId,
              ...a,
              ...i,
              ref: t,
            }),
          });
        });
      Z.displayName = J;
      var Q = "AccordionContent",
        ee = i.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...i } = e,
            r = $(T, n),
            s = q(Q, n),
            o = D(n);
          return (0, p.jsx)(x, {
            role: "region",
            "aria-labelledby": s.triggerId,
            "data-orientation": r.orientation,
            ...o,
            ...i,
            ref: t,
            style: {
              "--radix-accordion-content-height":
                "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width":
                "var(--radix-collapsible-content-width)",
              ...e.style,
            },
          });
        });
      function et(e) {
        return e ? "open" : "closed";
      }
      ee.displayName = Q;
      var en = O,
        ei = Y,
        er = X,
        es = Z,
        eo = ee;
    },
    92333: function (e, t, n) {
      "use strict";
      let i;
      function r(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      n.d(t, {
        E: function () {
          return sr;
        },
      });
      let s = (e) => Array.isArray(e);
      function o(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      function a(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function l(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, n) => {
              (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
            }),
          t
        );
      }
      function u(e, t, n, i) {
        if ("function" == typeof t) {
          let [r, s] = l(i);
          t = t(void 0 !== n ? n : e.custom, r, s);
        }
        if (
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [r, s] = l(i);
          t = t(void 0 !== n ? n : e.custom, r, s);
        }
        return t;
      }
      function h(e, t, n) {
        let i = e.getProps();
        return u(i, t, void 0 !== n ? n : i.custom, e);
      }
      let c = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...c],
        p = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        m = new Set(p),
        f = (e) => 1e3 * e,
        g = (e) => e / 1e3,
        y = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        v = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        b = { type: "keyframes", duration: 0.8 },
        w = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        S = (e, { keyframes: t }) =>
          t.length > 2
            ? b
            : m.has(e)
            ? e.startsWith("scale")
              ? v(t[1])
              : y
            : w;
      function k(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      let x = { skipAnimations: !1, useManualTiming: !1 },
        P = { current: !1 },
        A = (e) => null !== e;
      function C(e, { repeat: t, repeatType: n = "loop" }, i) {
        let r = e.filter(A),
          s = t && "loop" !== n && t % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== i ? i : r[s];
      }
      let T = (e) => e,
        _ = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function E(e, t) {
        let n = !1,
          i = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (n = !0),
          o = _.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  n = new Set(),
                  i = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(t) {
                  s.has(t) && (l.schedule(t), e()), t(o);
                }
                let l = {
                  schedule: (e, r = !1, o = !1) => {
                    let a = o && i ? t : n;
                    return r && s.add(e), a.has(e) || a.add(e), e;
                  },
                  cancel: (e) => {
                    n.delete(e), s.delete(e);
                  },
                  process: (e) => {
                    if (((o = e), i)) {
                      r = !0;
                      return;
                    }
                    (i = !0),
                      ([t, n] = [n, t]),
                      n.clear(),
                      t.forEach(a),
                      (i = !1),
                      r && ((r = !1), l.process(e));
                  },
                };
                return l;
              })(s)),
              e
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: c,
            postRender: d,
          } = o,
          p = () => {
            let s = x.useManualTiming ? r.timestamp : performance.now();
            (n = !1),
              (r.delta = i
                ? 1e3 / 60
                : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              a.process(r),
              l.process(r),
              u.process(r),
              h.process(r),
              c.process(r),
              d.process(r),
              (r.isProcessing = !1),
              n && t && ((i = !1), e(p));
          },
          m = () => {
            (n = !0), (i = !0), r.isProcessing || e(p);
          };
        return {
          schedule: _.reduce((e, t) => {
            let i = o[t];
            return (
              (e[t] = (e, t = !1, r = !1) => (n || m(), i.schedule(e, t, r))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < _.length; t++) o[_[t]].cancel(e);
          },
          state: r,
          steps: o,
        };
      }
      let {
          schedule: R,
          cancel: L,
          state: N,
          steps: M,
        } = E(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : T,
          !0
        ),
        D = (e, t, n) =>
          (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function O(e, t, n, i) {
        if (e === t && n === i) return T;
        let r = (t) =>
          (function (e, t, n, i, r) {
            let s, o;
            let a = 0;
            do (s = D((o = t + (n - t) / 2), i, r) - e) > 0 ? (n = o) : (t = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : D(r(e), t, i));
      }
      let I = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        B = (e) => (t) => 1 - e(1 - t),
        j = O(0.33, 1.53, 0.69, 0.99),
        V = B(j),
        U = I(V),
        F = (e) =>
          (e *= 2) < 1 ? 0.5 * V(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        G = (e) => 1 - Math.sin(Math.acos(e)),
        $ = B(G),
        W = I(G),
        z = (e) => /^0[^.\s]+$/u.test(e),
        H = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        q = (e) => (t) => "string" == typeof t && t.startsWith(e),
        Y = q("--"),
        K = q("var(--"),
        X = (e) => !!K(e) && J.test(e.split("/*")[0].trim()),
        J =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        Z = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        Q = (e, t, n) => (n > t ? t : n < e ? e : n),
        ee = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        et = { ...ee, transform: (e) => Q(0, 1, e) },
        en = { ...ee, default: 1 },
        ei = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        er = ei("deg"),
        es = ei("%"),
        eo = ei("px"),
        ea = ei("vh"),
        el = ei("vw"),
        eu = {
          ...es,
          parse: (e) => es.parse(e) / 100,
          transform: (e) => es.transform(100 * e),
        },
        eh = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ec = (e) => e === ee || e === eo,
        ed = (e, t) => parseFloat(e.split(", ")[t]),
        ep =
          (e, t) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/u);
            if (r) return ed(r[1], t);
            {
              let t = i.match(/^matrix\((.+)\)$/u);
              return t ? ed(t[1], e) : 0;
            }
          },
        em = new Set(["x", "y", "z"]),
        ef = p.filter((e) => !em.has(e)),
        eg = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: ep(4, 13),
          y: ep(5, 14),
        };
      (eg.translateX = eg.x), (eg.translateY = eg.y);
      let ey = (e) => (t) => t.test(e),
        ev = [
          ee,
          eo,
          es,
          er,
          el,
          ea,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        eb = (e) => ev.find(ey(e)),
        ew = new Set(),
        eS = !1,
        ek = !1;
      function ex() {
        if (ek) {
          let e = Array.from(ew).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            n = new Map();
          t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                ef.forEach((n) => {
                  let i = e.getValue(n);
                  void 0 !== i &&
                    (t.push([n, i.get()]),
                    i.set(n.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (n.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = n.get(e);
              t &&
                t.forEach(([t, n]) => {
                  var i;
                  null === (i = e.getValue(t)) || void 0 === i || i.set(n);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (ek = !1), (eS = !1), ew.forEach((e) => e.complete()), ew.clear();
      }
      function eP() {
        ew.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (ek = !0);
        });
      }
      class eA {
        constructor(e, t, n, i, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (ew.add(this),
                eS || ((eS = !0), R.read(eP), R.resolveKeyframes(ex)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: i,
          } = this;
          for (let r = 0; r < e.length; r++)
            if (null === e[r]) {
              if (0 === r) {
                let r = null == i ? void 0 : i.get(),
                  s = e[e.length - 1];
                if (void 0 !== r) e[0] = r;
                else if (n && t) {
                  let i = n.readValue(t, s);
                  null != i && (e[0] = i);
                }
                void 0 === e[0] && (e[0] = s), i && void 0 === r && i.set(e[0]);
              } else e[r] = e[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            ew.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), ew.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eC = (e) => Math.round(1e5 * e) / 1e5,
        eT = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        e_ =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        eE = (e, t) => (n) =>
          !!(
            ("string" == typeof n && e_.test(n) && n.startsWith(e)) ||
            (t && null != n && Object.prototype.hasOwnProperty.call(n, t))
          ),
        eR = (e, t, n) => (i) => {
          if ("string" != typeof i) return i;
          let [r, s, o, a] = i.match(eT);
          return {
            [e]: parseFloat(r),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eL = (e) => Q(0, 255, e),
        eN = { ...ee, transform: (e) => Math.round(eL(e)) },
        eM = {
          test: eE("rgb", "red"),
          parse: eR("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            eN.transform(e) +
            ", " +
            eN.transform(t) +
            ", " +
            eN.transform(n) +
            ", " +
            eC(et.transform(i)) +
            ")",
        },
        eD = {
          test: eE("#"),
          parse: function (e) {
            let t = "",
              n = "",
              i = "",
              r = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (i = e.substring(5, 7)),
                  (r = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (i = e.substring(3, 4)),
                  (r = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (i += i),
                  (r += r)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(i, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: eM.transform,
        },
        eO = {
          test: eE("hsl", "hue"),
          parse: eR("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            es.transform(eC(t)) +
            ", " +
            es.transform(eC(n)) +
            ", " +
            eC(et.transform(i)) +
            ")",
        },
        eI = {
          test: (e) => eM.test(e) || eD.test(e) || eO.test(e),
          parse: (e) =>
            eM.test(e) ? eM.parse(e) : eO.test(e) ? eO.parse(e) : eD.parse(e),
          transform: (e) =>
            "string" == typeof e
              ? e
              : e.hasOwnProperty("red")
              ? eM.transform(e)
              : eO.transform(e),
        },
        eB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        ej = "number",
        eV = "color",
        eU =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eF(e) {
        let t = e.toString(),
          n = [],
          i = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = t
            .replace(
              eU,
              (e) => (
                eI.test(e)
                  ? (i.color.push(s), r.push(eV), n.push(eI.parse(e)))
                  : e.startsWith("var(")
                  ? (i.var.push(s), r.push("var"), n.push(e))
                  : (i.number.push(s), r.push(ej), n.push(parseFloat(e))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: o, indexes: i, types: r };
      }
      function eG(e) {
        return eF(e).values;
      }
      function e$(e) {
        let { split: t, types: n } = eF(e),
          i = t.length;
        return (e) => {
          let r = "";
          for (let s = 0; s < i; s++)
            if (((r += t[s]), void 0 !== e[s])) {
              let t = n[s];
              t === ej
                ? (r += eC(e[s]))
                : t === eV
                ? (r += eI.transform(e[s]))
                : (r += e[s]);
            }
          return r;
        };
      }
      let eW = (e) => ("number" == typeof e ? 0 : e),
        ez = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(eT)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(eB)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: eG,
          createTransformer: e$,
          getAnimatableNone: function (e) {
            let t = eG(e);
            return e$(e)(t.map(eW));
          },
        },
        eH = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eq(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [i] = n.match(eT) || [];
        if (!i) return e;
        let r = n.replace(i, ""),
          s = eH.has(t) ? 1 : 0;
        return i !== n && (s *= 100), t + "(" + s + r + ")";
      }
      let eY = /\b([a-z-]*)\(.*?\)/gu,
        eK = {
          ...ez,
          getAnimatableNone: (e) => {
            let t = e.match(eY);
            return t ? t.map(eq).join(" ") : e;
          },
        },
        eX = { ...ee, transform: Math.round },
        eJ = {
          borderWidth: eo,
          borderTopWidth: eo,
          borderRightWidth: eo,
          borderBottomWidth: eo,
          borderLeftWidth: eo,
          borderRadius: eo,
          radius: eo,
          borderTopLeftRadius: eo,
          borderTopRightRadius: eo,
          borderBottomRightRadius: eo,
          borderBottomLeftRadius: eo,
          width: eo,
          maxWidth: eo,
          height: eo,
          maxHeight: eo,
          top: eo,
          right: eo,
          bottom: eo,
          left: eo,
          padding: eo,
          paddingTop: eo,
          paddingRight: eo,
          paddingBottom: eo,
          paddingLeft: eo,
          margin: eo,
          marginTop: eo,
          marginRight: eo,
          marginBottom: eo,
          marginLeft: eo,
          backgroundPositionX: eo,
          backgroundPositionY: eo,
          rotate: er,
          rotateX: er,
          rotateY: er,
          rotateZ: er,
          scale: en,
          scaleX: en,
          scaleY: en,
          scaleZ: en,
          skew: er,
          skewX: er,
          skewY: er,
          distance: eo,
          translateX: eo,
          translateY: eo,
          translateZ: eo,
          x: eo,
          y: eo,
          z: eo,
          perspective: eo,
          transformPerspective: eo,
          opacity: et,
          originX: eu,
          originY: eu,
          originZ: eo,
          zIndex: eX,
          size: eo,
          fillOpacity: et,
          strokeOpacity: et,
          numOctaves: eX,
        },
        eZ = {
          ...eJ,
          color: eI,
          backgroundColor: eI,
          outlineColor: eI,
          fill: eI,
          stroke: eI,
          borderColor: eI,
          borderTopColor: eI,
          borderRightColor: eI,
          borderBottomColor: eI,
          borderLeftColor: eI,
          filter: eK,
          WebkitFilter: eK,
        },
        eQ = (e) => eZ[e];
      function e0(e, t) {
        let n = eQ(e);
        return (
          n !== eK && (n = ez),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      let e1 = new Set(["auto", "none", "0"]);
      class e2 extends eA {
        constructor(e, t, n, i, r) {
          super(e, t, n, i, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if ("string" == typeof i && X((i = i.trim()))) {
              let r = (function e(t, n, i = 1) {
                T(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (e) {
                  let t = Z.exec(e);
                  if (!t) return [,];
                  let [, n, i, r] = t;
                  return [`--${null != n ? n : i}`, r];
                })(t);
                if (!r) return;
                let o = window.getComputedStyle(n).getPropertyValue(r);
                if (o) {
                  let e = o.trim();
                  return H(e) ? parseFloat(e) : e;
                }
                return X(s) ? e(s, n, i + 1) : s;
              })(i, t.current);
              void 0 !== r && (e[n] = r),
                n === e.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !eh.has(n) || 2 !== e.length))
            return;
          let [i, r] = e,
            s = eb(i),
            o = eb(r);
          if (s !== o) {
            if (ec(s) && ec(o))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                "string" == typeof n && (e[t] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ("number" == typeof (i = e[t])
              ? 0 === i
              : null === i || "none" === i || "0" === i || z(i)) && n.push(t);
          }
          n.length &&
            (function (e, t, n) {
              let i,
                r = 0;
              for (; r < e.length && !i; ) {
                let t = e[r];
                "string" == typeof t &&
                  !e1.has(t) &&
                  eF(t).values.length &&
                  (i = e[r]),
                  r++;
              }
              if (i && n) for (let r of t) e[r] = e0(n, i);
            })(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eg[n](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let i = t[t.length - 1];
          void 0 !== i && e.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: n, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let r = t.getValue(n);
          r && r.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            o = i[s];
          (i[s] = eg[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, n]) => {
                t.getValue(e).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function e5(e) {
        return "function" == typeof e;
      }
      function e8() {
        i = void 0;
      }
      let e4 = {
          now: () => (
            void 0 === i &&
              e4.set(
                N.isProcessing || x.useManualTiming
                  ? N.timestamp
                  : performance.now()
              ),
            i
          ),
          set: (e) => {
            (i = e), queueMicrotask(e8);
          },
        },
        e3 = (e, t) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (ez.test(e) || "0" === e) &&
              !e.startsWith("url("))
          );
      class e6 {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = e4.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: i,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eP(), ex()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = e4.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: i,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, n, i) {
              let r = e[0];
              if (null === r) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let s = e[e.length - 1],
                o = e3(r, t),
                a = e3(s, t);
              return (
                T(
                  o === a,
                  `You are trying to animate ${t} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let n = 0; n < e.length; n++)
                      if (e[n] !== t) return !0;
                  })(e) ||
                    (("spring" === n || e5(n)) && i))
              );
            })(e, n, i, r)
          ) {
            if (P.current || !s) {
              null == a || a(C(e, this.options, t)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      let e7 = (e, t, n) => {
          let i = t - e;
          return 0 === i ? 1 : (n - e) / i;
        },
        e9 = (e, t, n = 10) => {
          let i = "",
            r = Math.max(Math.round(t / n), 2);
          for (let t = 0; t < r; t++) i += e(e7(0, r - 1, t)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function te(e, t, n) {
        var i, r;
        let s = Math.max(t - 5, 0);
        return (i = n - e(s)), (r = t - s) ? (1e3 / r) * i : 0;
      }
      let tt = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function tn(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      function ti(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let tr = ["duration", "bounce"],
        ts = ["stiffness", "damping", "mass"];
      function to(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function ta(e = tt.visualDuration, t = tt.bounce) {
        let n;
        let i =
            "object" != typeof e
              ? { visualDuration: e, keyframes: [0, 1], bounce: t }
              : e,
          { restSpeed: r, restDelta: s } = i,
          o = i.keyframes[0],
          a = i.keyframes[i.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (e) {
            let t = {
              velocity: tt.velocity,
              stiffness: tt.stiffness,
              damping: tt.damping,
              mass: tt.mass,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!to(e, ts) && to(e, tr)) {
              if (e.visualDuration) {
                let n = (2 * Math.PI) / (1.2 * e.visualDuration),
                  i = n * n,
                  r = 2 * Q(0.05, 1, 1 - e.bounce) * Math.sqrt(i);
                t = { ...t, mass: tt.mass, stiffness: i, damping: r };
              } else {
                let n = (function ({
                  duration: e = tt.duration,
                  bounce: t = tt.bounce,
                  velocity: n = tt.velocity,
                  mass: i = tt.mass,
                }) {
                  let r, s;
                  T(
                    e <= f(tt.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - t;
                  (o = Q(tt.minDamping, tt.maxDamping, o)),
                    (e = Q(tt.minDuration, tt.maxDuration, g(e))),
                    o < 1
                      ? ((r = (t) => {
                          let i = t * o,
                            r = i * e;
                          return 0.001 - ((i - n) / tn(t, o)) * Math.exp(-r);
                        }),
                        (s = (t) => {
                          let i = t * o * e,
                            s = Math.pow(o, 2) * Math.pow(t, 2) * e,
                            a = tn(Math.pow(t, 2), o);
                          return (
                            ((i * n + n - s) *
                              Math.exp(-i) *
                              (-r(t) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((r = (t) =>
                          -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                        (s = (t) => e * e * (n - t) * Math.exp(-t * e)));
                  let a = (function (e, t, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= e(i) / t(i);
                    return i;
                  })(r, s, 5 / e);
                  if (((e = f(e)), isNaN(a)))
                    return {
                      stiffness: tt.stiffness,
                      damping: tt.damping,
                      duration: e,
                    };
                  {
                    let t = Math.pow(a, 2) * i;
                    return {
                      stiffness: t,
                      damping: 2 * o * Math.sqrt(i * t),
                      duration: e,
                    };
                  }
                })(e);
                (t = { ...t, ...n, mass: tt.mass }).isResolvedFromDuration = !0;
              }
            }
            return t;
          })({ ...i, velocity: -g(i.velocity || 0) }),
          y = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          b = a - o,
          w = g(Math.sqrt(u / c)),
          S = 5 > Math.abs(b);
        if (
          (r || (r = S ? tt.restSpeed.granular : tt.restSpeed.default),
          s || (s = S ? tt.restDelta.granular : tt.restDelta.default),
          v < 1)
        ) {
          let e = tn(w, v);
          n = (t) =>
            a -
            Math.exp(-v * w * t) *
              (((y + v * w * b) / e) * Math.sin(e * t) + b * Math.cos(e * t));
        } else if (1 === v)
          n = (e) => a - Math.exp(-w * e) * (b + (y + w * b) * e);
        else {
          let e = w * Math.sqrt(v * v - 1);
          n = (t) => {
            let n = Math.exp(-v * w * t),
              i = Math.min(e * t, 300);
            return (
              a -
              (n * ((y + v * w * b) * Math.sinh(i) + e * b * Math.cosh(i))) / e
            );
          };
        }
        let k = {
          calculatedDuration: (m && d) || null,
          next: (e) => {
            let t = n(e);
            if (m) l.done = e >= d;
            else {
              let i = 0;
              v < 1 && (i = 0 === e ? f(y) : te(n, e, t));
              let o = Math.abs(i) <= r,
                u = Math.abs(a - t) <= s;
              l.done = o && u;
            }
            return (l.value = l.done ? a : t), l;
          },
          toString: () => {
            let e = Math.min(ti(k), 2e4),
              t = e9((t) => k.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
        };
        return k;
      }
      function tl({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = e[0],
          m = { done: !1, value: p },
          f = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          g = (e) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - e) < Math.abs(l - e)
              ? a
              : l,
          y = n * t,
          v = p + y,
          b = void 0 === o ? v : o(v);
        b !== v && (y = b - p);
        let w = (e) => -y * Math.exp(-e / i),
          S = (e) => b + w(e),
          k = (e) => {
            let t = w(e),
              n = S(e);
            (m.done = Math.abs(t) <= u), (m.value = m.done ? b : n);
          },
          x = (e) => {
            f(m.value) &&
              ((c = e),
              (d = ta({
                keyframes: [m.value, g(m.value)],
                velocity: te(S, e, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          x(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (d || void 0 !== c || ((t = !0), k(e), x(e)),
              void 0 !== c && e >= c)
                ? d.next(e - c)
                : (t || k(e), m);
            },
          }
        );
      }
      let tu = O(0.42, 0, 1, 1),
        th = O(0, 0, 0.58, 1),
        tc = O(0.42, 0, 0.58, 1),
        td = (e) => Array.isArray(e) && "number" != typeof e[0],
        tp = (e) => Array.isArray(e) && "number" == typeof e[0],
        tm = {
          linear: T,
          easeIn: tu,
          easeInOut: tc,
          easeOut: th,
          circIn: G,
          circInOut: W,
          circOut: $,
          backIn: V,
          backInOut: U,
          backOut: j,
          anticipate: F,
        },
        tf = (e) => {
          if (tp(e)) {
            T(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, n, i, r] = e;
            return O(t, n, i, r);
          }
          return "string" == typeof e
            ? (T(void 0 !== tm[e], `Invalid easing type '${e}'`), tm[e])
            : e;
        },
        tg = (e, t) => (n) => t(e(n)),
        ty = (...e) => e.reduce(tg),
        tv = (e, t, n) => e + (t - e) * n;
      function tb(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      function tw(e, t) {
        return (n) => (n > 0 ? t : e);
      }
      let tS = (e, t, n) => {
          let i = e * e,
            r = n * (t * t - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        tk = [eD, eM, eO],
        tx = (e) => tk.find((t) => t.test(e));
      function tP(e) {
        let t = tx(e);
        if (
          (T(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let n = t.parse(e);
        return (
          t === eO &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: i }) {
              (e /= 360), (n /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((t /= 100)) {
                let i = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  a = 2 * n - i;
                (r = tb(a, i, e + 1 / 3)),
                  (s = tb(a, i, e)),
                  (o = tb(a, i, e - 1 / 3));
              } else r = s = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let tA = (e, t) => {
          let n = tP(e),
            i = tP(t);
          if (!n || !i) return tw(e, t);
          let r = { ...n };
          return (e) => (
            (r.red = tS(n.red, i.red, e)),
            (r.green = tS(n.green, i.green, e)),
            (r.blue = tS(n.blue, i.blue, e)),
            (r.alpha = tv(n.alpha, i.alpha, e)),
            eM.transform(r)
          );
        },
        tC = new Set(["none", "hidden"]);
      function tT(e, t) {
        return (n) => tv(e, t, n);
      }
      function t_(e) {
        return "number" == typeof e
          ? tT
          : "string" == typeof e
          ? X(e)
            ? tw
            : eI.test(e)
            ? tA
            : tL
          : Array.isArray(e)
          ? tE
          : "object" == typeof e
          ? eI.test(e)
            ? tA
            : tR
          : tw;
      }
      function tE(e, t) {
        let n = [...e],
          i = n.length,
          r = e.map((e, n) => t_(e)(e, t[n]));
        return (e) => {
          for (let t = 0; t < i; t++) n[t] = r[t](e);
          return n;
        };
      }
      function tR(e, t) {
        let n = { ...e, ...t },
          i = {};
        for (let r in n)
          void 0 !== e[r] && void 0 !== t[r] && (i[r] = t_(e[r])(e[r], t[r]));
        return (e) => {
          for (let t in i) n[t] = i[t](e);
          return n;
        };
      }
      let tL = (e, t) => {
        let n = ez.createTransformer(t),
          i = eF(e),
          r = eF(t);
        return i.indexes.var.length === r.indexes.var.length &&
          i.indexes.color.length === r.indexes.color.length &&
          i.indexes.number.length >= r.indexes.number.length
          ? (tC.has(e) && !r.values.length) || (tC.has(t) && !i.values.length)
            ? tC.has(e)
              ? (n) => (n <= 0 ? e : t)
              : (n) => (n >= 1 ? t : e)
            : ty(
                tE(
                  (function (e, t) {
                    var n;
                    let i = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < t.values.length; s++) {
                      let o = t.types[s],
                        a = e.indexes[o][r[o]],
                        l = null !== (n = e.values[a]) && void 0 !== n ? n : 0;
                      (i[s] = l), r[o]++;
                    }
                    return i;
                  })(i, r),
                  r.values
                ),
                n
              )
          : (T(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            tw(e, t));
      };
      function tN(e, t, n) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof n
          ? tv(e, t, n)
          : t_(e)(e, t);
      }
      function tM({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = td(i) ? i.map(tf) : tf(i),
          s = { done: !1, value: t[0] },
          o = (function (e, t, { clamp: n = !0, ease: i, mixer: r } = {}) {
            let s = e.length;
            if (
              (T(
                s === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => t[0];
            if (2 === s && e[0] === e[1]) return () => t[1];
            e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let o = (function (e, t, n) {
                let i = [],
                  r = n || tN,
                  s = e.length - 1;
                for (let n = 0; n < s; n++) {
                  let s = r(e[n], e[n + 1]);
                  t && (s = ty(Array.isArray(t) ? t[n] || T : t, s)), i.push(s);
                }
                return i;
              })(t, i, r),
              a = o.length,
              l = (t) => {
                let n = 0;
                if (a > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                let i = e7(e[n], e[n + 1], t);
                return o[n](i);
              };
            return n ? (t) => l(Q(e[0], e[s - 1], t)) : l;
          })(
            (n && n.length === t.length
              ? n
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let n = e[e.length - 1];
                      for (let i = 1; i <= t; i++) {
                        let r = e7(0, t, i);
                        e.push(tv(n, 1, r));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(r)
                ? r
                : t.map(() => r || tc).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((s.value = o(t)), (s.done = t >= e), s),
        };
      }
      let tD = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => R.update(t, !0),
            stop: () => L(t),
            now: () => (N.isProcessing ? N.timestamp : e4.now()),
          };
        },
        tO = { decay: tl, inertia: tl, tween: tM, keyframes: tM, spring: ta },
        tI = (e) => e / 100;
      class tB extends e6 {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: n,
              element: i,
              keyframes: r,
            } = this.options,
            s = (null == i ? void 0 : i.KeyframeResolver) || eA;
          (this.resolver = new s(
            r,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n,
            i
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(e) {
          let t, n;
          let {
              type: i = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = e5(i) ? i : tO[i] || tM;
          l !== tM &&
            "number" != typeof e[0] &&
            ((t = ty(tI, tN(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === o &&
            (n = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = ti(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: t,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = n;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let v = this.currentTime,
            b = r;
          if (d) {
            let e = Math.min(this.currentTime, u) / h,
              t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1),
              1 === n && t--,
              (t = Math.min(t, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((n = 1 - n), m && (n -= m / h))
                  : "mirror" === p && (b = s)),
              (v = Q(0, 1, n) * h);
          }
          let w = y ? { done: !1, value: a[0] } : b.next(v);
          o && (w.value = o(w.value));
          let { done: S } = w;
          y ||
            null === l ||
            (S =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            k && void 0 !== i && (w.value = C(a, this.options, i)),
            f && f(w.value),
            k && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? g(e.calculatedDuration) : 0;
        }
        get time() {
          return g(this.currentTime);
        }
        set time(e) {
          (e = f(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e), t && (this.time = g(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = tD, onPlay: t, startTime: n } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = i)
            : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let tj = new Set(["opacity", "clipPath", "filter", "transform"]);
      function tV(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let tU = { linearEasing: void 0 },
        tF = (function (e, t) {
          let n = tV(e);
          return () => {
            var e;
            return null !== (e = tU[t]) && void 0 !== e ? e : n();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        tG = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
        t$ = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tG([0, 0.65, 0.55, 1]),
          circOut: tG([0.55, 0, 1, 0.45]),
          backIn: tG([0.31, 0.01, 0.66, -0.59]),
          backOut: tG([0.33, 1.53, 0.69, 0.99]),
        };
      function tW(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let tz = tV(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tH = { anticipate: F, backInOut: U, circInOut: W };
      class tq extends e6 {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: n,
            element: i,
            keyframes: r,
          } = this.options;
          (this.resolver = new e2(
            r,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var n, i;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            ("string" == typeof o && tF() && o in tH && (o = tH[o]),
            e5((i = this.options).type) ||
              "spring" === i.type ||
              !(function e(t) {
                return !!(
                  ("function" == typeof t && tF()) ||
                  !t ||
                  ("string" == typeof t && (t in t$ || tF())) ||
                  tp(t) ||
                  (Array.isArray(t) && t.every(e))
                );
              })(i.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: n,
                motionValue: i,
                element: l,
                ...u
              } = this.options,
              h = (function (e, t) {
                let n = new tB({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: e[0] },
                  r = [],
                  s = 0;
                for (; !i.done && s < 2e4; )
                  r.push((i = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(e, u);
            1 === (e = h.keyframes).length && (e[1] = e[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            e,
            t,
            n,
            {
              delay: i = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [t]: n };
            l && (u.offset = l);
            let h = (function e(t, n) {
              if (t)
                return "function" == typeof t && tF()
                  ? e9(t, n)
                  : tp(t)
                  ? tG(t)
                  : Array.isArray(t)
                  ? t.map((t) => e(t, n) || t$.easeOut)
                  : t$[t];
            })(a, r);
            return (
              Array.isArray(h) && (u.easing = h),
              e.animate(u, {
                delay: i,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (tW(c, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(C(e, this.options, t)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return g(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return g(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.currentTime = f(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return T;
            let { animation: n } = t;
            tW(n, e);
          } else this.pendingTimeline = e;
          return T;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: n,
            duration: i,
            type: r,
            ease: s,
            times: o,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new tB({
                ...u,
                keyframes: n,
                duration: i,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              c = f(this.time);
            e.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: n,
            repeatDelay: i,
            repeatType: r,
            damping: s,
            type: o,
          } = e;
          return (
            tz() &&
            n &&
            tj.has(n) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !i &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let tY = tV(() => void 0 !== window.ScrollTimeline);
      class tK {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e, t) {
          let n = this.animations.map((n) =>
            tY() && n.attachTimeline ? n.attachTimeline(e) : t(n)
          );
          return () => {
            n.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tX =
          (e, t, n, i = {}, r, s) =>
          (o) => {
            let a = k(i, e) || {},
              l = a.delay || i.delay || 0,
              { elapsed: u = 0 } = i;
            u -= f(l);
            let h = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (e) => {
                t.set(e), a.onUpdate && a.onUpdate(e);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: e,
              motionValue: t,
              element: s ? void 0 : r,
            };
            !(function ({
              when: e,
              delay: t,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...S(e, h) }),
              h.duration && (h.duration = f(h.duration)),
              h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let c = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (c = !0)),
              (P.current || x.skipAnimations) &&
                ((c = !0), (h.duration = 0), (h.delay = 0)),
              c && !s && void 0 !== t.get())
            ) {
              let e = C(h.keyframes, a);
              if (void 0 !== e)
                return (
                  R.update(() => {
                    h.onUpdate(e), h.onComplete();
                  }),
                  new tK([])
                );
            }
            return !s && tq.supports(h) ? new tq(h) : new tB(h);
          },
        tJ = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        tZ = (e) => (s(e) ? e[e.length - 1] || 0 : e);
      function tQ(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function t0(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class t1 {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return tQ(this.subscriptions, e), () => t0(this.subscriptions, e);
        }
        notify(e, t, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, t, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let t2 = (e) => !isNaN(parseFloat(e)),
        t5 = { current: void 0 };
      class t8 {
        constructor(e, t = {}) {
          (this.version = "11.13.5"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let n = e4.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = e4.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = t2(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new t1());
          let n = this.events[e].add(t);
          return "change" === e
            ? () => {
                n(),
                  R.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return t5.current && t5.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = e4.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let n = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            n ? (1e3 / n) * e : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function t4(e, t) {
        return new t8(e, t);
      }
      let t3 = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        t6 = "data-" + t3("framerAppearId"),
        t7 = (e) => !!(e && e.getVelocity);
      function t9(e, t) {
        let n = e.getValue("willChange");
        if (t7(n) && n.add) return n.add(t);
      }
      function ne(e, t, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        var s;
        let {
          transition: o = e.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = t;
        i && (o = i);
        let u = [],
          c = r && e.animationState && e.animationState.getState()[r];
        for (let t in l) {
          let i = e.getValue(
              t,
              null !== (s = e.latestValues[t]) && void 0 !== s ? s : null
            ),
            r = l[t];
          if (
            void 0 === r ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let i = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), i;
              })(c, t))
          )
            continue;
          let a = { delay: n, ...k(o || {}, t) },
            h = !1;
          if (window.MotionHandoffAnimation) {
            let n = e.props[t6];
            if (n) {
              let e = window.MotionHandoffAnimation(n, t, R);
              null !== e && ((a.startTime = e), (h = !0));
            }
          }
          t9(e, t),
            i.start(
              tX(
                t,
                i,
                r,
                e.shouldReduceMotion && m.has(t) ? { type: !1 } : a,
                e,
                h
              )
            );
          let d = i.animation;
          d && u.push(d);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              R.update(() => {
                a &&
                  (function (e, t) {
                    let {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...r
                    } = h(e, t) || {};
                    for (let t in (r = { ...r, ...n })) {
                      let n = tZ(r[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(n)
                        : e.addValue(t, t4(n));
                    }
                  })(e, a);
              });
            }),
          u
        );
      }
      function nt(e, t, n = {}) {
        var i;
        let r = h(
            e,
            t,
            "exit" === n.type
              ? null === (i = e.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: s = e.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (s = n.transitionOverride);
        let o = r ? () => Promise.all(ne(e, r, n)) : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (e, t, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (e.variantChildren.size - 1) * i,
                      l = 1 === r ? (e = 0) => e * i : (e = 0) => a - e * i;
                    return (
                      Array.from(e.variantChildren)
                        .sort(nn)
                        .forEach((e, i) => {
                          e.notify("AnimationStart", t),
                            o.push(
                              nt(e, t, { ...s, delay: n + l(i) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, r + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(n.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [o, a] : [a, o];
          return e().then(() => t());
        }
      }
      function nn(e, t) {
        return e.sortNodePosition(t);
      }
      let ni = d.length,
        nr = [...c].reverse(),
        ns = c.length;
      function no(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function na() {
        return {
          animate: no(!0),
          whileInView: no(),
          whileHover: no(),
          whileTap: no(),
          whileDrag: no(),
          whileFocus: no(),
          exit: no(),
        };
      }
      class nl {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class nu extends nl {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (function (e, t, n = {}) {
                          let i;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            i = Promise.all(t.map((t) => nt(e, t, n)));
                          else if ("string" == typeof t) i = nt(e, t, n);
                          else {
                            let r =
                              "function" == typeof t ? h(e, t, n.custom) : t;
                            i = Promise.all(ne(e, r, n));
                          }
                          return i.then(() => {
                            e.notify("AnimationComplete", t);
                          });
                        })(e, t, n)
                      )
                    ),
                  n = na(),
                  i = !0,
                  l = (t) => (n, i) => {
                    var r;
                    let s = h(
                      e,
                      i,
                      "exit" === t
                        ? null === (r = e.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: e, transitionEnd: t, ...i } = s;
                      n = { ...n, ...i, ...t };
                    }
                    return n;
                  };
                function u(u) {
                  let { props: h } = e,
                    c =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let n = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (n.initial = t.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let e = 0; e < ni; e++) {
                          let i = d[e],
                            r = t.props[i];
                          (a(r) || !1 === r) && (n[i] = r);
                        }
                        return n;
                      })(e.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    g = 1 / 0;
                  for (let t = 0; t < ns; t++) {
                    var y;
                    let d = nr[t],
                      v = n[d],
                      b = void 0 !== h[d] ? h[d] : c[d],
                      w = a(b),
                      S = d === u ? v.isActive : null;
                    !1 === S && (g = t);
                    let k = b === c[d] && b !== h[d] && w;
                    if (
                      (k && i && e.manuallyAnimateOnMount && (k = !1),
                      (v.protectedKeys = { ...f }),
                      (!v.isActive && null === S) ||
                        (!b && !v.prevProp) ||
                        r(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let x =
                        ((y = v.prevProp),
                        "string" == typeof b
                          ? b !== y
                          : !!Array.isArray(b) && !o(b, y)),
                      P =
                        x || (d === u && v.isActive && !k && w) || (t > g && w),
                      A = !1,
                      C = Array.isArray(b) ? b : [b],
                      T = C.reduce(l(d), {});
                    !1 === S && (T = {});
                    let { prevResolvedValues: _ = {} } = v,
                      E = { ..._, ...T },
                      R = (t) => {
                        (P = !0),
                          m.has(t) && ((A = !0), m.delete(t)),
                          (v.needsAnimating[t] = !0);
                        let n = e.getValue(t);
                        n && (n.liveStyle = !1);
                      };
                    for (let e in E) {
                      let t = T[e],
                        n = _[e];
                      if (!f.hasOwnProperty(e))
                        (s(t) && s(n) ? o(t, n) : t === n)
                          ? void 0 !== t && m.has(e)
                            ? R(e)
                            : (v.protectedKeys[e] = !0)
                          : null != t
                          ? R(e)
                          : m.add(e);
                    }
                    (v.prevProp = b),
                      (v.prevResolvedValues = T),
                      v.isActive && (f = { ...f, ...T }),
                      i && e.blockInitialAnimation && (P = !1);
                    let L = !(k && x) || A;
                    P &&
                      L &&
                      p.push(
                        ...C.map((e) => ({
                          animation: e,
                          options: { type: d },
                        }))
                      );
                  }
                  if (m.size) {
                    let t = {};
                    m.forEach((n) => {
                      let i = e.getBaseTarget(n),
                        r = e.getValue(n);
                      r && (r.liveStyle = !0), (t[n] = null != i ? i : null);
                    }),
                      p.push({ animation: t });
                  }
                  let v = !!p.length;
                  return (
                    i &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (v = !1),
                    (i = !1),
                    v ? t(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (t, i) {
                    var r;
                    if (n[t].isActive === i) return Promise.resolve();
                    null === (r = e.variantChildren) ||
                      void 0 === r ||
                      r.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, i);
                      }),
                      (n[t].isActive = i);
                    let s = u(t);
                    for (let e in n) n[e].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = na()), (i = !0);
                  },
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          r(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      }
      let nh = 0;
      class nc extends nl {
        constructor() {
          super(...arguments), (this.id = nh++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let i = this.node.animationState.setActive("exit", !e);
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      var nd,
        np,
        nm,
        nf = n(35695);
      let ng = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function ny(e) {
        return { point: { x: e.pageX, y: e.pageY } };
      }
      let nv = (e) => (t) => ng(t) && e(t, ny(t));
      function nb(e, t, n, i = { passive: !0 }) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n);
      }
      function nw(e, t, n, i) {
        return nb(e, t, nv(n), i);
      }
      let nS = (e, t) => Math.abs(e - t);
      class nk {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = nA(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                r =
                  ((e = n.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(nS(e.x, t.x) ** 2 + nS(e.y, t.y) ** 2) >= 3);
              if (!i && !r) return;
              let { point: s } = n,
                { timestamp: o } = N;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              i ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = nx(t, this.transformPagePoint)),
                R.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = nA(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : nx(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, s), i && i(e, s);
            }),
            !ng(e))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = nx(ny(e), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = N;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = t;
          l && l(e, nA(s, this.history)),
            (this.removeListeners = ty(
              nw(this.contextWindow, "pointermove", this.handlePointerMove),
              nw(this.contextWindow, "pointerup", this.handlePointerUp),
              nw(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), L(this.updatePoint);
        }
      }
      function nx(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function nP(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function nA({ point: e }, t) {
        return {
          point: e,
          delta: nP(e, nC(t)),
          offset: nP(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              i = null,
              r = nC(e);
            for (
              ;
              n >= 0 && ((i = e[n]), !(r.timestamp - i.timestamp > f(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = g(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(t, 0),
        };
      }
      function nC(e) {
        return e[e.length - 1];
      }
      function nT(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function n_(e) {
        return e.max - e.min;
      }
      function nE(e, t, n, i = 0.5) {
        (e.origin = i),
          (e.originPoint = tv(t.min, t.max, e.origin)),
          (e.scale = n_(n) / n_(t)),
          (e.translate = tv(n.min, n.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0);
      }
      function nR(e, t, n, i) {
        nE(e.x, t.x, n.x, i ? i.originX : void 0),
          nE(e.y, t.y, n.y, i ? i.originY : void 0);
      }
      function nL(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + n_(t));
      }
      function nN(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + n_(t));
      }
      function nM(e, t, n) {
        nN(e.x, t.x, n.x), nN(e.y, t.y, n.y);
      }
      function nD(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function nO(e, t) {
        let n = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function nI(e, t, n) {
        return { min: nB(e, t), max: nB(e, n) };
      }
      function nB(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let nj = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        nV = () => ({ x: nj(), y: nj() }),
        nU = () => ({ min: 0, max: 0 }),
        nF = () => ({ x: nU(), y: nU() });
      function nG(e) {
        return [e("x"), e("y")];
      }
      function n$({ top: e, left: t, right: n, bottom: i }) {
        return { x: { min: t, max: n }, y: { min: e, max: i } };
      }
      function nW(e) {
        return void 0 === e || 1 === e;
      }
      function nz({ scale: e, scaleX: t, scaleY: n }) {
        return !nW(e) || !nW(t) || !nW(n);
      }
      function nH(e) {
        return (
          nz(e) ||
          nq(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function nq(e) {
        var t, n;
        return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
      }
      function nY(e, t, n, i, r) {
        return void 0 !== r && (e = i + r * (e - i)), i + n * (e - i) + t;
      }
      function nK(e, t = 0, n = 1, i, r) {
        (e.min = nY(e.min, t, n, i, r)), (e.max = nY(e.max, t, n, i, r));
      }
      function nX(e, { x: t, y: n }) {
        nK(e.x, t.translate, t.scale, t.originPoint),
          nK(e.y, n.translate, n.scale, n.originPoint);
      }
      function nJ(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function nZ(e, t, n, i, r = 0.5) {
        let s = tv(e.min, e.max, r);
        nK(e, t, n, s, i);
      }
      function nQ(e, t) {
        nZ(e.x, t.x, t.scaleX, t.scale, t.originX),
          nZ(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
      function n0(e, t) {
        return n$(
          (function (e, t) {
            if (!t) return e;
            let n = t({ x: e.left, y: e.top }),
              i = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let n1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        n2 = new WeakMap();
      class n5 {
        constructor(e) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = nF()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new nk(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(ny(e).point);
              },
              onStart: (e, t) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, nf.KV)(n)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  nG((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (es.test(t)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[e];
                        if (i) {
                          let e = n_(i);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  r && R.postRender(() => r(e, t)),
                  t9(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                let { offset: o } = t;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let n = null;
                    return (
                      Math.abs(e.y) > t
                        ? (n = "y")
                        : Math.abs(e.x) > t && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, o),
                  this.updateAxis("y", t.point, o),
                  this.visualElement.render(),
                  s && s(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                nG((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: n1(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = t;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && R.postRender(() => r(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
          let { drag: i } = this.getProps();
          if (!n || !n8(e, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(e),
            s = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (s = (function (e, { min: t, max: n }, i) {
              return (
                void 0 !== t && e < t
                  ? (e = i ? tv(t, e, i.min) : Math.max(e, t))
                  : void 0 !== n &&
                    e > n &&
                    (e = i ? tv(n, e, i.max) : Math.min(e, n)),
                e
              );
            })(s, this.constraints[e], this.elastic[e])),
            r.set(s);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            r = this.constraints;
          t && nT(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                e,
                { top: t, left: n, bottom: i, right: r }
              ) {
                return { x: nD(e.x, n, r), y: nD(e.y, t, i) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: nI(e, "left", "right"), y: nI(e, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nG((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let n = {};
                    return (
                      void 0 !== t.min && (n.min = t.min - e.min),
                      void 0 !== t.max && (n.max = t.max - e.min),
                      n
                    );
                  })(i.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: n } =
            this.getProps();
          if (!t || !nT(t)) return !1;
          let i = t.current;
          T(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (e, t, n) {
              let i = n0(e, n),
                { scroll: r } = t;
              return r && (nJ(i.x, r.offset.x), nJ(i.y, r.offset.y)), i;
            })(i, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: nO((e = r.layout.layoutBox).x, s.x), y: nO(e.y, s.y) };
          if (n) {
            let e = n(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!e), e && (o = n$(e));
          }
          return o;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nG((o) => {
              if (!n8(o, t, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (
            t9(this.visualElement, e),
            n.start(tX(e, n, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          nG((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          nG((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[t] ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          nG((t) => {
            let { drag: n } = this.getProps();
            if (!n8(t, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(t);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[t];
              r.set(e[t] - tv(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!nT(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          nG((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let n = t.get();
              i[e] = (function (e, t) {
                let n = 0.5,
                  i = n_(e),
                  r = n_(t);
                return (
                  r > i
                    ? (n = e7(t.min, t.max - i, e.min))
                    : i > r && (n = e7(e.min, e.max - r, t.min)),
                  Q(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            nG((t) => {
              if (!n8(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: r, max: s } = this.constraints[t];
              n.set(tv(r, s, i[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          n2.set(this.visualElement, this);
          let e = nw(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              nT(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            R.read(t);
          let r = nb(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (nG((t) => {
                    let n = this.getAxisMotionValue(t);
                    n &&
                      ((this.originPoint[t] += e[t].translate),
                      n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), e(), i(), s && s();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function n8(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      class n4 extends nl {
        constructor(e) {
          super(e),
            (this.removeGroupControls = T),
            (this.removeListeners = T),
            (this.controls = new n5(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || T);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let n3 = (e) => (t, n) => {
        e && R.postRender(() => e(t, n));
      };
      class n6 extends nl {
        constructor() {
          super(...arguments), (this.removePointerDownListener = T);
        }
        onPointerDown(e) {
          this.session = new nk(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: n1(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: n3(e),
            onStart: n3(t),
            onMove: n,
            onEnd: (e, t) => {
              delete this.session, i && R.postRender(() => i(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = nw(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var n7 = n(57437),
        n9 = n(2265);
      let ie = (0, n9.createContext)(null),
        it = (0, n9.createContext)({}),
        ii = (0, n9.createContext)({}),
        ir = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function is(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let io = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!eo.test(e)) return e;
              e = parseFloat(e);
            }
            let n = is(e, t.target.x),
              i = is(e, t.target.y);
            return `${n}% ${i}%`;
          },
        },
        ia = {},
        { schedule: il, cancel: iu } = E(queueMicrotask, !1);
      class ih extends n9.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = e;
          Object.assign(ia, id),
            r &&
              (t.group && t.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ir.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || e.layoutDependency !== t || void 0 === t
                ? s.willUpdate()
                : this.safeToRemove(),
              e.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    R.postRender(() => {
                      let e = s.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            il.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = e;
          i &&
            (i.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function ic(e) {
        let [t, n] = (function () {
            let e = (0, n9.useContext)(ie);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: n, register: i } = e,
              r = (0, n9.useId)();
            (0, n9.useEffect)(() => i(r), []);
            let s = (0, n9.useCallback)(() => n && n(r), [r, n]);
            return !t && n ? [!1, s] : [!0];
          })(),
          i = (0, n9.useContext)(it);
        return (0, n7.jsx)(ih, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, n9.useContext)(ii),
          isPresent: t,
          safeToRemove: n,
        });
      }
      let id = {
          borderRadius: {
            ...io,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: io,
          borderTopRightRadius: io,
          borderBottomLeftRadius: io,
          borderBottomRightRadius: io,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: n }) => {
              let i = ez.parse(e);
              if (i.length > 5) return e;
              let r = ez.createTransformer(e),
                s = "number" != typeof i[0] ? 1 : 0,
                o = n.x.scale * t.x,
                a = n.y.scale * t.y;
              (i[0 + s] /= o), (i[1 + s] /= a);
              let l = tv(o, a, 0.5);
              return (
                "number" == typeof i[2 + s] && (i[2 + s] /= l),
                "number" == typeof i[3 + s] && (i[3 + s] /= l),
                r(i)
              );
            },
          },
        },
        ip = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        im = ip.length,
        ig = (e) => ("string" == typeof e ? parseFloat(e) : e),
        iy = (e) => "number" == typeof e || eo.test(e);
      function iv(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let ib = iS(0, 0.5, $),
        iw = iS(0.5, 0.95, T);
      function iS(e, t, n) {
        return (i) => (i < e ? 0 : i > t ? 1 : n(e7(e, t, i)));
      }
      function ik(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function ix(e, t) {
        ik(e.x, t.x), ik(e.y, t.y);
      }
      function iP(e, t) {
        (e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin);
      }
      function iA(e, t, n, i, r) {
        return (
          (e -= t),
          (e = i + (1 / n) * (e - i)),
          void 0 !== r && (e = i + (1 / r) * (e - i)),
          e
        );
      }
      function iC(e, t, [n, i, r], s, o) {
        !(function (e, t = 0, n = 1, i = 0.5, r, s = e, o = e) {
          if (
            (es.test(t) &&
              ((t = parseFloat(t)), (t = tv(o.min, o.max, t / 100) - o.min)),
            "number" != typeof t)
          )
            return;
          let a = tv(s.min, s.max, i);
          e === s && (a -= t),
            (e.min = iA(e.min, t, n, a, r)),
            (e.max = iA(e.max, t, n, a, r));
        })(e, t[n], t[i], t[r], t.scale, s, o);
      }
      let iT = ["x", "scaleX", "originX"],
        i_ = ["y", "scaleY", "originY"];
      function iE(e, t, n, i) {
        iC(e.x, t, iT, n ? n.x : void 0, i ? i.x : void 0),
          iC(e.y, t, i_, n ? n.y : void 0, i ? i.y : void 0);
      }
      function iR(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function iL(e) {
        return iR(e.x) && iR(e.y);
      }
      function iN(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function iM(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function iD(e, t) {
        return iM(e.x, t.x) && iM(e.y, t.y);
      }
      function iO(e) {
        return n_(e.x) / n_(e.y);
      }
      function iI(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      class iB {
        constructor() {
          this.members = [];
        }
        add(e) {
          tQ(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (t0(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let n = this.members.findIndex((t) => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              t = n;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: i } = e.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            t.onExitComplete && t.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ij = (e, t) => e.depth - t.depth;
      class iV {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          tQ(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          t0(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(ij),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      function iU(e) {
        let t = t7(e) ? e.get() : e;
        return tJ(t) ? t.toValue() : t;
      }
      let iF = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        iG = "undefined" != typeof window && void 0 !== window.MotionDebug,
        i$ = ["", "X", "Y", "Z"],
        iW = { visibility: "hidden" },
        iz = 0;
      function iH(e, t, n, i) {
        let { latestValues: r } = t;
        r[e] && ((n[e] = r[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
      }
      function iq({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(e = {}, n = null == t ? void 0 : t()) {
            (this.id = iz++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  iG &&
                    (iF.totalNodes =
                      iF.resolvedTargetDeltas =
                      iF.recalculatedProjection =
                        0),
                  this.nodes.forEach(iX),
                  this.nodes.forEach(i5),
                  this.nodes.forEach(i8),
                  this.nodes.forEach(iJ),
                  iG && window.MotionDebug.record(iF);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iV());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new t1()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, t) {
                    let n = e4.now(),
                      i = ({ timestamp: t }) => {
                        let r = t - n;
                        r >= 250 && (L(i), e(r - 250));
                      };
                    return R.read(i, !0), () => L(i);
                  })(i, 0)),
                  ir.hasAnimatedSinceResize &&
                    ((ir.hasAnimatedSinceResize = !1), this.nodes.forEach(i2));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        re,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !iD(this.targetLayout, i) || n,
                      u = !t && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...k(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || i2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              L(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(i4),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return;
                  let { visualElement: n } = t.options;
                  if (!n) return;
                  let i = n.props[t6];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: e, layoutId: n } = t.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      R,
                      !(e || n)
                    );
                  }
                  let { parent: r } = t;
                  r && !r.hasCheckedOptimisedAppear && e(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iQ);
              return;
            }
            this.isUpdating || this.nodes.forEach(i0),
              (this.isUpdating = !1),
              this.nodes.forEach(i1),
              this.nodes.forEach(iY),
              this.nodes.forEach(iK),
              this.clearAllSnapshots();
            let e = e4.now();
            (N.delta = Q(0, 1e3 / 60, e - N.timestamp)),
              (N.timestamp = e),
              (N.isProcessing = !0),
              M.update.process(N),
              M.preRender.process(N),
              M.render.process(N),
              (N.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), il.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(iZ), this.sharedNodes.forEach(i3);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              R.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            R.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = nF()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !iL(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            e &&
              (t || nH(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              e && (i = this.removeTransform(i)),
              ri((t = i).x),
              ri(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return nF();
            let n = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(rs)
              )
            ) {
              let { scroll: e } = this.root;
              e && (nJ(n.x, e.offset.x), nJ(n.y, e.offset.y));
            }
            return n;
          }
          removeElementScroll(e) {
            var t;
            let n = nF();
            if (
              (ix(n, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return n;
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t],
                { scroll: r, options: s } = i;
              i !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && ix(n, e),
                nJ(n.x, r.offset.x),
                nJ(n.y, r.offset.y));
            }
            return n;
          }
          applyTransform(e, t = !1) {
            let n = nF();
            ix(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              !t &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                nQ(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                nH(i.latestValues) && nQ(n, i.latestValues);
            }
            return nH(this.latestValues) && nQ(n, this.latestValues), n;
          }
          removeTransform(e) {
            let t = nF();
            ix(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !nH(n.latestValues)) continue;
              nz(n.latestValues) && n.updateSnapshot();
              let i = nF();
              ix(i, n.measurePageBox()),
                iE(
                  t,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return nH(this.latestValues) && iE(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== N.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, n, i, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                e ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = N.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = nF()),
                    (this.relativeTargetOrigin = nF()),
                    nM(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    ix(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = nF()), (this.targetWithTransforms = nF())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      nL(n.x, i.x, r.x),
                      nL(n.y, i.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : ix(this.target, this.layout.layoutBox),
                      nX(this.target, this.targetDelta))
                    : ix(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = nF()),
                      (this.relativeTargetOrigin = nF()),
                      nM(this.relativeTargetOrigin, this.target, e.target),
                      ix(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                iG && iF.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              nz(this.parent.latestValues) ||
              nq(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              n = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === N.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            ix(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, n, i = !1) {
              let r, s;
              let o = n.length;
              if (o) {
                t.x = t.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = n[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (i &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      nQ(e, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((t.x *= s.x.scale), (t.y *= s.y.scale), nX(e, s)),
                    i && nH(r.latestValues) && nQ(e, r.latestValues));
                }
                t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = nF()));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (iP(this.prevProjectionDelta.x, this.projectionDelta.x),
                iP(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              nR(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                iI(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                iI(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              iG && iF.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = nV()),
              (this.projectionDelta = nV()),
              (this.projectionDeltaWithTransform = nV());
          }
          setAnimationOrigin(e, t = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = nV();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = nF(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(i9)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let i = t / 1e3;
                if (
                  (i6(o.x, e.x, i),
                  i6(o.y, e.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, m;
                  nM(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    i7(p.x, m.x, a.x, i),
                    i7(p.y, m.y, a.y, i),
                    n &&
                      ((u = this.relativeTarget),
                      (d = n),
                      iN(u.x, d.x) && iN(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    n || (n = nF()),
                    ix(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (e, t, n, i, r, s) {
                    r
                      ? ((e.opacity = tv(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          ib(i)
                        )),
                        (e.opacityExit = tv(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          iw(i)
                        )))
                      : s &&
                        (e.opacity = tv(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i
                        ));
                    for (let r = 0; r < im; r++) {
                      let s = `border${ip[r]}Radius`,
                        o = iv(t, s),
                        a = iv(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || iy(o) === iy(a)
                          ? ((e[s] = Math.max(tv(ig(o), ig(a), i), 0)),
                            (es.test(a) || es.test(o)) && (e[s] += "%"))
                          : (e[s] = a));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = tv(t.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (L(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = R.update(() => {
                (ir.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, n) {
                    let i = t7(0) ? 0 : t4(0);
                    return i.start(tX("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: n,
                layout: i,
                latestValues: r,
              } = e;
            if (t && n && i) {
              if (
                this !== e &&
                this.layout &&
                i &&
                rr(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || nF();
                let t = n_(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                let i = n_(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + i);
              }
              ix(t, n),
                nQ(t, r),
                nR(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  r
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new iB()),
              this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: n } = e;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let i = {};
            n.z && iH("z", e, i, this.animationValues);
            for (let t = 0; t < i$.length; t++)
              iH(`rotate${i$[t]}`, e, i, this.animationValues),
                iH(`skew${i$[t]}`, e, i, this.animationValues);
            for (let t in (e.render(), i))
              e.setStaticValue(t, i[t]),
                this.animationValues && (this.animationValues[t] = i[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return iW;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  iU(null == e ? void 0 : e.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    iU(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !nH(this.latestValues) &&
                  ((t.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = (function (e, t, n) {
                let i = "",
                  r = e.x.translate / t.x,
                  s = e.y.translate / t.y,
                  o = (null == n ? void 0 : n.z) || 0;
                if (
                  ((r || s || o) &&
                    (i = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== t.x || 1 !== t.y) &&
                    (i += `scale(${1 / t.x}, ${1 / t.y}) `),
                  n)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = n;
                  e && (i = `perspective(${e}px) ${i}`),
                    t && (i += `rotate(${t}deg) `),
                    r && (i += `rotateX(${r}deg) `),
                    s && (i += `rotateY(${s}deg) `),
                    o && (i += `skewX(${o}deg) `),
                    a && (i += `skewY(${a}deg) `);
                }
                let a = e.x.scale * t.x,
                  l = e.y.scale * t.y;
                return (
                  (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (i.transform = r(o, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((i.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (t = o.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            ia)) {
              if (void 0 === o[e]) continue;
              let { correct: t, applyTo: n } = ia[e],
                r = "none" === i.transform ? o[e] : t(o[e], s);
              if (n) {
                let e = n.length;
                for (let t = 0; t < e; t++) i[n[t]] = r;
              } else i[e] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? iU(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(iQ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function iY(e) {
        e.updateLayout();
      }
      function iK(e) {
        var t;
        let n =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: i } = e.layout,
            { animationType: r } = e.options,
            s = n.source !== e.layout.source;
          "size" === r
            ? nG((e) => {
                let i = s ? n.measuredBox[e] : n.layoutBox[e],
                  r = n_(i);
                (i.min = t[e].min), (i.max = i.min + r);
              })
            : rr(r, n.layoutBox, t) &&
              nG((i) => {
                let r = s ? n.measuredBox[i] : n.layoutBox[i],
                  o = n_(t[i]);
                (r.max = r.min + o),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[i].max = e.relativeTarget[i].min + o));
              });
          let o = nV();
          nR(o, t, n.layoutBox);
          let a = nV();
          s
            ? nR(a, e.applyTransform(i, !0), n.measuredBox)
            : nR(a, t, n.layoutBox);
          let l = !iL(o),
            u = !1;
          if (!e.resumeFrom) {
            let i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = nF();
                nM(o, n.layoutBox, r.layoutBox);
                let a = nF();
                nM(a, t, s.layoutBox),
                  iD(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = o),
                    (e.relativeParent = i));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function iX(e) {
        iG && iF.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function iJ(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function iZ(e) {
        e.clearSnapshot();
      }
      function iQ(e) {
        e.clearMeasurements();
      }
      function i0(e) {
        e.isLayoutDirty = !1;
      }
      function i1(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function i2(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function i5(e) {
        e.resolveTargetDelta();
      }
      function i8(e) {
        e.calcProjection();
      }
      function i4(e) {
        e.resetSkewAndRotation();
      }
      function i3(e) {
        e.removeLeadSnapshot();
      }
      function i6(e, t, n) {
        (e.translate = tv(t.translate, 0, n)),
          (e.scale = tv(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function i7(e, t, n, i) {
        (e.min = tv(t.min, n.min, i)), (e.max = tv(t.max, n.max, i));
      }
      function i9(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let re = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rt = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        rn = rt("applewebkit/") && !rt("chrome/") ? Math.round : T;
      function ri(e) {
        (e.min = rn(e.min)), (e.max = rn(e.max));
      }
      function rr(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !(0.2 >= Math.abs(iO(t) - iO(n))))
        );
      }
      function rs(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let ro = iq({
          attachResizeListener: (e, t) => nb(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ra = { current: void 0 },
        rl = iq({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!ra.current) {
              let e = new ro({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (ra.current = e);
            }
            return ra.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function ru(e, t, n) {
        let { props: i } = e;
        e.animationState &&
          i.whileHover &&
          e.animationState.setActive("whileHover", "Start" === n);
        let r = i["onHover" + n];
        r && R.postRender(() => r(t, ny(t)));
      }
      class rh extends nl {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (0, nf.Mr)(
              e,
              (e) => (ru(this.node, e, "Start"), (e) => ru(this.node, e, "End"))
            ));
        }
        unmount() {}
      }
      class rc extends nl {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ty(
            nb(this.node.current, "focus", () => this.onFocus()),
            nb(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let rd = (e, t) => !!t && (e === t || rd(e, t.parentElement));
      function rp(e, t) {
        if (!t) return;
        let n = new PointerEvent("pointer" + e);
        t(n, ny(n));
      }
      class rm extends nl {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = T),
            (this.removeEndListeners = T),
            (this.removeAccessibleListeners = T),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                i = nw(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: n,
                        onTapCancel: i,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || rd(this.node.current, e.target) ? n : i;
                    s && R.update(() => s(e, t));
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                r = nw(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = ty(i, r)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = nb(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = nb(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          rp("up", (e, t) => {
                            let { onTap: n } = this.node.getProps();
                            n && R.postRender(() => n(e, t));
                          });
                      }
                    )),
                    rp("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = nb(this.node.current, "blur", () => {
                  this.isPressing &&
                    rp("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = ty(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: i } = this.node.getProps();
          i &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && R.postRender(() => n(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, nf.gD)()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && R.postRender(() => n(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = nw(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            n = nb(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = ty(t, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let rf = new WeakMap(),
        rg = new WeakMap(),
        ry = (e) => {
          let t = rf.get(e.target);
          t && t(e);
        },
        rv = (e) => {
          e.forEach(ry);
        },
        rb = { some: 0, all: 1 };
      class rw extends nl {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: i = "some", once: r } = e,
            s = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : rb[i],
            };
          return (function (e, t, n) {
            let i = (function ({ root: e, ...t }) {
              let n = e || document;
              rg.has(n) || rg.set(n, {});
              let i = rg.get(n),
                r = JSON.stringify(t);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(rv, { root: e, ...t })),
                i[r]
              );
            })(t);
            return (
              rf.set(e, n),
              i.observe(e),
              () => {
                rf.delete(e), i.unobserve(e);
              }
            );
          })(this.node.current, s, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), r && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = t ? n : i;
            s && s(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rS = (0, n9.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        rk = (0, n9.createContext)({}),
        rx = "undefined" != typeof window,
        rP = rx ? n9.useLayoutEffect : n9.useEffect,
        rA = (0, n9.createContext)({ strict: !1 });
      function rC(e) {
        return r(e.animate) || d.some((t) => a(e[t]));
      }
      function rT(e) {
        return !!(rC(e) || e.variants);
      }
      function r_(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let rE = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        rR = {};
      for (let e in rE) rR[e] = { isEnabled: (t) => rE[e].some((e) => !!t[e]) };
      let rL = Symbol.for("motionComponentSymbol"),
        rN = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function rM(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (rN.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      function rD(e, { style: t, vars: n }, i, r) {
        for (let s in (Object.assign(e.style, t, r && r.getProjectionStyles(i)),
        n))
          e.style.setProperty(s, n[s]);
      }
      let rO = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function rI(e, t, n, i) {
        for (let n in (rD(e, t, void 0, i), t.attrs))
          e.setAttribute(rO.has(n) ? n : t3(n), t.attrs[n]);
      }
      function rB(e, { layout: t, layoutId: n }) {
        return (
          m.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!ia[e] || "opacity" === e))
        );
      }
      function rj(e, t, n) {
        var i;
        let { style: r } = e,
          s = {};
        for (let o in r)
          (t7(r[o]) ||
            (t.style && t7(t.style[o])) ||
            rB(o, e) ||
            (null === (i = null == n ? void 0 : n.getValue(o)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function rV(e, t, n) {
        let i = rj(e, t, n);
        for (let n in e)
          (t7(e[n]) || t7(t[n])) &&
            (i[
              -1 !== p.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return i;
      }
      let rU = (e) => (t, n) => {
          let i = (0, n9.useContext)(rk),
            s = (0, n9.useContext)(ie),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: n,
                },
                i,
                s,
                o
              ) {
                let a = {
                  latestValues: (function (e, t, n, i) {
                    let s = {},
                      o = i(e, {});
                    for (let e in o) s[e] = iU(o[e]);
                    let { initial: a, animate: l } = e,
                      h = rC(e),
                      c = rT(e);
                    t &&
                      c &&
                      !h &&
                      !1 !== e.inherit &&
                      (void 0 === a && (a = t.initial),
                      void 0 === l && (l = t.animate));
                    let d = !!n && !1 === n.initial,
                      p = (d = d || !1 === a) ? l : a;
                    if (p && "boolean" != typeof p && !r(p)) {
                      let t = Array.isArray(p) ? p : [p];
                      for (let n = 0; n < t.length; n++) {
                        let i = u(e, t[n]);
                        if (i) {
                          let { transitionEnd: e, transition: t, ...n } = i;
                          for (let e in n) {
                            let t = n[e];
                            if (Array.isArray(t)) {
                              let e = d ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (s[e] = t);
                          }
                          for (let t in e) s[t] = e[t];
                        }
                      }
                    }
                    return s;
                  })(i, s, o, e),
                  renderState: t(),
                };
                return n && (a.mount = (e) => n(i, e, a)), a;
              })(e, t, i, s);
          return n
            ? o()
            : (function (e) {
                let t = (0, n9.useRef)(null);
                return null === t.current && (t.current = e()), t.current;
              })(o);
        },
        rF = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        rG = () => ({ ...rF(), attrs: {} }),
        r$ = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        rW = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        rz = p.length;
      function rH(e, t, n) {
        let { style: i, vars: r, transformOrigin: s } = e,
          o = !1,
          a = !1;
        for (let e in t) {
          let n = t[e];
          if (m.has(e)) {
            o = !0;
            continue;
          }
          if (Y(e)) {
            r[e] = n;
            continue;
          }
          {
            let t = r$(n, eJ[e]);
            e.startsWith("origin") ? ((a = !0), (s[e] = t)) : (i[e] = t);
          }
        }
        if (
          (!t.transform &&
            (o || n
              ? (i.transform = (function (e, t, n) {
                  let i = "",
                    r = !0;
                  for (let s = 0; s < rz; s++) {
                    let o = p[s],
                      a = e[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      n
                    ) {
                      let e = r$(a, eJ[o]);
                      if (!l) {
                        r = !1;
                        let t = rW[o] || o;
                        i += `${t}(${e}) `;
                      }
                      n && (t[o] = e);
                    }
                  }
                  return (
                    (i = i.trim()),
                    n ? (i = n(t, r ? "" : i)) : r && (i = "none"),
                    i
                  );
                })(t, e.transform, n))
              : i.transform && (i.transform = "none")),
          a)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = s;
          i.transformOrigin = `${e} ${t} ${n}`;
        }
      }
      function rq(e, t, n) {
        return "string" == typeof e ? e : eo.transform(t + n * e);
      }
      let rY = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        rK = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function rX(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: i,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((rH(e, u, c), h)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: d, style: p, dimensions: m } = e;
        d.transform && (m && (p.transform = d.transform), delete d.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (e, t, n) {
              let i = rq(t, e.x, e.width),
                r = rq(n, e.y, e.height);
              return `${i} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== t && (d.x = t),
          void 0 !== n && (d.y = n),
          void 0 !== i && (d.scale = i),
          void 0 !== o &&
            (function (e, t, n = 1, i = 0, r = !0) {
              e.pathLength = 1;
              let s = r ? rY : rK;
              e[s.offset] = eo.transform(-i);
              let o = eo.transform(t),
                a = eo.transform(n);
              e[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let rJ = (e) => "string" == typeof e && "svg" === e.toLowerCase(),
        rZ = {
          useVisualState: rU({
            scrapeMotionValuesFromProps: rV,
            createRenderState: rG,
            onMount: (e, t, { renderState: n, latestValues: i }) => {
              R.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                R.render(() => {
                  rX(n, i, rJ(t.tagName), e.transformTemplate), rI(t, n);
                });
            },
          }),
        },
        rQ = {
          useVisualState: rU({
            scrapeMotionValuesFromProps: rj,
            createRenderState: rF,
          }),
        };
      function r0(e, t, n) {
        for (let i in t) t7(t[i]) || rB(i, n) || (e[i] = t[i]);
      }
      let r1 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function r2(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          r1.has(e)
        );
      }
      let r5 = (e) => !r2(e);
      try {
        (nd = require("@emotion/is-prop-valid").default) &&
          (r5 = (e) => (e.startsWith("on") ? !r2(e) : nd(e)));
      } catch (e) {}
      let r8 = { current: null },
        r4 = { current: !1 },
        r3 = new WeakMap(),
        r6 = [...ev, eI, ez],
        r7 = (e) => r6.find(ey(e)),
        r9 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class se {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eA),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = e4.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), R.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = rC(t)),
            (this.isVariantNode = rT(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in h) {
            let t = h[e];
            void 0 !== a[e] && t7(t) && t.set(a[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            r3.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            r4.current ||
              (function () {
                if (((r4.current = !0), rx)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (r8.current = e.matches);
                    e.addListener(t), t();
                  } else r8.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || r8.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (r3.delete(this.current),
          this.projection && this.projection.unmount(),
          L(this.notifyUpdate),
          L(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let i = m.has(e),
            r = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && R.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = t.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              r(), s(), n && n(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in rR) {
            let t = rR[e];
            if (!t) continue;
            let { isEnabled: n, Feature: i } = t;
            if (
              (!this.features[e] &&
                i &&
                n(this.props) &&
                (this.features[e] = new i(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : nF();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < r9.length; t++) {
            let n = r9[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = e["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (e, t, n) {
            for (let i in t) {
              let r = t[i],
                s = n[i];
              if (t7(r)) e.addValue(i, r);
              else if (t7(s)) e.addValue(i, t4(r, { owner: e }));
              else if (s !== r) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  !0 === t.liveStyle ? t.jump(r) : t.hasAnimated || t.set(r);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, t4(void 0 !== t ? t : r, { owner: e }));
                }
              }
            }
            for (let i in n) void 0 === t[i] && e.removeValue(i);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = t4(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          var n;
          let i =
            void 0 === this.latestValues[e] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != i &&
              ("string" == typeof i && (H(i) || z(i))
                ? (i = parseFloat(i))
                : !r7(i) && ez.test(t) && (i = e0(e, t)),
              this.setBaseTarget(e, t7(i) ? i.get() : i)),
            t7(i) ? i.get() : i
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let n;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let r = u(
              this.props,
              i,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            r && (n = r[e]);
          }
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, e);
          return void 0 === r || t7(r)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : r;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new t1()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class st extends se {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e2);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          t7(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      class sn extends st {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = rD);
        }
        readValueFromInstance(e, t) {
          if (m.has(t)) {
            let e = eQ(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              i = (Y(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return n0(e, t);
        }
        build(e, t, n) {
          rH(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return rj(e, t, n);
        }
      }
      class si extends st {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = nF);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (m.has(t)) {
            let e = eQ(t);
            return (e && e.default) || 0;
          }
          return (t = rO.has(t) ? t : t3(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return rV(e, t, n);
        }
        build(e, t, n) {
          rX(e, t, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, n, i) {
          rI(e, t, n, i);
        }
        mount(e) {
          (this.isSVGTag = rJ(e.tagName)), super.mount(e);
        }
      }
      let sr = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (n, i) =>
            "create" === i ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
        });
      })(
        ((np = {
          animation: { Feature: nu },
          exit: { Feature: nc },
          inView: { Feature: rw },
          tap: { Feature: rm },
          focus: { Feature: rc },
          hover: { Feature: rh },
          pan: { Feature: n6 },
          drag: { Feature: n4, ProjectionNode: rl, MeasureLayout: ic },
          layout: { ProjectionNode: rl, MeasureLayout: ic },
        }),
        (nm = (e, t) =>
          rM(e)
            ? new si(t)
            : new sn(t, { allowProjection: e !== n9.Fragment })),
        function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
          return (function (e) {
            let {
              preloadedFeatures: t,
              createVisualElement: n,
              useRender: i,
              useVisualState: r,
              Component: s,
            } = e;
            t &&
              (function (e) {
                for (let t in e) rR[t] = { ...rR[t], ...e[t] };
              })(t);
            let o = (0, n9.forwardRef)(function (e, t) {
              var o;
              let l;
              let u = {
                  ...(0, n9.useContext)(rS),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      n = (0, n9.useContext)(it).id;
                    return n && void 0 !== t ? n + "-" + t : t;
                  })(e),
                },
                { isStatic: h } = u,
                c = (function (e) {
                  let { initial: t, animate: n } = (function (e, t) {
                    if (rC(e)) {
                      let { initial: t, animate: n } = e;
                      return {
                        initial: !1 === t || a(t) ? t : void 0,
                        animate: a(n) ? n : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, n9.useContext)(rk));
                  return (0, n9.useMemo)(
                    () => ({ initial: t, animate: n }),
                    [r_(t), r_(n)]
                  );
                })(e),
                d = r(e, h);
              if (!h && rx) {
                (0, n9.useContext)(rA).strict;
                let e = (function (e) {
                  let { drag: t, layout: n } = rR;
                  if (!t && !n) return {};
                  let i = { ...t, ...n };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == n ? void 0 : n.isEnabled(e))
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(u);
                (l = e.MeasureLayout),
                  (c.visualElement = (function (e, t, n, i, r) {
                    var s, o;
                    let { visualElement: a } = (0, n9.useContext)(rk),
                      l = (0, n9.useContext)(rA),
                      u = (0, n9.useContext)(ie),
                      h = (0, n9.useContext)(rS).reducedMotion,
                      c = (0, n9.useRef)(null);
                    (i = i || l.renderer),
                      !c.current &&
                        i &&
                        (c.current = i(e, {
                          visualState: t,
                          parent: a,
                          props: n,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let d = c.current,
                      p = (0, n9.useContext)(ii);
                    d &&
                      !d.projection &&
                      r &&
                      ("html" === d.type || "svg" === d.type) &&
                      (function (e, t, n, i) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = t;
                        (e.projection = new n(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && nT(a)),
                            visualElement: e,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: i,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(c.current, n, r, p);
                    let m = (0, n9.useRef)(!1);
                    (0, n9.useInsertionEffect)(() => {
                      d && m.current && d.update(n, u);
                    });
                    let f = n[t6],
                      g = (0, n9.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      rP(() => {
                        d &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          d.updateFeatures(),
                          il.render(d.render),
                          g.current &&
                            d.animationState &&
                            d.animationState.animateChanges());
                      }),
                      (0, n9.useEffect)(() => {
                        d &&
                          (!g.current &&
                            d.animationState &&
                            d.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, f);
                            }),
                            (g.current = !1)));
                      }),
                      d
                    );
                  })(s, d, u, n, e.ProjectionNode));
              }
              return (0, n7.jsxs)(rk.Provider, {
                value: c,
                children: [
                  l && c.visualElement
                    ? (0, n7.jsx)(l, { visualElement: c.visualElement, ...u })
                    : null,
                  i(
                    s,
                    e,
                    ((o = c.visualElement),
                    (0, n9.useCallback)(
                      (e) => {
                        e && d.mount && d.mount(e),
                          o && (e ? o.mount(e) : o.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : nT(t) && (t.current = e));
                      },
                      [o]
                    )),
                    d,
                    h,
                    c.visualElement
                  ),
                ],
              });
            });
            return (o[rL] = s), o;
          })({
            ...(rM(e) ? rZ : rQ),
            preloadedFeatures: np,
            useRender: (function (e = !1) {
              return (t, n, i, { latestValues: r }, s) => {
                let o = (
                    rM(t)
                      ? function (e, t, n, i) {
                          let r = (0, n9.useMemo)(() => {
                            let n = rG();
                            return (
                              rX(n, t, rJ(i), e.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            r0(t, e.style, e), (r.style = { ...t, ...r.style });
                          }
                          return r;
                        }
                      : function (e, t) {
                          let n = {},
                            i = (function (e, t) {
                              let n = e.style || {},
                                i = {};
                              return (
                                r0(i, n, e),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, n9.useMemo)(() => {
                                      let n = rF();
                                      return (
                                        rH(n, t, e),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                i
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((n.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = i),
                            n
                          );
                        }
                  )(n, r, s, t),
                  a = (function (e, t, n) {
                    let i = {};
                    for (let r in e)
                      ("values" !== r || "object" != typeof e.values) &&
                        (r5(r) ||
                          (!0 === n && r2(r)) ||
                          (!t && !r2(r)) ||
                          (e.draggable && r.startsWith("onDrag"))) &&
                        (i[r] = e[r]);
                    return i;
                  })(n, "string" == typeof t, e),
                  l = t !== n9.Fragment ? { ...a, ...o, ref: i } : {},
                  { children: u } = n,
                  h = (0, n9.useMemo)(() => (t7(u) ? u.get() : u), [u]);
                return (0, n9.createElement)(t, { ...l, children: h });
              };
            })(t),
            createVisualElement: nm,
            Component: e,
          });
        })
      );
    },
    37476: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return o;
        },
      });
      var i = n(2265),
        r = n(35695);
      let s = { some: 0, all: 1 };
      function o(e, { root: t, margin: n, amount: o, once: a = !1 } = {}) {
        let [l, u] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            if (!e.current || (a && l)) return;
            let i = { root: (t && t.current) || void 0, margin: n, amount: o };
            return (function (
              e,
              t,
              { root: n, margin: i, amount: o = "some" } = {}
            ) {
              let a = (0, r.IG)(e),
                l = new WeakMap(),
                u = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = l.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          "function" == typeof n
                            ? l.set(e.target, n)
                            : u.unobserve(e.target);
                        } else n && (n(e), l.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: i,
                    threshold: "number" == typeof o ? o : s[o],
                  }
                );
              return a.forEach((e) => u.observe(e)), () => u.disconnect();
            })(e.current, () => (u(!0), a ? void 0 : () => u(!1)), i);
          }, [t, e, n, a, o]),
          l
        );
      }
    },
    35695: function (e, t, n) {
      "use strict";
      function i(e, t, n) {
        var i;
        if (e instanceof Element) return [e];
        if ("string" == typeof e) {
          let r = document;
          t && (r = t.current);
          let s =
            null !== (i = null == n ? void 0 : n[e]) && void 0 !== i
              ? i
              : r.querySelectorAll(e);
          return s ? Array.from(s) : [];
        }
        return Array.from(e);
      }
      n.d(t, {
        Mr: function () {
          return a;
        },
        gD: function () {
          return s;
        },
        IG: function () {
          return i;
        },
        KV: function () {
          return l;
        },
      });
      let r = { x: !1, y: !1 };
      function s() {
        return r.x || r.y;
      }
      function o(e) {
        return (t) => {
          "touch" === t.pointerType || s() || e(t);
        };
      }
      function a(e, t, n = {}) {
        let r = new AbortController(),
          s = { passive: !0, ...n, signal: r.signal },
          a = o((e) => {
            let { target: n } = e,
              i = t(e);
            if (!i || !n) return;
            let r = o((e) => {
              i(e), n.removeEventListener("pointerleave", r);
            });
            n.addEventListener("pointerleave", r, s);
          });
        return (
          i(e).forEach((e) => {
            e.addEventListener("pointerenter", a, s);
          }),
          () => r.abort()
        );
      }
      function l(e) {
        return "x" === e || "y" === e
          ? r[e]
            ? null
            : ((r[e] = !0),
              () => {
                r[e] = !1;
              })
          : r.x || r.y
          ? null
          : ((r.x = r.y = !0),
            () => {
              r.x = r.y = !1;
            });
      }
    },
    69970: function (e, t, n) {
      "use strict";
      let i, r, s, o, a, l;
      n.d(t, {
        CZ: function () {
          return nj;
        },
      });
      var u,
        h,
        c,
        d = {};
      n.r(d),
        n.d(d, {
          boolean: function () {
            return eK;
          },
          booleanish: function () {
            return eX;
          },
          commaOrSpaceSeparated: function () {
            return e1;
          },
          commaSeparated: function () {
            return e0;
          },
          number: function () {
            return eZ;
          },
          overloadedBoolean: function () {
            return eJ;
          },
          spaceSeparated: function () {
            return eQ;
          },
        });
      let p = [
          {
            id: "abap",
            name: "ABAP",
            import: () => n.e(3075).then(n.bind(n, 73075)),
          },
          {
            id: "actionscript-3",
            name: "ActionScript",
            import: () => n.e(8346).then(n.bind(n, 8346)),
          },
          {
            id: "ada",
            name: "Ada",
            import: () => n.e(6607).then(n.bind(n, 76607)),
          },
          {
            id: "angular-html",
            name: "Angular HTML",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(4242)]).then(
                n.bind(n, 74242)
              ),
          },
          {
            id: "angular-ts",
            name: "Angular TypeScript",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(5604),
                n.e(4738),
                n.e(5355),
                n.e(7119),
                n.e(924),
              ]).then(n.bind(n, 21805)),
          },
          {
            id: "apache",
            name: "Apache Conf",
            import: () => n.e(5612).then(n.bind(n, 35612)),
          },
          {
            id: "apex",
            name: "Apex",
            import: () => n.e(4001).then(n.bind(n, 34001)),
          },
          {
            id: "apl",
            name: "APL",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(8619),
              ]).then(n.bind(n, 78619)),
          },
          {
            id: "applescript",
            name: "AppleScript",
            import: () => n.e(7410).then(n.bind(n, 67410)),
          },
          {
            id: "ara",
            name: "Ara",
            import: () => n.e(9900).then(n.bind(n, 39900)),
          },
          {
            id: "asciidoc",
            name: "AsciiDoc",
            aliases: ["adoc"],
            import: () => n.e(7448).then(n.bind(n, 7448)),
          },
          {
            id: "asm",
            name: "Assembly",
            import: () => n.e(2428).then(n.bind(n, 22428)),
          },
          {
            id: "astro",
            name: "Astro",
            import: () =>
              Promise.all([n.e(8584), n.e(414), n.e(4738), n.e(7168)]).then(
                n.bind(n, 37168)
              ),
          },
          {
            id: "awk",
            name: "AWK",
            import: () => n.e(3360).then(n.bind(n, 23360)),
          },
          {
            id: "ballerina",
            name: "Ballerina",
            import: () => n.e(3181).then(n.bind(n, 13181)),
          },
          {
            id: "bat",
            name: "Batch File",
            aliases: ["batch"],
            import: () => n.e(3197).then(n.bind(n, 3197)),
          },
          {
            id: "beancount",
            name: "Beancount",
            import: () => n.e(1629).then(n.bind(n, 31629)),
          },
          {
            id: "berry",
            name: "Berry",
            aliases: ["be"],
            import: () => n.e(8252).then(n.bind(n, 58252)),
          },
          {
            id: "bibtex",
            name: "BibTeX",
            import: () => n.e(559).then(n.bind(n, 559)),
          },
          {
            id: "bicep",
            name: "Bicep",
            import: () => n.e(4022).then(n.bind(n, 64022)),
          },
          {
            id: "blade",
            name: "Blade",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(1543),
              ]).then(n.bind(n, 21543)),
          },
          {
            id: "bsl",
            name: "1C (Enterprise)",
            aliases: ["1c"],
            import: () => n.e(8507).then(n.bind(n, 38507)),
          },
          {
            id: "c",
            name: "C",
            import: () => n.e(2192).then(n.bind(n, 52192)),
          },
          {
            id: "cadence",
            name: "Cadence",
            aliases: ["cdc"],
            import: () => n.e(2716).then(n.bind(n, 32716)),
          },
          {
            id: "cairo",
            name: "Cairo",
            import: () =>
              Promise.all([n.e(9139), n.e(5358)]).then(n.bind(n, 55358)),
          },
          {
            id: "clarity",
            name: "Clarity",
            import: () => n.e(192).then(n.bind(n, 70192)),
          },
          {
            id: "clojure",
            name: "Clojure",
            aliases: ["clj"],
            import: () => n.e(8060).then(n.bind(n, 58060)),
          },
          {
            id: "cmake",
            name: "CMake",
            import: () => n.e(7825).then(n.bind(n, 77825)),
          },
          {
            id: "cobol",
            name: "COBOL",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(3731),
              ]).then(n.bind(n, 63731)),
          },
          {
            id: "codeowners",
            name: "CODEOWNERS",
            import: () => n.e(6484).then(n.bind(n, 96484)),
          },
          {
            id: "codeql",
            name: "CodeQL",
            aliases: ["ql"],
            import: () => n.e(5236).then(n.bind(n, 35236)),
          },
          {
            id: "coffee",
            name: "CoffeeScript",
            aliases: ["coffeescript"],
            import: () =>
              Promise.all([n.e(8584), n.e(4901)]).then(n.bind(n, 64901)),
          },
          {
            id: "common-lisp",
            name: "Common Lisp",
            aliases: ["lisp"],
            import: () => n.e(6350).then(n.bind(n, 66350)),
          },
          {
            id: "coq",
            name: "Coq",
            import: () => n.e(3862).then(n.bind(n, 53862)),
          },
          {
            id: "cpp",
            name: "C++",
            aliases: ["c++"],
            import: () =>
              Promise.all([
                n.e(75),
                n.e(7185),
                n.e(1986),
                n.e(2192),
                n.e(8248),
              ]).then(n.bind(n, 41688)),
          },
          {
            id: "crystal",
            name: "Crystal",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(1986),
                n.e(2192),
                n.e(2873),
                n.e(9170),
              ]).then(n.bind(n, 29170)),
          },
          {
            id: "csharp",
            name: "C#",
            aliases: ["c#", "cs"],
            import: () => n.e(4151).then(n.bind(n, 74151)),
          },
          {
            id: "css",
            name: "CSS",
            import: () => n.e(4738).then(n.bind(n, 84738)),
          },
          {
            id: "csv",
            name: "CSV",
            import: () => n.e(8641).then(n.bind(n, 78641)),
          },
          {
            id: "cue",
            name: "CUE",
            import: () => n.e(1686).then(n.bind(n, 31686)),
          },
          {
            id: "cypher",
            name: "Cypher",
            aliases: ["cql"],
            import: () => n.e(4624).then(n.bind(n, 84624)),
          },
          {
            id: "d",
            name: "D",
            import: () => n.e(8414).then(n.bind(n, 18414)),
          },
          {
            id: "dart",
            name: "Dart",
            import: () => n.e(200).then(n.bind(n, 200)),
          },
          {
            id: "dax",
            name: "DAX",
            import: () => n.e(8870).then(n.bind(n, 48870)),
          },
          {
            id: "desktop",
            name: "Desktop",
            import: () => n.e(229).then(n.bind(n, 80229)),
          },
          {
            id: "diff",
            name: "Diff",
            import: () => n.e(864).then(n.bind(n, 20864)),
          },
          {
            id: "docker",
            name: "Dockerfile",
            aliases: ["dockerfile"],
            import: () => n.e(5065).then(n.bind(n, 45065)),
          },
          {
            id: "dotenv",
            name: "dotEnv",
            import: () => n.e(9286).then(n.bind(n, 9286)),
          },
          {
            id: "dream-maker",
            name: "Dream Maker",
            import: () => n.e(9949).then(n.bind(n, 19949)),
          },
          {
            id: "edge",
            name: "Edge",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(4738),
                n.e(5355),
                n.e(2057),
              ]).then(n.bind(n, 82057)),
          },
          {
            id: "elixir",
            name: "Elixir",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(474)]).then(
                n.bind(n, 70474)
              ),
          },
          {
            id: "elm",
            name: "Elm",
            import: () =>
              Promise.all([n.e(2192), n.e(403)]).then(n.bind(n, 70403)),
          },
          {
            id: "emacs-lisp",
            name: "Emacs Lisp",
            aliases: ["elisp"],
            import: () => n.e(7637).then(n.bind(n, 46397)),
          },
          {
            id: "erb",
            name: "ERB",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(2192),
                n.e(2873),
                n.e(9063),
                n.e(5991),
              ]).then(n.bind(n, 55991)),
          },
          {
            id: "erlang",
            name: "Erlang",
            aliases: ["erl"],
            import: () => n.e(6320).then(n.bind(n, 36320)),
          },
          {
            id: "fennel",
            name: "Fennel",
            import: () => n.e(1796).then(n.bind(n, 81796)),
          },
          {
            id: "fish",
            name: "Fish",
            import: () => n.e(962).then(n.bind(n, 40962)),
          },
          {
            id: "fluent",
            name: "Fluent",
            aliases: ["ftl"],
            import: () => n.e(8877).then(n.bind(n, 36706)),
          },
          {
            id: "fortran-fixed-form",
            name: "Fortran (Fixed Form)",
            aliases: ["f", "for", "f77"],
            import: () =>
              Promise.all([n.e(7781), n.e(3522)]).then(n.bind(n, 73522)),
          },
          {
            id: "fortran-free-form",
            name: "Fortran (Free Form)",
            aliases: ["f90", "f95", "f03", "f08", "f18"],
            import: () => n.e(7781).then(n.bind(n, 27781)),
          },
          {
            id: "fsharp",
            name: "F#",
            aliases: ["f#", "fs"],
            import: () =>
              Promise.all([n.e(7498), n.e(9257)]).then(n.bind(n, 79257)),
          },
          {
            id: "gdresource",
            name: "GDResource",
            import: () => n.e(8980).then(n.bind(n, 78980)),
          },
          {
            id: "gdscript",
            name: "GDScript",
            import: () => n.e(4403).then(n.bind(n, 84403)),
          },
          {
            id: "gdshader",
            name: "GDShader",
            import: () => n.e(3864).then(n.bind(n, 83864)),
          },
          {
            id: "genie",
            name: "Genie",
            import: () => n.e(8093).then(n.bind(n, 18093)),
          },
          {
            id: "gherkin",
            name: "Gherkin",
            import: () => n.e(9731).then(n.bind(n, 29731)),
          },
          {
            id: "git-commit",
            name: "Git Commit Message",
            import: () => n.e(5990).then(n.bind(n, 15990)),
          },
          {
            id: "git-rebase",
            name: "Git Rebase Message",
            import: () =>
              Promise.all([n.e(2873), n.e(6814)]).then(n.bind(n, 46814)),
          },
          {
            id: "gleam",
            name: "Gleam",
            import: () => n.e(3189).then(n.bind(n, 63189)),
          },
          {
            id: "glimmer-js",
            name: "Glimmer JS",
            aliases: ["gjs"],
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(4738),
                n.e(5355),
                n.e(9163),
              ]).then(n.bind(n, 79163)),
          },
          {
            id: "glimmer-ts",
            name: "Glimmer TS",
            aliases: ["gts"],
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(4738),
                n.e(5355),
                n.e(3068),
              ]).then(n.bind(n, 53068)),
          },
          {
            id: "glsl",
            name: "GLSL",
            import: () =>
              Promise.all([n.e(2192), n.e(4657)]).then(n.bind(n, 64657)),
          },
          {
            id: "gnuplot",
            name: "Gnuplot",
            import: () => n.e(7756).then(n.bind(n, 87862)),
          },
          {
            id: "go",
            name: "Go",
            import: () => n.e(3606).then(n.bind(n, 33606)),
          },
          {
            id: "graphql",
            name: "GraphQL",
            aliases: ["gql"],
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(5519),
                n.e(6673),
                n.e(7217),
              ]).then(n.bind(n, 17217)),
          },
          {
            id: "groovy",
            name: "Groovy",
            import: () => n.e(6770).then(n.bind(n, 16770)),
          },
          {
            id: "hack",
            name: "Hack",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(1986),
                n.e(6420),
              ]).then(n.bind(n, 26420)),
          },
          {
            id: "haml",
            name: "Ruby Haml",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(1454)]).then(
                n.bind(n, 51454)
              ),
          },
          {
            id: "handlebars",
            name: "Handlebars",
            aliases: ["hbs"],
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(4121)]).then(
                n.bind(n, 54121)
              ),
          },
          {
            id: "haskell",
            name: "Haskell",
            aliases: ["hs"],
            import: () => n.e(8986).then(n.bind(n, 28986)),
          },
          {
            id: "haxe",
            name: "Haxe",
            import: () => n.e(9714).then(n.bind(n, 59714)),
          },
          {
            id: "hcl",
            name: "HashiCorp HCL",
            import: () => n.e(832).then(n.bind(n, 30832)),
          },
          {
            id: "hjson",
            name: "Hjson",
            import: () => n.e(908).then(n.bind(n, 40908)),
          },
          {
            id: "hlsl",
            name: "HLSL",
            import: () => n.e(2908).then(n.bind(n, 62908)),
          },
          {
            id: "html",
            name: "HTML",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355)]).then(
                n.bind(n, 35355)
              ),
          },
          {
            id: "html-derivative",
            name: "HTML (Derivative)",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(6863)]).then(
                n.bind(n, 56863)
              ),
          },
          {
            id: "http",
            name: "HTTP",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(5519),
                n.e(6673),
                n.e(4222),
                n.e(2873),
                n.e(267),
              ]).then(n.bind(n, 10267)),
          },
          {
            id: "hxml",
            name: "HXML",
            import: () => n.e(258).then(n.bind(n, 40258)),
          },
          {
            id: "hy",
            name: "Hy",
            import: () => n.e(5527).then(n.bind(n, 5527)),
          },
          {
            id: "imba",
            name: "Imba",
            import: () =>
              Promise.all([n.e(414), n.e(7139)]).then(n.bind(n, 17139)),
          },
          {
            id: "ini",
            name: "INI",
            aliases: ["properties"],
            import: () => n.e(4615).then(n.bind(n, 24615)),
          },
          {
            id: "java",
            name: "Java",
            import: () => n.e(4222).then(n.bind(n, 14222)),
          },
          {
            id: "javascript",
            name: "JavaScript",
            aliases: ["js"],
            import: () => n.e(8584).then(n.bind(n, 84253)),
          },
          {
            id: "jinja",
            name: "Jinja",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(7304)]).then(
                n.bind(n, 27304)
              ),
          },
          {
            id: "jison",
            name: "Jison",
            import: () =>
              Promise.all([n.e(8584), n.e(1115)]).then(n.bind(n, 31115)),
          },
          {
            id: "json",
            name: "JSON",
            import: () => n.e(8714).then(n.bind(n, 38714)),
          },
          {
            id: "json5",
            name: "JSON5",
            import: () => n.e(4220).then(n.bind(n, 64220)),
          },
          {
            id: "jsonc",
            name: "JSON with Comments",
            import: () => n.e(8919).then(n.bind(n, 8919)),
          },
          {
            id: "jsonl",
            name: "JSON Lines",
            import: () => n.e(6768).then(n.bind(n, 86768)),
          },
          {
            id: "jsonnet",
            name: "Jsonnet",
            import: () => n.e(4562).then(n.bind(n, 44562)),
          },
          {
            id: "jssm",
            name: "JSSM",
            aliases: ["fsl"],
            import: () => n.e(2521).then(n.bind(n, 92521)),
          },
          {
            id: "jsx",
            name: "JSX",
            import: () => n.e(5519).then(n.bind(n, 90754)),
          },
          {
            id: "julia",
            name: "Julia",
            aliases: ["jl"],
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(75),
                n.e(7185),
                n.e(1986),
                n.e(2192),
                n.e(9139),
                n.e(2843),
                n.e(6412),
              ]).then(n.bind(n, 48030)),
          },
          {
            id: "kotlin",
            name: "Kotlin",
            aliases: ["kt", "kts"],
            import: () => n.e(222).then(n.bind(n, 40222)),
          },
          {
            id: "kusto",
            name: "Kusto",
            aliases: ["kql"],
            import: () => n.e(7589).then(n.bind(n, 27589)),
          },
          {
            id: "latex",
            name: "LaTeX",
            import: () =>
              Promise.all([n.e(2843), n.e(1849)]).then(n.bind(n, 61849)),
          },
          {
            id: "lean",
            name: "Lean 4",
            aliases: ["lean4"],
            import: () => n.e(5360).then(n.bind(n, 35360)),
          },
          {
            id: "less",
            name: "Less",
            import: () => n.e(8424).then(n.bind(n, 88424)),
          },
          {
            id: "liquid",
            name: "Liquid",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(7831)]).then(
                n.bind(n, 47831)
              ),
          },
          {
            id: "log",
            name: "Log file",
            import: () => n.e(5459).then(n.bind(n, 15459)),
          },
          {
            id: "logo",
            name: "Logo",
            import: () => n.e(7475).then(n.bind(n, 7475)),
          },
          {
            id: "lua",
            name: "Lua",
            import: () =>
              Promise.all([n.e(2192), n.e(6043)]).then(n.bind(n, 66043)),
          },
          {
            id: "luau",
            name: "Luau",
            import: () => n.e(9888).then(n.bind(n, 9888)),
          },
          {
            id: "make",
            name: "Makefile",
            aliases: ["makefile"],
            import: () => n.e(4641).then(n.bind(n, 92129)),
          },
          {
            id: "markdown",
            name: "Markdown",
            aliases: ["md"],
            import: () => n.e(7498).then(n.bind(n, 17498)),
          },
          {
            id: "marko",
            name: "Marko",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(7119),
                n.e(8424),
                n.e(9851),
              ]).then(n.bind(n, 79851)),
          },
          {
            id: "matlab",
            name: "MATLAB",
            import: () => n.e(601).then(n.bind(n, 40601)),
          },
          {
            id: "mdc",
            name: "MDC",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(7498),
                n.e(234),
              ]).then(n.bind(n, 234)),
          },
          {
            id: "mdx",
            name: "MDX",
            import: () => n.e(2863).then(n.bind(n, 32863)),
          },
          {
            id: "mermaid",
            name: "Mermaid",
            aliases: ["mmd"],
            import: () => n.e(7249).then(n.bind(n, 7249)),
          },
          {
            id: "mipsasm",
            name: "MIPS Assembly",
            aliases: ["mips"],
            import: () => n.e(6256).then(n.bind(n, 66256)),
          },
          {
            id: "mojo",
            name: "Mojo",
            import: () => n.e(6281).then(n.bind(n, 16281)),
          },
          {
            id: "move",
            name: "Move",
            import: () => n.e(8706).then(n.bind(n, 78706)),
          },
          {
            id: "narrat",
            name: "Narrat Language",
            aliases: ["nar"],
            import: () => n.e(8110).then(n.bind(n, 98110)),
          },
          {
            id: "nextflow",
            name: "Nextflow",
            aliases: ["nf"],
            import: () => n.e(2043).then(n.bind(n, 82043)),
          },
          {
            id: "nginx",
            name: "Nginx",
            import: () =>
              Promise.all([n.e(2192), n.e(6351)]).then(n.bind(n, 66351)),
          },
          {
            id: "nim",
            name: "Nim",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(2192),
                n.e(7498),
                n.e(5425),
              ]).then(n.bind(n, 5425)),
          },
          {
            id: "nix",
            name: "Nix",
            import: () => n.e(944).then(n.bind(n, 944)),
          },
          {
            id: "nushell",
            name: "nushell",
            aliases: ["nu"],
            import: () => n.e(7501).then(n.bind(n, 27501)),
          },
          {
            id: "objective-c",
            name: "Objective-C",
            aliases: ["objc"],
            import: () => n.e(4019).then(n.bind(n, 64019)),
          },
          {
            id: "objective-cpp",
            name: "Objective-C++",
            import: () => n.e(5492).then(n.bind(n, 55004)),
          },
          {
            id: "ocaml",
            name: "OCaml",
            import: () => n.e(9243).then(n.bind(n, 69243)),
          },
          {
            id: "pascal",
            name: "Pascal",
            import: () => n.e(411).then(n.bind(n, 411)),
          },
          {
            id: "perl",
            name: "Perl",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(9716),
              ]).then(n.bind(n, 89716)),
          },
          {
            id: "php",
            name: "PHP",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(6277),
                n.e(7032),
              ]).then(n.bind(n, 86277)),
          },
          {
            id: "plsql",
            name: "PL/SQL",
            import: () => n.e(9051).then(n.bind(n, 99051)),
          },
          {
            id: "po",
            name: "Gettext PO",
            aliases: ["pot", "potx"],
            import: () => n.e(6038).then(n.bind(n, 46038)),
          },
          {
            id: "postcss",
            name: "PostCSS",
            import: () => n.e(2537).then(n.bind(n, 92537)),
          },
          {
            id: "powerquery",
            name: "PowerQuery",
            import: () => n.e(1051).then(n.bind(n, 21051)),
          },
          {
            id: "powershell",
            name: "PowerShell",
            aliases: ["ps", "ps1"],
            import: () => n.e(1124).then(n.bind(n, 1124)),
          },
          {
            id: "prisma",
            name: "Prisma",
            import: () => n.e(1012).then(n.bind(n, 51012)),
          },
          {
            id: "prolog",
            name: "Prolog",
            import: () => n.e(1325).then(n.bind(n, 1325)),
          },
          {
            id: "proto",
            name: "Protocol Buffer 3",
            aliases: ["protobuf"],
            import: () => n.e(7480).then(n.bind(n, 17480)),
          },
          {
            id: "pug",
            name: "Pug",
            aliases: ["jade"],
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(6170)]).then(
                n.bind(n, 46170)
              ),
          },
          {
            id: "puppet",
            name: "Puppet",
            import: () => n.e(4192).then(n.bind(n, 84192)),
          },
          {
            id: "purescript",
            name: "PureScript",
            import: () => n.e(2445).then(n.bind(n, 52445)),
          },
          {
            id: "python",
            name: "Python",
            aliases: ["py"],
            import: () => n.e(9139).then(n.bind(n, 19139)),
          },
          {
            id: "qml",
            name: "QML",
            import: () =>
              Promise.all([n.e(8584), n.e(443)]).then(n.bind(n, 20443)),
          },
          {
            id: "qmldir",
            name: "QML Directory",
            import: () => n.e(7878).then(n.bind(n, 27878)),
          },
          {
            id: "qss",
            name: "Qt Style Sheets",
            import: () => n.e(7028).then(n.bind(n, 97028)),
          },
          { id: "r", name: "R", import: () => n.e(2843).then(n.bind(n, 2843)) },
          {
            id: "racket",
            name: "Racket",
            import: () => n.e(4017).then(n.bind(n, 54017)),
          },
          {
            id: "raku",
            name: "Raku",
            aliases: ["perl6"],
            import: () => n.e(4349).then(n.bind(n, 14349)),
          },
          {
            id: "razor",
            name: "ASP.NET Razor",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4151),
                n.e(5789),
              ]).then(n.bind(n, 65789)),
          },
          {
            id: "reg",
            name: "Windows Registry Script",
            import: () => n.e(6562).then(n.bind(n, 96562)),
          },
          {
            id: "regexp",
            name: "RegExp",
            aliases: ["regex"],
            import: () => n.e(7144).then(n.bind(n, 67144)),
          },
          {
            id: "rel",
            name: "Rel",
            import: () => n.e(3527).then(n.bind(n, 33527)),
          },
          {
            id: "riscv",
            name: "RISC-V",
            import: () => n.e(4777).then(n.bind(n, 14777)),
          },
          {
            id: "rst",
            name: "reStructuredText",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(75),
                n.e(7185),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(2192),
                n.e(2873),
                n.e(9139),
                n.e(9063),
                n.e(7872),
              ]).then(n.bind(n, 28592)),
          },
          {
            id: "ruby",
            name: "Ruby",
            aliases: ["rb"],
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(2192),
                n.e(2873),
                n.e(9063),
              ]).then(n.bind(n, 81744)),
          },
          {
            id: "rust",
            name: "Rust",
            aliases: ["rs"],
            import: () => n.e(147).then(n.bind(n, 40147)),
          },
          {
            id: "sas",
            name: "SAS",
            import: () =>
              Promise.all([n.e(1986), n.e(8526)]).then(n.bind(n, 28526)),
          },
          {
            id: "sass",
            name: "Sass",
            import: () => n.e(4910).then(n.bind(n, 24910)),
          },
          {
            id: "scala",
            name: "Scala",
            import: () => n.e(3160).then(n.bind(n, 3160)),
          },
          {
            id: "scheme",
            name: "Scheme",
            import: () => n.e(4395).then(n.bind(n, 64395)),
          },
          {
            id: "scss",
            name: "SCSS",
            import: () =>
              Promise.all([n.e(4738), n.e(7119)]).then(n.bind(n, 57119)),
          },
          {
            id: "sdbl",
            name: "1C (Query)",
            aliases: ["1c-query"],
            import: () => n.e(1105).then(n.bind(n, 48877)),
          },
          {
            id: "shaderlab",
            name: "ShaderLab",
            aliases: ["shader"],
            import: () => n.e(9206).then(n.bind(n, 99206)),
          },
          {
            id: "shellscript",
            name: "Shell",
            aliases: ["bash", "sh", "shell", "zsh"],
            import: () => n.e(2873).then(n.bind(n, 82873)),
          },
          {
            id: "shellsession",
            name: "Shell Session",
            aliases: ["console"],
            import: () =>
              Promise.all([n.e(2873), n.e(7042)]).then(n.bind(n, 97042)),
          },
          {
            id: "smalltalk",
            name: "Smalltalk",
            import: () => n.e(110).then(n.bind(n, 80110)),
          },
          {
            id: "solidity",
            name: "Solidity",
            import: () => n.e(1421).then(n.bind(n, 71421)),
          },
          {
            id: "soy",
            name: "Closure Templates",
            aliases: ["closure-templates"],
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(5355), n.e(1226)]).then(
                n.bind(n, 1226)
              ),
          },
          {
            id: "sparql",
            name: "SPARQL",
            import: () => n.e(2004).then(n.bind(n, 32004)),
          },
          {
            id: "splunk",
            name: "Splunk Query Language",
            aliases: ["spl"],
            import: () => n.e(4760).then(n.bind(n, 44760)),
          },
          {
            id: "sql",
            name: "SQL",
            import: () => n.e(1986).then(n.bind(n, 71986)),
          },
          {
            id: "ssh-config",
            name: "SSH Config",
            import: () => n.e(3078).then(n.bind(n, 73078)),
          },
          {
            id: "stata",
            name: "Stata",
            import: () =>
              Promise.all([n.e(1986), n.e(1839)]).then(n.bind(n, 71839)),
          },
          {
            id: "stylus",
            name: "Stylus",
            aliases: ["styl"],
            import: () => n.e(5995).then(n.bind(n, 55995)),
          },
          {
            id: "svelte",
            name: "Svelte",
            import: () =>
              Promise.all([n.e(8584), n.e(414), n.e(4738), n.e(7264)]).then(
                n.bind(n, 37264)
              ),
          },
          {
            id: "swift",
            name: "Swift",
            import: () => n.e(3098).then(n.bind(n, 63098)),
          },
          {
            id: "system-verilog",
            name: "SystemVerilog",
            import: () => n.e(9155).then(n.bind(n, 39155)),
          },
          {
            id: "systemd",
            name: "Systemd Units",
            import: () => n.e(8742).then(n.bind(n, 8742)),
          },
          {
            id: "talonscript",
            name: "TalonScript",
            aliases: ["talon"],
            import: () => n.e(7822).then(n.bind(n, 77822)),
          },
          {
            id: "tasl",
            name: "Tasl",
            import: () => n.e(9236).then(n.bind(n, 19236)),
          },
          {
            id: "tcl",
            name: "Tcl",
            import: () => n.e(8942).then(n.bind(n, 18942)),
          },
          {
            id: "templ",
            name: "Templ",
            import: () =>
              Promise.all([n.e(8584), n.e(4738), n.e(3606), n.e(5463)]).then(
                n.bind(n, 65463)
              ),
          },
          {
            id: "terraform",
            name: "Terraform",
            aliases: ["tf", "tfvars"],
            import: () => n.e(7837).then(n.bind(n, 97837)),
          },
          {
            id: "tex",
            name: "TeX",
            import: () =>
              Promise.all([n.e(2843), n.e(7091)]).then(n.bind(n, 7091)),
          },
          {
            id: "toml",
            name: "TOML",
            import: () => n.e(8726).then(n.bind(n, 98726)),
          },
          {
            id: "ts-tags",
            name: "TypeScript with Tags",
            aliases: ["lit"],
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(2192),
                n.e(4594),
              ]).then(n.bind(n, 74594)),
          },
          {
            id: "tsv",
            name: "TSV",
            import: () => n.e(4059).then(n.bind(n, 54059)),
          },
          {
            id: "tsx",
            name: "TSX",
            import: () => n.e(6673).then(n.bind(n, 66021)),
          },
          {
            id: "turtle",
            name: "Turtle",
            import: () => n.e(2360).then(n.bind(n, 12360)),
          },
          {
            id: "twig",
            name: "Twig",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(4738),
                n.e(5355),
                n.e(4222),
                n.e(1986),
                n.e(2192),
                n.e(2873),
                n.e(9139),
                n.e(9063),
                n.e(7119),
                n.e(6277),
                n.e(6839),
              ]).then(n.bind(n, 26839)),
          },
          {
            id: "typescript",
            name: "TypeScript",
            aliases: ["ts"],
            import: () => n.e(414).then(n.bind(n, 75731)),
          },
          {
            id: "typespec",
            name: "TypeSpec",
            aliases: ["tsp"],
            import: () => n.e(9294).then(n.bind(n, 19294)),
          },
          {
            id: "typst",
            name: "Typst",
            aliases: ["typ"],
            import: () => n.e(5898).then(n.bind(n, 95898)),
          },
          {
            id: "v",
            name: "V",
            import: () => n.e(3049).then(n.bind(n, 73049)),
          },
          {
            id: "vala",
            name: "Vala",
            import: () => n.e(456).then(n.bind(n, 80456)),
          },
          {
            id: "vb",
            name: "Visual Basic",
            aliases: ["cmd"],
            import: () => n.e(1340).then(n.bind(n, 71340)),
          },
          {
            id: "verilog",
            name: "Verilog",
            import: () => n.e(8271).then(n.bind(n, 98271)),
          },
          {
            id: "vhdl",
            name: "VHDL",
            import: () => n.e(7915).then(n.bind(n, 57915)),
          },
          {
            id: "viml",
            name: "Vim Script",
            aliases: ["vim", "vimscript"],
            import: () => n.e(6710).then(n.bind(n, 46710)),
          },
          {
            id: "vue",
            name: "Vue",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(4738),
                n.e(5355),
                n.e(8823),
              ]).then(n.bind(n, 58823)),
          },
          {
            id: "vue-html",
            name: "Vue HTML",
            import: () =>
              Promise.all([
                n.e(8584),
                n.e(414),
                n.e(4738),
                n.e(5355),
                n.e(3609),
              ]).then(n.bind(n, 33609)),
          },
          {
            id: "vyper",
            name: "Vyper",
            aliases: ["vy"],
            import: () => n.e(2228).then(n.bind(n, 72228)),
          },
          {
            id: "wasm",
            name: "WebAssembly",
            import: () => n.e(6523).then(n.bind(n, 86523)),
          },
          {
            id: "wenyan",
            name: "Wenyan",
            aliases: ["文言"],
            import: () => n.e(1004).then(n.bind(n, 71004)),
          },
          {
            id: "wgsl",
            name: "WGSL",
            import: () => n.e(8217).then(n.bind(n, 48217)),
          },
          {
            id: "wikitext",
            name: "Wikitext",
            aliases: ["mediawiki", "wiki"],
            import: () => n.e(1682).then(n.bind(n, 1682)),
          },
          {
            id: "wolfram",
            name: "Wolfram",
            aliases: ["wl"],
            import: () => n.e(963).then(n.bind(n, 60423)),
          },
          {
            id: "xml",
            name: "XML",
            import: () =>
              Promise.all([n.e(4222), n.e(2242)]).then(n.bind(n, 7032)),
          },
          {
            id: "xsl",
            name: "XSL",
            import: () =>
              Promise.all([n.e(4222), n.e(7700)]).then(n.bind(n, 7700)),
          },
          {
            id: "yaml",
            name: "YAML",
            aliases: ["yml"],
            import: () => n.e(5845).then(n.bind(n, 75845)),
          },
          {
            id: "zenscript",
            name: "ZenScript",
            import: () => n.e(581).then(n.bind(n, 30581)),
          },
          {
            id: "zig",
            name: "Zig",
            import: () => n.e(5575).then(n.bind(n, 75575)),
          },
        ],
        m = Object.fromEntries(p.map((e) => [e.id, e.import])),
        f = Object.fromEntries(
          p.flatMap((e) => e.aliases?.map((t) => [t, e.import]) || [])
        ),
        g = { ...m, ...f },
        y = Object.fromEntries(
          [
            {
              id: "andromeeda",
              displayName: "Andromeeda",
              type: "dark",
              import: () => n.e(4316).then(n.bind(n, 74316)),
            },
            {
              id: "aurora-x",
              displayName: "Aurora X",
              type: "dark",
              import: () => n.e(6722).then(n.bind(n, 36722)),
            },
            {
              id: "ayu-dark",
              displayName: "Ayu Dark",
              type: "dark",
              import: () => n.e(5043).then(n.bind(n, 69731)),
            },
            {
              id: "catppuccin-frappe",
              displayName: "Catppuccin Frapp\xe9",
              type: "dark",
              import: () => n.e(1862).then(n.bind(n, 81862)),
            },
            {
              id: "catppuccin-latte",
              displayName: "Catppuccin Latte",
              type: "light",
              import: () => n.e(6974).then(n.bind(n, 86974)),
            },
            {
              id: "catppuccin-macchiato",
              displayName: "Catppuccin Macchiato",
              type: "dark",
              import: () => n.e(3553).then(n.bind(n, 77410)),
            },
            {
              id: "catppuccin-mocha",
              displayName: "Catppuccin Mocha",
              type: "dark",
              import: () => n.e(5829).then(n.bind(n, 75829)),
            },
            {
              id: "dark-plus",
              displayName: "Dark Plus",
              type: "dark",
              import: () => n.e(7607).then(n.bind(n, 77607)),
            },
            {
              id: "dracula",
              displayName: "Dracula Theme",
              type: "dark",
              import: () => n.e(4519).then(n.bind(n, 14519)),
            },
            {
              id: "dracula-soft",
              displayName: "Dracula Theme Soft",
              type: "dark",
              import: () => n.e(6587).then(n.bind(n, 6587)),
            },
            {
              id: "everforest-dark",
              displayName: "Everforest Dark",
              type: "dark",
              import: () => n.e(4178).then(n.bind(n, 34178)),
            },
            {
              id: "everforest-light",
              displayName: "Everforest Light",
              type: "light",
              import: () => n.e(4766).then(n.bind(n, 4766)),
            },
            {
              id: "github-dark",
              displayName: "GitHub Dark",
              type: "dark",
              import: () => n.e(9504).then(n.bind(n, 19504)),
            },
            {
              id: "github-dark-default",
              displayName: "GitHub Dark Default",
              type: "dark",
              import: () => n.e(8579).then(n.bind(n, 38579)),
            },
            {
              id: "github-dark-dimmed",
              displayName: "GitHub Dark Dimmed",
              type: "dark",
              import: () => n.e(6957).then(n.bind(n, 76957)),
            },
            {
              id: "github-dark-high-contrast",
              displayName: "GitHub Dark High Contrast",
              type: "dark",
              import: () => n.e(2337).then(n.bind(n, 52337)),
            },
            {
              id: "github-light",
              displayName: "GitHub Light",
              type: "light",
              import: () => n.e(768).then(n.bind(n, 80768)),
            },
            {
              id: "github-light-default",
              displayName: "GitHub Light Default",
              type: "light",
              import: () => n.e(3022).then(n.bind(n, 33022)),
            },
            {
              id: "github-light-high-contrast",
              displayName: "GitHub Light High Contrast",
              type: "light",
              import: () => n.e(8472).then(n.bind(n, 26281)),
            },
            {
              id: "houston",
              displayName: "Houston",
              type: "dark",
              import: () => n.e(931).then(n.bind(n, 40931)),
            },
            {
              id: "kanagawa-dragon",
              displayName: "Kanagawa Dragon",
              type: "dark",
              import: () => n.e(8858).then(n.bind(n, 88858)),
            },
            {
              id: "kanagawa-lotus",
              displayName: "Kanagawa Lotus",
              type: "light",
              import: () => n.e(6924).then(n.bind(n, 66924)),
            },
            {
              id: "kanagawa-wave",
              displayName: "Kanagawa Wave",
              type: "dark",
              import: () => n.e(1255).then(n.bind(n, 91255)),
            },
            {
              id: "laserwave",
              displayName: "LaserWave",
              type: "dark",
              import: () => n.e(417).then(n.bind(n, 20417)),
            },
            {
              id: "light-plus",
              displayName: "Light Plus",
              type: "light",
              import: () => n.e(2686).then(n.bind(n, 22686)),
            },
            {
              id: "material-theme",
              displayName: "Material Theme",
              type: "dark",
              import: () => n.e(9228).then(n.bind(n, 88346)),
            },
            {
              id: "material-theme-darker",
              displayName: "Material Theme Darker",
              type: "dark",
              import: () => n.e(6741).then(n.bind(n, 96741)),
            },
            {
              id: "material-theme-lighter",
              displayName: "Material Theme Lighter",
              type: "light",
              import: () => n.e(4678).then(n.bind(n, 24678)),
            },
            {
              id: "material-theme-ocean",
              displayName: "Material Theme Ocean",
              type: "dark",
              import: () => n.e(4876).then(n.bind(n, 4876)),
            },
            {
              id: "material-theme-palenight",
              displayName: "Material Theme Palenight",
              type: "dark",
              import: () => n.e(950).then(n.bind(n, 50950)),
            },
            {
              id: "min-dark",
              displayName: "Min Dark",
              type: "dark",
              import: () => n.e(5975).then(n.bind(n, 13472)),
            },
            {
              id: "min-light",
              displayName: "Min Light",
              type: "light",
              import: () => n.e(423).then(n.bind(n, 20423)),
            },
            {
              id: "monokai",
              displayName: "Monokai",
              type: "dark",
              import: () => n.e(3421).then(n.bind(n, 53421)),
            },
            {
              id: "night-owl",
              displayName: "Night Owl",
              type: "dark",
              import: () => n.e(7101).then(n.bind(n, 37101)),
            },
            {
              id: "nord",
              displayName: "Nord",
              type: "dark",
              import: () => n.e(6032).then(n.bind(n, 36032)),
            },
            {
              id: "one-dark-pro",
              displayName: "One Dark Pro",
              type: "dark",
              import: () => n.e(9207).then(n.bind(n, 19207)),
            },
            {
              id: "one-light",
              displayName: "One Light",
              type: "light",
              import: () => n.e(7048).then(n.bind(n, 77048)),
            },
            {
              id: "plastic",
              displayName: "Plastic",
              type: "dark",
              import: () => n.e(9531).then(n.bind(n, 59531)),
            },
            {
              id: "poimandres",
              displayName: "Poimandres",
              type: "dark",
              import: () => n.e(7238).then(n.bind(n, 97238)),
            },
            {
              id: "red",
              displayName: "Red",
              type: "dark",
              import: () => n.e(4495).then(n.bind(n, 64495)),
            },
            {
              id: "rose-pine",
              displayName: "Ros\xe9 Pine",
              type: "dark",
              import: () => n.e(5351).then(n.bind(n, 25351)),
            },
            {
              id: "rose-pine-dawn",
              displayName: "Ros\xe9 Pine Dawn",
              type: "light",
              import: () => n.e(2866).then(n.bind(n, 62866)),
            },
            {
              id: "rose-pine-moon",
              displayName: "Ros\xe9 Pine Moon",
              type: "dark",
              import: () => n.e(3693).then(n.bind(n, 53693)),
            },
            {
              id: "slack-dark",
              displayName: "Slack Dark",
              type: "dark",
              import: () => n.e(7710).then(n.bind(n, 17710)),
            },
            {
              id: "slack-ochin",
              displayName: "Slack Ochin",
              type: "light",
              import: () => n.e(3053).then(n.bind(n, 33053)),
            },
            {
              id: "snazzy-light",
              displayName: "Snazzy Light",
              type: "light",
              import: () => n.e(3375).then(n.bind(n, 13375)),
            },
            {
              id: "solarized-dark",
              displayName: "Solarized Dark",
              type: "dark",
              import: () => n.e(9048).then(n.bind(n, 29048)),
            },
            {
              id: "solarized-light",
              displayName: "Solarized Light",
              type: "light",
              import: () => n.e(3108).then(n.bind(n, 33108)),
            },
            {
              id: "synthwave-84",
              displayName: "Synthwave '84",
              type: "dark",
              import: () => n.e(3937).then(n.bind(n, 3937)),
            },
            {
              id: "tokyo-night",
              displayName: "Tokyo Night",
              type: "dark",
              import: () => n.e(9816).then(n.bind(n, 89816)),
            },
            {
              id: "vesper",
              displayName: "Vesper",
              type: "dark",
              import: () => n.e(7375).then(n.bind(n, 27375)),
            },
            {
              id: "vitesse-black",
              displayName: "Vitesse Black",
              type: "dark",
              import: () => n.e(6012).then(n.bind(n, 96012)),
            },
            {
              id: "vitesse-dark",
              displayName: "Vitesse Dark",
              type: "dark",
              import: () => n.e(4630).then(n.bind(n, 24630)),
            },
            {
              id: "vitesse-light",
              displayName: "Vitesse Light",
              type: "light",
              import: () => n.e(3186).then(n.bind(n, 53186)),
            },
          ].map((e) => [e.id, e.import])
        );
      class v extends Error {
        constructor(e) {
          super(e), (this.name = "ShikiError");
        }
      }
      var b = n(86300).Buffer;
      class w extends Error {
        constructor(e) {
          super(e), (this.name = "ShikiError");
        }
      }
      function S() {
        return "undefined" != typeof performance
          ? performance.now()
          : Date.now();
      }
      let k = (e, t) => e + ((t - (e % t)) % t);
      async function x(e) {
        let t, n;
        let i = {};
        function r(e) {
          (n = e),
            (i.HEAPU8 = new Uint8Array(e)),
            (i.HEAPU32 = new Uint32Array(e));
        }
        let s =
          "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function o(e, t) {
          return e
            ? (function (e, t, n = 1024) {
                let i = t + n,
                  r = t;
                for (; e[r] && !(r >= i); ) ++r;
                if (r - t > 16 && e.buffer && s)
                  return s.decode(e.subarray(t, r));
                let o = "";
                for (; t < r; ) {
                  let n = e[t++];
                  if (!(128 & n)) {
                    o += String.fromCharCode(n);
                    continue;
                  }
                  let i = 63 & e[t++];
                  if ((224 & n) == 192) {
                    o += String.fromCharCode(((31 & n) << 6) | i);
                    continue;
                  }
                  let r = 63 & e[t++];
                  if (
                    (n =
                      (240 & n) == 224
                        ? ((15 & n) << 12) | (i << 6) | r
                        : ((7 & n) << 18) |
                          (i << 12) |
                          (r << 6) |
                          (63 & e[t++])) < 65536
                  )
                    o += String.fromCharCode(n);
                  else {
                    let e = n - 65536;
                    o += String.fromCharCode(
                      55296 | (e >> 10),
                      56320 | (1023 & e)
                    );
                  }
                }
                return o;
              })(i.HEAPU8, e, t)
            : "";
        }
        let a = {
          emscripten_get_now: S,
          emscripten_memcpy_big: function (e, t, n) {
            i.HEAPU8.copyWithin(e, t, t + n);
          },
          emscripten_resize_heap: function (e) {
            let s = i.HEAPU8.length;
            if ((e >>>= 0) > 2147483648) return !1;
            for (let i = 1; i <= 4; i *= 2) {
              let o = s * (1 + 0.2 / i);
              if (
                ((o = Math.min(o, e + 100663296)),
                (function (e) {
                  try {
                    return (
                      t.grow((e - n.byteLength + 65535) >>> 16), r(t.buffer), 1
                    );
                  } catch {}
                })(Math.min(2147483648, k(Math.max(e, o), 65536))))
              )
                return !0;
            }
            return !1;
          },
          fd_write: () => 0,
        };
        async function l() {
          let n = await e({ env: a, wasi_snapshot_preview1: a });
          r((t = n.memory).buffer), Object.assign(i, n), (i.UTF8ToString = o);
        }
        return await l(), i;
      }
      let P = null;
      class A {
        static _utf8ByteLength(e) {
          let t = 0;
          for (let n = 0, i = e.length; n < i; n++) {
            let r = e.charCodeAt(n),
              s = r,
              o = !1;
            if (r >= 55296 && r <= 56319 && n + 1 < i) {
              let t = e.charCodeAt(n + 1);
              t >= 56320 &&
                t <= 57343 &&
                ((s = (((r - 55296) << 10) + 65536) | (t - 56320)), (o = !0));
            }
            s <= 127
              ? (t += 1)
              : s <= 2047
              ? (t += 2)
              : s <= 65535
              ? (t += 3)
              : (t += 4),
              o && n++;
          }
          return t;
        }
        utf16Length;
        utf8Length;
        utf16Value;
        utf8Value;
        utf16OffsetToUtf8;
        utf8OffsetToUtf16;
        constructor(e) {
          let t = e.length,
            n = A._utf8ByteLength(e),
            i = n !== t,
            r = i ? new Uint32Array(t + 1) : null;
          i && (r[t] = n);
          let s = i ? new Uint32Array(n + 1) : null;
          i && (s[n] = t);
          let o = new Uint8Array(n),
            a = 0;
          for (let n = 0; n < t; n++) {
            let l = e.charCodeAt(n),
              u = l,
              h = !1;
            if (l >= 55296 && l <= 56319 && n + 1 < t) {
              let t = e.charCodeAt(n + 1);
              t >= 56320 &&
                t <= 57343 &&
                ((u = (((l - 55296) << 10) + 65536) | (t - 56320)), (h = !0));
            }
            i &&
              ((r[n] = a),
              h && (r[n + 1] = a),
              u <= 127
                ? (s[a + 0] = n)
                : u <= 2047
                ? ((s[a + 0] = n), (s[a + 1] = n))
                : u <= 65535
                ? ((s[a + 0] = n), (s[a + 1] = n), (s[a + 2] = n))
                : ((s[a + 0] = n),
                  (s[a + 1] = n),
                  (s[a + 2] = n),
                  (s[a + 3] = n))),
              u <= 127
                ? (o[a++] = u)
                : (u <= 2047
                    ? (o[a++] = 192 | ((1984 & u) >>> 6))
                    : (u <= 65535
                        ? (o[a++] = 224 | ((61440 & u) >>> 12))
                        : ((o[a++] = 240 | ((1835008 & u) >>> 18)),
                          (o[a++] = 128 | ((258048 & u) >>> 12))),
                      (o[a++] = 128 | ((4032 & u) >>> 6))),
                  (o[a++] = 128 | ((63 & u) >>> 0))),
              h && n++;
          }
          (this.utf16Length = t),
            (this.utf8Length = n),
            (this.utf16Value = e),
            (this.utf8Value = o),
            (this.utf16OffsetToUtf8 = r),
            (this.utf8OffsetToUtf16 = s);
        }
        createString(e) {
          let t = e.omalloc(this.utf8Length);
          return e.HEAPU8.set(this.utf8Value, t), t;
        }
      }
      class C {
        static LAST_ID = 0;
        static _sharedPtr = 0;
        static _sharedPtrInUse = !1;
        id = ++C.LAST_ID;
        _onigBinding;
        content;
        utf16Length;
        utf8Length;
        utf16OffsetToUtf8;
        utf8OffsetToUtf16;
        ptr;
        constructor(e) {
          if (!P) throw new w("Must invoke loadWasm first.");
          (this._onigBinding = P), (this.content = e);
          let t = new A(e);
          (this.utf16Length = t.utf16Length),
            (this.utf8Length = t.utf8Length),
            (this.utf16OffsetToUtf8 = t.utf16OffsetToUtf8),
            (this.utf8OffsetToUtf16 = t.utf8OffsetToUtf16),
            this.utf8Length < 1e4 && !C._sharedPtrInUse
              ? (C._sharedPtr || (C._sharedPtr = P.omalloc(1e4)),
                (C._sharedPtrInUse = !0),
                P.HEAPU8.set(t.utf8Value, C._sharedPtr),
                (this.ptr = C._sharedPtr))
              : (this.ptr = t.createString(P));
        }
        convertUtf8OffsetToUtf16(e) {
          return this.utf8OffsetToUtf16
            ? e < 0
              ? 0
              : e > this.utf8Length
              ? this.utf16Length
              : this.utf8OffsetToUtf16[e]
            : e;
        }
        convertUtf16OffsetToUtf8(e) {
          return this.utf16OffsetToUtf8
            ? e < 0
              ? 0
              : e > this.utf16Length
              ? this.utf8Length
              : this.utf16OffsetToUtf8[e]
            : e;
        }
        dispose() {
          this.ptr === C._sharedPtr
            ? (C._sharedPtrInUse = !1)
            : this._onigBinding.ofree(this.ptr);
        }
      }
      class T {
        _onigBinding;
        _ptr;
        constructor(e) {
          if (!P) throw new w("Must invoke loadWasm first.");
          let t = [],
            n = [];
          for (let i = 0, r = e.length; i < r; i++) {
            let r = new A(e[i]);
            (t[i] = r.createString(P)), (n[i] = r.utf8Length);
          }
          let i = P.omalloc(4 * e.length);
          P.HEAPU32.set(t, i / 4);
          let r = P.omalloc(4 * e.length);
          P.HEAPU32.set(n, r / 4);
          let s = P.createOnigScanner(i, r, e.length);
          for (let n = 0, i = e.length; n < i; n++) P.ofree(t[n]);
          P.ofree(r),
            P.ofree(i),
            0 === s &&
              (function (e) {
                throw new w(e.UTF8ToString(e.getLastOnigError()));
              })(P),
            (this._onigBinding = P),
            (this._ptr = s);
        }
        dispose() {
          this._onigBinding.freeOnigScanner(this._ptr);
        }
        findNextMatchSync(e, t, n) {
          let i = 0;
          if (("number" == typeof n && (i = n), "string" == typeof e)) {
            e = new C(e);
            let n = this._findNextMatchSync(e, t, !1, i);
            return e.dispose(), n;
          }
          return this._findNextMatchSync(e, t, !1, i);
        }
        _findNextMatchSync(e, t, n, i) {
          let r = this._onigBinding,
            s = r.findNextOnigScannerMatch(
              this._ptr,
              e.id,
              e.ptr,
              e.utf8Length,
              e.convertUtf16OffsetToUtf8(t),
              i
            );
          if (0 === s) return null;
          let o = r.HEAPU32,
            a = s / 4,
            l = o[a++],
            u = o[a++],
            h = [];
          for (let t = 0; t < u; t++) {
            let n = e.convertUtf8OffsetToUtf16(o[a++]),
              i = e.convertUtf8OffsetToUtf16(o[a++]);
            h[t] = { start: n, end: i, length: i - n };
          }
          return { index: l, captureIndices: h };
        }
      }
      function _(e) {
        return (t) => WebAssembly.instantiate(e, t);
      }
      async function E(e) {
        return (
          e &&
            (await (i ||
              (i = (async function () {
                P = await x(async (t) => {
                  let n = e;
                  if (
                    ("function" == typeof (n = await n) && (n = await n(t)),
                    "function" == typeof n && (n = await n(t)),
                    "function" == typeof n.instantiator)
                  )
                    n = await n.instantiator(t);
                  else if ("function" == typeof n.default)
                    n = await n.default(t);
                  else {
                    var i, r, s, o;
                    (void 0 !== n.data && (n = n.data),
                    (i = n),
                    "undefined" != typeof Response && i instanceof Response)
                      ? "function" == typeof WebAssembly.instantiateStreaming
                        ? (n = await ((s = n),
                          (e) => WebAssembly.instantiateStreaming(s, e))(t))
                        : (n = await ((o = n),
                          async (e) => {
                            let t = await o.arrayBuffer();
                            return WebAssembly.instantiate(t, e);
                          })(t))
                      : ((r = n),
                        ("undefined" != typeof ArrayBuffer &&
                          (r instanceof ArrayBuffer ||
                            ArrayBuffer.isView(r))) ||
                          (void 0 !== b && b.isBuffer?.(r)) ||
                          ("undefined" != typeof SharedArrayBuffer &&
                            r instanceof SharedArrayBuffer) ||
                          ("undefined" != typeof Uint32Array &&
                            r instanceof Uint32Array))
                      ? (n = await _(n)(t))
                      : n instanceof WebAssembly.Module
                      ? (n = await _(n)(t))
                      : "default" in n &&
                        n.default instanceof WebAssembly.Module &&
                        (n = await _(n.default)(t));
                  }
                  return (
                    "instance" in n && (n = n.instance),
                    "exports" in n && (n = n.exports),
                    n
                  );
                });
              })()))),
          { createScanner: (e) => new T(e), createString: (e) => new C(e) }
        );
      }
      var R = n(20357);
      function L(e, ...t) {
        return (
          t.forEach((t) => {
            for (let n in t) e[n] = t[n];
          }),
          e
        );
      }
      var N = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
        M = class {
          static hasCaptures(e) {
            return null !== e && ((N.lastIndex = 0), N.test(e));
          }
          static replaceCaptures(e, t, n) {
            return e.replace(N, (e, i, r, s) => {
              let o = n[parseInt(i || r, 10)];
              if (!o) return e;
              {
                let e = t.substring(o.start, o.end);
                for (; "." === e[0]; ) e = e.substring(1);
                switch (s) {
                  case "downcase":
                    return e.toLowerCase();
                  case "upcase":
                    return e.toUpperCase();
                  default:
                    return e;
                }
              }
            });
          }
        };
      function D(e, t) {
        if (null === e && null === t) return 0;
        if (!e) return -1;
        if (!t) return 1;
        let n = e.length,
          i = t.length;
        if (n === i) {
          for (let i = 0; i < n; i++) {
            var r, s;
            let n = (r = e[i]) < (s = t[i]) ? -1 : r > s ? 1 : 0;
            if (0 !== n) return n;
          }
          return 0;
        }
        return n - i;
      }
      function O(e) {
        return !!(
          /^#[0-9a-f]{6}$/i.test(e) ||
          /^#[0-9a-f]{8}$/i.test(e) ||
          /^#[0-9a-f]{3}$/i.test(e) ||
          /^#[0-9a-f]{4}$/i.test(e)
        );
      }
      function I(e) {
        return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
      }
      var B = class {
          constructor(e) {
            (this.fn = e), (this.cache = new Map());
          }
          get(e) {
            if (this.cache.has(e)) return this.cache.get(e);
            let t = this.fn(e);
            return this.cache.set(e, t), t;
          }
        },
        j = class {
          constructor(e, t, n) {
            (this._colorMap = e),
              (this._defaults = t),
              (this._root = n),
              (this._cachedMatchRoot = new B((e) => this._root.match(e)));
          }
          static createFromRawTheme(e, t) {
            return this.createFromParsedTheme(
              (function (e) {
                if (!e || !e.settings || !Array.isArray(e.settings)) return [];
                let t = e.settings,
                  n = [],
                  i = 0;
                for (let e = 0, r = t.length; e < r; e++) {
                  let r,
                    s = t[e];
                  if (!s.settings) continue;
                  if ("string" == typeof s.scope) {
                    let e = s.scope;
                    r = (e = (e = e.replace(/^[,]+/, "")).replace(
                      /[,]+$/,
                      ""
                    )).split(",");
                  } else r = Array.isArray(s.scope) ? s.scope : [""];
                  let o = -1;
                  if ("string" == typeof s.settings.fontStyle) {
                    o = 0;
                    let e = s.settings.fontStyle.split(" ");
                    for (let t = 0, n = e.length; t < n; t++)
                      switch (e[t]) {
                        case "italic":
                          o |= 1;
                          break;
                        case "bold":
                          o |= 2;
                          break;
                        case "underline":
                          o |= 4;
                          break;
                        case "strikethrough":
                          o |= 8;
                      }
                  }
                  let a = null;
                  "string" == typeof s.settings.foreground &&
                    O(s.settings.foreground) &&
                    (a = s.settings.foreground);
                  let l = null;
                  "string" == typeof s.settings.background &&
                    O(s.settings.background) &&
                    (l = s.settings.background);
                  for (let t = 0, s = r.length; t < s; t++) {
                    let s = r[t].trim().split(" "),
                      u = s[s.length - 1],
                      h = null;
                    s.length > 1 && (h = s.slice(0, s.length - 1)).reverse(),
                      (n[i++] = new F(u, h, e, o, a, l));
                  }
                }
                return n;
              })(e),
              t
            );
          }
          static createFromParsedTheme(e, t) {
            return (function (e, t) {
              e.sort((e, t) => {
                var n, i;
                let r = (n = e.scope) < (i = t.scope) ? -1 : n > i ? 1 : 0;
                return 0 !== r || 0 !== (r = D(e.parentScopes, t.parentScopes))
                  ? r
                  : e.index - t.index;
              });
              let n = 0,
                i = "#000000",
                r = "#ffffff";
              for (; e.length >= 1 && "" === e[0].scope; ) {
                let t = e.shift();
                -1 !== t.fontStyle && (n = t.fontStyle),
                  null !== t.foreground && (i = t.foreground),
                  null !== t.background && (r = t.background);
              }
              let s = new $(t),
                o = new U(n, s.getId(i), s.getId(r)),
                a = new H(new z(0, null, -1, 0, 0), []);
              for (let t = 0, n = e.length; t < n; t++) {
                let n = e[t];
                a.insert(
                  0,
                  n.scope,
                  n.parentScopes,
                  n.fontStyle,
                  s.getId(n.foreground),
                  s.getId(n.background)
                );
              }
              return new j(s, o, a);
            })(e, t);
          }
          getColorMap() {
            return this._colorMap.getColorMap();
          }
          getDefaults() {
            return this._defaults;
          }
          match(e) {
            if (null === e) return this._defaults;
            let t = e.scopeName,
              n = this._cachedMatchRoot.get(t).find((t) =>
                (function (e, t) {
                  if (0 === t.length) return !0;
                  for (let r = 0; r < t.length; r++) {
                    var n, i;
                    let s = t[r],
                      o = !1;
                    if (">" === s) {
                      if (r === t.length - 1) return !1;
                      (s = t[++r]), (o = !0);
                    }
                    for (
                      ;
                      e &&
                      ((n = e.scopeName),
                      !(
                        (i = s) === n ||
                        (n.startsWith(i) && "." === n[i.length])
                      ));

                    ) {
                      if (o) return !1;
                      e = e.parent;
                    }
                    if (!e) return !1;
                    e = e.parent;
                  }
                  return !0;
                })(e.parent, t.parentScopes)
              );
            return n ? new U(n.fontStyle, n.foreground, n.background) : null;
          }
        },
        V = class e {
          constructor(e, t) {
            (this.parent = e), (this.scopeName = t);
          }
          static push(t, n) {
            for (let i of n) t = new e(t, i);
            return t;
          }
          static from(...t) {
            let n = null;
            for (let i = 0; i < t.length; i++) n = new e(n, t[i]);
            return n;
          }
          push(t) {
            return new e(this, t);
          }
          getSegments() {
            let e = this,
              t = [];
            for (; e; ) t.push(e.scopeName), (e = e.parent);
            return t.reverse(), t;
          }
          toString() {
            return this.getSegments().join(" ");
          }
          extends(e) {
            return (
              this === e || (null !== this.parent && this.parent.extends(e))
            );
          }
          getExtensionIfDefined(e) {
            let t = [],
              n = this;
            for (; n && n !== e; ) t.push(n.scopeName), (n = n.parent);
            return n === e ? t.reverse() : void 0;
          }
        },
        U = class {
          constructor(e, t, n) {
            (this.fontStyle = e),
              (this.foregroundId = t),
              (this.backgroundId = n);
          }
        },
        F = class {
          constructor(e, t, n, i, r, s) {
            (this.scope = e),
              (this.parentScopes = t),
              (this.index = n),
              (this.fontStyle = i),
              (this.foreground = r),
              (this.background = s);
          }
        },
        G =
          (((u = G || {})[(u.NotSet = -1)] = "NotSet"),
          (u[(u.None = 0)] = "None"),
          (u[(u.Italic = 1)] = "Italic"),
          (u[(u.Bold = 2)] = "Bold"),
          (u[(u.Underline = 4)] = "Underline"),
          (u[(u.Strikethrough = 8)] = "Strikethrough"),
          u),
        $ = class {
          constructor(e) {
            if (
              ((this._lastColorId = 0),
              (this._id2color = []),
              (this._color2id = Object.create(null)),
              Array.isArray(e))
            ) {
              this._isFrozen = !0;
              for (let t = 0, n = e.length; t < n; t++)
                (this._color2id[e[t]] = t), (this._id2color[t] = e[t]);
            } else this._isFrozen = !1;
          }
          getId(e) {
            if (null === e) return 0;
            e = e.toUpperCase();
            let t = this._color2id[e];
            if (t) return t;
            if (this._isFrozen)
              throw Error(`Missing color in color map - ${e}`);
            return (
              (t = ++this._lastColorId),
              (this._color2id[e] = t),
              (this._id2color[t] = e),
              t
            );
          }
          getColorMap() {
            return this._id2color.slice(0);
          }
        },
        W = Object.freeze([]),
        z = class e {
          constructor(e, t, n, i, r) {
            (this.scopeDepth = e),
              (this.parentScopes = t || W),
              (this.fontStyle = n),
              (this.foreground = i),
              (this.background = r);
          }
          clone() {
            return new e(
              this.scopeDepth,
              this.parentScopes,
              this.fontStyle,
              this.foreground,
              this.background
            );
          }
          static cloneArr(e) {
            let t = [];
            for (let n = 0, i = e.length; n < i; n++) t[n] = e[n].clone();
            return t;
          }
          acceptOverwrite(e, t, n, i) {
            this.scopeDepth > e
              ? console.log("how did this happen?")
              : (this.scopeDepth = e),
              -1 !== t && (this.fontStyle = t),
              0 !== n && (this.foreground = n),
              0 !== i && (this.background = i);
          }
        },
        H = class e {
          constructor(e, t = [], n = {}) {
            (this._mainRule = e),
              (this._children = n),
              (this._rulesWithParentScopes = t);
          }
          static _cmpBySpecificity(e, t) {
            if (e.scopeDepth !== t.scopeDepth)
              return t.scopeDepth - e.scopeDepth;
            let n = 0,
              i = 0;
            for (
              ;
              ">" === e.parentScopes[n] && n++,
                ">" === t.parentScopes[i] && i++,
                !(n >= e.parentScopes.length) && !(i >= t.parentScopes.length);

            ) {
              let r = t.parentScopes[i].length - e.parentScopes[n].length;
              if (0 !== r) return r;
              n++, i++;
            }
            return t.parentScopes.length - e.parentScopes.length;
          }
          match(t) {
            if ("" !== t) {
              let e,
                n,
                i = t.indexOf(".");
              if (
                (-1 === i
                  ? ((e = t), (n = ""))
                  : ((e = t.substring(0, i)), (n = t.substring(i + 1))),
                this._children.hasOwnProperty(e))
              )
                return this._children[e].match(n);
            }
            let n = this._rulesWithParentScopes.concat(this._mainRule);
            return n.sort(e._cmpBySpecificity), n;
          }
          insert(t, n, i, r, s, o) {
            let a, l, u;
            if ("" === n) {
              this._doInsertHere(t, i, r, s, o);
              return;
            }
            let h = n.indexOf(".");
            -1 === h
              ? ((a = n), (l = ""))
              : ((a = n.substring(0, h)), (l = n.substring(h + 1))),
              this._children.hasOwnProperty(a)
                ? (u = this._children[a])
                : ((u = new e(
                    this._mainRule.clone(),
                    z.cloneArr(this._rulesWithParentScopes)
                  )),
                  (this._children[a] = u)),
              u.insert(t + 1, l, i, r, s, o);
          }
          _doInsertHere(e, t, n, i, r) {
            if (null === t) {
              this._mainRule.acceptOverwrite(e, n, i, r);
              return;
            }
            for (
              let s = 0, o = this._rulesWithParentScopes.length;
              s < o;
              s++
            ) {
              let o = this._rulesWithParentScopes[s];
              if (0 === D(o.parentScopes, t)) {
                o.acceptOverwrite(e, n, i, r);
                return;
              }
            }
            -1 === n && (n = this._mainRule.fontStyle),
              0 === i && (i = this._mainRule.foreground),
              0 === r && (r = this._mainRule.background),
              this._rulesWithParentScopes.push(new z(e, t, n, i, r));
          }
        },
        q = class e {
          static toBinaryStr(e) {
            return e.toString(2).padStart(32, "0");
          }
          static print(t) {
            let n = e.getLanguageId(t),
              i = e.getTokenType(t);
            console.log({
              languageId: n,
              tokenType: i,
              fontStyle: e.getFontStyle(t),
              foreground: e.getForeground(t),
              background: e.getBackground(t),
            });
          }
          static getLanguageId(e) {
            return (255 & e) >>> 0;
          }
          static getTokenType(e) {
            return (768 & e) >>> 8;
          }
          static containsBalancedBrackets(e) {
            return (1024 & e) != 0;
          }
          static getFontStyle(e) {
            return (30720 & e) >>> 11;
          }
          static getForeground(e) {
            return (16744448 & e) >>> 15;
          }
          static getBackground(e) {
            return (4278190080 & e) >>> 24;
          }
          static set(t, n, i, r, s, o, a) {
            let l = e.getLanguageId(t),
              u = e.getTokenType(t),
              h = e.containsBalancedBrackets(t) ? 1 : 0,
              c = e.getFontStyle(t),
              d = e.getForeground(t),
              p = e.getBackground(t);
            return (
              0 !== n && (l = n),
              8 !== i && (u = i),
              null !== r && (h = r ? 1 : 0),
              -1 !== s && (c = s),
              0 !== o && (d = o),
              0 !== a && (p = a),
              ((l << 0) |
                (u << 8) |
                (h << 10) |
                (c << 11) |
                (d << 15) |
                (p << 24)) >>>
                0
            );
          }
        };
      function Y(e, t) {
        let n, i;
        let r = [],
          s =
            ((i = (n = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(e)),
            {
              next: () => {
                if (!i) return null;
                let t = i[0];
                return (i = n.exec(e)), t;
              },
            }),
          o = s.next();
        for (; null !== o; ) {
          let e = 0;
          if (2 === o.length && ":" === o.charAt(1)) {
            switch (o.charAt(0)) {
              case "R":
                e = 1;
                break;
              case "L":
                e = -1;
                break;
              default:
                console.log(`Unknown priority ${o} in scope selector`);
            }
            o = s.next();
          }
          let t = l();
          if ((r.push({ matcher: t, priority: e }), "," !== o)) break;
          o = s.next();
        }
        return r;
        function a() {
          if ("-" === o) {
            o = s.next();
            let e = a();
            return (t) => !!e && !e(t);
          }
          if ("(" === o) {
            o = s.next();
            let e = (function () {
              let e = [],
                t = l();
              for (; t && (e.push(t), "|" === o || "," === o); ) {
                do o = s.next();
                while ("|" === o || "," === o);
                t = l();
              }
              return (t) => e.some((e) => e(t));
            })();
            return ")" === o && (o = s.next()), e;
          }
          if (K(o)) {
            let e = [];
            do e.push(o), (o = s.next());
            while (K(o));
            return (n) => t(e, n);
          }
          return null;
        }
        function l() {
          let e = [],
            t = a();
          for (; t; ) e.push(t), (t = a());
          return (t) => e.every((e) => e(t));
        }
      }
      function K(e) {
        return !!e && !!e.match(/[\w\.:]+/);
      }
      var X =
        (((h = X || {})[(h.None = 0)] = "None"),
        (h[(h.NotBeginString = 1)] = "NotBeginString"),
        (h[(h.NotEndString = 2)] = "NotEndString"),
        (h[(h.NotBeginPosition = 4)] = "NotBeginPosition"),
        (h[(h.DebugCall = 8)] = "DebugCall"),
        h);
      function J(e) {
        "function" == typeof e.dispose && e.dispose();
      }
      var Z = class {
          constructor(e) {
            this.scopeName = e;
          }
          toKey() {
            return this.scopeName;
          }
        },
        Q = class {
          constructor(e, t) {
            (this.scopeName = e), (this.ruleName = t);
          }
          toKey() {
            return `${this.scopeName}#${this.ruleName}`;
          }
        },
        ee = class {
          constructor() {
            (this._references = []),
              (this._seenReferenceKeys = new Set()),
              (this.visitedRule = new Set());
          }
          get references() {
            return this._references;
          }
          add(e) {
            let t = e.toKey();
            this._seenReferenceKeys.has(t) ||
              (this._seenReferenceKeys.add(t), this._references.push(e));
          }
        },
        et = class {
          constructor(e, t) {
            (this.repo = e),
              (this.initialScopeName = t),
              (this.seenFullScopeRequests = new Set()),
              (this.seenPartialScopeRequests = new Set()),
              this.seenFullScopeRequests.add(this.initialScopeName),
              (this.Q = [new Z(this.initialScopeName)]);
          }
          processQueue() {
            let e = this.Q;
            this.Q = [];
            let t = new ee();
            for (let n of e)
              !(function (e, t, n, i) {
                let r = n.lookup(e.scopeName);
                if (!r) {
                  if (e.scopeName === t)
                    throw Error(`No grammar provided for <${t}>`);
                  return;
                }
                let s = n.lookup(t);
                e instanceof Z
                  ? ei({ baseGrammar: s, selfGrammar: r }, i)
                  : en(
                      e.ruleName,
                      {
                        baseGrammar: s,
                        selfGrammar: r,
                        repository: r.repository,
                      },
                      i
                    );
                let o = n.injections(e.scopeName);
                if (o) for (let e of o) i.add(new Z(e));
              })(n, this.initialScopeName, this.repo, t);
            for (let e of t.references)
              if (e instanceof Z) {
                if (this.seenFullScopeRequests.has(e.scopeName)) continue;
                this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e);
              } else {
                if (
                  this.seenFullScopeRequests.has(e.scopeName) ||
                  this.seenPartialScopeRequests.has(e.toKey())
                )
                  continue;
                this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e);
              }
          }
        };
      function en(e, t, n) {
        t.repository && t.repository[e] && er([t.repository[e]], t, n);
      }
      function ei(e, t) {
        e.selfGrammar.patterns &&
          Array.isArray(e.selfGrammar.patterns) &&
          er(
            e.selfGrammar.patterns,
            { ...e, repository: e.selfGrammar.repository },
            t
          ),
          e.selfGrammar.injections &&
            er(
              Object.values(e.selfGrammar.injections),
              { ...e, repository: e.selfGrammar.repository },
              t
            );
      }
      function er(e, t, n) {
        for (let i of e) {
          if (n.visitedRule.has(i)) continue;
          n.visitedRule.add(i);
          let e = i.repository
            ? L({}, t.repository, i.repository)
            : t.repository;
          Array.isArray(i.patterns) &&
            er(i.patterns, { ...t, repository: e }, n);
          let r = i.include;
          if (!r) continue;
          let s = eh(r);
          switch (s.kind) {
            case 0:
              ei({ ...t, selfGrammar: t.baseGrammar }, n);
              break;
            case 1:
              ei(t, n);
              break;
            case 2:
              en(s.ruleName, { ...t, repository: e }, n);
              break;
            case 3:
            case 4:
              let o =
                s.scopeName === t.selfGrammar.scopeName
                  ? t.selfGrammar
                  : s.scopeName === t.baseGrammar.scopeName
                  ? t.baseGrammar
                  : void 0;
              if (o) {
                let i = {
                  baseGrammar: t.baseGrammar,
                  selfGrammar: o,
                  repository: e,
                };
                4 === s.kind ? en(s.ruleName, i, n) : ei(i, n);
              } else
                4 === s.kind
                  ? n.add(new Q(s.scopeName, s.ruleName))
                  : n.add(new Z(s.scopeName));
          }
        }
      }
      var es = class {
          constructor() {
            this.kind = 0;
          }
        },
        eo = class {
          constructor() {
            this.kind = 1;
          }
        },
        ea = class {
          constructor(e) {
            (this.ruleName = e), (this.kind = 2);
          }
        },
        el = class {
          constructor(e) {
            (this.scopeName = e), (this.kind = 3);
          }
        },
        eu = class {
          constructor(e, t) {
            (this.scopeName = e), (this.ruleName = t), (this.kind = 4);
          }
        };
      function eh(e) {
        if ("$base" === e) return new es();
        if ("$self" === e) return new eo();
        let t = e.indexOf("#");
        return -1 === t
          ? new el(e)
          : 0 === t
          ? new ea(e.substring(1))
          : new eu(e.substring(0, t), e.substring(t + 1));
      }
      var ec = /\\(\d+)/,
        ed = /\\(\d+)/g;
      Symbol("RuleId");
      var ep = class {
          constructor(e, t, n, i) {
            (this.$location = e),
              (this.id = t),
              (this._name = n || null),
              (this._nameIsCapturing = M.hasCaptures(this._name)),
              (this._contentName = i || null),
              (this._contentNameIsCapturing = M.hasCaptures(this._contentName));
          }
          get debugName() {
            let e = this.$location
              ? `${(function e(t) {
                  let n = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
                  return 0 === n
                    ? t
                    : ~n == t.length - 1
                    ? e(t.substring(0, t.length - 1))
                    : t.substr(~n + 1);
                })(this.$location.filename)}:${this.$location.line}`
              : "unknown";
            return `${this.constructor.name}#${this.id} @ ${e}`;
          }
          getName(e, t) {
            return this._nameIsCapturing &&
              null !== this._name &&
              null !== e &&
              null !== t
              ? M.replaceCaptures(this._name, e, t)
              : this._name;
          }
          getContentName(e, t) {
            return this._contentNameIsCapturing && null !== this._contentName
              ? M.replaceCaptures(this._contentName, e, t)
              : this._contentName;
          }
        },
        em = class extends ep {
          constructor(e, t, n, i, r) {
            super(e, t, n, i), (this.retokenizeCapturedWithRuleId = r);
          }
          dispose() {}
          collectPatterns(e, t) {
            throw Error("Not supported!");
          }
          compile(e, t) {
            throw Error("Not supported!");
          }
          compileAG(e, t, n, i) {
            throw Error("Not supported!");
          }
        },
        ef = class extends ep {
          constructor(e, t, n, i, r) {
            super(e, t, n, null),
              (this._match = new ew(i, this.id)),
              (this.captures = r),
              (this._cachedCompiledPatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(),
              (this._cachedCompiledPatterns = null));
          }
          get debugMatchRegExp() {
            return `${this._match.source}`;
          }
          collectPatterns(e, t) {
            t.push(this._match);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e).compile(e);
          }
          compileAG(e, t, n, i) {
            return this._getCachedCompiledPatterns(e).compileAG(e, n, i);
          }
          _getCachedCompiledPatterns(e) {
            return (
              this._cachedCompiledPatterns ||
                ((this._cachedCompiledPatterns = new eS()),
                this.collectPatterns(e, this._cachedCompiledPatterns)),
              this._cachedCompiledPatterns
            );
          }
        },
        eg = class extends ep {
          constructor(e, t, n, i, r) {
            super(e, t, n, i),
              (this.patterns = r.patterns),
              (this.hasMissingPatterns = r.hasMissingPatterns),
              (this._cachedCompiledPatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(),
              (this._cachedCompiledPatterns = null));
          }
          collectPatterns(e, t) {
            for (let n of this.patterns) e.getRule(n).collectPatterns(e, t);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e).compile(e);
          }
          compileAG(e, t, n, i) {
            return this._getCachedCompiledPatterns(e).compileAG(e, n, i);
          }
          _getCachedCompiledPatterns(e) {
            return (
              this._cachedCompiledPatterns ||
                ((this._cachedCompiledPatterns = new eS()),
                this.collectPatterns(e, this._cachedCompiledPatterns)),
              this._cachedCompiledPatterns
            );
          }
        },
        ey = class extends ep {
          constructor(e, t, n, i, r, s, o, a, l, u) {
            super(e, t, n, i),
              (this._begin = new ew(r, this.id)),
              (this.beginCaptures = s),
              (this._end = new ew(o || "￿", -1)),
              (this.endHasBackReferences = this._end.hasBackReferences),
              (this.endCaptures = a),
              (this.applyEndPatternLast = l || !1),
              (this.patterns = u.patterns),
              (this.hasMissingPatterns = u.hasMissingPatterns),
              (this._cachedCompiledPatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(),
              (this._cachedCompiledPatterns = null));
          }
          get debugBeginRegExp() {
            return `${this._begin.source}`;
          }
          get debugEndRegExp() {
            return `${this._end.source}`;
          }
          getEndWithResolvedBackReferences(e, t) {
            return this._end.resolveBackReferences(e, t);
          }
          collectPatterns(e, t) {
            t.push(this._begin);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e, t).compile(e);
          }
          compileAG(e, t, n, i) {
            return this._getCachedCompiledPatterns(e, t).compileAG(e, n, i);
          }
          _getCachedCompiledPatterns(e, t) {
            if (!this._cachedCompiledPatterns) {
              for (let t of ((this._cachedCompiledPatterns = new eS()),
              this.patterns))
                e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
              this.applyEndPatternLast
                ? this._cachedCompiledPatterns.push(
                    this._end.hasBackReferences ? this._end.clone() : this._end
                  )
                : this._cachedCompiledPatterns.unshift(
                    this._end.hasBackReferences ? this._end.clone() : this._end
                  );
            }
            return (
              this._end.hasBackReferences &&
                (this.applyEndPatternLast
                  ? this._cachedCompiledPatterns.setSource(
                      this._cachedCompiledPatterns.length() - 1,
                      t
                    )
                  : this._cachedCompiledPatterns.setSource(0, t)),
              this._cachedCompiledPatterns
            );
          }
        },
        ev = class extends ep {
          constructor(e, t, n, i, r, s, o, a, l) {
            super(e, t, n, i),
              (this._begin = new ew(r, this.id)),
              (this.beginCaptures = s),
              (this.whileCaptures = a),
              (this._while = new ew(o, -2)),
              (this.whileHasBackReferences = this._while.hasBackReferences),
              (this.patterns = l.patterns),
              (this.hasMissingPatterns = l.hasMissingPatterns),
              (this._cachedCompiledPatterns = null),
              (this._cachedCompiledWhilePatterns = null);
          }
          dispose() {
            this._cachedCompiledPatterns &&
              (this._cachedCompiledPatterns.dispose(),
              (this._cachedCompiledPatterns = null)),
              this._cachedCompiledWhilePatterns &&
                (this._cachedCompiledWhilePatterns.dispose(),
                (this._cachedCompiledWhilePatterns = null));
          }
          get debugBeginRegExp() {
            return `${this._begin.source}`;
          }
          get debugWhileRegExp() {
            return `${this._while.source}`;
          }
          getWhileWithResolvedBackReferences(e, t) {
            return this._while.resolveBackReferences(e, t);
          }
          collectPatterns(e, t) {
            t.push(this._begin);
          }
          compile(e, t) {
            return this._getCachedCompiledPatterns(e).compile(e);
          }
          compileAG(e, t, n, i) {
            return this._getCachedCompiledPatterns(e).compileAG(e, n, i);
          }
          _getCachedCompiledPatterns(e) {
            if (!this._cachedCompiledPatterns)
              for (let t of ((this._cachedCompiledPatterns = new eS()),
              this.patterns))
                e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
            return this._cachedCompiledPatterns;
          }
          compileWhile(e, t) {
            return this._getCachedCompiledWhilePatterns(e, t).compile(e);
          }
          compileWhileAG(e, t, n, i) {
            return this._getCachedCompiledWhilePatterns(e, t).compileAG(
              e,
              n,
              i
            );
          }
          _getCachedCompiledWhilePatterns(e, t) {
            return (
              this._cachedCompiledWhilePatterns ||
                ((this._cachedCompiledWhilePatterns = new eS()),
                this._cachedCompiledWhilePatterns.push(
                  this._while.hasBackReferences
                    ? this._while.clone()
                    : this._while
                )),
              this._while.hasBackReferences &&
                this._cachedCompiledWhilePatterns.setSource(0, t || "￿"),
              this._cachedCompiledWhilePatterns
            );
          }
        },
        eb = class e {
          static createCaptureRule(e, t, n, i, r) {
            return e.registerRule((e) => new em(t, e, n, i, r));
          }
          static getCompiledRuleId(t, n, i) {
            return (
              t.id ||
                n.registerRule((r) => {
                  if (((t.id = r), t.match))
                    return new ef(
                      t.$vscodeTextmateLocation,
                      t.id,
                      t.name,
                      t.match,
                      e._compileCaptures(t.captures, n, i)
                    );
                  if (void 0 === t.begin) {
                    t.repository && (i = L({}, i, t.repository));
                    let r = t.patterns;
                    return (
                      void 0 === r &&
                        t.include &&
                        (r = [{ include: t.include }]),
                      new eg(
                        t.$vscodeTextmateLocation,
                        t.id,
                        t.name,
                        t.contentName,
                        e._compilePatterns(r, n, i)
                      )
                    );
                  }
                  return t.while
                    ? new ev(
                        t.$vscodeTextmateLocation,
                        t.id,
                        t.name,
                        t.contentName,
                        t.begin,
                        e._compileCaptures(t.beginCaptures || t.captures, n, i),
                        t.while,
                        e._compileCaptures(t.whileCaptures || t.captures, n, i),
                        e._compilePatterns(t.patterns, n, i)
                      )
                    : new ey(
                        t.$vscodeTextmateLocation,
                        t.id,
                        t.name,
                        t.contentName,
                        t.begin,
                        e._compileCaptures(t.beginCaptures || t.captures, n, i),
                        t.end,
                        e._compileCaptures(t.endCaptures || t.captures, n, i),
                        t.applyEndPatternLast,
                        e._compilePatterns(t.patterns, n, i)
                      );
                }),
              t.id
            );
          }
          static _compileCaptures(t, n, i) {
            let r = [];
            if (t) {
              let s = 0;
              for (let e in t) {
                if ("$vscodeTextmateLocation" === e) continue;
                let t = parseInt(e, 10);
                t > s && (s = t);
              }
              for (let e = 0; e <= s; e++) r[e] = null;
              for (let s in t) {
                if ("$vscodeTextmateLocation" === s) continue;
                let o = parseInt(s, 10),
                  a = 0;
                t[s].patterns && (a = e.getCompiledRuleId(t[s], n, i)),
                  (r[o] = e.createCaptureRule(
                    n,
                    t[s].$vscodeTextmateLocation,
                    t[s].name,
                    t[s].contentName,
                    a
                  ));
              }
            }
            return r;
          }
          static _compilePatterns(t, n, i) {
            let r = [];
            if (t)
              for (let s = 0, o = t.length; s < o; s++) {
                let o = t[s],
                  a = -1;
                if (o.include) {
                  let t = eh(o.include);
                  switch (t.kind) {
                    case 0:
                    case 1:
                      a = e.getCompiledRuleId(i[o.include], n, i);
                      break;
                    case 2:
                      let r = i[t.ruleName];
                      r && (a = e.getCompiledRuleId(r, n, i));
                      break;
                    case 3:
                    case 4:
                      let s = t.scopeName,
                        l = 4 === t.kind ? t.ruleName : null,
                        u = n.getExternalGrammar(s, i);
                      if (u) {
                        if (l) {
                          let t = u.repository[l];
                          t && (a = e.getCompiledRuleId(t, n, u.repository));
                        } else
                          a = e.getCompiledRuleId(
                            u.repository.$self,
                            n,
                            u.repository
                          );
                      }
                  }
                } else a = e.getCompiledRuleId(o, n, i);
                if (-1 !== a) {
                  let e = n.getRule(a),
                    t = !1;
                  if (
                    ((e instanceof eg || e instanceof ey || e instanceof ev) &&
                      e.hasMissingPatterns &&
                      0 === e.patterns.length &&
                      (t = !0),
                    t)
                  )
                    continue;
                  r.push(a);
                }
              }
            return {
              patterns: r,
              hasMissingPatterns: (t ? t.length : 0) !== r.length,
            };
          }
        },
        ew = class e {
          constructor(e, t) {
            if (e) {
              let t = e.length,
                n = 0,
                i = [],
                r = !1;
              for (let s = 0; s < t; s++)
                if ("\\" === e.charAt(s) && s + 1 < t) {
                  let t = e.charAt(s + 1);
                  "z" === t
                    ? (i.push(e.substring(n, s)),
                      i.push("$(?!\\n)(?<!\\n)"),
                      (n = s + 2))
                    : ("A" === t || "G" === t) && (r = !0),
                    s++;
                }
              (this.hasAnchor = r),
                0 === n
                  ? (this.source = e)
                  : (i.push(e.substring(n, t)), (this.source = i.join("")));
            } else (this.hasAnchor = !1), (this.source = e);
            this.hasAnchor
              ? (this._anchorCache = this._buildAnchorCache())
              : (this._anchorCache = null),
              (this.ruleId = t),
              (this.hasBackReferences = ec.test(this.source));
          }
          clone() {
            return new e(this.source, this.ruleId);
          }
          setSource(e) {
            this.source !== e &&
              ((this.source = e),
              this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
          }
          resolveBackReferences(e, t) {
            let n = t.map((t) => e.substring(t.start, t.end));
            return (
              (ed.lastIndex = 0),
              this.source.replace(ed, (e, t) => I(n[parseInt(t, 10)] || ""))
            );
          }
          _buildAnchorCache() {
            let e,
              t,
              n,
              i,
              r = [],
              s = [],
              o = [],
              a = [];
            for (e = 0, t = this.source.length; e < t; e++)
              (n = this.source.charAt(e)),
                (r[e] = n),
                (s[e] = n),
                (o[e] = n),
                (a[e] = n),
                "\\" === n &&
                  e + 1 < t &&
                  ("A" === (i = this.source.charAt(e + 1))
                    ? ((r[e + 1] = "￿"),
                      (s[e + 1] = "￿"),
                      (o[e + 1] = "A"),
                      (a[e + 1] = "A"))
                    : "G" === i
                    ? ((r[e + 1] = "￿"),
                      (s[e + 1] = "G"),
                      (o[e + 1] = "￿"),
                      (a[e + 1] = "G"))
                    : ((r[e + 1] = i),
                      (s[e + 1] = i),
                      (o[e + 1] = i),
                      (a[e + 1] = i)),
                  e++);
            return {
              A0_G0: r.join(""),
              A0_G1: s.join(""),
              A1_G0: o.join(""),
              A1_G1: a.join(""),
            };
          }
          resolveAnchors(e, t) {
            return this.hasAnchor && this._anchorCache
              ? e
                ? t
                  ? this._anchorCache.A1_G1
                  : this._anchorCache.A1_G0
                : t
                ? this._anchorCache.A0_G1
                : this._anchorCache.A0_G0
              : this.source;
          }
        },
        eS = class {
          constructor() {
            (this._items = []),
              (this._hasAnchors = !1),
              (this._cached = null),
              (this._anchorCache = {
                A0_G0: null,
                A0_G1: null,
                A1_G0: null,
                A1_G1: null,
              });
          }
          dispose() {
            this._disposeCaches();
          }
          _disposeCaches() {
            this._cached && (this._cached.dispose(), (this._cached = null)),
              this._anchorCache.A0_G0 &&
                (this._anchorCache.A0_G0.dispose(),
                (this._anchorCache.A0_G0 = null)),
              this._anchorCache.A0_G1 &&
                (this._anchorCache.A0_G1.dispose(),
                (this._anchorCache.A0_G1 = null)),
              this._anchorCache.A1_G0 &&
                (this._anchorCache.A1_G0.dispose(),
                (this._anchorCache.A1_G0 = null)),
              this._anchorCache.A1_G1 &&
                (this._anchorCache.A1_G1.dispose(),
                (this._anchorCache.A1_G1 = null));
          }
          push(e) {
            this._items.push(e),
              (this._hasAnchors = this._hasAnchors || e.hasAnchor);
          }
          unshift(e) {
            this._items.unshift(e),
              (this._hasAnchors = this._hasAnchors || e.hasAnchor);
          }
          length() {
            return this._items.length;
          }
          setSource(e, t) {
            this._items[e].source !== t &&
              (this._disposeCaches(), this._items[e].setSource(t));
          }
          compile(e) {
            if (!this._cached) {
              let t = this._items.map((e) => e.source);
              this._cached = new ek(
                e,
                t,
                this._items.map((e) => e.ruleId)
              );
            }
            return this._cached;
          }
          compileAG(e, t, n) {
            return this._hasAnchors
              ? t
                ? n
                  ? (this._anchorCache.A1_G1 ||
                      (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)),
                    this._anchorCache.A1_G1)
                  : (this._anchorCache.A1_G0 ||
                      (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)),
                    this._anchorCache.A1_G0)
                : n
                ? (this._anchorCache.A0_G1 ||
                    (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
                  this._anchorCache.A0_G1)
                : (this._anchorCache.A0_G0 ||
                    (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
                  this._anchorCache.A0_G0)
              : this.compile(e);
          }
          _resolveAnchors(e, t, n) {
            return new ek(
              e,
              this._items.map((e) => e.resolveAnchors(t, n)),
              this._items.map((e) => e.ruleId)
            );
          }
        },
        ek = class {
          constructor(e, t, n) {
            (this.regExps = t),
              (this.rules = n),
              (this.scanner = e.createOnigScanner(t));
          }
          dispose() {
            "function" == typeof this.scanner.dispose && this.scanner.dispose();
          }
          toString() {
            let e = [];
            for (let t = 0, n = this.rules.length; t < n; t++)
              e.push("   - " + this.rules[t] + ": " + this.regExps[t]);
            return e.join("\n");
          }
          findNextMatchSync(e, t, n) {
            let i = this.scanner.findNextMatchSync(e, t, n);
            return i
              ? {
                  ruleId: this.rules[i.index],
                  captureIndices: i.captureIndices,
                }
              : null;
          }
        },
        ex = class {
          constructor(e, t) {
            (this.languageId = e), (this.tokenType = t);
          }
        },
        eP = class e {
          constructor(e, t) {
            (this._getBasicScopeAttributes = new B(
              (e) =>
                new ex(this._scopeToLanguage(e), this._toStandardTokenType(e))
            )),
              (this._defaultAttributes = new ex(e, 8)),
              (this._embeddedLanguagesMatcher = new eA(
                Object.entries(t || {})
              ));
          }
          getDefaultAttributes() {
            return this._defaultAttributes;
          }
          getBasicScopeAttributes(t) {
            return null === t
              ? e._NULL_SCOPE_METADATA
              : this._getBasicScopeAttributes.get(t);
          }
          _scopeToLanguage(e) {
            return this._embeddedLanguagesMatcher.match(e) || 0;
          }
          _toStandardTokenType(t) {
            let n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP);
            if (!n) return 8;
            switch (n[1]) {
              case "comment":
                return 1;
              case "string":
                return 2;
              case "regex":
                return 3;
              case "meta.embedded":
                return 0;
            }
            throw Error("Unexpected match for standard token type!");
          }
        };
      (eP._NULL_SCOPE_METADATA = new ex(0, 0)),
        (eP.STANDARD_TOKEN_TYPE_REGEXP =
          /\b(comment|string|regex|meta\.embedded)\b/);
      var eA = class {
        constructor(e) {
          if (0 === e.length) (this.values = null), (this.scopesRegExp = null);
          else {
            this.values = new Map(e);
            let t = e.map(([e, t]) => I(e));
            t.sort(),
              t.reverse(),
              (this.scopesRegExp = RegExp(`^((${t.join(")|(")}))($|\\.)`, ""));
          }
        }
        match(e) {
          if (!this.scopesRegExp) return;
          let t = e.match(this.scopesRegExp);
          if (t) return this.values.get(t[1]);
        }
      };
      void 0 !== R && R.env.VSCODE_TEXTMATE_DEBUG;
      var eC = class {
        constructor(e, t) {
          (this.stack = e), (this.stoppedEarly = t);
        }
      };
      function eT(e, t, n, i, r, s, o, a) {
        let l = t.content.length,
          u = !1,
          h = -1;
        if (o) {
          let o = (function (e, t, n, i, r, s) {
            let o = r.beginRuleCapturedEOL ? 0 : -1,
              a = [];
            for (let t = r; t; t = t.pop()) {
              let n = t.getRule(e);
              n instanceof ev && a.push({ rule: n, stack: t });
            }
            for (let d = a.pop(); d; d = a.pop()) {
              var l, u, h, c;
              let { ruleScanner: a, findOptions: p } =
                  ((l = d.rule),
                  (u = d.stack.endRule),
                  (h = n),
                  (c = i === o),
                  {
                    ruleScanner: l.compileWhileAG(e, u, h, c),
                    findOptions: 0,
                  }),
                m = a.findNextMatchSync(t, i, p);
              if (m) {
                if (-2 !== m.ruleId) {
                  r = d.stack.pop();
                  break;
                }
                m.captureIndices &&
                  m.captureIndices.length &&
                  (s.produce(d.stack, m.captureIndices[0].start),
                  eE(
                    e,
                    t,
                    n,
                    d.stack,
                    s,
                    d.rule.whileCaptures,
                    m.captureIndices
                  ),
                  s.produce(d.stack, m.captureIndices[0].end),
                  (o = m.captureIndices[0].end),
                  m.captureIndices[0].end > i &&
                    ((i = m.captureIndices[0].end), (n = !1)));
              } else {
                r = d.stack.pop();
                break;
              }
            }
            return { stack: r, linePos: i, anchorPosition: o, isFirstLine: n };
          })(e, t, n, i, r, s);
          (r = o.stack),
            (i = o.linePos),
            (n = o.isFirstLine),
            (h = o.anchorPosition);
        }
        let c = Date.now();
        for (; !u; ) {
          if (0 !== a && Date.now() - c > a) return new eC(r, !0);
          !(function () {
            let o = (function (e, t, n, i, r, s) {
              let o = (function (e, t, n, i, r, s) {
                  let { ruleScanner: o, findOptions: a } = e_(
                      r.getRule(e),
                      e,
                      r.endRule,
                      n,
                      i === s
                    ),
                    l = o.findNextMatchSync(t, i, a);
                  return l
                    ? {
                        captureIndices: l.captureIndices,
                        matchedRuleId: l.ruleId,
                      }
                    : null;
                })(e, t, n, i, r, s),
                a = e.getInjections();
              if (0 === a.length) return o;
              let l = (function (e, t, n, i, r, s, o) {
                let a,
                  l = Number.MAX_VALUE,
                  u = null,
                  h = 0,
                  c = s.contentNameScopesList.getScopeNames();
                for (let s = 0, d = e.length; s < d; s++) {
                  let d = e[s];
                  if (!d.matcher(c)) continue;
                  let { ruleScanner: p, findOptions: m } = e_(
                      t.getRule(d.ruleId),
                      t,
                      null,
                      i,
                      r === o
                    ),
                    f = p.findNextMatchSync(n, r, m);
                  if (!f) continue;
                  let g = f.captureIndices[0].start;
                  if (
                    !(g >= l) &&
                    ((l = g),
                    (u = f.captureIndices),
                    (a = f.ruleId),
                    (h = d.priority),
                    l === r)
                  )
                    break;
                }
                return u
                  ? {
                      priorityMatch: -1 === h,
                      captureIndices: u,
                      matchedRuleId: a,
                    }
                  : null;
              })(a, e, t, n, i, r, s);
              if (!l) return o;
              if (!o) return l;
              let u = o.captureIndices[0].start,
                h = l.captureIndices[0].start;
              return h < u || (l.priorityMatch && h === u) ? l : o;
            })(e, t, n, i, r, h);
            if (!o) {
              s.produce(r, l), (u = !0);
              return;
            }
            let a = o.captureIndices,
              c = o.matchedRuleId,
              d = !!a && a.length > 0 && a[0].end > i;
            if (-1 === c) {
              let o = r.getRule(e);
              s.produce(r, a[0].start),
                (r = r.withContentNameScopesList(r.nameScopesList)),
                eE(e, t, n, r, s, o.endCaptures, a),
                s.produce(r, a[0].end);
              let c = r;
              if (
                ((r = r.parent),
                (h = c.getAnchorPos()),
                !d && c.getEnterPos() === i)
              ) {
                (r = c), s.produce(r, l), (u = !0);
                return;
              }
            } else {
              let o = e.getRule(c);
              s.produce(r, a[0].start);
              let p = r,
                m = o.getName(t.content, a),
                f = r.contentNameScopesList.pushAttributed(m, e);
              if (
                ((r = r.push(c, i, h, a[0].end === l, null, f, f)),
                o instanceof ey)
              ) {
                eE(e, t, n, r, s, o.beginCaptures, a),
                  s.produce(r, a[0].end),
                  (h = a[0].end);
                let i = o.getContentName(t.content, a),
                  c = f.pushAttributed(i, e);
                if (
                  ((r = r.withContentNameScopesList(c)),
                  o.endHasBackReferences &&
                    (r = r.withEndRule(
                      o.getEndWithResolvedBackReferences(t.content, a)
                    )),
                  !d && p.hasSameRuleAs(r))
                ) {
                  (r = r.pop()), s.produce(r, l), (u = !0);
                  return;
                }
              } else if (o instanceof ev) {
                eE(e, t, n, r, s, o.beginCaptures, a),
                  s.produce(r, a[0].end),
                  (h = a[0].end);
                let i = o.getContentName(t.content, a),
                  c = f.pushAttributed(i, e);
                if (
                  ((r = r.withContentNameScopesList(c)),
                  o.whileHasBackReferences &&
                    (r = r.withEndRule(
                      o.getWhileWithResolvedBackReferences(t.content, a)
                    )),
                  !d && p.hasSameRuleAs(r))
                ) {
                  (r = r.pop()), s.produce(r, l), (u = !0);
                  return;
                }
              } else if (
                (eE(e, t, n, r, s, o.captures, a),
                s.produce(r, a[0].end),
                (r = r.pop()),
                !d)
              ) {
                (r = r.safePop()), s.produce(r, l), (u = !0);
                return;
              }
            }
            a[0].end > i && ((i = a[0].end), (n = !1));
          })();
        }
        return new eC(r, !1);
      }
      function e_(e, t, n, i, r) {
        return { ruleScanner: e.compileAG(t, n, i, r), findOptions: 0 };
      }
      function eE(e, t, n, i, r, s, o) {
        if (0 === s.length) return;
        let a = t.content,
          l = Math.min(s.length, o.length),
          u = [],
          h = o[0].end;
        for (let t = 0; t < l; t++) {
          let l = s[t];
          if (null === l) continue;
          let c = o[t];
          if (0 === c.length) continue;
          if (c.start > h) break;
          for (; u.length > 0 && u[u.length - 1].endPos <= c.start; )
            r.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos),
              u.pop();
          if (
            (u.length > 0
              ? r.produceFromScopes(u[u.length - 1].scopes, c.start)
              : r.produce(i, c.start),
            l.retokenizeCapturedWithRuleId)
          ) {
            let t = l.getName(a, o),
              s = i.contentNameScopesList.pushAttributed(t, e),
              u = l.getContentName(a, o),
              h = s.pushAttributed(u, e),
              d = i.push(
                l.retokenizeCapturedWithRuleId,
                c.start,
                -1,
                !1,
                null,
                s,
                h
              ),
              p = e.createOnigString(a.substring(0, c.end));
            eT(e, p, n && 0 === c.start, c.start, d, r, !1, 0), J(p);
            continue;
          }
          let d = l.getName(a, o);
          if (null !== d) {
            let t = (
              u.length > 0 ? u[u.length - 1].scopes : i.contentNameScopesList
            ).pushAttributed(d, e);
            u.push(new eR(t, c.end));
          }
        }
        for (; u.length > 0; )
          r.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos),
            u.pop();
      }
      var eR = class {
        constructor(e, t) {
          (this.scopes = e), (this.endPos = t);
        }
      };
      function eL(e, t, n, i, r) {
        let s = Y(t, eN),
          o = eb.getCompiledRuleId(n, i, r.repository);
        for (let n of s)
          e.push({
            debugSelector: t,
            matcher: n.matcher,
            ruleId: o,
            grammar: r,
            priority: n.priority,
          });
      }
      function eN(e, t) {
        if (t.length < e.length) return !1;
        let n = 0;
        return e.every((e) => {
          for (let i = n; i < t.length; i++)
            if (
              (function (e, t) {
                if (!e) return !1;
                if (e === t) return !0;
                let n = t.length;
                return e.length > n && e.substr(0, n) === t && "." === e[n];
              })(t[i], e)
            )
              return (n = i + 1), !0;
          return !1;
        });
      }
      var eM = class {
        constructor(e, t, n, i, r, s, o, a) {
          if (
            ((this._rootScopeName = e),
            (this.balancedBracketSelectors = s),
            (this._onigLib = a),
            (this._basicScopeAttributesProvider = new eP(n, i)),
            (this._rootId = -1),
            (this._lastRuleId = 0),
            (this._ruleId2desc = [null]),
            (this._includedGrammars = {}),
            (this._grammarRepository = o),
            (this._grammar = eD(t, null)),
            (this._injections = null),
            (this._tokenTypeMatchers = []),
            r)
          )
            for (let e of Object.keys(r))
              for (let t of Y(e, eN))
                this._tokenTypeMatchers.push({
                  matcher: t.matcher,
                  type: r[e],
                });
        }
        get themeProvider() {
          return this._grammarRepository;
        }
        dispose() {
          for (let e of this._ruleId2desc) e && e.dispose();
        }
        createOnigScanner(e) {
          return this._onigLib.createOnigScanner(e);
        }
        createOnigString(e) {
          return this._onigLib.createOnigString(e);
        }
        getMetadataForScope(e) {
          return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
        }
        _collectInjections() {
          let e = [],
            t = this._rootScopeName,
            n = {
              lookup: (e) =>
                e === this._rootScopeName
                  ? this._grammar
                  : this.getExternalGrammar(e),
              injections: (e) => this._grammarRepository.injections(e),
            }.lookup(t);
          if (n) {
            let i = n.injections;
            if (i) for (let t in i) eL(e, t, i[t], this, n);
            let r = this._grammarRepository.injections(t);
            r &&
              r.forEach((t) => {
                let n = this.getExternalGrammar(t);
                if (n) {
                  let t = n.injectionSelector;
                  t && eL(e, t, n, this, n);
                }
              });
          }
          return e.sort((e, t) => e.priority - t.priority), e;
        }
        getInjections() {
          return (
            null === this._injections &&
              (this._injections = this._collectInjections()),
            this._injections
          );
        }
        registerRule(e) {
          let t = ++this._lastRuleId,
            n = e(t);
          return (this._ruleId2desc[t] = n), n;
        }
        getRule(e) {
          return this._ruleId2desc[e];
        }
        getExternalGrammar(e, t) {
          if (this._includedGrammars[e]) return this._includedGrammars[e];
          if (this._grammarRepository) {
            let n = this._grammarRepository.lookup(e);
            if (n)
              return (
                (this._includedGrammars[e] = eD(n, t && t.$base)),
                this._includedGrammars[e]
              );
          }
        }
        tokenizeLine(e, t, n = 0) {
          let i = this._tokenize(e, t, !1, n);
          return {
            tokens: i.lineTokens.getResult(i.ruleStack, i.lineLength),
            ruleStack: i.ruleStack,
            stoppedEarly: i.stoppedEarly,
          };
        }
        tokenizeLine2(e, t, n = 0) {
          let i = this._tokenize(e, t, !0, n);
          return {
            tokens: i.lineTokens.getBinaryResult(i.ruleStack, i.lineLength),
            ruleStack: i.ruleStack,
            stoppedEarly: i.stoppedEarly,
          };
        }
        _tokenize(e, t, n, i) {
          let r;
          if (
            (-1 === this._rootId &&
              ((this._rootId = eb.getCompiledRuleId(
                this._grammar.repository.$self,
                this,
                this._grammar.repository
              )),
              this.getInjections()),
            t && t !== eB.NULL)
          )
            (r = !1), t.reset();
          else {
            let e;
            r = !0;
            let n = this._basicScopeAttributesProvider.getDefaultAttributes(),
              i = this.themeProvider.getDefaults(),
              s = q.set(
                0,
                n.languageId,
                n.tokenType,
                null,
                i.fontStyle,
                i.foregroundId,
                i.backgroundId
              ),
              o = this.getRule(this._rootId).getName(null, null);
            (e = o
              ? eO.createRootAndLookUpScopeName(o, s, this)
              : eO.createRoot("unknown", s)),
              (t = new eB(null, this._rootId, -1, -1, !1, null, e, e));
          }
          e += "\n";
          let s = this.createOnigString(e),
            o = s.content.length,
            a = new eV(
              n,
              e,
              this._tokenTypeMatchers,
              this.balancedBracketSelectors
            ),
            l = eT(this, s, r, 0, t, a, !0, i);
          return (
            J(s),
            {
              lineLength: o,
              lineTokens: a,
              ruleStack: l.stack,
              stoppedEarly: l.stoppedEarly,
            }
          );
        }
      };
      function eD(e, t) {
        return (
          ((e = (function e(t) {
            return Array.isArray(t)
              ? (function (t) {
                  let n = [];
                  for (let i = 0, r = t.length; i < r; i++) n[i] = e(t[i]);
                  return n;
                })(t)
              : "object" == typeof t
              ? (function (t) {
                  let n = {};
                  for (let i in t) n[i] = e(t[i]);
                  return n;
                })(t)
              : t;
          })(e)).repository = e.repository || {}),
          (e.repository.$self = {
            $vscodeTextmateLocation: e.$vscodeTextmateLocation,
            patterns: e.patterns,
            name: e.scopeName,
          }),
          (e.repository.$base = t || e.repository.$self),
          e
        );
      }
      var eO = class e {
          constructor(e, t, n) {
            (this.parent = e), (this.scopePath = t), (this.tokenAttributes = n);
          }
          static fromExtension(t, n) {
            let i = t,
              r = t?.scopePath ?? null;
            for (let t of n)
              i = new e(
                i,
                (r = V.push(r, t.scopeNames)),
                t.encodedTokenAttributes
              );
            return i;
          }
          static createRoot(t, n) {
            return new e(null, new V(null, t), n);
          }
          static createRootAndLookUpScopeName(t, n, i) {
            let r = i.getMetadataForScope(t),
              s = new V(null, t),
              o = i.themeProvider.themeMatch(s),
              a = e.mergeAttributes(n, r, o);
            return new e(null, s, a);
          }
          get scopeName() {
            return this.scopePath.scopeName;
          }
          toString() {
            return this.getScopeNames().join(" ");
          }
          equals(t) {
            return e.equals(this, t);
          }
          static equals(e, t) {
            for (;;) {
              if (e === t || (!e && !t)) return !0;
              if (
                !e ||
                !t ||
                e.scopeName !== t.scopeName ||
                e.tokenAttributes !== t.tokenAttributes
              )
                return !1;
              (e = e.parent), (t = t.parent);
            }
          }
          static mergeAttributes(e, t, n) {
            let i = -1,
              r = 0,
              s = 0;
            return (
              null !== n &&
                ((i = n.fontStyle), (r = n.foregroundId), (s = n.backgroundId)),
              q.set(e, t.languageId, t.tokenType, null, i, r, s)
            );
          }
          pushAttributed(t, n) {
            if (null === t) return this;
            if (-1 === t.indexOf(" ")) return e._pushAttributed(this, t, n);
            let i = t.split(/ /g),
              r = this;
            for (let t of i) r = e._pushAttributed(r, t, n);
            return r;
          }
          static _pushAttributed(t, n, i) {
            let r = i.getMetadataForScope(n),
              s = t.scopePath.push(n),
              o = i.themeProvider.themeMatch(s),
              a = e.mergeAttributes(t.tokenAttributes, r, o);
            return new e(t, s, a);
          }
          getScopeNames() {
            return this.scopePath.getSegments();
          }
          getExtensionIfDefined(e) {
            let t = [],
              n = this;
            for (; n && n !== e; )
              t.push({
                encodedTokenAttributes: n.tokenAttributes,
                scopeNames: n.scopePath.getExtensionIfDefined(
                  n.parent?.scopePath ?? null
                ),
              }),
                (n = n.parent);
            return n === e ? t.reverse() : void 0;
          }
        },
        eI = class e {
          constructor(e, t, n, i, r, s, o, a) {
            (this.parent = e),
              (this.ruleId = t),
              (this.beginRuleCapturedEOL = r),
              (this.endRule = s),
              (this.nameScopesList = o),
              (this.contentNameScopesList = a),
              (this._stackElementBrand = void 0),
              (this.depth = this.parent ? this.parent.depth + 1 : 1),
              (this._enterPos = n),
              (this._anchorPos = i);
          }
          equals(t) {
            return null !== t && e._equals(this, t);
          }
          static _equals(e, t) {
            return (
              e === t ||
              (!!this._structuralEquals(e, t) &&
                eO.equals(e.contentNameScopesList, t.contentNameScopesList))
            );
          }
          static _structuralEquals(e, t) {
            for (;;) {
              if (e === t || (!e && !t)) return !0;
              if (
                !e ||
                !t ||
                e.depth !== t.depth ||
                e.ruleId !== t.ruleId ||
                e.endRule !== t.endRule
              )
                return !1;
              (e = e.parent), (t = t.parent);
            }
          }
          clone() {
            return this;
          }
          static _reset(e) {
            for (; e; ) (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent);
          }
          reset() {
            e._reset(this);
          }
          pop() {
            return this.parent;
          }
          safePop() {
            return this.parent ? this.parent : this;
          }
          push(t, n, i, r, s, o, a) {
            return new e(this, t, n, i, r, s, o, a);
          }
          getEnterPos() {
            return this._enterPos;
          }
          getAnchorPos() {
            return this._anchorPos;
          }
          getRule(e) {
            return e.getRule(this.ruleId);
          }
          toString() {
            let e = [];
            return this._writeString(e, 0), "[" + e.join(",") + "]";
          }
          _writeString(e, t) {
            return (
              this.parent && (t = this.parent._writeString(e, t)),
              (e[t++] = `(${
                this.ruleId
              }, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`),
              t
            );
          }
          withContentNameScopesList(e) {
            return this.contentNameScopesList === e
              ? this
              : this.parent.push(
                  this.ruleId,
                  this._enterPos,
                  this._anchorPos,
                  this.beginRuleCapturedEOL,
                  this.endRule,
                  this.nameScopesList,
                  e
                );
          }
          withEndRule(t) {
            return this.endRule === t
              ? this
              : new e(
                  this.parent,
                  this.ruleId,
                  this._enterPos,
                  this._anchorPos,
                  this.beginRuleCapturedEOL,
                  t,
                  this.nameScopesList,
                  this.contentNameScopesList
                );
          }
          hasSameRuleAs(e) {
            let t = this;
            for (; t && t._enterPos === e._enterPos; ) {
              if (t.ruleId === e.ruleId) return !0;
              t = t.parent;
            }
            return !1;
          }
          toStateStackFrame() {
            return {
              ruleId: this.ruleId,
              beginRuleCapturedEOL: this.beginRuleCapturedEOL,
              endRule: this.endRule,
              nameScopesList:
                this.nameScopesList?.getExtensionIfDefined(
                  this.parent?.nameScopesList ?? null
                ) ?? [],
              contentNameScopesList:
                this.contentNameScopesList?.getExtensionIfDefined(
                  this.nameScopesList
                ) ?? [],
            };
          }
          static pushFrame(t, n) {
            let i = eO.fromExtension(
              t?.nameScopesList ?? null,
              n.nameScopesList
            );
            return new e(
              t,
              n.ruleId,
              n.enterPos ?? -1,
              n.anchorPos ?? -1,
              n.beginRuleCapturedEOL,
              n.endRule,
              i,
              eO.fromExtension(i, n.contentNameScopesList)
            );
          }
        };
      eI.NULL = new eI(null, 0, 0, 0, !1, null, null, null);
      var eB = eI,
        ej = class {
          constructor(e, t) {
            (this.allowAny = !1),
              (this.balancedBracketScopes = e.flatMap((e) =>
                "*" === e
                  ? ((this.allowAny = !0), [])
                  : Y(e, eN).map((e) => e.matcher)
              )),
              (this.unbalancedBracketScopes = t.flatMap((e) =>
                Y(e, eN).map((e) => e.matcher)
              ));
          }
          get matchesAlways() {
            return this.allowAny && 0 === this.unbalancedBracketScopes.length;
          }
          get matchesNever() {
            return 0 === this.balancedBracketScopes.length && !this.allowAny;
          }
          match(e) {
            for (let t of this.unbalancedBracketScopes) if (t(e)) return !1;
            for (let t of this.balancedBracketScopes) if (t(e)) return !0;
            return this.allowAny;
          }
        },
        eV = class {
          constructor(e, t, n, i) {
            (this.balancedBracketSelectors = i),
              (this._emitBinaryTokens = e),
              (this._tokenTypeOverrides = n),
              (this._lineText = null),
              (this._tokens = []),
              (this._binaryTokens = []),
              (this._lastTokenEndIndex = 0);
          }
          produce(e, t) {
            this.produceFromScopes(e.contentNameScopesList, t);
          }
          produceFromScopes(e, t) {
            if (this._lastTokenEndIndex >= t) return;
            if (this._emitBinaryTokens) {
              let n = e?.tokenAttributes ?? 0,
                i = !1;
              if (
                (this.balancedBracketSelectors?.matchesAlways && (i = !0),
                this._tokenTypeOverrides.length > 0 ||
                  (this.balancedBracketSelectors &&
                    !this.balancedBracketSelectors.matchesAlways &&
                    !this.balancedBracketSelectors.matchesNever))
              ) {
                let t = e?.getScopeNames() ?? [];
                for (let e of this._tokenTypeOverrides)
                  e.matcher(t) && (n = q.set(n, 0, e.type, null, -1, 0, 0));
                this.balancedBracketSelectors &&
                  (i = this.balancedBracketSelectors.match(t));
              }
              if (
                (i && (n = q.set(n, 0, 8, i, -1, 0, 0)),
                this._binaryTokens.length > 0 &&
                  this._binaryTokens[this._binaryTokens.length - 1] === n)
              ) {
                this._lastTokenEndIndex = t;
                return;
              }
              this._binaryTokens.push(this._lastTokenEndIndex),
                this._binaryTokens.push(n),
                (this._lastTokenEndIndex = t);
              return;
            }
            let n = e?.getScopeNames() ?? [];
            this._tokens.push({
              startIndex: this._lastTokenEndIndex,
              endIndex: t,
              scopes: n,
            }),
              (this._lastTokenEndIndex = t);
          }
          getResult(e, t) {
            return (
              this._tokens.length > 0 &&
                this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
                this._tokens.pop(),
              0 === this._tokens.length &&
                ((this._lastTokenEndIndex = -1),
                this.produce(e, t),
                (this._tokens[this._tokens.length - 1].startIndex = 0)),
              this._tokens
            );
          }
          getBinaryResult(e, t) {
            this._binaryTokens.length > 0 &&
              this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
              (this._binaryTokens.pop(), this._binaryTokens.pop()),
              0 === this._binaryTokens.length &&
                ((this._lastTokenEndIndex = -1),
                this.produce(e, t),
                (this._binaryTokens[this._binaryTokens.length - 2] = 0));
            let n = new Uint32Array(this._binaryTokens.length);
            for (let e = 0, t = this._binaryTokens.length; e < t; e++)
              n[e] = this._binaryTokens[e];
            return n;
          }
        },
        eU = class {
          constructor(e, t) {
            (this._onigLib = t),
              (this._grammars = new Map()),
              (this._rawGrammars = new Map()),
              (this._injectionGrammars = new Map()),
              (this._theme = e);
          }
          dispose() {
            for (let e of this._grammars.values()) e.dispose();
          }
          setTheme(e) {
            this._theme = e;
          }
          getColorMap() {
            return this._theme.getColorMap();
          }
          addGrammar(e, t) {
            this._rawGrammars.set(e.scopeName, e),
              t && this._injectionGrammars.set(e.scopeName, t);
          }
          lookup(e) {
            return this._rawGrammars.get(e);
          }
          injections(e) {
            return this._injectionGrammars.get(e);
          }
          getDefaults() {
            return this._theme.getDefaults();
          }
          themeMatch(e) {
            return this._theme.match(e);
          }
          grammarForScopeName(e, t, n, i, r) {
            if (!this._grammars.has(e)) {
              let s = this._rawGrammars.get(e);
              if (!s) return null;
              this._grammars.set(
                e,
                new eM(e, s, t, n, i, r, this, this._onigLib)
              );
            }
            return this._grammars.get(e);
          }
        },
        eF = class {
          constructor(e) {
            (this._options = e),
              (this._syncRegistry = new eU(
                j.createFromRawTheme(e.theme, e.colorMap),
                e.onigLib
              )),
              (this._ensureGrammarCache = new Map());
          }
          dispose() {
            this._syncRegistry.dispose();
          }
          setTheme(e, t) {
            this._syncRegistry.setTheme(j.createFromRawTheme(e, t));
          }
          getColorMap() {
            return this._syncRegistry.getColorMap();
          }
          loadGrammarWithEmbeddedLanguages(e, t, n) {
            return this.loadGrammarWithConfiguration(e, t, {
              embeddedLanguages: n,
            });
          }
          loadGrammarWithConfiguration(e, t, n) {
            return this._loadGrammar(
              e,
              t,
              n.embeddedLanguages,
              n.tokenTypes,
              new ej(
                n.balancedBracketSelectors || [],
                n.unbalancedBracketSelectors || []
              )
            );
          }
          loadGrammar(e) {
            return this._loadGrammar(e, 0, null, null, null);
          }
          _loadGrammar(e, t, n, i, r) {
            let s = new et(this._syncRegistry, e);
            for (; s.Q.length > 0; )
              s.Q.map((e) => this._loadSingleGrammar(e.scopeName)),
                s.processQueue();
            return this._grammarForScopeName(e, t, n, i, r);
          }
          _loadSingleGrammar(e) {
            this._ensureGrammarCache.has(e) ||
              (this._doLoadSingleGrammar(e),
              this._ensureGrammarCache.set(e, !0));
          }
          _doLoadSingleGrammar(e) {
            let t = this._options.loadGrammar(e);
            if (t) {
              let n =
                "function" == typeof this._options.getInjections
                  ? this._options.getInjections(e)
                  : void 0;
              this._syncRegistry.addGrammar(t, n);
            }
          }
          addGrammar(e, t = [], n = 0, i = null) {
            return (
              this._syncRegistry.addGrammar(e, t),
              this._grammarForScopeName(e.scopeName, n, i)
            );
          }
          _grammarForScopeName(e, t = 0, n = null, i = null, r = null) {
            return this._syncRegistry.grammarForScopeName(e, t, n, i, r);
          }
        },
        eG = eB.NULL;
      let e$ = [
        "area",
        "base",
        "basefont",
        "bgsound",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "image",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
      ];
      class eW {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function ez(e, t) {
        let n = {},
          i = {},
          r = -1;
        for (; ++r < e.length; )
          Object.assign(n, e[r].property), Object.assign(i, e[r].normal);
        return new eW(n, i, t);
      }
      function eH(e) {
        return e.toLowerCase();
      }
      (eW.prototype.property = {}),
        (eW.prototype.normal = {}),
        (eW.prototype.space = null);
      class eq {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (eq.prototype.space = null),
        (eq.prototype.boolean = !1),
        (eq.prototype.booleanish = !1),
        (eq.prototype.overloadedBoolean = !1),
        (eq.prototype.number = !1),
        (eq.prototype.commaSeparated = !1),
        (eq.prototype.spaceSeparated = !1),
        (eq.prototype.commaOrSpaceSeparated = !1),
        (eq.prototype.mustUseProperty = !1),
        (eq.prototype.defined = !1);
      let eY = 0,
        eK = e2(),
        eX = e2(),
        eJ = e2(),
        eZ = e2(),
        eQ = e2(),
        e0 = e2(),
        e1 = e2();
      function e2() {
        return 2 ** ++eY;
      }
      let e5 = Object.keys(d);
      class e8 extends eq {
        constructor(e, t, n, i) {
          var r, s;
          let o = -1;
          if ((super(e, t), i && (this.space = i), "number" == typeof n))
            for (; ++o < e5.length; ) {
              let e = e5[o];
              (r = e5[o]), (s = (n & d[e]) === d[e]) && (this[r] = s);
            }
        }
      }
      e8.prototype.defined = !0;
      let e4 = {}.hasOwnProperty;
      function e3(e) {
        let t;
        let n = {},
          i = {};
        for (t in e.properties)
          if (e4.call(e.properties, t)) {
            let r = e.properties[t],
              s = new e8(t, e.transform(e.attributes || {}, t), r, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (s.mustUseProperty = !0),
              (n[t] = s),
              (i[eH(t)] = t),
              (i[eH(s.attribute)] = t);
          }
        return new eW(n, i, e.space);
      }
      let e6 = e3({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        e7 = e3({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function e9(e, t) {
        return t in e ? e[t] : t;
      }
      function te(e, t) {
        return e9(e, t.toLowerCase());
      }
      let tt = e3({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: te,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        tn = e3({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: eX,
            ariaAutoComplete: null,
            ariaBusy: eX,
            ariaChecked: eX,
            ariaColCount: eZ,
            ariaColIndex: eZ,
            ariaColSpan: eZ,
            ariaControls: eQ,
            ariaCurrent: null,
            ariaDescribedBy: eQ,
            ariaDetails: null,
            ariaDisabled: eX,
            ariaDropEffect: eQ,
            ariaErrorMessage: null,
            ariaExpanded: eX,
            ariaFlowTo: eQ,
            ariaGrabbed: eX,
            ariaHasPopup: null,
            ariaHidden: eX,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: eQ,
            ariaLevel: eZ,
            ariaLive: null,
            ariaModal: eX,
            ariaMultiLine: eX,
            ariaMultiSelectable: eX,
            ariaOrientation: null,
            ariaOwns: eQ,
            ariaPlaceholder: null,
            ariaPosInSet: eZ,
            ariaPressed: eX,
            ariaReadOnly: eX,
            ariaRelevant: null,
            ariaRequired: eX,
            ariaRoleDescription: eQ,
            ariaRowCount: eZ,
            ariaRowIndex: eZ,
            ariaRowSpan: eZ,
            ariaSelected: eX,
            ariaSetSize: eZ,
            ariaSort: null,
            ariaValueMax: eZ,
            ariaValueMin: eZ,
            ariaValueNow: eZ,
            ariaValueText: null,
            role: null,
          },
        }),
        ti = e3({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: te,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: e0,
            acceptCharset: eQ,
            accessKey: eQ,
            action: null,
            allow: null,
            allowFullScreen: eK,
            allowPaymentRequest: eK,
            allowUserMedia: eK,
            alt: null,
            as: null,
            async: eK,
            autoCapitalize: null,
            autoComplete: eQ,
            autoFocus: eK,
            autoPlay: eK,
            blocking: eQ,
            capture: null,
            charSet: null,
            checked: eK,
            cite: null,
            className: eQ,
            cols: eZ,
            colSpan: null,
            content: null,
            contentEditable: eX,
            controls: eK,
            controlsList: eQ,
            coords: eZ | e0,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: eK,
            defer: eK,
            dir: null,
            dirName: null,
            disabled: eK,
            download: eJ,
            draggable: eX,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: eK,
            formTarget: null,
            headers: eQ,
            height: eZ,
            hidden: eK,
            high: eZ,
            href: null,
            hrefLang: null,
            htmlFor: eQ,
            httpEquiv: eQ,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: eK,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: eK,
            itemId: null,
            itemProp: eQ,
            itemRef: eQ,
            itemScope: eK,
            itemType: eQ,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: eK,
            low: eZ,
            manifest: null,
            max: null,
            maxLength: eZ,
            media: null,
            method: null,
            min: null,
            minLength: eZ,
            multiple: eK,
            muted: eK,
            name: null,
            nonce: null,
            noModule: eK,
            noValidate: eK,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: eK,
            optimum: eZ,
            pattern: null,
            ping: eQ,
            placeholder: null,
            playsInline: eK,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: eK,
            referrerPolicy: null,
            rel: eQ,
            required: eK,
            reversed: eK,
            rows: eZ,
            rowSpan: eZ,
            sandbox: eQ,
            scope: null,
            scoped: eK,
            seamless: eK,
            selected: eK,
            shadowRootClonable: eK,
            shadowRootDelegatesFocus: eK,
            shadowRootMode: null,
            shape: null,
            size: eZ,
            sizes: null,
            slot: null,
            span: eZ,
            spellCheck: eX,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: eZ,
            step: null,
            style: null,
            tabIndex: eZ,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: eK,
            useMap: null,
            value: eX,
            width: eZ,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: eQ,
            axis: null,
            background: null,
            bgColor: null,
            border: eZ,
            borderColor: null,
            bottomMargin: eZ,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: eK,
            declare: eK,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: eZ,
            leftMargin: eZ,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: eZ,
            marginWidth: eZ,
            noResize: eK,
            noHref: eK,
            noShade: eK,
            noWrap: eK,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: eZ,
            rules: null,
            scheme: null,
            scrolling: eX,
            standby: null,
            summary: null,
            text: null,
            topMargin: eZ,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: eZ,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: eK,
            disableRemotePlayback: eK,
            prefix: null,
            property: null,
            results: eZ,
            security: null,
            unselectable: null,
          },
        }),
        tr = e3({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: e9,
          properties: {
            about: e1,
            accentHeight: eZ,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: eZ,
            amplitude: eZ,
            arabicForm: null,
            ascent: eZ,
            attributeName: null,
            attributeType: null,
            azimuth: eZ,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: eZ,
            by: null,
            calcMode: null,
            capHeight: eZ,
            className: eQ,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: eZ,
            diffuseConstant: eZ,
            direction: null,
            display: null,
            dur: null,
            divisor: eZ,
            dominantBaseline: null,
            download: eK,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: eZ,
            enableBackground: null,
            end: null,
            event: null,
            exponent: eZ,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: eZ,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: e0,
            g2: e0,
            glyphName: e0,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: eZ,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: eZ,
            horizOriginX: eZ,
            horizOriginY: eZ,
            id: null,
            ideographic: eZ,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: eZ,
            k: eZ,
            k1: eZ,
            k2: eZ,
            k3: eZ,
            k4: eZ,
            kernelMatrix: e1,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: eZ,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: eZ,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: eZ,
            overlineThickness: eZ,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: eZ,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: eQ,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: eZ,
            pointsAtY: eZ,
            pointsAtZ: eZ,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: e1,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: e1,
            rev: e1,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: e1,
            requiredFeatures: e1,
            requiredFonts: e1,
            requiredFormats: e1,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: eZ,
            specularExponent: eZ,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: eZ,
            strikethroughThickness: eZ,
            string: null,
            stroke: null,
            strokeDashArray: e1,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: eZ,
            strokeOpacity: eZ,
            strokeWidth: null,
            style: null,
            surfaceScale: eZ,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: e1,
            tabIndex: eZ,
            tableValues: null,
            target: null,
            targetX: eZ,
            targetY: eZ,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: e1,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: eZ,
            underlineThickness: eZ,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: eZ,
            values: null,
            vAlphabetic: eZ,
            vMathematical: eZ,
            vectorEffect: null,
            vHanging: eZ,
            vIdeographic: eZ,
            version: null,
            vertAdvY: eZ,
            vertOriginX: eZ,
            vertOriginY: eZ,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: eZ,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        ts = ez([e7, e6, tt, tn, ti], "html"),
        to = ez([e7, e6, tt, tn, tr], "svg"),
        ta = {}.hasOwnProperty,
        tl = /["&'<>`]/g,
        tu = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        th = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
        tc = /[|\\{}()[\]^$+*?.]/g,
        td = new WeakMap(),
        tp = /[\dA-Fa-f]/,
        tm = /\d/,
        tf = [
          "AElig",
          "AMP",
          "Aacute",
          "Acirc",
          "Agrave",
          "Aring",
          "Atilde",
          "Auml",
          "COPY",
          "Ccedil",
          "ETH",
          "Eacute",
          "Ecirc",
          "Egrave",
          "Euml",
          "GT",
          "Iacute",
          "Icirc",
          "Igrave",
          "Iuml",
          "LT",
          "Ntilde",
          "Oacute",
          "Ocirc",
          "Ograve",
          "Oslash",
          "Otilde",
          "Ouml",
          "QUOT",
          "REG",
          "THORN",
          "Uacute",
          "Ucirc",
          "Ugrave",
          "Uuml",
          "Yacute",
          "aacute",
          "acirc",
          "acute",
          "aelig",
          "agrave",
          "amp",
          "aring",
          "atilde",
          "auml",
          "brvbar",
          "ccedil",
          "cedil",
          "cent",
          "copy",
          "curren",
          "deg",
          "divide",
          "eacute",
          "ecirc",
          "egrave",
          "eth",
          "euml",
          "frac12",
          "frac14",
          "frac34",
          "gt",
          "iacute",
          "icirc",
          "iexcl",
          "igrave",
          "iquest",
          "iuml",
          "laquo",
          "lt",
          "macr",
          "micro",
          "middot",
          "nbsp",
          "not",
          "ntilde",
          "oacute",
          "ocirc",
          "ograve",
          "ordf",
          "ordm",
          "oslash",
          "otilde",
          "ouml",
          "para",
          "plusmn",
          "pound",
          "quot",
          "raquo",
          "reg",
          "sect",
          "shy",
          "sup1",
          "sup2",
          "sup3",
          "szlig",
          "thorn",
          "times",
          "uacute",
          "ucirc",
          "ugrave",
          "uml",
          "uuml",
          "yacute",
          "yen",
          "yuml",
        ],
        tg = {
          nbsp: "\xa0",
          iexcl: "\xa1",
          cent: "\xa2",
          pound: "\xa3",
          curren: "\xa4",
          yen: "\xa5",
          brvbar: "\xa6",
          sect: "\xa7",
          uml: "\xa8",
          copy: "\xa9",
          ordf: "\xaa",
          laquo: "\xab",
          not: "\xac",
          shy: "\xad",
          reg: "\xae",
          macr: "\xaf",
          deg: "\xb0",
          plusmn: "\xb1",
          sup2: "\xb2",
          sup3: "\xb3",
          acute: "\xb4",
          micro: "\xb5",
          para: "\xb6",
          middot: "\xb7",
          cedil: "\xb8",
          sup1: "\xb9",
          ordm: "\xba",
          raquo: "\xbb",
          frac14: "\xbc",
          frac12: "\xbd",
          frac34: "\xbe",
          iquest: "\xbf",
          Agrave: "\xc0",
          Aacute: "\xc1",
          Acirc: "\xc2",
          Atilde: "\xc3",
          Auml: "\xc4",
          Aring: "\xc5",
          AElig: "\xc6",
          Ccedil: "\xc7",
          Egrave: "\xc8",
          Eacute: "\xc9",
          Ecirc: "\xca",
          Euml: "\xcb",
          Igrave: "\xcc",
          Iacute: "\xcd",
          Icirc: "\xce",
          Iuml: "\xcf",
          ETH: "\xd0",
          Ntilde: "\xd1",
          Ograve: "\xd2",
          Oacute: "\xd3",
          Ocirc: "\xd4",
          Otilde: "\xd5",
          Ouml: "\xd6",
          times: "\xd7",
          Oslash: "\xd8",
          Ugrave: "\xd9",
          Uacute: "\xda",
          Ucirc: "\xdb",
          Uuml: "\xdc",
          Yacute: "\xdd",
          THORN: "\xde",
          szlig: "\xdf",
          agrave: "\xe0",
          aacute: "\xe1",
          acirc: "\xe2",
          atilde: "\xe3",
          auml: "\xe4",
          aring: "\xe5",
          aelig: "\xe6",
          ccedil: "\xe7",
          egrave: "\xe8",
          eacute: "\xe9",
          ecirc: "\xea",
          euml: "\xeb",
          igrave: "\xec",
          iacute: "\xed",
          icirc: "\xee",
          iuml: "\xef",
          eth: "\xf0",
          ntilde: "\xf1",
          ograve: "\xf2",
          oacute: "\xf3",
          ocirc: "\xf4",
          otilde: "\xf5",
          ouml: "\xf6",
          divide: "\xf7",
          oslash: "\xf8",
          ugrave: "\xf9",
          uacute: "\xfa",
          ucirc: "\xfb",
          uuml: "\xfc",
          yacute: "\xfd",
          thorn: "\xfe",
          yuml: "\xff",
          fnof: "ƒ",
          Alpha: "Α",
          Beta: "Β",
          Gamma: "Γ",
          Delta: "Δ",
          Epsilon: "Ε",
          Zeta: "Ζ",
          Eta: "Η",
          Theta: "Θ",
          Iota: "Ι",
          Kappa: "Κ",
          Lambda: "Λ",
          Mu: "Μ",
          Nu: "Ν",
          Xi: "Ξ",
          Omicron: "Ο",
          Pi: "Π",
          Rho: "Ρ",
          Sigma: "Σ",
          Tau: "Τ",
          Upsilon: "Υ",
          Phi: "Φ",
          Chi: "Χ",
          Psi: "Ψ",
          Omega: "Ω",
          alpha: "α",
          beta: "β",
          gamma: "γ",
          delta: "δ",
          epsilon: "ε",
          zeta: "ζ",
          eta: "η",
          theta: "θ",
          iota: "ι",
          kappa: "κ",
          lambda: "λ",
          mu: "μ",
          nu: "ν",
          xi: "ξ",
          omicron: "ο",
          pi: "π",
          rho: "ρ",
          sigmaf: "ς",
          sigma: "σ",
          tau: "τ",
          upsilon: "υ",
          phi: "φ",
          chi: "χ",
          psi: "ψ",
          omega: "ω",
          thetasym: "ϑ",
          upsih: "ϒ",
          piv: "ϖ",
          bull: "•",
          hellip: "…",
          prime: "′",
          Prime: "″",
          oline: "‾",
          frasl: "⁄",
          weierp: "℘",
          image: "ℑ",
          real: "ℜ",
          trade: "™",
          alefsym: "ℵ",
          larr: "←",
          uarr: "↑",
          rarr: "→",
          darr: "↓",
          harr: "↔",
          crarr: "↵",
          lArr: "⇐",
          uArr: "⇑",
          rArr: "⇒",
          dArr: "⇓",
          hArr: "⇔",
          forall: "∀",
          part: "∂",
          exist: "∃",
          empty: "∅",
          nabla: "∇",
          isin: "∈",
          notin: "∉",
          ni: "∋",
          prod: "∏",
          sum: "∑",
          minus: "−",
          lowast: "∗",
          radic: "√",
          prop: "∝",
          infin: "∞",
          ang: "∠",
          and: "∧",
          or: "∨",
          cap: "∩",
          cup: "∪",
          int: "∫",
          there4: "∴",
          sim: "∼",
          cong: "≅",
          asymp: "≈",
          ne: "≠",
          equiv: "≡",
          le: "≤",
          ge: "≥",
          sub: "⊂",
          sup: "⊃",
          nsub: "⊄",
          sube: "⊆",
          supe: "⊇",
          oplus: "⊕",
          otimes: "⊗",
          perp: "⊥",
          sdot: "⋅",
          lceil: "⌈",
          rceil: "⌉",
          lfloor: "⌊",
          rfloor: "⌋",
          lang: "〈",
          rang: "〉",
          loz: "◊",
          spades: "♠",
          clubs: "♣",
          hearts: "♥",
          diams: "♦",
          quot: '"',
          amp: "&",
          lt: "<",
          gt: ">",
          OElig: "Œ",
          oelig: "œ",
          Scaron: "Š",
          scaron: "š",
          Yuml: "Ÿ",
          circ: "ˆ",
          tilde: "˜",
          ensp: " ",
          emsp: " ",
          thinsp: " ",
          zwnj: "‌",
          zwj: "‍",
          lrm: "‎",
          rlm: "‏",
          ndash: "–",
          mdash: "—",
          lsquo: "‘",
          rsquo: "’",
          sbquo: "‚",
          ldquo: "“",
          rdquo: "”",
          bdquo: "„",
          dagger: "†",
          Dagger: "‡",
          permil: "‰",
          lsaquo: "‹",
          rsaquo: "›",
          euro: "€",
        },
        ty = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
        tv = {}.hasOwnProperty,
        tb = {};
      for (s in tg) tv.call(tg, s) && (tb[tg[s]] = s);
      let tw = /[^\dA-Za-z]/;
      function tS(e, t, n) {
        let i,
          r = (function (e, t, n) {
            let i = "&#x" + e.toString(16).toUpperCase();
            return n && t && !tp.test(String.fromCharCode(t)) ? i : i + ";";
          })(e, t, n.omitOptionalSemicolons);
        if (
          ((n.useNamedReferences || n.useShortestReferences) &&
            (i = (function (e, t, n, i) {
              let r = String.fromCharCode(e);
              if (tv.call(tb, r)) {
                let e = tb[r],
                  s = "&" + e;
                return n &&
                  tf.includes(e) &&
                  !ty.includes(e) &&
                  (!i || (t && 61 !== t && tw.test(String.fromCharCode(t))))
                  ? s
                  : s + ";";
              }
              return "";
            })(e, t, n.omitOptionalSemicolons, n.attribute)),
          (n.useShortestReferences || !i) && n.useShortestReferences)
        ) {
          let i = (function (e, t, n) {
            let i = "&#" + String(e);
            return n && t && !tm.test(String.fromCharCode(t)) ? i : i + ";";
          })(e, t, n.omitOptionalSemicolons);
          i.length < r.length && (r = i);
        }
        return i && (!n.useShortestReferences || i.length < r.length) ? i : r;
      }
      function tk(e, t) {
        return (function (e, t) {
          var n;
          let i;
          if (
            ((e = e.replace(
              t.subset
                ? ((n = t.subset),
                  (i = td.get(n)) ||
                    ((i = (function (e) {
                      let t = [],
                        n = -1;
                      for (; ++n < e.length; ) t.push(e[n].replace(tc, "\\$&"));
                      return RegExp("(?:" + t.join("|") + ")", "g");
                    })(n)),
                    td.set(n, i)),
                  i)
                : tl,
              r
            )),
            t.subset || t.escapeOnly)
          )
            return e;
          return e
            .replace(tu, function (e, n, i) {
              return t.format(
                (e.charCodeAt(0) - 55296) * 1024 +
                  e.charCodeAt(1) -
                  56320 +
                  65536,
                i.charCodeAt(n + 2),
                t
              );
            })
            .replace(th, r);
          function r(e, n, i) {
            return t.format(e.charCodeAt(0), i.charCodeAt(n + 1), t);
          }
        })(e, Object.assign({ format: tS }, t));
      }
      let tx = /^>|^->|<!--|-->|--!>|<!-$/g,
        tP = [">"],
        tA = ["<", ">"];
      function tC(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let i = 0,
          r = n.indexOf(t);
        for (; -1 !== r; ) i++, (r = n.indexOf(t, r + t.length));
        return i;
      }
      let tT = /^data[-\w.:]+$/i,
        t_ = /-[a-z]/g,
        tE = /[A-Z]/g;
      function tR(e) {
        return "-" + e.toLowerCase();
      }
      function tL(e) {
        return e.charAt(1).toUpperCase();
      }
      let tN = /[ \t\n\f\r]/g;
      function tM(e) {
        return "object" == typeof e ? "text" === e.type && tD(e.value) : tD(e);
      }
      function tD(e) {
        return "" === e.replace(tN, "");
      }
      let tO = tj(1),
        tI = tj(-1),
        tB = [];
      function tj(e) {
        return function (t, n, i) {
          let r = t ? t.children : tB,
            s = (n || 0) + e,
            o = r[s];
          if (!i) for (; o && tM(o); ) (s += e), (o = r[s]);
          return o;
        };
      }
      let tV = {}.hasOwnProperty;
      function tU(e) {
        return function (t, n, i) {
          return tV.call(e, t.tagName) && e[t.tagName](t, n, i);
        };
      }
      let tF = tU({
        body: function (e, t, n) {
          let i = tO(n, t);
          return !i || "comment" !== i.type;
        },
        caption: tG,
        colgroup: tG,
        dd: function (e, t, n) {
          let i = tO(n, t);
          return (
            !i ||
            ("element" === i.type && ("dt" === i.tagName || "dd" === i.tagName))
          );
        },
        dt: function (e, t, n) {
          let i = tO(n, t);
          return !!(
            i &&
            "element" === i.type &&
            ("dt" === i.tagName || "dd" === i.tagName)
          );
        },
        head: tG,
        html: function (e, t, n) {
          let i = tO(n, t);
          return !i || "comment" !== i.type;
        },
        li: function (e, t, n) {
          let i = tO(n, t);
          return !i || ("element" === i.type && "li" === i.tagName);
        },
        optgroup: function (e, t, n) {
          let i = tO(n, t);
          return !i || ("element" === i.type && "optgroup" === i.tagName);
        },
        option: function (e, t, n) {
          let i = tO(n, t);
          return (
            !i ||
            ("element" === i.type &&
              ("option" === i.tagName || "optgroup" === i.tagName))
          );
        },
        p: function (e, t, n) {
          let i = tO(n, t);
          return i
            ? "element" === i.type &&
                ("address" === i.tagName ||
                  "article" === i.tagName ||
                  "aside" === i.tagName ||
                  "blockquote" === i.tagName ||
                  "details" === i.tagName ||
                  "div" === i.tagName ||
                  "dl" === i.tagName ||
                  "fieldset" === i.tagName ||
                  "figcaption" === i.tagName ||
                  "figure" === i.tagName ||
                  "footer" === i.tagName ||
                  "form" === i.tagName ||
                  "h1" === i.tagName ||
                  "h2" === i.tagName ||
                  "h3" === i.tagName ||
                  "h4" === i.tagName ||
                  "h5" === i.tagName ||
                  "h6" === i.tagName ||
                  "header" === i.tagName ||
                  "hgroup" === i.tagName ||
                  "hr" === i.tagName ||
                  "main" === i.tagName ||
                  "menu" === i.tagName ||
                  "nav" === i.tagName ||
                  "ol" === i.tagName ||
                  "p" === i.tagName ||
                  "pre" === i.tagName ||
                  "section" === i.tagName ||
                  "table" === i.tagName ||
                  "ul" === i.tagName)
            : !n ||
                !(
                  "element" === n.type &&
                  ("a" === n.tagName ||
                    "audio" === n.tagName ||
                    "del" === n.tagName ||
                    "ins" === n.tagName ||
                    "map" === n.tagName ||
                    "noscript" === n.tagName ||
                    "video" === n.tagName)
                );
        },
        rp: t$,
        rt: t$,
        tbody: function (e, t, n) {
          let i = tO(n, t);
          return (
            !i ||
            ("element" === i.type &&
              ("tbody" === i.tagName || "tfoot" === i.tagName))
          );
        },
        td: tW,
        tfoot: function (e, t, n) {
          return !tO(n, t);
        },
        th: tW,
        thead: function (e, t, n) {
          let i = tO(n, t);
          return !!(
            i &&
            "element" === i.type &&
            ("tbody" === i.tagName || "tfoot" === i.tagName)
          );
        },
        tr: function (e, t, n) {
          let i = tO(n, t);
          return !i || ("element" === i.type && "tr" === i.tagName);
        },
      });
      function tG(e, t, n) {
        let i = tO(n, t, !0);
        return (
          !i ||
          ("comment" !== i.type &&
            !("text" === i.type && tM(i.value.charAt(0))))
        );
      }
      function t$(e, t, n) {
        let i = tO(n, t);
        return (
          !i ||
          ("element" === i.type && ("rp" === i.tagName || "rt" === i.tagName))
        );
      }
      function tW(e, t, n) {
        let i = tO(n, t);
        return (
          !i ||
          ("element" === i.type && ("td" === i.tagName || "th" === i.tagName))
        );
      }
      let tz = tU({
          body: function (e) {
            let t = tO(e, -1, !0);
            return (
              !t ||
              ("comment" !== t.type &&
                !("text" === t.type && tM(t.value.charAt(0))) &&
                !(
                  "element" === t.type &&
                  ("meta" === t.tagName ||
                    "link" === t.tagName ||
                    "script" === t.tagName ||
                    "style" === t.tagName ||
                    "template" === t.tagName)
                ))
            );
          },
          colgroup: function (e, t, n) {
            let i = tI(n, t),
              r = tO(e, -1, !0);
            return (
              !(
                n &&
                i &&
                "element" === i.type &&
                "colgroup" === i.tagName &&
                tF(i, n.children.indexOf(i), n)
              ) && !!(r && "element" === r.type && "col" === r.tagName)
            );
          },
          head: function (e) {
            let t = new Set();
            for (let n of e.children)
              if (
                "element" === n.type &&
                ("base" === n.tagName || "title" === n.tagName)
              ) {
                if (t.has(n.tagName)) return !1;
                t.add(n.tagName);
              }
            let n = e.children[0];
            return !n || "element" === n.type;
          },
          html: function (e) {
            let t = tO(e, -1);
            return !t || "comment" !== t.type;
          },
          tbody: function (e, t, n) {
            let i = tI(n, t),
              r = tO(e, -1);
            return (
              !(
                n &&
                i &&
                "element" === i.type &&
                ("thead" === i.tagName || "tbody" === i.tagName) &&
                tF(i, n.children.indexOf(i), n)
              ) && !!(r && "element" === r.type && "tr" === r.tagName)
            );
          },
        }),
        tH = {
          name: [
            ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
            ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")],
          ],
          unquoted: [
            ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
            ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")],
          ],
          single: [
            ["&'".split(""), "\"&'`".split("")],
            ["\0&'".split(""), "\0\"&'`".split("")],
          ],
          double: [
            ['"&'.split(""), "\"&'`".split("")],
            ['\0"&'.split(""), "\0\"&'`".split("")],
          ],
        },
        tq = ["<", "&"];
      function tY(e, t, n, i) {
        return n &&
          "element" === n.type &&
          ("script" === n.tagName || "style" === n.tagName)
          ? e.value
          : tk(
              e.value,
              Object.assign({}, i.settings.characterReferences, { subset: tq })
            );
      }
      let tK = (function (e, t) {
          let n = t || {};
          function i(t, ...n) {
            let r = i.invalid,
              s = i.handlers;
            if (t && ta.call(t, e)) {
              let n = String(t[e]);
              r = ta.call(s, n) ? s[n] : i.unknown;
            }
            if (r) return r.call(this, t, ...n);
          }
          return (
            (i.handlers = n.handlers || {}),
            (i.invalid = n.invalid),
            (i.unknown = n.unknown),
            i
          );
        })("type", {
          invalid: function (e) {
            throw Error("Expected node, not `" + e + "`");
          },
          unknown: function (e) {
            throw Error("Cannot compile unknown node `" + e.type + "`");
          },
          handlers: {
            comment: function (e, t, n, i) {
              return i.settings.bogusComments
                ? "<?" +
                    tk(
                      e.value,
                      Object.assign({}, i.settings.characterReferences, {
                        subset: tP,
                      })
                    ) +
                    ">"
                : "<!--" +
                    e.value.replace(tx, function (e) {
                      return tk(
                        e,
                        Object.assign({}, i.settings.characterReferences, {
                          subset: tA,
                        })
                      );
                    }) +
                    "-->";
            },
            doctype: function (e, t, n, i) {
              return (
                "<!" +
                (i.settings.upperDoctype ? "DOCTYPE" : "doctype") +
                (i.settings.tightDoctype ? "" : " ") +
                "html>"
              );
            },
            element: function (e, t, n, i) {
              let r;
              let s = i.schema,
                o = "svg" !== s.space && i.settings.omitOptionalTags,
                a =
                  "svg" === s.space
                    ? i.settings.closeEmptyElements
                    : i.settings.voids.includes(e.tagName.toLowerCase()),
                l = [];
              "html" === s.space && "svg" === e.tagName && (i.schema = to);
              let u = (function (e, t) {
                  let n;
                  let i = [],
                    r = -1;
                  if (t) {
                    for (n in t)
                      if (null !== t[n] && void 0 !== t[n]) {
                        let r = (function (e, t, n) {
                          let i;
                          let r = (function (e, t) {
                              let n = eH(t),
                                i = t,
                                r = eq;
                              if (n in e.normal) return e.property[e.normal[n]];
                              if (
                                n.length > 4 &&
                                "data" === n.slice(0, 4) &&
                                tT.test(t)
                              ) {
                                if ("-" === t.charAt(4)) {
                                  let e = t.slice(5).replace(t_, tL);
                                  i =
                                    "data" +
                                    e.charAt(0).toUpperCase() +
                                    e.slice(1);
                                } else {
                                  let e = t.slice(4);
                                  if (!t_.test(e)) {
                                    let n = e.replace(tE, tR);
                                    "-" !== n.charAt(0) && (n = "-" + n),
                                      (t = "data" + n);
                                  }
                                }
                                r = e8;
                              }
                              return new r(i, t);
                            })(e.schema, t),
                            s =
                              e.settings.allowParseErrors &&
                              "html" === e.schema.space
                                ? 0
                                : 1,
                            o = e.settings.allowDangerousCharacters ? 0 : 1,
                            a = e.quote;
                          if (
                            (r.overloadedBoolean &&
                            (n === r.attribute || "" === n)
                              ? (n = !0)
                              : (r.boolean ||
                                  (r.overloadedBoolean &&
                                    "string" != typeof n)) &&
                                (n = !!n),
                            null == n ||
                              !1 === n ||
                              ("number" == typeof n && Number.isNaN(n)))
                          )
                            return "";
                          let l = tk(
                            r.attribute,
                            Object.assign({}, e.settings.characterReferences, {
                              subset: tH.name[s][o],
                            })
                          );
                          return !0 === n
                            ? l
                            : ((n = Array.isArray(n)
                                ? (r.commaSeparated
                                    ? function (e, t) {
                                        let n = t || {};
                                        return (
                                          "" === e[e.length - 1]
                                            ? [...e, ""]
                                            : e
                                        )
                                          .join(
                                            (n.padRight ? " " : "") +
                                              "," +
                                              (!1 === n.padLeft ? "" : " ")
                                          )
                                          .trim();
                                      }
                                    : function (e) {
                                        return e.join(" ").trim();
                                      })(n, {
                                    padLeft:
                                      !e.settings.tightCommaSeparatedLists,
                                  })
                                : String(n)),
                              e.settings.collapseEmptyAttributes && !n)
                            ? l
                            : (e.settings.preferUnquoted &&
                                (i = tk(
                                  n,
                                  Object.assign(
                                    {},
                                    e.settings.characterReferences,
                                    { attribute: !0, subset: tH.unquoted[s][o] }
                                  )
                                )),
                              i !== n &&
                                (e.settings.quoteSmart &&
                                  tC(n, a) > tC(n, e.alternative) &&
                                  (a = e.alternative),
                                (i =
                                  a +
                                  tk(
                                    n,
                                    Object.assign(
                                      {},
                                      e.settings.characterReferences,
                                      {
                                        subset: ("'" === a
                                          ? tH.single
                                          : tH.double)[s][o],
                                        attribute: !0,
                                      }
                                    )
                                  ) +
                                  a)),
                              l + (i ? "=" + i : i));
                        })(e, n, t[n]);
                        r && i.push(r);
                      }
                  }
                  for (; ++r < i.length; ) {
                    let t = e.settings.tightAttributes
                      ? i[r].charAt(i[r].length - 1)
                      : void 0;
                    r !== i.length - 1 &&
                      '"' !== t &&
                      "'" !== t &&
                      (i[r] += " ");
                  }
                  return i.join("");
                })(i, e.properties),
                h = i.all(
                  "html" === s.space && "template" === e.tagName ? e.content : e
                );
              return (
                (i.schema = s),
                h && (a = !1),
                (!u && o && tz(e, t, n)) ||
                  (l.push("<", e.tagName, u ? " " + u : ""),
                  a &&
                    ("svg" === s.space || i.settings.closeSelfClosing) &&
                    ((r = u.charAt(u.length - 1)),
                    (!i.settings.tightSelfClosing ||
                      "/" === r ||
                      (r && '"' !== r && "'" !== r)) &&
                      l.push(" "),
                    l.push("/")),
                  l.push(">")),
                l.push(h),
                a || (o && tF(e, t, n)) || l.push("</" + e.tagName + ">"),
                l.join("")
              );
            },
            raw: function (e, t, n, i) {
              return i.settings.allowDangerousHtml ? e.value : tY(e, t, n, i);
            },
            root: function (e, t, n, i) {
              return i.all(e);
            },
            text: tY,
          },
        }),
        tX = {},
        tJ = {},
        tZ = [];
      function tQ(e, t, n) {
        return tK(e, t, n, this);
      }
      function t0(e) {
        let t = [],
          n = (e && e.children) || tZ,
          i = -1;
        for (; ++i < n.length; ) t[i] = this.one(n[i], i, e);
        return t.join("");
      }
      function t1(e, t = !1) {
        let n = e.split(/(\r?\n)/g),
          i = 0,
          r = [];
        for (let e = 0; e < n.length; e += 2) {
          let s = t ? n[e] + (n[e + 1] || "") : n[e];
          r.push([s, i]), (i += n[e].length + (n[e + 1]?.length || 0));
        }
        return r;
      }
      function t2(e) {
        return !e || ["plaintext", "txt", "text", "plain"].includes(e);
      }
      function t5(e) {
        return "ansi" === e || t2(e);
      }
      function t8(e) {
        return "none" === e;
      }
      function t4(e, t) {
        var n;
        if (!t) return e;
        for (let i of (e.properties || (e.properties = {}),
        (n = e.properties).class || (n.class = []),
        "string" == typeof e.properties.class &&
          (e.properties.class = e.properties.class.split(/\s+/g)),
        Array.isArray(e.properties.class) || (e.properties.class = []),
        Array.isArray(t) ? t : t.split(/\s+/g)))
          i && !e.properties.class.includes(i) && e.properties.class.push(i);
        return e;
      }
      async function t3(e) {
        return Promise.resolve("function" == typeof e ? e() : e).then(
          (e) => e.default || e
        );
      }
      function t6(e, t) {
        let n = "string" == typeof e ? {} : { ...e.colorReplacements },
          i = "string" == typeof e ? e : e.name;
        for (let [e, r] of Object.entries(t?.colorReplacements || {}))
          "string" == typeof r ? (n[e] = r) : e === i && Object.assign(n, r);
        return n;
      }
      function t7(e, t) {
        return (e && t?.[e?.toLowerCase()]) || e;
      }
      function t9(e) {
        let t = {};
        return (
          e.color && (t.color = e.color),
          e.bgColor && (t["background-color"] = e.bgColor),
          e.fontStyle &&
            (e.fontStyle & G.Italic && (t["font-style"] = "italic"),
            e.fontStyle & G.Bold && (t["font-weight"] = "bold"),
            e.fontStyle & G.Underline && (t["text-decoration"] = "underline")),
          t
        );
      }
      class ne extends Error {
        constructor(e) {
          super(e), (this.name = "ShikiError");
        }
      }
      var nt = Object.defineProperty,
        nn = (e, t, n) =>
          t in e
            ? nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        ni = (e, t, n) => (nn(e, "symbol" != typeof t ? t + "" : t, n), n);
      let nr = new WeakMap();
      function ns(e, t) {
        nr.set(e, t);
      }
      function no(e) {
        return nr.get(e);
      }
      class na {
        constructor(...e) {
          if ((ni(this, "_stacks", {}), ni(this, "lang"), 2 === e.length)) {
            let [t, n] = e;
            (this.lang = n), (this._stacks = t);
          } else {
            let [t, n, i] = e;
            (this.lang = n), (this._stacks = { [i]: t });
          }
        }
        get themes() {
          return Object.keys(this._stacks);
        }
        get theme() {
          return this.themes[0];
        }
        get _stack() {
          return this._stacks[this.theme];
        }
        static initial(e, t) {
          return new na(
            Object.fromEntries(
              (Array.isArray(t) ? t : [t]).map((e) => [e, eG])
            ),
            e
          );
        }
        getInternalStack(e = this.theme) {
          return this._stacks[e];
        }
        get scopes() {
          return nl(this._stacks[this.theme]);
        }
        getScopes(e = this.theme) {
          return nl(this._stacks[e]);
        }
        toJSON() {
          return {
            lang: this.lang,
            theme: this.theme,
            themes: this.themes,
            scopes: this.scopes,
          };
        }
      }
      function nl(e) {
        let t = [],
          n = new Set();
        return (
          !(function e(i) {
            if (n.has(i)) return;
            n.add(i);
            let r = i?.nameScopesList?.scopeName;
            r && t.push(r), i.parent && e(i.parent);
          })(e),
          t
        );
      }
      let nu = [
        (function () {
          let e = new WeakMap();
          function t(t) {
            if (!e.has(t.meta)) {
              let n = function (e) {
                  if ("number" == typeof e) {
                    if (e < 0 || e > t.source.length)
                      throw new ne(
                        `Invalid decoration offset: ${e}. Code length: ${t.source.length}`
                      );
                    return { ...i.indexToPos(e), offset: e };
                  }
                  {
                    let t = i.lines[e.line];
                    if (void 0 === t)
                      throw new ne(
                        `Invalid decoration position ${JSON.stringify(
                          e
                        )}. Lines length: ${i.lines.length}`
                      );
                    if (e.character < 0 || e.character > t.length)
                      throw new ne(
                        `Invalid decoration position ${JSON.stringify(
                          e
                        )}. Line ${e.line} length: ${t.length}`
                      );
                    return { ...e, offset: i.posToIndex(e.line, e.character) };
                  }
                },
                i = (function (e) {
                  let t = t1(e, !0).map(([e]) => e);
                  return {
                    lines: t,
                    indexToPos: function (n) {
                      if (n === e.length)
                        return {
                          line: t.length - 1,
                          character: t[t.length - 1].length,
                        };
                      let i = n,
                        r = 0;
                      for (let e of t) {
                        if (i < e.length) break;
                        (i -= e.length), r++;
                      }
                      return { line: r, character: i };
                    },
                    posToIndex: function (e, n) {
                      let i = 0;
                      for (let n = 0; n < e; n++) i += t[n].length;
                      return i + n;
                    },
                  };
                })(t.source),
                r = (t.options.decorations || []).map((e) => ({
                  ...e,
                  start: n(e.start),
                  end: n(e.end),
                }));
              (function (e) {
                for (let t = 0; t < e.length; t++) {
                  let n = e[t];
                  if (n.start.offset > n.end.offset)
                    throw new ne(
                      `Invalid decoration range: ${JSON.stringify(
                        n.start
                      )} - ${JSON.stringify(n.end)}`
                    );
                  for (let i = t + 1; i < e.length; i++) {
                    let t = e[i],
                      r =
                        n.start.offset < t.start.offset &&
                        t.start.offset < n.end.offset,
                      s =
                        n.start.offset < t.end.offset &&
                        t.end.offset < n.end.offset,
                      o =
                        t.start.offset < n.start.offset &&
                        n.start.offset < t.end.offset,
                      a =
                        t.start.offset < n.end.offset &&
                        n.end.offset < t.end.offset;
                    if (r || s || o || a) {
                      if ((s && s) || (o && a)) continue;
                      throw new ne(
                        `Decorations ${JSON.stringify(
                          n.start
                        )} and ${JSON.stringify(t.start)} intersect.`
                      );
                    }
                  }
                }
              })(r),
                e.set(t.meta, {
                  decorations: r,
                  converter: i,
                  source: t.source,
                });
            }
            return e.get(t.meta);
          }
          return {
            name: "shiki:decorations",
            tokens(e) {
              if (this.options.decorations?.length)
                return (function (e, t) {
                  let n = Array.from(t instanceof Set ? t : new Set(t)).sort(
                    (e, t) => e - t
                  );
                  return n.length
                    ? e.map((e) =>
                        e.flatMap((e) => {
                          let t = n
                            .filter(
                              (t) =>
                                e.offset < t && t < e.offset + e.content.length
                            )
                            .map((t) => t - e.offset)
                            .sort((e, t) => e - t);
                          return t.length
                            ? (function (e, t) {
                                let n = 0,
                                  i = [];
                                for (let r of t)
                                  r > n &&
                                    i.push({
                                      ...e,
                                      content: e.content.slice(n, r),
                                      offset: e.offset + n,
                                    }),
                                    (n = r);
                                return (
                                  n < e.content.length &&
                                    i.push({
                                      ...e,
                                      content: e.content.slice(n),
                                      offset: e.offset + n,
                                    }),
                                  i
                                );
                              })(e, t)
                            : e;
                        })
                      )
                    : e;
                })(
                  e,
                  t(this).decorations.flatMap((e) => [
                    e.start.offset,
                    e.end.offset,
                  ])
                );
            },
            code(e) {
              if (!this.options.decorations?.length) return;
              let n = t(this),
                i = Array.from(e.children).filter(
                  (e) => "element" === e.type && "span" === e.tagName
                );
              if (i.length !== n.converter.lines.length)
                throw new ne(
                  `Number of lines in code element (${i.length}) does not match the number of lines in the source (${n.converter.lines.length}). Failed to apply decorations.`
                );
              function r(e, t, n, r) {
                let o = i[e],
                  a = "",
                  l = -1,
                  u = -1;
                if (
                  (0 === t && (l = 0),
                  0 === n && (u = 0),
                  n === Number.POSITIVE_INFINITY && (u = o.children.length),
                  -1 === l || -1 === u)
                )
                  for (let e = 0; e < o.children.length; e++)
                    (a += (function e(t) {
                      return "text" === t.type
                        ? t.value
                        : "element" === t.type
                        ? t.children.map(e).join("")
                        : "";
                    })(o.children[e])),
                      -1 === l && a.length === t && (l = e + 1),
                      -1 === u && a.length === n && (u = e + 1);
                if (-1 === l)
                  throw new ne(
                    `Failed to find start index for decoration ${JSON.stringify(
                      r.start
                    )}`
                  );
                if (-1 === u)
                  throw new ne(
                    `Failed to find end index for decoration ${JSON.stringify(
                      r.end
                    )}`
                  );
                let h = o.children.slice(l, u);
                if (r.alwaysWrap || h.length !== o.children.length) {
                  if (
                    r.alwaysWrap ||
                    1 !== h.length ||
                    "element" !== h[0].type
                  ) {
                    let e = {
                      type: "element",
                      tagName: "span",
                      properties: {},
                      children: h,
                    };
                    s(e, r, "wrapper"), o.children.splice(l, h.length, e);
                  } else s(h[0], r, "token");
                } else s(o, r, "line");
              }
              function s(e, t, n) {
                let i = t.properties || {},
                  r = t.transform || ((e) => e);
                return (
                  (e.tagName = t.tagName || "span"),
                  (e.properties = {
                    ...e.properties,
                    ...i,
                    class: e.properties.class,
                  }),
                  t.properties?.class && t4(e, t.properties.class),
                  (e = r(e, n) || e)
                );
              }
              let o = [];
              for (let e of n.decorations.sort(
                (e, t) => t.start.offset - e.start.offset
              )) {
                let { start: t, end: n } = e;
                if (t.line === n.line) r(t.line, t.character, n.character, e);
                else if (t.line < n.line) {
                  r(t.line, t.character, Number.POSITIVE_INFINITY, e);
                  for (let r = t.line + 1; r < n.line; r++)
                    o.unshift(() => {
                      var t;
                      i[(t = r)] = s(i[t], e, "line");
                    });
                  r(n.line, 0, n.character, e);
                }
              }
              o.forEach((e) => e());
            },
          };
        })(),
      ];
      function nh(e) {
        return [...(e.transformers || []), ...nu];
      }
      var nc = [
          "black",
          "red",
          "green",
          "yellow",
          "blue",
          "magenta",
          "cyan",
          "white",
          "brightBlack",
          "brightRed",
          "brightGreen",
          "brightYellow",
          "brightBlue",
          "brightMagenta",
          "brightCyan",
          "brightWhite",
        ],
        nd = {
          1: "bold",
          2: "dim",
          3: "italic",
          4: "underline",
          7: "reverse",
          9: "strikethrough",
        };
      function np(e, t) {
        let n,
          i = 1,
          r = e[t + i++];
        if ("2" === r) {
          let r = [e[t + i++], e[t + i++], e[t + i]].map((e) =>
            Number.parseInt(e)
          );
          3 !== r.length ||
            r.some((e) => Number.isNaN(e)) ||
            (n = { type: "rgb", rgb: r });
        } else if ("5" === r) {
          let r = Number.parseInt(e[t + i]);
          Number.isNaN(r) || (n = { type: "table", index: Number(r) });
        }
        return [i, n];
      }
      var nm = {
        black: "#000000",
        red: "#bb0000",
        green: "#00bb00",
        yellow: "#bbbb00",
        blue: "#0000bb",
        magenta: "#ff00ff",
        cyan: "#00bbbb",
        white: "#eeeeee",
        brightBlack: "#555555",
        brightRed: "#ff5555",
        brightGreen: "#00ff00",
        brightYellow: "#ffff55",
        brightBlue: "#5555ff",
        brightMagenta: "#ff55ff",
        brightCyan: "#55ffff",
        brightWhite: "#ffffff",
      };
      function nf(e, t, n = {}) {
        let { lang: i = "text", theme: r = e.getLoadedThemes()[0] } = n;
        if (t2(i) || t8(r))
          return t1(t).map((e) => [{ content: e[0], offset: e[1] }]);
        let { theme: s, colorMap: o } = e.setTheme(r);
        if ("ansi" === i)
          return (function (e, t, n) {
            let i, r, s;
            let o = t6(e, n),
              a = t1(t),
              l = (function (e = nm) {
                let t;
                function n(e) {
                  return `#${e
                    .map((e) =>
                      Math.max(0, Math.min(e, 255))
                        .toString(16)
                        .padStart(2, "0")
                    )
                    .join("")}`;
                }
                return {
                  value: function (i) {
                    switch (i.type) {
                      case "named":
                        return e[i.name];
                      case "rgb":
                        return n(i.rgb);
                      case "table":
                        var r;
                        return (
                          (r = i.index),
                          (function () {
                            if (t) return t;
                            t = [];
                            for (let n = 0; n < nc.length; n++)
                              t.push(e[nc[n]]);
                            let i = [0, 95, 135, 175, 215, 255];
                            for (let e = 0; e < 6; e++)
                              for (let r = 0; r < 6; r++)
                                for (let s = 0; s < 6; s++)
                                  t.push(n([i[e], i[r], i[s]]));
                            let r = 8;
                            for (let e = 0; e < 24; e++, r += 10)
                              t.push(n([r, r, r]));
                            return t;
                          })()[r]
                        );
                    }
                  },
                };
              })(
                Object.fromEntries(
                  nc.map((t) => [
                    t,
                    e.colors?.[
                      `terminal.ansi${t[0].toUpperCase()}${t.substring(1)}`
                    ],
                  ])
                )
              ),
              u =
                ((i = null),
                (r = null),
                (s = new Set()),
                {
                  parse(e) {
                    let t = [],
                      n = 0;
                    do {
                      let o = (function (e, t) {
                          let n = e.indexOf("\x1b[", t);
                          if (-1 !== n) {
                            let t = e.indexOf("m", n);
                            return {
                              sequence: e.substring(n + 2, t).split(";"),
                              startPosition: n,
                              position: t + 1,
                            };
                          }
                          return { position: e.length };
                        })(e, n),
                        a = o.sequence
                          ? e.substring(n, o.startPosition)
                          : e.substring(n);
                      if (
                        (a.length > 0 &&
                          t.push({
                            value: a,
                            foreground: i,
                            background: r,
                            decorations: new Set(s),
                          }),
                        o.sequence)
                      ) {
                        let e = (function (e) {
                          let t = [];
                          for (let n = 0; n < e.length; n++) {
                            let i = Number.parseInt(e[n]);
                            if (!Number.isNaN(i)) {
                              if (0 === i) t.push({ type: "resetAll" });
                              else if (i <= 9)
                                nd[i] &&
                                  t.push({
                                    type: "setDecoration",
                                    value: nd[i],
                                  });
                              else if (i <= 29) {
                                let e = nd[i - 20];
                                e &&
                                  t.push({ type: "resetDecoration", value: e });
                              } else if (i <= 37)
                                t.push({
                                  type: "setForegroundColor",
                                  value: { type: "named", name: nc[i - 30] },
                                });
                              else if (38 === i) {
                                let [i, r] = np(e, n);
                                r &&
                                  t.push({
                                    type: "setForegroundColor",
                                    value: r,
                                  }),
                                  (n += i);
                              } else if (39 === i)
                                t.push({ type: "resetForegroundColor" });
                              else if (i <= 47)
                                t.push({
                                  type: "setBackgroundColor",
                                  value: { type: "named", name: nc[i - 40] },
                                });
                              else if (48 === i) {
                                let [i, r] = np(e, n);
                                r &&
                                  t.push({
                                    type: "setBackgroundColor",
                                    value: r,
                                  }),
                                  (n += i);
                              } else
                                49 === i
                                  ? t.push({ type: "resetBackgroundColor" })
                                  : i >= 90 && i <= 97
                                  ? t.push({
                                      type: "setForegroundColor",
                                      value: {
                                        type: "named",
                                        name: nc[i - 90 + 8],
                                      },
                                    })
                                  : i >= 100 &&
                                    i <= 107 &&
                                    t.push({
                                      type: "setBackgroundColor",
                                      value: {
                                        type: "named",
                                        name: nc[i - 100 + 8],
                                      },
                                    });
                            }
                          }
                          return t;
                        })(o.sequence);
                        for (let t of e)
                          "resetAll" === t.type
                            ? ((i = null), (r = null), s.clear())
                            : "resetForegroundColor" === t.type
                            ? (i = null)
                            : "resetBackgroundColor" === t.type
                            ? (r = null)
                            : "resetDecoration" === t.type && s.delete(t.value);
                        for (let t of e)
                          "setForegroundColor" === t.type
                            ? (i = t.value)
                            : "setBackgroundColor" === t.type
                            ? (r = t.value)
                            : "setDecoration" === t.type && s.add(t.value);
                      }
                      n = o.position;
                    } while (n < e.length);
                    return t;
                  },
                });
            return a.map((t) =>
              u.parse(t[0]).map((n) => {
                let i, r;
                n.decorations.has("reverse")
                  ? ((i = n.background ? l.value(n.background) : e.bg),
                    (r = n.foreground ? l.value(n.foreground) : e.fg))
                  : ((i = n.foreground ? l.value(n.foreground) : e.fg),
                    (r = n.background ? l.value(n.background) : void 0)),
                  (i = t7(i, o)),
                  (r = t7(r, o)),
                  n.decorations.has("dim") &&
                    (i = (function (e) {
                      let t = e.match(
                        /#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/
                      );
                      if (t) {
                        if (t[3]) {
                          let e = Math.round(Number.parseInt(t[3], 16) / 2)
                            .toString(16)
                            .padStart(2, "0");
                          return `#${t[1]}${t[2]}${e}`;
                        }
                        return t[2]
                          ? `#${t[1]}${t[2]}80`
                          : `#${Array.from(t[1])
                              .map((e) => `${e}${e}`)
                              .join("")}80`;
                      }
                      let n = e.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
                      return n ? `var(${n[1]}-dim)` : e;
                    })(i));
                let s = G.None;
                return (
                  n.decorations.has("bold") && (s |= G.Bold),
                  n.decorations.has("italic") && (s |= G.Italic),
                  n.decorations.has("underline") && (s |= G.Underline),
                  {
                    content: n.value,
                    offset: t[1],
                    color: i,
                    bgColor: r,
                    fontStyle: s,
                  }
                );
              })
            );
          })(s, t, n);
        let a = e.getLanguage(i);
        if (n.grammarState) {
          if (n.grammarState.lang !== a.name)
            throw new v(
              `Grammar state language "${n.grammarState.lang}" does not match highlight language "${a.name}"`
            );
          if (!n.grammarState.themes.includes(s.name))
            throw new v(
              `Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${s.name}"`
            );
        }
        return (function (e, t, n, i, r) {
          let s = ng(e, t, n, i, r),
            o = new na(ng(e, t, n, i, r).stateStack, t.name, n.name);
          return ns(s.tokens, o), s.tokens;
        })(t, a, s, o, n);
      }
      function ng(e, t, n, i, r) {
        let s = t6(n, r),
          { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: a = 500 } = r,
          l = t1(e),
          u = r.grammarState
            ? (function (e, t) {
                if (!(e instanceof na)) throw new ne("Invalid grammar state");
                return e.getInternalStack(t);
              })(r.grammarState, n.name) ?? eG
            : null != r.grammarContextCode
            ? ng(r.grammarContextCode, t, n, i, {
                ...r,
                grammarState: void 0,
                grammarContextCode: void 0,
              }).stateStack
            : eG,
          h = [],
          c = [];
        for (let e = 0, d = l.length; e < d; e++) {
          let d, p;
          let [m, f] = l[e];
          if ("" === m) {
            (h = []), c.push([]);
            continue;
          }
          if (o > 0 && m.length >= o) {
            (h = []),
              c.push([{ content: m, offset: f, color: "", fontStyle: 0 }]);
            continue;
          }
          r.includeExplanation && ((d = t.tokenizeLine(m, u).tokens), (p = 0));
          let g = t.tokenizeLine2(m, u, a),
            y = g.tokens.length / 2;
          for (let e = 0; e < y; e++) {
            let t = g.tokens[2 * e],
              o = e + 1 < y ? g.tokens[2 * e + 2] : m.length;
            if (t === o) continue;
            let a = g.tokens[2 * e + 1],
              l = t7(i[q.getForeground(a)], s),
              u = q.getFontStyle(a),
              c = {
                content: m.substring(t, o),
                offset: f + t,
                color: l,
                fontStyle: u,
              };
            if (r.includeExplanation) {
              let e = [];
              if ("scopeName" !== r.includeExplanation)
                for (let t of n.settings) {
                  let n;
                  switch (typeof t.scope) {
                    case "string":
                      n = t.scope.split(/,/).map((e) => e.trim());
                      break;
                    case "object":
                      n = t.scope;
                      break;
                    default:
                      continue;
                  }
                  e.push({
                    settings: t,
                    selectors: n.map((e) => e.split(/ /)),
                  });
                }
              c.explanation = [];
              let i = 0;
              for (; t + i < o; ) {
                let t = d[p],
                  n = m.substring(t.startIndex, t.endIndex);
                (i += n.length),
                  c.explanation.push({
                    content: n,
                    scopes:
                      "scopeName" === r.includeExplanation
                        ? t.scopes.map((e) => ({ scopeName: e }))
                        : (function (e, t) {
                            let n = [];
                            for (let i = 0, r = t.length; i < r; i++) {
                              let r = t[i];
                              n[i] = {
                                scopeName: r,
                                themeMatches: (function (e, t, n) {
                                  let i = [];
                                  for (let { selectors: r, settings: s } of e)
                                    for (let e of r)
                                      if (
                                        (function (e, t, n) {
                                          if (!ny(e[e.length - 1], t))
                                            return !1;
                                          let i = e.length - 2,
                                            r = n.length - 1;
                                          for (; i >= 0 && r >= 0; )
                                            ny(e[i], n[r]) && (i -= 1),
                                              (r -= 1);
                                          return -1 === i;
                                        })(e, t, n)
                                      ) {
                                        i.push(s);
                                        break;
                                      }
                                  return i;
                                })(e, r, t.slice(0, i)),
                              };
                            }
                            return n;
                          })(e, t.scopes),
                  }),
                  (p += 1);
              }
            }
            h.push(c);
          }
          c.push(h), (h = []), (u = g.ruleStack);
        }
        return { tokens: c, stateStack: u };
      }
      function ny(e, t) {
        return (
          e === t || (t.substring(0, e.length) === e && "." === t[e.length])
        );
      }
      function nv(e, t, n) {
        let i = Object.entries(n.themes)
            .filter((e) => e[1])
            .map((e) => ({ color: e[0], theme: e[1] })),
          r = i.map((i) => {
            let r = nf(e, t, { ...n, theme: i.theme }),
              s = no(r);
            return {
              tokens: r,
              state: s,
              theme: "string" == typeof i.theme ? i.theme : i.theme.name,
            };
          }),
          s = (function (...e) {
            let t = e.map(() => []),
              n = e.length;
            for (let i = 0; i < e[0].length; i++) {
              let r = e.map((e) => e[i]),
                s = t.map(() => []);
              t.forEach((e, t) => e.push(s[t]));
              let o = r.map(() => 0),
                a = r.map((e) => e[0]);
              for (; a.every((e) => e); ) {
                let e = Math.min(...a.map((e) => e.content.length));
                for (let t = 0; t < n; t++) {
                  let n = a[t];
                  n.content.length === e
                    ? (s[t].push(n), (o[t] += 1), (a[t] = r[t][o[t]]))
                    : (s[t].push({ ...n, content: n.content.slice(0, e) }),
                      (a[t] = {
                        ...n,
                        content: n.content.slice(e),
                        offset: n.offset + e,
                      }));
                }
              }
            }
            return t;
          })(...r.map((e) => e.tokens)),
          o = s[0].map((e, t) =>
            e.map((e, r) => {
              let o = { content: e.content, variants: {}, offset: e.offset };
              return (
                "includeExplanation" in n &&
                  n.includeExplanation &&
                  (o.explanation = e.explanation),
                s.forEach((e, n) => {
                  let { content: s, explanation: a, offset: l, ...u } = e[t][r];
                  o.variants[i[n].color] = u;
                }),
                o
              );
            })
          ),
          a = r[0].state
            ? new na(
                Object.fromEntries(
                  r.map((e) => [e.theme, e.state?.getInternalStack(e.theme)])
                ),
                r[0].state.lang
              )
            : void 0;
        return a && ns(o, a), o;
      }
      function nb(e, t, n) {
        let i, r, s, o, a, l;
        if ("themes" in n) {
          let { defaultColor: u = "light", cssVariablePrefix: h = "--shiki-" } =
              n,
            c = Object.entries(n.themes)
              .filter((e) => e[1])
              .map((e) => ({ color: e[0], theme: e[1] }))
              .sort((e, t) => (e.color === u ? -1 : t.color === u ? 1 : 0));
          if (0 === c.length) throw new v("`themes` option must not be empty");
          let d = nv(e, t, n);
          if (((l = no(d)), u && !c.find((e) => e.color === u)))
            throw new v(
              `\`themes\` option must contain the defaultColor key \`${u}\``
            );
          let p = c.map((t) => e.getTheme(t.theme)),
            m = c.map((e) => e.color);
          (s = d.map((e) =>
            e.map((e) =>
              (function (e, t, n, i) {
                let r = {
                    content: e.content,
                    explanation: e.explanation,
                    offset: e.offset,
                  },
                  s = t.map((t) => t9(e.variants[t])),
                  o = new Set(s.flatMap((e) => Object.keys(e))),
                  a = {};
                return (
                  s.forEach((e, r) => {
                    for (let s of o) {
                      let o = e[s] || "inherit";
                      if (0 === r && i) a[s] = o;
                      else {
                        let e =
                          "color" === s
                            ? ""
                            : "background-color" === s
                            ? "-bg"
                            : `-${s}`;
                        a[n + t[r] + ("color" === s ? "" : e)] = o;
                      }
                    }
                  }),
                  (r.htmlStyle = a),
                  r
                );
              })(e, m, h, u)
            )
          )),
            l && ns(s, l);
          let f = c.map((e) => t6(e.theme, n));
          (r = c
            .map(
              (e, t) =>
                (0 === t && u ? "" : `${h + e.color}:`) +
                (t7(p[t].fg, f[t]) || "inherit")
            )
            .join(";")),
            (i = c
              .map(
                (e, t) =>
                  (0 === t && u ? "" : `${h + e.color}-bg:`) +
                  (t7(p[t].bg, f[t]) || "inherit")
              )
              .join(";")),
            (o = `shiki-themes ${p.map((e) => e.name).join(" ")}`),
            (a = u ? void 0 : [r, i].join(";"));
        } else if ("theme" in n) {
          let a = t6(n.theme, n);
          s = nf(e, t, n);
          let u = e.getTheme(n.theme);
          (i = t7(u.bg, a)), (r = t7(u.fg, a)), (o = u.name), (l = no(s));
        } else
          throw new v(
            "Invalid options, either `theme` or `themes` must be provided"
          );
        return {
          tokens: s,
          fg: r,
          bg: i,
          themeName: o,
          rootStyle: a,
          grammarState: l,
        };
      }
      function nw(
        e,
        t,
        n,
        i = {
          meta: {},
          options: n,
          codeToHast: (t, n) => nw(e, t, n),
          codeToTokens: (t, n) => nb(e, t, n),
        }
      ) {
        let r = t;
        for (let e of nh(n)) r = e.preprocess?.call(i, r, n) || r;
        let {
            tokens: s,
            fg: o,
            bg: a,
            themeName: l,
            rootStyle: u,
            grammarState: h,
          } = nb(e, r, n),
          { mergeWhitespaces: c = !0 } = n;
        !0 === c
          ? (s = s.map((e) => {
              let t = [],
                n = "",
                i = 0;
              return (
                e.forEach((r, s) => {
                  let o = !(r.fontStyle && r.fontStyle & G.Underline);
                  o && r.content.match(/^\s+$/) && e[s + 1]
                    ? (i || (i = r.offset), (n += r.content))
                    : n
                    ? (o
                        ? t.push({ ...r, offset: i, content: n + r.content })
                        : t.push({ content: n, offset: i }, r),
                      (i = 0),
                      (n = ""))
                    : t.push(r);
                }),
                t
              );
            }))
          : "never" === c &&
            (s = s.map((e) =>
              e.flatMap((e) => {
                if (e.content.match(/^\s+$/)) return e;
                let t = e.content.match(/^(\s*)(.*?)(\s*)$/);
                if (!t) return e;
                let [, n, i, r] = t;
                if (!n && !r) return e;
                let s = [{ ...e, offset: e.offset + n.length, content: i }];
                return (
                  n && s.unshift({ content: n, offset: e.offset }),
                  r &&
                    s.push({
                      content: r,
                      offset: e.offset + n.length + i.length,
                    }),
                  s
                );
              })
            ));
        let d = {
          ...i,
          get source() {
            return r;
          },
        };
        for (let e of nh(n)) s = e.tokens?.call(d, s) || s;
        return (function (e, t, n, i = no(e)) {
          let r = nh(t),
            s = [],
            o = { type: "root", children: [] },
            { structure: a = "classic", tabindex: l = "0" } = t,
            u = {
              type: "element",
              tagName: "pre",
              properties: {
                class: `shiki ${t.themeName || ""}`,
                style: t.rootStyle || `background-color:${t.bg};color:${t.fg}`,
                ...(!1 !== l && null != l ? { tabindex: l.toString() } : {}),
                ...Object.fromEntries(
                  Array.from(Object.entries(t.meta || {})).filter(
                    ([e]) => !e.startsWith("_")
                  )
                ),
              },
              children: [],
            },
            h = {
              type: "element",
              tagName: "code",
              properties: {},
              children: s,
            },
            c = [],
            d = {
              ...n,
              structure: a,
              addClassToHast: t4,
              get source() {
                return n.source;
              },
              get tokens() {
                return e;
              },
              get options() {
                return t;
              },
              get root() {
                return o;
              },
              get pre() {
                return u;
              },
              get code() {
                return h;
              },
              get lines() {
                return c;
              },
            };
          if (
            (e.forEach((e, t) => {
              t &&
                ("inline" === a
                  ? o.children.push({
                      type: "element",
                      tagName: "br",
                      properties: {},
                      children: [],
                    })
                  : "classic" === a && s.push({ type: "text", value: "\n" }));
              let n = {
                  type: "element",
                  tagName: "span",
                  properties: { class: "line" },
                  children: [],
                },
                i = 0;
              for (let s of e) {
                var l;
                let e = {
                  type: "element",
                  tagName: "span",
                  properties: { ...s.htmlAttrs },
                  children: [{ type: "text", value: s.content }],
                };
                s.htmlStyle;
                let u =
                  "string" == typeof (l = s.htmlStyle || t9(s))
                    ? l
                    : Object.entries(l)
                        .map(([e, t]) => `${e}:${t}`)
                        .join(";");
                for (let o of (u && (e.properties.style = u), r))
                  e = o?.span?.call(d, e, t + 1, i, n, s) || e;
                "inline" === a
                  ? o.children.push(e)
                  : "classic" === a && n.children.push(e),
                  (i += s.content.length);
              }
              if ("classic" === a) {
                for (let e of r) n = e?.line?.call(d, n, t + 1) || n;
                c.push(n), s.push(n);
              }
            }),
            "classic" === a)
          ) {
            for (let e of r) h = e?.code?.call(d, h) || h;
            for (let e of (u.children.push(h), r)) u = e?.pre?.call(d, u) || u;
            o.children.push(u);
          }
          let p = o;
          for (let e of r) p = e?.root?.call(d, p) || p;
          return i && ns(p, i), p;
        })(s, { ...n, fg: o, bg: a, themeName: l, rootStyle: u }, d, h);
      }
      let nS = { light: "#333333", dark: "#bbbbbb" },
        nk = { light: "#fffffe", dark: "#1e1e1e" },
        nx = "__shiki_resolved";
      function nP(e) {
        if (e?.[nx]) return e;
        let t = { ...e };
        t.tokenColors &&
          !t.settings &&
          ((t.settings = t.tokenColors), delete t.tokenColors),
          t.type || (t.type = "dark"),
          (t.colorReplacements = { ...t.colorReplacements }),
          t.settings || (t.settings = []);
        let { bg: n, fg: i } = t;
        if (!n || !i) {
          let e = t.settings
            ? t.settings.find((e) => !e.name && !e.scope)
            : void 0;
          e?.settings?.foreground && (i = e.settings.foreground),
            e?.settings?.background && (n = e.settings.background),
            !i &&
              t?.colors?.["editor.foreground"] &&
              (i = t.colors["editor.foreground"]),
            !n &&
              t?.colors?.["editor.background"] &&
              (n = t.colors["editor.background"]),
            i || (i = "light" === t.type ? nS.light : nS.dark),
            n || (n = "light" === t.type ? nk.light : nk.dark),
            (t.fg = i),
            (t.bg = n);
        }
        (t.settings[0] && t.settings[0].settings && !t.settings[0].scope) ||
          t.settings.unshift({
            settings: { foreground: t.fg, background: t.bg },
          });
        let r = 0,
          s = new Map();
        function o(e) {
          if (s.has(e)) return s.get(e);
          r += 1;
          let n = `#${r.toString(16).padStart(8, "0").toLowerCase()}`;
          return t.colorReplacements?.[`#${n}`] ? o(e) : (s.set(e, n), n);
        }
        for (let e of ((t.settings = t.settings.map((e) => {
          let n =
              e.settings?.foreground && !e.settings.foreground.startsWith("#"),
            i =
              e.settings?.background && !e.settings.background.startsWith("#");
          if (!n && !i) return e;
          let r = { ...e, settings: { ...e.settings } };
          if (n) {
            let n = o(e.settings.foreground);
            (t.colorReplacements[n] = e.settings.foreground),
              (r.settings.foreground = n);
          }
          if (i) {
            let n = o(e.settings.background);
            (t.colorReplacements[n] = e.settings.background),
              (r.settings.background = n);
          }
          return r;
        })),
        Object.keys(t.colors || {})))
          if (
            ("editor.foreground" === e ||
              "editor.background" === e ||
              e.startsWith("terminal.ansi")) &&
            !t.colors[e]?.startsWith("#")
          ) {
            let n = o(t.colors[e]);
            (t.colorReplacements[n] = t.colors[e]), (t.colors[e] = n);
          }
        return (
          Object.defineProperty(t, nx, {
            enumerable: !1,
            writable: !1,
            value: !0,
          }),
          t
        );
      }
      async function nA(e) {
        return Array.from(
          new Set(
            (
              await Promise.all(
                e
                  .filter((e) => !t5(e))
                  .map(
                    async (e) =>
                      await t3(e).then((e) => (Array.isArray(e) ? e : [e]))
                  )
              )
            ).flat()
          )
        );
      }
      async function nC(e) {
        return (
          await Promise.all(
            e.map(async (e) => (t8(e) ? null : nP(await t3(e))))
          )
        ).filter((e) => !!e);
      }
      var nT = Object.defineProperty,
        n_ = (e, t, n) =>
          t in e
            ? nT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        nE = (e, t, n) => (n_(e, "symbol" != typeof t ? t + "" : t, n), n);
      class nR extends eF {
        constructor(e, t, n, i = {}) {
          super(e),
            (this._resolver = e),
            (this._themes = t),
            (this._langs = n),
            (this._alias = i),
            nE(this, "_resolvedThemes", new Map()),
            nE(this, "_resolvedGrammars", new Map()),
            nE(this, "_langMap", new Map()),
            nE(this, "_langGraph", new Map()),
            nE(this, "_textmateThemeCache", new WeakMap()),
            nE(this, "_loadedThemesCache", null),
            nE(this, "_loadedLanguagesCache", null),
            this._themes.map((e) => this.loadTheme(e)),
            this.loadLanguages(this._langs);
        }
        getTheme(e) {
          return "string" == typeof e
            ? this._resolvedThemes.get(e)
            : this.loadTheme(e);
        }
        loadTheme(e) {
          let t = nP(e);
          return (
            t.name &&
              (this._resolvedThemes.set(t.name, t),
              (this._loadedThemesCache = null)),
            t
          );
        }
        getLoadedThemes() {
          return (
            this._loadedThemesCache ||
              (this._loadedThemesCache = [...this._resolvedThemes.keys()]),
            this._loadedThemesCache
          );
        }
        setTheme(e) {
          let t = this._textmateThemeCache.get(e);
          t ||
            ((t = j.createFromRawTheme(e)), this._textmateThemeCache.set(e, t)),
            this._syncRegistry.setTheme(t);
        }
        getGrammar(e) {
          if (this._alias[e]) {
            let t = new Set([e]);
            for (; this._alias[e]; ) {
              if (((e = this._alias[e]), t.has(e)))
                throw new ne(
                  `Circular alias \`${Array.from(t).join(" -> ")} -> ${e}\``
                );
              t.add(e);
            }
          }
          return this._resolvedGrammars.get(e);
        }
        loadLanguage(e) {
          if (this.getGrammar(e.name)) return;
          let t = new Set(
            [...this._langMap.values()].filter((t) =>
              t.embeddedLangsLazy?.includes(e.name)
            )
          );
          this._resolver.addLanguage(e);
          let n = {
            balancedBracketSelectors: e.balancedBracketSelectors || ["*"],
            unbalancedBracketSelectors: e.unbalancedBracketSelectors || [],
          };
          this._syncRegistry._rawGrammars.set(e.scopeName, e);
          let i = this.loadGrammarWithConfiguration(e.scopeName, 1, n);
          if (
            ((i.name = e.name),
            this._resolvedGrammars.set(e.name, i),
            e.aliases &&
              e.aliases.forEach((t) => {
                this._alias[t] = e.name;
              }),
            (this._loadedLanguagesCache = null),
            t.size)
          )
            for (let e of t)
              this._resolvedGrammars.delete(e.name),
                (this._loadedLanguagesCache = null),
                this._syncRegistry?._injectionGrammars?.delete(e.scopeName),
                this._syncRegistry?._grammars?.delete(e.scopeName),
                this.loadLanguage(this._langMap.get(e.name));
        }
        dispose() {
          super.dispose(),
            this._resolvedThemes.clear(),
            this._resolvedGrammars.clear(),
            this._langMap.clear(),
            this._langGraph.clear(),
            (this._loadedThemesCache = null);
        }
        loadLanguages(e) {
          for (let t of e) this.resolveEmbeddedLanguages(t);
          let t = Array.from(this._langGraph.entries()),
            n = t.filter(([e, t]) => !t);
          if (n.length) {
            let e = t
              .filter(
                ([e, t]) =>
                  t &&
                  t.embeddedLangs?.some((e) => n.map(([e]) => e).includes(e))
              )
              .filter((e) => !n.includes(e));
            throw new ne(
              `Missing languages ${n
                .map(([e]) => `\`${e}\``)
                .join(", ")}, required by ${e
                .map(([e]) => `\`${e}\``)
                .join(", ")}`
            );
          }
          for (let [e, n] of t) this._resolver.addLanguage(n);
          for (let [e, n] of t) this.loadLanguage(n);
        }
        getLoadedLanguages() {
          return (
            this._loadedLanguagesCache ||
              (this._loadedLanguagesCache = [
                ...new Set([
                  ...this._resolvedGrammars.keys(),
                  ...Object.keys(this._alias),
                ]),
              ]),
            this._loadedLanguagesCache
          );
        }
        resolveEmbeddedLanguages(e) {
          if (
            (this._langMap.set(e.name, e),
            this._langGraph.set(e.name, e),
            e.embeddedLangs)
          )
            for (let t of e.embeddedLangs)
              this._langGraph.set(t, this._langMap.get(t));
        }
      }
      var nL = Object.defineProperty,
        nN = (e, t, n) =>
          t in e
            ? nL(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        nM = (e, t, n) => (nN(e, "symbol" != typeof t ? t + "" : t, n), n);
      class nD {
        constructor(e, t) {
          nM(this, "_langs", new Map()),
            nM(this, "_scopeToLang", new Map()),
            nM(this, "_injections", new Map()),
            nM(this, "_onigLib"),
            (this._onigLib = {
              createOnigScanner: (t) => e.createScanner(t),
              createOnigString: (t) => e.createString(t),
            }),
            t.forEach((e) => this.addLanguage(e));
        }
        get onigLib() {
          return this._onigLib;
        }
        getLangRegistration(e) {
          return this._langs.get(e);
        }
        loadGrammar(e) {
          return this._scopeToLang.get(e);
        }
        addLanguage(e) {
          this._langs.set(e.name, e),
            e.aliases &&
              e.aliases.forEach((t) => {
                this._langs.set(t, e);
              }),
            this._scopeToLang.set(e.scopeName, e),
            e.injectTo &&
              e.injectTo.forEach((t) => {
                this._injections.get(t) || this._injections.set(t, []),
                  this._injections.get(t).push(e.scopeName);
              });
        }
        getInjections(e) {
          let t = e.split("."),
            n = [];
          for (let e = 1; e <= t.length; e++) {
            let i = t.slice(0, e).join(".");
            n = [...n, ...(this._injections.get(i) || [])];
          }
          return n;
        }
      }
      let nO = 0;
      async function nI(e = {}) {
        e.loadWasm;
        let [t, n, i] = await Promise.all([
          nC(e.themes || []),
          nA(e.langs || []),
          e.engine || E(e.loadWasm || r),
        ]);
        return (function (e) {
          let t;
          (nO += 1),
            !1 !== e.warnings &&
              nO >= 10 &&
              nO % 10 == 0 &&
              console.warn(
                `[Shiki] ${nO} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`
              );
          let n = !1;
          if (!e.engine)
            throw new ne("`engine` option is required for synchronous mode");
          let i = (e.langs || []).flat(1),
            r = (e.themes || []).flat(1).map(nP),
            s = new nR(new nD(e.engine, i), r, i, e.langAlias);
          function o(e) {
            if ("none" === e)
              return {
                bg: "",
                fg: "",
                name: "none",
                settings: [],
                type: "dark",
              };
            u();
            let t = s.getTheme(e);
            if (!t)
              throw new ne(
                `Theme \`${e}\` not found, you may need to load it first`
              );
            return t;
          }
          function a(...e) {
            u(), s.loadLanguages(e.flat(1));
          }
          function l(...e) {
            for (let t of (u(), e.flat(1))) s.loadTheme(t);
          }
          function u() {
            if (n) throw new ne("Shiki instance has been disposed");
          }
          function h() {
            n || ((n = !0), s.dispose(), (nO -= 1));
          }
          return {
            setTheme: function (e) {
              u();
              let n = o(e);
              return (
                t !== e && (s.setTheme(n), (t = e)),
                { theme: n, colorMap: s.getColorMap() }
              );
            },
            getTheme: o,
            getLanguage: function (e) {
              u();
              let t = s.getGrammar("string" == typeof e ? e : e.name);
              if (!t)
                throw new ne(
                  `Language \`${e}\` not found, you may need to load it first`
                );
              return t;
            },
            getLoadedThemes: function () {
              return u(), s.getLoadedThemes();
            },
            getLoadedLanguages: function () {
              return u(), s.getLoadedLanguages();
            },
            loadLanguage: async function (...e) {
              return a(await nA(e));
            },
            loadLanguageSync: a,
            loadTheme: async function (...e) {
              return u(), l(await nC(e));
            },
            loadThemeSync: l,
            dispose: h,
            [Symbol.dispose]: h,
          };
        })({ ...e, loadWasm: void 0, themes: t, langs: n, engine: i });
      }
      async function nB(e = {}) {
        let t = await nI(e);
        return {
          getLastGrammarState: (...e) =>
            (function (...e) {
              if (2 === e.length) return no(e[1]);
              let [t, n, i = {}] = e,
                { lang: r = "text", theme: s = t.getLoadedThemes()[0] } = i;
              if (t2(r) || t8(s))
                throw new v("Plain language does not have grammar state");
              if ("ansi" === r)
                throw new v("ANSI language does not have grammar state");
              let { theme: o, colorMap: a } = t.setTheme(s),
                l = t.getLanguage(r);
              return new na(ng(n, l, o, a, i).stateStack, l.name, o.name);
            })(t, ...e),
          codeToTokensBase: (e, n) => nf(t, e, n),
          codeToTokensWithThemes: (e, n) => nv(t, e, n),
          codeToTokens: (e, n) => nb(t, e, n),
          codeToHast: (e, n) => nw(t, e, n),
          codeToHtml: (e, n) =>
            (function (e, t, n) {
              let i = {
                  meta: {},
                  options: n,
                  codeToHast: (t, n) => nw(e, t, n),
                  codeToTokens: (t, n) => nb(e, t, n),
                },
                r = (function (e, t) {
                  let n = tX.quote || '"';
                  if ('"' !== n && "'" !== n)
                    throw Error(
                      "Invalid quote `" + n + "`, expected `'` or `\"`"
                    );
                  return {
                    one: tQ,
                    all: t0,
                    settings: {
                      omitOptionalTags: tX.omitOptionalTags || !1,
                      allowParseErrors: tX.allowParseErrors || !1,
                      allowDangerousCharacters:
                        tX.allowDangerousCharacters || !1,
                      quoteSmart: tX.quoteSmart || !1,
                      preferUnquoted: tX.preferUnquoted || !1,
                      tightAttributes: tX.tightAttributes || !1,
                      upperDoctype: tX.upperDoctype || !1,
                      tightDoctype: tX.tightDoctype || !1,
                      bogusComments: tX.bogusComments || !1,
                      tightCommaSeparatedLists:
                        tX.tightCommaSeparatedLists || !1,
                      tightSelfClosing: tX.tightSelfClosing || !1,
                      collapseEmptyAttributes: tX.collapseEmptyAttributes || !1,
                      allowDangerousHtml: tX.allowDangerousHtml || !1,
                      voids: tX.voids || e$,
                      characterReferences: tX.characterReferences || tJ,
                      closeSelfClosing: tX.closeSelfClosing || !1,
                      closeEmptyElements: tX.closeEmptyElements || !1,
                    },
                    schema: "svg" === tX.space ? to : ts,
                    quote: n,
                    alternative: '"' === n ? "'" : '"',
                  }.one(
                    Array.isArray(e) ? { type: "root", children: e } : e,
                    void 0,
                    void 0
                  );
                })(nw(e, t, n, i));
              for (let e of nh(n)) r = e.postprocess?.call(i, r, n) || r;
              return r;
            })(t, e, n),
          ...t,
          getInternalContext: () => t,
        };
      }
      let {
        codeToHtml: nj,
        codeToHast: nV,
        codeToTokens: nU,
        codeToTokensBase: nF,
        codeToTokensWithThemes: nG,
        getSingletonHighlighter: n$,
        getLastGrammarState: nW,
      } = (function (e) {
        let t;
        let n = async function (n = {}) {
          if (!t)
            return (t = e({
              ...n,
              themes: n.themes || [],
              langs: n.langs || [],
            }));
          {
            let e = await t;
            return (
              await Promise.all([
                e.loadTheme(...(n.themes || [])),
                e.loadLanguage(...(n.langs || [])),
              ]),
              e
            );
          }
        };
        return {
          getSingletonHighlighter: (e) => n(e),
          codeToHtml: async (e, t) =>
            (
              await n({
                langs: [t.lang],
                themes: "theme" in t ? [t.theme] : Object.values(t.themes),
              })
            ).codeToHtml(e, t),
          codeToHast: async (e, t) =>
            (
              await n({
                langs: [t.lang],
                themes: "theme" in t ? [t.theme] : Object.values(t.themes),
              })
            ).codeToHast(e, t),
          codeToTokens: async (e, t) =>
            (
              await n({
                langs: [t.lang],
                themes: "theme" in t ? [t.theme] : Object.values(t.themes),
              })
            ).codeToTokens(e, t),
          codeToTokensBase: async (e, t) =>
            (await n({ langs: [t.lang], themes: [t.theme] })).codeToTokensBase(
              e,
              t
            ),
          codeToTokensWithThemes: async (e, t) =>
            (
              await n({
                langs: [t.lang],
                themes: Object.values(t.themes).filter(Boolean),
              })
            ).codeToTokensWithThemes(e, t),
          getLastGrammarState: async (e, t) =>
            (
              await n({ langs: [t.lang], themes: [t.theme] })
            ).getLastGrammarState(e, t),
        };
      })(
        ((o = (c = {
          langs: g,
          themes: y,
          engine: () => E(n.e(5457).then(n.bind(n, 62296))),
        }).langs),
        (a = c.themes),
        (l = c.engine),
        async function (e) {
          function t(e) {
            if ("string" == typeof e) {
              if (t5(e)) return [];
              let t = o[e];
              if (!t)
                throw new v(
                  `Language \`${e}\` is not included in this bundle. You may want to load it from external source.`
                );
              return t;
            }
            return e;
          }
          function n(e) {
            if (t8(e)) return "none";
            if ("string" == typeof e) {
              let t = a[e];
              if (!t)
                throw new v(
                  `Theme \`${e}\` is not included in this bundle. You may want to load it from external source.`
                );
              return t;
            }
            return e;
          }
          let i = (e.themes ?? []).map((e) => n(e)),
            r = (e.langs ?? []).map((e) => t(e)),
            s = await nB({
              engine: e.engine ?? l(),
              ...e,
              themes: i,
              langs: r,
            });
          return {
            ...s,
            loadLanguage: (...e) => s.loadLanguage(...e.map(t)),
            loadTheme: (...e) => s.loadTheme(...e.map(n)),
          };
        })
      );
    },
  },
]);
