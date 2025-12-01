(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
    22108: function (e, t, n) {
        "use strict";

        function r() {
            return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
        }

        function i() {
            return "npm"
        }

        n.d(t, {
            S: function () {
                return i
            }, n: function () {
                return r
            }
        })
    },
    48759: function (e, t, n) {
        "use strict";
        n.d(t, {
            KV: function () {
                return s
            }
        });
        var r = n(22108);
        e = n.hmd(e);
        var i = n(32918);

        function s() {
            return !(0, r.n)() && "[object process]" === Object.prototype.toString.call(void 0 !== i ? i : 0)
        }
    },
    17018: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            Headers: function () {
                return s
            }, Request: function () {
                return a
            }, Response: function () {
                return o
            }, fetch: function () {
                return i
            }
        });
        var r = function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== n.g) return n.g;
            throw Error("unable to locate global object")
        }();
        let i = r.fetch;
        t.default = r.fetch.bind(r);
        let s = r.Headers, a = r.Request, o = r.Response
    },
    32918: function (e, t, n) {
        "use strict";
        var r, i;
        e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(39139)
    },
    35859: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n(70924)
        }])
    },
    79786: function (e, t, n) {
        "use strict";
        let r, i, s, a, o, l, c, u, h, d, p, f, m, g, y, v, _, b, w, S, E, k, T;
        var x, C, I, O, R, A, $, P, j, M, N, D, L = {};
        n.r(L), n.d(L, {
            FunctionToString: function () {
                return tj
            }, InboundFilters: function () {
                return tF
            }, LinkedErrors: function () {
                return tG
            }
        });
        var F = {};
        n.r(F), n.d(F, {
            Breadcrumbs: function () {
                return nj
            }, Dedupe: function () {
                return nH
            }, GlobalHandlers: function () {
                return ni
            }, HttpContext: function () {
                return nU
            }, LinkedErrors: function () {
                return nD
            }, TryCatch: function () {
                return nu
            }
        });
        let U = "7.107.0";

        function B(e, t, n = [t], r = "npm") {
            let i = e._metadata || {};
            i.sdk || (i.sdk = {
                name: `sentry.javascript.${t}`,
                packages: n.map(e => ({name: `${r}:@sentry/${e}`, version: U})),
                version: U
            }), e._metadata = i
        }

        function z(e) {
            return e && e.Math == Math ? e : void 0
        }

        let H = "object" == typeof globalThis && z(globalThis) || "object" == typeof window && z(window) || "object" == typeof self && z(self) || "object" == typeof n.g && z(n.g) || function () {
            return this
        }() || {};

        function q(e, t, n) {
            let r = n || H, i = r.__SENTRY__ = r.__SENTRY__ || {};
            return i[e] || (i[e] = t())
        }

        let W = "production", G = Object.prototype.toString;

        function V(e) {
            switch (G.call(e)) {
                case"[object Error]":
                case"[object Exception]":
                case"[object DOMException]":
                    return !0;
                default:
                    return ei(e, Error)
            }
        }

        function J(e, t) {
            return G.call(e) === `[object ${t}]`
        }

        function K(e) {
            return J(e, "ErrorEvent")
        }

        function Y(e) {
            return J(e, "DOMError")
        }

        function X(e) {
            return J(e, "String")
        }

        function Z(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
        }

        function Q(e) {
            return null === e || Z(e) || "object" != typeof e && "function" != typeof e
        }

        function ee(e) {
            return J(e, "Object")
        }

        function et(e) {
            return "undefined" != typeof Event && ei(e, Event)
        }

        function en(e) {
            return !!(e && e.then && "function" == typeof e.then)
        }

        function er(e) {
            return "number" == typeof e && e != e
        }

        function ei(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }

        function es(e) {
            return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
        }

        function ea(e, t = {}) {
            if (!e) return "<unknown>";
            try {
                let n, r = e, i = [], s = 0, a = 0, o = Array.isArray(t) ? t : t.keyAttrs,
                    l = !Array.isArray(t) && t.maxStringLength || 80;
                for (; r && s++ < 5 && (n = function (e, t) {
                    let n, r, i, s, a;
                    let o = [];
                    if (!e || !e.tagName) return "";
                    if (H.HTMLElement && e instanceof HTMLElement && e.dataset && e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    o.push(e.tagName.toLowerCase());
                    let l = t && t.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                    if (l && l.length) l.forEach(e => {
                        o.push(`[${e[0]}="${e[1]}"]`)
                    }); else if (e.id && o.push(`#${e.id}`), (n = e.className) && X(n)) for (a = 0, r = n.split(/\s+/); a < r.length; a++) o.push(`.${r[a]}`);
                    let c = ["aria-label", "type", "name", "title", "alt"];
                    for (a = 0; a < c.length; a++) i = c[a], (s = e.getAttribute(i)) && o.push(`[${i}="${s}"]`);
                    return o.join("")
                }(r, o), "html" !== n && (!(s > 1) || !(a + 3 * i.length + n.length >= l)));) i.push(n), a += n.length, r = r.parentNode;
                return i.reverse().join(" > ")
            } catch (e) {
                return "<unknown>"
            }
        }

        function eo(e) {
            return H.document && H.document.querySelector ? H.document.querySelector(e) : null
        }

        function el(e) {
            if (!H.HTMLElement) return null;
            let t = e;
            for (let e = 0; e < 5 && t; e++) {
                if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
                t = t.parentNode
            }
            return null
        }

        let ec = ["debug", "info", "warn", "error", "log", "assert", "trace"], eu = {};

        function eh(e) {
            if (!("console" in H)) return e();
            let t = H.console, n = {}, r = Object.keys(eu);
            r.forEach(e => {
                let r = eu[e];
                n[e] = t[e], t[e] = r
            });
            try {
                return e()
            } finally {
                r.forEach(e => {
                    t[e] = n[e]
                })
            }
        }

        let ed = function () {
            let e = !1, t = {
                enable: () => {
                    e = !0
                }, disable: () => {
                    e = !1
                }, isEnabled: () => e
            };
            return ec.forEach(e => {
                t[e] = () => void 0
            }), t
        }();

        function ep(e, t = 0) {
            return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0, t)}...`
        }

        function ef(e, t) {
            if (!Array.isArray(e)) return "";
            let n = [];
            for (let t = 0; t < e.length; t++) {
                let r = e[t];
                try {
                    es(r) ? n.push("[VueViewModel]") : n.push(String(r))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function em(e, t = [], n = !1) {
            return t.some(t => (function (e, t, n = !1) {
                return !!X(e) && (J(t, "RegExp") ? t.test(e) : !!X(t) && (n ? e === t : e.includes(t)))
            })(e, t, n))
        }

        function eg(e, t, n) {
            if (!(t in e)) return;
            let r = e[t], i = n(r);
            "function" == typeof i && ev(i, r), e[t] = i
        }

        function ey(e, t, n) {
            try {
                Object.defineProperty(e, t, {value: n, writable: !0, configurable: !0})
            } catch (e) {
            }
        }

        function ev(e, t) {
            try {
                let n = t.prototype || {};
                e.prototype = t.prototype = n, ey(e, "__sentry_original__", t)
            } catch (e) {
            }
        }

        function e_(e) {
            return e.__sentry_original__
        }

        function eb(e) {
            if (V(e)) return {message: e.message, name: e.name, stack: e.stack, ...eS(e)};
            if (!et(e)) return e;
            {
                let t = {type: e.type, target: ew(e.target), currentTarget: ew(e.currentTarget), ...eS(e)};
                return "undefined" != typeof CustomEvent && ei(e, CustomEvent) && (t.detail = e.detail), t
            }
        }

        function ew(e) {
            try {
                return "undefined" != typeof Element && ei(e, Element) ? ea(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }

        function eS(e) {
            if ("object" != typeof e || null === e) return {};
            {
                let t = {};
                for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
        }

        function eE(e) {
            return function e(t, n) {
                if (function (e) {
                    if (!ee(e)) return !1;
                    try {
                        let t = Object.getPrototypeOf(e).constructor.name;
                        return !t || "Object" === t
                    } catch (e) {
                        return !0
                    }
                }(t)) {
                    let r = n.get(t);
                    if (void 0 !== r) return r;
                    let i = {};
                    for (let r of (n.set(t, i), Object.keys(t))) void 0 !== t[r] && (i[r] = e(t[r], n));
                    return i
                }
                if (Array.isArray(t)) {
                    let r = n.get(t);
                    if (void 0 !== r) return r;
                    let i = [];
                    return n.set(t, i), t.forEach(t => {
                        i.push(e(t, n))
                    }), i
                }
                return t
            }(e, new Map)
        }

        function ek() {
            let e = H.crypto || H.msCrypto, t = () => 16 * Math.random();
            try {
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                e && e.getRandomValues && (t = () => {
                    let t = new Uint8Array(1);
                    return e.getRandomValues(t), t[0]
                })
            } catch (e) {
            }
            return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & t()) >> e / 4).toString(16))
        }

        function eT(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }

        function ex(e, t, n) {
            let r = e.exception = e.exception || {}, i = r.values = r.values || [], s = i[0] = i[0] || {};
            s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
        }

        function eC(e, t) {
            let n = eT(e);
            if (!n) return;
            let r = n.mechanism;
            if (n.mechanism = {type: "generic", handled: !0, ...r, ...t}, t && "data" in t) {
                let e = {...r && r.data, ...t.data};
                n.mechanism.data = e
            }
        }

        function eI(e) {
            if (e && e.__sentry_captured__) return !0;
            try {
                ey(e, "__sentry_captured__", !0)
            } catch (e) {
            }
            return !1
        }

        function eO(e) {
            return Array.isArray(e) ? e : [e]
        }

        function eR() {
            return Date.now() / 1e3
        }

        let eA = function () {
            let {performance: e} = H;
            if (!e || !e.now) return eR;
            let t = Date.now() - e.now(), n = void 0 == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3
        }(), e$ = (() => {
            let {performance: e} = H;
            if (!e || !e.now) return;
            let t = e.now(), n = Date.now(), r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
                i = e.timing && e.timing.navigationStart, s = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
            return r < 36e5 || s < 36e5 ? r <= s ? e.timeOrigin : i : n
        })();

        function eP(e) {
            return new eM(t => {
                t(e)
            })
        }

        function ej(e) {
            return new eM((t, n) => {
                n(e)
            })
        }

        (x = j || (j = {}))[x.PENDING = 0] = "PENDING", x[x.RESOLVED = 1] = "RESOLVED", x[x.REJECTED = 2] = "REJECTED";

        class eM {
            constructor(e) {
                eM.prototype.__init.call(this), eM.prototype.__init2.call(this), eM.prototype.__init3.call(this), eM.prototype.__init4.call(this), this._state = j.PENDING, this._handlers = [];
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }

            then(e, t) {
                return new eM((n, r) => {
                    this._handlers.push([!1, t => {
                        if (e) try {
                            n(e(t))
                        } catch (e) {
                            r(e)
                        } else n(t)
                    }, e => {
                        if (t) try {
                            n(t(e))
                        } catch (e) {
                            r(e)
                        } else r(e)
                    }]), this._executeHandlers()
                })
            }

            catch(e) {
                return this.then(e => e, e)
            }

            finally(e) {
                return new eM((t, n) => {
                    let r, i;
                    return this.then(t => {
                        i = !1, r = t, e && e()
                    }, t => {
                        i = !0, r = t, e && e()
                    }).then(() => {
                        if (i) {
                            n(r);
                            return
                        }
                        t(r)
                    })
                })
            }

            __init() {
                this._resolve = e => {
                    this._setResult(j.RESOLVED, e)
                }
            }

            __init2() {
                this._reject = e => {
                    this._setResult(j.REJECTED, e)
                }
            }

            __init3() {
                this._setResult = (e, t) => {
                    if (this._state === j.PENDING) {
                        if (en(t)) {
                            t.then(this._resolve, this._reject);
                            return
                        }
                        this._state = e, this._value = t, this._executeHandlers()
                    }
                }
            }

            __init4() {
                this._executeHandlers = () => {
                    if (this._state === j.PENDING) return;
                    let e = this._handlers.slice();
                    this._handlers = [], e.forEach(e => {
                        e[0] || (this._state === j.RESOLVED && e[1](this._value), this._state === j.REJECTED && e[2](this._value), e[0] = !0)
                    })
                }
            }
        }

        function eN() {
            return q("globalEventProcessors", () => [])
        }

        function eD(e) {
            eN().push(e)
        }

        function eL(e, t, n, r = 0) {
            return new eM((i, s) => {
                let a = e[r];
                if (null === t || "function" != typeof a) i(t); else {
                    let o = a({...t}, n);
                    en(o) ? o.then(t => eL(e, t, n, r + 1).then(i)).then(null, s) : eL(e, o, n, r + 1).then(i).then(null, s)
                }
            })
        }

        function eF(e) {
            let t = eA(), n = {
                sid: ek(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => eE({
                    sid: `${n.sid}`,
                    init: n.init,
                    started: new Date(1e3 * n.started).toISOString(),
                    timestamp: new Date(1e3 * n.timestamp).toISOString(),
                    status: n.status,
                    errors: n.errors,
                    did: "number" == typeof n.did || "string" == typeof n.did ? `${n.did}` : void 0,
                    duration: n.duration,
                    abnormal_mechanism: n.abnormal_mechanism,
                    attrs: {
                        release: n.release,
                        environment: n.environment,
                        ip_address: n.ipAddress,
                        user_agent: n.userAgent
                    }
                })
            };
            return e && eU(n, e), n
        }

        function eU(e, t = {}) {
            if (!t.user || (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || eA(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : ek()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0; else if ("number" == typeof t.duration) e.duration = t.duration; else {
                let t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
        }

        function eB(e, t) {
            let n = {};
            t ? n = {status: t} : "ok" === e.status && (n = {status: "exited"}), eU(e, n)
        }

        function ez(e) {
            return e.transaction
        }

        let eH = "baggage", eq = "sentry-", eW = /^sentry-/;

        function eG(e) {
            if (!X(e) && !Array.isArray(e)) return;
            let t = {};
            if (Array.isArray(e)) t = e.reduce((e, t) => {
                let n = eJ(t);
                for (let t of Object.keys(n)) e[t] = n[t];
                return e
            }, {}); else {
                if (!e) return;
                t = eJ(e)
            }
            let n = Object.entries(t).reduce((e, [t, n]) => (t.match(eW) && (e[t.slice(eq.length)] = n), e), {});
            return Object.keys(n).length > 0 ? n : void 0
        }

        function eV(e) {
            if (e) return function (e) {
                if (0 !== Object.keys(e).length) return Object.entries(e).reduce((e, [t, n], r) => {
                    let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`, s = 0 === r ? i : `${e},${i}`;
                    return s.length > 8192 ? e : s
                }, "")
            }(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${eq}${t}`] = n), e), {}))
        }

        function eJ(e) {
            return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce((e, [t, n]) => (e[t] = n, e), {})
        }

        let eK = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

        function eY(e) {
            let t;
            if (!e) return;
            let n = e.match(eK);
            if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                traceId: n[1],
                parentSampled: t,
                parentSpanId: n[2]
            }
        }

        function eX(e, t) {
            let n = eY(e), r = eG(t), {traceId: i, parentSpanId: s, parentSampled: a} = n || {};
            return n ? {
                traceId: i || ek(),
                parentSpanId: s || ek().substring(16),
                spanId: ek().substring(16),
                sampled: a,
                dsc: r || {}
            } : {traceId: i || ek(), spanId: ek().substring(16)}
        }

        function eZ(e = ek(), t = ek().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
        }

        function eQ(e) {
            let {spanId: t, traceId: n} = e.spanContext(), {
                data: r,
                op: i,
                parent_span_id: s,
                status: a,
                tags: o,
                origin: l
            } = e3(e);
            return eE({data: r, op: i, parent_span_id: s, span_id: t, status: a, tags: o, trace_id: n, origin: l})
        }

        function e0(e) {
            let {traceId: t, spanId: n} = e.spanContext();
            return eZ(t, n, e5(e))
        }

        function e1(e) {
            return "number" == typeof e ? e2(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? e2(e.getTime()) : eA()
        }

        function e2(e) {
            return e > 9999999999 ? e / 1e3 : e
        }

        function e3(e) {
            return "function" == typeof e.getSpanJSON ? e.getSpanJSON() : "function" == typeof e.toJSON ? e.toJSON() : {}
        }

        function e5(e) {
            let {traceFlags: t} = e.spanContext();
            return !!(1 & t)
        }

        function e4(e, t, n) {
            let r = t.getOptions(), {publicKey: i} = t.getDsn() || {}, {segment: s} = n && n.getUser() || {}, a = eE({
                environment: r.environment || W,
                release: r.release,
                user_segment: s,
                public_key: i,
                trace_id: e
            });
            return t.emit && t.emit("createDsc", a), a
        }

        function e9(e) {
            let t = tb();
            if (!t) return {};
            let n = e4(e3(e).trace_id || "", t, tw()), r = ez(e);
            if (!r) return n;
            let i = r && r._frozenDynamicSamplingContext;
            if (i) return i;
            let {sampleRate: s, source: a} = r.metadata;
            null != s && (n.sample_rate = `${s}`);
            let o = e3(r);
            return a && "url" !== a && (n.transaction = o.description), n.sampled = String(e5(r)), t.emit && t.emit("createDsc", n), n
        }

        function e8(e, t) {
            let {fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: s} = t;
            (function (e, t) {
                let {extra: n, tags: r, user: i, contexts: s, level: a, transactionName: o} = t, l = eE(n);
                l && Object.keys(l).length && (e.extra = {...l, ...e.extra});
                let c = eE(r);
                c && Object.keys(c).length && (e.tags = {...c, ...e.tags});
                let u = eE(i);
                u && Object.keys(u).length && (e.user = {...u, ...e.user});
                let h = eE(s);
                h && Object.keys(h).length && (e.contexts = {...h, ...e.contexts}), a && (e.level = a), o && (e.transaction = o)
            })(e, t), r && function (e, t) {
                e.contexts = {trace: eQ(t), ...e.contexts};
                let n = ez(t);
                if (n) {
                    e.sdkProcessingMetadata = {dynamicSamplingContext: e9(t), ...e.sdkProcessingMetadata};
                    let r = e3(n).description;
                    r && (e.tags = {transaction: r, ...e.tags})
                }
            }(e, r), e.fingerprint = e.fingerprint ? eO(e.fingerprint) : [], n && (e.fingerprint = e.fingerprint.concat(n)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint, function (e, t) {
                let n = [...e.breadcrumbs || [], ...t];
                e.breadcrumbs = n.length ? n : void 0
            }(e, i), e.sdkProcessingMetadata = {...e.sdkProcessingMetadata, ...s}
        }

        function e6(e, t) {
            let {
                extra: n,
                tags: r,
                user: i,
                contexts: s,
                level: a,
                sdkProcessingMetadata: o,
                breadcrumbs: l,
                fingerprint: c,
                eventProcessors: u,
                attachments: h,
                propagationContext: d,
                transactionName: p,
                span: f
            } = t;
            e7(e, "extra", n), e7(e, "tags", r), e7(e, "user", i), e7(e, "contexts", s), e7(e, "sdkProcessingMetadata", o), a && (e.level = a), p && (e.transactionName = p), f && (e.span = f), l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]), c.length && (e.fingerprint = [...e.fingerprint, ...c]), u.length && (e.eventProcessors = [...e.eventProcessors, ...u]), h.length && (e.attachments = [...e.attachments, ...h]), e.propagationContext = {...e.propagationContext, ...d}
        }

        function e7(e, t, n) {
            if (n && Object.keys(n).length) for (let r in e[t] = {...e[t]}, n) Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
        }

        class te {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = tt()
            }

            static clone(e) {
                return e ? e.clone() : new te
            }

            clone() {
                let e = new te;
                return e._breadcrumbs = [...this._breadcrumbs], e._tags = {...this._tags}, e._extra = {...this._extra}, e._contexts = {...this._contexts}, e._user = this._user, e._level = this._level, e._span = this._span, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {...this._sdkProcessingMetadata}, e._propagationContext = {...this._propagationContext}, e._client = this._client, e
            }

            setClient(e) {
                this._client = e
            }

            getClient() {
                return this._client
            }

            addScopeListener(e) {
                this._scopeListeners.push(e)
            }

            addEventProcessor(e) {
                return this._eventProcessors.push(e), this
            }

            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    segment: void 0,
                    username: void 0
                }, this._session && eU(this._session, {user: e}), this._notifyScopeListeners(), this
            }

            getUser() {
                return this._user
            }

            getRequestSession() {
                return this._requestSession
            }

            setRequestSession(e) {
                return this._requestSession = e, this
            }

            setTags(e) {
                return this._tags = {...this._tags, ...e}, this._notifyScopeListeners(), this
            }

            setTag(e, t) {
                return this._tags = {...this._tags, [e]: t}, this._notifyScopeListeners(), this
            }

            setExtras(e) {
                return this._extra = {...this._extra, ...e}, this._notifyScopeListeners(), this
            }

            setExtra(e, t) {
                return this._extra = {...this._extra, [e]: t}, this._notifyScopeListeners(), this
            }

            setFingerprint(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }

            setLevel(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }

            setTransactionName(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }

            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
            }

            setSpan(e) {
                return this._span = e, this._notifyScopeListeners(), this
            }

            getSpan() {
                return this._span
            }

            getTransaction() {
                let e = this._span;
                return e && e.transaction
            }

            setSession(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }

            getSession() {
                return this._session
            }

            update(e) {
                if (!e) return this;
                let t = "function" == typeof e ? e(this) : e;
                if (t instanceof te) {
                    let e = t.getScopeData();
                    this._tags = {...this._tags, ...e.tags}, this._extra = {...this._extra, ...e.extra}, this._contexts = {...this._contexts, ...e.contexts}, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint.length && (this._fingerprint = e.fingerprint), t.getRequestSession() && (this._requestSession = t.getRequestSession()), e.propagationContext && (this._propagationContext = e.propagationContext)
                } else ee(t) && (this._tags = {...this._tags, ...e.tags}, this._extra = {...this._extra, ...e.extra}, this._contexts = {...this._contexts, ...e.contexts}, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext));
                return this
            }

            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = tt(), this
            }

            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0) return this;
                let r = {timestamp: eR(), ...e}, i = this._breadcrumbs;
                return i.push(r), this._breadcrumbs = i.length > n ? i.slice(-n) : i, this._notifyScopeListeners(), this
            }

            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }

            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }

            addAttachment(e) {
                return this._attachments.push(e), this
            }

            getAttachments() {
                return this.getScopeData().attachments
            }

            clearAttachments() {
                return this._attachments = [], this
            }

            getScopeData() {
                let {
                    _breadcrumbs: e,
                    _attachments: t,
                    _contexts: n,
                    _tags: r,
                    _extra: i,
                    _user: s,
                    _level: a,
                    _fingerprint: o,
                    _eventProcessors: l,
                    _propagationContext: c,
                    _sdkProcessingMetadata: u,
                    _transactionName: h,
                    _span: d
                } = this;
                return {
                    breadcrumbs: e,
                    attachments: t,
                    contexts: n,
                    tags: r,
                    extra: i,
                    user: s,
                    level: a,
                    fingerprint: o || [],
                    eventProcessors: l,
                    propagationContext: c,
                    sdkProcessingMetadata: u,
                    transactionName: h,
                    span: d
                }
            }

            applyToEvent(e, t = {}, n = []) {
                return e8(e, this.getScopeData()), eL([...n, ...eN(), ...this._eventProcessors], e, t)
            }

            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = {...this._sdkProcessingMetadata, ...e}, this
            }

            setPropagationContext(e) {
                return this._propagationContext = e, this
            }

            getPropagationContext() {
                return this._propagationContext
            }

            captureException(e, t) {
                let n = t && t.event_id ? t.event_id : ek();
                if (!this._client) return ed.warn("No client configured on scope - will not capture exception!"), n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r, ...t,
                    event_id: n
                }, this), n
            }

            captureMessage(e, t, n) {
                let r = n && n.event_id ? n.event_id : ek();
                if (!this._client) return ed.warn("No client configured on scope - will not capture message!"), r;
                let i = Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i, ...n,
                    event_id: r
                }, this), r
            }

            captureEvent(e, t) {
                let n = t && t.event_id ? t.event_id : ek();
                return this._client ? this._client.captureEvent(e, {
                    ...t,
                    event_id: n
                }, this) : ed.warn("No client configured on scope - will not capture event!"), n
            }

            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                    e(this)
                }), this._notifyingListeners = !1)
            }
        }

        function tt() {
            return {traceId: ek(), spanId: ek().substring(16)}
        }

        let tn = parseFloat(U);

        class tr {
            constructor(e, t, n, r = tn) {
                let i, s;
                this._version = r, t ? i = t : (i = new te).setClient(e), n ? s = n : (s = new te).setClient(e), this._stack = [{scope: i}], e && this.bindClient(e), this._isolationScope = s
            }

            isOlderThan(e) {
                return this._version < e
            }

            bindClient(e) {
                let t = this.getStackTop();
                t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations()
            }

            pushScope() {
                let e = this.getScope().clone();
                return this.getStack().push({client: this.getClient(), scope: e}), e
            }

            popScope() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }

            withScope(e) {
                let t;
                let n = this.pushScope();
                try {
                    t = e(n)
                } catch (e) {
                    throw this.popScope(), e
                }
                return en(t) ? t.then(e => (this.popScope(), e), e => {
                    throw this.popScope(), e
                }) : (this.popScope(), t)
            }

            getClient() {
                return this.getStackTop().client
            }

            getScope() {
                return this.getStackTop().scope
            }

            getIsolationScope() {
                return this._isolationScope
            }

            getStack() {
                return this._stack
            }

            getStackTop() {
                return this._stack[this._stack.length - 1]
            }

            captureException(e, t) {
                let n = this._lastEventId = t && t.event_id ? t.event_id : ek(), r = Error("Sentry syntheticException");
                return this.getScope().captureException(e, {
                    originalException: e,
                    syntheticException: r, ...t,
                    event_id: n
                }), n
            }

            captureMessage(e, t, n) {
                let r = this._lastEventId = n && n.event_id ? n.event_id : ek(), i = Error(e);
                return this.getScope().captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i, ...n,
                    event_id: r
                }), r
            }

            captureEvent(e, t) {
                let n = t && t.event_id ? t.event_id : ek();
                return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {...t, event_id: n}), n
            }

            lastEventId() {
                return this._lastEventId
            }

            addBreadcrumb(e, t) {
                let {scope: n, client: r} = this.getStackTop();
                if (!r) return;
                let {beforeBreadcrumb: i = null, maxBreadcrumbs: s = 100} = r.getOptions && r.getOptions() || {};
                if (s <= 0) return;
                let a = {timestamp: eR(), ...e}, o = i ? eh(() => i(a, t)) : a;
                null !== o && (r.emit && r.emit("beforeAddBreadcrumb", o, t), n.addBreadcrumb(o, s))
            }

            setUser(e) {
                this.getScope().setUser(e), this.getIsolationScope().setUser(e)
            }

            setTags(e) {
                this.getScope().setTags(e), this.getIsolationScope().setTags(e)
            }

            setExtras(e) {
                this.getScope().setExtras(e), this.getIsolationScope().setExtras(e)
            }

            setTag(e, t) {
                this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t)
            }

            setExtra(e, t) {
                this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t)
            }

            setContext(e, t) {
                this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t)
            }

            configureScope(e) {
                let {scope: t, client: n} = this.getStackTop();
                n && e(t)
            }

            run(e) {
                let t = ts(this);
                try {
                    e(this)
                } finally {
                    ts(t)
                }
            }

            getIntegration(e) {
                let t = this.getClient();
                if (!t) return null;
                try {
                    return t.getIntegration(e)
                } catch (e) {
                    return null
                }
            }

            startTransaction(e, t) {
                return this._callExtensionMethod("startTransaction", e, t)
            }

            traceHeaders() {
                return this._callExtensionMethod("traceHeaders")
            }

            captureSession(e = !1) {
                if (e) return this.endSession();
                this._sendSessionUpdate()
            }

            endSession() {
                let e = this.getStackTop().scope, t = e.getSession();
                t && eB(t), this._sendSessionUpdate(), e.setSession()
            }

            startSession(e) {
                let {scope: t, client: n} = this.getStackTop(), {
                        release: r,
                        environment: i = W
                    } = n && n.getOptions() || {}, {userAgent: s} = H.navigator || {},
                    a = eF({release: r, environment: i, user: t.getUser(), ...s && {userAgent: s}, ...e}),
                    o = t.getSession && t.getSession();
                return o && "ok" === o.status && eU(o, {status: "exited"}), this.endSession(), t.setSession(a), a
            }

            shouldSendDefaultPii() {
                let e = this.getClient(), t = e && e.getOptions();
                return !!(t && t.sendDefaultPii)
            }

            _sendSessionUpdate() {
                let {scope: e, client: t} = this.getStackTop(), n = e.getSession();
                n && t && t.captureSession && t.captureSession(n)
            }

            _callExtensionMethod(e, ...t) {
                let n = ti().__SENTRY__;
                if (n && n.extensions && "function" == typeof n.extensions[e]) return n.extensions[e].apply(this, t)
            }
        }

        function ti() {
            return H.__SENTRY__ = H.__SENTRY__ || {extensions: {}, hub: void 0}, H
        }

        function ts(e) {
            let t = ti(), n = tl(t);
            return tc(t, e), n
        }

        function ta() {
            let e = ti();
            if (e.__SENTRY__ && e.__SENTRY__.acs) {
                let t = e.__SENTRY__.acs.getCurrentHub();
                if (t) return t
            }
            return function (e = ti()) {
                return (!(e && e.__SENTRY__ && e.__SENTRY__.hub) || tl(e).isOlderThan(tn)) && tc(e, new tr), tl(e)
            }(e)
        }

        function to() {
            return ta().getIsolationScope()
        }

        function tl(e) {
            return q("hub", () => new tr, e)
        }

        function tc(e, t) {
            return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
        }

        let tu = /\(error: (.*)\)/, th = /captureMessage|captureException/;

        function td(...e) {
            let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
            return (e, n = 0) => {
                let r = [], i = e.split("\n");
                for (let e = n; e < i.length; e++) {
                    let n = i[e];
                    if (n.length > 1024) continue;
                    let s = tu.test(n) ? n.replace(tu, "$1") : n;
                    if (!s.match(/\S*Error: /)) {
                        for (let e of t) {
                            let t = e(s);
                            if (t) {
                                r.push(t);
                                break
                            }
                        }
                        if (r.length >= 50) break
                    }
                }
                return function (e) {
                    if (!e.length) return [];
                    let t = Array.from(e);
                    return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(), t.reverse(), th.test(t[t.length - 1].function || "") && (t.pop(), th.test(t[t.length - 1].function || "") && t.pop()), t.slice(0, 50).map(e => ({
                        ...e,
                        filename: e.filename || t[t.length - 1].filename,
                        function: e.function || "?"
                    }))
                }(r)
            }
        }

        let tp = "<anonymous>";

        function tf(e) {
            try {
                if (!e || "function" != typeof e) return tp;
                return e.name || tp
            } catch (e) {
                return tp
            }
        }

        function tm(e, t = 100, r = Infinity) {
            try {
                return function e(t, r, i = Infinity, s = Infinity, a = function () {
                    let e = "function" == typeof WeakSet, t = e ? new WeakSet : [];
                    return [function (n) {
                        if (e) return !!t.has(n) || (t.add(n), !1);
                        for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
                        return t.push(n), !1
                    }, function (n) {
                        if (e) t.delete(n); else for (let e = 0; e < t.length; e++) if (t[e] === n) {
                            t.splice(e, 1);
                            break
                        }
                    }]
                }()) {
                    let [o, l] = a;
                    if (null == r || ["number", "boolean", "string"].includes(typeof r) && !er(r)) return r;
                    let c = function (e, t) {
                        try {
                            if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                            if ("domainEmitter" === e) return "[DomainEmitter]";
                            if (void 0 !== n.g && t === n.g) return "[Global]";
                            if ("undefined" != typeof window && t === window) return "[Window]";
                            if ("undefined" != typeof document && t === document) return "[Document]";
                            if (es(t)) return "[VueViewModel]";
                            if (ee(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t) return "[SyntheticEvent]";
                            if ("number" == typeof t && t != t) return "[NaN]";
                            if ("function" == typeof t) return `[Function: ${tf(t)}]`;
                            if ("symbol" == typeof t) return `[${String(t)}]`;
                            if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                            let r = function (e) {
                                let t = Object.getPrototypeOf(e);
                                return t ? t.constructor.name : "null prototype"
                            }(t);
                            if (/^HTML(\w*)Element$/.test(r)) return `[HTMLElement: ${r}]`;
                            return `[object ${r}]`
                        } catch (e) {
                            return `**non-serializable** (${e})`
                        }
                    }(t, r);
                    if (!c.startsWith("[object ")) return c;
                    if (r.__sentry_skip_normalization__) return r;
                    let u = "number" == typeof r.__sentry_override_normalization_depth__ ? r.__sentry_override_normalization_depth__ : i;
                    if (0 === u) return c.replace("object ", "");
                    if (o(r)) return "[Circular ~]";
                    if (r && "function" == typeof r.toJSON) try {
                        let t = r.toJSON();
                        return e("", t, u - 1, s, a)
                    } catch (e) {
                    }
                    let h = Array.isArray(r) ? [] : {}, d = 0, p = eb(r);
                    for (let t in p) {
                        if (!Object.prototype.hasOwnProperty.call(p, t)) continue;
                        if (d >= s) {
                            h[t] = "[MaxProperties ~]";
                            break
                        }
                        let n = p[t];
                        h[t] = e(t, n, u - 1, s, a), d++
                    }
                    return l(r), h
                }("", e, t, r)
            } catch (e) {
                return {ERROR: `**non-serializable** (${e})`}
            }
        }

        function tg(e, t, n, i, s, a) {
            let {normalizeDepth: o = 3, normalizeMaxBreadth: l = 1e3} = e,
                c = {...t, event_id: t.event_id || n.event_id || ek(), timestamp: t.timestamp || eR()},
                u = n.integrations || e.integrations.map(e => e.name);
            (function (e, t) {
                let {environment: n, release: r, dist: i, maxValueLength: s = 250} = t;
                "environment" in e || (e.environment = "environment" in t ? n : W), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = ep(e.message, s));
                let a = e.exception && e.exception.values && e.exception.values[0];
                a && a.value && (a.value = ep(a.value, s));
                let o = e.request;
                o && o.url && (o.url = ep(o.url, s))
            })(c, e), u.length > 0 && (c.sdk = c.sdk || {}, c.sdk.integrations = [...c.sdk.integrations || [], ...u]), void 0 === t.type && function (e, t) {
                let n;
                let r = H._sentryDebugIds;
                if (!r) return;
                let i = ty.get(t);
                i ? n = i : (n = new Map, ty.set(t, n));
                let s = Object.keys(r).reduce((e, i) => {
                    let s;
                    let a = n.get(i);
                    a ? s = a : (s = t(i), n.set(i, s));
                    for (let t = s.length - 1; t >= 0; t--) {
                        let n = s[t];
                        if (n.filename) {
                            e[n.filename] = r[i];
                            break
                        }
                    }
                    return e
                }, {});
                try {
                    e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                            e.filename && (e.debug_id = s[e.filename])
                        })
                    })
                } catch (e) {
                }
            }(c, e.stackParser);
            let h = function (e, t) {
                if (!t) return e;
                let n = e ? e.clone() : new te;
                return n.update(t), n
            }(i, n.captureContext);
            n.mechanism && eC(c, n.mechanism);
            let d = s && s.getEventProcessors ? s.getEventProcessors() : [], p = (r || (r = new te), r).getScopeData();
            a && e6(p, a.getScopeData()), h && e6(p, h.getScopeData());
            let f = [...n.attachments || [], ...p.attachments];
            return f.length && (n.attachments = f), e8(c, p), eL([...d, ...eN(), ...p.eventProcessors], c, n).then(e => (e && function (e) {
                let t = {};
                try {
                    e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                        })
                    })
                } catch (e) {
                }
                if (0 === Object.keys(t).length) return;
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                let n = e.debug_meta.images;
                Object.keys(t).forEach(e => {
                    n.push({type: "sourcemap", code_file: e, debug_id: t[e]})
                })
            }(e), "number" == typeof o && o > 0) ? function (e, t, n) {
                if (!e) return null;
                let r = {...e, ...e.breadcrumbs && {breadcrumbs: e.breadcrumbs.map(e => ({...e, ...e.data && {data: tm(e.data, t, n)}}))}, ...e.user && {user: tm(e.user, t, n)}, ...e.contexts && {contexts: tm(e.contexts, t, n)}, ...e.extra && {extra: tm(e.extra, t, n)}};
                return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = tm(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => {
                    let r = e3(e).data;
                    return r && (e.data = tm(r, t, n)), e
                })), r
            }(e, o, l) : e)
        }

        let ty = new WeakMap;

        function tv(e, t) {
            return ta().captureEvent(e, t)
        }

        function t_(e, t) {
            ta().addBreadcrumb(e, t)
        }

        function tb() {
            return ta().getClient()
        }

        function tw() {
            return ta().getScope()
        }

        function tS(e) {
            let t = tb(), n = to(), r = tw(), {
                    release: i,
                    environment: s = W
                } = t && t.getOptions() || {}, {userAgent: a} = H.navigator || {},
                o = eF({release: i, environment: s, user: r.getUser() || n.getUser(), ...a && {userAgent: a}, ...e}),
                l = n.getSession();
            return l && "ok" === l.status && eU(l, {status: "exited"}), tE(), n.setSession(o), r.setSession(o), o
        }

        function tE() {
            let e = to(), t = tw(), n = t.getSession() || e.getSession();
            n && eB(n), tk(), e.setSession(), t.setSession()
        }

        function tk() {
            let e = to(), t = tw(), n = tb(), r = t.getSession() || e.getSession();
            r && n && n.captureSession && n.captureSession(r)
        }

        function tT(e = !1) {
            if (e) {
                tE();
                return
            }
            tk()
        }

        function tx(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            let t = tb(), n = e || t && t.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        }

        let tC = [];

        function tI(e, t) {
            for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e)
        }

        function tO(e, t, n) {
            if (!n[t.name]) {
                if (n[t.name] = t, -1 === tC.indexOf(t.name) && (t.setupOnce(eD, ta), tC.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), e.on && "function" == typeof t.preprocessEvent) {
                    let n = t.preprocessEvent.bind(t);
                    e.on("preprocessEvent", (t, r) => n(t, r, e))
                }
                if (e.addEventProcessor && "function" == typeof t.processEvent) {
                    let n = t.processEvent.bind(t), r = Object.assign((t, r) => n(t, r, e), {id: t.name});
                    e.addEventProcessor(r)
                }
            }
        }

        function tR(e, t) {
            return Object.assign(function (...e) {
                return t(...e)
            }, {id: e})
        }

        let tA = "FunctionToString", t$ = new WeakMap, tP = () => ({
                name: tA, setupOnce() {
                    i = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function (...e) {
                            let t = e_(this), n = t$.has(tb()) && void 0 !== t ? t : this;
                            return i.apply(n, e)
                        }
                    } catch (e) {
                    }
                }, setup(e) {
                    t$.set(e, !0)
                }
            }), tj = tR(tA, tP), tM = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            tN = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
            tD = "InboundFilters", tL = (e = {}) => ({
                name: tD, setupOnce() {
                }, processEvent: (t, n, r) => {
                    var i, s;
                    return (i = function (e = {}, t = {}) {
                        return {
                            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : tM],
                            ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : tN],
                            ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                        }
                    }(e, r.getOptions())).ignoreInternal && function (e) {
                        try {
                            return "SentryError" === e.exception.values[0].type
                        } catch (e) {
                        }
                        return !1
                    }(t) || (s = i.ignoreErrors, !t.type && s && s.length && (function (e) {
                        let t;
                        let n = [];
                        e.message && n.push(e.message);
                        try {
                            t = e.exception.values[e.exception.values.length - 1]
                        } catch (e) {
                        }
                        return t && t.value && (n.push(t.value), t.type && n.push(`${t.type}: ${t.value}`)), n
                    })(t).some(e => em(e, s)) || function (e, t) {
                        if ("transaction" !== e.type || !t || !t.length) return !1;
                        let n = e.transaction;
                        return !!n && em(n, t)
                    }(t, i.ignoreTransactions) || function (e, t) {
                        if (!t || !t.length) return !1;
                        let n = tU(e);
                        return !!n && em(n, t)
                    }(t, i.denyUrls)) || !function (e, t) {
                        if (!t || !t.length) return !0;
                        let n = tU(e);
                        return !n || em(n, t)
                    }(t, i.allowUrls) ? null : t
                }
            }), tF = tR(tD, tL);

        function tU(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {
                }
                return t ? function (e = []) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                    }
                    return null
                }(t) : null
            } catch (e) {
                return null
            }
        }

        function tB(e, t, n = 250, r, i, s, a) {
            if (!s.exception || !s.exception.values || !a || !ei(a.originalException, Error)) return;
            let o = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
            o && (s.exception.values = (function e(t, n, r, i, s, a, o, l) {
                if (a.length >= r + 1) return a;
                let c = [...a];
                if (ei(i[s], Error)) {
                    tz(o, l);
                    let a = t(n, i[s]), u = c.length;
                    tH(a, s, u, l), c = e(t, n, r, i[s], s, [a, ...c], a, u)
                }
                return Array.isArray(i.errors) && i.errors.forEach((i, a) => {
                    if (ei(i, Error)) {
                        tz(o, l);
                        let u = t(n, i), h = c.length;
                        tH(u, `errors[${a}]`, h, l), c = e(t, n, r, i, s, [u, ...c], u, h)
                    }
                }), c
            })(e, t, i, a.originalException, r, s.exception.values, o, 0).map(e => (e.value && (e.value = ep(e.value, n)), e)))
        }

        function tz(e, t) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            }, e.mechanism = {
                ...e.mechanism, ..."AggregateError" === e.type && {is_exception_group: !0},
                exception_id: t
            }
        }

        function tH(e, t, n, r) {
            e.mechanism = e.mechanism || {type: "generic", handled: !0}, e.mechanism = {
                ...e.mechanism,
                type: "chained",
                source: t,
                exception_id: n,
                parent_id: r
            }
        }

        function tq(e, t) {
            let n = {type: t.name || t.constructor.name, value: t.message}, r = e(t.stack || "", 1);
            return r.length && (n.stacktrace = {frames: r}), n
        }

        let tW = "LinkedErrors", tG = tR(tW, (e = {}) => {
            let t = e.limit || 5, n = e.key || "cause";
            return {
                name: tW, setupOnce() {
                }, preprocessEvent(e, r, i) {
                    let s = i.getOptions();
                    tB(tq, s.stackParser, s.maxValueLength, n, t, e, r)
                }
            }
        }), tV = 0;

        function tJ(e, t = {}, n) {
            if ("function" != typeof e) return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t) return t;
                if (e_(e)) return e
            } catch (t) {
                return e
            }
            let r = function () {
                let r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    let i = r.map(e => tJ(e, t));
                    return e.apply(this, i)
                } catch (e) {
                    throw tV++, setTimeout(() => {
                        tV--
                    }), !function (...e) {
                        let t = ta();
                        if (2 === e.length) {
                            let [n, r] = e;
                            return n ? t.withScope(() => (t.getStackTop().scope = n, r(n))) : t.withScope(r)
                        }
                        t.withScope(e[0])
                    }(n => {
                        var i, s;
                        n.addEventProcessor(e => (t.mechanism && (ex(e, void 0, void 0), eC(e, t.mechanism)), e.extra = {
                            ...e.extra,
                            arguments: r
                        }, e)), i = e, ta().captureException(i, void 0)
                    }), e
                }
            };
            try {
                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
            } catch (e) {
            }
            ev(r, e), ey(e, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {get: () => e.name})
            } catch (e) {
            }
            return r
        }

        let tK = {}, tY = {};

        function tX(e, t) {
            tK[e] = tK[e] || [], tK[e].push(t)
        }

        function tZ(e, t) {
            tY[e] || (t(), tY[e] = !0)
        }

        function tQ(e, t) {
            let n = e && tK[e];
            if (n) for (let e of n) try {
                e(t)
            } catch (e) {
            }
        }

        let t0 = null;

        function t1(e) {
            let t = "error";
            tX(t, e), tZ(t, t2)
        }

        function t2() {
            t0 = H.onerror, H.onerror = function (e, t, n, r, i) {
                return tQ("error", {
                    column: r,
                    error: i,
                    line: n,
                    msg: e,
                    url: t
                }), !!t0 && !t0.__SENTRY_LOADER__ && t0.apply(this, arguments)
            }, H.onerror.__SENTRY_INSTRUMENTED__ = !0
        }

        let t3 = null;

        function t5(e) {
            let t = "unhandledrejection";
            tX(t, e), tZ(t, t4)
        }

        function t4() {
            t3 = H.onunhandledrejection, H.onunhandledrejection = function (e) {
                return tQ("unhandledrejection", e), !t3 || !!t3.__SENTRY_LOADER__ || t3.apply(this, arguments)
            }, H.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }

        function t9(e, t) {
            let n = t6(e, t), r = {
                type: t && t.name, value: function (e) {
                    let t = e && e.message;
                    return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
                }(t)
            };
            return n.length && (r.stacktrace = {frames: n}), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
        }

        function t8(e, t) {
            return {exception: {values: [t9(e, t)]}}
        }

        function t6(e, t) {
            let n = t.stacktrace || t.stack || "", r = function (e) {
                if (e) {
                    if ("number" == typeof e.framesToPop) return e.framesToPop;
                    if (t7.test(e.message)) return 1
                }
                return 0
            }(t);
            try {
                return e(n, r)
            } catch (e) {
            }
            return []
        }

        let t7 = /Minified React error #\d+;/i;

        function ne(e, t, n, r, i) {
            let s;
            if (K(t) && t.error) return t8(e, t.error);
            if (Y(t) || J(t, "DOMException")) {
                if ("stack" in t) s = t8(e, t); else {
                    let i = t.name || (Y(t) ? "DOMError" : "DOMException"), a = t.message ? `${i}: ${t.message}` : i;
                    ex(s = nt(e, a, n, r), a)
                }
                return "code" in t && (s.tags = {...s.tags, "DOMException.code": `${t.code}`}), s
            }
            return V(t) ? t8(e, t) : (ee(t) || et(t) ? eC(s = function (e, t, n, r) {
                let i = tb(), s = i && i.getOptions().normalizeDepth, a = {
                    exception: {
                        values: [{
                            type: et(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: function (e, {isUnhandledRejection: t}) {
                                let n = function (e, t = 40) {
                                    let n = Object.keys(eb(e));
                                    if (n.sort(), !n.length) return "[object has no keys]";
                                    if (n[0].length >= t) return ep(n[0], t);
                                    for (let e = n.length; e > 0; e--) {
                                        let r = n.slice(0, e).join(", ");
                                        if (!(r.length > t)) {
                                            if (e === n.length) return r;
                                            return ep(r, t)
                                        }
                                    }
                                    return ""
                                }(e), r = t ? "promise rejection" : "exception";
                                if (K(e)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                if (et(e)) {
                                    let t = function (e) {
                                        try {
                                            let t = Object.getPrototypeOf(e);
                                            return t ? t.constructor.name : void 0
                                        } catch (e) {
                                        }
                                    }(e);
                                    return `Event \`${t}\` (type=${e.type}) captured as ${r}`
                                }
                                return `Object captured as ${r} with keys: ${n}`
                            }(t, {isUnhandledRejection: r})
                        }]
                    }, extra: {
                        __serialized__: function e(t, n = 3, r = 102400) {
                            let i = tm(t, n);
                            return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                        }(t, s)
                    }
                };
                if (n) {
                    let t = t6(e, n);
                    t.length && (a.exception.values[0].stacktrace = {frames: t})
                }
                return a
            }(e, t, n, i), {synthetic: !0}) : (ex(s = nt(e, t, n, r), `${t}`, void 0), eC(s, {synthetic: !0})), s)
        }

        function nt(e, t, n, r) {
            let i = {};
            if (r && n) {
                let r = t6(e, n);
                r.length && (i.exception = {values: [{value: t, stacktrace: {frames: r}}]})
            }
            if (Z(t)) {
                let {__sentry_template_string__: e, __sentry_template_values__: n} = t;
                return i.logentry = {message: e, params: n}, i
            }
            return i.message = t, i
        }

        let nn = "GlobalHandlers", nr = (e = {}) => {
            let t = {onerror: !0, onunhandledrejection: !0, ...e};
            return {
                name: nn, setupOnce() {
                    Error.stackTraceLimit = 50
                }, setup(e) {
                    t.onerror && t1(t => {
                        let {stackParser: n, attachStacktrace: r} = na();
                        if (tb() !== e || tV > 0) return;
                        let {msg: i, url: s, line: a, column: o, error: l} = t,
                            c = void 0 === l && X(i) ? function (e, t, n, r) {
                                let i = K(e) ? e.message : e, s = "Error",
                                    a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                                return a && (s = a[1], i = a[2]), ns({
                                    exception: {
                                        values: [{
                                            type: s,
                                            value: i
                                        }]
                                    }
                                }, t, n, r)
                            }(i, s, a, o) : ns(ne(n, l || i, void 0, r, !1), s, a, o);
                        c.level = "error", tv(c, {originalException: l, mechanism: {handled: !1, type: "onerror"}})
                    }), t.onunhandledrejection && t5(t => {
                        let {stackParser: n, attachStacktrace: r} = na();
                        if (tb() !== e || tV > 0) return;
                        let i = function (e) {
                            if (Q(e)) return e;
                            try {
                                if ("reason" in e) return e.reason;
                                if ("detail" in e && "reason" in e.detail) return e.detail.reason
                            } catch (e) {
                            }
                            return e
                        }(t), s = Q(i) ? {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(i)}`
                                }]
                            }
                        } : ne(n, i, void 0, r, !0);
                        s.level = "error", tv(s, {
                            originalException: i,
                            mechanism: {handled: !1, type: "onunhandledrejection"}
                        })
                    })
                }
            }
        }, ni = tR(nn, nr);

        function ns(e, t, n, r) {
            let i = e.exception = e.exception || {}, s = i.values = i.values || [], a = s[0] = s[0] || {},
                o = a.stacktrace = a.stacktrace || {}, l = o.frames = o.frames || [],
                c = isNaN(parseInt(r, 10)) ? void 0 : r, u = isNaN(parseInt(n, 10)) ? void 0 : n,
                h = X(t) && t.length > 0 ? t : function () {
                    try {
                        return H.document.location.href
                    } catch (e) {
                        return ""
                    }
                }();
            return 0 === l.length && l.push({colno: c, filename: h, function: "?", in_app: !0, lineno: u}), e
        }

        function na() {
            let e = tb();
            return e && e.getOptions() || {stackParser: () => [], attachStacktrace: !1}
        }

        let no = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            nl = "TryCatch", nc = (e = {}) => {
                let t = {
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0, ...e
                };
                return {
                    name: nl, setupOnce() {
                        t.setTimeout && eg(H, "setTimeout", nh), t.setInterval && eg(H, "setInterval", nh), t.requestAnimationFrame && eg(H, "requestAnimationFrame", nd), t.XMLHttpRequest && "XMLHttpRequest" in H && eg(XMLHttpRequest.prototype, "send", np);
                        let e = t.eventTarget;
                        e && (Array.isArray(e) ? e : no).forEach(nf)
                    }
                }
            }, nu = tR(nl, nc);

        function nh(e) {
            return function (...t) {
                let n = t[0];
                return t[0] = tJ(n, {
                    mechanism: {
                        data: {function: tf(e)},
                        handled: !1,
                        type: "instrument"
                    }
                }), e.apply(this, t)
            }
        }

        function nd(e) {
            return function (t) {
                return e.apply(this, [tJ(t, {
                    mechanism: {
                        data: {function: "requestAnimationFrame", handler: tf(e)},
                        handled: !1,
                        type: "instrument"
                    }
                })])
            }
        }

        function np(e) {
            return function (...t) {
                let n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                    e in n && "function" == typeof n[e] && eg(n, e, function (t) {
                        let n = {mechanism: {data: {function: e, handler: tf(t)}, handled: !1, type: "instrument"}},
                            r = e_(t);
                        return r && (n.mechanism.data.handler = tf(r)), tJ(t, n)
                    })
                }), e.apply(this, t)
            }
        }

        function nf(e) {
            let t = H[e] && H[e].prototype;
            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (eg(t, "addEventListener", function (t) {
                return function (n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = tJ(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: tf(r),
                                    target: e
                                }, handled: !1, type: "instrument"
                            }
                        }))
                    } catch (e) {
                    }
                    return t.apply(this, [n, tJ(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: tf(r),
                                target: e
                            }, handled: !1, type: "instrument"
                        }
                    }), i])
                }
            }), eg(t, "removeEventListener", function (e) {
                return function (t, n, r) {
                    try {
                        let i = n && n.__sentry_wrapped__;
                        i && e.call(this, t, i, r)
                    } catch (e) {
                    }
                    return e.call(this, t, n, r)
                }
            }))
        }

        function nm() {
            "console" in H && ec.forEach(function (e) {
                e in H.console && eg(H.console, e, function (t) {
                    return eu[e] = t, function (...t) {
                        tQ("console", {args: t, level: e});
                        let n = eu[e];
                        n && n.apply(H.console, t)
                    }
                })
            })
        }

        function ng(e) {
            tX("dom", e), tZ("dom", ny)
        }

        function ny() {
            if (!H.document) return;
            let e = tQ.bind(null, "dom"), t = nv(e, !0);
            H.document.addEventListener("click", t, !1), H.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
                let n = H[t] && H[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (eg(n, "addEventListener", function (t) {
                    return function (n, r, i) {
                        if ("click" === n || "keypress" == n) try {
                            let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                s = r[n] = r[n] || {refCount: 0};
                            if (!s.handler) {
                                let r = nv(e);
                                s.handler = r, t.call(this, n, r, i)
                            }
                            s.refCount++
                        } catch (e) {
                        }
                        return t.call(this, n, r, i)
                    }
                }), eg(n, "removeEventListener", function (e) {
                    return function (t, n, r) {
                        if ("click" === t || "keypress" == t) try {
                            let n = this.__sentry_instrumentation_handlers__ || {}, i = n[t];
                            i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                        } catch (e) {
                        }
                        return e.call(this, t, n, r)
                    }
                }))
            })
        }

        function nv(e, t = !1) {
            return n => {
                if (!n || n._sentryCaptured) return;
                let r = function (e) {
                    try {
                        return e.target
                    } catch (e) {
                        return null
                    }
                }(n);
                if ("keypress" === n.type && (!r || !r.tagName || "INPUT" !== r.tagName && "TEXTAREA" !== r.tagName && !r.isContentEditable)) return;
                ey(n, "_sentryCaptured", !0), r && !r._sentryId && ey(r, "_sentryId", ek());
                let i = "keypress" === n.type ? "input" : n.type;
                !function (e) {
                    if (e.type !== a) return !1;
                    try {
                        if (!e.target || e.target._sentryId !== o) return !1
                    } catch (e) {
                    }
                    return !0
                }(n) && (e({
                    event: n,
                    name: i,
                    global: t
                }), a = n.type, o = r ? r._sentryId : void 0), clearTimeout(s), s = H.setTimeout(() => {
                    o = void 0, a = void 0
                }, 1e3)
            }
        }

        let n_ = "__sentry_xhr_v3__";

        function nb(e) {
            tX("xhr", e), tZ("xhr", nw)
        }

        function nw() {
            if (!H.XMLHttpRequest) return;
            let e = XMLHttpRequest.prototype;
            eg(e, "open", function (e) {
                return function (...t) {
                    let n = Date.now(), r = X(t[0]) ? t[0].toUpperCase() : void 0, i = function (e) {
                        if (X(e)) return e;
                        try {
                            return e.toString()
                        } catch (e) {
                        }
                    }(t[1]);
                    if (!r || !i) return e.apply(this, t);
                    this[n_] = {
                        method: r,
                        url: i,
                        request_headers: {}
                    }, "POST" === r && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    let s = () => {
                        let e = this[n_];
                        if (e && 4 === this.readyState) {
                            try {
                                e.status_code = this.status
                            } catch (e) {
                            }
                            tQ("xhr", {args: [r, i], endTimestamp: Date.now(), startTimestamp: n, xhr: this})
                        }
                    };
                    return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? eg(this, "onreadystatechange", function (e) {
                        return function (...t) {
                            return s(), e.apply(this, t)
                        }
                    }) : this.addEventListener("readystatechange", s), eg(this, "setRequestHeader", function (e) {
                        return function (...t) {
                            let [n, r] = t, i = this[n_];
                            return i && X(n) && X(r) && (i.request_headers[n.toLowerCase()] = r), e.apply(this, t)
                        }
                    }), e.apply(this, t)
                }
            }), eg(e, "send", function (e) {
                return function (...t) {
                    let n = this[n_];
                    return n && (void 0 !== t[0] && (n.body = t[0]), tQ("xhr", {
                        args: [n.method, n.url],
                        startTimestamp: Date.now(),
                        xhr: this
                    })), e.apply(this, t)
                }
            })
        }

        function nS() {
            if (!("fetch" in H)) return !1;
            try {
                return new Headers, new Request("http://www.example.com"), new Response, !0
            } catch (e) {
                return !1
            }
        }

        function nE(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }

        function nk(e) {
            let t = "fetch";
            tX(t, e), tZ(t, nT)
        }

        function nT() {
            (function () {
                if ("string" == typeof EdgeRuntime) return !0;
                if (!nS()) return !1;
                if (nE(H.fetch)) return !0;
                let e = !1, t = H.document;
                if (t && "function" == typeof t.createElement) try {
                    let n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = nE(n.contentWindow.fetch)), t.head.removeChild(n)
                } catch (e) {
                }
                return e
            })() && eg(H, "fetch", function (e) {
                return function (...t) {
                    let {method: n, url: r} = function (e) {
                        if (0 === e.length) return {method: "GET", url: ""};
                        if (2 === e.length) {
                            let [t, n] = e;
                            return {url: nC(t), method: nx(n, "method") ? String(n.method).toUpperCase() : "GET"}
                        }
                        let t = e[0];
                        return {url: nC(t), method: nx(t, "method") ? String(t.method).toUpperCase() : "GET"}
                    }(t), i = {args: t, fetchData: {method: n, url: r}, startTimestamp: Date.now()};
                    return tQ("fetch", {...i}), e.apply(H, t).then(e => (tQ("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        response: e
                    }), e), e => {
                        throw tQ("fetch", {...i, endTimestamp: Date.now(), error: e}), e
                    })
                }
            })
        }

        function nx(e, t) {
            return !!e && "object" == typeof e && !!e[t]
        }

        function nC(e) {
            return "string" == typeof e ? e : e ? nx(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
        }

        function nI(e) {
            let t = "history";
            tX(t, e), tZ(t, nO)
        }

        function nO() {
            if (!function () {
                let e = H.chrome, t = e && e.app && e.app.runtime,
                    n = "history" in H && !!H.history.pushState && !!H.history.replaceState;
                return !t && n
            }()) return;
            let e = H.onpopstate;

            function t(e) {
                return function (...t) {
                    let n = t.length > 2 ? t[2] : void 0;
                    if (n) {
                        let e = l, t = String(n);
                        l = t, tQ("history", {from: e, to: t})
                    }
                    return e.apply(this, t)
                }
            }

            H.onpopstate = function (...t) {
                let n = H.location.href, r = l;
                if (l = n, tQ("history", {from: r, to: n}), e) try {
                    return e.apply(this, t)
                } catch (e) {
                }
            }, eg(H.history, "pushState", t), eg(H.history, "replaceState", t)
        }

        let nR = ["fatal", "error", "warning", "log", "info", "debug"];

        function nA(e) {
            if (!e) return {};
            let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t) return {};
            let n = t[6] || "", r = t[8] || "";
            return {host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r}
        }

        let n$ = "Breadcrumbs", nP = (e = {}) => {
            let t = {console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e};
            return {
                name: n$, setupOnce() {
                }, setup(e) {
                    var n;
                    t.console && function (e) {
                        let t = "console";
                        tX(t, e), tZ(t, nm)
                    }(function (t) {
                        var n;
                        if (tb() !== e) return;
                        let r = {
                            category: "console",
                            data: {arguments: t.args, logger: "console"},
                            level: "warn" === (n = t.level) ? "warning" : nR.includes(n) ? n : "log",
                            message: ef(t.args, " ")
                        };
                        if ("assert" === t.level) {
                            if (!1 !== t.args[0]) return;
                            r.message = `Assertion failed: ${ef(t.args.slice(1), " ") || "console.assert"}`, r.data.arguments = t.args.slice(1)
                        }
                        t_(r, {input: t.args, level: t.level})
                    }), t.dom && ng((n = t.dom, function (t) {
                        let r, i;
                        if (tb() !== e) return;
                        let s = "object" == typeof n ? n.serializeAttribute : void 0,
                            a = "object" == typeof n && "number" == typeof n.maxStringLength ? n.maxStringLength : void 0;
                        a && a > 1024 && (a = 1024), "string" == typeof s && (s = [s]);
                        try {
                            let e = t.event, n = e && e.target ? e.target : e;
                            r = ea(n, {keyAttrs: s, maxStringLength: a}), i = el(n)
                        } catch (e) {
                            r = "<unknown>"
                        }
                        if (0 === r.length) return;
                        let o = {category: `ui.${t.name}`, message: r};
                        i && (o.data = {"ui.component_name": i}), t_(o, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    })), t.xhr && nb(function (t) {
                        if (tb() !== e) return;
                        let {startTimestamp: n, endTimestamp: r} = t, i = t.xhr[n_];
                        if (!n || !r || !i) return;
                        let {method: s, url: a, status_code: o, body: l} = i;
                        t_({category: "xhr", data: {method: s, url: a, status_code: o}, type: "http"}, {
                            xhr: t.xhr,
                            input: l,
                            startTimestamp: n,
                            endTimestamp: r
                        })
                    }), t.fetch && nk(function (t) {
                        if (tb() !== e) return;
                        let {startTimestamp: n, endTimestamp: r} = t;
                        if (!(!r || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method)) {
                            if (t.error) t_({
                                category: "fetch",
                                data: t.fetchData,
                                level: "error",
                                type: "http"
                            }, {data: t.error, input: t.args, startTimestamp: n, endTimestamp: r}); else {
                                let e = t.response;
                                t_({
                                    category: "fetch",
                                    data: {...t.fetchData, status_code: e && e.status},
                                    type: "http"
                                }, {input: t.args, response: e, startTimestamp: n, endTimestamp: r})
                            }
                        }
                    }), t.history && nI(function (t) {
                        if (tb() !== e) return;
                        let n = t.from, r = t.to, i = nA(H.location.href), s = n ? nA(n) : void 0, a = nA(r);
                        s && s.path || (s = i), i.protocol === a.protocol && i.host === a.host && (r = a.relative), i.protocol === s.protocol && i.host === s.host && (n = s.relative), t_({
                            category: "navigation",
                            data: {from: n, to: r}
                        })
                    }), t.sentry && e.on && e.on("beforeSendEvent", function (t) {
                        tb() === e && t_({
                            category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                            event_id: t.event_id,
                            level: t.level,
                            message: function (e) {
                                let {message: t, event_id: n} = e;
                                if (t) return t;
                                let r = eT(e);
                                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
                            }(t)
                        }, {event: t})
                    })
                }
            }
        }, nj = tR(n$, nP), nM = "LinkedErrors", nN = (e = {}) => {
            let t = e.limit || 5, n = e.key || "cause";
            return {
                name: nM, setupOnce() {
                }, preprocessEvent(e, r, i) {
                    let s = i.getOptions();
                    tB(t9, s.stackParser, s.maxValueLength, n, t, e, r)
                }
            }
        }, nD = tR(nM, nN), nL = "HttpContext", nF = () => ({
            name: nL, setupOnce() {
            }, preprocessEvent(e) {
                if (!H.navigator && !H.location && !H.document) return;
                let t = e.request && e.request.url || H.location && H.location.href, {referrer: n} = H.document || {}, {userAgent: r} = H.navigator || {},
                    i = {...e.request && e.request.headers, ...n && {Referer: n}, ...r && {"User-Agent": r}},
                    s = {...e.request, ...t && {url: t}, headers: i};
                e.request = s
            }
        }), nU = tR(nL, nF), nB = "Dedupe", nz = () => {
            let e;
            return {
                name: nB, setupOnce() {
                }, processEvent(t) {
                    if (t.type) return t;
                    try {
                        var n;
                        if ((n = e) && (function (e, t) {
                            let n = e.message, r = t.message;
                            return !!((n || r) && (!n || r) && (n || !r) && n === r && nW(e, t) && nq(e, t))
                        }(t, n) || function (e, t) {
                            let n = nG(t), r = nG(e);
                            return !!(n && r && n.type === r.type && n.value === r.value && nW(e, t) && nq(e, t))
                        }(t, n))) return null
                    } catch (e) {
                    }
                    return e = t
                }
            }
        }, nH = tR(nB, nz);

        function nq(e, t) {
            let n = nV(e), r = nV(t);
            if (!n && !r) return !0;
            if (n && !r || !n && r || r.length !== n.length) return !1;
            for (let e = 0; e < r.length; e++) {
                let t = r[e], i = n[e];
                if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
            }
            return !0
        }

        function nW(e, t) {
            let n = e.fingerprint, r = t.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }

        function nG(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }

        function nV(e) {
            let t = e.exception;
            if (t) try {
                return t.values[0].stacktrace.frames
            } catch (e) {
            }
        }

        let nJ = {};
        H.Sentry && H.Sentry.Integrations && (nJ = H.Sentry.Integrations);
        let nK = {...nJ, ...L, ...F}, nY = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

        function nX(e, t = !1) {
            let {host: n, path: r, pass: i, port: s, projectId: a, protocol: o, publicKey: l} = e;
            return `${o}://${l}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r ? `${r}/` : r}${a}`
        }

        function nZ(e) {
            let t = nY.exec(e);
            if (!t) {
                eh(() => {
                    console.error(`Invalid Sentry Dsn: ${e}`)
                });
                return
            }
            let [n, r, i = "", s, a = "", o] = t.slice(1), l = "", c = o, u = c.split("/");
            if (u.length > 1 && (l = u.slice(0, -1).join("/"), c = u.pop()), c) {
                let e = c.match(/^\d+/);
                e && (c = e[0])
            }
            return nQ({host: s, pass: i, path: l, projectId: c, port: a, protocol: n, publicKey: r})
        }

        function nQ(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }

        function n0(e, t = []) {
            return [e, t]
        }

        function n1(e, t) {
            for (let n of e[1]) {
                let e = n[0].type;
                if (t(n, e)) return !0
            }
            return !1
        }

        function n2(e, t) {
            return (t || new TextEncoder).encode(e)
        }

        let n3 = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "unknown"
        };

        function n5(e) {
            if (!e || !e.sdk) return;
            let {name: t, version: n} = e.sdk;
            return {name: t, version: n}
        }

        function n4(e, t, n, r) {
            let i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: new Date().toISOString(), ...t && {sdk: t}, ...!!n && r && {dsn: nX(r)}, ...i && {trace: eE({...i})}
            }
        }

        class n9 extends Error {
            constructor(e, t = "warn") {
                super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t
            }
        }

        class n8 {
            constructor(e) {
                if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn && (this._dsn = function (e) {
                    let t = "string" == typeof e ? nZ(e) : nQ(e);
                    if (t) return t
                }(e.dsn)), this._dsn) {
                    let t = function (e, t = {}) {
                        var n;
                        let r = "string" == typeof t ? t : t.tunnel,
                            i = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
                        return r || `${function (e) {
                            let t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
                            return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
                        }(e)}${e.projectId}/envelope/?${Object.keys(n = {
                            sentry_key: e.publicKey,
                            sentry_version: "7", ...i && {sentry_client: `${i.name}/${i.version}`}
                        }).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`).join("&")}`
                    }(this._dsn, e);
                    this._transport = e.transport({
                        recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions,
                        url: t
                    })
                }
            }

            captureException(e, t, n) {
                if (eI(e)) return;
                let r = t && t.event_id;
                return this._process(this.eventFromException(e, t).then(e => this._captureEvent(e, t, n)).then(e => {
                    r = e
                })), r
            }

            captureMessage(e, t, n, r) {
                let i = n && n.event_id, s = Z(e) ? e : String(e),
                    a = Q(e) ? this.eventFromMessage(s, t, n) : this.eventFromException(e, n);
                return this._process(a.then(e => this._captureEvent(e, n, r)).then(e => {
                    i = e
                })), i
            }

            captureEvent(e, t, n) {
                if (t && t.originalException && eI(t.originalException)) return;
                let r = t && t.event_id, i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(e, t, i || n).then(e => {
                    r = e
                })), r
            }

            captureSession(e) {
                "string" != typeof e.release || (this.sendSession(e), eU(e, {init: !1}))
            }

            getDsn() {
                return this._dsn
            }

            getOptions() {
                return this._options
            }

            getSdkMetadata() {
                return this._options._metadata
            }

            getTransport() {
                return this._transport
            }

            flush(e) {
                let t = this._transport;
                return t ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : eP(!0)
            }

            close(e) {
                return this.flush(e).then(e => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), e))
            }

            getEventProcessors() {
                return this._eventProcessors
            }

            addEventProcessor(e) {
                this._eventProcessors.push(e)
            }

            setupIntegrations(e) {
                (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
            }

            init() {
                this._isEnabled() && this._setupIntegrations()
            }

            getIntegrationById(e) {
                return this.getIntegrationByName(e)
            }

            getIntegrationByName(e) {
                return this._integrations[e]
            }

            getIntegration(e) {
                try {
                    return this._integrations[e.id] || null
                } catch (e) {
                    return null
                }
            }

            addIntegration(e) {
                let t = this._integrations[e.name];
                tO(this, e, this._integrations), t || tI(this, [e])
            }

            sendEvent(e, t = {}) {
                this.emit("beforeSendEvent", e, t);
                let n = function (e, t, n, r) {
                    var i;
                    let s = n5(n), a = e.type && "replay_event" !== e.type ? e.type : "event";
                    (i = n && n.sdk) && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || i.name, e.sdk.version = e.sdk.version || i.version, e.sdk.integrations = [...e.sdk.integrations || [], ...i.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...i.packages || []]);
                    let o = n4(e, s, r, t);
                    return delete e.sdkProcessingMetadata, n0(o, [[{type: a}, e]])
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (let e of t.attachments || []) n = function (e, t) {
                    let [n, r] = e;
                    return [n, [...r, t]]
                }(n, function (e, t) {
                    let n = "string" == typeof e.data ? n2(e.data, t) : e.data;
                    return [eE({
                        type: "attachment",
                        length: n.length,
                        filename: e.filename,
                        content_type: e.contentType,
                        attachment_type: e.attachmentType
                    }), n]
                }(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                let r = this._sendEnvelope(n);
                r && r.then(t => this.emit("afterSendEvent", e, t), null)
            }

            sendSession(e) {
                let t = function (e, t, n, r) {
                    let i = n5(n);
                    return n0({sent_at: new Date().toISOString(), ...i && {sdk: i}, ...!!r && t && {dsn: nX(t)}}, ["aggregates" in e ? [{type: "sessions"}, e] : [{type: "session"}, e.toJSON()]])
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(t)
            }

            recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                    let n = `${e}:${t}`;
                    this._outcomes[n] = this._outcomes[n] + 1 || 1
                }
            }

            captureAggregateMetrics(e) {
                let t = function (e, t, n, r) {
                    let i = {sent_at: new Date().toISOString()};
                    return n && n.sdk && (i.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && t && (i.dsn = nX(t)), n0(i, [function (e) {
                        let t = function (e) {
                            let t = "";
                            for (let n of e) {
                                let e = Object.entries(n.tags),
                                    r = e.length > 0 ? `|#${e.map(([e, t]) => `${e}:${t}`).join(",")}` : "";
                                t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`
                            }
                            return t
                        }(e);
                        return [{type: "statsd", length: t.length}, t]
                    }(e)])
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(t)
            }

            on(e, t) {
                this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t)
            }

            emit(e, ...t) {
                this._hooks[e] && this._hooks[e].forEach(e => e(...t))
            }

            _setupIntegrations() {
                let {integrations: e} = this._options;
                this._integrations = function (e, t) {
                    let n = {};
                    return t.forEach(t => {
                        t && tO(e, t, n)
                    }), n
                }(this, e), tI(this, e), this._integrationsInitialized = !0
            }

            _updateSessionFromEvent(e, t) {
                let n = !1, r = !1, i = t.exception && t.exception.values;
                if (i) for (let e of (r = !0, i)) {
                    let t = e.mechanism;
                    if (t && !1 === t.handled) {
                        n = !0;
                        break
                    }
                }
                let s = "ok" === e.status;
                (s && 0 === e.errors || s && n) && (eU(e, {
                    ...n && {status: "crashed"},
                    errors: e.errors || Number(r || n)
                }), this.captureSession(e))
            }

            _isClientDoneProcessing(e) {
                return new eM(t => {
                    let n = 0, r = setInterval(() => {
                        0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
                    }, 1)
                })
            }

            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport
            }

            _prepareEvent(e, t, n, r = to()) {
                let i = this.getOptions(), s = Object.keys(this._integrations);
                return !t.integrations && s.length > 0 && (t.integrations = s), this.emit("preprocessEvent", e, t), tg(i, e, t, n, this, r).then(e => {
                    if (null === e) return e;
                    let t = {...r.getPropagationContext(), ...n ? n.getPropagationContext() : void 0};
                    if (!(e.contexts && e.contexts.trace) && t) {
                        let {traceId: r, spanId: i, parentSpanId: s, dsc: a} = t;
                        e.contexts = {trace: {trace_id: r, span_id: i, parent_span_id: s}, ...e.contexts};
                        let o = a || e4(r, this, n);
                        e.sdkProcessingMetadata = {dynamicSamplingContext: o, ...e.sdkProcessingMetadata}
                    }
                    return e
                })
            }

            _captureEvent(e, t = {}, n) {
                return this._processEvent(e, t, n).then(e => e.event_id, e => {
                })
            }

            _processEvent(e, t, n) {
                let r = this.getOptions(), {sampleRate: i} = r, s = n7(e), a = n6(e), o = e.type || "error",
                    l = `before send for type \`${o}\``;
                if (a && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), ej(new n9(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
                let c = "replay_event" === o ? "replay" : o,
                    u = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, t, n, u).then(n => {
                    if (null === n) throw this.recordDroppedEvent("event_processor", c, e), new n9("An event processor returned `null`, will not send event.", "log");
                    return t.data && !0 === t.data.__sentry__ ? n : function (e, t) {
                        let n = `${t} must return \`null\` or a valid event.`;
                        if (en(e)) return e.then(e => {
                            if (!ee(e) && null !== e) throw new n9(n);
                            return e
                        }, e => {
                            throw new n9(`${t} rejected with ${e}`)
                        });
                        if (!ee(e) && null !== e) throw new n9(n);
                        return e
                    }(function (e, t, n) {
                        let {beforeSend: r, beforeSendTransaction: i} = e;
                        return n6(t) && r ? r(t, n) : n7(t) && i ? i(t, n) : t
                    }(r, n, t), l)
                }).then(r => {
                    if (null === r) throw this.recordDroppedEvent("before_send", c, e), new n9(`${l} returned \`null\`, will not send event.`, "log");
                    let i = n && n.getSession();
                    !s && i && this._updateSessionFromEvent(i, r);
                    let a = r.transaction_info;
                    return s && a && r.transaction !== e.transaction && (r.transaction_info = {
                        ...a,
                        source: "custom"
                    }), this.sendEvent(r, t), r
                }).then(null, e => {
                    if (e instanceof n9) throw e;
                    throw this.captureException(e, {data: {__sentry__: !0}, originalException: e}), new n9(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
                })
            }

            _process(e) {
                this._numProcessing++, e.then(e => (this._numProcessing--, e), e => (this._numProcessing--, e))
            }

            _sendEnvelope(e) {
                if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) return this._transport.send(e).then(null, e => {
                })
            }

            _clearOutcomes() {
                let e = this._outcomes;
                return this._outcomes = {}, Object.keys(e).map(t => {
                    let [n, r] = t.split(":");
                    return {reason: n, category: r, quantity: e[t]}
                })
            }
        }

        function n6(e) {
            return void 0 === e.type
        }

        function n7(e) {
            return "transaction" === e.type
        }

        var re = n(22108);

        class rt extends n8 {
            constructor(e) {
                B(e, "browser", ["browser"], H.SENTRY_SDK_SOURCE || (0, re.S)()), super(e), e.sendClientReports && H.document && H.document.addEventListener("visibilitychange", () => {
                    "hidden" === H.document.visibilityState && this._flushOutcomes()
                })
            }

            eventFromException(e, t) {
                return function (e, t, n, r) {
                    let i = ne(e, t, n && n.syntheticException || void 0, r);
                    return eC(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), eP(i)
                }(this._options.stackParser, e, t, this._options.attachStacktrace)
            }

            eventFromMessage(e, t = "info", n) {
                return function (e, t, n = "info", r, i) {
                    let s = nt(e, t, r && r.syntheticException || void 0, i);
                    return s.level = n, r && r.event_id && (s.event_id = r.event_id), eP(s)
                }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
            }

            captureUserFeedback(e) {
                if (!this._isEnabled()) return;
                let t = function (e, {metadata: t, tunnel: n, dsn: r}) {
                    return n0({
                        event_id: e.event_id,
                        sent_at: new Date().toISOString(), ...t && t.sdk && {
                            sdk: {
                                name: t.sdk.name,
                                version: t.sdk.version
                            }
                        }, ...!!n && !!r && {dsn: nX(r)}
                    }, [[{type: "user_report"}, e]])
                }(e, {metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel});
                this._sendEnvelope(t)
            }

            _prepareEvent(e, t, n) {
                return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n)
            }

            _flushOutcomes() {
                var e;
                let t = this._clearOutcomes();
                if (0 === t.length || !this._dsn) return;
                let n = n0((e = this._options.tunnel && nX(this._dsn)) ? {dsn: e} : {}, [[{type: "client_report"}, {
                    timestamp: eR(),
                    discarded_events: t
                }]]);
                this._sendEnvelope(n)
            }
        }

        function rn(e, t, n, r) {
            let i = {filename: e, function: t, in_app: !0};
            return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
        }

        let rr = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            ri = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            rs = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            ra = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            ro = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            rl = td([30, e => {
                let t = rr.exec(e);
                if (t) {
                    if (t[2] && 0 === t[2].indexOf("eval")) {
                        let e = ri.exec(t[2]);
                        e && (t[2] = e[1], t[3] = e[2], t[4] = e[3])
                    }
                    let [e, n] = rc(t[1] || "?", t[2]);
                    return rn(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                }
            }], [50, e => {
                let t = rs.exec(e);
                if (t) {
                    if (t[3] && t[3].indexOf(" > eval") > -1) {
                        let e = ra.exec(t[3]);
                        e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                    }
                    let e = t[3], n = t[1] || "?";
                    return [n, e] = rc(n, e), rn(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                }
            }], [40, e => {
                let t = ro.exec(e);
                return t ? rn(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0
            }]), rc = (e, t) => {
                let n = -1 !== e.indexOf("safari-extension"), r = -1 !== e.indexOf("safari-web-extension");
                return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
            };

        function ru(e, t, n = Date.now()) {
            return (e[t] || e.all || 0) > n
        }

        function rh(e, {statusCode: t, headers: n}, r = Date.now()) {
            let i = {...e}, s = n && n["x-sentry-rate-limits"], a = n && n["retry-after"];
            if (s) for (let e of s.trim().split(",")) {
                let [t, n] = e.split(":", 2), s = parseInt(t, 10), a = (isNaN(s) ? 60 : s) * 1e3;
                if (n) for (let e of n.split(";")) i[e] = r + a; else i.all = r + a
            } else a ? i.all = r + function (e, t = Date.now()) {
                let n = parseInt(`${e}`, 10);
                if (!isNaN(n)) return 1e3 * n;
                let r = Date.parse(`${e}`);
                return isNaN(r) ? 6e4 : r - t
            }(a, r) : 429 === t && (i.all = r + 6e4);
            return i
        }

        function rd(e, t, n = function (e) {
            let t = [];

            function n(e) {
                return t.splice(t.indexOf(e), 1)[0]
            }

            return {
                $: t, add: function (r) {
                    if (!(void 0 === e || t.length < e)) return ej(new n9("Not adding Promise because buffer limit was reached."));
                    let i = r();
                    return -1 === t.indexOf(i) && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {
                    })), i
                }, drain: function (e) {
                    return new eM((n, r) => {
                        let i = t.length;
                        if (!i) return n(!0);
                        let s = setTimeout(() => {
                            e && e > 0 && n(!1)
                        }, e);
                        t.forEach(e => {
                            eP(e).then(() => {
                                --i || (clearTimeout(s), n(!0))
                            }, r)
                        })
                    })
                }
            }
        }(e.bufferSize || 30)) {
            let r = {};

            function i(i) {
                let s = [];
                if (n1(i, (t, n) => {
                    let i = n3[n];
                    if (ru(r, i)) {
                        let r = rp(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", i, r)
                    } else s.push(t)
                }), 0 === s.length) return eP();
                let a = n0(i[0], s), o = t => {
                    n1(a, (n, r) => {
                        let i = rp(n, r);
                        e.recordDroppedEvent(t, n3[r], i)
                    })
                };
                return n.add(() => t({
                    body: function (e, t) {
                        let [n, r] = e, i = JSON.stringify(n);

                        function s(e) {
                            "string" == typeof i ? i = "string" == typeof e ? i + e : [n2(i, t), e] : i.push("string" == typeof e ? n2(e, t) : e)
                        }

                        for (let e of r) {
                            let [t, n] = e;
                            if (s(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) s(n); else {
                                let e;
                                try {
                                    e = JSON.stringify(n)
                                } catch (t) {
                                    e = JSON.stringify(tm(n))
                                }
                                s(e)
                            }
                        }
                        return "string" == typeof i ? i : function (e) {
                            let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)), n = 0;
                            for (let r of e) t.set(r, n), n += r.length;
                            return t
                        }(i)
                    }(a, e.textEncoder)
                }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode), r = rh(r, e), e), e => {
                    throw o("network_error"), e
                })).then(e => e, e => {
                    if (e instanceof n9) return o("queue_overflow"), eP();
                    throw e
                })
            }

            return i.__sentry__baseTransport__ = !0, {send: i, flush: e => n.drain(e)}
        }

        function rp(e, t) {
            if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0
        }

        function rf(e, t = function () {
            if (E) return E;
            if (nE(H.fetch)) return E = H.fetch.bind(H);
            let e = H.document, t = H.fetch;
            if (e && "function" == typeof e.createElement) try {
                let n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n);
                let r = n.contentWindow;
                r && r.fetch && (t = r.fetch), e.head.removeChild(n)
            } catch (e) {
            }
            return E = t.bind(H)
        }()) {
            let n = 0, r = 0;
            return rd(e, function (i) {
                let s = i.body.length;
                n += s, r++;
                let a = {
                    body: i.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && r < 15, ...e.fetchOptions
                };
                try {
                    return t(e.url, a).then(e => (n -= s, r--, {
                        statusCode: e.status,
                        headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                        }
                    }))
                } catch (e) {
                    return E = void 0, n -= s, r--, ej(e)
                }
            })
        }

        function rm(e) {
            return rd(e, function (t) {
                return new eM((n, r) => {
                    let i = new XMLHttpRequest;
                    for (let t in i.onerror = r, i.onreadystatechange = () => {
                        4 === i.readyState && n({
                            statusCode: i.status,
                            headers: {
                                "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": i.getResponseHeader("Retry-After")
                            }
                        })
                    }, i.open("POST", e.url), e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && i.setRequestHeader(t, e.headers[t]);
                    i.send(t.body)
                })
            })
        }

        let rg = [tL(), tP(), nc(), nP(), nr(), nN(), nz(), nF()];
        var ry = n(32918);

        function rv(e) {
            let t;
            let n = e[0], r = 1;
            for (; r < e.length;) {
                let i = e[r], s = e[r + 1];
                if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                "access" === i || "optionalAccess" === i ? (t = n, n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s((...e) => n.call(t, ...e)), t = void 0)
            }
            return n
        }

        function r_(e) {
            let t = c ? c.get(e) : void 0;
            if (!t) return;
            let n = {};
            for (let [, [e, r]] of t) n[e] || (n[e] = []), n[e].push(eE(r));
            return n
        }

        let rb = "sentry.source", rw = "sentry.sample_rate", rS = "sentry.op", rE = "sentry.origin";

        function rk(e, t) {
            e.setTag("http.status_code", String(t)), e.setData("http.response.status_code", t);
            let n = function (e) {
                if (e < 400 && e >= 100) return "ok";
                if (e >= 400 && e < 500) switch (e) {
                    case 401:
                        return "unauthenticated";
                    case 403:
                        return "permission_denied";
                    case 404:
                        return "not_found";
                    case 409:
                        return "already_exists";
                    case 413:
                        return "failed_precondition";
                    case 429:
                        return "resource_exhausted";
                    default:
                        return "invalid_argument"
                }
                if (e >= 500 && e < 600) switch (e) {
                    case 501:
                        return "unimplemented";
                    case 503:
                        return "unavailable";
                    case 504:
                        return "deadline_exceeded";
                    default:
                        return "internal_error"
                }
                return "unknown_error"
            }(t);
            "unknown_error" !== n && e.setStatus(n)
        }

        (C = M || (M = {})).Ok = "ok", C.DeadlineExceeded = "deadline_exceeded", C.Unauthenticated = "unauthenticated", C.PermissionDenied = "permission_denied", C.NotFound = "not_found", C.ResourceExhausted = "resource_exhausted", C.InvalidArgument = "invalid_argument", C.Unimplemented = "unimplemented", C.Unavailable = "unavailable", C.InternalError = "internal_error", C.UnknownError = "unknown_error", C.Cancelled = "cancelled", C.AlreadyExists = "already_exists", C.FailedPrecondition = "failed_precondition", C.Aborted = "aborted", C.OutOfRange = "out_of_range", C.DataLoss = "data_loss";

        class rT {
            constructor(e = 1e3) {
                this._maxlen = e, this.spans = []
            }

            add(e) {
                this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
            }
        }

        class rx {
            constructor(e = {}) {
                this._traceId = e.traceId || ek(), this._spanId = e.spanId || ek().substring(16), this._startTime = e.startTimestamp || eA(), this.tags = e.tags ? {...e.tags} : {}, this.data = e.data ? {...e.data} : {}, this.instrumenter = e.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
                    [rE]: e.origin || "manual",
                    [rS]: e.op, ...e.attributes
                }), this._name = e.name || e.description, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.status && (this._status = e.status), e.endTimestamp && (this._endTime = e.endTimestamp), e.exclusiveTime && (this._exclusiveTime = e.exclusiveTime), this._measurements = e.measurements ? {...e.measurements} : {}
            }

            get name() {
                return this._name || ""
            }

            set name(e) {
                this.updateName(e)
            }

            get description() {
                return this._name
            }

            set description(e) {
                this._name = e
            }

            get traceId() {
                return this._traceId
            }

            set traceId(e) {
                this._traceId = e
            }

            get spanId() {
                return this._spanId
            }

            set spanId(e) {
                this._spanId = e
            }

            set parentSpanId(e) {
                this._parentSpanId = e
            }

            get parentSpanId() {
                return this._parentSpanId
            }

            get sampled() {
                return this._sampled
            }

            set sampled(e) {
                this._sampled = e
            }

            get attributes() {
                return this._attributes
            }

            set attributes(e) {
                this._attributes = e
            }

            get startTimestamp() {
                return this._startTime
            }

            set startTimestamp(e) {
                this._startTime = e
            }

            get endTimestamp() {
                return this._endTime
            }

            set endTimestamp(e) {
                this._endTime = e
            }

            get status() {
                return this._status
            }

            set status(e) {
                this._status = e
            }

            get op() {
                return this._attributes[rS]
            }

            set op(e) {
                this.setAttribute(rS, e)
            }

            get origin() {
                return this._attributes[rE]
            }

            set origin(e) {
                this.setAttribute(rE, e)
            }

            spanContext() {
                let {_spanId: e, _traceId: t, _sampled: n} = this;
                return {spanId: e, traceId: t, traceFlags: n ? 1 : 0}
            }

            startChild(e) {
                let t = new rx({...e, parentSpanId: this._spanId, sampled: this._sampled, traceId: this._traceId});
                t.spanRecorder = this.spanRecorder, t.spanRecorder && t.spanRecorder.add(t);
                let n = ez(this);
                return t.transaction = n, t
            }

            setTag(e, t) {
                return this.tags = {...this.tags, [e]: t}, this
            }

            setData(e, t) {
                return this.data = {...this.data, [e]: t}, this
            }

            setAttribute(e, t) {
                void 0 === t ? delete this._attributes[e] : this._attributes[e] = t
            }

            setAttributes(e) {
                Object.keys(e).forEach(t => this.setAttribute(t, e[t]))
            }

            setStatus(e) {
                return this._status = e, this
            }

            setHttpStatus(e) {
                return rk(this, e), this
            }

            setName(e) {
                this.updateName(e)
            }

            updateName(e) {
                return this._name = e, this
            }

            isSuccess() {
                return "ok" === this._status
            }

            finish(e) {
                return this.end(e)
            }

            end(e) {
                !this._endTime && (ez(this), this._endTime = e1(e))
            }

            toTraceparent() {
                return e0(this)
            }

            toContext() {
                return eE({
                    data: this._getData(),
                    description: this._name,
                    endTimestamp: this._endTime,
                    op: this.op,
                    parentSpanId: this._parentSpanId,
                    sampled: this._sampled,
                    spanId: this._spanId,
                    startTimestamp: this._startTime,
                    status: this._status,
                    tags: this.tags,
                    traceId: this._traceId
                })
            }

            updateWithContext(e) {
                return this.data = e.data || {}, this._name = e.name || e.description, this._endTime = e.endTimestamp, this.op = e.op, this._parentSpanId = e.parentSpanId, this._sampled = e.sampled, this._spanId = e.spanId || this._spanId, this._startTime = e.startTimestamp || this._startTime, this._status = e.status, this.tags = e.tags || {}, this._traceId = e.traceId || this._traceId, this
            }

            getTraceContext() {
                return eQ(this)
            }

            getSpanJSON() {
                return eE({
                    data: this._getData(),
                    description: this._name,
                    op: this._attributes[rS],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: this._status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[rE],
                    _metrics_summary: r_(this),
                    profile_id: this._attributes.profile_id,
                    exclusive_time: this._exclusiveTime,
                    measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
                })
            }

            isRecording() {
                return !this._endTime && !!this._sampled
            }

            toJSON() {
                return this.getSpanJSON()
            }

            _getData() {
                let {data: e, _attributes: t} = this, n = Object.keys(e).length > 0, r = Object.keys(t).length > 0;
                return n || r ? n && r ? {...e, ...t} : n ? e : t : void 0
            }
        }

        function rC(e) {
            if (!tx()) return;
            let t = function (e) {
                if (e.startTime) {
                    let t = {...e};
                    return t.startTimestamp = e1(e.startTime), delete t.startTime, t
                }
                return e
            }(e), n = ta(), r = e.scope ? e.scope.getSpan() : rI();
            if (e.onlyIfParent && !r) return;
            let i = (e.scope || tw()).clone();
            return function (e, {parentSpan: t, spanContext: n, forceTransaction: r, scope: i}) {
                var s;
                let a;
                if (!tx()) return;
                let o = to();
                if (t && !r) a = t.startChild(n); else if (t) {
                    let r = e9(t), {traceId: i, spanId: s} = t.spanContext(), o = e5(t);
                    a = e.startTransaction({
                        traceId: i,
                        parentSpanId: s,
                        parentSampled: o, ...n,
                        metadata: {dynamicSamplingContext: r, ...n.metadata}
                    })
                } else {
                    let {
                        traceId: t,
                        dsc: r,
                        parentSpanId: s,
                        sampled: l
                    } = {...o.getPropagationContext(), ...i.getPropagationContext()};
                    a = e.startTransaction({
                        traceId: t,
                        parentSpanId: s,
                        parentSampled: l, ...n,
                        metadata: {dynamicSamplingContext: r, ...n.metadata}
                    })
                }
                return i.setSpan(a), (s = a) && (ey(s, rR, o), ey(s, rO, i)), a
            }(n, {parentSpan: r, spanContext: t, forceTransaction: e.forceTransaction, scope: i})
        }

        function rI() {
            return tw().getSpan()
        }

        let rO = "_sentryScope", rR = "_sentryIsolationScope";

        class rA extends rx {
            constructor(e, t) {
                super(e), this._contexts = {}, this._hub = t || ta(), this._name = e.name || "", this._metadata = {...e.metadata}, this._trimEnd = e.trimEnd, this.transaction = this;
                let n = this._metadata.dynamicSamplingContext;
                n && (this._frozenDynamicSamplingContext = {...n})
            }

            get name() {
                return this._name
            }

            set name(e) {
                this.setName(e)
            }

            get metadata() {
                return {
                    source: "custom",
                    spanMetadata: {}, ...this._metadata, ...this._attributes[rb] && {source: this._attributes[rb]}, ...this._attributes[rw] && {sampleRate: this._attributes[rw]}
                }
            }

            set metadata(e) {
                this._metadata = e
            }

            setName(e, t = "custom") {
                this._name = e, this.setAttribute(rb, t)
            }

            updateName(e) {
                return this._name = e, this
            }

            initSpanRecorder(e = 1e3) {
                this.spanRecorder || (this.spanRecorder = new rT(e)), this.spanRecorder.add(this)
            }

            setContext(e, t) {
                null === t ? delete this._contexts[e] : this._contexts[e] = t
            }

            setMeasurement(e, t, n = "") {
                this._measurements[e] = {value: t, unit: n}
            }

            setMetadata(e) {
                this._metadata = {...this._metadata, ...e}
            }

            end(e) {
                let t = e1(e), n = this._finishTransaction(t);
                if (n) return this._hub.captureEvent(n)
            }

            toContext() {
                return eE({...super.toContext(), name: this._name, trimEnd: this._trimEnd})
            }

            updateWithContext(e) {
                return super.updateWithContext(e), this._name = e.name || "", this._trimEnd = e.trimEnd, this
            }

            getDynamicSamplingContext() {
                return e9(this)
            }

            setHub(e) {
                this._hub = e
            }

            getProfileId() {
                if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id
            }

            _finishTransaction(e) {
                if (void 0 !== this._endTime) return;
                this._name || (this._name = "<unlabeled transaction>"), super.end(e);
                let t = this._hub.getClient();
                if (t && t.emit && t.emit("finishTransaction", this), !0 !== this._sampled) {
                    t && t.recordDroppedEvent("sample_rate", "transaction");
                    return
                }
                let n = this.spanRecorder ? this.spanRecorder.spans.filter(e => e !== this && e3(e).timestamp) : [];
                if (this._trimEnd && n.length > 0) {
                    let e = n.map(e => e3(e).timestamp).filter(Boolean);
                    this._endTime = e.reduce((e, t) => e > t ? e : t)
                }
                let {scope: r, isolationScope: i} = {
                    scope: this[rO],
                    isolationScope: this[rR]
                }, {metadata: s} = this, {source: a} = s, o = {
                    contexts: {...this._contexts, trace: eQ(this)},
                    spans: n,
                    start_timestamp: this._startTime,
                    tags: this.tags,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...s,
                        capturedSpanScope: r,
                        capturedSpanIsolationScope: i, ...eE({dynamicSamplingContext: e9(this)})
                    },
                    _metrics_summary: r_(this), ...a && {transaction_info: {source: a}}
                };
                return Object.keys(this._measurements).length > 0 && (o.measurements = this._measurements), o
            }
        }

        let r$ = {idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3};

        class rP extends rT {
            constructor(e, t, n, r) {
                super(r), this._pushActivity = e, this._popActivity = t, this.transactionSpanId = n
            }

            add(e) {
                if (e.spanContext().spanId !== this.transactionSpanId) {
                    let t = e.end;
                    e.end = (...n) => (this._popActivity(e.spanContext().spanId), t.apply(e, n)), void 0 === e3(e).timestamp && this._pushActivity(e.spanContext().spanId)
                }
                super.add(e)
            }
        }

        class rj extends rA {
            constructor(e, t, n = r$.idleTimeout, r = r$.finalTimeout, i = r$.heartbeatInterval, s = !1, a = !1) {
                super(e, t), this._idleHub = t, this._idleTimeout = n, this._finalTimeout = r, this._heartbeatInterval = i, this._onScope = s, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = "externalFinish", this._autoFinishAllowed = !a, s && t.getScope().setSpan(this), a || this._restartIdleTimeout(), setTimeout(() => {
                    this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = "finalTimeout", this.end())
                }, this._finalTimeout)
            }

            end(e) {
                let t = e1(e);
                if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), this.spanRecorder) {
                    for (let e of this._beforeFinishCallbacks) e(this, t);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
                        if (e.spanContext().spanId === this.spanContext().spanId) return !0;
                        e3(e).timestamp || (e.setStatus("cancelled"), e.end(t));
                        let {start_timestamp: n, timestamp: r} = e3(e), i = n && n < t,
                            s = (this._finalTimeout + this._idleTimeout) / 1e3;
                        return i && r && n && r - n < s
                    })
                }
                if (this._onScope) {
                    let e = this._idleHub.getScope();
                    e.getTransaction() === this && e.setSpan(void 0)
                }
                return super.end(e)
            }

            registerBeforeFinishCallback(e) {
                this._beforeFinishCallbacks.push(e)
            }

            initSpanRecorder(e) {
                this.spanRecorder || (this.spanRecorder = new rP(e => {
                    this._finished || this._pushActivity(e)
                }, e => {
                    this._finished || this._popActivity(e)
                }, this.spanContext().spanId, e), this._pingHeartbeat()), this.spanRecorder.add(this)
            }

            cancelIdleTimeout(e, {restartOnChildSpanChange: t} = {restartOnChildSpanChange: !0}) {
                this._idleTimeoutCanceledPermanently = !1 === t, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = "cancelled", this.end(e)))
            }

            setFinishReason(e) {
                this._finishReason = e
            }

            sendAutoFinishSignal() {
                this._autoFinishAllowed || (this._restartIdleTimeout(), this._autoFinishAllowed = !0)
            }

            _restartIdleTimeout(e) {
                this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
                    this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = "idleTimeout", this.end(e))
                }, this._idleTimeout)
            }

            _pushActivity(e) {
                this.cancelIdleTimeout(void 0, {restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently}), this.activities[e] = !0
            }

            _popActivity(e) {
                if (this.activities[e] && delete this.activities[e], 0 === Object.keys(this.activities).length) {
                    let e = eA();
                    this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = "cancelled", this.end(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3)
                }
            }

            _beat() {
                if (this._finished) return;
                let e = Object.keys(this.activities).join("");
                e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = e, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (this.setStatus("deadline_exceeded"), this._finishReason = "heartbeatFailed", this.end()) : this._pingHeartbeat()
            }

            _pingHeartbeat() {
                setTimeout(() => {
                    this._beat()
                }, this._heartbeatInterval)
            }
        }

        function rM(e) {
            return (e || ta()).getScope().getTransaction()
        }

        let rN = !1;

        function rD() {
            let e = rM();
            e && e.setStatus("internal_error")
        }

        function rL(e, t, n) {
            let r;
            return tx(t) ? void 0 !== e.sampled ? e.setAttribute(rw, Number(e.sampled)) : ("function" == typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setAttribute(rw, Number(r))) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== t.tracesSampleRate ? (r = t.tracesSampleRate, e.setAttribute(rw, Number(r))) : (r = 1, e.setAttribute(rw, r)), rF(r) && r) ? (e.sampled = Math.random() < r, e.sampled) : e.sampled = !1 : e.sampled = !1, e
        }

        function rF(e) {
            return !er(e) && !!("number" == typeof e || "boolean" == typeof e) && !(e < 0) && !(e > 1)
        }

        function rU() {
            let e = this.getScope().getSpan();
            return e ? {"sentry-trace": e0(e)} : {}
        }

        function rB(e, t) {
            let n = this.getClient(), r = n && n.getOptions() || {};
            (r.instrumenter || "sentry") !== (e.instrumenter || "sentry") && (e.sampled = !1);
            let i = new rA(e, this);
            return (i = rL(i, r, {
                name: e.name,
                parentSampled: e.parentSampled,
                transactionContext: e,
                attributes: {...e.data, ...e.attributes}, ...t
            })).isRecording() && i.initSpanRecorder(r._experiments && r._experiments.maxSpans), n && n.emit && n.emit("startTransaction", i), i
        }

        function rz(e, t, n, r, i, s, a, o = !1) {
            let l = e.getClient(), c = l && l.getOptions() || {}, u = new rj(t, e, n, r, a, i, o);
            return (u = rL(u, c, {
                name: t.name,
                parentSampled: t.parentSampled,
                transactionContext: t,
                attributes: {...t.data, ...t.attributes}, ...s
            })).isRecording() && u.initSpanRecorder(c._experiments && c._experiments.maxSpans), l && l.emit && l.emit("startTransaction", u), u
        }

        function rH() {
            let e = ti();
            e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = rB), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = rU), rN || (rN = !0, t1(rD), t5(rD)))
        }

        function rq() {
            H && H.document && H.document.addEventListener("visibilitychange", () => {
                let e = rM();
                if (H.document.hidden && e) {
                    let {op: t, status: n} = e3(e);
                    n || e.setStatus("cancelled"), e.setTag("visibilitychange", "document.hidden"), e.end()
                }
            })
        }

        rD.tag = "sentry_tracingErrorCallback";
        let rW = (e, t, n) => {
                let r, i;
                return s => {
                    t.value >= 0 && (s || n) && ((i = t.value - (r || 0)) || void 0 === r) && (r = t.value, t.delta = i, e(t))
                }
            }, rG = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, rV = () => {
                let e = H.performance.timing, t = H.performance.navigation.type, n = {
                    entryType: "navigation",
                    startTime: 0,
                    type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
                };
                for (let t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
                return n
            },
            rJ = () => H.__WEB_VITALS_POLYFILL__ ? H.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || rV()) : H.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
            rK = () => {
                let e = rJ();
                return e && e.activationStart || 0
            }, rY = (e, t) => {
                let n = rJ(), r = "navigate";
                return n && (r = H.document.prerendering || rK() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: rG(),
                    navigationType: r
                }
            }, rX = (e, t, n) => {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        let r = new PerformanceObserver(e => {
                            t(e.getEntries())
                        });
                        return r.observe(Object.assign({type: e, buffered: !0}, n || {})), r
                    }
                } catch (e) {
                }
            }, rZ = (e, t) => {
                let n = r => {
                    ("pagehide" === r.type || "hidden" === H.document.visibilityState) && (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
            }, rQ = e => {
                let t;
                let n = rY("CLS", 0), r = 0, i = [], s = e => {
                    e.forEach(e => {
                        if (!e.hadRecentInput) {
                            let s = i[0], a = i[i.length - 1];
                            r && 0 !== i.length && e.startTime - a.startTime < 1e3 && e.startTime - s.startTime < 5e3 ? (r += e.value, i.push(e)) : (r = e.value, i = [e]), r > n.value && (n.value = r, n.entries = i, t && t())
                        }
                    })
                }, a = rX("layout-shift", s);
                if (a) {
                    t = rW(e, n);
                    let r = () => {
                        s(a.takeRecords()), t(!0)
                    };
                    return rZ(r), r
                }
            }, r0 = -1, r1 = () => "hidden" !== H.document.visibilityState || H.document.prerendering ? 1 / 0 : 0,
            r2 = () => {
                rZ(({timeStamp: e}) => {
                    r0 = e
                }, !0)
            }, r3 = () => (r0 < 0 && (r0 = r1(), r2()), {
                get firstHiddenTime() {
                    return r0
                }
            }), r5 = e => {
                let t;
                let n = r3(), r = rY("FID"), i = e => {
                    e.startTime < n.firstHiddenTime && (r.value = e.processingStart - e.startTime, r.entries.push(e), t(!0))
                }, s = e => {
                    e.forEach(i)
                }, a = rX("first-input", s);
                t = rW(e, r), a && rZ(() => {
                    s(a.takeRecords()), a.disconnect()
                }, !0)
            }, r4 = 0, r9 = 1 / 0, r8 = 0, r6 = e => {
                e.forEach(e => {
                    e.interactionId && (r9 = Math.min(r9, e.interactionId), r4 = (r8 = Math.max(r8, e.interactionId)) ? (r8 - r9) / 7 + 1 : 0)
                })
            }, r7 = () => u ? r4 : performance.interactionCount || 0, ie = () => {
                "interactionCount" in performance || u || (u = rX("event", r6, {
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                }))
            }, it = () => r7(), ir = [], ii = {}, is = e => {
                let t = ir[ir.length - 1], n = ii[e.interactionId];
                if (n || ir.length < 10 || e.duration > t.latency) {
                    if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration); else {
                        let t = {id: e.interactionId, latency: e.duration, entries: [e]};
                        ii[t.id] = t, ir.push(t)
                    }
                    ir.sort((e, t) => t.latency - e.latency), ir.splice(10).forEach(e => {
                        delete ii[e.id]
                    })
                }
            }, ia = () => {
                let e = Math.min(ir.length - 1, Math.floor(it() / 50));
                return ir[e]
            }, io = (e, t) => {
                let n;
                t = t || {}, ie();
                let r = rY("INP"), i = e => {
                    e.forEach(e => {
                        e.interactionId && is(e), "first-input" !== e.entryType || ir.some(t => t.entries.some(t => e.duration === t.duration && e.startTime === t.startTime)) || is(e)
                    });
                    let t = ia();
                    t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, n())
                }, s = rX("event", i, {durationThreshold: t.durationThreshold || 40});
                n = rW(e, r, t.reportAllChanges), s && (s.observe({type: "first-input", buffered: !0}), rZ(() => {
                    i(s.takeRecords()), r.value < 0 && it() > 0 && (r.value = 0, r.entries = []), n(!0)
                }))
            }, il = {}, ic = e => {
                let t;
                let n = r3(), r = rY("LCP"), i = e => {
                    let i = e[e.length - 1];
                    if (i) {
                        let e = Math.max(i.startTime - rK(), 0);
                        e < n.firstHiddenTime && (r.value = e, r.entries = [i], t())
                    }
                }, s = rX("largest-contentful-paint", i);
                if (s) {
                    t = rW(e, r);
                    let n = () => {
                        il[r.id] || (i(s.takeRecords()), s.disconnect(), il[r.id] = !0, t(!0))
                    };
                    return ["keydown", "click"].forEach(e => {
                        addEventListener(e, n, {once: !0, capture: !0})
                    }), rZ(n, !0), n
                }
            }, iu = {}, ih = {};

        function id(e, t = !1) {
            return ib("lcp", e, iv, p, t)
        }

        function ip(e, t) {
            return iw(e, t), ih[e] || (function (e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0), rX(e, t => {
                    im(e, {entries: t})
                }, t)
            }(e), ih[e] = !0), iS(e, t)
        }

        function im(e, t) {
            let n = iu[e];
            if (n && n.length) for (let e of n) try {
                e(t)
            } catch (e) {
            }
        }

        function ig() {
            return rQ(e => {
                im("cls", {metric: e}), h = e
            })
        }

        function iy() {
            return r5(e => {
                im("fid", {metric: e}), d = e
            })
        }

        function iv() {
            return ic(e => {
                im("lcp", {metric: e}), p = e
            })
        }

        function i_() {
            return io(e => {
                im("inp", {metric: e}), f = e
            })
        }

        function ib(e, t, n, r, i = !1) {
            let s;
            return iw(e, t), ih[e] || (s = n(), ih[e] = !0), r && t({metric: r}), iS(e, t, i ? s : void 0)
        }

        function iw(e, t) {
            iu[e] = iu[e] || [], iu[e].push(t)
        }

        function iS(e, t, n) {
            return () => {
                n && n();
                let r = iu[e];
                if (!r) return;
                let i = r.indexOf(t);
                -1 !== i && r.splice(i, 1)
            }
        }

        function iE(e) {
            return [{type: "span"}, e]
        }

        function ik(e) {
            return "number" == typeof e && isFinite(e)
        }

        function iT(e, {startTimestamp: t, ...n}) {
            return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild({startTimestamp: t, ...n})
        }

        function ix(e) {
            return e / 1e3
        }

        function iC() {
            return H && H.addEventListener && H.performance
        }

        let iI = 0, iO = {};

        function iR() {
            let e = iC();
            if (e && e$) {
                e.mark && H.performance.mark("sentry-tracing-init");
                let t = ib("fid", ({metric: e}) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!t) return;
                    let n = ix(e$), r = ix(t.startTime);
                    iO.fid = {value: e.value, unit: "millisecond"}, iO["mark.fid"] = {value: n + r, unit: "second"}
                }, iy, d), n = function (e, t = !1) {
                    return ib("cls", e, ig, h, t)
                }(({metric: e}) => {
                    let t = e.entries[e.entries.length - 1];
                    t && (iO.cls = {value: e.value, unit: ""}, g = t)
                }, !0), r = id(({metric: e}) => {
                    let t = e.entries[e.entries.length - 1];
                    t && (iO.lcp = {value: e.value, unit: "millisecond"}, m = t)
                }, !0);
                return () => {
                    t(), n(), r()
                }
            }
            return () => void 0
        }

        function iA() {
            ip("longtask", ({entries: e}) => {
                for (let t of e) {
                    let e = rM();
                    if (!e) return;
                    let n = ix(e$ + t.startTime), r = ix(t.duration);
                    e.startChild({
                        description: "Main UI thread blocked",
                        op: "ui.long-task",
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: n,
                        endTimestamp: n + r
                    })
                }
            })
        }

        function i$() {
            ip("event", ({entries: e}) => {
                for (let t of e) {
                    let e = rM();
                    if (!e) return;
                    if ("click" === t.name) {
                        let n = ix(e$ + t.startTime), r = ix(t.duration), i = {
                            description: ea(t.target),
                            op: `ui.interaction.${t.name}`,
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: n,
                            endTimestamp: n + r
                        }, s = el(t.target);
                        s && (i.attributes = {"ui.component_name": s}), e.startChild(i)
                    }
                }
            })
        }

        function iP(e) {
            if (iC() && e$) {
                let t = ib("inp", ({metric: t}) => {
                    let n;
                    let r = t.entries.find(e => "click" === e.name || "pointerdown" === e.name), i = tb();
                    if (!r || !i) return;
                    let s = i.getOptions(), a = ix(e$ + r.startTime), o = ix(t.value), {
                            routeName: l,
                            parentContext: c,
                            activeTransaction: u,
                            user: h,
                            replayId: d
                        } = void 0 !== r.interactionId ? e[r.interactionId] : {
                            routeName: void 0,
                            parentContext: void 0,
                            activeTransaction: void 0,
                            user: void 0,
                            replayId: void 0
                        }, p = void 0 !== h ? h.email || h.id || h.ip_address : void 0,
                        f = void 0 !== u ? u.getProfileId() : void 0, m = new rx({
                            startTimestamp: a,
                            endTimestamp: a + o,
                            op: "ui.interaction.click",
                            name: ea(r.target),
                            attributes: {
                                release: s.release,
                                environment: s.environment,
                                transaction: l, ...void 0 !== p && "" !== p ? {user: p} : {}, ...void 0 !== f ? {profile_id: f} : {}, ...void 0 !== d ? {replay_id: d} : {}
                            },
                            exclusiveTime: t.value,
                            measurements: {inp: {value: t.value, unit: "millisecond"}}
                        }), g = !!tx(s) && !!rF(n = void 0 !== c && "function" == typeof s.tracesSampler ? s.tracesSampler({
                            transactionContext: c,
                            name: c.name,
                            parentSampled: c.parentSampled,
                            attributes: {...c.data, ...c.attributes},
                            location: H.location
                        }) : void 0 !== c && void 0 !== c.sampled ? c.sampled : void 0 !== s.tracesSampleRate ? s.tracesSampleRate : 1) && n;
                    if (g && Math.random() < g) {
                        let e = m ? function (e, t) {
                            let n = {sent_at: new Date().toISOString()};
                            return t && (n.dsn = nX(t)), n0(n, e.map(iE))
                        }([m], i.getDsn()) : void 0, t = i && i.getTransport();
                        t && e && t.send(e).then(null, e => {
                        });
                        return
                    }
                }, i_, f);
                return () => {
                    t()
                }
            }
            return () => void 0
        }

        function ij(e) {
            let t, n;
            let r = iC();
            if (!r || !H.performance.getEntries || !e$) return;
            let i = ix(e$), s = r.getEntries(), {op: a, start_timestamp: o} = e3(e);
            if (s.slice(iI).forEach(r => {
                let s = ix(r.startTime), a = ix(r.duration);
                if ("navigation" !== e.op || !o || !(i + s < o)) switch (r.entryType) {
                    case"navigation":
                        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(t => {
                            iM(e, r, t, i)
                        }), iM(e, r, "secureConnection", i, "TLS/SSL", "connectEnd"), iM(e, r, "fetch", i, "cache", "domainLookupStart"), iM(e, r, "domainLookup", i, "DNS"), r.responseEnd && (iT(e, {
                            op: "browser",
                            origin: "auto.browser.browser.metrics",
                            description: "request",
                            startTimestamp: i + ix(r.requestStart),
                            endTimestamp: i + ix(r.responseEnd)
                        }), iT(e, {
                            op: "browser",
                            origin: "auto.browser.browser.metrics",
                            description: "response",
                            startTimestamp: i + ix(r.responseStart),
                            endTimestamp: i + ix(r.responseEnd)
                        })), t = i + ix(r.responseStart), n = i + ix(r.requestStart);
                        break;
                    case"mark":
                    case"paint":
                    case"measure": {
                        (function (e, t, n, r, i) {
                            let s = i + n;
                            iT(e, {
                                description: t.name,
                                endTimestamp: s + r,
                                op: t.entryType,
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: s
                            })
                        })(e, r, s, a, i);
                        let t = r3(), n = r.startTime < t.firstHiddenTime;
                        "first-paint" === r.name && n && (iO.fp = {
                            value: r.startTime,
                            unit: "millisecond"
                        }), "first-contentful-paint" === r.name && n && (iO.fcp = {
                            value: r.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                    case"resource":
                        (function (e, t, n, r, i, s) {
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                            let a = nA(n), o = {};
                            iN(o, t, "transferSize", "http.response_transfer_size"), iN(o, t, "encodedBodySize", "http.response_content_length"), iN(o, t, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in t && (o["resource.render_blocking_status"] = t.renderBlockingStatus), a.protocol && (o["url.scheme"] = a.protocol.split(":").pop()), a.host && (o["server.address"] = a.host), o["url.same_origin"] = n.includes(H.location.origin);
                            let l = s + r;
                            iT(e, {
                                description: n.replace(H.location.origin, ""),
                                endTimestamp: l + i,
                                op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: l,
                                data: o
                            })
                        })(e, r, r.name, s, a, i)
                }
            }), iI = Math.max(s.length - 1, 0), function (e) {
                let t = H.navigator;
                if (!t) return;
                let n = t.connection;
                n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), ik(n.rtt) && (iO["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                })), ik(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), ik(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
            }(e), "pageload" === a) {
                var l, c, u;
                l = iO, c = t, u = n, "number" == typeof c && o && (l.ttfb = {
                    value: 1e3 * Math.max(c - o, 0),
                    unit: "millisecond"
                }, "number" == typeof u && u <= c && (l["ttfb.requestTime"] = {
                    value: (c - u) * 1e3,
                    unit: "millisecond"
                })), ["fcp", "fp", "lcp"].forEach(e => {
                    if (!iO[e] || !o || i >= o) return;
                    let t = Math.abs((i + ix(iO[e].value) - o) * 1e3);
                    iO[e].value = t
                });
                let r = iO["mark.fid"];
                r && iO.fid && (iT(e, {
                    description: "first input delay",
                    endTimestamp: r.value + ix(iO.fid.value),
                    op: "ui.action",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: r.value
                }), delete iO["mark.fid"]), "fcp" in iO || delete iO.cls, Object.keys(iO).forEach(e => {
                    !function (e, t, n) {
                        let r = rM();
                        r && r.setMeasurement(e, t, n)
                    }(e, iO[e].value, iO[e].unit)
                }), m && (m.element && e.setTag("lcp.element", ea(m.element)), m.id && e.setTag("lcp.id", m.id), m.url && e.setTag("lcp.url", m.url.trim().slice(0, 200)), e.setTag("lcp.size", m.size)), g && g.sources && g.sources.forEach((t, n) => e.setTag(`cls.source.${n + 1}`, ea(t.node)))
            }
            m = void 0, g = void 0, iO = {}
        }

        function iM(e, t, n, r, i, s) {
            let a = s ? t[s] : t[`${n}End`], o = t[`${n}Start`];
            o && a && iT(e, {
                op: "browser",
                origin: "auto.browser.browser.metrics",
                description: i || n,
                startTimestamp: r + ix(o),
                endTimestamp: r + ix(a)
            })
        }

        function iN(e, t, n, r) {
            let i = t[n];
            null != i && i < 2147483647 && (e[r] = i)
        }

        let iD = ["localhost", /^\/(?!\/)/],
            iL = {traceFetch: !0, traceXHR: !0, enableHTTPTimings: !0, tracingOrigins: iD, tracePropagationTargets: iD};

        function iF(e) {
            let {
                    traceFetch: t,
                    traceXHR: n,
                    tracePropagationTargets: r,
                    tracingOrigins: i,
                    shouldCreateSpanForRequest: s,
                    enableHTTPTimings: a
                } = {traceFetch: iL.traceFetch, traceXHR: iL.traceXHR, ...e}, o = "function" == typeof s ? s : e => !0,
                l = e => em(e, r || i || iD), c = {};
            t && nk(e => {
                let t = function (e, t, n, r, i = "auto.http.browser") {
                    if (!tx() || !e.fetchData) return;
                    let s = t(e.fetchData.url);
                    if (e.endTimestamp && s) {
                        let t = e.fetchData.__span;
                        if (!t) return;
                        let n = r[t];
                        if (n) {
                            if (e.response) {
                                rk(n, e.response.status);
                                let t = e.response && e.response.headers && e.response.headers.get("content-length");
                                if (t) {
                                    let e = parseInt(t);
                                    e > 0 && n.setAttribute("http.response_content_length", e)
                                }
                            } else e.error && n.setStatus("internal_error");
                            n.end(), delete r[t]
                        }
                        return
                    }
                    let a = tw(), o = tb(), {method: l, url: c} = e.fetchData, u = s ? rC({
                        name: `${l} ${c}`,
                        onlyIfParent: !0,
                        attributes: {url: c, type: "fetch", "http.method": l, [rE]: i},
                        op: "http.client"
                    }) : void 0;
                    if (u && (e.fetchData.__span = u.spanContext().spanId, r[u.spanContext().spanId] = u), n(e.fetchData.url) && o) {
                        let t = e.args[0];
                        e.args[1] = e.args[1] || {};
                        let n = e.args[1];
                        n.headers = function (e, t, n, r, i) {
                            let s = i || n.getSpan(), {
                                    traceId: a,
                                    spanId: o,
                                    sampled: l,
                                    dsc: c
                                } = {...to().getPropagationContext(), ...n.getPropagationContext()},
                                u = s ? e0(s) : eZ(a, o, l), h = eV(c || (s ? e9(s) : e4(a, t, n))),
                                d = r.headers || ("undefined" != typeof Request && ei(e, Request) ? e.headers : void 0);
                            if (!d) return {"sentry-trace": u, baggage: h};
                            if ("undefined" != typeof Headers && ei(d, Headers)) {
                                let e = new Headers(d);
                                return e.append("sentry-trace", u), h && e.append(eH, h), e
                            }
                            if (Array.isArray(d)) {
                                let e = [...d, ["sentry-trace", u]];
                                return h && e.push([eH, h]), e
                            }
                            {
                                let e = "baggage" in d ? d.baggage : void 0, t = [];
                                return Array.isArray(e) ? t.push(...e) : e && t.push(e), h && t.push(h), {
                                    ...d,
                                    "sentry-trace": u,
                                    baggage: t.length > 0 ? t.join(",") : void 0
                                }
                            }
                        }(t, o, a, n, u)
                    }
                    return u
                }(e, o, l, c);
                a && t && iU(t)
            }), n && nb(e => {
                let t = function (e, t, n, r) {
                    let i = e.xhr, s = i && i[n_];
                    if (!tx() || !i || i.__sentry_own_request__ || !s) return;
                    let a = t(s.url);
                    if (e.endTimestamp && a) {
                        let e = i.__sentry_xhr_span_id__;
                        if (!e) return;
                        let t = r[e];
                        t && void 0 !== s.status_code && (rk(t, s.status_code), t.end(), delete r[e]);
                        return
                    }
                    let o = tw(), l = to(), c = a ? rC({
                        name: `${s.method} ${s.url}`,
                        onlyIfParent: !0,
                        attributes: {type: "xhr", "http.method": s.method, url: s.url, [rE]: "auto.http.browser"},
                        op: "http.client"
                    }) : void 0;
                    c && (i.__sentry_xhr_span_id__ = c.spanContext().spanId, r[i.__sentry_xhr_span_id__] = c);
                    let u = tb();
                    if (i.setRequestHeader && n(s.url) && u) {
                        let {
                            traceId: e,
                            spanId: t,
                            sampled: n,
                            dsc: r
                        } = {...l.getPropagationContext(), ...o.getPropagationContext()};
                        (function (e, t, n) {
                            try {
                                e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(eH, n)
                            } catch (e) {
                            }
                        })(i, c ? e0(c) : eZ(e, t, n), eV(r || (c ? e9(c) : e4(e, u, o))))
                    }
                    return c
                }(e, o, l, c);
                a && t && iU(t)
            })
        }

        function iU(e) {
            let {url: t} = e3(e).data || {};
            if (!t || "string" != typeof t) return;
            let n = ip("resource", ({entries: r}) => {
                r.forEach(r => {
                    "resource" === r.entryType && "initiatorType" in r && "string" == typeof r.nextHopProtocol && ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(t) && ((function (e) {
                        let {name: t, version: n} = function (e) {
                            let t = "unknown", n = "unknown", r = "";
                            for (let i of e) {
                                if ("/" === i) {
                                    [t, n] = e.split("/");
                                    break
                                }
                                if (!isNaN(Number(i))) {
                                    t = "h" === r ? "http" : r, n = e.split(r)[1];
                                    break
                                }
                                r += i
                            }
                            return r === e && (t = r), {name: t, version: n}
                        }(e.nextHopProtocol), r = [];
                        return (r.push(["network.protocol.version", n], ["network.protocol.name", t]), e$) ? [...r, ["http.request.redirect_start", iB(e.redirectStart)], ["http.request.fetch_start", iB(e.fetchStart)], ["http.request.domain_lookup_start", iB(e.domainLookupStart)], ["http.request.domain_lookup_end", iB(e.domainLookupEnd)], ["http.request.connect_start", iB(e.connectStart)], ["http.request.secure_connection_start", iB(e.secureConnectionStart)], ["http.request.connection_end", iB(e.connectEnd)], ["http.request.request_start", iB(e.requestStart)], ["http.request.response_start", iB(e.responseStart)], ["http.request.response_end", iB(e.responseEnd)]] : r
                    })(r).forEach(t => e.setAttribute(...t)), setTimeout(n))
                })
            })
        }

        function iB(e = 0) {
            return ((e$ || performance.timeOrigin) + e) / 1e3
        }

        let iz = {
            ...r$,
            markBackgroundTransactions: !0,
            routingInstrumentation: function (e, t = !0, n = !0) {
                let r;
                if (!H || !H.location) return;
                let i = H.location.href;
                t && (r = e({
                    name: H.location.pathname,
                    startTimestamp: e$ ? e$ / 1e3 : void 0,
                    op: "pageload",
                    origin: "auto.pageload.browser",
                    metadata: {source: "url"}
                })), n && nI(({to: t, from: n}) => {
                    if (void 0 === n && i && -1 !== i.indexOf(t)) {
                        i = void 0;
                        return
                    }
                    n !== t && (i = void 0, r && r.end(), r = e({
                        name: H.location.pathname,
                        op: "navigation",
                        origin: "auto.navigation.browser",
                        metadata: {source: "url"}
                    }))
                })
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            enableInp: !1,
            _experiments: {}, ...iL
        };

        class iH {
            constructor(e) {
                this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, rH(), this.options = {...iz, ...e}, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = iR(), this._interactionIdtoRouteNameMapping = {}, this.options.enableInp && iP(this._interactionIdtoRouteNameMapping), this.options.enableLongTask && iA(), this.options._experiments.enableInteractions && i$(), this._latestRoute = {
                    name: void 0,
                    context: void 0
                }
            }

            setupOnce(e, t) {
                this._getCurrentHub = t;
                let n = t().getClient(), r = n && n.getOptions(), {
                    routingInstrumentation: i,
                    startTransactionOnLocationChange: s,
                    startTransactionOnPageLoad: a,
                    markBackgroundTransactions: o,
                    traceFetch: l,
                    traceXHR: c,
                    shouldCreateSpanForRequest: u,
                    enableHTTPTimings: h,
                    _experiments: d
                } = this.options, p = r && r.tracePropagationTargets || this.options.tracePropagationTargets;
                i(e => {
                    let n = this._createRouteTransaction(e);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), n
                }, a, s), o && rq(), d.enableInteractions && this._registerInteractionListener(), this.options.enableInp && this._registerInpInteractionListener(), iF({
                    traceFetch: l,
                    traceXHR: c,
                    tracePropagationTargets: p,
                    shouldCreateSpanForRequest: u,
                    enableHTTPTimings: h
                })
            }

            _createRouteTransaction(e) {
                let t;
                if (!this._getCurrentHub) return;
                let n = this._getCurrentHub(), {
                    beforeNavigate: r,
                    idleTimeout: i,
                    finalTimeout: s,
                    heartbeatInterval: a
                } = this.options, o = "pageload" === e.op;
                if (o) {
                    let {
                        traceId: n,
                        dsc: r,
                        parentSpanId: i,
                        sampled: s
                    } = eX(o ? iq("sentry-trace") : "", o ? iq("baggage") : void 0);
                    t = {
                        traceId: n,
                        parentSpanId: i,
                        parentSampled: s, ...e,
                        metadata: {...e.metadata, dynamicSamplingContext: r},
                        trimEnd: !0
                    }
                } else t = {trimEnd: !0, ...e};
                let l = "function" == typeof r ? r(t) : t, c = void 0 === l ? {...t, sampled: !1} : l;
                c.metadata = c.name !== t.name ? {
                    ...c.metadata,
                    source: "custom"
                } : c.metadata, this._latestRoute.name = c.name, this._latestRoute.context = c, c.sampled;
                let {location: u} = H, h = rz(n, c, i, s, !0, {location: u}, a, o);
                return o && (H.document.addEventListener("readystatechange", () => {
                    ["interactive", "complete"].includes(H.document.readyState) && h.sendAutoFinishSignal()
                }), ["interactive", "complete"].includes(H.document.readyState) && h.sendAutoFinishSignal()), h.registerBeforeFinishCallback(e => {
                    this._collectWebVitals(), ij(e)
                }), h
            }

            _registerInteractionListener() {
                let e;
                let t = () => {
                    let {idleTimeout: t, finalTimeout: n, heartbeatInterval: r} = this.options, i = rM();
                    if (i && i.op && ["navigation", "pageload"].includes(i.op) || (e && (e.setFinishReason("interactionInterrupted"), e.end(), e = void 0), !this._getCurrentHub) || !this._latestRoute.name) return;
                    let s = this._getCurrentHub(), {location: a} = H;
                    e = rz(s, {
                        name: this._latestRoute.name,
                        op: "ui.action.click",
                        trimEnd: !0,
                        data: {
                            [rb]: this._latestRoute.context ? function (e) {
                                let t = e.attributes && e.attributes[rb], n = e.data && e.data[rb],
                                    r = e.metadata && e.metadata.source;
                                return t || n || r
                            }(this._latestRoute.context) : "url"
                        }
                    }, t, n, !0, {location: a}, r)
                };
                ["click"].forEach(e => {
                    addEventListener(e, t, {once: !1, capture: !0})
                })
            }

            _registerInpInteractionListener() {
                ip("event", ({entries: e}) => {
                    let t = tb(),
                        n = void 0 !== t && void 0 !== t.getIntegrationByName ? t.getIntegrationByName("Replay") : void 0,
                        r = void 0 !== n ? n.getReplayId() : void 0, i = rM(), s = tw(),
                        a = void 0 !== s ? s.getUser() : void 0;
                    for (let t of e) if ("duration" in t) {
                        let e = t.duration, n = Object.keys(this._interactionIdtoRouteNameMapping),
                            s = n.length > 0 ? n.reduce((e, t) => this._interactionIdtoRouteNameMapping[e].duration < this._interactionIdtoRouteNameMapping[t].duration ? e : t) : void 0;
                        if (void 0 === s || e > this._interactionIdtoRouteNameMapping[s].duration) {
                            let n = t.interactionId, o = this._latestRoute.name, l = this._latestRoute.context;
                            n && o && l && (s && Object.keys(this._interactionIdtoRouteNameMapping).length >= 10 && delete this._interactionIdtoRouteNameMapping[s], this._interactionIdtoRouteNameMapping[n] = {
                                routeName: o,
                                duration: e,
                                parentContext: l,
                                user: a,
                                activeTransaction: i,
                                replayId: r
                            })
                        }
                    }
                })
            }
        }

        function iq(e) {
            let t = eo(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0
        }

        let iW = {
            ...r$,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableInp: !1,
            _experiments: {}, ...iL
        }, iG = (e = {}) => {
            rH(), !e.tracePropagationTargets && e.tracingOrigins && (e.tracePropagationTargets = e.tracingOrigins);
            let t = {...iW, ...e}, n = iR(), r = {};
            t.enableInp && iP(r), t.enableLongTask && iA(), t._experiments.enableInteractions && i$();
            let i = {name: void 0, context: void 0};

            function s(e) {
                let r;
                let s = ta(), {beforeStartSpan: a, idleTimeout: o, finalTimeout: l, heartbeatInterval: c} = t,
                    u = "pageload" === e.op;
                if (u) {
                    let {
                        traceId: t,
                        dsc: n,
                        parentSpanId: i,
                        sampled: s
                    } = eX(u ? iK("sentry-trace") : "", u ? iK("baggage") : void 0);
                    r = {
                        traceId: t,
                        parentSpanId: i,
                        parentSampled: s, ...e,
                        metadata: {...e.metadata, dynamicSamplingContext: n},
                        trimEnd: !0
                    }
                } else r = {trimEnd: !0, ...e};
                let h = a ? a(r) : r;
                h.metadata = h.name !== r.name ? {
                    ...h.metadata,
                    source: "custom"
                } : h.metadata, i.name = h.name, i.context = h, h.sampled;
                let {location: d} = H, p = rz(s, h, o, l, !0, {location: d}, c, u);
                return u && H.document && (H.document.addEventListener("readystatechange", () => {
                    ["interactive", "complete"].includes(H.document.readyState) && p.sendAutoFinishSignal()
                }), ["interactive", "complete"].includes(H.document.readyState) && p.sendAutoFinishSignal()), p.registerBeforeFinishCallback(e => {
                    n(), ij(e)
                }), p
            }

            return {
                name: "BrowserTracing", setupOnce: () => {
                }, afterAllSetup(e) {
                    let n;
                    let a = e.getOptions(), {
                            markBackgroundSpan: o,
                            traceFetch: l,
                            traceXHR: c,
                            shouldCreateSpanForRequest: u,
                            enableHTTPTimings: h,
                            _experiments: d
                        } = t, p = a && a.tracePropagationTargets || t.tracePropagationTargets,
                        f = H.location && H.location.href;
                    e.on && (e.on("startNavigationSpan", e => {
                        n && n.end(), n = s({op: "navigation", ...e})
                    }), e.on("startPageLoadSpan", e => {
                        n && n.end(), n = s({op: "pageload", ...e})
                    })), t.instrumentPageLoad && e.emit && H.location && iV(e, {
                        name: H.location.pathname,
                        startTimestamp: e$ ? e$ / 1e3 : void 0,
                        origin: "auto.pageload.browser",
                        attributes: {[rb]: "url"}
                    }), t.instrumentNavigation && e.emit && H.location && nI(({to: t, from: n}) => {
                        if (void 0 === n && f && -1 !== f.indexOf(t)) {
                            f = void 0;
                            return
                        }
                        n !== t && (f = void 0, iJ(e, {
                            name: H.location.pathname,
                            origin: "auto.navigation.browser",
                            attributes: {[rb]: "url"}
                        }))
                    }), o && rq(), d.enableInteractions && function (e, t) {
                        let n;
                        let r = () => {
                            let {idleTimeout: r, finalTimeout: i, heartbeatInterval: s} = e, a = rM();
                            if (a && a.op && ["navigation", "pageload"].includes(a.op) || (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !t.name)) return;
                            let {location: o} = H, l = {
                                name: t.name,
                                op: "ui.action.click",
                                trimEnd: !0,
                                data: {
                                    [rb]: t.context ? function (e) {
                                        let t = e.attributes && e.attributes[rb], n = e.data && e.data[rb],
                                            r = e.metadata && e.metadata.source;
                                        return t || n || r
                                    }(t.context) : "url"
                                }
                            };
                            n = rz(ta(), l, r, i, !0, {location: o}, s)
                        };
                        ["click"].forEach(e => {
                            addEventListener(e, r, {once: !1, capture: !0})
                        })
                    }(t, i), t.enableInp && ip("event", ({entries: e}) => {
                        let t = tb(),
                            n = void 0 !== t && void 0 !== t.getIntegrationByName ? t.getIntegrationByName("Replay") : void 0,
                            s = void 0 !== n ? n.getReplayId() : void 0, a = rM(), o = tw(),
                            l = void 0 !== o ? o.getUser() : void 0;
                        for (let t of e) if ("duration" in t) {
                            let e = t.duration, n = Object.keys(r),
                                o = n.length > 0 ? n.reduce((e, t) => r[e].duration < r[t].duration ? e : t) : void 0;
                            if (void 0 === o || e > r[o].duration) {
                                let n = t.interactionId, c = i.name, u = i.context;
                                n && c && u && (o && Object.keys(r).length >= 10 && delete r[o], r[n] = {
                                    routeName: c,
                                    duration: e,
                                    parentContext: u,
                                    user: l,
                                    activeTransaction: a,
                                    replayId: s
                                })
                            }
                        }
                    }), iF({
                        traceFetch: l,
                        traceXHR: c,
                        tracePropagationTargets: p,
                        shouldCreateSpanForRequest: u,
                        enableHTTPTimings: h
                    })
                }, options: t
            }
        };

        function iV(e, t) {
            if (!e.emit) return;
            e.emit("startPageLoadSpan", t);
            let n = rI();
            return "pageload" === (n && e3(n).op) ? n : void 0
        }

        function iJ(e, t) {
            if (!e.emit) return;
            e.emit("startNavigationSpan", t);
            let n = rI();
            return "navigation" === (n && e3(n).op) ? n : void 0
        }

        function iK(e) {
            let t = eo(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0
        }

        let iY = {"routing.instrumentation": "next-app-router"};
        var iX = n(85778), iZ = n.n(iX);
        let iQ = {"routing.instrumentation": "next-pages-router"}, i0 = tb();

        function i1(e, t = !0, n = !0, r, i) {
            H.document.getElementById("__NEXT_DATA__") ? function (e, t = !0, n = !0, r, i) {
                let {route: s, params: a, sentryTrace: o, baggage: l} = function () {
                    let e;
                    let t = H.document.getElementById("__NEXT_DATA__");
                    if (t && t.innerHTML) try {
                        e = JSON.parse(t.innerHTML)
                    } catch (e) {
                    }
                    if (!e) return {};
                    let n = {}, {page: r, query: i, props: s} = e;
                    return n.route = r, n.params = i, s && s.pageProps && (n.sentryTrace = s.pageProps._sentryTraceData, n.baggage = s.pageProps._sentryBaggage), n
                }(), {traceparentData: c, dynamicSamplingContext: u, propagationContext: h} = function (e, t) {
                    let n = eY(e), r = eG(t), {traceId: i, parentSpanId: s, parentSampled: a} = n || {};
                    return n ? {
                        traceparentData: n,
                        dynamicSamplingContext: r || {},
                        propagationContext: {
                            traceId: i || ek(),
                            parentSpanId: s || ek().substring(16),
                            spanId: ek().substring(16),
                            sampled: a,
                            dsc: r || {}
                        }
                    } : {
                        traceparentData: n,
                        dynamicSamplingContext: void 0,
                        propagationContext: {traceId: i || ek(), spanId: ek().substring(16)}
                    }
                }(o, l);
                if (tw().setPropagationContext(h), T = s || H.location.pathname, t) {
                    let t = {
                        name: T,
                        op: "pageload",
                        origin: "auto.pageload.nextjs.pages_router_instrumentation",
                        tags: iQ,
                        startTimestamp: e$ ? e$ / 1e3 : void 0, ...a && i0 && i0.getOptions().sendDefaultPii && {data: a}, ...c,
                        metadata: {source: s ? "route" : "url", dynamicSamplingContext: c && !u ? {} : u}
                    };
                    k = e(t), r(t)
                }
                n && iZ().events.on("routeChangeStart", t => {
                    let n, r;
                    let s = t.split(/[\?#]/, 1)[0], a = function (e) {
                        let t = (H.__BUILD_MANIFEST || {}).sortedPages;
                        if (t) return t.find(t => {
                            let n = function (e) {
                                let t = e.split("/"), n = "";
                                t[t.length - 1].match(/^\[\[\.\.\..+\]\]$/) && (t.pop(), n = "(?:/(.+?))?");
                                let r = t.map(e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/");
                                return RegExp(`^${r}${n}(?:/)?$`)
                            }(t);
                            return e.match(n)
                        })
                    }(s);
                    a ? (n = a, r = "route") : (n = s, r = "url");
                    let o = {...iQ, from: T};
                    T = n, k && k.end();
                    let l = {
                        name: n,
                        op: "navigation",
                        origin: "auto.navigation.nextjs.pages_router_instrumentation",
                        tags: o,
                        metadata: {source: r}
                    }, c = e(l);
                    if (i(l), c) {
                        let e = c.startChild({
                            op: "ui.nextjs.route-change",
                            origin: "auto.ui.nextjs.pages_router_instrumentation",
                            description: "Next.js Route Change"
                        }), t = () => {
                            e.end(), iZ().events.off("routeChangeComplete", t)
                        };
                        iZ().events.on("routeChangeComplete", t)
                    }
                })
            }(e, t, n, r || (() => void 0), i || (() => void 0)) : function (e, t = !0, n = !0, r, i) {
                let s;
                let a = H.location.pathname;
                if (t) {
                    let t = {
                        name: a,
                        op: "pageload",
                        origin: "auto.pageload.nextjs.app_router_instrumentation",
                        tags: iY,
                        startTimestamp: e$ ? e$ / 1e3 : void 0,
                        metadata: {source: "url"}
                    };
                    s = e(t), r(t)
                }
                n && nk(t => {
                    if (void 0 !== t.endTimestamp || "GET" !== t.fetchData.method) return;
                    let n = function (e) {
                        if (!e[0] || "object" != typeof e[0] || void 0 === e[0].searchParams || !e[1] || "object" != typeof e[1] || !("headers" in e[1])) return null;
                        try {
                            let t = e[0], n = e[1].headers;
                            if ("1" !== n.RSC || "1" === n["Next-Router-Prefetch"]) return null;
                            return {targetPathname: t.pathname}
                        } catch (e) {
                            return null
                        }
                    }(t.args);
                    if (null === n) return;
                    let r = n.targetPathname, o = {...iY, from: a};
                    a = r, s && s.end();
                    let l = {
                        name: r,
                        op: "navigation",
                        origin: "auto.navigation.nextjs.app_router_instrumentation",
                        tags: o,
                        metadata: {source: "url"}
                    };
                    e(l), i(l)
                })
            }(e, t, n, r || (() => void 0), i || (() => void 0))
        }

        class i2 extends iH {
            constructor(e) {
                super({tracingOrigins: [...iL.tracingOrigins, /^(api\/)/], routingInstrumentation: i1, ...e})
            }
        }

        let i3 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

        function i5(...e) {
            let t = "", n = !1;
            for (let r = e.length - 1; r >= -1 && !n; r--) {
                let i = r >= 0 ? e[r] : "/";
                i && (t = `${i}/${t}`, n = "/" === i.charAt(0))
            }
            return t = (function (e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    let r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
                }
                if (t) for (; n--; n) e.unshift("..");
                return e
            })(t.split("/").filter(e => !!e), !n).join("/"), (n ? "/" : "") + t || "."
        }

        function i4(e) {
            let t = 0;
            for (; t < e.length && "" === e[t]; t++) ;
            let n = e.length - 1;
            for (; n >= 0 && "" === e[n]; n--) ;
            return t > n ? [] : e.slice(t, n - t + 1)
        }

        let i9 = "RewriteFrames", i8 = (e = {}) => {
            let t = e.root, n = e.prefix || "app:///", r = e.iteratee || (e => {
                if (!e.filename) return e;
                let r = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"),
                    i = /^\//.test(e.filename);
                if (r || i) {
                    let i;
                    let s = r ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
                        a = t ? function (e, t) {
                            e = i5(e).slice(1), t = i5(t).slice(1);
                            let n = i4(e.split("/")), r = i4(t.split("/")), i = Math.min(n.length, r.length), s = i;
                            for (let e = 0; e < i; e++) if (n[e] !== r[e]) {
                                s = e;
                                break
                            }
                            let a = [];
                            for (let e = s; e < n.length; e++) a.push("..");
                            return (a = a.concat(r.slice(s))).join("/")
                        }(t, s) : function (e) {
                            let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e, n = i3.exec(t);
                            return n ? n.slice(1) : []
                        }(s)[2];
                    e.filename = `${n}${a}`
                }
                return e
            });
            return {
                name: i9, setupOnce() {
                }, processEvent(e) {
                    let t = e;
                    return e.exception && Array.isArray(e.exception.values) && (t = function (e) {
                        try {
                            return {
                                ...e, exception: {
                                    ...e.exception, values: e.exception.values.map(e => {
                                        var t;
                                        return {
                                            ...e, ...e.stacktrace && {
                                                stacktrace: {
                                                    ...t = e.stacktrace,
                                                    frames: t && t.frames && t.frames.map(e => r(e))
                                                }
                                            }
                                        }
                                    })
                                }
                            }
                        } catch (t) {
                            return e
                        }
                    }(t)), t
                }
            }
        };
        tR(i9, i8);
        let i6 = e => {
            let t = H.__rewriteFramesAssetPrefixPath__ || "";
            return i8({
                iteratee: e => {
                    try {
                        let {origin: n} = new URL(e.filename);
                        e.filename = rv([e, "access", e => e.filename, "optionalAccess", e => e.replace, "call", e => e(n, "app://"), "access", e => e.replace, "call", e => e(t, "")])
                    } catch (e) {
                    }
                    return e.filename && e.filename.startsWith("app:///_next") && (e.filename = decodeURI(e.filename)), e.filename && e.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (e.in_app = !1), e
                }, ...e
            })
        };

        function i7(e) {
            let t = e.find(e => "BrowserTracing" === e.name);
            if (!t) return e;
            if (t.afterAllSetup && t.options) {
                let {options: n} = t;
                e[e.indexOf(t)] = new i2(n)
            }
            if (!(t instanceof i2)) {
                let n = t.options;
                delete n.routingInstrumentation, delete n.tracingOrigins, e[e.indexOf(t)] = new i2(n)
            }
            return e
        }

        function se(e) {
            return "/" === e[e.length - 1] ? e.slice(0, -1) : e
        }

        ({...nK});
        var st = n(48759);

        function sn() {
            return "undefined" != typeof window && (!(0, st.KV)() || void 0 !== H.process && "renderer" === H.process.type)
        }

        let sr = "sentryReplaySession", si = "Unable to send Replay";

        function ss(e) {
            let t;
            let n = e[0], r = 1;
            for (; r < e.length;) {
                let i = e[r], s = e[r + 1];
                if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                "access" === i || "optionalAccess" === i ? (t = n, n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s((...e) => n.call(t, ...e)), t = void 0)
            }
            return n
        }

        function sa(e) {
            let t = ss([e, "optionalAccess", e => e.host]);
            return ss([t, "optionalAccess", e => e.shadowRoot]) === e
        }

        function so(e) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(e)
        }

        function sl(e) {
            try {
                var t;
                let n = e.rules || e.cssRules;
                return n ? ((t = Array.from(n, sc).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t) : null
            } catch (e) {
                return null
            }
        }

        function sc(e) {
            let t;
            if ("styleSheet" in e) try {
                t = sl(e.styleSheet) || function (e) {
                    let {cssText: t} = e;
                    if (t.split('"').length < 3) return t;
                    let n = ["@import", `url(${JSON.stringify(e.href)})`];
                    return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
                }(e)
            } catch (e) {
            } else if ("selectorText" in e && e.selectorText.includes(":")) return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
            return t || e.cssText
        }

        (I = N || (N = {}))[I.Document = 0] = "Document", I[I.DocumentType = 1] = "DocumentType", I[I.Element = 2] = "Element", I[I.Text = 3] = "Text", I[I.CDATA = 4] = "CDATA", I[I.Comment = 5] = "Comment";

        class su {
            constructor() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
            }

            getId(e) {
                var t;
                return e ? (() => -1, null != (t = ss([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id])) ? t : -1) : -1
            }

            getNode(e) {
                return this.idNodeMap.get(e) || null
            }

            getIds() {
                return Array.from(this.idNodeMap.keys())
            }

            getMeta(e) {
                return this.nodeMetaMap.get(e) || null
            }

            removeNodeFromMap(e) {
                let t = this.getId(e);
                this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
            }

            has(e) {
                return this.idNodeMap.has(e)
            }

            hasNode(e) {
                return this.nodeMetaMap.has(e)
            }

            add(e, t) {
                let n = t.id;
                this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
            }

            replace(e, t) {
                let n = this.getNode(e);
                if (n) {
                    let e = this.nodeMetaMap.get(n);
                    e && this.nodeMetaMap.set(t, e)
                }
                this.idNodeMap.set(e, t)
            }

            reset() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
            }
        }

        function sh({maskInputOptions: e, tagName: t, type: n}) {
            return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
        }

        function sd({isMasked: e, element: t, value: n, maskInputFn: r}) {
            let i = n || "";
            return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i
        }

        function sp(e) {
            return e.toLowerCase()
        }

        function sf(e) {
            return e.toUpperCase()
        }

        let sm = "__rrweb_original__";

        function sg(e) {
            let t = e.type;
            return e.hasAttribute("data-rr-is-password") ? "password" : t ? sp(t) : null
        }

        function sy(e, t, n) {
            return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
        }

        let sv = 1, s_ = RegExp("[^a-z0-9-_:]");

        function sb() {
            return sv++
        }

        let sw = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, sS = /^(?:[a-z+]+:)?\/\//i, sE = /^www\..*/i,
            sk = /^(data:)([^,]*),(.*)/i;

        function sT(e, t) {
            return (e || "").replace(sw, (e, n, r, i, s, a) => {
                let o = r || s || a, l = n || i || "";
                if (!o) return e;
                if (sS.test(o) || sE.test(o) || sk.test(o)) return `url(${l}${o}${l})`;
                if ("/" === o[0]) return `url(${l}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + o}${l})`;
                let c = t.split("/"), u = o.split("/");
                for (let e of (c.pop(), u)) "." !== e && (".." === e ? c.pop() : c.push(e));
                return `url(${l}${c.join("/")}${l})`
            })
        }

        let sx = /^[^ \t\n\r\u000c]+/, sC = /^[, \t\n\r\u000c]+/;

        function sI(e, t) {
            if (!t || "" === t.trim()) return t;
            let n = e.createElement("a");
            return n.href = t, n.href
        }

        function sO() {
            let e = document.createElement("a");
            return e.href = "", e.href
        }

        function sR(e, t, n, r, i, s) {
            return r ? "src" !== n && ("href" !== n || "use" === t && "#" === r[0]) && ("xlink:href" !== n || "#" === r[0]) && ("background" !== n || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === n ? function (e, t) {
                if ("" === t.trim()) return t;
                let n = 0;

                function r(e) {
                    let r;
                    let i = e.exec(t.substring(n));
                    return i ? (r = i[0], n += r.length, r) : ""
                }

                let i = [];
                for (; r(sC), !(n >= t.length);) {
                    let s = r(sx);
                    if ("," === s.slice(-1)) s = sI(e, s.substring(0, s.length - 1)), i.push(s); else {
                        let r = "";
                        s = sI(e, s);
                        let a = !1;
                        for (; ;) {
                            let e = t.charAt(n);
                            if ("" === e) {
                                i.push((s + r).trim());
                                break
                            }
                            if (a) ")" === e && (a = !1); else {
                                if ("," === e) {
                                    n += 1, i.push((s + r).trim());
                                    break
                                }
                                "(" === e && (a = !0)
                            }
                            r += e, n += 1
                        }
                    }
                }
                return i.join(", ")
            }(e, r) : "style" === n ? sT(r, sO()) : "object" === t && "data" === n ? sI(e, r) : "function" == typeof s ? s(n, r, i) : r : sI(e, r) : r
        }

        function sA(e, t, n) {
            return ("video" === e || "audio" === e) && "autoplay" === t
        }

        function s$(e, t, n = 1 / 0, r = 0) {
            return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : s$(e.parentNode, t, n, r + 1)
        }

        function sP(e, t) {
            return n => {
                if (null === n) return !1;
                try {
                    if (e) {
                        if ("string" == typeof e) {
                            if (n.matches(`.${e}`)) return !0
                        } else if (function (e, t) {
                            for (let n = e.classList.length; n--;) {
                                let r = e.classList[n];
                                if (t.test(r)) return !0
                            }
                            return !1
                        }(n, e)) return !0
                    }
                    if (t && n.matches(t)) return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
        }

        function sj(e, t, n, r, i, s) {
            try {
                let a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (null === a) return !1;
                if ("INPUT" === a.tagName) {
                    let e = a.getAttribute("autocomplete");
                    if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
                }
                let o = -1, l = -1;
                if (s) {
                    if ((l = s$(a, sP(r, i))) < 0) return !0;
                    o = s$(a, sP(t, n), l >= 0 ? l : 1 / 0)
                } else {
                    if ((o = s$(a, sP(t, n))) < 0) return !1;
                    l = s$(a, sP(r, i), o >= 0 ? o : 1 / 0)
                }
                return o >= 0 ? !(l >= 0) || o <= l : !(l >= 0) && !!s
            } catch (e) {
            }
            return !!s
        }

        function sM(e) {
            return null == e ? "" : e.toLowerCase()
        }

        function sN(e, t) {
            let n;
            let {
                doc: r,
                mirror: i,
                blockClass: s,
                blockSelector: a,
                unblockSelector: o,
                maskAllText: l,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: h,
                unmaskTextSelector: d,
                skipChild: p = !1,
                inlineStylesheet: f = !0,
                maskInputOptions: m = {},
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: b,
                slimDOMOptions: w,
                dataURLOptions: S = {},
                inlineImages: E = !1,
                recordCanvas: k = !1,
                onSerialize: T,
                onIframeLoad: x,
                iframeLoadTimeout: C = 5e3,
                onStylesheetLoad: I,
                stylesheetLoadTimeout: O = 5e3,
                keepIframeSrcFn: R = () => !1,
                newlyAddedElement: A = !1
            } = t, {preserveWhiteSpace: $ = !0} = t, P = function (e, t) {
                let {
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: s,
                    unblockSelector: a,
                    maskAllText: o,
                    maskAttributeFn: l,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: h,
                    unmaskTextSelector: d,
                    inlineStylesheet: p,
                    maskInputOptions: f = {},
                    maskTextFn: m,
                    maskInputFn: g,
                    dataURLOptions: _ = {},
                    inlineImages: b,
                    recordCanvas: w,
                    keepIframeSrcFn: S,
                    newlyAddedElement: E = !1
                } = t, k = function (e, t) {
                    if (!t.hasNode(e)) return;
                    let n = t.getId(e);
                    return 1 === n ? void 0 : n
                }(n, r);
                switch (e.nodeType) {
                    case e.DOCUMENT_NODE:
                        if ("CSS1Compat" !== e.compatMode) return {
                            type: N.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                        return {type: N.Document, childNodes: []};
                    case e.DOCUMENT_TYPE_NODE:
                        return {
                            type: N.DocumentType,
                            name: e.name,
                            publicId: e.publicId,
                            systemId: e.systemId,
                            rootId: k
                        };
                    case e.ELEMENT_NODE:
                        return function (e, t) {
                            let n;
                            let {
                                doc: r,
                                blockClass: i,
                                blockSelector: s,
                                unblockSelector: a,
                                inlineStylesheet: o,
                                maskInputOptions: l = {},
                                maskAttributeFn: c,
                                maskInputFn: u,
                                dataURLOptions: h = {},
                                inlineImages: d,
                                recordCanvas: p,
                                keepIframeSrcFn: f,
                                newlyAddedElement: m = !1,
                                rootId: g,
                                maskAllText: _,
                                maskTextClass: b,
                                unmaskTextClass: w,
                                maskTextSelector: S,
                                unmaskTextSelector: E
                            } = t, k = function (e, t, n, r) {
                                try {
                                    if (r && e.matches(r)) return !1;
                                    if ("string" == typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else for (let n = e.classList.length; n--;) {
                                        let r = e.classList[n];
                                        if (t.test(r)) return !0
                                    }
                                    if (n) return e.matches(n)
                                } catch (e) {
                                }
                                return !1
                            }(e, i, s, a), T = function (e) {
                                if (e instanceof HTMLFormElement) return "form";
                                let t = sp(e.tagName);
                                return s_.test(t) ? "div" : t
                            }(e), x = {}, C = e.attributes.length;
                            for (let t = 0; t < C; t++) {
                                let n = e.attributes[t];
                                n.name && !sA(T, n.name, n.value) && (x[n.name] = sR(r, T, sp(n.name), n.value, e, c))
                            }
                            if ("link" === T && o) {
                                let t = Array.from(r.styleSheets).find(t => t.href === e.href), n = null;
                                t && (n = sl(t)), n && (delete x.rel, delete x.href, x._cssText = sT(n, t.href))
                            }
                            if ("style" === T && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                let t = sl(e.sheet);
                                t && (x._cssText = sT(t, sO()))
                            }
                            if ("input" === T || "textarea" === T || "select" === T || "option" === T) {
                                let t = sg(e), n = sy(e, sf(T), t), r = e.checked;
                                if ("submit" !== t && "button" !== t && n) {
                                    let r = sj(e, b, S, w, E, sh({type: t, tagName: sf(T), maskInputOptions: l}));
                                    x.value = sd({isMasked: r, element: e, value: n, maskInputFn: u})
                                }
                                r && (x.checked = r)
                            }
                            if ("option" === T && (e.selected && !l.select ? x.selected = !0 : delete x.selected), "canvas" === T && p) {
                                if ("2d" === e.__context) !function (e) {
                                    let t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let n = 0; n < e.width; n += 50) for (let r = 0; r < e.height; r += 50) {
                                        let i = t.getImageData;
                                        if (new Uint32Array((sm in i ? i[sm] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                                    }
                                    return !0
                                }(e) && (x.rr_dataURL = e.toDataURL(h.type, h.quality)); else if (!("__context" in e)) {
                                    let t = e.toDataURL(h.type, h.quality), n = document.createElement("canvas");
                                    n.width = e.width, n.height = e.height, t !== n.toDataURL(h.type, h.quality) && (x.rr_dataURL = t)
                                }
                            }
                            if ("img" === T && d) {
                                y || (v = (y = r.createElement("canvas")).getContext("2d"));
                                let t = e.crossOrigin;
                                e.crossOrigin = "anonymous";
                                let n = () => {
                                    e.removeEventListener("load", n);
                                    try {
                                        y.width = e.naturalWidth, y.height = e.naturalHeight, v.drawImage(e, 0, 0), x.rr_dataURL = y.toDataURL(h.type, h.quality)
                                    } catch (t) {
                                        console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                                    }
                                    t ? x.crossOrigin = t : e.removeAttribute("crossorigin")
                                };
                                e.complete && 0 !== e.naturalWidth ? n() : e.addEventListener("load", n)
                            }
                            if (("audio" === T || "video" === T) && (x.rr_mediaState = e.paused ? "paused" : "played", x.rr_mediaCurrentTime = e.currentTime), !m && (e.scrollLeft && (x.rr_scrollLeft = e.scrollLeft), e.scrollTop && (x.rr_scrollTop = e.scrollTop)), k) {
                                let {width: t, height: n} = e.getBoundingClientRect();
                                x = {class: x.class, rr_width: `${t}px`, rr_height: `${n}px`}
                            }
                            "iframe" !== T || f(x.src) || (e.contentDocument || (x.rr_src = x.src), delete x.src);
                            try {
                                customElements.get(T) && (n = !0)
                            } catch (e) {
                            }
                            return {
                                type: N.Element,
                                tagName: T,
                                attributes: x,
                                childNodes: [],
                                isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                needBlock: k,
                                rootId: g,
                                isCustom: n
                            }
                        }(e, {
                            doc: n,
                            blockClass: i,
                            blockSelector: s,
                            unblockSelector: a,
                            inlineStylesheet: p,
                            maskAttributeFn: l,
                            maskInputOptions: f,
                            maskInputFn: g,
                            dataURLOptions: _,
                            inlineImages: b,
                            recordCanvas: w,
                            keepIframeSrcFn: S,
                            newlyAddedElement: E,
                            rootId: k,
                            maskAllText: o,
                            maskTextClass: c,
                            unmaskTextClass: u,
                            maskTextSelector: h,
                            unmaskTextSelector: d
                        });
                    case e.TEXT_NODE:
                        return function (e, t) {
                            let {
                                    maskAllText: n,
                                    maskTextClass: r,
                                    unmaskTextClass: i,
                                    maskTextSelector: s,
                                    unmaskTextSelector: a,
                                    maskTextFn: o,
                                    maskInputOptions: l,
                                    maskInputFn: c,
                                    rootId: u
                                } = t, h = e.parentNode && e.parentNode.tagName, d = e.textContent,
                                p = "STYLE" === h || void 0, f = "SCRIPT" === h || void 0,
                                m = "TEXTAREA" === h || void 0;
                            if (p && d) {
                                try {
                                    e.nextSibling || e.previousSibling || ss([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (d = sl(e.parentNode.sheet))
                                } catch (t) {
                                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                }
                                d = sT(d, sO())
                            }
                            f && (d = "SCRIPT_PLACEHOLDER");
                            let g = sj(e, r, s, i, a, n);
                            return p || f || m || !d || !g || (d = o ? o(d) : d.replace(/[\S]/g, "*")), m && d && (l.textarea || g) && (d = c ? c(d, e.parentNode) : d.replace(/[\S]/g, "*")), "OPTION" === h && d && (d = sd({
                                isMasked: sj(e, r, s, i, a, sh({
                                    type: null,
                                    tagName: h,
                                    maskInputOptions: l
                                })), element: e, value: d, maskInputFn: c
                            })), {type: N.Text, textContent: d || "", isStyle: p, rootId: u}
                        }(e, {
                            maskAllText: o,
                            maskTextClass: c,
                            unmaskTextClass: u,
                            maskTextSelector: h,
                            unmaskTextSelector: d,
                            maskTextFn: m,
                            maskInputOptions: f,
                            maskInputFn: g,
                            rootId: k
                        });
                    case e.CDATA_SECTION_NODE:
                        return {type: N.CDATA, textContent: "", rootId: k};
                    case e.COMMENT_NODE:
                        return {type: N.Comment, textContent: e.textContent || "", rootId: k};
                    default:
                        return !1
                }
            }(e, {
                doc: r,
                mirror: i,
                blockClass: s,
                blockSelector: a,
                maskAllText: l,
                unblockSelector: o,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: h,
                unmaskTextSelector: d,
                inlineStylesheet: f,
                maskInputOptions: m,
                maskAttributeFn: g,
                maskTextFn: _,
                maskInputFn: b,
                dataURLOptions: S,
                inlineImages: E,
                recordCanvas: k,
                keepIframeSrcFn: R,
                newlyAddedElement: A
            });
            if (!P) return console.warn(e, "not serialized"), null;
            n = i.hasNode(e) ? i.getId(e) : !function (e, t) {
                if (t.comment && e.type === N.Comment) return !0;
                if (e.type === N.Element) {
                    if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js")) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (sM(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === sM(e.attributes.name) || "icon" === sM(e.attributes.rel) || "apple-touch-icon" === sM(e.attributes.rel) || "shortcut icon" === sM(e.attributes.rel)))) return !0;
                    if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && sM(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (sM(e.attributes.property).match(/^(og|twitter|fb):/) || sM(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === sM(e.attributes.name))) return !0;
                        if (t.headMetaRobots && ("robots" === sM(e.attributes.name) || "googlebot" === sM(e.attributes.name) || "bingbot" === sM(e.attributes.name))) return !0;
                        if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0; else if (t.headMetaAuthorship && ("author" === sM(e.attributes.name) || "generator" === sM(e.attributes.name) || "framework" === sM(e.attributes.name) || "publisher" === sM(e.attributes.name) || "progid" === sM(e.attributes.name) || sM(e.attributes.property).match(/^article:/) || sM(e.attributes.property).match(/^product:/))) return !0; else if (t.headMetaVerification && ("google-site-verification" === sM(e.attributes.name) || "yandex-verification" === sM(e.attributes.name) || "csrf-token" === sM(e.attributes.name) || "p:domain_verify" === sM(e.attributes.name) || "verify-v1" === sM(e.attributes.name) || "verification" === sM(e.attributes.name) || "shopify-checkout-api-token" === sM(e.attributes.name))) return !0
                    }
                }
                return !1
            }(P, w) && ($ || P.type !== N.Text || P.isStyle || P.textContent.replace(/^\s+|\s+$/gm, "").length) ? sb() : -2;
            let j = Object.assign(P, {id: n});
            if (i.add(e, j), -2 === n) return null;
            T && T(e);
            let M = !p;
            if (j.type === N.Element) {
                M = M && !j.needBlock, delete j.needBlock;
                let t = e.shadowRoot;
                t && so(t) && (j.isShadowHost = !0)
            }
            if ((j.type === N.Document || j.type === N.Element) && M) {
                w.headWhitespace && j.type === N.Element && "head" === j.tagName && ($ = !1);
                let t = {
                    doc: r,
                    mirror: i,
                    blockClass: s,
                    blockSelector: a,
                    maskAllText: l,
                    unblockSelector: o,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: h,
                    unmaskTextSelector: d,
                    skipChild: p,
                    inlineStylesheet: f,
                    maskInputOptions: m,
                    maskAttributeFn: g,
                    maskTextFn: _,
                    maskInputFn: b,
                    slimDOMOptions: w,
                    dataURLOptions: S,
                    inlineImages: E,
                    recordCanvas: k,
                    preserveWhiteSpace: $,
                    onSerialize: T,
                    onIframeLoad: x,
                    iframeLoadTimeout: C,
                    onStylesheetLoad: I,
                    stylesheetLoadTimeout: O,
                    keepIframeSrcFn: R
                };
                for (let n of Array.from(e.childNodes)) {
                    let e = sN(n, t);
                    e && j.childNodes.push(e)
                }
                if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot) for (let n of Array.from(e.shadowRoot.childNodes)) {
                    let r = sN(n, t);
                    r && (so(e.shadowRoot) && (r.isShadow = !0), j.childNodes.push(r))
                }
            }
            return e.parentNode && sa(e.parentNode) && so(e.parentNode) && (j.isShadow = !0), j.type === N.Element && "iframe" === j.tagName && function (e, t, n) {
                let r;
                let i = e.contentWindow;
                if (!i) return;
                let s = !1;
                try {
                    r = i.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" !== r) {
                    let r = setTimeout(() => {
                        s || (t(), s = !0)
                    }, n);
                    e.addEventListener("load", () => {
                        clearTimeout(r), s = !0, t()
                    });
                    return
                }
                let a = "about:blank";
                if (i.location.href !== a || e.src === a || "" === e.src) return setTimeout(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t)
            }(e, () => {
                let t = e.contentDocument;
                if (t && x) {
                    let n = sN(t, {
                        doc: t,
                        mirror: i,
                        blockClass: s,
                        blockSelector: a,
                        unblockSelector: o,
                        maskAllText: l,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: h,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: f,
                        maskInputOptions: m,
                        maskAttributeFn: g,
                        maskTextFn: _,
                        maskInputFn: b,
                        slimDOMOptions: w,
                        dataURLOptions: S,
                        inlineImages: E,
                        recordCanvas: k,
                        preserveWhiteSpace: $,
                        onSerialize: T,
                        onIframeLoad: x,
                        iframeLoadTimeout: C,
                        onStylesheetLoad: I,
                        stylesheetLoadTimeout: O,
                        keepIframeSrcFn: R
                    });
                    n && x(e, n)
                }
            }, C), j.type === N.Element && "link" === j.tagName && "stylesheet" === j.attributes.rel && function (e, t, n) {
                let r, i = !1;
                try {
                    r = e.sheet
                } catch (e) {
                    return
                }
                if (r) return;
                let s = setTimeout(() => {
                    i || (t(), i = !0)
                }, n);
                e.addEventListener("load", () => {
                    clearTimeout(s), i = !0, t()
                })
            }(e, () => {
                if (I) {
                    let t = sN(e, {
                        doc: r,
                        mirror: i,
                        blockClass: s,
                        blockSelector: a,
                        unblockSelector: o,
                        maskAllText: l,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: h,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: f,
                        maskInputOptions: m,
                        maskAttributeFn: g,
                        maskTextFn: _,
                        maskInputFn: b,
                        slimDOMOptions: w,
                        dataURLOptions: S,
                        inlineImages: E,
                        recordCanvas: k,
                        preserveWhiteSpace: $,
                        onSerialize: T,
                        onIframeLoad: x,
                        iframeLoadTimeout: C,
                        onStylesheetLoad: I,
                        stylesheetLoadTimeout: O,
                        keepIframeSrcFn: R
                    });
                    t && I(e, t)
                }
            }, O), j
        }

        function sD(e) {
            let t;
            let n = e[0], r = 1;
            for (; r < e.length;) {
                let i = e[r], s = e[r + 1];
                if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                "access" === i || "optionalAccess" === i ? (t = n, n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s((...e) => n.call(t, ...e)), t = void 0)
            }
            return n
        }

        function sL(e, t, n = document) {
            let r = {capture: !0, passive: !0};
            return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
        }

        let sF = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
            sU = {
                map: {},
                getId: () => (console.error(sF), -1),
                getNode: () => (console.error(sF), null),
                removeNodeFromMap() {
                    console.error(sF)
                },
                has: () => (console.error(sF), !1),
                reset() {
                    console.error(sF)
                }
            };

        function sB(e, t, n = {}) {
            let r = null, i = 0;
            return function (...s) {
                let a = Date.now();
                i || !1 !== n.leading || (i = a);
                let o = t - (a - i), l = this;
                o <= 0 || o > t ? (r && (clearTimeout(r), r = null), i = a, e.apply(l, s)) : r || !1 === n.trailing || (r = setTimeout(() => {
                    i = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(l, s)
                }, o))
            }
        }

        function sz(e, t, n) {
            try {
                if (!(t in e)) return () => {
                };
                let r = e[t], i = n(r);
                return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), e[t] = i, () => {
                    e[t] = r
                }
            } catch (e) {
                return () => {
                }
            }
        }

        "undefined" != typeof window && window.Proxy && window.Reflect && (sU = new Proxy(sU, {get: (e, t, n) => ("map" === t && console.error(sF), Reflect.get(e, t, n))}));
        let sH = Date.now;

        function sq(e) {
            let t = e.document;
            return {
                left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : sD([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || sD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || sD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : sD([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || sD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || sD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
            }
        }

        function sW() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }

        function sG() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }

        function sV(e, t, n, r, i) {
            if (!e) return !1;
            let s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (!s) return !1;
            let a = sP(t, n);
            if (!i) {
                let e = r && s.matches(r);
                return a(s) && !e
            }
            let o = s$(s, a), l = -1;
            return !(o < 0) && (r && (l = s$(s, sP(null, r))), o > -1 && l < 0 || o < l)
        }

        function sJ(e, t) {
            return -2 === t.getId(e)
        }

        function sK(e) {
            return !!e.changedTouches
        }

        function sY(e, t) {
            return !!("IFRAME" === e.nodeName && t.getMeta(e))
        }

        function sX(e, t) {
            return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
        }

        function sZ(e) {
            return !!sD([e, "optionalAccess", e => e.shadowRoot])
        }

        /[1-9][0-9]{12}/.test(Date.now().toString()) || (sH = () => new Date().getTime());

        class sQ {
            constructor() {
                this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
            }

            getId(e) {
                var t;
                return t = this.styleIDMap.get(e), null != t ? t : -1
            }

            has(e) {
                return this.styleIDMap.has(e)
            }

            add(e, t) {
                let n;
                return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n)
            }

            getStyle(e) {
                return this.idStyleMap.get(e) || null
            }

            reset() {
                this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
            }

            generateId() {
                return this.id++
            }
        }

        function s0(e) {
            let t = null;
            return sD([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
        }

        function s1(e) {
            let t = e.ownerDocument;
            return !!t && (t.contains(e) || function (e) {
                let t = e.ownerDocument;
                if (!t) return !1;
                let n = function (e) {
                    let t, n = e;
                    for (; t = s0(n);) n = t;
                    return n
                }(e);
                return t.contains(n)
            }(e))
        }

        var s2 = ((O = s2 || {})[O.DomContentLoaded = 0] = "DomContentLoaded", O[O.Load = 1] = "Load", O[O.FullSnapshot = 2] = "FullSnapshot", O[O.IncrementalSnapshot = 3] = "IncrementalSnapshot", O[O.Meta = 4] = "Meta", O[O.Custom = 5] = "Custom", O[O.Plugin = 6] = "Plugin", O),
            s3 = ((R = s3 || {})[R.Mutation = 0] = "Mutation", R[R.MouseMove = 1] = "MouseMove", R[R.MouseInteraction = 2] = "MouseInteraction", R[R.Scroll = 3] = "Scroll", R[R.ViewportResize = 4] = "ViewportResize", R[R.Input = 5] = "Input", R[R.TouchMove = 6] = "TouchMove", R[R.MediaInteraction = 7] = "MediaInteraction", R[R.StyleSheetRule = 8] = "StyleSheetRule", R[R.CanvasMutation = 9] = "CanvasMutation", R[R.Font = 10] = "Font", R[R.Log = 11] = "Log", R[R.Drag = 12] = "Drag", R[R.StyleDeclaration = 13] = "StyleDeclaration", R[R.Selection = 14] = "Selection", R[R.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", R[R.CustomElement = 16] = "CustomElement", R),
            s5 = ((A = s5 || {})[A.MouseUp = 0] = "MouseUp", A[A.MouseDown = 1] = "MouseDown", A[A.Click = 2] = "Click", A[A.ContextMenu = 3] = "ContextMenu", A[A.DblClick = 4] = "DblClick", A[A.Focus = 5] = "Focus", A[A.Blur = 6] = "Blur", A[A.TouchStart = 7] = "TouchStart", A[A.TouchMove_Departed = 8] = "TouchMove_Departed", A[A.TouchEnd = 9] = "TouchEnd", A[A.TouchCancel = 10] = "TouchCancel", A),
            s4 = (($ = s4 || {})[$.Mouse = 0] = "Mouse", $[$.Pen = 1] = "Pen", $[$.Touch = 2] = "Touch", $);

        class s9 {
            constructor() {
                this.length = 0, this.head = null, this.tail = null
            }

            get(e) {
                if (e >= this.length) throw Error("Position outside of list range");
                let t = this.head;
                for (let n = 0; n < e; n++) t = function (e) {
                    let t;
                    let n = e[0], r = 1;
                    for (; r < e.length;) {
                        let i = e[r], s = e[r + 1];
                        if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                        "access" === i || "optionalAccess" === i ? (t = n, n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s((...e) => n.call(t, ...e)), t = void 0)
                    }
                    return n
                }([t, "optionalAccess", e => e.next]) || null;
                return t
            }

            addNode(e) {
                let t = {value: e, previous: null, next: null};
                if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                    let n = e.previousSibling.__ln.next;
                    t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
                } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                    let n = e.nextSibling.__ln.previous;
                    t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
                } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                null === t.next && (this.tail = t), this.length++
            }

            removeNode(e) {
                let t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
            }
        }

        let s8 = (e, t) => `${e}@${t}`;

        class s6 {
            constructor() {
                this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                    e.forEach(this.processMutation), this.emit()
                }, this.emit = () => {
                    if (this.frozen || this.locked) return;
                    let e = [], t = new Set, n = new s9, r = e => {
                        let t = e, n = -2;
                        for (; -2 === n;) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return n
                    }, i = i => {
                        if (!i.parentNode || !s1(i)) return;
                        let s = sa(i.parentNode) ? this.mirror.getId(s0(i)) : this.mirror.getId(i.parentNode), a = r(i);
                        if (-1 === s || -1 === a) return n.addNode(i);
                        let o = sN(i, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                sY(e, this.mirror) && this.iframeManager.addIframe(e), sX(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), sZ(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                            },
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            }
                        });
                        o && (e.push({parentId: s, nextId: a, node: o}), t.add(o.id))
                    };
                    for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (let e of this.movedSet) (!ae(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                    for (let e of this.addedSet) at(this.droppedSet, e) || ae(this.removes, e, this.mirror) ? at(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                    let s = null;
                    for (; n.length;) {
                        let e = null;
                        if (s) {
                            let t = this.mirror.getId(s.value.parentNode), n = r(s.value);
                            -1 !== t && -1 !== n && (e = s)
                        }
                        if (!e) {
                            let t = n.tail;
                            for (; t;) {
                                let n = t;
                                if (t = t.previous, n) {
                                    let t = this.mirror.getId(n.value.parentNode);
                                    if (-1 === r(n.value)) continue;
                                    if (-1 !== t) {
                                        e = n;
                                        break
                                    }
                                    {
                                        let t = n.value;
                                        if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            let r = t.parentNode.host;
                                            if (-1 !== this.mirror.getId(r)) {
                                                e = n;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!e) {
                            for (; n.head;) n.removeNode(n.head.value);
                            break
                        }
                        s = e.previous, n.removeNode(e.value), i(e.value)
                    }
                    let a = {
                        texts: this.texts.map(e => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        attributes: this.attributes.map(e => {
                            let {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                let n = JSON.stringify(e.styleDiff), r = JSON.stringify(e._unchangedStyles);
                                n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                            }
                            return {id: this.mirror.getId(e.node), attributes: t}
                        }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        removes: this.removes,
                        adds: e
                    };
                    (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(a))
                }, this.processMutation = e => {
                    let t;
                    if (!sJ(e.target, this.mirror)) {
                        try {
                            t = document.implementation.createHTMLDocument()
                        } catch (e) {
                            t = this.doc
                        }
                        switch (e.type) {
                            case"characterData": {
                                let t = e.target.textContent;
                                sV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                    value: sj(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                            case"attributes": {
                                let n = e.target, r = e.attributeName, i = e.target.getAttribute(r);
                                if ("value" === r) {
                                    let t = sg(n), r = n.tagName;
                                    i = sy(n, r, t);
                                    let s = sh({maskInputOptions: this.maskInputOptions, tagName: r, type: t});
                                    i = sd({
                                        isMasked: sj(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                        element: n,
                                        value: i,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (sV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || i === e.oldValue) return;
                                let s = this.attributes.find(t => t.node === e.target);
                                if ("IFRAME" === n.tagName && "src" === r && !this.keepIframeSrcFn(i)) {
                                    if (n.contentDocument) return;
                                    r = "rr_src"
                                }
                                if (s || (s = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                }, this.attributes.push(s)), "type" === r && "INPUT" === n.tagName && "password" === (e.oldValue || "").toLowerCase() && n.setAttribute("data-rr-is-password", "true"), !sA(n.tagName, r) && (s.attributes[r] = sR(this.doc, sp(n.tagName), sp(r), i, n, this.maskAttributeFn), "style" === r)) {
                                    let r = t.createElement("span");
                                    for (let t of (e.oldValue && r.setAttribute("style", e.oldValue), Array.from(n.style))) {
                                        let e = n.style.getPropertyValue(t), i = n.style.getPropertyPriority(t);
                                        e !== r.style.getPropertyValue(t) || i !== r.style.getPropertyPriority(t) ? "" === i ? s.styleDiff[t] = e : s.styleDiff[t] = [e, i] : s._unchangedStyles[t] = [e, i]
                                    }
                                    for (let e of Array.from(r.style)) "" === n.style.getPropertyValue(e) && (s.styleDiff[e] = !1)
                                }
                                break
                            }
                            case"childList":
                                if (sV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                                e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                                    let n = this.mirror.getId(t),
                                        r = sa(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    sV(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || sJ(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (s7(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                                        if (sa(t)) return !1;
                                        let r = n.getId(t);
                                        return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                                    }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[s8(n, r)] ? s7(this.movedSet, t) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!(sa(e.target) && so(e.target)) || void 0
                                    })), this.mapRemoves.push(t))
                                })
                        }
                    }
                }, this.genAdds = (e, t) => {
                    if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                        if (this.mirror.hasNode(e)) {
                            if (sJ(e, this.mirror)) return;
                            this.movedSet.add(e);
                            let n = null;
                            t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[s8(this.mirror.getId(e), n)] = !0)
                        } else this.addedSet.add(e), this.droppedSet.delete(e);
                        !sV(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), sZ(e) && e.shadowRoot.childNodes.forEach(t => {
                            this.processedNodeManager.add(t, this), this.genAdds(t, e)
                        }))
                    }
                }
            }

            init(e) {
                ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                    this[t] = e[t]
                })
            }

            freeze() {
                this.frozen = !0, this.canvasManager.freeze()
            }

            unfreeze() {
                this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
            }

            isFrozen() {
                return this.frozen
            }

            lock() {
                this.locked = !0, this.canvasManager.lock()
            }

            unlock() {
                this.locked = !1, this.canvasManager.unlock(), this.emit()
            }

            reset() {
                this.shadowDomManager.reset(), this.canvasManager.reset()
            }
        }

        function s7(e, t) {
            e.delete(t), t.childNodes.forEach(t => s7(e, t))
        }

        function ae(e, t, n) {
            return 0 !== e.length && function e(t, n, r) {
                let {parentNode: i} = n;
                if (!i) return !1;
                let s = r.getId(i);
                return !!t.some(e => e.id === s) || e(t, i, r)
            }(e, t, n)
        }

        function at(e, t) {
            return 0 !== e.size && function e(t, n) {
                let {parentNode: r} = n;
                return !!r && (!!t.has(r) || e(t, r))
            }(e, t)
        }

        let an = e => b ? (...t) => {
            try {
                return e(...t)
            } catch (e) {
                if (b && !0 === b(e)) return () => {
                };
                throw e
            }
        } : e;

        function ar(e) {
            let t;
            let n = e[0], r = 1;
            for (; r < e.length;) {
                let i = e[r], s = e[r + 1];
                if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                "access" === i || "optionalAccess" === i ? (t = n, n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s((...e) => n.call(t, ...e)), t = void 0)
            }
            return n
        }

        let ai = [];

        function as(e) {
            try {
                if ("composedPath" in e) {
                    let t = e.composedPath();
                    if (t.length) return t[0]
                } else if ("path" in e && e.path.length) return e.path[0]
            } catch (e) {
            }
            return e && e.target
        }

        function aa(e, t) {
            let n = new s6;
            ai.push(n), n.init(e);
            let r = window.MutationObserver || window.__rrMutationObserver,
                i = ar([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
            i && window[i] && (r = window[i]);
            let s = new r(an(t => {
                e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
            }));
            return s.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }), s
        }

        function ao({
                        scrollCb: e,
                        doc: t,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: s,
                        sampling: a
                    }) {
            return sL("scroll", an(sB(an(a => {
                let o = as(a);
                if (!o || sV(o, r, i, s, !0)) return;
                let l = n.getId(o);
                if (o === t && t.defaultView) {
                    let n = sq(t.defaultView);
                    e({id: l, x: n.left, y: n.top})
                } else e({id: l, x: o.scrollLeft, y: o.scrollTop})
            }), a.scroll || 100)), t)
        }

        let al = ["INPUT", "TEXTAREA", "SELECT"], ac = new WeakMap;

        function au(e) {
            var t;
            return t = [], af("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || af("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || af("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || af("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)), t
        }

        function ah(e, t, n) {
            let r, i;
            return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {styleId: i, id: r}) : {}
        }

        function ad({mirror: e, stylesheetManager: t}, n) {
            let r = null;
            r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
            let i = "#document" === n.nodeName ? ar([n, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : ar([n, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
                s = ar([i, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(ar([i, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
            return null !== r && -1 !== r && i && s ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: s.configurable,
                enumerable: s.enumerable,
                get() {
                    return ar([s, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                },
                set(e) {
                    let n = ar([s, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                    if (null !== r && -1 !== r) try {
                        t.adoptStyleSheets(e, r)
                    } catch (e) {
                    }
                    return n
                }
            }), an(() => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: s.configurable,
                    enumerable: s.enumerable,
                    get: s.get,
                    set: s.set
                })
            })) : () => {
            }
        }

        function ap(e, t = {}) {
            let n = e.doc.defaultView;
            if (!n) return () => {
            };
            let r = aa(e, e.doc), i = function ({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
                let i;
                if (!1 === t.mousemove) return () => {
                };
                let s = "number" == typeof t.mousemove ? t.mousemove : 50,
                    a = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500, o = [], l = sB(an(t => {
                        let n = Date.now() - i;
                        e(o.map(e => (e.timeOffset -= n, e)), t), o = [], i = null
                    }), a), c = an(sB(an(e => {
                        let t = as(e), {clientX: n, clientY: s} = sK(e) ? e.changedTouches[0] : e;
                        i || (i = sH()), o.push({
                            x: n,
                            y: s,
                            id: r.getId(t),
                            timeOffset: sH() - i
                        }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? s3.Drag : e instanceof MouseEvent ? s3.MouseMove : s3.TouchMove)
                    }), s, {trailing: !1})), u = [sL("mousemove", c, n), sL("touchmove", c, n), sL("drag", c, n)];
                return an(() => {
                    u.forEach(e => e())
                })
            }(e), s = function ({
                                    mouseInteractionCb: e,
                                    doc: t,
                                    mirror: n,
                                    blockClass: r,
                                    blockSelector: i,
                                    unblockSelector: s,
                                    sampling: a
                                }) {
                if (!1 === a.mouseInteraction) return () => {
                };
                let o = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction, l = [],
                    c = null, u = t => a => {
                        let o = as(a);
                        if (sV(o, r, i, s, !0)) return;
                        let l = null, u = t;
                        if ("pointerType" in a) {
                            switch (a.pointerType) {
                                case"mouse":
                                    l = s4.Mouse;
                                    break;
                                case"touch":
                                    l = s4.Touch;
                                    break;
                                case"pen":
                                    l = s4.Pen
                            }
                            l === s4.Touch ? s5[t] === s5.MouseDown ? u = "TouchStart" : s5[t] === s5.MouseUp && (u = "TouchEnd") : s4.Pen
                        } else sK(a) && (l = s4.Touch);
                        null !== l ? (c = l, (u.startsWith("Touch") && l === s4.Touch || u.startsWith("Mouse") && l === s4.Mouse) && (l = null)) : s5[t] === s5.Click && (l = c, c = null);
                        let h = sK(a) ? a.changedTouches[0] : a;
                        if (!h) return;
                        let d = n.getId(o), {clientX: p, clientY: f} = h;
                        an(e)({type: s5[u], id: d, x: p, y: f, ...null !== l && {pointerType: l}})
                    };
                return Object.keys(s5).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== o[e]).forEach(e => {
                    let n = sp(e), r = u(e);
                    if (window.PointerEvent) switch (s5[e]) {
                        case s5.MouseDown:
                        case s5.MouseUp:
                            n = n.replace("mouse", "pointer");
                            break;
                        case s5.TouchStart:
                        case s5.TouchEnd:
                            return
                    }
                    l.push(sL(n, r, t))
                }), an(() => {
                    l.forEach(e => e())
                })
            }(e), a = ao(e), o = function ({viewportResizeCb: e}, {win: t}) {
                let n = -1, r = -1;
                return sL("resize", an(sB(an(() => {
                    let t = sW(), i = sG();
                    (n !== t || r !== i) && (e({width: Number(i), height: Number(t)}), n = t, r = i)
                }), 200)), t)
            }(e, {win: n}), l = function ({
                                              inputCb: e,
                                              doc: t,
                                              mirror: n,
                                              blockClass: r,
                                              blockSelector: i,
                                              unblockSelector: s,
                                              ignoreClass: a,
                                              ignoreSelector: o,
                                              maskInputOptions: l,
                                              maskInputFn: c,
                                              sampling: u,
                                              userTriggeredOnInput: h,
                                              maskTextClass: d,
                                              unmaskTextClass: p,
                                              maskTextSelector: f,
                                              unmaskTextSelector: m
                                          }) {
                function g(e) {
                    let n = as(e), u = e.isTrusted, g = n && sf(n.tagName);
                    if ("OPTION" === g && (n = n.parentElement), !n || !g || 0 > al.indexOf(g) || sV(n, r, i, s, !0)) return;
                    let v = n;
                    if (v.classList.contains(a) || o && v.matches(o)) return;
                    let _ = sg(n), b = sy(v, g, _), w = !1, S = sh({maskInputOptions: l, tagName: g, type: _}),
                        E = sj(n, d, f, p, m, S);
                    ("radio" === _ || "checkbox" === _) && (w = n.checked), b = sd({
                        isMasked: E,
                        element: n,
                        value: b,
                        maskInputFn: c
                    }), y(n, h ? {text: b, isChecked: w, userTriggered: u} : {text: b, isChecked: w});
                    let k = n.name;
                    "radio" === _ && k && w && t.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach(e => {
                        if (e !== n) {
                            let t = sd({isMasked: E, element: e, value: sy(e, g, _), maskInputFn: c});
                            y(e, h ? {text: t, isChecked: !w, userTriggered: !1} : {text: t, isChecked: !w})
                        }
                    })
                }

                function y(t, r) {
                    let i = ac.get(t);
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        ac.set(t, r);
                        let i = n.getId(t);
                        an(e)({...r, id: i})
                    }
                }

                let v = ("last" === u.input ? ["change"] : ["input", "change"]).map(e => sL(e, an(g), t)),
                    _ = t.defaultView;
                if (!_) return () => {
                    v.forEach(e => e())
                };
                let b = _.Object.getOwnPropertyDescriptor(_.HTMLInputElement.prototype, "value"),
                    w = [[_.HTMLInputElement.prototype, "value"], [_.HTMLInputElement.prototype, "checked"], [_.HTMLSelectElement.prototype, "value"], [_.HTMLTextAreaElement.prototype, "value"], [_.HTMLSelectElement.prototype, "selectedIndex"], [_.HTMLOptionElement.prototype, "selected"]];
                return b && b.set && v.push(...w.map(e => (function e(t, n, r, i, s = window) {
                    let a = s.Object.getOwnPropertyDescriptor(t, n);
                    return s.Object.defineProperty(t, n, i ? r : {
                        set(e) {
                            setTimeout(() => {
                                r.set.call(this, e)
                            }, 0), a && a.set && a.set.call(this, e)
                        }
                    }), () => e(t, n, a || {}, !0)
                })(e[0], e[1], {
                    set() {
                        an(g)({target: this, isTrusted: !1})
                    }
                }, !1, _))), an(() => {
                    v.forEach(e => e())
                })
            }(e), c = function ({
                                    mediaInteractionCb: e,
                                    blockClass: t,
                                    blockSelector: n,
                                    unblockSelector: r,
                                    mirror: i,
                                    sampling: s,
                                    doc: a
                                }) {
                let o = an(a => sB(an(s => {
                        let o = as(s);
                        if (!o || sV(o, t, n, r, !0)) return;
                        let {currentTime: l, volume: c, muted: u, playbackRate: h} = o;
                        e({type: a, id: i.getId(o), currentTime: l, volume: c, muted: u, playbackRate: h})
                    }), s.media || 500)),
                    l = [sL("play", o(0), a), sL("pause", o(1), a), sL("seeked", o(2), a), sL("volumechange", o(3), a), sL("ratechange", o(4), a)];
                return an(() => {
                    l.forEach(e => e())
                })
            }(e), u = function ({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
                let i, s;
                if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {
                };
                let a = r.CSSStyleSheet.prototype.insertRule;
                r.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
                    apply: an((r, i, s) => {
                        let [a, o] = s, {id: l, styleId: c} = ah(i, t, n.styleMirror);
                        return (l && -1 !== l || c && -1 !== c) && e({
                            id: l,
                            styleId: c,
                            adds: [{rule: a, index: o}]
                        }), r.apply(i, s)
                    })
                });
                let o = r.CSSStyleSheet.prototype.deleteRule;
                r.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
                    apply: an((r, i, s) => {
                        let [a] = s, {id: o, styleId: l} = ah(i, t, n.styleMirror);
                        return (o && -1 !== o || l && -1 !== l) && e({
                            id: o,
                            styleId: l,
                            removes: [{index: a}]
                        }), r.apply(i, s)
                    })
                }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                    apply: an((r, i, s) => {
                        let [a] = s, {id: o, styleId: l} = ah(i, t, n.styleMirror);
                        return (o && -1 !== o || l && -1 !== l) && e({id: o, styleId: l, replace: a}), r.apply(i, s)
                    })
                })), r.CSSStyleSheet.prototype.replaceSync && (s = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
                    apply: an((r, i, s) => {
                        let [a] = s, {id: o, styleId: l} = ah(i, t, n.styleMirror);
                        return (o && -1 !== o || l && -1 !== l) && e({id: o, styleId: l, replaceSync: a}), r.apply(i, s)
                    })
                }));
                let l = {};
                am("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (am("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule), am("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule), am("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
                let c = {};
                return Object.entries(l).forEach(([r, i]) => {
                    c[r] = {
                        insertRule: i.prototype.insertRule,
                        deleteRule: i.prototype.deleteRule
                    }, i.prototype.insertRule = new Proxy(c[r].insertRule, {
                        apply: an((r, i, s) => {
                            let [a, o] = s, {id: l, styleId: c} = ah(i.parentStyleSheet, t, n.styleMirror);
                            return (l && -1 !== l || c && -1 !== c) && e({
                                id: l,
                                styleId: c,
                                adds: [{rule: a, index: [...au(i), o || 0]}]
                            }), r.apply(i, s)
                        })
                    }), i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                        apply: an((r, i, s) => {
                            let [a] = s, {id: o, styleId: l} = ah(i.parentStyleSheet, t, n.styleMirror);
                            return (o && -1 !== o || l && -1 !== l) && e({
                                id: o,
                                styleId: l,
                                removes: [{index: [...au(i), a]}]
                            }), r.apply(i, s)
                        })
                    })
                }), an(() => {
                    r.CSSStyleSheet.prototype.insertRule = a, r.CSSStyleSheet.prototype.deleteRule = o, i && (r.CSSStyleSheet.prototype.replace = i), s && (r.CSSStyleSheet.prototype.replaceSync = s), Object.entries(l).forEach(([e, t]) => {
                        t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
                    })
                })
            }(e, {win: n}), h = ad(e, e.doc), d = function ({
                                                                styleDeclarationCb: e,
                                                                mirror: t,
                                                                ignoreCSSAttributes: n,
                                                                stylesheetManager: r
                                                            }, {win: i}) {
                let s = i.CSSStyleDeclaration.prototype.setProperty;
                i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                    apply: an((i, a, o) => {
                        let [l, c, u] = o;
                        if (n.has(l)) return s.apply(a, [l, c, u]);
                        let {
                            id: h,
                            styleId: d
                        } = ah(ar([a, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, r.styleMirror);
                        return (h && -1 !== h || d && -1 !== d) && e({
                            id: h,
                            styleId: d,
                            set: {property: l, value: c, priority: u},
                            index: au(a.parentRule)
                        }), i.apply(a, o)
                    })
                });
                let a = i.CSSStyleDeclaration.prototype.removeProperty;
                return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a, {
                    apply: an((i, s, o) => {
                        let [l] = o;
                        if (n.has(l)) return a.apply(s, [l]);
                        let {
                            id: c,
                            styleId: u
                        } = ah(ar([s, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, r.styleMirror);
                        return (c && -1 !== c || u && -1 !== u) && e({
                            id: c,
                            styleId: u,
                            remove: {property: l},
                            index: au(s.parentRule)
                        }), i.apply(s, o)
                    })
                }), an(() => {
                    i.CSSStyleDeclaration.prototype.setProperty = s, i.CSSStyleDeclaration.prototype.removeProperty = a
                })
            }(e, {win: n}), p = e.collectFonts ? function ({fontCb: e, doc: t}) {
                let n = t.defaultView;
                if (!n) return () => {
                };
                let r = [], i = new WeakMap, s = n.FontFace;
                n.FontFace = function (e, t, n) {
                    let r = new s(e, t, n);
                    return i.set(r, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: n,
                        fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                    }), r
                };
                let a = sz(t.fonts, "add", function (t) {
                    return function (n) {
                        return setTimeout(an(() => {
                            let t = i.get(n);
                            t && (e(t), i.delete(n))
                        }), 0), t.apply(this, [n])
                    }
                });
                return r.push(() => {
                    n.FontFace = s
                }), r.push(a), an(() => {
                    r.forEach(e => e())
                })
            }(e) : () => {
            }, f = function (e) {
                let {doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: s, selectionCb: a} = e,
                    o = !0, l = an(() => {
                        let e = t.getSelection();
                        if (!e || o && ar([e, "optionalAccess", e => e.isCollapsed])) return;
                        o = e.isCollapsed || !1;
                        let l = [], c = e.rangeCount || 0;
                        for (let t = 0; t < c; t++) {
                            let {startContainer: a, startOffset: o, endContainer: c, endOffset: u} = e.getRangeAt(t);
                            sV(a, r, i, s, !0) || sV(c, r, i, s, !0) || l.push({
                                start: n.getId(a),
                                startOffset: o,
                                end: n.getId(c),
                                endOffset: u
                            })
                        }
                        a({ranges: l})
                    });
                return l(), sL("selectionchange", l)
            }(e), m = function ({doc: e, customElementCb: t}) {
                let n = e.defaultView;
                return n && n.customElements ? sz(n.customElements, "define", function (e) {
                    return function (n, r, i) {
                        try {
                            t({define: {name: n}})
                        } catch (e) {
                        }
                        return e.apply(this, [n, r, i])
                    }
                }) : () => {
                }
            }(e), g = [];
            for (let t of e.plugins) g.push(t.observer(t.callback, n, t.options));
            return an(() => {
                ai.forEach(e => e.reset()), r.disconnect(), i(), s(), a(), o(), l(), c(), u(), h(), d(), p(), f(), m(), g.forEach(e => e())
            })
        }

        function af(e) {
            return void 0 !== window[e]
        }

        function am(e) {
            return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
        }

        class ag {
            constructor(e) {
                this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
            }

            getId(e, t, n, r) {
                let i = n || this.getIdToRemoteIdMap(e), s = r || this.getRemoteIdToIdMap(e), a = i.get(t);
                return a || (a = this.generateIdFn(), i.set(t, a), s.set(a, t)), a
            }

            getIds(e, t) {
                let n = this.getIdToRemoteIdMap(e), r = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getId(e, t, n, r))
            }

            getRemoteId(e, t, n) {
                let r = n || this.getRemoteIdToIdMap(e);
                return "number" != typeof t ? t : r.get(t) || -1
            }

            getRemoteIds(e, t) {
                let n = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getRemoteId(e, t, n))
            }

            reset(e) {
                if (!e) {
                    this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                    return
                }
                this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
            }

            getIdToRemoteIdMap(e) {
                let t = this.iframeIdToRemoteIdMap.get(e);
                return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
            }

            getRemoteIdToIdMap(e) {
                let t = this.iframeRemoteIdToIdMap.get(e);
                return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
            }
        }

        function ay(e) {
            let t;
            let n = e[0], r = 1;
            for (; r < e.length;) {
                let i = e[r], s = e[r + 1];
                if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                "access" === i || "optionalAccess" === i ? (t = n, n = s(n)) : ("call" === i || "optionalCall" === i) && (n = s((...e) => n.call(t, ...e)), t = void 0)
            }
            return n
        }

        class av {
            constructor() {
                this.crossOriginIframeMirror = new ag(sb), this.crossOriginIframeRootIdMap = new WeakMap
            }

            addIframe() {
            }

            addLoadListener() {
            }

            attachIframe() {
            }
        }

        class a_ {
            constructor(e) {
                this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new ag(sb), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new ag(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
            }

            addIframe(e) {
                this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
            }

            addLoadListener(e) {
                this.loadListener = e
            }

            attachIframe(e, t) {
                this.mutationCb({
                    adds: [{parentId: this.mirror.getId(e), nextId: null, node: t}],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }), ay([this, "access", e => e.loadListener, "optionalCall", t => t(e)]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
            }

            handleMessage(e) {
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
                let t = this.crossOriginIframeMap.get(e.source);
                if (!t) return;
                let n = this.transformCrossOriginEvent(t, e.data.event);
                n && this.wrappedEmit(n, e.data.isCheckout)
            }

            transformCrossOriginEvent(e, t) {
                switch (t.type) {
                    case s2.FullSnapshot: {
                        this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
                        let n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
                            timestamp: t.timestamp,
                            type: s2.IncrementalSnapshot,
                            data: {
                                source: s3.Mutation,
                                adds: [{parentId: this.mirror.getId(e), nextId: null, node: t.data.node}],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                    case s2.Meta:
                    case s2.Load:
                    case s2.DomContentLoaded:
                        break;
                    case s2.Plugin:
                        return t;
                    case s2.Custom:
                        return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                    case s2.IncrementalSnapshot:
                        switch (t.data.source) {
                            case s3.Mutation:
                                return t.data.adds.forEach(t => {
                                    this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                    let n = this.crossOriginIframeRootIdMap.get(e);
                                    n && this.patchRootIdOnNode(t.node, n)
                                }), t.data.removes.forEach(t => {
                                    this.replaceIds(t, e, ["parentId", "id"])
                                }), t.data.attributes.forEach(t => {
                                    this.replaceIds(t, e, ["id"])
                                }), t.data.texts.forEach(t => {
                                    this.replaceIds(t, e, ["id"])
                                }), t;
                            case s3.Drag:
                            case s3.TouchMove:
                            case s3.MouseMove:
                                return t.data.positions.forEach(t => {
                                    this.replaceIds(t, e, ["id"])
                                }), t;
                            case s3.ViewportResize:
                                return !1;
                            case s3.MediaInteraction:
                            case s3.MouseInteraction:
                            case s3.Scroll:
                            case s3.CanvasMutation:
                            case s3.Input:
                                return this.replaceIds(t.data, e, ["id"]), t;
                            case s3.StyleSheetRule:
                            case s3.StyleDeclaration:
                                return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                            case s3.Font:
                                return t;
                            case s3.Selection:
                                return t.data.ranges.forEach(t => {
                                    this.replaceIds(t, e, ["start", "end"])
                                }), t;
                            case s3.AdoptedStyleSheet:
                                return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), ay([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                                    this.replaceStyleIds(t, e, ["styleId"])
                                })]), t
                        }
                }
                return !1
            }

            replace(e, t, n, r) {
                for (let i of r) (Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
                return t
            }

            replaceIds(e, t, n) {
                return this.replace(this.crossOriginIframeMirror, e, t, n)
            }

            replaceStyleIds(e, t, n) {
                return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
            }

            replaceIdOnNode(e, t) {
                this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                    this.replaceIdOnNode(e, t)
                })
            }

            patchRootIdOnNode(e, t) {
                e.type === N.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                    this.patchRootIdOnNode(e, t)
                })
            }
        }

        class ab {
            init() {
            }

            addShadowRoot() {
            }

            observeAttachShadow() {
            }

            reset() {
            }
        }

        class aw {
            constructor(e) {
                this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
            }

            init() {
                this.reset(), this.patchAttachShadow(Element, document)
            }

            addShadowRoot(e, t) {
                if (!so(e) || this.shadowDoms.has(e)) return;
                this.shadowDoms.add(e);
                let n = aa({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(ao({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })), setTimeout(() => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(ad({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }, 0)
            }

            observeAttachShadow(e) {
                e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
            }

            patchAttachShadow(e, t) {
                let n = this;
                this.restoreHandlers.push(sz(e.prototype, "attachShadow", function (e) {
                    return function (r) {
                        let i = e.call(this, r);
                        return this.shadowRoot && s1(this) && n.addShadowRoot(this.shadowRoot, t), i
                    }
                }))
            }

            reset() {
                this.restoreHandlers.forEach(e => {
                    try {
                        e()
                    } catch (e) {
                    }
                }), this.restoreHandlers = [], this.shadowDoms = new WeakSet
            }
        }

        class aS {
            reset() {
            }

            freeze() {
            }

            unfreeze() {
            }

            lock() {
            }

            unlock() {
            }

            snapshot() {
            }
        }

        class aE {
            constructor(e) {
                this.trackedLinkElements = new WeakSet, this.styleMirror = new sQ, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
            }

            attachLinkElement(e, t) {
                "_cssText" in t.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{id: t.id, attributes: t.attributes}]
                }), this.trackLinkElement(e)
            }

            trackLinkElement(e) {
                this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
            }

            adoptStyleSheets(e, t) {
                if (0 === e.length) return;
                let n = {id: t, styleIds: []}, r = [];
                for (let t of e) {
                    let e;
                    this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                        styleId: e,
                        rules: Array.from(t.rules || CSSRule, (e, t) => ({rule: sc(e), index: t}))
                    })), n.styleIds.push(e)
                }
                r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
            }

            reset() {
                this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
            }

            trackStylesheetInLinkElement(e) {
            }
        }

        class ak {
            constructor() {
                this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
            }

            periodicallyClear() {
                !function (...e) {
                    (function () {
                        if (_) return _;
                        let e = window.document, t = window.requestAnimationFrame;
                        if (e && "function" == typeof e.createElement) try {
                            let n = e.createElement("iframe");
                            n.hidden = !0, e.head.appendChild(n);
                            let r = n.contentWindow;
                            r && r.requestAnimationFrame && (t = r.requestAnimationFrame), e.head.removeChild(n)
                        } catch (e) {
                        }
                        return _ = t.bind(window)
                    })()(...e)
                }(() => {
                    this.clear(), this.loop && this.periodicallyClear()
                })
            }

            inOtherBuffer(e, t) {
                let n = this.nodeMap.get(e);
                return n && Array.from(n).some(e => e !== t)
            }

            add(e, t) {
                this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
            }

            clear() {
                this.nodeMap = new WeakMap
            }

            destroy() {
                this.loop = !1
            }
        }

        function aT(e) {
            return e.timestamp = sH(), e
        }

        let ax = new su;

        function aC(e = {}) {
            let t;
            let {
                emit: n,
                checkoutEveryNms: r,
                checkoutEveryNth: i,
                blockClass: s = "rr-block",
                blockSelector: a = null,
                unblockSelector: o = null,
                ignoreClass: l = "rr-ignore",
                ignoreSelector: c = null,
                maskAllText: u = !1,
                maskTextClass: h = "rr-mask",
                unmaskTextClass: d = null,
                maskTextSelector: p = null,
                unmaskTextSelector: f = null,
                inlineStylesheet: m = !0,
                maskAllInputs: g,
                maskInputOptions: y,
                slimDOMOptions: v,
                maskAttributeFn: _,
                maskInputFn: S,
                maskTextFn: E,
                packFn: k,
                sampling: T = {},
                dataURLOptions: x = {},
                mousemoveWait: C,
                recordCanvas: I = !1,
                recordCrossOriginIframes: O = !1,
                recordAfter: R = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
                userTriggeredOnInput: A = !1,
                collectFonts: $ = !1,
                inlineImages: P = !1,
                plugins: j,
                keepIframeSrcFn: M = () => !1,
                ignoreCSSAttributes: N = new Set([]),
                errorHandler: D,
                onMutation: L,
                getCanvasManager: F
            } = e;
            b = D;
            let U = !O || window.parent === window, B = !1;
            if (!U) try {
                window.parent.document && (B = !1)
            } catch (e) {
                B = !0
            }
            if (U && !n) throw Error("emit function is required");
            void 0 !== C && void 0 === T.mousemove && (T.mousemove = C), ax.reset();
            let z = !0 === g ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== y ? y : {}, H = !0 === v || "all" === v ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === v,
                headMetaDescKeywords: "all" === v
            } : v || {};
            !function (e = window) {
                "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                    let t = e[0];
                    if (!(0 in e)) throw TypeError("1 argument is required");
                    do if (this === t) return !0; while (t = t && t.parentNode);
                    return !1
                })
            }();
            let q = 0, W = e => {
                    for (let t of j || []) t.eventProcessor && (e = t.eventProcessor(e));
                    return k && !B && (e = k(e)), e
                }, G = (e, s) => {
                    if (rv([ai, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && e.type !== s2.FullSnapshot && !(e.type === s2.IncrementalSnapshot && e.data.source === s3.Mutation) && ai.forEach(e => e.unfreeze()), U) rv([n, "optionalCall", t => t(W(e), s)]); else if (B) {
                        let t = {type: "rrweb", event: W(e), origin: window.location.origin, isCheckout: s};
                        window.parent.postMessage(t, "*")
                    }
                    if (e.type === s2.FullSnapshot) t = e, q = 0; else if (e.type === s2.IncrementalSnapshot) {
                        if (e.data.source === s3.Mutation && e.data.isAttachIframe) return;
                        q++;
                        let n = i && q >= i, s = r && e.timestamp - t.timestamp > r;
                        (n || s) && et(!0)
                    }
                }, V = e => {
                    G(aT({type: s2.IncrementalSnapshot, data: {source: s3.Mutation, ...e}}))
                }, J = e => G(aT({type: s2.IncrementalSnapshot, data: {source: s3.Scroll, ...e}})),
                K = e => G(aT({type: s2.IncrementalSnapshot, data: {source: s3.CanvasMutation, ...e}})), Y = new aE({
                    mutationCb: V,
                    adoptedStyleSheetCb: e => G(aT({
                        type: s2.IncrementalSnapshot,
                        data: {source: s3.AdoptedStyleSheet, ...e}
                    }))
                }), X = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new av : new a_({
                    mirror: ax,
                    mutationCb: V,
                    stylesheetManager: Y,
                    recordCrossOriginIframes: O,
                    wrappedEmit: G
                });
            for (let e of j || []) e.getMirror && e.getMirror({
                nodeMirror: ax,
                crossOriginIframeMirror: X.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: X.crossOriginIframeStyleMirror
            });
            let Z = new ak, Q = function (e, t) {
                    try {
                        return e ? e(t) : new aS
                    } catch (e) {
                        return console.warn("Unable to initialize CanvasManager"), new aS
                    }
                }(F, {
                    mirror: ax,
                    win: window,
                    mutationCb: e => G(aT({type: s2.IncrementalSnapshot, data: {source: s3.CanvasMutation, ...e}})),
                    recordCanvas: I,
                    blockClass: s,
                    blockSelector: a,
                    unblockSelector: o,
                    sampling: T.canvas,
                    dataURLOptions: x,
                    errorHandler: D
                }),
                ee = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new ab : new aw({
                    mutationCb: V,
                    scrollCb: J,
                    bypassOptions: {
                        onMutation: L,
                        blockClass: s,
                        blockSelector: a,
                        unblockSelector: o,
                        maskAllText: u,
                        maskTextClass: h,
                        unmaskTextClass: d,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        inlineStylesheet: m,
                        maskInputOptions: z,
                        dataURLOptions: x,
                        maskAttributeFn: _,
                        maskTextFn: E,
                        maskInputFn: S,
                        recordCanvas: I,
                        inlineImages: P,
                        sampling: T,
                        slimDOMOptions: H,
                        iframeManager: X,
                        stylesheetManager: Y,
                        canvasManager: Q,
                        keepIframeSrcFn: M,
                        processedNodeManager: Z
                    },
                    mirror: ax
                }), et = (e = !1) => {
                    G(aT({
                        type: s2.Meta,
                        data: {href: window.location.href, width: sG(), height: sW()}
                    }), e), Y.reset(), ee.init(), ai.forEach(e => e.lock());
                    let t = function (e, t) {
                        let {
                            mirror: n = new su,
                            blockClass: r = "rr-block",
                            blockSelector: i = null,
                            unblockSelector: s = null,
                            maskAllText: a = !1,
                            maskTextClass: o = "rr-mask",
                            unmaskTextClass: l = null,
                            maskTextSelector: c = null,
                            unmaskTextSelector: u = null,
                            inlineStylesheet: h = !0,
                            inlineImages: d = !1,
                            recordCanvas: p = !1,
                            maskAllInputs: f = !1,
                            maskAttributeFn: m,
                            maskTextFn: g,
                            maskInputFn: y,
                            slimDOM: v = !1,
                            dataURLOptions: _,
                            preserveWhiteSpace: b,
                            onSerialize: w,
                            onIframeLoad: S,
                            iframeLoadTimeout: E,
                            onStylesheetLoad: k,
                            stylesheetLoadTimeout: T,
                            keepIframeSrcFn: x = () => !1
                        } = t || {};
                        return sN(e, {
                            doc: e,
                            mirror: n,
                            blockClass: r,
                            blockSelector: i,
                            unblockSelector: s,
                            maskAllText: a,
                            maskTextClass: o,
                            unmaskTextClass: l,
                            maskTextSelector: c,
                            unmaskTextSelector: u,
                            skipChild: !1,
                            inlineStylesheet: h,
                            maskInputOptions: !0 === f ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0
                            } : !1 === f ? {} : f,
                            maskAttributeFn: m,
                            maskTextFn: g,
                            maskInputFn: y,
                            slimDOMOptions: !0 === v || "all" === v ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === v,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === v ? {} : v,
                            dataURLOptions: _,
                            inlineImages: d,
                            recordCanvas: p,
                            preserveWhiteSpace: b,
                            onSerialize: w,
                            onIframeLoad: S,
                            iframeLoadTimeout: E,
                            onStylesheetLoad: k,
                            stylesheetLoadTimeout: T,
                            keepIframeSrcFn: x,
                            newlyAddedElement: !1
                        })
                    }(document, {
                        mirror: ax,
                        blockClass: s,
                        blockSelector: a,
                        unblockSelector: o,
                        maskAllText: u,
                        maskTextClass: h,
                        unmaskTextClass: d,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        inlineStylesheet: m,
                        maskAllInputs: z,
                        maskAttributeFn: _,
                        maskInputFn: S,
                        maskTextFn: E,
                        slimDOM: H,
                        dataURLOptions: x,
                        recordCanvas: I,
                        inlineImages: P,
                        onSerialize: e => {
                            sY(e, ax) && X.addIframe(e), sX(e, ax) && Y.trackLinkElement(e), sZ(e) && ee.addShadowRoot(e.shadowRoot, document)
                        },
                        onIframeLoad: (e, t) => {
                            X.attachIframe(e, t), ee.observeAttachShadow(e)
                        },
                        onStylesheetLoad: (e, t) => {
                            Y.attachLinkElement(e, t)
                        },
                        keepIframeSrcFn: M
                    });
                    if (!t) return console.warn("Failed to snapshot the document");
                    G(aT({
                        type: s2.FullSnapshot,
                        data: {node: t, initialOffset: sq(window)}
                    })), ai.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Y.adoptStyleSheets(document.adoptedStyleSheets, ax.getId(document))
                };
            w = et;
            try {
                let e = [], t = e => an(ap)({
                    onMutation: L,
                    mutationCb: V,
                    mousemoveCb: (e, t) => G(aT({type: s2.IncrementalSnapshot, data: {source: t, positions: e}})),
                    mouseInteractionCb: e => G(aT({
                        type: s2.IncrementalSnapshot,
                        data: {source: s3.MouseInteraction, ...e}
                    })),
                    scrollCb: J,
                    viewportResizeCb: e => G(aT({
                        type: s2.IncrementalSnapshot,
                        data: {source: s3.ViewportResize, ...e}
                    })),
                    inputCb: e => G(aT({type: s2.IncrementalSnapshot, data: {source: s3.Input, ...e}})),
                    mediaInteractionCb: e => G(aT({
                        type: s2.IncrementalSnapshot,
                        data: {source: s3.MediaInteraction, ...e}
                    })),
                    styleSheetRuleCb: e => G(aT({
                        type: s2.IncrementalSnapshot,
                        data: {source: s3.StyleSheetRule, ...e}
                    })),
                    styleDeclarationCb: e => G(aT({
                        type: s2.IncrementalSnapshot,
                        data: {source: s3.StyleDeclaration, ...e}
                    })),
                    canvasMutationCb: K,
                    fontCb: e => G(aT({type: s2.IncrementalSnapshot, data: {source: s3.Font, ...e}})),
                    selectionCb: e => {
                        G(aT({type: s2.IncrementalSnapshot, data: {source: s3.Selection, ...e}}))
                    },
                    customElementCb: e => {
                        G(aT({type: s2.IncrementalSnapshot, data: {source: s3.CustomElement, ...e}}))
                    },
                    blockClass: s,
                    ignoreClass: l,
                    ignoreSelector: c,
                    maskAllText: u,
                    maskTextClass: h,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: f,
                    maskInputOptions: z,
                    inlineStylesheet: m,
                    sampling: T,
                    recordCanvas: I,
                    inlineImages: P,
                    userTriggeredOnInput: A,
                    collectFonts: $,
                    doc: e,
                    maskAttributeFn: _,
                    maskInputFn: S,
                    maskTextFn: E,
                    keepIframeSrcFn: M,
                    blockSelector: a,
                    unblockSelector: o,
                    slimDOMOptions: H,
                    dataURLOptions: x,
                    mirror: ax,
                    iframeManager: X,
                    stylesheetManager: Y,
                    shadowDomManager: ee,
                    processedNodeManager: Z,
                    canvasManager: Q,
                    ignoreCSSAttributes: N,
                    plugins: rv([j, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => G(aT({type: s2.Plugin, data: {plugin: e.name, payload: t}}))
                    }))]) || []
                }, {});
                X.addLoadListener(n => {
                    try {
                        e.push(t(n.contentDocument))
                    } catch (e) {
                        console.warn(e)
                    }
                });
                let n = () => {
                    et(), e.push(t(document))
                };
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(sL("DOMContentLoaded", () => {
                    G(aT({type: s2.DomContentLoaded, data: {}})), "DOMContentLoaded" === R && n()
                })), e.push(sL("load", () => {
                    G(aT({type: s2.Load, data: {}})), "load" === R && n()
                }, window))), () => {
                    e.forEach(e => e()), Z.destroy(), w = void 0, b = void 0
                }
            } catch (e) {
                console.warn(e)
            }
        }

        function aI(e) {
            return e > 9999999999 ? e : 1e3 * e
        }

        function aO(e) {
            return e > 9999999999 ? e / 1e3 : e
        }

        function aR(e, t) {
            "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
                type: s2.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: {tag: "breadcrumb", payload: tm(t, 10, 1e3)}
            }), "console" === t.category)))
        }

        function aA(e) {
            return e.closest("button,a") || e
        }

        function a$(e) {
            let t = aP(e);
            return t && t instanceof Element ? aA(t) : t
        }

        function aP(e) {
            return "object" == typeof e && e && "target" in e ? e.target : e
        }

        aC.mirror = ax, aC.takeFullSnapshot = function (e) {
            if (!w) throw Error("please take full snapshot after start recording");
            w(e)
        };

        class aj {
            constructor(e, t, n = aR) {
                this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
            }

            addListeners() {
                var e;
                let t = (e = () => {
                    this._lastMutation = aN()
                }, S || (S = [], eg(H, "open", function (e) {
                    return function (...t) {
                        if (S) try {
                            S.forEach(e => e())
                        } catch (e) {
                        }
                        return e.apply(H, t)
                    }
                })), S.push(e), () => {
                    let t = S ? S.indexOf(e) : -1;
                    t > -1 && S.splice(t, 1)
                });
                this._teardown = () => {
                    t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                }
            }

            removeListeners() {
                this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
            }

            handleClick(e, t) {
                var n;
                if (n = this._ignoreSelector, !aM.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || n && t.matches(n) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp)) return;
                let r = {timestamp: aO(e.timestamp), clickBreadcrumb: e, clickCount: 0, node: t};
                this._clicks.some(e => e.node === r.node && 1 > Math.abs(e.timestamp - r.timestamp)) || (this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks())
            }

            registerMutation(e = Date.now()) {
                this._lastMutation = aO(e)
            }

            registerScroll(e = Date.now()) {
                this._lastScroll = aO(e)
            }

            registerClick(e) {
                let t = aA(e);
                this._handleMultiClick(t)
            }

            _handleMultiClick(e) {
                this._getClicks(e).forEach(e => {
                    e.clickCount++
                })
            }

            _getClicks(e) {
                return this._clicks.filter(t => t.node === e)
            }

            _checkClicks() {
                let e = [], t = aN();
                for (let n of (this._clicks.forEach(n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
                }), e)) {
                    let e = this._clicks.indexOf(n);
                    e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1))
                }
                this._clicks.length && this._scheduleCheckClicks()
            }

            _generateBreadcrumbs(e) {
                let t = this._replay, n = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
                    r = e.mutationAfter && e.mutationAfter <= this._threshold, {clickCount: i, clickBreadcrumb: s} = e;
                if (!n && !r) {
                    let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                        r = n < 1e3 * this._timeout ? "mutation" : "timeout", a = {
                            type: "default",
                            message: s.message,
                            timestamp: s.timestamp,
                            category: "ui.slowClickDetected",
                            data: {
                                ...s.data,
                                url: H.location.href,
                                route: t.getCurrentRoute(),
                                timeAfterClickMs: n,
                                endReason: r,
                                clickCount: i || 1
                            }
                        };
                    this._addBreadcrumbEvent(t, a);
                    return
                }
                if (i > 1) {
                    let e = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.multiClick",
                        data: {...s.data, url: H.location.href, route: t.getCurrentRoute(), clickCount: i, metric: !0}
                    };
                    this._addBreadcrumbEvent(t, e)
                }
            }

            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
            }
        }

        let aM = ["A", "BUTTON", "INPUT"];

        function aN() {
            return Date.now() / 1e3
        }

        function aD(e) {
            return {timestamp: Date.now() / 1e3, type: "default", ...e}
        }

        (P = D || (D = {}))[P.Document = 0] = "Document", P[P.DocumentType = 1] = "DocumentType", P[P.Element = 2] = "Element", P[P.Text = 3] = "Text", P[P.CDATA = 4] = "CDATA", P[P.Comment = 5] = "Comment";
        let aL = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]),
            aF = e => t => {
                if (!e.isEnabled()) return;
                let n = function (e) {
                    let {target: t, message: n} = function (e) {
                        let t;
                        let n = "click" === e.name, r = null;
                        try {
                            r = n ? a$(e.event) : aP(e.event), t = ea(r, {maxStringLength: 200}) || "<unknown>"
                        } catch (e) {
                            t = "<unknown>"
                        }
                        return {target: r, message: t}
                    }(e);
                    return aD({category: `ui.${e.name}`, ...aU(t, n)})
                }(t);
                if (!n) return;
                let r = "click" === t.name, i = r ? t.event : void 0;
                r && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && function (e, t, n) {
                    e.handleClick(t, n)
                }(e.clickDetector, n, a$(t.event)), aR(e, n)
            };

        function aU(e, t) {
            let n = aC.mirror.getId(e), r = n && aC.mirror.getNode(n), i = r && aC.mirror.getMeta(r),
                s = i && i.type === D.Element ? i : null;
            return {
                message: t,
                data: s ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: s.tagName,
                        textContent: Array.from(s.childNodes).map(e => e.type === D.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                        attributes: function (e) {
                            let t = {};
                            for (let n in e) if (aL.has(n)) {
                                let r = n;
                                ("data-testid" === n || "data-test-id" === n) && (r = "testId"), t[r] = e[n]
                            }
                            return t
                        }(s.attributes)
                    }
                } : {}
            }
        }

        let aB = {
            resource: function (e) {
                let {
                    entryType: t,
                    initiatorType: n,
                    name: r,
                    responseEnd: i,
                    startTime: s,
                    decodedBodySize: a,
                    encodedBodySize: o,
                    responseStatus: l,
                    transferSize: c
                } = e;
                return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                    type: `${t}.${n}`,
                    start: aH(s),
                    end: aH(i),
                    name: r,
                    data: {size: c, statusCode: l, decodedBodySize: a, encodedBodySize: o}
                }
            }, paint: function (e) {
                let {duration: t, entryType: n, name: r, startTime: i} = e, s = aH(i);
                return {type: n, name: r, start: s, end: s + t, data: void 0}
            }, navigation: function (e) {
                let {
                    entryType: t,
                    name: n,
                    decodedBodySize: r,
                    duration: i,
                    domComplete: s,
                    encodedBodySize: a,
                    domContentLoadedEventStart: o,
                    domContentLoadedEventEnd: l,
                    domInteractive: c,
                    loadEventStart: u,
                    loadEventEnd: h,
                    redirectCount: d,
                    startTime: p,
                    transferSize: f,
                    type: m
                } = e;
                return 0 === i ? null : {
                    type: `${t}.${m}`,
                    start: aH(p),
                    end: aH(s),
                    name: n,
                    data: {
                        size: f,
                        decodedBodySize: r,
                        encodedBodySize: a,
                        duration: i,
                        domInteractive: c,
                        domContentLoadedEventStart: o,
                        domContentLoadedEventEnd: l,
                        loadEventStart: u,
                        loadEventEnd: h,
                        domComplete: s,
                        redirectCount: d
                    }
                }
            }
        };

        function az(e) {
            return aB[e.entryType] ? aB[e.entryType](e) : null
        }

        function aH(e) {
            return ((e$ || H.performance.timeOrigin) + e) / 1e3
        }

        class aq extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.")
            }
        }

        class aW {
            constructor() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1
            }

            get hasEvents() {
                return this.events.length > 0
            }

            get type() {
                return "sync"
            }

            destroy() {
                this.events = []
            }

            async addEvent(e) {
                let t = JSON.stringify(e).length;
                if (this._totalSize += t, this._totalSize > 2e7) throw new aq;
                this.events.push(e)
            }

            finish() {
                return new Promise(e => {
                    let t = this.events;
                    this.clear(), e(JSON.stringify(t))
                })
            }

            clear() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1
            }

            getEarliestTimestamp() {
                let e = this.events.map(e => e.timestamp).sort()[0];
                return e ? aI(e) : null
            }
        }

        class aG {
            constructor(e) {
                this._worker = e, this._id = 0
            }

            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
                    this._worker.addEventListener("message", ({data: n}) => {
                        n.success ? e() : t()
                    }, {once: !0}), this._worker.addEventListener("error", e => {
                        t(e)
                    }, {once: !0})
                })), this._ensureReadyPromise
            }

            destroy() {
                this._worker.terminate()
            }

            postMessage(e, t) {
                let n = this._getAndIncrementId();
                return new Promise((r, i) => {
                    let s = ({data: t}) => {
                        if (t.method === e && t.id === n) {
                            if (this._worker.removeEventListener("message", s), !t.success) {
                                i(Error("Error in compression worker"));
                                return
                            }
                            r(t.response)
                        }
                    };
                    this._worker.addEventListener("message", s), this._worker.postMessage({id: n, method: e, arg: t})
                })
            }

            _getAndIncrementId() {
                return this._id++
            }
        }

        class aV {
            constructor(e) {
                this._worker = new aG(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
            }

            get hasEvents() {
                return !!this._earliestTimestamp
            }

            get type() {
                return "worker"
            }

            ensureReady() {
                return this._worker.ensureReady()
            }

            destroy() {
                this._worker.destroy()
            }

            addEvent(e) {
                let t = aI(e.timestamp);
                (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                let n = JSON.stringify(e);
                return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new aq) : this._sendEventToWorker(n)
            }

            finish() {
                return this._finishRequest()
            }

            clear() {
                this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {
                })
            }

            getEarliestTimestamp() {
                return this._earliestTimestamp
            }

            _sendEventToWorker(e) {
                return this._worker.postMessage("addEvent", e)
            }

            async _finishRequest() {
                let e = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null, this._totalSize = 0, e
            }
        }

        class aJ {
            constructor(e) {
                this._fallback = new aW, this._compression = new aV(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
            }

            get type() {
                return this._used.type
            }

            get hasEvents() {
                return this._used.hasEvents
            }

            get hasCheckout() {
                return this._used.hasCheckout
            }

            set hasCheckout(e) {
                this._used.hasCheckout = e
            }

            destroy() {
                this._fallback.destroy(), this._compression.destroy()
            }

            clear() {
                return this._used.clear()
            }

            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp()
            }

            addEvent(e) {
                return this._used.addEvent(e)
            }

            async finish() {
                return await this.ensureWorkerIsLoaded(), this._used.finish()
            }

            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise
            }

            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady()
                } catch (e) {
                    return
                }
                await this._switchToCompressionWorker()
            }

            async _switchToCompressionWorker() {
                let {events: e, hasCheckout: t} = this._fallback, n = [];
                for (let t of e) n.push(this._compression.addEvent(t));
                this._compression.hasCheckout = t, this._used = this._compression;
                try {
                    await Promise.all(n)
                } catch (e) {
                }
            }
        }

        function aK() {
            try {
                return "sessionStorage" in H && !!H.sessionStorage
            } catch (e) {
                return !1
            }
        }

        function aY(e) {
            return void 0 !== e && Math.random() < e
        }

        function aX(e) {
            let t = Date.now(), n = e.id || ek(), r = e.started || t, i = e.lastActivity || t;
            return {
                id: n,
                started: r,
                lastActivity: i,
                segmentId: e.segmentId || 0,
                sampled: e.sampled,
                previousSessionId: e.previousSessionId
            }
        }

        function aZ(e) {
            if (aK()) try {
                H.sessionStorage.setItem(sr, JSON.stringify(e))
            } catch (e) {
            }
        }

        function aQ({sessionSampleRate: e, allowBuffering: t, stickySession: n = !1}, {previousSessionId: r} = {}) {
            let i = aX({sampled: aY(e) ? "session" : !!t && "buffer", previousSessionId: r});
            return n && aZ(i), i
        }

        function a0(e, t, n = +new Date) {
            return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
        }

        function a1(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now()}) {
            return a0(e.started, t, r) || a0(e.lastActivity, n, r)
        }

        function a2(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
            return !!a1(e, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
        }

        function a3({traceInternals: e, sessionIdleExpire: t, maxReplayDuration: n, previousSessionId: r}, i) {
            let s = i.stickySession && function (e) {
                if (!aK()) return null;
                try {
                    let e = H.sessionStorage.getItem(sr);
                    if (!e) return null;
                    let t = JSON.parse(e);
                    return aX(t)
                } catch (e) {
                    return null
                }
            }(0);
            return s ? a2(s, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) ? aQ(i, {previousSessionId: s.id}) : s : aQ(i, {previousSessionId: r})
        }

        function a5(e, t, n) {
            return !!a9(e, t) && (a4(e, t, n), !0)
        }

        async function a4(e, t, n) {
            if (!e.eventBuffer) return null;
            try {
                n && "buffer" === e.recordingMode && e.eventBuffer.clear(), n && (e.eventBuffer.hasCheckout = !0);
                let r = e.getOptions(), i = function (e, t) {
                    try {
                        if ("function" == typeof t && e.type === s2.Custom) return t(e)
                    } catch (e) {
                        return null
                    }
                    return e
                }(t, r.beforeAddRecordingEvent);
                if (!i) return;
                return await e.eventBuffer.addEvent(i)
            } catch (n) {
                await e.stop({reason: n && n instanceof aq ? "addEventSizeExceeded" : "addEvent"});
                let t = tb();
                t && t.recordDroppedEvent("internal_sdk_error", "replay")
            }
        }

        function a9(e, t) {
            if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
            let n = aI(t.timestamp);
            return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (e.getOptions()._experiments.traceInternals, !1))
        }

        function a8(e) {
            return "transaction" === e.type
        }

        function a6(e) {
            return "feedback" === e.type
        }

        function a7(e) {
            let t = function () {
                let e = tb();
                if (!e) return !1;
                let t = e.getTransport();
                return !!t && (t.send.__sentry__baseTransport__ || !1)
            }();
            return (n, r) => {
                if (!e.isEnabled() || n.type && !a8(n)) return;
                let i = r && r.statusCode;
                if (!t || i && !(i < 200) && !(i >= 300)) {
                    if (a8(n)) {
                        !function (e, t) {
                            let n = e.getContext();
                            t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
                        }(e, n);
                        return
                    }
                    !function (e, t) {
                        let n = e.getContext();
                        if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                        let {beforeErrorSampling: r} = e.getOptions();
                        ("function" != typeof r || r(t)) && setTimeout(() => {
                            e.sendBufferedReplayOrFlush()
                        })
                    }(e, n)
                }
            }
        }

        function oe(e, t) {
            return t.map(({type: t, start: n, end: r, name: i, data: s}) => {
                let a = e.throttledAddEvent({
                    type: s2.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {op: t, description: i, startTimestamp: n, endTimestamp: r, data: s}
                    }
                });
                return "string" == typeof a ? Promise.resolve(null) : a
            })
        }

        function ot(e, t) {
            e.isEnabled() && null !== t && !function (e, t) {
                let n = t && void 0 !== t.getClient ? t.getClient() : t, r = n && n.getDsn(),
                    i = n && n.getOptions().tunnel;
                return !!r && e.includes(r.host) || !!i && se(e) === se(i)
            }(t.name, tb()) && e.addUpdate(() => (oe(e, [t]), !0))
        }

        function on(e, t) {
            if (e) try {
                if ("string" == typeof e) return t.encode(e).length;
                if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                if (e instanceof FormData) {
                    let n = ou(e);
                    return t.encode(n).length
                }
                if (e instanceof Blob) return e.size;
                if (e instanceof ArrayBuffer) return e.byteLength
            } catch (e) {
            }
        }

        function or(e) {
            if (!e) return;
            let t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }

        function oi(e) {
            try {
                if ("string" == typeof e) return [e];
                if (e instanceof URLSearchParams) return [e.toString()];
                if (e instanceof FormData) return [ou(e)];
                if (!e) return [void 0]
            } catch (e) {
                return [void 0, "BODY_PARSE_ERROR"]
            }
            return [void 0, "UNPARSEABLE_BODY_TYPE"]
        }

        function os(e, t) {
            if (!e) return {headers: {}, size: void 0, _meta: {warnings: [t]}};
            let n = {...e._meta}, r = n.warnings || [];
            return n.warnings = [...r, t], e._meta = n, e
        }

        function oa(e, t) {
            if (!t) return null;
            let {startTimestamp: n, endTimestamp: r, url: i, method: s, statusCode: a, request: o, response: l} = t;
            return {
                type: e,
                start: n / 1e3,
                end: r / 1e3,
                name: i,
                data: eE({method: s, statusCode: a, request: o, response: l})
            }
        }

        function oo(e) {
            return {headers: {}, size: e, _meta: {warnings: ["URL_SKIPPED"]}}
        }

        function ol(e, t, n) {
            if (!t && 0 === Object.keys(e).length) return;
            if (!t) return {headers: e};
            if (!n) return {headers: e, size: t};
            let r = {headers: e, size: t}, {body: i, warnings: s} = function (e) {
                if (!e || "string" != typeof e) return {body: e};
                let t = e.length > 15e4, n = function (e) {
                    let t = e[0], n = e[e.length - 1];
                    return "[" === t && "]" === n || "{" === t && "}" === n
                }(e);
                if (t) {
                    let t = e.slice(0, 15e4);
                    return n ? {body: t, warnings: ["MAYBE_JSON_TRUNCATED"]} : {
                        body: `${t}…`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (n) try {
                    return {body: JSON.parse(e)}
                } catch (e) {
                }
                return {body: e}
            }(n);
            return r.body = i, s && s.length > 0 && (r._meta = {warnings: s}), r
        }

        function oc(e, t) {
            return Object.keys(e).reduce((n, r) => {
                let i = r.toLowerCase();
                return t.includes(i) && e[r] && (n[i] = e[r]), n
            }, {})
        }

        function ou(e) {
            return new URLSearchParams(e).toString()
        }

        function oh(e, t = H.document.baseURI) {
            if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(H.location.origin)) return e;
            let n = new URL(e, t);
            if (n.origin !== new URL(t).origin) return e;
            let r = n.href;
            return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }

        async function od(e, t, n) {
            try {
                let r = await op(e, t, n), i = oa("resource.fetch", r);
                ot(n.replay, i)
            } catch (e) {
            }
        }

        async function op(e, t, n) {
            var r, i;
            let s = Date.now(), {startTimestamp: a = s, endTimestamp: o = s} = t, {
                    url: l,
                    method: c,
                    status_code: u = 0,
                    request_body_size: h,
                    response_body_size: d
                } = e.data,
                p = (r = n.networkDetailAllowUrls, em(oh(l), r) && (i = n.networkDetailDenyUrls, !em(oh(l), i)));
            return {
                startTimestamp: a,
                endTimestamp: o,
                url: l,
                method: c,
                statusCode: u,
                request: p ? function ({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
                    let i = n ? 1 === n.length && "string" != typeof n[0] ? ov(n[0], t) : 2 === n.length ? ov(n[1], t) : {} : {};
                    if (!e) return ol(i, r, void 0);
                    let [s, a] = oi(og(n)), o = ol(i, r, s);
                    return a ? os(o, a) : o
                }(n, t.input, h) : oo(h),
                response: await of(p, n, t.response, d)
            }
        }

        async function of(e, {networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r}, i, s) {
            if (!e && void 0 !== s) return oo(s);
            let a = i ? oy(i.headers, r) : {};
            if (!i || !t && void 0 !== s) return ol(a, s, void 0);
            let [o, l] = await om(i), c = function (e, {
                networkCaptureBodies: t,
                textEncoder: n,
                responseBodySize: r,
                captureDetails: i,
                headers: s
            }) {
                try {
                    let a = e && e.length && void 0 === r ? on(e, n) : r;
                    if (!i) return oo(a);
                    if (t) return ol(s, a, e);
                    return ol(s, a, void 0)
                } catch (e) {
                    return ol(s, r, void 0)
                }
            }(o, {networkCaptureBodies: t, textEncoder: n, responseBodySize: s, captureDetails: e, headers: a});
            return l ? os(c, l) : c
        }

        async function om(e) {
            let t = function (e) {
                try {
                    return e.clone()
                } catch (e) {
                }
            }(e);
            if (!t) return [void 0, "BODY_PARSE_ERROR"];
            try {
                return [await new Promise((e, n) => {
                    let r = setTimeout(() => n(Error("Timeout while trying to read response body")), 500);
                    o_(t).then(t => e(t), e => n(e)).finally(() => clearTimeout(r))
                })]
            } catch (e) {
                return [void 0, "BODY_PARSE_ERROR"]
            }
        }

        function og(e = []) {
            if (2 === e.length && "object" == typeof e[1]) return e[1].body
        }

        function oy(e, t) {
            let n = {};
            return t.forEach(t => {
                e.get(t) && (n[t] = e.get(t))
            }), n
        }

        function ov(e, t) {
            if (!e) return {};
            let n = e.headers;
            return n ? n instanceof Headers ? oy(n, t) : Array.isArray(n) ? {} : oc(n, t) : {}
        }

        async function o_(e) {
            return await e.text()
        }

        async function ob(e, t, n) {
            try {
                let r = function (e, t, n) {
                    var r, i;
                    let s = Date.now(), {startTimestamp: a = s, endTimestamp: o = s, input: l, xhr: c} = t, {
                        url: u,
                        method: h,
                        status_code: d = 0,
                        request_body_size: p,
                        response_body_size: f
                    } = e.data;
                    if (!u) return null;
                    if (!c || (r = n.networkDetailAllowUrls, !em(oh(u), r)) || (i = n.networkDetailDenyUrls, em(oh(u), i))) {
                        let e = oo(p);
                        return {
                            startTimestamp: a,
                            endTimestamp: o,
                            url: u,
                            method: h,
                            statusCode: d,
                            request: e,
                            response: oo(f)
                        }
                    }
                    let m = c[n_], g = m ? oc(m.request_headers, n.networkRequestHeaders) : {}, y = oc(function (e) {
                        let t = e.getAllResponseHeaders();
                        return t ? t.split("\r\n").reduce((e, t) => {
                            let [n, r] = t.split(": ");
                            return e[n.toLowerCase()] = r, e
                        }, {}) : {}
                    }(c), n.networkResponseHeaders), [v, _] = n.networkCaptureBodies ? oi(l) : [void 0], [b, w] = n.networkCaptureBodies ? function (e) {
                        let t = [];
                        try {
                            return [e.responseText]
                        } catch (e) {
                            t.push(e)
                        }
                        try {
                            return function (e, t) {
                                try {
                                    if ("string" == typeof e) return [e];
                                    if (e instanceof Document) return [e.body.outerHTML];
                                    if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                    if (!e) return [void 0]
                                } catch (e) {
                                    return [void 0, "BODY_PARSE_ERROR"]
                                }
                                return [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                        } catch (e) {
                            t.push(e)
                        }
                        return [void 0]
                    }(c) : [void 0], S = ol(g, p, v), E = ol(y, f, b);
                    return {
                        startTimestamp: a,
                        endTimestamp: o,
                        url: u,
                        method: h,
                        statusCode: d,
                        request: _ ? os(S, _) : S,
                        response: w ? os(E, w) : E
                    }
                }(e, t, n), i = oa("resource.xhr", r);
                ot(n.replay, i)
            } catch (e) {
            }
        }

        let ow = null, oS = e => t => {
            if (!e.isEnabled()) return;
            let n = function (e) {
                let t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                return ow !== t && t ? (ow = t, !t.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.")) ? null : "console" === t.category ? function (e) {
                    let t = e.data && e.data.arguments;
                    if (!Array.isArray(t) || 0 === t.length) return aD(e);
                    let n = !1, r = t.map(e => {
                        if (!e) return e;
                        if ("string" == typeof e) return e.length > 5e3 ? (n = !0, `${e.slice(0, 5e3)}…`) : e;
                        if ("object" == typeof e) try {
                            let t = tm(e, 7);
                            if (JSON.stringify(t).length > 5e3) return n = !0, `${JSON.stringify(t, null, 2).slice(0, 5e3)}…`;
                            return t
                        } catch (e) {
                        }
                        return e
                    });
                    return aD({
                        ...e,
                        data: {...e.data, arguments: r, ...n ? {_meta: {warnings: ["CONSOLE_ARG_TRUNCATED"]}} : {}}
                    })
                }(t) : aD(t) : null
            }(t);
            n && aR(e, n)
        };

        async function oE(e) {
            try {
                return Promise.all(oe(e, [function (e) {
                    let {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e, i = Date.now() / 1e3;
                    return {
                        type: "memory",
                        name: "memory",
                        start: i,
                        end: i,
                        data: {memory: {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r}}
                    }
                }(H.performance.memory)]))
            } catch (e) {
                return []
            }
        }

        async function ok({client: e, scope: t, replayId: n, event: r}) {
            let i = {
                event_id: n,
                integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
            };
            e.emit && e.emit("preprocessEvent", r, i);
            let s = await tg(e.getOptions(), r, i, t, e, to());
            if (!s) return null;
            s.platform = s.platform || "javascript";
            let a = e.getSdkMetadata && e.getSdkMetadata(), {name: o, version: l} = a && a.sdk || {};
            return s.sdk = {...s.sdk, name: o || "sentry.javascript.unknown", version: l || "0.0.0"}, s
        }

        async function oT({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: i, session: s}) {
            var a;
            let o;
            let l = function ({recordingData: e, headers: t}) {
                let n;
                let r = `${JSON.stringify(t)}
`;
                if ("string" == typeof e) n = `${r}${e}`; else {
                    let t = new TextEncoder().encode(r);
                    (n = new Uint8Array(t.length + e.length)).set(t), n.set(e, t.length)
                }
                return n
            }({recordingData: e, headers: {segment_id: n}}), {
                urls: c,
                errorIds: u,
                traceIds: h,
                initialTimestamp: d
            } = r, p = tb(), f = tw(), m = p && p.getTransport(), g = p && p.getDsn();
            if (!p || !m || !g || !s.sampled) return;
            let y = {
                type: "replay_event",
                replay_start_timestamp: d / 1e3,
                timestamp: i / 1e3,
                error_ids: u,
                trace_ids: h,
                urls: c,
                replay_id: t,
                segment_id: n,
                replay_type: s.sampled
            }, v = await ok({scope: f, client: p, replayId: t, event: y});
            if (!v) {
                p.recordDroppedEvent("event_processor", "replay", y);
                return
            }
            delete v.sdkProcessingMetadata;
            let _ = (a = p.getOptions().tunnel, n0(n4(v, n5(v), a, g), [[{type: "replay_event"}, v], [{
                type: "replay_recording",
                length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
            }, l]]));
            try {
                o = await m.send(_)
            } catch (t) {
                let e = Error(si);
                try {
                    e.cause = t
                } catch (e) {
                }
                throw e
            }
            if (!o) return o;
            if ("number" == typeof o.statusCode && (o.statusCode < 200 || o.statusCode >= 300)) throw new ox(o.statusCode);
            let b = rh({}, o);
            if (ru(b, "replay")) throw new oC(b);
            return o
        }

        class ox extends Error {
            constructor(e) {
                super(`Transport returned status code ${e}`)
            }
        }

        class oC extends Error {
            constructor(e) {
                super("Rate limit hit"), this.rateLimits = e
            }
        }

        async function oI(e, t = {count: 0, interval: 5e3}) {
            let {recordingData: n, options: r} = e;
            if (n.length) try {
                return await oT(e), !0
            } catch (n) {
                var i, s;
                if (n instanceof ox || n instanceof oC) throw n;
                if (i = "Replays", s = {_retryCount: t.count}, ta().setContext(i, s), t.count >= 3) {
                    let e = Error(`${si} - max retries exceeded`);
                    try {
                        e.cause = n
                    } catch (e) {
                    }
                    throw e
                }
                return t.interval *= ++t.count, new Promise((n, r) => {
                    setTimeout(async () => {
                        try {
                            await oI(e, t), n(!0)
                        } catch (e) {
                            r(e)
                        }
                    }, t.interval)
                })
            }
        }

        let oO = "__THROTTLED";

        class oR {
            constructor({options: e, recordingOptions: t}) {
                oR.prototype.__init.call(this), oR.prototype.__init2.call(this), oR.prototype.__init3.call(this), oR.prototype.__init4.call(this), oR.prototype.__init5.call(this), oR.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function (e, t, n) {
                    let r, i, s;
                    let a = n && n.maxWait ? Math.max(n.maxWait, t) : 0;

                    function o() {
                        return l(), r = e()
                    }

                    function l() {
                        void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
                    }

                    function c() {
                        return i && clearTimeout(i), i = setTimeout(o, t), a && void 0 === s && (s = setTimeout(o, a)), r
                    }

                    return c.cancel = l, c.flush = function () {
                        return void 0 !== i || void 0 !== s ? o() : r
                    }, c
                }(() => this._flush(), this._options.flushMinDelay, {maxWait: this._options.flushMaxDelay}), this._throttledAddEvent = function (e, t, n) {
                    let r = new Map, i = e => {
                        let t = e - 5;
                        r.forEach((e, n) => {
                            n < t && r.delete(n)
                        })
                    }, s = () => [...r.values()].reduce((e, t) => e + t, 0), a = !1;
                    return (...t) => {
                        let n = Math.floor(Date.now() / 1e3);
                        if (i(n), s() >= 300) {
                            let e = a;
                            return a = !0, e ? "__SKIPPED" : oO
                        }
                        a = !1;
                        let o = r.get(n) || 0;
                        return r.set(n, o + 1), e(...t)
                    }
                }((e, t) => a9(this, e) ? a4(this, e, t) : Promise.resolve(null), 0, 0);
                let {slowClickTimeout: n, slowClickIgnoreSelectors: r} = this.getOptions(), i = n ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : ""
                } : void 0;
                i && (this.clickDetector = new aj(this, i))
            }

            getContext() {
                return this._context
            }

            isEnabled() {
                return this._isEnabled
            }

            isPaused() {
                return this._isPaused
            }

            isRecordingCanvas() {
                return !!this._canvas
            }

            getOptions() {
                return this._options
            }

            initializeSampling(e) {
                let {errorSampleRate: t, sessionSampleRate: n} = this._options;
                if (!(t <= 0) || !(n <= 0)) {
                    if (this._initializeSessionForSampling(e), !this.session) {
                        this._handleException(Error("Unable to initialize and create session"));
                        return
                    }
                    !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", this.recordingMode, this._options._experiments.traceInternals, this._initializeRecording())
                }
            }

            start() {
                if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                this._options._experiments.traceInternals;
                let e = a3({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    traceInternals: this._options._experiments.traceInternals
                }, {stickySession: this._options.stickySession, sessionSampleRate: 1, allowBuffering: !1});
                this.session = e, this._initializeRecording()
            }

            startBuffering() {
                if (this._isEnabled) throw Error("Replay recording is already in progress");
                this._options._experiments.traceInternals;
                let e = a3({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals
                }, {stickySession: this._options.stickySession, sessionSampleRate: 0, allowBuffering: !0});
                this.session = e, this.recordingMode = "buffer", this._initializeRecording()
            }

            startRecording() {
                try {
                    var e;
                    let t;
                    let n = this._canvas;
                    this._stopRecording = aC({
                        ...this._recordingOptions, ..."buffer" === this.recordingMode && {checkoutEveryNms: 6e4},
                        emit: (e = this, t = !1, (n, r) => {
                            if (!e.checkAndHandleExpiredSession()) return;
                            let i = r || !t;
                            t = !0, e.clickDetector && function (e, t) {
                                try {
                                    if (3 !== t.type) return;
                                    let {source: n} = t.data;
                                    if (n === s3.Mutation && e.registerMutation(t.timestamp), n === s3.Scroll && e.registerScroll(t.timestamp), t.data.source === s3.MouseInteraction) {
                                        let {type: n, id: r} = t.data, i = aC.mirror.getNode(r);
                                        i instanceof HTMLElement && n === s5.Click && e.registerClick(i)
                                    }
                                } catch (e) {
                                }
                            }(e.clickDetector, n), e.addUpdate(() => {
                                if ("buffer" === e.recordingMode && i && e.setInitialState(), !a5(e, n, i)) return !0;
                                if (!i) return !1;
                                if (i && e.session && 0 === e.session.segmentId && a5(e, function (e) {
                                    let t = e.getOptions();
                                    return {
                                        type: s2.Custom,
                                        timestamp: Date.now(),
                                        data: {
                                            tag: "options",
                                            payload: {
                                                shouldRecordCanvas: e.isRecordingCanvas(),
                                                sessionSampleRate: t.sessionSampleRate,
                                                errorSampleRate: t.errorSampleRate,
                                                useCompressionOption: t.useCompression,
                                                blockAllMedia: t.blockAllMedia,
                                                maskAllText: t.maskAllText,
                                                maskAllInputs: t.maskAllInputs,
                                                useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                networkCaptureBodies: t.networkCaptureBodies,
                                                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                            }
                                        }
                                    }
                                }(e), !1), e.session && e.session.previousSessionId) return !0;
                                if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t && (e.getOptions()._experiments.traceInternals, e.session.started = t, e.getOptions().stickySession && aZ(e.session))
                                }
                                return "session" === e.recordingMode && e.flush(), !0
                            })
                        }),
                        onMutation: this._onMutationHandler, ...n ? {
                            recordCanvas: n.recordCanvas,
                            getCanvasManager: n.getCanvasManager,
                            sampling: n.sampling,
                            dataURLOptions: n.dataURLOptions
                        } : {}
                    })
                } catch (e) {
                    this._handleException(e)
                }
            }

            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                } catch (e) {
                    return this._handleException(e), !1
                }
            }

            async stop({forceFlush: e = !1, reason: t} = {}) {
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        this._options._experiments.traceInternals, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({force: !0}), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, function () {
                            if (aK()) try {
                                H.sessionStorage.removeItem(sr)
                            } catch (e) {
                            }
                        }(), this.session = void 0
                    } catch (e) {
                        this._handleException(e)
                    }
                }
            }

            pause() {
                this._isPaused || (this._isPaused = !0, this.stopRecording(), this._options._experiments.traceInternals)
            }

            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), this._options._experiments.traceInternals)
            }

            async sendBufferedReplayOrFlush({continueRecording: e = !0} = {}) {
                if ("session" === this.recordingMode) return this.flushImmediate();
                let t = Date.now();
                this._options._experiments.traceInternals, await this.flushImmediate();
                let n = this.stopRecording();
                e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
            }

            addUpdate(e) {
                let t = e();
                "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
            }

            triggerUserActivity() {
                if (this._updateUserActivity(), !this._stopRecording) {
                    if (!this._checkSession()) return;
                    this.resume();
                    return
                }
                this.checkAndHandleExpiredSession(), this._updateSessionActivity()
            }

            updateUserActivity() {
                this._updateUserActivity(), this._updateSessionActivity()
            }

            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
            }

            flush() {
                return this._debouncedFlush()
            }

            flushImmediate() {
                return this._debouncedFlush(), this._debouncedFlush.flush()
            }

            cancelFlush() {
                this._debouncedFlush.cancel()
            }

            getSessionId() {
                return this.session && this.session.id
            }

            checkAndHandleExpiredSession() {
                if (this._lastActivity && a0(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                    this.pause();
                    return
                }
                return !!this._checkSession()
            }

            setInitialState() {
                let e = `${H.location.pathname}${H.location.hash}${H.location.search}`, t = `${H.location.origin}${e}`;
                this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
            }

            throttledAddEvent(e, t) {
                let n = this._throttledAddEvent(e, t);
                if (n === oO) {
                    let e = aD({category: "replay.throttled"});
                    this.addUpdate(() => !a5(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {tag: "breadcrumb", payload: e, metric: !0}
                    }))
                }
                return n
            }

            getCurrentRoute() {
                let e = this.lastTransaction || tw().getTransaction(), t = (e && e3(e).data || {})[rb];
                if (e && t && ["route", "custom"].includes(t)) return e3(e).description
            }

            _initializeRecording() {
                this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function ({
                                                                                                        useCompression: e,
                                                                                                        workerUrl: t
                                                                                                    }) {
                    if (e && window.Worker) {
                        let e = function (e) {
                            try {
                                let t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function () {
                                    let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                    return URL.createObjectURL(e)
                                }());
                                if (!t) return;
                                let n = new Worker(t);
                                return new aJ(n)
                            } catch (e) {
                            }
                        }(t);
                        if (e) return e
                    }
                    return new aW
                }({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
            }

            _handleException(e) {
            }

            _initializeSessionForSampling(e) {
                let t = this._options.errorSampleRate > 0, n = a3({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
                this.session = n
            }

            _checkSession() {
                if (!this.session) return !1;
                let e = this.session;
                return !a2(e, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(e), !1)
            }

            async _refreshSession(e) {
                this._isEnabled && (await this.stop({reason: "refresh session"}), this.initializeSampling(e.id))
            }

            _addListeners() {
                try {
                    H.document.addEventListener("visibilitychange", this._handleVisibilityChange), H.addEventListener("blur", this._handleWindowBlur), H.addEventListener("focus", this._handleWindowFocus), H.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function (e) {
                        let t = tw(), n = tb();
                        t.addScopeListener(oS(e)), ng(aF(e)), nI(t => {
                            if (!e.isEnabled()) return;
                            let n = function (e) {
                                let {from: t, to: n} = e, r = Date.now() / 1e3;
                                return {type: "navigation.push", start: r, end: r, name: n, data: {previous: t}}
                            }(t);
                            null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (oe(e, [n]), !1)))
                        }), function (e) {
                            let t = tb();
                            try {
                                let n = new TextEncoder, {
                                    networkDetailAllowUrls: r,
                                    networkDetailDenyUrls: i,
                                    networkCaptureBodies: s,
                                    networkRequestHeaders: a,
                                    networkResponseHeaders: o
                                } = e.getOptions(), l = {
                                    replay: e,
                                    textEncoder: n,
                                    networkDetailAllowUrls: r,
                                    networkDetailDenyUrls: i,
                                    networkCaptureBodies: s,
                                    networkRequestHeaders: a,
                                    networkResponseHeaders: o
                                };
                                t && t.on ? t.on("beforeAddBreadcrumb", (e, t) => (function (e, t, n) {
                                    if (t.data) try {
                                        var r, i;
                                        "xhr" === t.category && (r = n) && r.xhr && (function (e, t, n) {
                                            let {xhr: r, input: i} = t;
                                            if (!r) return;
                                            let s = on(i, n.textEncoder),
                                                a = r.getResponseHeader("content-length") ? or(r.getResponseHeader("content-length")) : function (e, t, n) {
                                                    try {
                                                        let r = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                        return on(r, n)
                                                    } catch (e) {
                                                        return
                                                    }
                                                }(r.response, r.responseType, n.textEncoder);
                                            void 0 !== s && (e.data.request_body_size = s), void 0 !== a && (e.data.response_body_size = a)
                                        }(t, n, e), ob(t, n, e)), "fetch" === t.category && (i = n) && i.response && (function (e, t, n) {
                                            let {input: r, response: i} = t, s = on(r ? og(r) : void 0, n.textEncoder),
                                                a = i ? or(i.headers.get("content-length")) : void 0;
                                            void 0 !== s && (e.data.request_body_size = s), void 0 !== a && (e.data.response_body_size = a)
                                        }(t, n, e), od(t, n, e))
                                    } catch (e) {
                                    }
                                })(l, e, t)) : (nk(t => {
                                    e.isEnabled() && ot(e, function (e) {
                                        let {startTimestamp: t, endTimestamp: n, fetchData: r, response: i} = e;
                                        if (!n) return null;
                                        let {method: s, url: a} = r;
                                        return {
                                            type: "resource.fetch",
                                            start: t / 1e3,
                                            end: n / 1e3,
                                            name: a,
                                            data: {method: s, statusCode: i ? i.status : void 0}
                                        }
                                    }(t))
                                }), nb(t => {
                                    e.isEnabled() && ot(e, function (e) {
                                        let {startTimestamp: t, endTimestamp: n, xhr: r} = e, i = r[n_];
                                        if (!t || !n || !i) return null;
                                        let {method: s, url: a, status_code: o} = i;
                                        return void 0 === a ? null : {
                                            type: "resource.xhr",
                                            name: a,
                                            start: t / 1e3,
                                            end: n / 1e3,
                                            data: {method: s, statusCode: o}
                                        }
                                    }(t))
                                }))
                            } catch (e) {
                            }
                        }(e);
                        let r = function (e, t = !1) {
                            let n = t ? a7(e) : void 0;
                            return Object.assign((t, r) => e.isEnabled() ? "replay_event" === t.type ? (delete t.breadcrumbs, t) : (!t.type || a8(t) || a6(t)) && e.checkAndHandleExpiredSession() ? a6(t) ? (e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                                type: s2.Custom,
                                timestamp: 1e3 * t.timestamp,
                                data: {
                                    tag: "breadcrumb",
                                    payload: {
                                        timestamp: t.timestamp,
                                        type: "default",
                                        category: "sentry.feedback",
                                        data: {feedbackId: t.event_id}
                                    }
                                }
                            }), !1)), t) : !t.type && t.exception && t.exception.values && t.exception.values.length && r.originalException && r.originalException.__rrweb__ && !e.getOptions()._experiments.captureExceptions ? null : (("buffer" === e.recordingMode && t.message !== si && t.exception && !t.type && aY(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = {
                                ...t.tags,
                                replayId: e.getSessionId()
                            }), n && n(t, {statusCode: 200}), t) : t : t, {id: "Replay"})
                        }(e, !(n && n.on));
                        n && n.addEventProcessor ? n.addEventProcessor(r) : function (e) {
                            let t = tb();
                            t && t.addEventProcessor && t.addEventProcessor(e)
                        }(r), n && n.on && (n.on("beforeSendEvent", t => {
                            e.isEnabled() && !t.type && function (e, t) {
                                let n = t.exception && t.exception.values && t.exception.values[0].value;
                                "string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && aR(e, aD({category: "replay.hydrate-error"}))
                            }(e, t)
                        }), n.on("afterSendEvent", a7(e)), n.on("createDsc", t => {
                            let n = e.getSessionId();
                            n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                        }), n.on("startTransaction", t => {
                            e.lastTransaction = t
                        }), n.on("finishTransaction", t => {
                            e.lastTransaction = t
                        }), n.on("beforeSendFeedback", (t, n) => {
                            let r = e.getSessionId();
                            n && n.includeReplay && e.isEnabled() && r && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r)
                        }))
                    }(this), this._hasInitializedCoreListeners = !0)
                } catch (e) {
                    this._handleException(e)
                }
                this._performanceCleanupCallback = function (e) {
                    function t(t) {
                        e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                    }

                    function n({entries: e}) {
                        e.forEach(t)
                    }

                    let r = [];
                    return ["navigation", "paint", "resource"].forEach(e => {
                        r.push(ip(e, n))
                    }), r.push(id(({metric: t}) => {
                        e.replayPerformanceEntries.push(function (e) {
                            let t = e.entries, n = t[t.length - 1], r = n ? n.element : void 0, i = e.value, s = aH(i);
                            return {
                                type: "largest-contentful-paint",
                                name: "largest-contentful-paint",
                                start: s,
                                end: s,
                                data: {value: i, size: i, nodeId: r ? aC.mirror.getId(r) : void 0}
                            }
                        }(t))
                    })), () => {
                        r.forEach(e => e())
                    }
                }(this)
            }

            _removeListeners() {
                try {
                    H.document.removeEventListener("visibilitychange", this._handleVisibilityChange), H.removeEventListener("blur", this._handleWindowBlur), H.removeEventListener("focus", this._handleWindowFocus), H.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
                } catch (e) {
                    this._handleException(e)
                }
            }

            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === H.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                }
            }

            __init2() {
                this._handleWindowBlur = () => {
                    let e = aD({category: "ui.blur"});
                    this._doChangeToBackgroundTasks(e)
                }
            }

            __init3() {
                this._handleWindowFocus = () => {
                    let e = aD({category: "ui.focus"});
                    this._doChangeToForegroundTasks(e)
                }
            }

            __init4() {
                this._handleKeyboardEvent = e => {
                    !function (e, t) {
                        if (!e.isEnabled()) return;
                        e.updateUserActivity();
                        let n = function (e) {
                            var t;
                            let {metaKey: n, shiftKey: r, ctrlKey: i, altKey: s, key: a, target: o} = e;
                            if (!o || "INPUT" === (t = o).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !a) return null;
                            let l = n || i || s, c = 1 === a.length;
                            if (!l && c) return null;
                            let u = ea(o, {maxStringLength: 200}) || "<unknown>", h = aU(o, u);
                            return aD({
                                category: "ui.keyDown",
                                message: u,
                                data: {...h.data, metaKey: n, shiftKey: r, ctrlKey: i, altKey: s, key: a}
                            })
                        }(t);
                        n && aR(e, n)
                    }(this, e)
                }
            }

            _doChangeToBackgroundTasks(e) {
                !this.session || a1(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush())
            }

            _doChangeToForegroundTasks(e) {
                this.session && this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
            }

            _updateUserActivity(e = Date.now()) {
                this._lastActivity = e
            }

            _updateSessionActivity(e = Date.now()) {
                this.session && (this.session.lastActivity = e, this._maybeSaveSession())
            }

            _createCustomBreadcrumb(e) {
                this.addUpdate(() => {
                    this.throttledAddEvent({
                        type: s2.Custom,
                        timestamp: e.timestamp || 0,
                        data: {tag: "breadcrumb", payload: e}
                    })
                })
            }

            _addPerformanceEntries() {
                let e = this.performanceEntries.map(az).filter(Boolean).concat(this.replayPerformanceEntries);
                return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(oe(this, e))
            }

            _clearContext() {
                this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
            }

            _updateInitialTimestampFromEventBuffer() {
                let {session: e, eventBuffer: t} = this;
                if (!e || !t || e.segmentId) return;
                let n = t.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
            }

            _popEventContext() {
                let e = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(), e
            }

            async _runFlush() {
                let e = this.getSessionId();
                if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents) && (await oE(this), this.eventBuffer && e === this.getSessionId())) try {
                    this._updateInitialTimestampFromEventBuffer();
                    let t = Date.now();
                    if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw Error("Session is too long, not sending replay");
                    let n = this._popEventContext(), r = this.session.segmentId++;
                    this._maybeSaveSession();
                    let i = await this.eventBuffer.finish();
                    await oI({
                        replayId: e,
                        recordingData: i,
                        segmentId: r,
                        eventContext: n,
                        session: this.session,
                        options: this.getOptions(),
                        timestamp: t
                    })
                } catch (t) {
                    this._handleException(t), this.stop({reason: "sendReplay"});
                    let e = tb();
                    e && e.recordDroppedEvent("send_error", "replay")
                }
            }

            __init5() {
                this._flush = async ({force: e = !1} = {}) => {
                    if (!this._isEnabled && !e || !this.checkAndHandleExpiredSession() || !this.session) return;
                    let t = this.session.started, n = Date.now() - t;
                    this._debouncedFlush.cancel();
                    let r = n < this._options.minReplayDuration, i = n > this._options.maxReplayDuration + 5e3;
                    if (r || i) {
                        this._options._experiments.traceInternals, r && this._debouncedFlush();
                        return
                    }
                    let s = this.eventBuffer;
                    if (s && 0 === this.session.segmentId && !s.hasCheckout && this._options._experiments.traceInternals, !this._flushLock) {
                        this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = void 0;
                        return
                    }
                    try {
                        await this._flushLock
                    } catch (e) {
                    } finally {
                        this._debouncedFlush()
                    }
                }
            }

            _maybeSaveSession() {
                this.session && this._options.stickySession && aZ(this.session)
            }

            __init6() {
                this._onMutationHandler = e => {
                    let t = e.length, n = this._options.mutationLimit, r = this._options.mutationBreadcrumbLimit,
                        i = n && t > n;
                    if (t > r || i) {
                        let e = aD({category: "replay.mutations", data: {count: t, limit: i}});
                        this._createCustomBreadcrumb(e)
                    }
                    return !i || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }), !1)
                }
            }
        }

        function oA(e, t, n, r) {
            let i = [...e, ..."string" == typeof r ? r.split(",") : [], ...t];
            return void 0 !== n && ("string" == typeof n && i.push(`.${n}`), eh(() => {
                console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
            })), i.join(",")
        }

        let o$ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
            oP = ["content-length", "content-type", "accept"], oj = !1;

        class oM {
            static __initStatic() {
                this.id = "Replay"
            }

            constructor({
                            flushMinDelay: e = 5e3,
                            flushMaxDelay: t = 5500,
                            minReplayDuration: n = 4999,
                            maxReplayDuration: r = 36e5,
                            stickySession: i = !0,
                            useCompression: s = !0,
                            workerUrl: a,
                            _experiments: o = {},
                            sessionSampleRate: l,
                            errorSampleRate: c,
                            maskAllText: u = !0,
                            maskAllInputs: h = !0,
                            blockAllMedia: d = !0,
                            mutationBreadcrumbLimit: p = 750,
                            mutationLimit: f = 1e4,
                            slowClickTimeout: m = 7e3,
                            slowClickIgnoreSelectors: g = [],
                            networkDetailAllowUrls: y = [],
                            networkDetailDenyUrls: v = [],
                            networkCaptureBodies: _ = !0,
                            networkRequestHeaders: b = [],
                            networkResponseHeaders: w = [],
                            mask: S = [],
                            maskAttributes: E = ["title", "placeholder"],
                            unmask: k = [],
                            block: T = [],
                            unblock: x = [],
                            ignore: C = [],
                            maskFn: I,
                            beforeAddRecordingEvent: O,
                            beforeErrorSampling: R,
                            blockClass: A,
                            blockSelector: $,
                            maskInputOptions: P,
                            maskTextClass: j,
                            maskTextSelector: M,
                            ignoreClass: N
                        } = {}) {
                this.name = oM.id;
                let D = function ({
                                      mask: e,
                                      unmask: t,
                                      block: n,
                                      unblock: r,
                                      ignore: i,
                                      blockClass: s,
                                      blockSelector: a,
                                      maskTextClass: o,
                                      maskTextSelector: l,
                                      ignoreClass: c
                                  }) {
                    let u = {
                        maskTextSelector: oA(e, [".sentry-mask", "[data-sentry-mask]"], o, l),
                        unmaskTextSelector: oA(t, [".sentry-unmask", "[data-sentry-unmask]"]),
                        blockSelector: oA(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], s, a),
                        unblockSelector: oA(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                        ignoreSelector: oA(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], c)
                    };
                    return s instanceof RegExp && (u.blockClass = s), o instanceof RegExp && (u.maskTextClass = o), u
                }({
                    mask: S,
                    unmask: k,
                    block: T,
                    unblock: x,
                    ignore: C,
                    blockClass: A,
                    blockSelector: $,
                    maskTextClass: j,
                    maskTextSelector: M,
                    ignoreClass: N
                });
                if (this._recordingOptions = {
                    maskAllInputs: h,
                    maskAllText: u,
                    maskInputOptions: {...P || {}, password: !0},
                    maskTextFn: I,
                    maskInputFn: I,
                    maskAttributeFn: (e, t, n) => (function ({
                                                                 el: e,
                                                                 key: t,
                                                                 maskAttributes: n,
                                                                 maskAllText: r,
                                                                 privacyOptions: i,
                                                                 value: s
                                                             }) {
                        return !r || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? s : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s
                    })({maskAttributes: E, maskAllText: u, privacyOptions: D, key: e, value: t, el: n}), ...D,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch (e) {
                        }
                    }
                }, this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: i,
                    sessionSampleRate: l,
                    errorSampleRate: c,
                    useCompression: s,
                    workerUrl: a,
                    blockAllMedia: d,
                    maskAllInputs: h,
                    maskAllText: u,
                    mutationBreadcrumbLimit: p,
                    mutationLimit: f,
                    slowClickTimeout: m,
                    slowClickIgnoreSelectors: g,
                    networkDetailAllowUrls: y,
                    networkDetailDenyUrls: v,
                    networkCaptureBodies: _,
                    networkRequestHeaders: oN(b),
                    networkResponseHeaders: oN(w),
                    beforeAddRecordingEvent: O,
                    beforeErrorSampling: R,
                    _experiments: o
                }, "number" == typeof l && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${l} })`), this._initialOptions.sessionSampleRate = l), "number" == typeof c && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${c} })`), this._initialOptions.errorSampleRate = c), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${o$}` : o$), this._isInitialized && sn()) throw Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0
            }

            get _isInitialized() {
                return oj
            }

            set _isInitialized(e) {
                oj = e
            }

            setupOnce() {
                sn() && (this._setup(), setTimeout(() => this._initialize()))
            }

            start() {
                this._replay && this._replay.start()
            }

            startBuffering() {
                this._replay && this._replay.startBuffering()
            }

            stop() {
                return this._replay ? this._replay.stop({forceFlush: "session" === this._replay.recordingMode}) : Promise.resolve()
            }

            flush(e) {
                return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve()
            }

            getReplayId() {
                if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
            }

            _initialize() {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling())
            }

            _setup() {
                let e = function (e) {
                    let t = tb(), n = t && t.getOptions(), r = {sessionSampleRate: 0, errorSampleRate: 0, ...eE(e)};
                    return n ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && eh(() => {
                        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                    }), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate)) : eh(() => {
                        console.warn("SDK client is not available.")
                    }), r
                }(this._initialOptions);
                this._replay = new oR({options: e, recordingOptions: this._recordingOptions})
            }

            _maybeLoadFromReplayCanvasIntegration() {
                try {
                    let e = tb().getIntegrationByName("ReplayCanvas");
                    if (!e) return;
                    this._replay._canvas = e.getOptions()
                } catch (e) {
                }
            }
        }

        function oN(e) {
            return [...oP, ...e.map(e => e.toLowerCase())]
        }

        oM.__initStatic();
        var oD = n(32918), oL = window;
        oL.__sentryRewritesTunnelPath__ = void 0, oL.SENTRY_RELEASE = {id: "HHAKGtuyJXTc_oyLRq6S-"}, oL.__sentryBasePath = void 0, oL.__rewriteFramesAssetPrefixPath__ = "", function (e) {
            let t = {
                environment: function (e) {
                    let t = e ? ry.env.NEXT_PUBLIC_VERCEL_ENV : ry.env.VERCEL_ENV;
                    return t ? `vercel-${t}` : void 0
                }(!0) || "production", defaultIntegrations: function (e) {
                    let t = [...rg, i6()];
                    return ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && tx(e) && t.push(function (e) {
                        let t = iG({
                            tracingOrigins: [...iL.tracingOrigins, /^(api\/)/],
                            instrumentNavigation: !1,
                            instrumentPageLoad: !1
                        });
                        return {
                            ...t, afterAllSetup(e) {
                                let n = t => {
                                    iV(e, t)
                                }, r = t => {
                                    iJ(e, t)
                                };
                                i1(() => void 0, !1, rv([void 0, "optionalAccess", e => e.instrumentNavigation]), n, r), t.afterAllSetup(e), i1(() => void 0, rv([void 0, "optionalAccess", e => e.instrumentPageLoad]), !1, n, r)
                            }
                        }
                    }()), t
                }(e), ...e
            };
            (function (e) {
                let {integrations: t} = e;
                t && (Array.isArray(t) ? e.integrations = i7(t) : e.integrations = e => i7(t(e)))
            })(t), function (e) {
                let t = H.__sentryRewritesTunnelPath__;
                if (t && e.dsn) {
                    let n = nZ(e.dsn);
                    if (!n) return;
                    let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
                    if (r) {
                        let i = r[1], s = r[2], a = `${t}?o=${i}&p=${n.projectId}`;
                        s && (a += `&r=${s}`), e.tunnel = a
                    }
                }
            }(t), B(t, "nextjs", ["nextjs", "react"]), function (e) {
                let t = {...e};
                B(t, "react"), function (e = {}) {
                    var t;
                    void 0 === e.defaultIntegrations && (e.defaultIntegrations = [...rg]), void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), H.SENTRY_RELEASE && H.SENTRY_RELEASE.id && (e.release = H.SENTRY_RELEASE.id)), void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0), function (e, t) {
                        !0 === t.debug && eh(() => {
                            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                        }), tw().update(t.initialScope);
                        let n = new e(t);
                        (function (e) {
                            let t = ta().getStackTop();
                            t.client = e, t.scope.setClient(e)
                        })(n), n.init ? n.init() : n.setupIntegrations && n.setupIntegrations()
                    }(rt, {
                        ...e,
                        stackParser: Array.isArray(t = e.stackParser || rl) ? td(...t) : t,
                        integrations: function (e) {
                            let t = e.defaultIntegrations || [], n = e.integrations;
                            t.forEach(e => {
                                e.isDefaultInstance = !0
                            });
                            let r = function (e) {
                                    let t = {};
                                    return e.forEach(e => {
                                        let {name: n} = e, r = t[n];
                                        r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                                    }), Object.keys(t).map(e => t[e])
                                }(Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? eO(n(t)) : t),
                                i = function (e, t) {
                                    for (let n = 0; n < e.length; n++) if (!0 === t(e[n])) return n;
                                    return -1
                                }(r, e => "Debug" === e.name);
                            if (-1 !== i) {
                                let [e] = r.splice(i, 1);
                                r.push(e)
                            }
                            return r
                        }(e),
                        transport: e.transport || (nS() ? rf : rm)
                    }), e.autoSessionTracking && void 0 !== H.document && (tS({ignoreDuration: !0}), tT(), nI(({
                                                                                                                   from: e,
                                                                                                                   to: t
                                                                                                               }) => {
                        void 0 !== e && e !== t && (tS({ignoreDuration: !0}), tT())
                    }))
                }(t)
            }(t);
            let n = tw();
            n.setTag("runtime", "browser");
            let r = e => "transaction" === e.type && "/404" === e.transaction ? null : e;
            r.id = "NextClient404Filter", n.addEventProcessor(r)
        }({
            dsn: "https://d3345591295d4dd1b8c579b62003d939@o1284435.ingest.sentry.io/6495191",
            tracesSampleRate: .2,
            debug: !1,
            release: "".concat(oD.env.SENTRY_RELEASE || "production"),
            allowUrls: ["https://jsoncrack.com/editor"],
            replaysOnErrorSampleRate: 1,
            replaysSessionSampleRate: .1,
            integrations: [new i2, new oM({maskAllText: !0, blockAllMedia: !0})]
        })
    },
    28461: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e, t) {
            for (var n in t) Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
        }(t, {
            default: function () {
                return o
            }, noSSR: function () {
                return a
            }
        });
        let r = n(42430);
        n(11527), n(50959);
        let i = r._(n(27778));

        function s(e) {
            return {default: (null == e ? void 0 : e.default) || e}
        }

        function a(e, t) {
            return delete t.webpack, delete t.modules, e(t)
        }

        function o(e, t) {
            let n = i.default, r = {
                loading: e => {
                    let {error: t, isLoading: n, pastDelay: r} = e;
                    return null
                }
            };
            e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = {...r, ...e});
            let o = (r = {...r, ...t}).loader;
            return (r.loadableGenerated && (r = {...r, ...r.loadableGenerated}, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({
                ...r,
                loader: () => null != o ? o().then(s) : Promise.resolve(s(() => null))
            }) : (delete r.webpack, delete r.modules, a(n, r))
        }

        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    },
    12071: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "LoadableContext", {
            enumerable: !0,
            get: function () {
                return r
            }
        });
        let r = n(42430)._(n(50959)).default.createContext(null)
    },
    27778: function (e, t, n) {
        "use strict";
        /**
         @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
          MIT License
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
         */Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return d
            }
        });
        let r = n(42430)._(n(50959)), i = n(12071), s = [], a = [], o = !1;

        function l(e) {
            let t = e(), n = {loading: !0, loaded: null, error: null};
            return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
                throw n.loading = !1, n.error = e, e
            }), n
        }

        class c {
            promise() {
                return this._res.promise
            }

            retry() {
                this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                    pastDelay: !1,
                    timedOut: !1
                };
                let {_res: e, _opts: t} = this;
                e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                    this._update({pastDelay: !0})
                }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                    this._update({timedOut: !0})
                }, t.timeout))), this._res.promise.then(() => {
                    this._update({}), this._clearTimeouts()
                }).catch(e => {
                    this._update({}), this._clearTimeouts()
                }), this._update({})
            }

            _update(e) {
                this._state = {
                    ...this._state,
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading, ...e
                }, this._callbacks.forEach(e => e())
            }

            _clearTimeouts() {
                clearTimeout(this._delay), clearTimeout(this._timeout)
            }

            getCurrentValue() {
                return this._state
            }

            subscribe(e) {
                return this._callbacks.add(e), () => {
                    this._callbacks.delete(e)
                }
            }

            constructor(e, t) {
                this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
            }
        }

        function u(e) {
            return function (e, t) {
                let n = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, t), s = null;

                function l() {
                    if (!s) {
                        let t = new c(e, n);
                        s = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return s.promise()
                }

                if (!o) {
                    let e = n.webpack ? n.webpack() : n.modules;
                    e && a.push(t => {
                        for (let n of e) if (t.includes(n)) return l()
                    })
                }

                function u(e, t) {
                    !function () {
                        l();
                        let e = r.default.useContext(i.LoadableContext);
                        e && Array.isArray(n.modules) && n.modules.forEach(t => {
                            e(t)
                        })
                    }();
                    let a = r.default.useSyncExternalStore(s.subscribe, s.getCurrentValue, s.getCurrentValue);
                    return r.default.useImperativeHandle(t, () => ({retry: s.retry}), []), r.default.useMemo(() => {
                        var t;
                        return a.loading || a.error ? r.default.createElement(n.loading, {
                            isLoading: a.loading,
                            pastDelay: a.pastDelay,
                            timedOut: a.timedOut,
                            error: a.error,
                            retry: s.retry
                        }) : a.loaded ? r.default.createElement((t = a.loaded) && t.default ? t.default : t, e) : null
                    }, [e, a])
                }

                return u.preload = () => l(), u.displayName = "LoadableComponent", r.default.forwardRef(u)
            }(l, e)
        }

        function h(e, t) {
            let n = [];
            for (; e.length;) {
                let r = e.pop();
                n.push(r(t))
            }
            return Promise.all(n).then(() => {
                if (e.length) return h(e, t)
            })
        }

        u.preloadAll = () => new Promise((e, t) => {
            h(s).then(e, t)
        }), u.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
            let n = () => (o = !0, t());
            h(a, e).then(n, n)
        })), window.__NEXT_PRELOADREADY = u.preloadReady;
        let d = u
    },
    90420: function (e, t, n) {
        "use strict";
        n.d(t, {
            $_: function () {
                return i
            }, Wb: function () {
                return s
            }
        });
        let r = {
            CRIMSON: "#DC143C",
            BLURPLE: "#5865F2",
            PURPLE: "#9036AF",
            FULL_WHITE: "#FFFFFF",
            BLACK: "#202225",
            BLACK_DARK: "#2C2F33",
            BLACK_LIGHT: "#2F3136",
            BLACK_PRIMARY: "#36393f",
            DARK_SALMON: "#E9967A",
            DANGER: "hsl(359,calc(var(--saturation-factor, 1)*66.7%),54.1%)",
            LIGHTGREEN: "#90EE90",
            SEAGREEN: "#11883B",
            ORANGE: "#FAA81A",
            SILVER: "#B9BBBE",
            PRIMARY: "#4D4D4D",
            TEXT_DANGER: "#db662e"
        }, i = {
            ...r,
            NODE_COLORS: {
                TEXT: "#DCE5E7",
                NODE_KEY: "#59b8ff",
                NODE_VALUE: "#DCE5E7",
                INTEGER: "#e8c479",
                NULL: "#939598",
                BOOL: {FALSE: "#F85C50", TRUE: "#00DC7D"},
                PARENT_ARR: "#FC9A40",
                PARENT_OBJ: "#59b8ff",
                CHILD_COUNT: "white"
            },
            PROMPT_BG: "#072719",
            PROMPT_PLACEHOLDER_COLOR: "#15593A",
            PROMPT_TEXT_COLOR: "#3DCF8E",
            PROMPT_BORDER_COLOR: "#0C3924",
            BLACK_SECONDARY: "#23272A",
            SILVER_DARK: "#4D4D4D",
            NODE_KEY: "#FAA81A",
            OBJECT_KEY: "#59b8ff",
            SIDEBAR_ICONS: "#8B8E90",
            INTERACTIVE_NORMAL: "#b9bbbe",
            INTERACTIVE_HOVER: "#dcddde",
            INTERACTIVE_ACTIVE: "#fff",
            BACKGROUND_NODE: "#2B2C3E",
            BACKGROUND_TERTIARY: "#202225",
            BACKGROUND_SECONDARY: "#2f3136",
            TOOLBAR_BG: "#262626",
            BACKGROUND_PRIMARY: "#36393f",
            BACKGROUND_MODIFIER_ACCENT: "rgba(79,84,92,0.48)",
            MODAL_BACKGROUND: "#36393E",
            TEXT_NORMAL: "#dcddde",
            TEXT_POSITIVE: "hsl(139,calc(var(--saturation-factor, 1)*51.6%),52.2%)",
            GRID_BG_COLOR: "#1E1E1E",
            GRID_COLOR_PRIMARY: "#272626",
            GRID_COLOR_SECONDARY: "#232323"
        }, s = {
            ...r,
            NODE_COLORS: {
                TEXT: "#000",
                NODE_KEY: "#761CEA",
                NODE_VALUE: "#535353",
                INTEGER: "#FD0079",
                NULL: "#afafaf",
                BOOL: {FALSE: "#FF0000", TRUE: "#748700"},
                PARENT_ARR: "#FF6B00",
                PARENT_OBJ: "#761CEA",
                CHILD_COUNT: "#535353"
            },
            PROMPT_BG: "#d3ede1",
            PROMPT_PLACEHOLDER_COLOR: "#77c2a1",
            PROMPT_TEXT_COLOR: "#289b67",
            PROMPT_BORDER_COLOR: "#8ad7b3",
            BLACK_SECONDARY: "#F2F2F2",
            SILVER_DARK: "#CCCCCC",
            NODE_KEY: "#DC3790",
            OBJECT_KEY: "#0260E8",
            SIDEBAR_ICONS: "#6D6E70",
            INTERACTIVE_NORMAL: "#4f5660",
            INTERACTIVE_HOVER: "#2e3338",
            INTERACTIVE_ACTIVE: "#060607",
            BACKGROUND_NODE: "#F6F8FA",
            BACKGROUND_TERTIARY: "#e3e5e8",
            BACKGROUND_SECONDARY: "#f2f3f5",
            TOOLBAR_BG: "#ECECEC",
            BACKGROUND_PRIMARY: "#FFFFFF",
            BACKGROUND_MODIFIER_ACCENT: "rgba(106,116,128,0.24)",
            MODAL_BACKGROUND: "#FFFFFF",
            TEXT_NORMAL: "#2e3338",
            TEXT_POSITIVE: "#008736",
            GRID_BG_COLOR: "#f3f3f3",
            GRID_COLOR_PRIMARY: "#E0E0E0",
            GRID_COLOR_SECONDARY: "#E4E4E4"
        };
        ({...s, ...i})
    },
    22678: function (e, t, n) {
        "use strict";
        n.d(t, {
            O: function () {
                return tR
            }
        });
        let r = e => {
            let t;
            return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(n.bind(n, 17018)).then(({default: t}) => t(...e)) : t = fetch, (...e) => t(...e)
        };

        class i extends Error {
            constructor(e, t = "FunctionsError", n) {
                super(e), this.name = t, this.context = n
            }
        }

        class s extends i {
            constructor(e) {
                super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
            }
        }

        class a extends i {
            constructor(e) {
                super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
            }
        }

        class o extends i {
            constructor(e) {
                super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
            }
        }

        (c = u || (u = {})).Any = "any", c.ApNortheast1 = "ap-northeast-1", c.ApNortheast2 = "ap-northeast-2", c.ApSouth1 = "ap-south-1", c.ApSoutheast1 = "ap-southeast-1", c.ApSoutheast2 = "ap-southeast-2", c.CaCentral1 = "ca-central-1", c.EuCentral1 = "eu-central-1", c.EuWest1 = "eu-west-1", c.EuWest2 = "eu-west-2", c.EuWest3 = "eu-west-3", c.SaEast1 = "sa-east-1", c.UsEast1 = "us-east-1", c.UsWest1 = "us-west-1", c.UsWest2 = "us-west-2";

        class l {
            constructor(e, {headers: t = {}, customFetch: n, region: i = u.Any} = {}) {
                this.url = e, this.headers = t, this.region = i, this.fetch = r(n)
            }

            setAuth(e) {
                this.headers.Authorization = `Bearer ${e}`
            }

            invoke(e, t = {}) {
                var n, r, i, l, c;
                return r = this, i = void 0, l = void 0, c = function* () {
                    try {
                        let r;
                        let {headers: i, method: l, body: c} = t, u = {}, {region: h} = t;
                        h || (h = this.region), h && "any" !== h && (u["x-region"] = h), c && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && ("undefined" != typeof Blob && c instanceof Blob || c instanceof ArrayBuffer ? (u["Content-Type"] = "application/octet-stream", r = c) : "string" == typeof c ? (u["Content-Type"] = "text/plain", r = c) : "undefined" != typeof FormData && c instanceof FormData ? r = c : (u["Content-Type"] = "application/json", r = JSON.stringify(c)));
                        let d = yield this.fetch(`${this.url}/${e}`, {
                            method: l || "POST",
                            headers: Object.assign(Object.assign(Object.assign({}, u), this.headers), i),
                            body: r
                        }).catch(e => {
                            throw new s(e)
                        }), p = d.headers.get("x-relay-error");
                        if (p && "true" === p) throw new a(d);
                        if (!d.ok) throw new o(d);
                        let f = (null !== (n = d.headers.get("Content-Type")) && void 0 !== n ? n : "text/plain").split(";")[0].trim();
                        return {
                            data: "application/json" === f ? yield d.json() : "application/octet-stream" === f ? yield d.blob() : "text/event-stream" === f ? d : "multipart/form-data" === f ? yield d.formData() : yield d.text(),
                            error: null
                        }
                    } catch (e) {
                        return {data: null, error: e}
                    }
                }, new (l || (l = Promise))(function (e, t) {
                    function n(e) {
                        try {
                            a(c.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function s(e) {
                        try {
                            a(c.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function a(t) {
                        var r;
                        t.done ? e(t.value) : ((r = t.value) instanceof l ? r : new l(function (e) {
                            e(r)
                        })).then(n, s)
                    }

                    a((c = c.apply(r, i || [])).next())
                })
            }
        }

        var c, u, h, d, p, f, m, g, y, v, _, b, w, S, E, k, T, x, C, I, O, R = n(17018);

        class A extends Error {
            constructor(e) {
                super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code
            }
        }

        class ${constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle,e.fetch?this.fetch=e.fetch:"undefined"==typeof fetch?this.fetch=R.default:this.fetch=fetch}
        throwOnError

        ()
        {
            return this.shouldThrowOnError = !0, this
        }
        then(e, t)
        {
            void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
            let n = (0, this.fetch)(this.url.toString(), {
                method: this.method,
                headers: this.headers,
                body: JSON.stringify(this.body),
                signal: this.signal
            }).then(async e => {
                var t, n, r;
                let i = null, s = null, a = null, o = e.status, l = e.statusText;
                if (e.ok) {
                    if ("HEAD" !== this.method) {
                        let t = await e.text();
                        "" === t || (s = "text/csv" === this.headers.Accept ? t : this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? t : JSON.parse(t))
                    }
                    let r = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.match(/count=(exact|planned|estimated)/),
                        c = null === (n = e.headers.get("content-range")) || void 0 === n ? void 0 : n.split("/");
                    r && c && c.length > 1 && (a = parseInt(c[1])), this.isMaybeSingle && "GET" === this.method && Array.isArray(s) && (s.length > 1 ? (i = {
                        code: "PGRST116",
                        details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message: "JSON object requested, multiple (or no) rows returned"
                    }, s = null, a = null, o = 406, l = "Not Acceptable") : s = 1 === s.length ? s[0] : null)
                } else {
                    let t = await e.text();
                    try {
                        i = JSON.parse(t), Array.isArray(i) && 404 === e.status && (s = [], i = null, o = 200, l = "OK")
                    } catch (n) {
                        404 === e.status && "" === t ? (o = 204, l = "No Content") : i = {message: t}
                    }
                    if (i && this.isMaybeSingle && (null === (r = null == i ? void 0 : i.details) || void 0 === r ? void 0 : r.includes("0 rows")) && (i = null, o = 200, l = "OK"), i && this.shouldThrowOnError) throw new A(i)
                }
                return {error: i, data: s, count: a, status: o, statusText: l}
            });
            return this.shouldThrowOnError || (n = n.catch(e => {
                var t, n, r;
                return {
                    error: {
                        message: `${null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "FetchError"}: ${null == e ? void 0 : e.message}`,
                        details: `${null !== (n = null == e ? void 0 : e.stack) && void 0 !== n ? n : ""}`,
                        hint: "",
                        code: `${null !== (r = null == e ? void 0 : e.code) && void 0 !== r ? r : ""}`
                    }, data: null, count: null, status: 0, statusText: ""
                }
            })), n.then(e, t)
        }
    }
    class P
    extends ${select(e){let t=!1,n=(null!=e?e:"*").split("").map(e=>/\s/.test(e)&&!t?"":('"'===e&&(t=!t),e)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e, {
        ascending: t = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: i = r
    } = {}){
    let s = i ? `${i}.order` : "order",
    a = this.url.searchParams.get(s);
    return this.url.searchParams.set(s, `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${void 0 === n ? "" : n ? ".nullsfirst" : ".nullslast"}`),
    this
}limit(e, {foreignTable: t, referencedTable: n = t} = {}){
    let r = void 0 === n ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(r, `${e}`),
    this
}range(e, t, {foreignTable: n, referencedTable: r = n} = {}){
    let i = void 0 === r ? "offset" : `${r}.offset`,
    s = void 0 === r ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(i, `${e}`),
    this
    .url.searchParams.set(s, `${t - e + 1}`),
    this
}abortSignal(e){return this.signal = e, this}single(){
    return this.headers.Accept = "application/vnd.pgrst.object+json",
    this
}maybeSingle(){
    return"GET" === this.method ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
    this
    .isMaybeSingle = !0,
    this
}csv(){return this.headers.Accept = "text/csv", this}geojson(){
    return this.headers.Accept = "application/geo+json",
    this
}explain({
    analyze: e = !1,
    verbose: t = !1,
    settings: n = !1,
    buffers: r = !1,
    wal: i = !1,
    format: s = "text"
} = {}){
    var a;
    let o = [e ? "analyze" : null, t ? "verbose" : null, n ? "settings" : null, r ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|"),
    l = null !== (a = this.headers.Accept) && void 0 !== a ? a : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`,
    this
}rollback(){
    var e;
    return(
    null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this
}
returns()
{
    return this
}
}

class j extends P {
    eq(e, t) {
        return this.url.searchParams.append(e, `eq.${t}`), this
    }

    neq(e, t) {
        return this.url.searchParams.append(e, `neq.${t}`), this
    }

    gt(e, t) {
        return this.url.searchParams.append(e, `gt.${t}`), this
    }

    gte(e, t) {
        return this.url.searchParams.append(e, `gte.${t}`), this
    }

    lt(e, t) {
        return this.url.searchParams.append(e, `lt.${t}`), this
    }

    lte(e, t) {
        return this.url.searchParams.append(e, `lte.${t}`), this
    }

    like(e, t) {
        return this.url.searchParams.append(e, `like.${t}`), this
    }

    likeAllOf(e, t) {
        return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
    }

    likeAnyOf(e, t) {
        return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
    }

    ilike(e, t) {
        return this.url.searchParams.append(e, `ilike.${t}`), this
    }

    ilikeAllOf(e, t) {
        return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
    }

    ilikeAnyOf(e, t) {
        return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
    }

    is(e, t) {
        return this.url.searchParams.append(e, `is.${t}`), this
    }

    in(e, t) {
        let n = Array.from(new Set(t)).map(e => "string" == typeof e && RegExp("[,()]").test(e) ? `"${e}"` : `${e}`).join(",");
        return this.url.searchParams.append(e, `in.(${n})`), this
    }

    contains(e, t) {
        return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this
    }

    containedBy(e, t) {
        return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this
    }

    rangeGt(e, t) {
        return this.url.searchParams.append(e, `sr.${t}`), this
    }

    rangeGte(e, t) {
        return this.url.searchParams.append(e, `nxl.${t}`), this
    }

    rangeLt(e, t) {
        return this.url.searchParams.append(e, `sl.${t}`), this
    }

    rangeLte(e, t) {
        return this.url.searchParams.append(e, `nxr.${t}`), this
    }

    rangeAdjacent(e, t) {
        return this.url.searchParams.append(e, `adj.${t}`), this
    }

    overlaps(e, t) {
        return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this
    }

    textSearch(e, t, {config: n, type: r} = {}) {
        let i = "";
        "plain" === r ? i = "pl" : "phrase" === r ? i = "ph" : "websearch" === r && (i = "w");
        let s = void 0 === n ? "" : `(${n})`;
        return this.url.searchParams.append(e, `${i}fts${s}.${t}`), this
    }

    match(e) {
        return Object.entries(e).forEach(([e, t]) => {
            this.url.searchParams.append(e, `eq.${t}`)
        }), this
    }

    not(e, t, n) {
        return this.url.searchParams.append(e, `not.${t}.${n}`), this
    }

    or(e, {foreignTable: t, referencedTable: n = t} = {}) {
        let r = n ? `${n}.or` : "or";
        return this.url.searchParams.append(r, `(${e})`), this
    }

    filter(e, t, n) {
        return this.url.searchParams.append(e, `${t}.${n}`), this
    }
}

class M {
    constructor(e, {headers: t = {}, schema: n, fetch: r}) {
        this.url = e, this.headers = t, this.schema = n, this.fetch = r
    }

    select(e, {head: t = !1, count: n} = {}) {
        let r = !1,
            i = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !r ? "" : ('"' === e && (r = !r), e)).join("");
        return this.url.searchParams.set("select", i), n && (this.headers.Prefer = `count=${n}`), new j({
            method: t ? "HEAD" : "GET",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }

    insert(e, {count: t, defaultToNull: n = !0} = {}) {
        let r = [];
        if (this.headers.Prefer && r.push(this.headers.Prefer), t && r.push(`count=${t}`), n || r.push("missing=default"), this.headers.Prefer = r.join(","), Array.isArray(e)) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
                let e = [...new Set(t)].map(e => `"${e}"`);
                this.url.searchParams.set("columns", e.join(","))
            }
        }
        return new j({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }

    upsert(e, {onConflict: t, ignoreDuplicates: n = !1, count: r, defaultToNull: i = !0} = {}) {
        let s = [`resolution=${n ? "ignore" : "merge"}-duplicates`];
        if (void 0 !== t && this.url.searchParams.set("on_conflict", t), this.headers.Prefer && s.push(this.headers.Prefer), r && s.push(`count=${r}`), i || s.push("missing=default"), this.headers.Prefer = s.join(","), Array.isArray(e)) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
                let e = [...new Set(t)].map(e => `"${e}"`);
                this.url.searchParams.set("columns", e.join(","))
            }
        }
        return new j({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }

    update(e, {count: t} = {}) {
        let n = [];
        return this.headers.Prefer && n.push(this.headers.Prefer), t && n.push(`count=${t}`), this.headers.Prefer = n.join(","), new j({
            method: "PATCH",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }

    delete({count: e} = {}) {
        let t = [];
        return e && t.push(`count=${e}`), this.headers.Prefer && t.unshift(this.headers.Prefer), this.headers.Prefer = t.join(","), new j({
            method: "DELETE",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}

let N = {"X-Client-Info": "postgrest-js/1.15.2"};

class D {
    constructor(e, {headers: t = {}, schema: n, fetch: r} = {}) {
        this.url = e, this.headers = Object.assign(Object.assign({}, N), t), this.schemaName = n, this.fetch = r
    }

    from(e) {
        return new M(new URL(`${this.url}/${e}`), {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }

    schema(e) {
        return new D(this.url, {headers: this.headers, schema: e, fetch: this.fetch})
    }

    rpc(e, t = {}, {head: n = !1, get: r = !1, count: i} = {}) {
        let s, a;
        let o = new URL(`${this.url}/rpc/${e}`);
        n || r ? (s = n ? "HEAD" : "GET", Object.entries(t).filter(([e, t]) => void 0 !== t).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e, t]) => {
            o.searchParams.append(e, t)
        })) : (s = "POST", a = t);
        let l = Object.assign({}, this.headers);
        return i && (l.Prefer = `count=${i}`), new j({
            method: s,
            url: o,
            headers: l,
            schema: this.schemaName,
            body: a,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}

let L = {"X-Client-Info": "realtime-js/2.9.5"};
(w = h || (h = {}))[w.connecting = 0] = "connecting", w[w.open = 1] = "open", w[w.closing = 2] = "closing", w[w.closed = 3] = "closed", (S = d || (d = {})).closed = "closed", S.errored = "errored", S.joined = "joined", S.joining = "joining", S.leaving = "leaving", (E = p || (p = {})).close = "phx_close", E.error = "phx_error", E.join = "phx_join", E.reply = "phx_reply", E.leave = "phx_leave", E.access_token = "access_token", (f || (f = {})).websocket = "websocket", (k = m || (m = {})).Connecting = "connecting", k.Open = "open", k.Closing = "closing", k.Closed = "closed";

class F {
    constructor(e, t) {
        this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t
    }

    reset() {
        this.tries = 0, clearTimeout(this.timer)
    }

    scheduleTimeout() {
        clearTimeout(this.timer), this.timer = setTimeout(() => {
            this.tries = this.tries + 1, this.callback()
        }, this.timerCalc(this.tries + 1))
    }
}

class U {
    constructor() {
        this.HEADER_LENGTH = 1
    }

    decode(e, t) {
        return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : "string" == typeof e ? t(JSON.parse(e)) : t({})
    }

    _binaryDecode(e) {
        let t = new DataView(e), n = new TextDecoder;
        return this._decodeBroadcast(e, t, n)
    }

    _decodeBroadcast(e, t, n) {
        let r = t.getUint8(1), i = t.getUint8(2), s = this.HEADER_LENGTH + 2, a = n.decode(e.slice(s, s + r));
        s += r;
        let o = n.decode(e.slice(s, s + i));
        return s += i, {ref: null, topic: a, event: o, payload: JSON.parse(n.decode(e.slice(s, e.byteLength)))}
    }
}

class B {
    constructor(e, t, n = {}, r = 1e4) {
        this.channel = e, this.event = t, this.payload = n, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
    }

    resend(e) {
        this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
    }

    send() {
        this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }

    updatePayload(e) {
        this.payload = Object.assign(Object.assign({}, this.payload), e)
    }

    receive(e, t) {
        var n;
        return this._hasReceived(e) && t(null === (n = this.receivedResp) || void 0 === n ? void 0 : n.response), this.recHooks.push({
            status: e,
            callback: t
        }), this
    }

    startTimeout() {
        this.timeoutTimer || (this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref), this.channel._on(this.refEvent, {}, e => {
            this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e)
        }), this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {})
        }, this.timeout))
    }

    trigger(e, t) {
        this.refEvent && this.channel._trigger(this.refEvent, {status: e, response: t})
    }

    destroy() {
        this._cancelRefEvent(), this._cancelTimeout()
    }

    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }

    _cancelTimeout() {
        clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
    }

    _matchReceive({status: e, response: t}) {
        this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
    }

    _hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e
    }
}

(T = g || (g = {})).SYNC = "sync", T.JOIN = "join", T.LEAVE = "leave";

class z {
    constructor(e, t) {
        this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
            onJoin: () => {
            }, onLeave: () => {
            }, onSync: () => {
            }
        };
        let n = (null == t ? void 0 : t.events) || {state: "presence_state", diff: "presence_diff"};
        this.channel._on(n.state, {}, e => {
            let {onJoin: t, onLeave: n, onSync: r} = this.caller;
            this.joinRef = this.channel._joinRef(), this.state = z.syncState(this.state, e, t, n), this.pendingDiffs.forEach(e => {
                this.state = z.syncDiff(this.state, e, t, n)
            }), this.pendingDiffs = [], r()
        }), this.channel._on(n.diff, {}, e => {
            let {onJoin: t, onLeave: n, onSync: r} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = z.syncDiff(this.state, e, t, n), r())
        }), this.onJoin((e, t, n) => {
            this.channel._trigger("presence", {event: "join", key: e, currentPresences: t, newPresences: n})
        }), this.onLeave((e, t, n) => {
            this.channel._trigger("presence", {event: "leave", key: e, currentPresences: t, leftPresences: n})
        }), this.onSync(() => {
            this.channel._trigger("presence", {event: "sync"})
        })
    }

    static syncState(e, t, n, r) {
        let i = this.cloneDeep(e), s = this.transformState(t), a = {}, o = {};
        return this.map(i, (e, t) => {
            s[e] || (o[e] = t)
        }), this.map(s, (e, t) => {
            let n = i[e];
            if (n) {
                let r = t.map(e => e.presence_ref), i = n.map(e => e.presence_ref),
                    s = t.filter(e => 0 > i.indexOf(e.presence_ref)), l = n.filter(e => 0 > r.indexOf(e.presence_ref));
                s.length > 0 && (a[e] = s), l.length > 0 && (o[e] = l)
            } else a[e] = t
        }), this.syncDiff(i, {joins: a, leaves: o}, n, r)
    }

    static syncDiff(e, t, n, r) {
        let {joins: i, leaves: s} = {joins: this.transformState(t.joins), leaves: this.transformState(t.leaves)};
        return n || (n = () => {
        }), r || (r = () => {
        }), this.map(i, (t, r) => {
            var i;
            let s = null !== (i = e[t]) && void 0 !== i ? i : [];
            if (e[t] = this.cloneDeep(r), s.length > 0) {
                let n = e[t].map(e => e.presence_ref), r = s.filter(e => 0 > n.indexOf(e.presence_ref));
                e[t].unshift(...r)
            }
            n(t, s, r)
        }), this.map(s, (t, n) => {
            let i = e[t];
            if (!i) return;
            let s = n.map(e => e.presence_ref);
            i = i.filter(e => 0 > s.indexOf(e.presence_ref)), e[t] = i, r(t, i, n), 0 === i.length && delete e[t]
        }), e
    }

    static map(e, t) {
        return Object.getOwnPropertyNames(e).map(n => t(n, e[n]))
    }

    static transformState(e) {
        return Object.getOwnPropertyNames(e = this.cloneDeep(e)).reduce((t, n) => {
            let r = e[n];
            return "metas" in r ? t[n] = r.metas.map(e => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e)) : t[n] = r, t
        }, {})
    }

    static cloneDeep(e) {
        return JSON.parse(JSON.stringify(e))
    }

    onJoin(e) {
        this.caller.onJoin = e
    }

    onLeave(e) {
        this.caller.onLeave = e
    }

    onSync(e) {
        this.caller.onSync = e
    }

    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}

(x = y || (y = {})).abstime = "abstime", x.bool = "bool", x.date = "date", x.daterange = "daterange", x.float4 = "float4", x.float8 = "float8", x.int2 = "int2", x.int4 = "int4", x.int4range = "int4range", x.int8 = "int8", x.int8range = "int8range", x.json = "json", x.jsonb = "jsonb", x.money = "money", x.numeric = "numeric", x.oid = "oid", x.reltime = "reltime", x.text = "text", x.time = "time", x.timestamp = "timestamp", x.timestamptz = "timestamptz", x.timetz = "timetz", x.tsrange = "tsrange", x.tstzrange = "tstzrange";
let H = (e, t, n = {}) => {
    var r;
    let i = null !== (r = n.skipTypes) && void 0 !== r ? r : [];
    return Object.keys(t).reduce((n, r) => (n[r] = q(r, e, t, i), n), {})
}, q = (e, t, n, r) => {
    let i = t.find(t => t.name === e), s = null == i ? void 0 : i.type, a = n[e];
    return s && !r.includes(s) ? W(s, a) : G(a)
}, W = (e, t) => {
    if ("_" === e.charAt(0)) return Y(t, e.slice(1, e.length));
    switch (e) {
        case y.bool:
            return V(t);
        case y.float4:
        case y.float8:
        case y.int2:
        case y.int4:
        case y.int8:
        case y.numeric:
        case y.oid:
            return J(t);
        case y.json:
        case y.jsonb:
            return K(t);
        case y.timestamp:
            return X(t);
        case y.abstime:
        case y.date:
        case y.daterange:
        case y.int4range:
        case y.int8range:
        case y.money:
        case y.reltime:
        case y.text:
        case y.time:
        case y.timestamptz:
        case y.timetz:
        case y.tsrange:
        case y.tstzrange:
        default:
            return G(t)
    }
}, G = e => e, V = e => {
    switch (e) {
        case"t":
            return !0;
        case"f":
            return !1;
        default:
            return e
    }
}, J = e => {
    if ("string" == typeof e) {
        let t = parseFloat(e);
        if (!Number.isNaN(t)) return t
    }
    return e
}, K = e => {
    if ("string" == typeof e) try {
        return JSON.parse(e)
    } catch (e) {
        console.log(`JSON parse error: ${e}`)
    }
    return e
}, Y = (e, t) => {
    if ("string" != typeof e) return e;
    let n = e.length - 1, r = e[n];
    if ("{" === e[0] && "}" === r) {
        let r;
        let i = e.slice(1, n);
        try {
            r = JSON.parse("[" + i + "]")
        } catch (e) {
            r = i ? i.split(",") : []
        }
        return r.map(e => W(t, e))
    }
    return e
}, X = e => "string" == typeof e ? e.replace(" ", "T") : e;
(C = v || (v = {})).ALL = "*", C.INSERT = "INSERT", C.UPDATE = "UPDATE", C.DELETE = "DELETE", (I = _ || (_ = {})).BROADCAST = "broadcast", I.PRESENCE = "presence", I.POSTGRES_CHANGES = "postgres_changes", (O = b || (b = {})).SUBSCRIBED = "SUBSCRIBED", O.TIMED_OUT = "TIMED_OUT", O.CLOSED = "CLOSED", O.CHANNEL_ERROR = "CHANNEL_ERROR";

class Z {
    constructor(e, t = {config: {}}, n) {
        this.topic = e, this.params = t, this.socket = n, this.bindings = {}, this.state = d.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            }, presence: {key: ""}
        }, t.config), this.timeout = this.socket.timeout, this.joinPush = new B(this, p.join, this.params, this.timeout), this.rejoinTimer = new F(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
            this.state = d.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(e => e.send()), this.pushBuffer = []
        }), this._onClose(() => {
            this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = d.closed, this.socket._remove(this)
        }), this._onError(e => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e), this.state = d.errored, this.rejoinTimer.scheduleTimeout())
        }), this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = d.errored, this.rejoinTimer.scheduleTimeout())
        }), this._on(p.reply, {}, (e, t) => {
            this._trigger(this._replyEventName(t), e)
        }), this.presence = new z(this), this.broadcastEndpointURL = this._broadcastEndpointURL()
    }

    subscribe(e, t = this.timeout) {
        var n, r;
        if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
            let {config: {broadcast: i, presence: s}} = this.params;
            this._onError(t => e && e("CHANNEL_ERROR", t)), this._onClose(() => e && e("CLOSED"));
            let a = {}, o = {
                broadcast: i,
                presence: s,
                postgres_changes: null !== (r = null === (n = this.bindings.postgres_changes) || void 0 === n ? void 0 : n.map(e => e.filter)) && void 0 !== r ? r : []
            };
            this.socket.accessToken && (a.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({config: o}, a)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", ({postgres_changes: t}) => {
                var n;
                if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), void 0 === t) {
                    e && e("SUBSCRIBED");
                    return
                }
                {
                    let r = this.bindings.postgres_changes,
                        i = null !== (n = null == r ? void 0 : r.length) && void 0 !== n ? n : 0, s = [];
                    for (let n = 0; n < i; n++) {
                        let i = r[n], {filter: {event: a, schema: o, table: l, filter: c}} = i, u = t && t[n];
                        if (u && u.event === a && u.schema === o && u.table === l && u.filter === c) s.push(Object.assign(Object.assign({}, i), {id: u.id})); else {
                            this.unsubscribe(), e && e("CHANNEL_ERROR", Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = s, e && e("SUBSCRIBED");
                    return
                }
            }).receive("error", t => {
                e && e("CHANNEL_ERROR", Error(JSON.stringify(Object.values(t).join(", ") || "error")))
            }).receive("timeout", () => {
                e && e("TIMED_OUT")
            })
        }
        return this
    }

    presenceState() {
        return this.presence.state
    }

    async track(e, t = {}) {
        return await this.send({type: "presence", event: "track", payload: e}, t.timeout || this.timeout)
    }

    async untrack(e = {}) {
        return await this.send({type: "presence", event: "untrack"}, e)
    }

    on(e, t, n) {
        return this._on(e, t, n)
    }

    async send(e, t = {}) {
        var n, r;
        if (this._canPush() || "broadcast" !== e.type) return new Promise(n => {
            var r, i, s;
            let a = this._push(e.type, e, t.timeout || this.timeout);
            "broadcast" !== e.type || (null === (s = null === (i = null === (r = this.params) || void 0 === r ? void 0 : r.config) || void 0 === i ? void 0 : i.broadcast) || void 0 === s ? void 0 : s.ack) || n("ok"), a.receive("ok", () => n("ok")), a.receive("error", () => n("error")), a.receive("timeout", () => n("timed out"))
        });
        {
            let {event: i, payload: s} = e, a = {
                method: "POST",
                headers: {
                    apikey: null !== (n = this.socket.apiKey) && void 0 !== n ? n : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({messages: [{topic: this.subTopic, event: i, payload: s}]})
            };
            try {
                if ((await this._fetchWithTimeout(this.broadcastEndpointURL, a, null !== (r = t.timeout) && void 0 !== r ? r : this.timeout)).ok) return "ok";
                return "error"
            } catch (e) {
                if ("AbortError" === e.name) return "timed out";
                return "error"
            }
        }
    }

    updateJoinPayload(e) {
        this.joinPush.updatePayload(e)
    }

    unsubscribe(e = this.timeout) {
        this.state = d.leaving;
        let t = () => {
            this.socket.log("channel", `leave ${this.topic}`), this._trigger(p.close, "leave", this._joinRef())
        };
        return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise(n => {
            let r = new B(this, p.leave, {}, e);
            r.receive("ok", () => {
                t(), n("ok")
            }).receive("timeout", () => {
                t(), n("timed out")
            }).receive("error", () => {
                n("error")
            }), r.send(), this._canPush() || r.trigger("ok", {})
        })
    }

    _broadcastEndpointURL() {
        let e = this.socket.endPoint;
        return (e = (e = e.replace(/^ws/i, "http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")).replace(/\/+$/, "") + "/api/broadcast"
    }

    async _fetchWithTimeout(e, t, n) {
        let r = new AbortController, i = setTimeout(() => r.abort(), n),
            s = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {signal: r.signal}));
        return clearTimeout(i), s
    }

    _push(e, t, n = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let r = new B(this, e, t, n);
        return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r
    }

    _onMessage(e, t, n) {
        return t
    }

    _isMember(e) {
        return this.topic === e
    }

    _joinRef() {
        return this.joinPush.ref
    }

    _trigger(e, t, n) {
        var r, i;
        let s = e.toLocaleLowerCase(), {close: a, error: o, leave: l, join: c} = p;
        if (n && [a, o, l, c].indexOf(s) >= 0 && n !== this._joinRef()) return;
        let u = this._onMessage(s, t, n);
        if (t && !u) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(s) ? null === (r = this.bindings.postgres_changes) || void 0 === r || r.filter(e => {
            var t, n, r;
            return (null === (t = e.filter) || void 0 === t ? void 0 : t.event) === "*" || (null === (r = null === (n = e.filter) || void 0 === n ? void 0 : n.event) || void 0 === r ? void 0 : r.toLocaleLowerCase()) === s
        }).map(e => e.callback(u, n)) : null === (i = this.bindings[s]) || void 0 === i || i.filter(e => {
            var n, r, i, a, o, l;
            if (!["broadcast", "presence", "postgres_changes"].includes(s)) return e.type.toLocaleLowerCase() === s;
            if ("id" in e) {
                let s = e.id, a = null === (n = e.filter) || void 0 === n ? void 0 : n.event;
                return s && (null === (r = t.ids) || void 0 === r ? void 0 : r.includes(s)) && ("*" === a || (null == a ? void 0 : a.toLocaleLowerCase()) === (null === (i = t.data) || void 0 === i ? void 0 : i.type.toLocaleLowerCase()))
            }
            {
                let n = null === (o = null === (a = null == e ? void 0 : e.filter) || void 0 === a ? void 0 : a.event) || void 0 === o ? void 0 : o.toLocaleLowerCase();
                return "*" === n || n === (null === (l = null == t ? void 0 : t.event) || void 0 === l ? void 0 : l.toLocaleLowerCase())
            }
        }).map(e => {
            if ("object" == typeof u && "ids" in u) {
                let e = u.data, {schema: t, table: n, commit_timestamp: r, type: i, errors: s} = e;
                u = Object.assign(Object.assign({}, {
                    schema: t,
                    table: n,
                    commit_timestamp: r,
                    eventType: i,
                    new: {},
                    old: {},
                    errors: s
                }), this._getPayloadRecords(e))
            }
            e.callback(u, n)
        })
    }

    _isClosed() {
        return this.state === d.closed
    }

    _isJoined() {
        return this.state === d.joined
    }

    _isJoining() {
        return this.state === d.joining
    }

    _isLeaving() {
        return this.state === d.leaving
    }

    _replyEventName(e) {
        return `chan_reply_${e}`
    }

    _on(e, t, n) {
        let r = e.toLocaleLowerCase(), i = {type: r, filter: t, callback: n};
        return this.bindings[r] ? this.bindings[r].push(i) : this.bindings[r] = [i], this
    }

    _off(e, t) {
        let n = e.toLocaleLowerCase();
        return this.bindings[n] = this.bindings[n].filter(e => {
            var r;
            return !((null === (r = e.type) || void 0 === r ? void 0 : r.toLocaleLowerCase()) === n && Z.isEqual(e.filter, t))
        }), this
    }

    static isEqual(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0
    }

    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
    }

    _onClose(e) {
        this._on(p.close, {}, e)
    }

    _onError(e) {
        this._on(p.error, {}, t => e(t))
    }

    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }

    _rejoin(e = this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = d.joining, this.joinPush.resend(e))
    }

    _getPayloadRecords(e) {
        let t = {new: {}, old: {}};
        return ("INSERT" === e.type || "UPDATE" === e.type) && (t.new = H(e.columns, e.record)), ("UPDATE" === e.type || "DELETE" === e.type) && (t.old = H(e.columns, e.old_record)), t
    }
}

let Q = () => {
}, ee = "undefined" != typeof WebSocket;

class et {
    constructor(e, t) {
        var r;
        this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.headers = L, this.params = {}, this.timeout = 1e4, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Q, this.conn = null, this.sendBuffer = [], this.serializer = new U, this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        }, this._resolveFetch = e => {
            let t;
            return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(n.bind(n, 17018)).then(({default: t}) => t(...e)) : t = fetch, (...e) => t(...e)
        }, this.endPoint = `${e}/${f.websocket}`, (null == t ? void 0 : t.transport) ? this.transport = t.transport : this.transport = null, (null == t ? void 0 : t.params) && (this.params = t.params), (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout), (null == t ? void 0 : t.logger) && (this.logger = t.logger), (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
        let i = null === (r = null == t ? void 0 : t.params) || void 0 === r ? void 0 : r.apikey;
        i && (this.accessToken = i, this.apiKey = i), this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4, this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)), this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new F(async () => {
            this.disconnect(), this.connect()
        }, this.reconnectAfterMs), this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch)
    }

    connect() {
        if (!this.conn) {
            if (this.transport) {
                this.conn = new this.transport(this._endPointURL(), void 0, {headers: this.headers});
                return
            }
            if (ee) {
                this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
                return
            }
            this.conn = new en(this._endPointURL(), void 0, {
                close: () => {
                    this.conn = null
                }
            }), n.e(3708).then(n.t.bind(n, 63708, 23)).then(({default: e}) => {
                this.conn = new e(this._endPointURL(), void 0, {headers: this.headers}), this.setupConnection()
            })
        }
    }

    disconnect(e, t) {
        this.conn && (this.conn.onclose = function () {
        }, e ? this.conn.close(e, null != t ? t : "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
    }

    getChannels() {
        return this.channels
    }

    async removeChannel(e) {
        let t = await e.unsubscribe();
        return 0 === this.channels.length && this.disconnect(), t
    }

    async removeAllChannels() {
        let e = await Promise.all(this.channels.map(e => e.unsubscribe()));
        return this.disconnect(), e
    }

    log(e, t, n) {
        this.logger(e, t, n)
    }

    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case h.connecting:
                return m.Connecting;
            case h.open:
                return m.Open;
            case h.closing:
                return m.Closing;
            default:
                return m.Closed
        }
    }

    isConnected() {
        return this.connectionState() === m.Open
    }

    channel(e, t = {config: {}}) {
        let n = new Z(`realtime:${e}`, t, this);
        return this.channels.push(n), n
    }

    push(e) {
        let {topic: t, event: n, payload: r, ref: i} = e, s = () => {
            this.encode(e, e => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e)
            })
        };
        this.log("push", `${t} ${n} (${i})`, r), this.isConnected() ? s() : this.sendBuffer.push(s)
    }

    setAuth(e) {
        this.accessToken = e, this.channels.forEach(t => {
            e && t.updateJoinPayload({access_token: e}), t.joinedOnce && t._isJoined() && t._push(p.access_token, {access_token: e})
        })
    }

    _makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
    }

    _leaveOpenTopic(e) {
        let t = this.channels.find(t => t.topic === e && (t._isJoined() || t._isJoining()));
        t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe())
    }

    _remove(e) {
        this.channels = this.channels.filter(t => t._joinRef() !== e._joinRef())
    }

    setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = e => this._onConnError(e), this.conn.onmessage = e => this._onConnMessage(e), this.conn.onclose = e => this._onConnClose(e))
    }

    _endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {vsn: "1.0.0"}))
    }

    _onConnMessage(e) {
        this.decode(e.data, e => {
            let {topic: t, event: n, payload: r, ref: i} = e;
            (i && i === this.pendingHeartbeatRef || n === (null == r ? void 0 : r.type)) && (this.pendingHeartbeatRef = null), this.log("receive", `${r.status || ""} ${t} ${n} ${i && "(" + i + ")" || ""}`, r), this.channels.filter(e => e._isMember(t)).forEach(e => e._trigger(n, r, i)), this.stateChangeCallbacks.message.forEach(t => t(e))
        })
    }

    _onConnOpen() {
        this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach(e => e())
    }

    _onConnClose(e) {
        this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(t => t(e))
    }

    _onConnError(e) {
        this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(t => t(e))
    }

    _triggerChanError() {
        this.channels.forEach(e => e._trigger(p.error))
    }

    _appendParams(e, t) {
        if (0 === Object.keys(t).length) return e;
        let n = e.match(/\?/) ? "&" : "?", r = new URLSearchParams(t);
        return `${e}${n}${r}`
    }

    _flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()), this.sendBuffer = [])
    }

    _sendHeartbeat() {
        var e;
        if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout");
                return
            }
            this.pendingHeartbeatRef = this._makeRef(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }), this.setAuth(this.accessToken)
        }
    }
}

class en {
    constructor(e, t, n) {
        this.binaryType = "arraybuffer", this.onclose = () => {
        }, this.onerror = () => {
        }, this.onmessage = () => {
        }, this.onopen = () => {
        }, this.readyState = h.connecting, this.send = () => {
        }, this.url = null, this.url = e, this.close = n.close
    }
}

class er extends Error {
    constructor(e) {
        super(e), this.__isStorageError = !0, this.name = "StorageError"
    }
}

function ei(e) {
    return "object" == typeof e && null !== e && "__isStorageError" in e
}

class es extends er {
    constructor(e, t) {
        super(e), this.name = "StorageApiError", this.status = t
    }

    toJSON() {
        return {name: this.name, message: this.message, status: this.status}
    }
}

class ea extends er {
    constructor(e, t) {
        super(e), this.name = "StorageUnknownError", this.originalError = t
    }
}

let eo = e => {
    let t;
    return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(n.bind(n, 17018)).then(({default: t}) => t(...e)) : t = fetch, (...e) => t(...e)
}, el = () => {
    var e, t, r, i;
    return e = void 0, t = void 0, r = void 0, i = function* () {
        return "undefined" == typeof Response ? (yield Promise.resolve().then(n.bind(n, 17018))).Response : Response
    }, new (r || (r = Promise))(function (n, s) {
        function a(e) {
            try {
                l(i.next(e))
            } catch (e) {
                s(e)
            }
        }

        function o(e) {
            try {
                l(i.throw(e))
            } catch (e) {
                s(e)
            }
        }

        function l(e) {
            var t;
            e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
            })).then(a, o)
        }

        l((i = i.apply(e, t || [])).next())
    })
};
var ec = function (e, t, n, r) {
    return new (n || (n = Promise))(function (i, s) {
        function a(e) {
            try {
                l(r.next(e))
            } catch (e) {
                s(e)
            }
        }

        function o(e) {
            try {
                l(r.throw(e))
            } catch (e) {
                s(e)
            }
        }

        function l(e) {
            var t;
            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                e(t)
            })).then(a, o)
        }

        l((r = r.apply(e, t || [])).next())
    })
};
let eu = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
    eh = (e, t) => ec(void 0, void 0, void 0, function* () {
        e instanceof (yield el()) ? e.json().then(n => {
            t(new es(eu(n), e.status || 500))
        }).catch(e => {
            t(new ea(eu(e), e))
        }) : t(new ea(eu(e), e))
    }), ed = (e, t, n, r) => {
        let i = {method: e, headers: (null == t ? void 0 : t.headers) || {}};
        return "GET" === e ? i : (i.headers = Object.assign({"Content-Type": "application/json"}, null == t ? void 0 : t.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n))
    };

function ep(e, t, n, r, i, s) {
    return ec(this, void 0, void 0, function* () {
        return new Promise((a, o) => {
            e(n, ed(t, r, i, s)).then(e => {
                if (!e.ok) throw e;
                return (null == r ? void 0 : r.noResolveJson) ? e : e.json()
            }).then(e => a(e)).catch(e => eh(e, o))
        })
    })
}

function ef(e, t, n, r) {
    return ec(this, void 0, void 0, function* () {
        return ep(e, "GET", t, n, r)
    })
}

function em(e, t, n, r, i) {
    return ec(this, void 0, void 0, function* () {
        return ep(e, "POST", t, r, i, n)
    })
}

function eg(e, t, n, r, i) {
    return ec(this, void 0, void 0, function* () {
        return ep(e, "DELETE", t, r, i, n)
    })
}

var ey = function (e, t, n, r) {
    return new (n || (n = Promise))(function (i, s) {
        function a(e) {
            try {
                l(r.next(e))
            } catch (e) {
                s(e)
            }
        }

        function o(e) {
            try {
                l(r.throw(e))
            } catch (e) {
                s(e)
            }
        }

        function l(e) {
            var t;
            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                e(t)
            })).then(a, o)
        }

        l((r = r.apply(e, t || [])).next())
    })
};
let ev = {limit: 100, offset: 0, sortBy: {column: "name", order: "asc"}},
    e_ = {cacheControl: "3600", contentType: "text/plain;charset=UTF-8", upsert: !1};

class eb {
    constructor(e, t = {}, n, r) {
        this.url = e, this.headers = t, this.bucketId = n, this.fetch = eo(r)
    }

    uploadOrUpdate(e, t, n, r) {
        return ey(this, void 0, void 0, function* () {
            try {
                let i;
                let s = Object.assign(Object.assign({}, e_), r),
                    a = Object.assign(Object.assign({}, this.headers), "POST" === e && {"x-upsert": String(s.upsert)});
                "undefined" != typeof Blob && n instanceof Blob ? ((i = new FormData).append("cacheControl", s.cacheControl), i.append("", n)) : "undefined" != typeof FormData && n instanceof FormData ? (i = n).append("cacheControl", s.cacheControl) : (i = n, a["cache-control"] = `max-age=${s.cacheControl}`, a["content-type"] = s.contentType);
                let o = this._removeEmptyFolders(t), l = this._getFinalPath(o),
                    c = yield this.fetch(`${this.url}/object/${l}`, Object.assign({
                        method: e,
                        body: i,
                        headers: a
                    }, (null == s ? void 0 : s.duplex) ? {duplex: s.duplex} : {})), u = yield c.json();
                if (c.ok) return {data: {path: o, id: u.Id, fullPath: u.Key}, error: null};
                return {data: null, error: u}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    upload(e, t, n) {
        return ey(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, n)
        })
    }

    uploadToSignedUrl(e, t, n, r) {
        return ey(this, void 0, void 0, function* () {
            let i = this._removeEmptyFolders(e), s = this._getFinalPath(i),
                a = new URL(this.url + `/object/upload/sign/${s}`);
            a.searchParams.set("token", t);
            try {
                let e;
                let t = Object.assign({upsert: e_.upsert}, r),
                    s = Object.assign(Object.assign({}, this.headers), {"x-upsert": String(t.upsert)});
                "undefined" != typeof Blob && n instanceof Blob ? ((e = new FormData).append("cacheControl", t.cacheControl), e.append("", n)) : "undefined" != typeof FormData && n instanceof FormData ? (e = n).append("cacheControl", t.cacheControl) : (e = n, s["cache-control"] = `max-age=${t.cacheControl}`, s["content-type"] = t.contentType);
                let o = yield this.fetch(a.toString(), {method: "PUT", body: e, headers: s}), l = yield o.json();
                if (o.ok) return {data: {path: i, fullPath: l.Key}, error: null};
                return {data: null, error: l}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    createSignedUploadUrl(e) {
        return ey(this, void 0, void 0, function* () {
            try {
                let t = this._getFinalPath(e),
                    n = yield em(this.fetch, `${this.url}/object/upload/sign/${t}`, {}, {headers: this.headers}),
                    r = new URL(this.url + n.url), i = r.searchParams.get("token");
                if (!i) throw new er("No token returned by API");
                return {data: {signedUrl: r.toString(), path: e, token: i}, error: null}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    update(e, t, n) {
        return ey(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, n)
        })
    }

    move(e, t) {
        return ey(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield em(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: e,
                        destinationKey: t
                    }, {headers: this.headers}), error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    copy(e, t) {
        return ey(this, void 0, void 0, function* () {
            try {
                return {
                    data: {
                        path: (yield em(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: t
                        }, {headers: this.headers})).Key
                    }, error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    createSignedUrl(e, t, n) {
        return ey(this, void 0, void 0, function* () {
            try {
                let r = this._getFinalPath(e),
                    i = yield em(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({expiresIn: t}, (null == n ? void 0 : n.transform) ? {transform: n.transform} : {}), {headers: this.headers}),
                    s = (null == n ? void 0 : n.download) ? `&download=${!0 === n.download ? "" : n.download}` : "";
                return {data: i = {signedUrl: encodeURI(`${this.url}${i.signedURL}${s}`)}, error: null}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    createSignedUrls(e, t, n) {
        return ey(this, void 0, void 0, function* () {
            try {
                let r = yield em(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                        expiresIn: t,
                        paths: e
                    }, {headers: this.headers}),
                    i = (null == n ? void 0 : n.download) ? `&download=${!0 === n.download ? "" : n.download}` : "";
                return {
                    data: r.map(e => Object.assign(Object.assign({}, e), {signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${i}`) : null})),
                    error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    download(e, t) {
        return ey(this, void 0, void 0, function* () {
            let n = void 0 !== (null == t ? void 0 : t.transform),
                r = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {}), i = r ? `?${r}` : "";
            try {
                let t = this._getFinalPath(e),
                    r = yield ef(this.fetch, `${this.url}/${n ? "render/image/authenticated" : "object"}/${t}${i}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    });
                return {data: yield r.blob(), error: null}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    getPublicUrl(e, t) {
        let n = this._getFinalPath(e), r = [],
            i = (null == t ? void 0 : t.download) ? `download=${!0 === t.download ? "" : t.download}` : "";
        "" !== i && r.push(i);
        let s = void 0 !== (null == t ? void 0 : t.transform),
            a = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {});
        "" !== a && r.push(a);
        let o = r.join("&");
        return "" !== o && (o = `?${o}`), {data: {publicUrl: encodeURI(`${this.url}/${s ? "render/image" : "object"}/public/${n}${o}`)}}
    }

    remove(e) {
        return ey(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield eg(this.fetch, `${this.url}/object/${this.bucketId}`, {prefixes: e}, {headers: this.headers}),
                    error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    list(e, t, n) {
        return ey(this, void 0, void 0, function* () {
            try {
                let r = Object.assign(Object.assign(Object.assign({}, ev), t), {prefix: e || ""});
                return {
                    data: yield em(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, {headers: this.headers}, n),
                    error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    _getFinalPath(e) {
        return `${this.bucketId}/${e}`
    }

    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }

    transformOptsToQueryString(e) {
        let t = [];
        return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&")
    }
}

let ew = {"X-Client-Info": "storage-js/2.5.5"};
var eS = function (e, t, n, r) {
    return new (n || (n = Promise))(function (i, s) {
        function a(e) {
            try {
                l(r.next(e))
            } catch (e) {
                s(e)
            }
        }

        function o(e) {
            try {
                l(r.throw(e))
            } catch (e) {
                s(e)
            }
        }

        function l(e) {
            var t;
            e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                e(t)
            })).then(a, o)
        }

        l((r = r.apply(e, t || [])).next())
    })
};

class eE {
    constructor(e, t = {}, n) {
        this.url = e, this.headers = Object.assign(Object.assign({}, ew), t), this.fetch = eo(n)
    }

    listBuckets() {
        return eS(this, void 0, void 0, function* () {
            try {
                return {data: yield ef(this.fetch, `${this.url}/bucket`, {headers: this.headers}), error: null}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    getBucket(e) {
        return eS(this, void 0, void 0, function* () {
            try {
                return {data: yield ef(this.fetch, `${this.url}/bucket/${e}`, {headers: this.headers}), error: null}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    createBucket(e, t = {public: !1}) {
        return eS(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield em(this.fetch, `${this.url}/bucket`, {
                        id: e,
                        name: e,
                        public: t.public,
                        file_size_limit: t.fileSizeLimit,
                        allowed_mime_types: t.allowedMimeTypes
                    }, {headers: this.headers}), error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    updateBucket(e, t) {
        return eS(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield function (e, t, n, r, i) {
                        return ec(this, void 0, void 0, function* () {
                            return ep(e, "PUT", t, r, void 0, n)
                        })
                    }(this.fetch, `${this.url}/bucket/${e}`, {
                        id: e,
                        name: e,
                        public: t.public,
                        file_size_limit: t.fileSizeLimit,
                        allowed_mime_types: t.allowedMimeTypes
                    }, {headers: this.headers}), error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    emptyBucket(e) {
        return eS(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield em(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {headers: this.headers}),
                    error: null
                }
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    deleteBucket(e) {
        return eS(this, void 0, void 0, function* () {
            try {
                return {data: yield eg(this.fetch, `${this.url}/bucket/${e}`, {}, {headers: this.headers}), error: null}
            } catch (e) {
                if (ei(e)) return {data: null, error: e};
                throw e
            }
        })
    }
}

class ek extends eE {
    constructor(e, t = {}, n) {
        super(e, t, n)
    }

    from(e) {
        return new eb(this.url, this.headers, e, this.fetch)
    }
}

let eT = "";
"undefined" != typeof Deno ? eT = "deno" : "undefined" != typeof document ? eT = "web" : "undefined" != typeof navigator && "ReactNative" === navigator.product ? eT = "react-native" : eT = "node";
let ex = {headers: {"X-Client-Info": `supabase-js-${eT}/2.43.1`}}, eC = {schema: "public"},
    eI = {autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0, flowType: "implicit"}, eO = {}, eR = e => {
        let t;
        return e ? t = e : "undefined" == typeof fetch ? t = R.default : t = fetch, (...e) => t(...e)
    }, eA = () => "undefined" == typeof Headers ? R.Headers : Headers, e$ = (e, t, n) => {
        let r = eR(n), i = eA();
        return (n, s) => {
            var a, o, l, c;
            return a = void 0, o = void 0, l = void 0, c = function* () {
                var a;
                let o = null !== (a = yield t()) && void 0 !== a ? a : e, l = new i(null == s ? void 0 : s.headers);
                return l.has("apikey") || l.set("apikey", e), l.has("Authorization") || l.set("Authorization", `Bearer ${o}`), r(n, Object.assign(Object.assign({}, s), {headers: l}))
            }, new (l || (l = Promise))(function (e, t) {
                function n(e) {
                    try {
                        i(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        i(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(t) {
                    var i;
                    t.done ? e(t.value) : ((i = t.value) instanceof l ? i : new l(function (e) {
                        e(i)
                    })).then(n, r)
                }

                i((c = c.apply(a, o || [])).next())
            })
        }
    }, eP = "2.64.2", ej = {"X-Client-Info": `gotrue-js/${eP}`}, eM = "X-Supabase-Api-Version",
    eN = {"2024-01-01": {timestamp: Date.parse("2024-01-01T00:00:00.0Z"), name: "2024-01-01"}},
    eD = () => "undefined" != typeof document, eL = {tested: !1, writable: !1}, eF = () => {
        if (!eD()) return !1;
        try {
            if ("object" != typeof globalThis.localStorage) return !1
        } catch (e) {
            return !1
        }
        if (eL.tested) return eL.writable;
        let e = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), eL.tested = !0, eL.writable = !0
        } catch (e) {
            eL.tested = !0, eL.writable = !1
        }
        return eL.writable
    };

function eU(e) {
    let t = {}, n = new URL(e);
    if (n.hash && "#" === n.hash[0]) try {
        new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
            t[n] = e
        })
    } catch (e) {
    }
    return n.searchParams.forEach((e, n) => {
        t[n] = e
    }), t
}

let eB = e => {
        let t;
        return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(n.bind(n, 17018)).then(({default: t}) => t(...e)) : t = fetch, (...e) => t(...e)
    },
    ez = e => "object" == typeof e && null !== e && "status" in e && "ok" in e && "json" in e && "function" == typeof e.json,
    eH = async (e, t, n) => {
        await e.setItem(t, JSON.stringify(n))
    }, eq = async (e, t) => {
        let n = await e.getItem(t);
        if (!n) return null;
        try {
            return JSON.parse(n)
        } catch (e) {
            return n
        }
    }, eW = async (e, t) => {
        await e.removeItem(t)
    };

class eG {
    constructor() {
        this.promise = new eG.promiseConstructor((e, t) => {
            this.resolve = e, this.reject = t
        })
    }
}

function eV(e) {
    let t = e.split(".");
    if (3 !== t.length) throw Error("JWT is not valid: not a JWT structure");
    if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1])) throw Error("JWT is not valid: payload is not in base64url format");
    return JSON.parse(function (e) {
        let t, n, r, i, s, a, o;
        let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = "", u = 0;
        for (e = e.replace("-", "+").replace("_", "/"); u < e.length;) i = l.indexOf(e.charAt(u++)), s = l.indexOf(e.charAt(u++)), a = l.indexOf(e.charAt(u++)), o = l.indexOf(e.charAt(u++)), t = i << 2 | s >> 4, n = (15 & s) << 4 | a >> 2, r = (3 & a) << 6 | o, c += String.fromCharCode(t), 64 != a && 0 != n && (c += String.fromCharCode(n)), 64 != o && 0 != r && (c += String.fromCharCode(r));
        return c
    }(t[1]))
}

async function eJ(e) {
    return await new Promise(t => {
        setTimeout(() => t(null), e)
    })
}

function eK(e) {
    return ("0" + e.toString(16)).substr(-2)
}

async function eY(e) {
    let t = new TextEncoder().encode(e);
    return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", t))).map(e => String.fromCharCode(e)).join("")
}

async function eX(e) {
    return "undefined" != typeof crypto && void 0 !== crypto.subtle && "undefined" != typeof TextEncoder ? btoa(await eY(e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : (console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e)
}

async function eZ(e, t, n = !1) {
    let r = function () {
        let e = new Uint32Array(56);
        if ("undefined" == typeof crypto) {
            let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", t = e.length, n = "";
            for (let r = 0; r < 56; r++) n += e.charAt(Math.floor(Math.random() * t));
            return n
        }
        return crypto.getRandomValues(e), Array.from(e, eK).join("")
    }(), i = r;
    n && (i += "/PASSWORD_RECOVERY"), await eH(e, `${t}-code-verifier`, i);
    let s = await eX(r), a = r === s ? "plain" : "s256";
    return [s, a]
}

eG.promiseConstructor = Promise;
let eQ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;

class e0 extends Error {
    constructor(e, t, n) {
        super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = n
    }
}

function e1(e) {
    return "object" == typeof e && null !== e && "__isAuthError" in e
}

class e2 extends e0 {
    constructor(e, t, n) {
        super(e, t, n), this.name = "AuthApiError", this.status = t, this.code = n
    }
}

class e3 extends e0 {
    constructor(e, t) {
        super(e), this.name = "AuthUnknownError", this.originalError = t
    }
}

class e5 extends e0 {
    constructor(e, t, n, r) {
        super(e, n, r), this.name = t, this.status = n
    }
}

class e4 extends e5 {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}

class e9 extends e5 {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}

class e8 extends e5 {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0)
    }
}

class e6 extends e5 {
    constructor(e, t = null) {
        super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t
    }

    toJSON() {
        return {name: this.name, message: this.message, status: this.status, details: this.details}
    }
}

class e7 extends e5 {
    constructor(e, t = null) {
        super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t
    }

    toJSON() {
        return {name: this.name, message: this.message, status: this.status, details: this.details}
    }
}

class te extends e5 {
    constructor(e, t) {
        super(e, "AuthRetryableFetchError", t, void 0)
    }
}

function tt(e) {
    return e1(e) && "AuthRetryableFetchError" === e.name
}

class tn extends e5 {
    constructor(e, t, n) {
        super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = n
    }
}

var tr = function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};
let ti = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), ts = [502, 503, 504];

async function ta(e) {
    var t;
    let n, r;
    if (!ez(e)) throw new te(ti(e), 0);
    if (ts.includes(e.status)) throw new te(ti(e), e.status);
    try {
        n = await e.json()
    } catch (e) {
        throw new e3(ti(e), e)
    }
    let i = function (e) {
        let t = e.headers.get(eM);
        if (!t || !t.match(eQ)) return null;
        try {
            return new Date(`${t}T00:00:00.0Z`)
        } catch (e) {
            return null
        }
    }(e);
    if (i && i.getTime() >= eN["2024-01-01"].timestamp && "object" == typeof n && n && "string" == typeof n.code ? r = n.code : "object" == typeof n && n && "string" == typeof n.error_code && (r = n.error_code), r) {
        if ("weak_password" === r) throw new tn(ti(n), e.status, (null === (t = n.weak_password) || void 0 === t ? void 0 : t.reasons) || [])
    } else if ("object" == typeof n && n && "object" == typeof n.weak_password && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce((e, t) => e && "string" == typeof t, !0)) throw new tn(ti(n), e.status, n.weak_password.reasons);
    throw new e2(ti(n), e.status || 500, r)
}

let to = (e, t, n, r) => {
    let i = {method: e, headers: (null == t ? void 0 : t.headers) || {}};
    return "GET" === e ? i : (i.headers = Object.assign({"Content-Type": "application/json;charset=UTF-8"}, null == t ? void 0 : t.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n))
};

async function tl(e, t, n, r) {
    var i;
    let s = Object.assign({}, null == r ? void 0 : r.headers);
    s[eM] || (s[eM] = eN["2024-01-01"].name), (null == r ? void 0 : r.jwt) && (s.Authorization = `Bearer ${r.jwt}`);
    let a = null !== (i = null == r ? void 0 : r.query) && void 0 !== i ? i : {};
    (null == r ? void 0 : r.redirectTo) && (a.redirect_to = r.redirectTo);
    let o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await tc(e, t, n + o, {
        headers: s,
        noResolveJson: null == r ? void 0 : r.noResolveJson
    }, {}, null == r ? void 0 : r.body);
    return (null == r ? void 0 : r.xform) ? null == r ? void 0 : r.xform(l) : {data: Object.assign({}, l), error: null}
}

async function tc(e, t, n, r, i, s) {
    let a;
    let o = to(t, r, i, s);
    try {
        a = await e(n, Object.assign({}, o))
    } catch (e) {
        throw console.error(e), new te(ti(e), 0)
    }
    if (a.ok || await ta(a), null == r ? void 0 : r.noResolveJson) return a;
    try {
        return await a.json()
    } catch (e) {
        await ta(e)
    }
}

function tu(e) {
    var t, n;
    let r = null;
    return e.access_token && e.refresh_token && e.expires_in && (r = Object.assign({}, e), !e.expires_at) && (r.expires_at = (n = e.expires_in, Math.round(Date.now() / 1e3) + n)), {
        data: {
            session: r,
            user: null !== (t = e.user) && void 0 !== t ? t : e
        }, error: null
    }
}

function th(e) {
    let t = tu(e);
    return !t.error && e.weak_password && "object" == typeof e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && "string" == typeof e.weak_password.message && e.weak_password.reasons.reduce((e, t) => e && "string" == typeof t, !0) && (t.data.weak_password = e.weak_password), t
}

function td(e) {
    var t;
    return {data: {user: null !== (t = e.user) && void 0 !== t ? t : e}, error: null}
}

function tp(e) {
    return {data: e, error: null}
}

function tf(e) {
    let {action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: s} = e;
    return {
        data: {
            properties: {action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: s},
            user: Object.assign({}, tr(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]))
        }, error: null
    }
}

function tm(e) {
    return e
}

var tg = function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};

class ty {
    constructor({url: e = "", headers: t = {}, fetch: n}) {
        this.url = e, this.headers = t, this.fetch = eB(n), this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }

    async signOut(e, t = "global") {
        try {
            return await tl(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0
            }), {data: null, error: null}
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async inviteUserByEmail(e, t = {}) {
        try {
            return await tl(this.fetch, "POST", `${this.url}/invite`, {
                body: {email: e, data: t.data},
                headers: this.headers,
                redirectTo: t.redirectTo,
                xform: td
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    async generateLink(e) {
        try {
            let {options: t} = e, n = tg(e, ["options"]), r = Object.assign(Object.assign({}, n), t);
            return "newEmail" in n && (r.new_email = null == n ? void 0 : n.newEmail, delete r.newEmail), await tl(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: r,
                headers: this.headers,
                xform: tf,
                redirectTo: null == t ? void 0 : t.redirectTo
            })
        } catch (e) {
            if (e1(e)) return {data: {properties: null, user: null}, error: e};
            throw e
        }
    }

    async createUser(e) {
        try {
            return await tl(this.fetch, "POST", `${this.url}/admin/users`, {body: e, headers: this.headers, xform: td})
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    async listUsers(e) {
        var t, n, r, i, s, a, o;
        try {
            let l = {nextPage: null, lastPage: 0, total: 0},
                c = await tl(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: null !== (n = null === (t = null == e ? void 0 : e.page) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
                        per_page: null !== (i = null === (r = null == e ? void 0 : e.perPage) || void 0 === r ? void 0 : r.toString()) && void 0 !== i ? i : ""
                    },
                    xform: tm
                });
            if (c.error) throw c.error;
            let u = await c.json(), h = null !== (s = c.headers.get("x-total-count")) && void 0 !== s ? s : 0,
                d = null !== (o = null === (a = c.headers.get("link")) || void 0 === a ? void 0 : a.split(",")) && void 0 !== o ? o : [];
            return d.length > 0 && (d.forEach(e => {
                let t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1)),
                    n = JSON.parse(e.split(";")[1].split("=")[1]);
                l[`${n}Page`] = t
            }), l.total = parseInt(h)), {data: Object.assign(Object.assign({}, u), l), error: null}
        } catch (e) {
            if (e1(e)) return {data: {users: []}, error: e};
            throw e
        }
    }

    async getUserById(e) {
        try {
            return await tl(this.fetch, "GET", `${this.url}/admin/users/${e}`, {headers: this.headers, xform: td})
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    async updateUserById(e, t) {
        try {
            return await tl(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                body: t,
                headers: this.headers,
                xform: td
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    async deleteUser(e, t = !1) {
        try {
            return await tl(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: {should_soft_delete: t},
                xform: td
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    async _listFactors(e) {
        try {
            let {
                data: t,
                error: n
            } = await tl(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: e => ({data: {factors: e}, error: null})
            });
            return {data: t, error: n}
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async _deleteFactor(e) {
        try {
            return {
                data: await tl(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {headers: this.headers}),
                error: null
            }
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }
}

let tv = {
    getItem: e => eF() ? globalThis.localStorage.getItem(e) : null, setItem: (e, t) => {
        eF() && globalThis.localStorage.setItem(e, t)
    }, removeItem: e => {
        eF() && globalThis.localStorage.removeItem(e)
    }
};

function t_(e = {}) {
    return {
        getItem: t => e[t] || null, setItem: (t, n) => {
            e[t] = n
        }, removeItem: t => {
            delete e[t]
        }
    }
}

let tb = {debug: !!(globalThis && eF() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))};

class tw extends Error {
    constructor(e) {
        super(e), this.isAcquireTimeout = !0
    }
}

class tS extends tw {
}

async function tE(e, t, n) {
    tb.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    let r = new globalThis.AbortController;
    return t > 0 && setTimeout(() => {
        r.abort(), tb.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }, t), await globalThis.navigator.locks.request(e, 0 === t ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {mode: "exclusive", signal: r.signal}, async r => {
        if (r) {
            tb.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, r.name);
            try {
                return await n()
            } finally {
                tb.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, r.name)
            }
        } else {
            if (0 === t) throw tb.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new tS(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (tb.debug) try {
                let e = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "))
            } catch (e) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e)
            }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await n()
        }
    })
}

!function () {
    if ("object" != typeof globalThis) try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function () {
                return this
            }, configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
    } catch (e) {
        "undefined" != typeof self && (self.globalThis = self)
    }
}();
let tk = {
    url: "http://localhost:9999",
    storageKey: "supabase.auth.token",
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: ej,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};

async function tT(e, t, n) {
    return await n()
}

class tx {
    constructor(e) {
        var t, n;
        this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = tx.nextInstanceID, tx.nextInstanceID += 1, this.instanceID > 0 && eD() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        let r = Object.assign(Object.assign({}, tk), e);
        if (this.logDebugMessages = !!r.debug, "function" == typeof r.debug && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new ty({
            url: r.url,
            headers: r.headers,
            fetch: r.fetch
        }), this.url = r.url, this.headers = r.headers, this.fetch = eB(r.fetch), this.lock = r.lock || tT, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, r.lock ? this.lock = r.lock : eD() && (null === (t = null == globalThis ? void 0 : globalThis.navigator) || void 0 === t ? void 0 : t.locks) ? this.lock = tE : this.lock = tT, this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        }, this.persistSession ? r.storage ? this.storage = r.storage : eF() ? this.storage = tv : (this.memoryStorage = {}, this.storage = t_(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = t_(this.memoryStorage)), eD() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (e) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e)
            }
            null === (n = this.broadcastChannel) || void 0 === n || n.addEventListener("message", async e => {
                this._debug("received broadcast notification from other tab or client", e), await this._notifyAllSubscribers(e.data.event, e.data.session, !1)
            })
        }
        this.initialize()
    }

    _debug(...e) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${eP}) ${new Date().toISOString()}`, ...e), this
    }

    async initialize() {
        return this.initializePromise || (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))()), await this.initializePromise
    }

    async _initialize() {
        try {
            let e = !!eD() && await this._isPKCEFlow();
            if (this._debug("#_initialize()", "begin", "is PKCE flow", e), e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                let {data: t, error: n} = await this._getSessionFromURL(e);
                if (n) {
                    if (this._debug("#_initialize()", "error detecting session from URL", n), (null == n ? void 0 : n.message) === "Identity is already linked" || (null == n ? void 0 : n.message) === "Identity is already linked to another user") return {error: n};
                    return await this._removeSession(), {error: n}
                }
                let {session: r, redirectType: i} = t;
                return this._debug("#_initialize()", "detected session in URL", r, "redirect type", i), await this._saveSession(r), setTimeout(async () => {
                    "recovery" === i ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", r) : await this._notifyAllSubscribers("SIGNED_IN", r)
                }, 0), {error: null}
            }
            return await this._recoverAndRefresh(), {error: null}
        } catch (e) {
            if (e1(e)) return {error: e};
            return {error: new e3("Unexpected error during initialization", e)}
        } finally {
            await this._handleVisibilityChange(), this._debug("#_initialize()", "end")
        }
    }

    async signInAnonymously(e) {
        var t, n, r;
        try {
            await this._removeSession();
            let {data: i, error: s} = await tl(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: null !== (n = null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : {},
                    gotrue_meta_security: {captcha_token: null === (r = null == e ? void 0 : e.options) || void 0 === r ? void 0 : r.captchaToken}
                },
                xform: tu
            });
            if (s || !i) return {data: {user: null, session: null}, error: s};
            let a = i.session, o = i.user;
            return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", a)), {
                data: {
                    user: o,
                    session: a
                }, error: null
            }
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async signUp(e) {
        var t, n, r;
        try {
            let i;
            if (await this._removeSession(), "email" in e) {
                let {email: n, password: r, options: s} = e, a = null, o = null;
                "pkce" === this.flowType && ([a, o] = await eZ(this.storage, this.storageKey)), i = await tl(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: null == s ? void 0 : s.emailRedirectTo,
                    body: {
                        email: n,
                        password: r,
                        data: null !== (t = null == s ? void 0 : s.data) && void 0 !== t ? t : {},
                        gotrue_meta_security: {captcha_token: null == s ? void 0 : s.captchaToken},
                        code_challenge: a,
                        code_challenge_method: o
                    },
                    xform: tu
                })
            } else if ("phone" in e) {
                let {phone: t, password: s, options: a} = e;
                i = await tl(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: t,
                        password: s,
                        data: null !== (n = null == a ? void 0 : a.data) && void 0 !== n ? n : {},
                        channel: null !== (r = null == a ? void 0 : a.channel) && void 0 !== r ? r : "sms",
                        gotrue_meta_security: {captcha_token: null == a ? void 0 : a.captchaToken}
                    },
                    xform: tu
                })
            } else throw new e8("You must provide either an email or phone number and a password");
            let {data: s, error: a} = i;
            if (a || !s) return {data: {user: null, session: null}, error: a};
            let o = s.session, l = s.user;
            return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", o)), {
                data: {
                    user: l,
                    session: o
                }, error: null
            }
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async signInWithPassword(e) {
        try {
            let t;
            if (await this._removeSession(), "email" in e) {
                let {email: n, password: r, options: i} = e;
                t = await tl(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: n,
                        password: r,
                        gotrue_meta_security: {captcha_token: null == i ? void 0 : i.captchaToken}
                    },
                    xform: th
                })
            } else if ("phone" in e) {
                let {phone: n, password: r, options: i} = e;
                t = await tl(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        password: r,
                        gotrue_meta_security: {captcha_token: null == i ? void 0 : i.captchaToken}
                    },
                    xform: th
                })
            } else throw new e8("You must provide either an email or phone number and a password");
            let {data: n, error: r} = t;
            if (r) return {data: {user: null, session: null}, error: r};
            if (!n || !n.session || !n.user) return {data: {user: null, session: null}, error: new e9};
            return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {weakPassword: n.weak_password} : null), error: r
            }
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async signInWithOAuth(e) {
        var t, n, r, i;
        return await this._removeSession(), await this._handleProviderSignIn(e.provider, {
            redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
            scopes: null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
            queryParams: null === (r = e.options) || void 0 === r ? void 0 : r.queryParams,
            skipBrowserRedirect: null === (i = e.options) || void 0 === i ? void 0 : i.skipBrowserRedirect
        })
    }

    async exchangeCodeForSession(e) {
        return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
    }

    async _exchangeCodeForSession(e) {
        let t = await eq(this.storage, `${this.storageKey}-code-verifier`), [n, r] = (null != t ? t : "").split("/"), {
            data: i,
            error: s
        } = await tl(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
            headers: this.headers,
            body: {auth_code: e, code_verifier: n},
            xform: tu
        });
        return (await eW(this.storage, `${this.storageKey}-code-verifier`), s) ? {
            data: {
                user: null,
                session: null,
                redirectType: null
            }, error: s
        } : i && i.session && i.user ? (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), {
            data: Object.assign(Object.assign({}, i), {redirectType: null != r ? r : null}),
            error: s
        }) : {data: {user: null, session: null, redirectType: null}, error: new e9}
    }

    async signInWithIdToken(e) {
        await this._removeSession();
        try {
            let {options: t, provider: n, token: r, access_token: i, nonce: s} = e, {
                data: a,
                error: o
            } = await tl(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: r,
                    access_token: i,
                    nonce: s,
                    gotrue_meta_security: {captcha_token: null == t ? void 0 : t.captchaToken}
                },
                xform: tu
            });
            if (o) return {data: {user: null, session: null}, error: o};
            if (!a || !a.session || !a.user) return {data: {user: null, session: null}, error: new e9};
            return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", a.session)), {
                data: a,
                error: o
            }
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async signInWithOtp(e) {
        var t, n, r, i, s;
        try {
            if (await this._removeSession(), "email" in e) {
                let {email: r, options: i} = e, s = null, a = null;
                "pkce" === this.flowType && ([s, a] = await eZ(this.storage, this.storageKey));
                let {error: o} = await tl(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: r,
                        data: null !== (t = null == i ? void 0 : i.data) && void 0 !== t ? t : {},
                        create_user: null === (n = null == i ? void 0 : i.shouldCreateUser) || void 0 === n || n,
                        gotrue_meta_security: {captcha_token: null == i ? void 0 : i.captchaToken},
                        code_challenge: s,
                        code_challenge_method: a
                    },
                    redirectTo: null == i ? void 0 : i.emailRedirectTo
                });
                return {data: {user: null, session: null}, error: o}
            }
            if ("phone" in e) {
                let {phone: t, options: n} = e, {
                    data: a,
                    error: o
                } = await tl(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: t,
                        data: null !== (r = null == n ? void 0 : n.data) && void 0 !== r ? r : {},
                        create_user: null === (i = null == n ? void 0 : n.shouldCreateUser) || void 0 === i || i,
                        gotrue_meta_security: {captcha_token: null == n ? void 0 : n.captchaToken},
                        channel: null !== (s = null == n ? void 0 : n.channel) && void 0 !== s ? s : "sms"
                    }
                });
                return {data: {user: null, session: null, messageId: null == a ? void 0 : a.message_id}, error: o}
            }
            throw new e8("You must provide either an email or phone number.")
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async verifyOtp(e) {
        var t, n;
        try {
            let r, i;
            "email_change" !== e.type && "phone_change" !== e.type && await this._removeSession(), "options" in e && (r = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo, i = null === (n = e.options) || void 0 === n ? void 0 : n.captchaToken);
            let {data: s, error: a} = await tl(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {gotrue_meta_security: {captcha_token: i}}),
                redirectTo: r,
                xform: tu
            });
            if (a) throw a;
            if (!s) throw Error("An error occurred on token verification.");
            let o = s.session, l = s.user;
            return (null == o ? void 0 : o.access_token) && (await this._saveSession(o), await this._notifyAllSubscribers("recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN", o)), {
                data: {
                    user: l,
                    session: o
                }, error: null
            }
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async signInWithSSO(e) {
        var t, n, r;
        try {
            await this._removeSession();
            let i = null, s = null;
            return "pkce" === this.flowType && ([i, s] = await eZ(this.storage, this.storageKey)), await tl(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {provider_id: e.providerId} : null), "domain" in e ? {domain: e.domain} : null), {redirect_to: null !== (n = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo) && void 0 !== n ? n : void 0}), (null === (r = null == e ? void 0 : e.options) || void 0 === r ? void 0 : r.captchaToken) ? {gotrue_meta_security: {captcha_token: e.options.captchaToken}} : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: s
                }), headers: this.headers, xform: tp
            })
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate())
    }

    async _reauthenticate() {
        try {
            return await this._useSession(async e => {
                let {data: {session: t}, error: n} = e;
                if (n) throw n;
                if (!t) throw new e4;
                let {error: r} = await tl(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: t.access_token
                });
                return {data: {user: null, session: null}, error: r}
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async resend(e) {
        try {
            "email_change" != e.type && "phone_change" != e.type && await this._removeSession();
            let t = `${this.url}/resend`;
            if ("email" in e) {
                let {
                    email: n,
                    type: r,
                    options: i
                } = e, {error: s} = await tl(this.fetch, "POST", t, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: r,
                        gotrue_meta_security: {captcha_token: null == i ? void 0 : i.captchaToken}
                    },
                    redirectTo: null == i ? void 0 : i.emailRedirectTo
                });
                return {data: {user: null, session: null}, error: s}
            }
            if ("phone" in e) {
                let {phone: n, type: r, options: i} = e, {
                    data: s,
                    error: a
                } = await tl(this.fetch, "POST", t, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: r,
                        gotrue_meta_security: {captcha_token: null == i ? void 0 : i.captchaToken}
                    }
                });
                return {data: {user: null, session: null, messageId: null == s ? void 0 : s.message_id}, error: a}
            }
            throw new e8("You must provide either an email or phone number and a type")
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async getSession() {
        return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async e => e))
    }

    async _acquireLock(e, t) {
        this._debug("#_acquireLock", "begin", e);
        try {
            if (this.lockAcquired) {
                let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                    n = (async () => (await e, await t()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await n
                    } catch (e) {
                    }
                })()), n
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    let e = t();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await e
                        } catch (e) {
                        }
                    })()), await e; this.pendingInLock.length;) {
                        let e = [...this.pendingInLock];
                        await Promise.all(e), this.pendingInLock.splice(0, e.length)
                    }
                    return await e
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1
                }
            })
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }

    async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
            let t = await this.__loadSession();
            return await e(t)
        } finally {
            this._debug("#_useSession", "end")
        }
    }

    async __loadSession() {
        this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", Error().stack);
        try {
            let e = null, t = await eq(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", t), null !== t && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
                data: {session: null},
                error: null
            };
            let n = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
                if (this.storage.isServer) {
                    let t = this.suppressGetSessionWarning;
                    e = new Proxy(e, {get: (e, n, r) => (t || "user" !== n || console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), Reflect.get(e, n, r))})
                }
                return {data: {session: e}, error: null}
            }
            let {session: r, error: i} = await this._callRefreshToken(e.refresh_token);
            if (i) return {data: {session: null}, error: i};
            return {data: {session: r}, error: null}
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }

    async getUser(e) {
        return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()))
    }

    async _getUser(e) {
        try {
            if (e) return await tl(this.fetch, "GET", `${this.url}/user`, {headers: this.headers, jwt: e, xform: td});
            return await this._useSession(async e => {
                var t, n, r;
                let {data: i, error: s} = e;
                if (s) throw s;
                return (null === (t = i.session) || void 0 === t ? void 0 : t.access_token) || this.hasCustomAuthorizationHeader ? await tl(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: null !== (r = null === (n = i.session) || void 0 === n ? void 0 : n.access_token) && void 0 !== r ? r : void 0,
                    xform: td
                }) : {data: {user: null}, error: new e4}
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    async updateUser(e, t = {}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t))
    }

    async _updateUser(e, t = {}) {
        try {
            return await this._useSession(async n => {
                let {data: r, error: i} = n;
                if (i) throw i;
                if (!r.session) throw new e4;
                let s = r.session, a = null, o = null;
                "pkce" === this.flowType && null != e.email && ([a, o] = await eZ(this.storage, this.storageKey));
                let {data: l, error: c} = await tl(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: null == t ? void 0 : t.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), {code_challenge: a, code_challenge_method: o}),
                    jwt: s.access_token,
                    xform: td
                });
                if (c) throw c;
                return s.user = l.user, await this._saveSession(s), await this._notifyAllSubscribers("USER_UPDATED", s), {
                    data: {user: s.user},
                    error: null
                }
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null}, error: e};
            throw e
        }
    }

    _decodeJWT(e) {
        return eV(e)
    }

    async setSession(e) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e))
    }

    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token) throw new e4;
            let t = Date.now() / 1e3, n = t, r = !0, i = null, s = eV(e.access_token);
            if (s.exp && (r = (n = s.exp) <= t), r) {
                let {session: t, error: n} = await this._callRefreshToken(e.refresh_token);
                if (n) return {data: {user: null, session: null}, error: n};
                if (!t) return {data: {user: null, session: null}, error: null};
                i = t
            } else {
                let {data: r, error: s} = await this._getUser(e.access_token);
                if (s) throw s;
                i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: r.user,
                    token_type: "bearer",
                    expires_in: n - t,
                    expires_at: n
                }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {data: {user: i.user, session: i}, error: null}
        } catch (e) {
            if (e1(e)) return {data: {session: null, user: null}, error: e};
            throw e
        }
    }

    async refreshSession(e) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e))
    }

    async _refreshSession(e) {
        try {
            return await this._useSession(async t => {
                var n;
                if (!e) {
                    let {data: r, error: i} = t;
                    if (i) throw i;
                    e = null !== (n = r.session) && void 0 !== n ? n : void 0
                }
                if (!(null == e ? void 0 : e.refresh_token)) throw new e4;
                let {session: r, error: i} = await this._callRefreshToken(e.refresh_token);
                return i ? {data: {user: null, session: null}, error: i} : r ? {
                    data: {user: r.user, session: r},
                    error: null
                } : {data: {user: null, session: null}, error: null}
            })
        } catch (e) {
            if (e1(e)) return {data: {user: null, session: null}, error: e};
            throw e
        }
    }

    async _getSessionFromURL(e) {
        try {
            if (!eD()) throw new e6("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
                if ("pkce" == this.flowType && !e) throw new e7("Not a valid PKCE flow url.")
            } else throw new e6("Not a valid implicit grant flow url.");
            let t = eU(window.location.href);
            if (e) {
                if (!t.code) throw new e7("No code detected.");
                let {data: e, error: n} = await this._exchangeCodeForSession(t.code);
                if (n) throw n;
                let r = new URL(window.location.href);
                return r.searchParams.delete("code"), window.history.replaceState(window.history.state, "", r.toString()), {
                    data: {
                        session: e.session,
                        redirectType: null
                    }, error: null
                }
            }
            if (t.error || t.error_description || t.error_code) throw new e6(t.error_description || "Error in URL with unspecified error_description", {
                error: t.error || "unspecified_error",
                code: t.error_code || "unspecified_code"
            });
            let {
                provider_token: n,
                provider_refresh_token: r,
                access_token: i,
                refresh_token: s,
                expires_in: a,
                expires_at: o,
                token_type: l
            } = t;
            if (!i || !a || !s || !l) throw new e6("No session defined in URL");
            let c = Math.round(Date.now() / 1e3), u = parseInt(a), h = c + u;
            o && (h = parseInt(o));
            let d = h - c;
            1e3 * d <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${u}s`);
            let p = h - u;
            c - p >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, h, c) : c - p < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", p, h, c);
            let {data: f, error: m} = await this._getUser(i);
            if (m) throw m;
            let g = {
                provider_token: n,
                provider_refresh_token: r,
                access_token: i,
                expires_in: u,
                expires_at: h,
                refresh_token: s,
                token_type: l,
                user: f.user
            };
            return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
                data: {
                    session: g,
                    redirectType: t.type
                }, error: null
            }
        } catch (e) {
            if (e1(e)) return {data: {session: null, redirectType: null}, error: e};
            throw e
        }
    }

    _isImplicitGrantFlow() {
        let e = eU(window.location.href);
        return !!(eD() && (e.access_token || e.error_description))
    }

    async _isPKCEFlow() {
        let e = eU(window.location.href), t = await eq(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e.code && t)
    }

    async signOut(e = {scope: "global"}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e))
    }

    async _signOut({scope: e} = {scope: "global"}) {
        return await this._useSession(async t => {
            var n;
            let {data: r, error: i} = t;
            if (i) return {error: i};
            let s = null === (n = r.session) || void 0 === n ? void 0 : n.access_token;
            if (s) {
                let {error: t} = await this.admin.signOut(s, e);
                if (t && !(e1(t) && "AuthApiError" === t.name && (404 === t.status || 401 === t.status || 403 === t.status))) return {error: t}
            }
            return "others" !== e && (await this._removeSession(), await eW(this.storage, `${this.storageKey}-code-verifier`), await this._notifyAllSubscribers("SIGNED_OUT", null)), {error: null}
        })
    }

    onAuthStateChange(e) {
        let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            let t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        }), n = {
            id: t, callback: e, unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, n), (async () => {
            await this.initializePromise, await this._acquireLock(-1, async () => {
                this._emitInitialSession(t)
            })
        })(), {data: {subscription: n}}
    }

    async _emitInitialSession(e) {
        return await this._useSession(async t => {
            var n, r;
            try {
                let {data: {session: r}, error: i} = t;
                if (i) throw i;
                await (null === (n = this.stateChangeEmitters.get(e)) || void 0 === n ? void 0 : n.callback("INITIAL_SESSION", r)), this._debug("INITIAL_SESSION", "callback id", e, "session", r)
            } catch (t) {
                await (null === (r = this.stateChangeEmitters.get(e)) || void 0 === r ? void 0 : r.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", t), console.error(t)
            }
        })
    }

    async resetPasswordForEmail(e, t = {}) {
        let n = null, r = null;
        "pkce" === this.flowType && ([n, r] = await eZ(this.storage, this.storageKey, !0));
        try {
            return await tl(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: n,
                    code_challenge_method: r,
                    gotrue_meta_security: {captcha_token: t.captchaToken}
                }, headers: this.headers, redirectTo: t.redirectTo
            })
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async getUserIdentities() {
        var e;
        try {
            let {data: t, error: n} = await this.getUser();
            if (n) throw n;
            return {data: {identities: null !== (e = t.user.identities) && void 0 !== e ? e : []}, error: null}
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async linkIdentity(e) {
        var t;
        try {
            let {data: n, error: r} = await this._useSession(async t => {
                var n, r, i, s, a;
                let {data: o, error: l} = t;
                if (l) throw l;
                let c = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: null === (n = e.options) || void 0 === n ? void 0 : n.redirectTo,
                    scopes: null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                    queryParams: null === (i = e.options) || void 0 === i ? void 0 : i.queryParams,
                    skipBrowserRedirect: !0
                });
                return await tl(this.fetch, "GET", c, {
                    headers: this.headers,
                    jwt: null !== (a = null === (s = o.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== a ? a : void 0
                })
            });
            if (r) throw r;
            return !eD() || (null === (t = e.options) || void 0 === t ? void 0 : t.skipBrowserRedirect) || window.location.assign(null == n ? void 0 : n.url), {
                data: {
                    provider: e.provider,
                    url: null == n ? void 0 : n.url
                }, error: null
            }
        } catch (t) {
            if (e1(t)) return {data: {provider: e.provider, url: null}, error: t};
            throw t
        }
    }

    async unlinkIdentity(e) {
        try {
            return await this._useSession(async t => {
                var n, r;
                let {data: i, error: s} = t;
                if (s) throw s;
                return await tl(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt: null !== (r = null === (n = i.session) || void 0 === n ? void 0 : n.access_token) && void 0 !== r ? r : void 0
                })
            })
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async _refreshAccessToken(e) {
        let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
        this._debug(t, "begin");
        try {
            var n, r;
            let i = Date.now();
            return await (n = async n => (n > 0 && await eJ(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await tl(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {refresh_token: e},
                headers: this.headers,
                xform: tu
            })), r = (e, t) => t && tt(t) && Date.now() + 200 * Math.pow(2, e) - i < 3e4, new Promise((e, t) => {
                (async () => {
                    for (let i = 0; i < 1 / 0; i++) try {
                        let t = await n(i);
                        if (!r(i, null, t)) {
                            e(t);
                            return
                        }
                    } catch (e) {
                        if (!r(i, e)) {
                            t(e);
                            return
                        }
                    }
                })()
            }))
        } catch (e) {
            if (this._debug(t, "error", e), e1(e)) return {data: {session: null, user: null}, error: e};
            throw e
        } finally {
            this._debug(t, "end")
        }
    }

    _isValidSession(e) {
        return "object" == typeof e && null !== e && "access_token" in e && "refresh_token" in e && "expires_at" in e
    }

    async _handleProviderSignIn(e, t) {
        let n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", n), eD() && !t.skipBrowserRedirect && window.location.assign(n), {
            data: {
                provider: e,
                url: n
            }, error: null
        }
    }

    async _recoverAndRefresh() {
        var e;
        let t = "#_recoverAndRefresh()";
        this._debug(t, "begin");
        try {
            let n = await eq(this.storage, this.storageKey);
            if (this._debug(t, "session from storage", n), !this._isValidSession(n)) {
                this._debug(t, "session is not valid"), null !== n && await this._removeSession();
                return
            }
            let r = Math.round(Date.now() / 1e3),
                i = (null !== (e = n.expires_at) && void 0 !== e ? e : 1 / 0) < r + 10;
            if (this._debug(t, `session has${i ? "" : " not"} expired with margin of 10s`), i) {
                if (this.autoRefreshToken && n.refresh_token) {
                    let {error: e} = await this._callRefreshToken(n.refresh_token);
                    e && (console.error(e), tt(e) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", e), await this._removeSession()))
                }
            } else await this._notifyAllSubscribers("SIGNED_IN", n)
        } catch (e) {
            this._debug(t, "error", e), console.error(e);
            return
        } finally {
            this._debug(t, "end")
        }
    }

    async _callRefreshToken(e) {
        var t, n;
        if (!e) throw new e4;
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
        this._debug(r, "begin");
        try {
            this.refreshingDeferred = new eG;
            let {data: t, error: n} = await this._refreshAccessToken(e);
            if (n) throw n;
            if (!t.session) throw new e4;
            await this._saveSession(t.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            let r = {session: t.session, error: null};
            return this.refreshingDeferred.resolve(r), r
        } catch (e) {
            if (this._debug(r, "error", e), e1(e)) {
                let n = {session: null, error: e};
                return tt(e) || (await this._removeSession(), await this._notifyAllSubscribers("SIGNED_OUT", null)), null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(n), n
            }
            throw null === (n = this.refreshingDeferred) || void 0 === n || n.reject(e), e
        } finally {
            this.refreshingDeferred = null, this._debug(r, "end")
        }
    }

    async _notifyAllSubscribers(e, t, n = !0) {
        let r = `#_notifyAllSubscribers(${e})`;
        this._debug(r, "begin", t, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({event: e, session: t});
            let r = [], i = Array.from(this.stateChangeEmitters.values()).map(async n => {
                try {
                    await n.callback(e, t)
                } catch (e) {
                    r.push(e)
                }
            });
            if (await Promise.all(i), r.length > 0) {
                for (let e = 0; e < r.length; e += 1) console.error(r[e]);
                throw r[0]
            }
        } finally {
            this._debug(r, "end")
        }
    }

    async _saveSession(e) {
        this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await eH(this.storage, this.storageKey, e)
    }

    async _removeSession() {
        this._debug("#_removeSession()"), await eW(this.storage, this.storageKey)
    }

    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        let e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e && eD() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
        } catch (e) {
            console.error("removing visibilitychange callback failed", e)
        }
    }

    async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
        this.autoRefreshTicker = e, e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e), setTimeout(async () => {
            await this.initializePromise, await this._autoRefreshTokenTick()
        }, 0)
    }

    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        let e = this.autoRefreshTicker;
        this.autoRefreshTicker = null, e && clearInterval(e)
    }

    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
    }

    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
    }

    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    let e = Date.now();
                    try {
                        return await this._useSession(async t => {
                            let {data: {session: n}} = t;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            let r = Math.floor((1e3 * n.expires_at - e) / 3e4);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`), r <= 3 && await this._callRefreshToken(n.refresh_token)
                        })
                    } catch (e) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", e)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            })
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof tw) this._debug("auto refresh token tick lock not available"); else throw e
        }
    }

    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"), !eD() || !(null == window ? void 0 : window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), null == window || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0)
        } catch (e) {
            console.error("_handleVisibilityChange", e)
        }
    }

    async _onVisibilityChanged(e) {
        let t = `#_onVisibilityChanged(${e})`;
        this._debug(t, "visibilityState", document.visibilityState), "visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
            if ("visible" !== document.visibilityState) {
                this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
    }

    async _getUrlForProvider(e, t, n) {
        let r = [`provider=${encodeURIComponent(t)}`];
        if ((null == n ? void 0 : n.redirectTo) && r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), (null == n ? void 0 : n.scopes) && r.push(`scopes=${encodeURIComponent(n.scopes)}`), "pkce" === this.flowType) {
            let [e, t] = await eZ(this.storage, this.storageKey), n = new URLSearchParams({
                code_challenge: `${encodeURIComponent(e)}`,
                code_challenge_method: `${encodeURIComponent(t)}`
            });
            r.push(n.toString())
        }
        if (null == n ? void 0 : n.queryParams) {
            let e = new URLSearchParams(n.queryParams);
            r.push(e.toString())
        }
        return (null == n ? void 0 : n.skipBrowserRedirect) && r.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${r.join("&")}`
    }

    async _unenroll(e) {
        try {
            return await this._useSession(async t => {
                var n;
                let {data: r, error: i} = t;
                return i ? {
                    data: null,
                    error: i
                } : await tl(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                    headers: this.headers,
                    jwt: null === (n = null == r ? void 0 : r.session) || void 0 === n ? void 0 : n.access_token
                })
            })
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async _enroll(e) {
        try {
            return await this._useSession(async t => {
                var n, r;
                let {data: i, error: s} = t;
                if (s) return {data: null, error: s};
                let {
                    data: a,
                    error: o
                } = await tl(this.fetch, "POST", `${this.url}/factors`, {
                    body: {
                        friendly_name: e.friendlyName,
                        factor_type: e.factorType,
                        issuer: e.issuer
                    },
                    headers: this.headers,
                    jwt: null === (n = null == i ? void 0 : i.session) || void 0 === n ? void 0 : n.access_token
                });
                return o ? {
                    data: null,
                    error: o
                } : ((null === (r = null == a ? void 0 : a.totp) || void 0 === r ? void 0 : r.qr_code) && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`), {
                    data: a,
                    error: null
                })
            })
        } catch (e) {
            if (e1(e)) return {data: null, error: e};
            throw e
        }
    }

    async _verify(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async t => {
                    var n;
                    let {data: r, error: i} = t;
                    if (i) return {data: null, error: i};
                    let {
                        data: s,
                        error: a
                    } = await tl(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                        body: {
                            code: e.code,
                            challenge_id: e.challengeId
                        },
                        headers: this.headers,
                        jwt: null === (n = null == r ? void 0 : r.session) || void 0 === n ? void 0 : n.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (await this._saveSession(Object.assign({expires_at: Math.round(Date.now() / 1e3) + s.expires_in}, s)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s), {
                        data: s,
                        error: a
                    })
                })
            } catch (e) {
                if (e1(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    async _challenge(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async t => {
                    var n;
                    let {data: r, error: i} = t;
                    return i ? {
                        data: null,
                        error: i
                    } : await tl(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                        headers: this.headers,
                        jwt: null === (n = null == r ? void 0 : r.session) || void 0 === n ? void 0 : n.access_token
                    })
                })
            } catch (e) {
                if (e1(e)) return {data: null, error: e};
                throw e
            }
        })
    }

    async _challengeAndVerify(e) {
        let {data: t, error: n} = await this._challenge({factorId: e.factorId});
        return n ? {data: null, error: n} : await this._verify({factorId: e.factorId, challengeId: t.id, code: e.code})
    }

    async _listFactors() {
        let {data: {user: e}, error: t} = await this.getUser();
        if (t) return {data: null, error: t};
        let n = (null == e ? void 0 : e.factors) || [],
            r = n.filter(e => "totp" === e.factor_type && "verified" === e.status);
        return {data: {all: n, totp: r}, error: null}
    }

    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async e => {
            var t, n;
            let {data: {session: r}, error: i} = e;
            if (i) return {data: null, error: i};
            if (!r) return {data: {currentLevel: null, nextLevel: null, currentAuthenticationMethods: []}, error: null};
            let s = this._decodeJWT(r.access_token), a = null;
            s.aal && (a = s.aal);
            let o = a;
            return (null !== (n = null === (t = r.user.factors) || void 0 === t ? void 0 : t.filter(e => "verified" === e.status)) && void 0 !== n ? n : []).length > 0 && (o = "aal2"), {
                data: {
                    currentLevel: a,
                    nextLevel: o,
                    currentAuthenticationMethods: s.amr || []
                }, error: null
            }
        }))
    }
}

tx.nextInstanceID = 0;
var tC = tx;

class tI extends tC {
    constructor(e) {
        super(e)
    }
}

class tO {
    constructor(e, t, n) {
        var r, i, s, a, o, l, c, u;
        if (this.supabaseUrl = e, this.supabaseKey = t, !e) throw Error("supabaseUrl is required.");
        if (!t) throw Error("supabaseKey is required.");
        let h = e.replace(/\/$/, "");
        this.realtimeUrl = `${h}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${h}/auth/v1`, this.storageUrl = `${h}/storage/v1`, this.functionsUrl = `${h}/functions/v1`;
        let d = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, p = function (e, t) {
            let {db: n, auth: r, realtime: i, global: s} = e, {db: a, auth: o, realtime: l, global: c} = t;
            return {
                db: Object.assign(Object.assign({}, a), n),
                auth: Object.assign(Object.assign({}, o), r),
                realtime: Object.assign(Object.assign({}, l), i),
                global: Object.assign(Object.assign({}, c), s)
            }
        }(null != n ? n : {}, {
            db: eC,
            realtime: eO,
            auth: Object.assign(Object.assign({}, eI), {storageKey: d}),
            global: ex
        });
        this.storageKey = null !== (i = null === (r = p.auth) || void 0 === r ? void 0 : r.storageKey) && void 0 !== i ? i : "", this.headers = null !== (a = null === (s = p.global) || void 0 === s ? void 0 : s.headers) && void 0 !== a ? a : {}, this.auth = this._initSupabaseAuthClient(null !== (o = p.auth) && void 0 !== o ? o : {}, this.headers, null === (l = p.global) || void 0 === l ? void 0 : l.fetch), this.fetch = e$(t, this._getAccessToken.bind(this), null === (c = p.global) || void 0 === c ? void 0 : c.fetch), this.realtime = this._initRealtimeClient(Object.assign({headers: this.headers}, p.realtime)), this.rest = new D(`${h}/rest/v1`, {
            headers: this.headers,
            schema: null === (u = p.db) || void 0 === u ? void 0 : u.schema,
            fetch: this.fetch
        }), this._listenForAuthEvents()
    }

    get functions() {
        return new l(this.functionsUrl, {headers: this.headers, customFetch: this.fetch})
    }

    get storage() {
        return new ek(this.storageUrl, this.headers, this.fetch)
    }

    from(e) {
        return this.rest.from(e)
    }

    schema(e) {
        return this.rest.schema(e)
    }

    rpc(e, t = {}, n = {}) {
        return this.rest.rpc(e, t, n)
    }

    channel(e, t = {config: {}}) {
        return this.realtime.channel(e, t)
    }

    getChannels() {
        return this.realtime.getChannels()
    }

    removeChannel(e) {
        return this.realtime.removeChannel(e)
    }

    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }

    _getAccessToken() {
        var e, t, n, r, i, s;
        return n = this, r = void 0, i = void 0, s = function* () {
            let {data: n} = yield this.auth.getSession();
            return null !== (t = null === (e = n.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null
        }, new (i || (i = Promise))(function (e, t) {
            function a(e) {
                try {
                    l(s.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    l(s.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function l(t) {
                var n;
                t.done ? e(t.value) : ((n = t.value) instanceof i ? n : new i(function (e) {
                    e(n)
                })).then(a, o)
            }

            l((s = s.apply(n, r || [])).next())
        })
    }

    _initSupabaseAuthClient({
                                autoRefreshToken: e,
                                persistSession: t,
                                detectSessionInUrl: n,
                                storage: r,
                                storageKey: i,
                                flowType: s,
                                debug: a
                            }, o, l) {
        var c;
        let u = {Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}`};
        return new tI({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, u), o),
            storageKey: i,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: n,
            storage: r,
            flowType: s,
            debug: a,
            fetch: l,
            hasCustomAuthorizationHeader: "Authorization" in this.headers
        })
    }

    _initRealtimeClient(e) {
        return new et(this.realtimeUrl, Object.assign(Object.assign({}, e), {params: Object.assign({apikey: this.supabaseKey}, null == e ? void 0 : e.params)}))
    }

    _listenForAuthEvents() {
        return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(e, "CLIENT", null == t ? void 0 : t.access_token)
        })
    }

    _handleTokenChanged(e, t, n) {
        ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) && this.changedAccessToken !== n ? (this.realtime.setAuth(null != n ? n : null), this.changedAccessToken = n) : "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey), "STORAGE" == t && this.auth.signOut(), this.changedAccessToken = void 0)
    }
}

let tR = new tO("https://bxkgqurwqjmvrqekcbws.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4a2dxdXJ3cWptdnJxZWtjYndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDU0MjUsImV4cCI6MjAwNjIyMTQyNX0.3nZ0yhuFjnI3yHbAL8S9UtK-Ny-6F5AylNHgo1tymTU", void 0)
},
30534
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        j: function () {
            return i
        }
    });
    var r = n(97688);
    let i = (e, t, n) => {
        r.ZP.event({category: e, action: t, label: n})
    }
}

,
70924
:

function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function () {
            return H
        }
    });
    var r = n(11527), i = n(85951), s = n.n(i), a = n(50959), o = n(72155), l = n.n(o), c = n(88954), u = n.n(c),
        h = n(85778);

    function d(e) {
        return "auto" === e || "dark" === e || "light" === e
    }

    var p = n(23168), f = n(49340), m = n(12274), g = n(1138), y = n(34233);

    function v() {
        let e = (0, y.rZ)(), t = (0, p.R7)(), n = (0, f.X)(e.breakpoints).reduce((t, n) => {
            let r = e.breakpoints[n].includes("px"), i = (0, m.px)(e.breakpoints[n]),
                s = r ? `${i - .1}px` : (0, g.em)(i - .1), a = r ? `${i}px` : (0, g.em)(i);
            return `${t}@media (max-width: ${s}) {.mantine-visible-from-${n} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${n} {display: none !important;}}`
        }, "");
        return (0, r.jsx)("style", {
            "data-mantine-styles": "classes",
            nonce: t?.(),
            dangerouslySetInnerHTML: {__html: n}
        })
    }

    function _(e) {
        return Object.entries(e).map(([e, t]) => `${e}: ${t};`).join("")
    }

    function b(e, t) {
        return (Array.isArray(e) ? e : [e]).reduce((e, t) => `${t}{${e}}`, t)
    }

    var w = n(31686), S = n(42670), E = n(79122), k = n(71132);

    function T({theme: e, color: t, colorScheme: n, name: r = t, withColorValues: i = !0}) {
        if (!e.colors[t]) return {};
        if ("light" === n) {
            let n = (0, S.j)(e, "light"), s = {
                [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
                [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${n})`,
                [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${9 === n ? 8 : n + 1})`,
                [`--mantine-color-${r}-light`]: (0, k.F)(e.colors[t][n], .1),
                [`--mantine-color-${r}-light-hover`]: (0, k.F)(e.colors[t][n], .12),
                [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${n})`,
                [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${n})`,
                [`--mantine-color-${r}-outline-hover`]: (0, k.F)(e.colors[t][n], .05)
            };
            return i ? {
                [`--mantine-color-${r}-0`]: e.colors[t][0],
                [`--mantine-color-${r}-1`]: e.colors[t][1],
                [`--mantine-color-${r}-2`]: e.colors[t][2],
                [`--mantine-color-${r}-3`]: e.colors[t][3],
                [`--mantine-color-${r}-4`]: e.colors[t][4],
                [`--mantine-color-${r}-5`]: e.colors[t][5],
                [`--mantine-color-${r}-6`]: e.colors[t][6],
                [`--mantine-color-${r}-7`]: e.colors[t][7],
                [`--mantine-color-${r}-8`]: e.colors[t][8],
                [`--mantine-color-${r}-9`]: e.colors[t][9], ...s
            } : s
        }
        let s = (0, S.j)(e, "dark"), a = {
            [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
            [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
            [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${9 === s ? 8 : s + 1})`,
            [`--mantine-color-${r}-light`]: (0, k.F)(e.colors[t][Math.max(0, s - 2)], .15),
            [`--mantine-color-${r}-light-hover`]: (0, k.F)(e.colors[t][Math.max(0, s - 2)], .2),
            [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(s - 5, 0)})`,
            [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(s - 4, 0)})`,
            [`--mantine-color-${r}-outline-hover`]: (0, k.F)(e.colors[t][Math.max(s - 4, 0)], .05)
        };
        return i ? {
            [`--mantine-color-${r}-0`]: e.colors[t][0],
            [`--mantine-color-${r}-1`]: e.colors[t][1],
            [`--mantine-color-${r}-2`]: e.colors[t][2],
            [`--mantine-color-${r}-3`]: e.colors[t][3],
            [`--mantine-color-${r}-4`]: e.colors[t][4],
            [`--mantine-color-${r}-5`]: e.colors[t][5],
            [`--mantine-color-${r}-6`]: e.colors[t][6],
            [`--mantine-color-${r}-7`]: e.colors[t][7],
            [`--mantine-color-${r}-8`]: e.colors[t][8],
            [`--mantine-color-${r}-9`]: e.colors[t][9], ...a
        } : a
    }

    function x(e, t, n) {
        (0, f.X)(t).forEach(r => Object.assign(e, {[`--mantine-${n}-${r}`]: t[r]}))
    }

    let C = e => {
        let t = (0, S.j)(e, "light"),
            n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : (0, g.h)(e.defaultRadius), r = {
                variables: {
                    "--mantine-scale": e.scale.toString(),
                    "--mantine-cursor-type": e.cursorType,
                    "--mantine-color-scheme": "light dark",
                    "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
                    "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
                    "--mantine-color-white": e.white,
                    "--mantine-color-black": e.black,
                    "--mantine-line-height": e.lineHeights.md,
                    "--mantine-font-family": e.fontFamily,
                    "--mantine-font-family-monospace": e.fontFamilyMonospace,
                    "--mantine-font-family-headings": e.headings.fontFamily,
                    "--mantine-heading-font-weight": e.headings.fontWeight,
                    "--mantine-heading-text-wrap": e.headings.textWrap,
                    "--mantine-radius-default": n,
                    "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
                    "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
                    "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
                    "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
                    "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
                },
                light: {
                    "--mantine-primary-color-contrast": (0, E.a)(e, "light"),
                    "--mantine-color-bright": "var(--mantine-color-black)",
                    "--mantine-color-text": e.black,
                    "--mantine-color-body": e.white,
                    "--mantine-color-error": "var(--mantine-color-red-6)",
                    "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
                    "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
                    "--mantine-color-default": "var(--mantine-color-white)",
                    "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
                    "--mantine-color-default-color": "var(--mantine-color-black)",
                    "--mantine-color-default-border": "var(--mantine-color-gray-4)",
                    "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
                },
                dark: {
                    "--mantine-primary-color-contrast": (0, E.a)(e, "dark"),
                    "--mantine-color-bright": "var(--mantine-color-white)",
                    "--mantine-color-text": "var(--mantine-color-dark-0)",
                    "--mantine-color-body": "var(--mantine-color-dark-7)",
                    "--mantine-color-error": "var(--mantine-color-red-8)",
                    "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
                    "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
                    "--mantine-color-default": "var(--mantine-color-dark-6)",
                    "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
                    "--mantine-color-default-color": "var(--mantine-color-white)",
                    "--mantine-color-default-border": "var(--mantine-color-dark-4)",
                    "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
                }
            };
        x(r.variables, e.breakpoints, "breakpoint"), x(r.variables, e.spacing, "spacing"), x(r.variables, e.fontSizes, "font-size"), x(r.variables, e.lineHeights, "line-height"), x(r.variables, e.shadows, "shadow"), x(r.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((t, n) => {
            r.variables[`--mantine-primary-color-${n}`] = `var(--mantine-color-${e.primaryColor}-${n})`
        }), (0, f.X)(e.colors).forEach(t => {
            let n = e.colors[t];
            if (n && "object" == typeof n && "mantine-virtual-color" in n) {
                Object.assign(r.light, T({
                    theme: e,
                    name: n.name,
                    color: n.light,
                    colorScheme: "light",
                    withColorValues: !0
                })), Object.assign(r.dark, T({
                    theme: e,
                    name: n.name,
                    color: n.dark,
                    colorScheme: "dark",
                    withColorValues: !0
                }));
                return
            }
            n.forEach((e, n) => {
                r.variables[`--mantine-color-${t}-${n}`] = e
            }), Object.assign(r.light, T({
                theme: e,
                color: t,
                colorScheme: "light",
                withColorValues: !1
            })), Object.assign(r.dark, T({theme: e, color: t, colorScheme: "dark", withColorValues: !1}))
        });
        let i = e.headings.sizes;
        return (0, f.X)(i).forEach(t => {
            r.variables[`--mantine-${t}-font-size`] = i[t].fontSize, r.variables[`--mantine-${t}-line-height`] = i[t].lineHeight, r.variables[`--mantine-${t}-font-weight`] = i[t].fontWeight || e.headings.fontWeight
        }), r
    }, I = C(n(75354).t);

    function O({cssVariablesSelector: e, deduplicateCssVariables: t}) {
        let n = (0, y.rZ)(), i = (0, p.R7)(), s = function ({theme: e, generator: t}) {
            let n = C(e), r = t?.(e);
            return r ? (0, w.R)(n, r) : n
        }({theme: n, generator: (0, p.Sm)()}), a = ":root" === e && t, o = function (e, t) {
            let n = _(e.variables), r = n ? b(t, n) : "", i = _(e.dark),
                s = i ? b(`${t}[data-mantine-color-scheme="dark"]`, i) : "", a = _(e.light),
                o = a ? b(`${t}[data-mantine-color-scheme="light"]`, a) : "";
            return `${r}${s}${o}`
        }(a ? function (e) {
            let t = {variables: {}, light: {}, dark: {}};
            return (0, f.X)(e.variables).forEach(n => {
                I.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n])
            }), (0, f.X)(e.light).forEach(n => {
                I.light[n] !== e.light[n] && (t.light[n] = e.light[n])
            }), (0, f.X)(e.dark).forEach(n => {
                I.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n])
            }), t
        }(s) : s, e);
        return o ? (0, r.jsx)("style", {
            "data-mantine-styles": !0, nonce: i?.(), dangerouslySetInnerHTML: {
                __html: `${o}${a ? "" : `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}`
            }
        }) : null
    }

    O.displayName = "@mantine/CssVariables";
    var R = n(60491);

    function A(e, t) {
        let n = "auto" !== e ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        t()?.setAttribute("data-mantine-color-scheme", n)
    }

    function $({
                   theme: e,
                   children: t,
                   getStyleNonce: n,
                   withStaticClasses: i = !0,
                   withGlobalClasses: s = !0,
                   deduplicateCssVariables: o = !0,
                   withCssVariables: l = !0,
                   cssVariablesSelector: c = ":root",
                   classNamesPrefix: u = "mantine",
                   colorSchemeManager: h = function ({key: e = "mantine-color-scheme-value"} = {}) {
                       let t;
                       return {
                           get: t => {
                               if ("undefined" == typeof window) return t;
                               try {
                                   let n = window.localStorage.getItem(e);
                                   return d(n) ? n : t
                               } catch {
                                   return t
                               }
                           }, set: t => {
                               try {
                                   window.localStorage.setItem(e, t)
                               } catch (e) {
                                   console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.", e)
                               }
                           }, subscribe: n => {
                               t = t => {
                                   t.storageArea === window.localStorage && t.key === e && d(t.newValue) && n(t.newValue)
                               }, window.addEventListener("storage", t)
                           }, unsubscribe: () => {
                               window.removeEventListener("storage", t)
                           }, clear: () => {
                               window.localStorage.removeItem(e)
                           }
                       }
                   }(),
                   defaultColorScheme: f = "light",
                   getRootElement: m = () => document.documentElement,
                   cssVariablesResolver: g,
                   forceColorScheme: _,
                   stylesTransform: b
               }) {
        let {colorScheme: w, setColorScheme: S, clearColorScheme: E} = function ({
                                                                                     manager: e,
                                                                                     defaultColorScheme: t,
                                                                                     getRootElement: n,
                                                                                     forceColorScheme: r
                                                                                 }) {
            let i = (0, a.useRef)(), [s, o] = (0, a.useState)(() => e.get(t)), l = r || s, c = (0, a.useCallback)(t => {
                r || (A(t, n), o(t), e.set(t))
            }, [e.set, l, r]), u = (0, a.useCallback)(() => {
                o(t), A(t, n), e.clear()
            }, [e.clear, t]);
            return (0, a.useEffect)(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), (0, R.Y)(() => {
                A(e.get(t), n)
            }, []), (0, a.useEffect)(() => {
                if (r) return A(r, n), () => {
                };
                void 0 === r && A(s, n), i.current = window.matchMedia("(prefers-color-scheme: dark)");
                let e = e => {
                    "auto" === s && A(e.matches ? "dark" : "light", n)
                };
                return i.current?.addEventListener("change", e), () => i.current?.removeEventListener("change", e)
            }, [s, r]), {colorScheme: l, setColorScheme: c, clearColorScheme: u}
        }({defaultColorScheme: f, forceColorScheme: _, manager: h, getRootElement: m});
        return !function ({respectReducedMotion: e, getRootElement: t}) {
            (0, R.Y)(() => {
                e && t()?.setAttribute("data-respect-reduced-motion", "true")
            }, [e])
        }({
            respectReducedMotion: e?.respectReducedMotion || !1,
            getRootElement: m
        }), (0, r.jsx)(p.XD.Provider, {
            value: {
                colorScheme: w,
                setColorScheme: S,
                clearColorScheme: E,
                getRootElement: m,
                classNamesPrefix: u,
                getStyleNonce: n,
                cssVariablesResolver: g,
                cssVariablesSelector: c,
                withStaticClasses: i,
                stylesTransform: b
            },
            children: (0, r.jsxs)(y.M2, {
                theme: e,
                children: [l && (0, r.jsx)(O, {
                    cssVariablesSelector: c,
                    deduplicateCssVariables: o
                }), s && (0, r.jsx)(v, {}), t]
            })
        })
    }

    !function () {
        let e = console.error;
        console.error = (...t) => {
            t.length > 1 && "string" == typeof t[0] && t[0].toLowerCase().includes("extra attributes from the server") && "string" == typeof t[1] && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t)
        }
    }(), $.displayName = "@mantine/core/MantineProvider", n(62417), n(30286);
    var P = n(81249), j = n(97688);
    let M = (0, P.vJ)(["html,body{background:#ffffff;overscroll-behavior:none;-webkit-font-smoothing:subpixel-antialiased !important;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;scroll-behavior:smooth !important;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:never;}.hide{display:none;}svg{vertical-align:text-top;}a{color:unset;text-decoration:none;}button{border:none;outline:none;background:transparent;width:fit-content;margin:0;padding:0;cursor:pointer;}"]);
    var N = n(90420), D = n(78620);
    let L = () => {
        let e = (0, h.useRouter)(), [t, n] = a.useState(!1);
        return (a.useEffect(() => {
            let t = t => t !== e.asPath && ("/editor" === t || "/widget" === t) && n(!0),
                r = t => t === e.asPath && n(!1);
            return e.events.on("routeChangeStart", t), e.events.on("routeChangeComplete", r), e.events.on("routeChangeError", r), () => {
                e.events.off("routeChangeStart", t), e.events.off("routeChangeComplete", r), e.events.off("routeChangeError", r)
            }
        }), t) ? (0, r.jsx)(D.f, {visible: !0, loaderProps: {color: "#7AB1FF", size: 70}}) : null
    };
    var F = n(22678), U = n(62716);
    let B = {
            autoContrast: !0,
            fontSmoothing: !1,
            respectReducedMotion: !0,
            cursorType: "pointer",
            fontFamily: s().style.fontFamily,
            defaultGradient: {from: "#625BF6", to: "#362EF3", deg: 180},
            primaryShade: 8,
            radius: {lg: "12px"},
            components: {Button: {defaultProps: {fw: 500}}}
        },
        z = l()(() => Promise.resolve().then(n.bind(n, 94311)).then(e => e.Toaster), {loadableGenerated: {webpack: () => [null]}});
    j.ZP.initialize("G-JKZEHMJBMH", {testMode: !1});
    var H = function (e) {
        let {Component: t, pageProps: n} = e, i = (0, h.useRouter)(), s = (0, U.Z)(e => e.setSession);
        return a.useEffect(() => {
            F.O.auth.getSession().then(e => {
                let {data: {session: t}} = e;
                t && s(t)
            })
        }, [s]), a.useEffect(() => {
            let e = e => {
                j.ZP.send({hitType: "pageview", page: e})
            };
            return i.events.on("routeChangeComplete", e), () => {
                i.events.off("routeChangeComplete", e)
            }
        }, [i.events]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u(), {children: (0, r.jsx)("title", {children: "JSON Crack | Best JSON Visualizer, Formatter and Viewer for everyone"})}), (0, r.jsxs)(P.f6, {
                theme: N.Wb,
                children: [(0, r.jsx)(z, {
                    position: "bottom-right",
                    containerStyle: {bottom: 34, right: 8, fontSize: 14},
                    toastOptions: {style: {background: "#4D4D4D", color: "#B9BBBE", borderRadius: 4}}
                }), (0, r.jsx)(M, {}), (0, r.jsxs)($, {
                    defaultColorScheme: "light",
                    theme: B,
                    children: [(0, r.jsx)(L, {}), (0, r.jsx)(t, {...n})]
                })]
            })]
        })
    }
}

,
62716
:

function (e, t, n) {
    "use strict";
    var r = n(94311), i = n(42109), s = n(22678), a = n(30534);
    let o = {user: null, isAuthenticated: !1}, l = (0, i.Ue)()(e => ({
        ...o, setSession: async t => {
            (0, a.j)("engagement", "login"), e({user: t.user, isAuthenticated: !0})
        }, logout: async () => {
            r.default.loading("Logging out...", {id: "logout"});
            let {error: t} = await s.O.auth.signOut({scope: "local"});
            if (t) {
                r.default.error("Failed to log out.");
                return
            }
            (0, a.j)("engagement", "logout"), e(o), r.default.success("Logged out.", {id: "logout"})
        }
    }));
    t.Z = l
}

,
30286
:

function () {
}

,
62417
:

function () {
}

,
85951
:

function (e) {
    e.exports = {
        style: {fontFamily: "'__DM_Sans_d72a7a', '__DM_Sans_Fallback_d72a7a'", fontStyle: "normal"},
        className: "__className_d72a7a"
    }
}

,
39139
:

function (e) {
    !function () {
        var t = {
            229: function (e) {
                var t, n, r, i = e.exports = {};

                function s() {
                    throw Error("setTimeout has not been defined")
                }

                function a() {
                    throw Error("clearTimeout has not been defined")
                }

                function o(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }

                !function () {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : s
                    } catch (e) {
                        t = s
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        n = a
                    }
                }();
                var l = [], c = !1, u = -1;

                function h() {
                    c && r && (c = !1, r.length ? l = r.concat(l) : u = -1, l.length && d())
                }

                function d() {
                    if (!c) {
                        var e = o(h);
                        c = !0;
                        for (var t = l.length; t;) {
                            for (r = l, l = []; ++u < t;) r && r[u].run();
                            u = -1, t = l.length
                        }
                        r = null, c = !1, function (e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                    }
                }

                function p(e, t) {
                    this.fun = e, this.array = t
                }

                function f() {
                }

                i.nextTick = function (e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    l.push(new p(e, t)), 1 !== l.length || c || o(d)
                }, p.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function (e) {
                    return []
                }, i.binding = function (e) {
                    throw Error("process.binding is not supported")
                }, i.cwd = function () {
                    return "/"
                }, i.chdir = function (e) {
                    throw Error("process.chdir is not supported")
                }, i.umask = function () {
                    return 0
                }
            }
        }, n = {};

        function r(e) {
            var i = n[e];
            if (void 0 !== i) return i.exports;
            var s = n[e] = {exports: {}}, a = !0;
            try {
                t[e](s, s.exports, r), a = !1
            } finally {
                a && delete n[e]
            }
            return s.exports
        }

        r.ab = "//";
        var i = r(229);
        e.exports = i
    }()
}

,
72155
:

function (e, t, n) {
    e.exports = n(28461)
}

,
88954
:

function (e, t, n) {
    e.exports = n(74767)
}

,
85778
:

function (e, t, n) {
    e.exports = n(73732)
}

,
84793
:

function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], a = r || "";
        return i && (a = r.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (e, t, r) {
            return t > 0 && t + e.length !== r.length && e.search(n) > -1 && ":" !== r.charAt(t - 2) && ("-" !== r.charAt(t + e.length) || "-" === r.charAt(t - 1)) && 0 > r.charAt(t - 1).search(/[^\s-]/) ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
        })), s && (a = "string" == typeof (t = e = a) && -1 !== t.indexOf("@") ? (console.warn("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : e), a
    };
    var n = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
}

,
91909
:

function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = t.GA4 = void 0;
    var r = l(n(57815)), i = l(n(84793)), s = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
        a = ["title", "location"], o = ["page", "hitType"];

    function l(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function c(e, t) {
        if (null == e) return {};
        var n, r, i = function (e, t) {
            if (null == e) return {};
            var n, r, i = {}, s = Object.keys(e);
            for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function h(e) {
        return function (e) {
            if (Array.isArray(e)) return m(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || f(e) || function () {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(n), !0).forEach(function (t) {
                g(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function f(e, t) {
        if (e) {
            if ("string" == typeof e) return m(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
        }
    }

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t, n) {
        return (t = y(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        var t = function (e, t) {
            if ("object" !== u(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== u(r)) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === u(t) ? t : String(t)
    }

    var v = function () {
        var e;

        function t() {
            var e = this;
            !function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, t), g(this, "reset", function () {
                e.isInitialized = !1, e._testMode = !1, e._currentMeasurementId, e._hasLoadedGA = !1, e._isQueuing = !1, e._queueGtag = []
            }), g(this, "_gtag", function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                e._testMode ? e._queueGtag.push(n) : e._isQueuing ? e._queueGtag.push(n) : r.default.apply(void 0, n)
            }), g(this, "_loadGA", function (t, n) {

            }), g(this, "_toGtagOptions", function (e) {
                if (e) {
                    var t = {
                        cookieUpdate: "cookie_update",
                        cookieExpires: "cookie_expires",
                        cookieDomain: "cookie_domain",
                        cookieFlags: "cookie_flags",
                        userId: "user_id",
                        clientId: "client_id",
                        anonymizeIp: "anonymize_ip",
                        contentGroup1: "content_group1",
                        contentGroup2: "content_group2",
                        contentGroup3: "content_group3",
                        contentGroup4: "content_group4",
                        contentGroup5: "content_group5",
                        allowAdFeatures: "allow_google_signals",
                        allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                        nonInteraction: "non_interaction",
                        page: "page_path",
                        hitCallback: "event_callback"
                    };
                    return Object.entries(e).reduce(function (e, n) {
                        var r = function (e) {
                            if (Array.isArray(e)) return e
                        }(n) || function (e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, i, s, a, o = [], l = !0, c = !1;
                                try {
                                    for (s = (n = n.call(e)).next; !(l = (r = s.call(n)).done) && (o.push(r.value), 2 !== o.length); l = !0) ;
                                } catch (e) {
                                    c = !0, i = e
                                } finally {
                                    try {
                                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (c) throw i
                                    }
                                }
                                return o
                            }
                        }(n, 2) || f(n, 2) || function () {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(), i = r[0], s = r[1];
                        return t[i] ? e[t[i]] = s : e[i] = s, e
                    }, {})
                }
            }), g(this, "initialize", function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t) throw Error("Require GA_MEASUREMENT_ID");
                var r = "string" == typeof t ? [{trackingId: t}] : t;
                e._currentMeasurementId = r[0].trackingId;
                var i = n.gaOptions, s = n.gtagOptions, a = n.nonce, o = n.testMode, l = void 0 !== o && o,
                    c = n.gtagUrl;
                if (e._testMode = l, l || e._loadGA(e._currentMeasurementId, a, c), e.isInitialized || (e._gtag("js", new Date), r.forEach(function (t) {
                    var n = p(p(p({}, e._toGtagOptions(p(p({}, i), t.gaOptions))), s), t.gtagOptions);
                    Object.keys(n).length ? e._gtag("config", t.trackingId, n) : e._gtag("config", t.trackingId)
                })), e.isInitialized = !0, !l) {
                    var u = h(e._queueGtag);
                    for (e._queueGtag = [], e._isQueuing = !1; u.length;) {
                        var d = u.shift();
                        e._gtag.apply(e, h(d)), "get" === d[0] && (e._isQueuing = !0)
                    }
                }
            }), g(this, "set", function (t) {
                if (!t) {
                    console.warn("`fieldsObject` is required in .set()");
                    return
                }
                if ("object" !== u(t)) {
                    console.warn("Expected `fieldsObject` arg to be an Object");
                    return
                }
                0 === Object.keys(t).length && console.warn("empty `fieldsObject` given to .set()"), e._gaCommand("set", t)
            }), g(this, "_gaCommandSendEvent", function (t, n, r, i, s) {
                e._gtag("event", n, p(p({
                    event_category: t,
                    event_label: r,
                    value: i
                }, s && {non_interaction: s.nonInteraction}), e._toGtagOptions(s)))
            }), g(this, "_gaCommandSendEventParameters", function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                if ("string" == typeof n[0]) e._gaCommandSendEvent.apply(e, h(n.slice(1))); else {
                    var i = n[0], a = i.eventCategory, o = i.eventAction, l = i.eventLabel, u = i.eventValue,
                        d = (i.hitType, c(i, s));
                    e._gaCommandSendEvent(a, o, l, u, d)
                }
            }), g(this, "_gaCommandSendTiming", function (t, n, r, i) {
                e._gtag("event", "timing_complete", {name: n, value: r, event_category: t, event_label: i})
            }), g(this, "_gaCommandSendPageview", function (t, n) {
                if (n && Object.keys(n).length) {
                    var r = e._toGtagOptions(n), i = r.title, s = r.location, o = c(r, a);
                    e._gtag("event", "page_view", p(p(p(p({}, t && {page_path: t}), i && {page_title: i}), s && {page_location: s}), o))
                } else t ? e._gtag("event", "page_view", {page_path: t}) : e._gtag("event", "page_view")
            }), g(this, "_gaCommandSendPageviewParameters", function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                if ("string" == typeof n[0]) e._gaCommandSendPageview.apply(e, h(n.slice(1))); else {
                    var i = n[0], s = i.page, a = (i.hitType, c(i, o));
                    e._gaCommandSendPageview(s, a)
                }
            }), g(this, "_gaCommandSend", function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var i = "string" == typeof n[0] ? n[0] : n[0].hitType;
                switch (i) {
                    case"event":
                        e._gaCommandSendEventParameters.apply(e, n);
                        break;
                    case"pageview":
                        e._gaCommandSendPageviewParameters.apply(e, n);
                        break;
                    case"timing":
                        e._gaCommandSendTiming.apply(e, h(n.slice(1)));
                        break;
                    case"screenview":
                    case"transaction":
                    case"item":
                    case"social":
                    case"exception":
                        console.warn("Unsupported send command: ".concat(i));
                        break;
                    default:
                        console.warn("Send command doesn't exist: ".concat(i))
                }
            }), g(this, "_gaCommandSet", function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                "string" == typeof n[0] && (n[0] = g({}, n[0], n[1])), e._gtag("set", e._toGtagOptions(n[0]))
            }), g(this, "_gaCommand", function (t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                switch (t) {
                    case"send":
                        e._gaCommandSend.apply(e, r);
                        break;
                    case"set":
                        e._gaCommandSet.apply(e, r);
                        break;
                    default:
                        console.warn("Command doesn't exist: ".concat(t))
                }
            }), g(this, "ga", function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                if ("string" == typeof n[0]) e._gaCommand.apply(e, n); else {
                    var i = n[0];
                    e._gtag("get", e._currentMeasurementId, "client_id", function (t) {
                        e._isQueuing = !1;
                        var n = e._queueGtag;
                        for (i({
                            get: function (n) {
                                return "clientId" === n ? t : "trackingId" === n ? e._currentMeasurementId : "apiVersion" === n ? "1" : void 0
                            }
                        }); n.length;) {
                            var r = n.shift();
                            e._gtag.apply(e, h(r))
                        }
                    }), e._isQueuing = !0
                }
                return e.ga
            }), g(this, "event", function (t, n) {
                if ("string" == typeof t) e._gtag("event", t, e._toGtagOptions(n)); else {
                    var r = t.action, s = t.category, a = t.label, o = t.value, l = t.nonInteraction, c = t.transport;
                    if (!s || !r) {
                        console.warn("args.category AND args.action are required in event()");
                        return
                    }
                    var u = {hitType: "event", eventCategory: (0, i.default)(s), eventAction: (0, i.default)(r)};
                    a && (u.eventLabel = (0, i.default)(a)), void 0 !== o && ("number" != typeof o ? console.warn("Expected `args.value` arg to be a Number.") : u.eventValue = o), void 0 !== l && ("boolean" != typeof l ? console.warn("`args.nonInteraction` must be a boolean.") : u.nonInteraction = l), void 0 !== c && ("string" != typeof c ? console.warn("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(c) && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), u.transport = c)), e._gaCommand("send", u)
                }
            }), g(this, "send", function (t) {
                e._gaCommand("send", t)
            }), this.reset()
        }

        return e = [{
            key: "gtag", value: function () {
                this._gtag.apply(this, arguments)
            }
        }], function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, y(r.key), r)
            }
        }(t.prototype, e), Object.defineProperty(t, "prototype", {writable: !1}), t
    }();
    t.GA4 = v;
    var _ = new v;
    t.default = _
}

,
57815
:

function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = function () {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        "undefined" != typeof window && (void 0 === window.gtag && (window.dataLayer = window.dataLayer || [], window.gtag = function () {
            window.dataLayer.push(arguments)
        }), (e = window).gtag.apply(e, n))
    }
}

,
97688
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    t.ZP = void 0;
    var i = function (e, t) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== r(e) && "function" != typeof e) return {default: e};
        var n = s(void 0);
        if (n && n.has(e)) return n.get(e);
        var i = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e) if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set) ? Object.defineProperty(i, o, l) : i[o] = e[o]
        }
        return i.default = e, n && n.set(e, i), i
    }(n(91909));

    function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap, n = new WeakMap;
        return (s = function (e) {
            return e ? n : t
        })(e)
    }

    i.GA4;
    var a = i.default;
    t.ZP = a
}

,
50631
:

function (e) {
    e.exports = function (e, t, n, r) {
        var i = n ? n.call(r, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var s = Object.keys(e), a = Object.keys(t);
        if (s.length !== a.length) return !1;
        for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
            var c = s[l];
            if (!o(c)) return !1;
            var u = e[c], h = t[c];
            if (!1 === (i = n ? n.call(r, u, h, c) : void 0) || void 0 === i && u !== h) return !1
        }
        return !0
    }
}

,
81249
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        f6: function () {
            return to
        }, vJ: function () {
            return tg
        }, ZP: function () {
            return tf
        }, zo: function () {
            return tf
        }, Fg: function () {
            return ta
        }
    });
    var r = function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function i(e, t, n) {
        if (n || 2 == arguments.length) for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t))
    }

    var s = n(50959), a = n(50631), o = n.n(a), l = "-ms-", c = "-moz-", u = "-webkit-", h = "comm", d = "rule",
        p = "decl", f = "@keyframes", m = Math.abs, g = String.fromCharCode, y = Object.assign;

    function v(e, t) {
        return (e = t.exec(e)) ? e[0] : e
    }

    function _(e, t, n) {
        return e.replace(t, n)
    }

    function b(e, t, n) {
        return e.indexOf(t, n)
    }

    function w(e, t) {
        return 0 | e.charCodeAt(t)
    }

    function S(e, t, n) {
        return e.slice(t, n)
    }

    function E(e) {
        return e.length
    }

    function k(e, t) {
        return t.push(e), e
    }

    function T(e, t) {
        return e.filter(function (e) {
            return !v(e, t)
        })
    }

    var x = 1, C = 1, I = 0, O = 0, R = 0, A = "";

    function $(e, t, n, r, i, s, a, o) {
        return {
            value: e,
            root: t,
            parent: n,
            type: r,
            props: i,
            children: s,
            line: x,
            column: C,
            length: a,
            return: "",
            siblings: o
        }
    }

    function P(e, t) {
        return y($("", null, null, "", null, null, 0, e.siblings), e, {length: -e.length}, t)
    }

    function j(e) {
        for (; e.root;) e = P(e.root, {children: [e]});
        k(e, e.siblings)
    }

    function M() {
        return R = O < I ? w(A, O++) : 0, C++, 10 === R && (C = 1, x++), R
    }

    function N() {
        return w(A, O)
    }

    function D(e) {
        switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
                return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
                return 4;
            case 58:
                return 3;
            case 34:
            case 39:
            case 40:
            case 91:
                return 2;
            case 41:
            case 93:
                return 1
        }
        return 0
    }

    function L(e) {
        var t, n;
        return (t = O - 1, n = function e(t) {
            for (; M();) switch (R) {
                case t:
                    return O;
                case 34:
                case 39:
                    34 !== t && 39 !== t && e(R);
                    break;
                case 40:
                    41 === t && e(t);
                    break;
                case 92:
                    M()
            }
            return O
        }(91 === e ? e + 2 : 40 === e ? e + 1 : e), S(A, t, n)).trim()
    }

    function F(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n
    }

    function U(e, t, n, r) {
        switch (e.type) {
            case"@layer":
                if (e.children.length) break;
            case"@import":
            case p:
                return e.return = e.return || e.value;
            case h:
                return "";
            case f:
                return e.return = e.value + "{" + F(e.children, r) + "}";
            case d:
                if (!E(e.value = e.props.join(","))) return ""
        }
        return E(n = F(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
    }

    function B(e, t, n, r) {
        if (e.length > -1 && !e.return) switch (e.type) {
            case p:
                e.return = function e(t, n, r) {
                    var i;
                    switch (i = n, 45 ^ w(t, 0) ? (((i << 2 ^ w(t, 0)) << 2 ^ w(t, 1)) << 2 ^ w(t, 2)) << 2 ^ w(t, 3) : 0) {
                        case 5103:
                            return u + "print-" + t + t;
                        case 5737:
                        case 4201:
                        case 3177:
                        case 3433:
                        case 1641:
                        case 4457:
                        case 2921:
                        case 5572:
                        case 6356:
                        case 5844:
                        case 3191:
                        case 6645:
                        case 3005:
                        case 6391:
                        case 5879:
                        case 5623:
                        case 6135:
                        case 4599:
                        case 4855:
                        case 4215:
                        case 6389:
                        case 5109:
                        case 5365:
                        case 5621:
                        case 3829:
                            return u + t + t;
                        case 4789:
                            return c + t + t;
                        case 5349:
                        case 4246:
                        case 4810:
                        case 6968:
                        case 2756:
                            return u + t + c + t + l + t + t;
                        case 5936:
                            switch (w(t, n + 11)) {
                                case 114:
                                    return u + t + l + _(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                case 108:
                                    return u + t + l + _(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                case 45:
                                    return u + t + l + _(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                            }
                        case 6828:
                        case 4268:
                        case 2903:
                            return u + t + l + t + t;
                        case 6165:
                            return u + t + l + "flex-" + t + t;
                        case 5187:
                            return u + t + _(t, /(\w+).+(:[^]+)/, u + "box-$1$2" + l + "flex-$1$2") + t;
                        case 5443:
                            return u + t + l + "flex-item-" + _(t, /flex-|-self/g, "") + (v(t, /flex-|baseline/) ? "" : l + "grid-row-" + _(t, /flex-|-self/g, "")) + t;
                        case 4675:
                            return u + t + l + "flex-line-pack" + _(t, /align-content|flex-|-self/g, "") + t;
                        case 5548:
                            return u + t + l + _(t, "shrink", "negative") + t;
                        case 5292:
                            return u + t + l + _(t, "basis", "preferred-size") + t;
                        case 6060:
                            return u + "box-" + _(t, "-grow", "") + u + t + l + _(t, "grow", "positive") + t;
                        case 4554:
                            return u + _(t, /([^-])(transform)/g, "$1" + u + "$2") + t;
                        case 6187:
                            return _(_(_(t, /(zoom-|grab)/, u + "$1"), /(image-set)/, u + "$1"), t, "") + t;
                        case 5495:
                        case 3959:
                            return _(t, /(image-set\([^]*)/, u + "$1$`$1");
                        case 4968:
                            return _(_(t, /(.+:)(flex-)?(.*)/, u + "box-pack:$3" + l + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + u + t + t;
                        case 4200:
                            if (!v(t, /flex-|baseline/)) return l + "grid-column-align" + S(t, n) + t;
                            break;
                        case 2592:
                        case 3360:
                            return l + _(t, "template-", "") + t;
                        case 4384:
                        case 3616:
                            if (r && r.some(function (e, t) {
                                return n = t, v(e.props, /grid-\w+-end/)
                            })) return ~b(t + (r = r[n].value), "span", 0) ? t : l + _(t, "-start", "") + t + l + "grid-row-span:" + (~b(r, "span", 0) ? v(r, /\d+/) : +v(r, /\d+/) - +v(t, /\d+/)) + ";";
                            return l + _(t, "-start", "") + t;
                        case 4896:
                        case 4128:
                            return r && r.some(function (e) {
                                return v(e.props, /grid-\w+-start/)
                            }) ? t : l + _(_(t, "-end", "-span"), "span ", "") + t;
                        case 4095:
                        case 3583:
                        case 4068:
                        case 2532:
                            return _(t, /(.+)-inline(.+)/, u + "$1$2") + t;
                        case 8116:
                        case 7059:
                        case 5753:
                        case 5535:
                        case 5445:
                        case 5701:
                        case 4933:
                        case 4677:
                        case 5533:
                        case 5789:
                        case 5021:
                        case 4765:
                            if (E(t) - 1 - n > 6) switch (w(t, n + 1)) {
                                case 109:
                                    if (45 !== w(t, n + 4)) break;
                                case 102:
                                    return _(t, /(.+:)(.+)-([^]+)/, "$1" + u + "$2-$3$1" + c + (108 == w(t, n + 3) ? "$3" : "$2-$3")) + t;
                                case 115:
                                    return ~b(t, "stretch", 0) ? e(_(t, "stretch", "fill-available"), n, r) + t : t
                            }
                            break;
                        case 5152:
                        case 5920:
                            return _(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (e, n, r, i, s, a, o) {
                                return l + n + ":" + r + o + (i ? l + n + "-span:" + (s ? a : +a - +r) + o : "") + t
                            });
                        case 4949:
                            if (121 === w(t, n + 6)) return _(t, ":", ":" + u) + t;
                            break;
                        case 6444:
                            switch (w(t, 45 === w(t, 14) ? 18 : 11)) {
                                case 120:
                                    return _(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + u + (45 === w(t, 14) ? "inline-" : "") + "box$3$1" + u + "$2$3$1" + l + "$2box$3") + t;
                                case 100:
                                    return _(t, ":", ":" + l) + t
                            }
                            break;
                        case 5719:
                        case 2647:
                        case 2135:
                        case 3927:
                        case 2391:
                            return _(t, "scroll-", "scroll-snap-") + t
                    }
                    return t
                }(e.value, e.length, n);
                return;
            case f:
                return F([P(e, {value: _(e.value, "@", "@" + u)})], r);
            case d:
                if (e.length) {
                    var i, s;
                    return i = n = e.props, s = function (t) {
                        switch (v(t, r = /(::plac\w+|:read-\w+)/)) {
                            case":read-only":
                            case":read-write":
                                j(P(e, {props: [_(t, /:(read-\w+)/, ":" + c + "$1")]})), j(P(e, {props: [t]})), y(e, {props: T(n, r)});
                                break;
                            case"::placeholder":
                                j(P(e, {props: [_(t, /:(plac\w+)/, ":" + u + "input-$1")]})), j(P(e, {props: [_(t, /:(plac\w+)/, ":" + c + "$1")]})), j(P(e, {props: [_(t, /:(plac\w+)/, l + "input-$1")]})), j(P(e, {props: [t]})), y(e, {props: T(n, r)})
                        }
                        return ""
                    }, i.map(s).join("")
                }
        }
    }

    function z(e, t, n, r, i, s, a, o, l, c, u, h) {
        for (var p = i - 1, f = 0 === i ? s : [""], g = f.length, y = 0, v = 0, b = 0; y < r; ++y) for (var w = 0, E = S(e, p + 1, p = m(v = a[y])), k = e; w < g; ++w) (k = (v > 0 ? f[w] + " " + E : _(E, /&\f/g, f[w])).trim()) && (l[b++] = k);
        return $(e, t, n, 0 === i ? d : o, l, c, u, h)
    }

    function H(e, t, n, r, i) {
        return $(e, t, n, p, S(e, 0, r), S(e, r + 1, -1), r, i)
    }

    var q = {
            animationIterationCount: 1,
            aspectRatio: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        }, W = n(32918),
        G = void 0 !== W && void 0 !== W.env && (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR) || "data-styled",
        V = "active", J = "data-styled-version", K = "6.1.9", Y = "/*!sc*/\n",
        X = "undefined" != typeof window && "HTMLElement" in window,
        Z = !!("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== W && void 0 !== W.env && void 0 !== W.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== W.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== W.env.REACT_APP_SC_DISABLE_SPEEDY && W.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== W && void 0 !== W.env && void 0 !== W.env.SC_DISABLE_SPEEDY && "" !== W.env.SC_DISABLE_SPEEDY && "false" !== W.env.SC_DISABLE_SPEEDY && W.env.SC_DISABLE_SPEEDY),
        Q = {}, ee = Object.freeze([]), et = Object.freeze({});

    function en(e, t, n) {
        return void 0 === n && (n = et), e.theme !== n.theme && e.theme || t || n.theme
    }

    var er = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
        ei = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, es = /(^-|-$)/g;

    function ea(e) {
        return e.replace(ei, "-").replace(es, "")
    }

    var eo = /(a)(d)/gi, el = function (e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97))
    };

    function ec(e) {
        var t, n = "";
        for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = el(t % 52) + n;
        return (el(t % 52) + n).replace(eo, "$1-$2")
    }

    var eu, eh = function (e, t) {
        for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
        return e
    }, ed = function (e) {
        return eh(5381, e)
    };

    function ep(e) {
        return "string" == typeof e
    }

    var ef = "function" == typeof Symbol && Symbol.for, em = ef ? Symbol.for("react.memo") : 60115,
        eg = ef ? Symbol.for("react.forward_ref") : 60112, ey = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }, ev = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
        e_ = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0},
        eb = ((eu = {})[eg] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }, eu[em] = e_, eu);

    function ew(e) {
        return ("type" in e && e.type.$$typeof) === em ? e_ : "$$typeof" in e ? eb[e.$$typeof] : ey
    }

    var eS = Object.defineProperty, eE = Object.getOwnPropertyNames, ek = Object.getOwnPropertySymbols,
        eT = Object.getOwnPropertyDescriptor, ex = Object.getPrototypeOf, eC = Object.prototype;

    function eI(e) {
        return "function" == typeof e
    }

    function eO(e) {
        return "object" == typeof e && "styledComponentId" in e
    }

    function eR(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || ""
    }

    function eA(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n
    }

    function e$(e) {
        return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
    }

    function eP(e, t) {
        Object.defineProperty(e, "toString", {value: t})
    }

    function ej(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
    }

    var eM = function () {
            function e(e) {
                this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
            }

            return e.prototype.indexOfGroup = function (e) {
                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                return t
            }, e.prototype.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                    for (var n = this.groupSizes, r = n.length, i = r; e >= i;) if ((i <<= 1) < 0) throw ej(16, "".concat(e));
                    this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
                    for (var s = r; s < i; s++) this.groupSizes[s] = 0
                }
                for (var a = this.indexOfGroup(e + 1), o = (s = 0, t.length); s < o; s++) this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++, a++)
            }, e.prototype.clearGroup = function (e) {
                if (e < this.length) {
                    var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
                    this.groupSizes[e] = 0;
                    for (var i = n; i < r; i++) this.tag.deleteRule(n)
                }
            }, e.prototype.getGroup = function (e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, s = r; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(Y);
                return t
            }, e
        }(), eN = new Map, eD = new Map, eL = 1, eF = function (e) {
            if (eN.has(e)) return eN.get(e);
            for (; eD.has(eL);) eL++;
            var t = eL++;
            return eN.set(e, t), eD.set(t, e), t
        }, eU = function (e, t) {
            eL = t + 1, eN.set(e, t), eD.set(t, e)
        }, eB = "style[".concat(G, "][").concat(J, '="').concat(K, '"]'),
        ez = new RegExp("^".concat(G, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), eH = function (e, t, n) {
            for (var r, i = n.split(","), s = 0, a = i.length; s < a; s++) (r = i[s]) && e.registerName(t, r)
        }, eq = function (e, t) {
            for (var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(Y), i = [], s = 0, a = r.length; s < a; s++) {
                var o = r[s].trim();
                if (o) {
                    var l = o.match(ez);
                    if (l) {
                        var c = 0 | parseInt(l[1], 10), u = l[2];
                        0 !== c && (eU(u, c), eH(e, u, l[3]), e.getTag().insertRules(c, i)), i.length = 0
                    } else i.push(o)
                }
            }
        }, eW = function (e) {
            var t, r = document.head, i = e || r, s = document.createElement("style"),
                a = (t = Array.from(i.querySelectorAll("style[".concat(G, "]"))))[t.length - 1],
                o = void 0 !== a ? a.nextSibling : null;
            s.setAttribute(G, V), s.setAttribute(J, K);
            var l = n.nc;
            return l && s.setAttribute("nonce", l), i.insertBefore(s, o), s
        }, eG = function () {
            function e(e) {
                this.element = eW(e), this.element.appendChild(document.createTextNode("")), this.sheet = function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        if (i.ownerNode === e) return i
                    }
                    throw ej(17)
                }(this.element), this.length = 0
            }

            return e.prototype.insertRule = function (e, t) {
                try {
                    return this.sheet.insertRule(t, e), this.length++, !0
                } catch (e) {
                    return !1
                }
            }, e.prototype.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--
            }, e.prototype.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return t && t.cssText ? t.cssText : ""
            }, e
        }(), eV = function () {
            function e(e) {
                this.element = eW(e), this.nodes = this.element.childNodes, this.length = 0
            }

            return e.prototype.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                    var n = document.createTextNode(t);
                    return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0
                }
                return !1
            }, e.prototype.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--
            }, e.prototype.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : ""
            }, e
        }(), eJ = function () {
            function e(e) {
                this.rules = [], this.length = 0
            }

            return e.prototype.insertRule = function (e, t) {
                return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
            }, e.prototype.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--
            }, e.prototype.getRule = function (e) {
                return e < this.length ? this.rules[e] : ""
            }, e
        }(), eK = X, eY = {isServer: !X, useCSSOMInjection: !Z}, eX = function () {
            function e(e, t, n) {
                void 0 === e && (e = et), void 0 === t && (t = {});
                var i = this;
                this.options = r(r({}, eY), e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && X && eK && (eK = !1, function (e) {
                    for (var t = document.querySelectorAll(eB), n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        i && i.getAttribute(G) !== V && (eq(e, i), i.parentNode && i.parentNode.removeChild(i))
                    }
                }(this)), eP(this, function () {
                    return function (e) {
                        for (var t = e.getTag(), n = t.length, r = "", i = 0; i < n; i++) (function (n) {
                            var i = eD.get(n);
                            if (void 0 !== i) {
                                var s = e.names.get(i), a = t.getGroup(n);
                                if (void 0 !== s && 0 !== a.length) {
                                    var o = "".concat(G, ".g").concat(n, '[id="').concat(i, '"]'), l = "";
                                    void 0 !== s && s.forEach(function (e) {
                                        e.length > 0 && (l += "".concat(e, ","))
                                    }), r += "".concat(a).concat(o, '{content:"').concat(l, '"}').concat(Y)
                                }
                            }
                        })(i);
                        return r
                    }(i)
                })
            }

            return e.registerId = function (e) {
                return eF(e)
            }, e.prototype.reconstructWithOptions = function (t, n) {
                return void 0 === n && (n = !0), new e(r(r({}, this.options), t), this.gs, n && this.names || void 0)
            }, e.prototype.allocateGSInstance = function (e) {
                return this.gs[e] = (this.gs[e] || 0) + 1
            }, e.prototype.getTag = function () {
                var e, t, n;
                return this.tag || (this.tag = (t = (e = this.options).useCSSOMInjection, n = e.target, new eM(e.isServer ? new eJ(n) : t ? new eG(n) : new eV(n))))
            }, e.prototype.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t)
            }, e.prototype.registerName = function (e, t) {
                if (eF(e), this.names.has(e)) this.names.get(e).add(t); else {
                    var n = new Set;
                    n.add(t), this.names.set(e, n)
                }
            }, e.prototype.insertRules = function (e, t, n) {
                this.registerName(e, t), this.getTag().insertRules(eF(e), n)
            }, e.prototype.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear()
            }, e.prototype.clearRules = function (e) {
                this.getTag().clearGroup(eF(e)), this.clearNames(e)
            }, e.prototype.clearTag = function () {
                this.tag = void 0
            }, e
        }(), eZ = /&/g, eQ = /^\s*\/\/.*$/gm;

    function e0(e) {
        var t, n, r, i = void 0 === e ? et : e, s = i.options, a = void 0 === s ? et : s, o = i.plugins,
            l = void 0 === o ? ee : o, c = function (e, r, i) {
                return i.startsWith(n) && i.endsWith(n) && i.replaceAll(n, "").length > 0 ? ".".concat(t) : e
            }, u = l.slice();
        u.push(function (e) {
            e.type === d && e.value.includes("&") && (e.props[0] = e.props[0].replace(eZ, n).replace(r, c))
        }), a.prefix && u.push(B), u.push(U);
        var p = function (e, i, s, o) {
            void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === o && (o = "&"), t = o, n = i, r = RegExp("\\".concat(n, "\\b"), "g");
            var l, c, d, p, f, y, v = e.replace(eQ, ""), T = (f = function e(t, n, r, i, s, a, o, l, c) {
                for (var u, d = 0, p = 0, f = o, y = 0, v = 0, T = 0, I = 1, P = 1, j = 1, F = 0, U = "", B = s, q = a, W = i, G = U; P;) switch (T = F, F = M()) {
                    case 40:
                        if (108 != T && 58 == w(G, f - 1)) {
                            -1 != b(G += _(L(F), "&", "&\f"), "&\f", m(d ? l[d - 1] : 0)) && (j = -1);
                            break
                        }
                    case 34:
                    case 39:
                    case 91:
                        G += L(F);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        G += function (e) {
                            for (; R = N();) if (R < 33) M(); else break;
                            return D(e) > 2 || D(R) > 3 ? "" : " "
                        }(T);
                        break;
                    case 92:
                        G += function (e, t) {
                            for (var n; --t && M() && !(R < 48) && !(R > 102) && (!(R > 57) || !(R < 65)) && (!(R > 70) || !(R < 97));) ;
                            return n = O + (t < 6 && 32 == N() && 32 == M()), S(A, e, n)
                        }(O - 1, 7);
                        continue;
                    case 47:
                        switch (N()) {
                            case 42:
                            case 47:
                                k($(u = function (e, t) {
                                    for (; M();) if (e + R === 57) break; else if (e + R === 84 && 47 === N()) break;
                                    return "/*" + S(A, t, O - 1) + "*" + g(47 === e ? e : M())
                                }(M(), O), n, r, h, g(R), S(u, 2, -2), 0, c), c);
                                break;
                            default:
                                G += "/"
                        }
                        break;
                    case 123 * I:
                        l[d++] = E(G) * j;
                    case 125 * I:
                    case 59:
                    case 0:
                        switch (F) {
                            case 0:
                            case 125:
                                P = 0;
                            case 59 + p:
                                -1 == j && (G = _(G, /\f/g, "")), v > 0 && E(G) - f && k(v > 32 ? H(G + ";", i, r, f - 1, c) : H(_(G, " ", "") + ";", i, r, f - 2, c), c);
                                break;
                            case 59:
                                G += ";";
                            default:
                                if (k(W = z(G, n, r, d, p, s, l, U, B = [], q = [], f, a), a), 123 === F) {
                                    if (0 === p) e(G, n, W, W, B, a, f, l, q); else switch (99 === y && 110 === w(G, 3) ? 100 : y) {
                                        case 100:
                                        case 108:
                                        case 109:
                                        case 115:
                                            e(t, W, W, i && k(z(t, W, W, 0, 0, s, l, U, s, B = [], f, q), q), s, q, f, l, i ? B : q);
                                            break;
                                        default:
                                            e(G, W, W, W, [""], q, 0, l, q)
                                    }
                                }
                        }
                        d = p = v = 0, I = j = 1, U = G = "", f = o;
                        break;
                    case 58:
                        f = 1 + E(G), v = T;
                    default:
                        if (I < 1) {
                            if (123 == F) --I; else if (125 == F && 0 == I++ && 125 == (R = O > 0 ? w(A, --O) : 0, C--, 10 === R && (C = 1, x--), R)) continue
                        }
                        switch (G += g(F), F * I) {
                            case 38:
                                j = p > 0 ? 1 : (G += "\f", -1);
                                break;
                            case 44:
                                l[d++] = (E(G) - 1) * j, j = 1;
                                break;
                            case 64:
                                45 === N() && (G += L(M())), y = N(), p = f = E(U = G += function (e) {
                                    for (; !D(N());) M();
                                    return S(A, e, O)
                                }(O)), F++;
                                break;
                            case 45:
                                45 === T && 2 == E(G) && (I = 0)
                        }
                }
                return a
            }("", null, null, null, [""], (p = d = s || i ? "".concat(s, " ").concat(i, " { ").concat(v, " }") : v, x = C = 1, I = E(A = p), O = 0, d = []), 0, [0], d), A = "", f);
            a.namespace && (T = function e(t, n) {
                return t.map(function (t) {
                    return "rule" === t.type && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function (e) {
                        return "".concat(n, " ").concat(e)
                    })), Array.isArray(t.children) && "@keyframes" !== t.type && (t.children = e(t.children, n)), t
                })
            }(T, a.namespace));
            var P = [];
            return F(T, (c = (l = u.concat((y = function (e) {
                return P.push(e)
            }, function (e) {
                !e.root && (e = e.return) && y(e)
            }))).length, function (e, t, n, r) {
                for (var i = "", s = 0; s < c; s++) i += l[s](e, t, n, r) || "";
                return i
            })), P
        };
        return p.hash = l.length ? l.reduce(function (e, t) {
            return t.name || ej(15), eh(e, t.name)
        }, 5381).toString() : "", p
    }

    var e1 = new eX, e2 = e0(), e3 = s.createContext({shouldForwardProp: void 0, styleSheet: e1, stylis: e2}),
        e5 = (e3.Consumer, s.createContext(void 0));

    function e4() {
        return (0, s.useContext)(e3)
    }

    function e9(e) {
        var t = (0, s.useState)(e.stylisPlugins), n = t[0], r = t[1], i = e4().styleSheet,
            a = (0, s.useMemo)(function () {
                var t = i;
                return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({target: e.target}, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({useCSSOMInjection: !1})), t
            }, [e.disableCSSOMInjection, e.sheet, e.target, i]), l = (0, s.useMemo)(function () {
                return e0({options: {namespace: e.namespace, prefix: e.enableVendorPrefixes}, plugins: n})
            }, [e.enableVendorPrefixes, e.namespace, n]);
        (0, s.useEffect)(function () {
            o()(n, e.stylisPlugins) || r(e.stylisPlugins)
        }, [e.stylisPlugins]);
        var c = (0, s.useMemo)(function () {
            return {shouldForwardProp: e.shouldForwardProp, styleSheet: a, stylis: l}
        }, [e.shouldForwardProp, a, l]);
        return s.createElement(e3.Provider, {value: c}, s.createElement(e5.Provider, {value: l}, e.children))
    }

    var e8 = function () {
        function e(e, t) {
            var n = this;
            this.inject = function (e, t) {
                void 0 === t && (t = e2);
                var r = n.name + t.hash;
                e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
            }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, eP(this, function () {
                throw ej(12, String(n.name))
            })
        }

        return e.prototype.getName = function (e) {
            return void 0 === e && (e = e2), this.name + e.hash
        }, e
    }();

    function e6(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            if (1 === n && "-" === r && "-" === e[0]) return e;
            r >= "A" && r <= "Z" ? t += "-" + r.toLowerCase() : t += r
        }
        return t.startsWith("ms-") ? "-" + t : t
    }

    var e7 = function (e) {
        return null == e || !1 === e || "" === e
    }, te = function (e) {
        var t = [];
        for (var n in e) {
            var r = e[n];
            e.hasOwnProperty(n) && !e7(r) && (Array.isArray(r) && r.isCss || eI(r) ? t.push("".concat(e6(n), ":"), r, ";") : e$(r) ? t.push.apply(t, i(i(["".concat(n, " {")], te(r), !1), ["}"], !1)) : t.push("".concat(e6(n), ": ").concat(null == r || "boolean" == typeof r || "" === r ? "" : "number" != typeof r || 0 === r || n in q || n.startsWith("--") ? String(r).trim() : "".concat(r, "px"), ";")))
        }
        return t
    };

    function tt(e, t, n, r) {
        return e7(e) ? [] : eO(e) ? [".".concat(e.styledComponentId)] : eI(e) ? !eI(e) || e.prototype && e.prototype.isReactComponent || !t ? [e] : tt(e(t), t, n, r) : e instanceof e8 ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : e$(e) ? te(e) : Array.isArray(e) ? Array.prototype.concat.apply(ee, e.map(function (e) {
            return tt(e, t, n, r)
        })) : [e.toString()]
    }

    function tn(e) {
        for (var t = 0; t < e.length; t += 1) {
            var n = e[t];
            if (eI(n) && !eO(n)) return !1
        }
        return !0
    }

    var tr = ed(K), ti = function () {
        function e(e, t, n) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && tn(e), this.componentId = t, this.baseHash = eh(tr, t), this.baseStyle = n, eX.registerId(t)
        }

        return e.prototype.generateAndInjectStyles = function (e, t, n) {
            var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
            if (this.isStatic && !n.hash) {
                if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = eR(r, this.staticRulesId); else {
                    var i = eA(tt(this.rules, e, t, n)), s = ec(eh(this.baseHash, i) >>> 0);
                    if (!t.hasNameForId(this.componentId, s)) {
                        var a = n(i, ".".concat(s), void 0, this.componentId);
                        t.insertRules(this.componentId, s, a)
                    }
                    r = eR(r, s), this.staticRulesId = s
                }
            } else {
                for (var o = eh(this.baseHash, n.hash), l = "", c = 0; c < this.rules.length; c++) {
                    var u = this.rules[c];
                    if ("string" == typeof u) l += u; else if (u) {
                        var h = eA(tt(u, e, t, n));
                        o = eh(o, h + c), l += h
                    }
                }
                if (l) {
                    var d = ec(o >>> 0);
                    t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(l, ".".concat(d), void 0, this.componentId)), r = eR(r, d)
                }
            }
            return r
        }, e
    }(), ts = s.createContext(void 0);

    function ta() {
        var e = (0, s.useContext)(ts);
        if (!e) throw ej(18);
        return e
    }

    function to(e) {
        var t = s.useContext(ts), n = (0, s.useMemo)(function () {
            return function (e, t) {
                if (!e) throw ej(14);
                if (eI(e)) return e(t);
                if (Array.isArray(e) || "object" != typeof e) throw ej(8);
                return t ? r(r({}, t), e) : e
            }(e.theme, t)
        }, [e.theme, t]);
        return e.children ? s.createElement(ts.Provider, {value: n}, e.children) : null
    }

    ts.Consumer;
    var tl = {};

    function tc(e, t, n) {
        var i, a, o, l, c = eO(e), u = !ep(e), h = t.attrs, d = void 0 === h ? ee : h, p = t.componentId,
            f = void 0 === p ? (i = t.displayName, a = t.parentComponentId, tl[o = "string" != typeof i ? "sc" : ea(i)] = (tl[o] || 0) + 1, l = "".concat(o, "-").concat(ec(ed(K + o + tl[o]) >>> 0)), a ? "".concat(a, "-").concat(l) : l) : p,
            m = t.displayName,
            g = void 0 === m ? ep(e) ? "styled.".concat(e) : "Styled(".concat(e.displayName || e.name || "Component", ")") : m,
            y = t.displayName && t.componentId ? "".concat(ea(t.displayName), "-").concat(t.componentId) : t.componentId || f,
            v = c && e.attrs ? e.attrs.concat(d).filter(Boolean) : d, _ = t.shouldForwardProp;
        if (c && e.shouldForwardProp) {
            var b = e.shouldForwardProp;
            if (t.shouldForwardProp) {
                var w = t.shouldForwardProp;
                _ = function (e, t) {
                    return b(e, t) && w(e, t)
                }
            } else _ = b
        }
        var S = new ti(n, y, c ? e.componentStyle : void 0);

        function E(e, t) {
            return function (e, t, n) {
                var i, a = e.attrs, o = e.componentStyle, l = e.defaultProps, c = e.foldedComponentIds,
                    u = e.styledComponentId, h = e.target, d = s.useContext(ts), p = e4(),
                    f = e.shouldForwardProp || p.shouldForwardProp, m = en(t, d, l) || et, g = function (e, t, n) {
                        for (var i, s = r(r({}, t), {className: void 0, theme: n}), a = 0; a < e.length; a += 1) {
                            var o = eI(i = e[a]) ? i(s) : i;
                            for (var l in o) s[l] = "className" === l ? eR(s[l], o[l]) : "style" === l ? r(r({}, s[l]), o[l]) : o[l]
                        }
                        return t.className && (s.className = eR(s.className, t.className)), s
                    }(a, t, m), y = g.as || h, v = {};
                for (var _ in g) void 0 === g[_] || "$" === _[0] || "as" === _ || "theme" === _ && g.theme === m || ("forwardedAs" === _ ? v.as = g.forwardedAs : f && !f(_, y) || (v[_] = g[_]));
                var b = (i = e4(), o.generateAndInjectStyles(g, i.styleSheet, i.stylis)), w = eR(c, u);
                return b && (w += " " + b), g.className && (w += " " + g.className), v[ep(y) && !er.has(y) ? "class" : "className"] = w, v.ref = n, (0, s.createElement)(y, v)
            }(k, e, t)
        }

        E.displayName = g;
        var k = s.forwardRef(E);
        return k.attrs = v, k.componentStyle = S, k.displayName = g, k.shouldForwardProp = _, k.foldedComponentIds = c ? eR(e.foldedComponentIds, e.styledComponentId) : "", k.styledComponentId = y, k.target = c ? e.target : e, Object.defineProperty(k, "defaultProps", {
            get: function () {
                return this._foldedDefaultProps
            }, set: function (t) {
                this._foldedDefaultProps = c ? function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    for (var r = 0; r < t.length; r++) (function e(t, n, r) {
                        if (void 0 === r && (r = !1), !r && !e$(t) && !Array.isArray(t)) return n;
                        if (Array.isArray(n)) for (var i = 0; i < n.length; i++) t[i] = e(t[i], n[i]); else if (e$(n)) for (var i in n) t[i] = e(t[i], n[i]);
                        return t
                    })(e, t[r], !0);
                    return e
                }({}, e.defaultProps, t) : t
            }
        }), eP(k, function () {
            return ".".concat(k.styledComponentId)
        }), u && function e(t, n, r) {
            if ("string" != typeof n) {
                if (eC) {
                    var i = ex(n);
                    i && i !== eC && e(t, i, r)
                }
                var s = eE(n);
                ek && (s = s.concat(ek(n)));
                for (var a = ew(t), o = ew(n), l = 0; l < s.length; ++l) {
                    var c = s[l];
                    if (!(c in ev || r && r[c] || o && c in o || a && c in a)) {
                        var u = eT(n, c);
                        try {
                            eS(t, c, u)
                        } catch (e) {
                        }
                    }
                }
            }
            return t
        }(k, e, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0
        }), k
    }

    function tu(e, t) {
        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
        return n
    }

    var th = function (e) {
        return Object.assign(e, {isCss: !0})
    };

    function td(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return eI(e) || e$(e) ? th(tt(tu(ee, i([e], t, !0)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? tt(e) : th(tt(tu(e, t)))
    }

    var tp = function (e) {
        return function e(t, n, s) {
            if (void 0 === s && (s = et), !n) throw ej(1, n);
            var a = function (e) {
                for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
                return t(n, s, td.apply(void 0, i([e], r, !1)))
            };
            return a.attrs = function (i) {
                return e(t, n, r(r({}, s), {attrs: Array.prototype.concat(s.attrs, i).filter(Boolean)}))
            }, a.withConfig = function (i) {
                return e(t, n, r(r({}, s), i))
            }, a
        }(tc, e)
    }, tf = tp;
    er.forEach(function (e) {
        tf[e] = tp(e)
    });
    var tm = function () {
        function e(e, t) {
            this.rules = e, this.componentId = t, this.isStatic = tn(e), eX.registerId(this.componentId + 1)
        }

        return e.prototype.createStyles = function (e, t, n, r) {
            var i = r(eA(tt(this.rules, t, n, r)), ""), s = this.componentId + e;
            n.insertRules(s, s, i)
        }, e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e)
        }, e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && eX.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
        }, e
    }();

    function tg(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var a = td.apply(void 0, i([e], t, !1)), o = "sc-global-".concat(ec(ed(JSON.stringify(a)) >>> 0)),
            l = new tm(a, o), c = function (e) {
                var t = e4(), n = s.useContext(ts), r = s.useRef(t.styleSheet.allocateGSInstance(o)).current;
                return t.styleSheet.server && u(r, e, t.styleSheet, n, t.stylis), s.useLayoutEffect(function () {
                    if (!t.styleSheet.server) return u(r, e, t.styleSheet, n, t.stylis), function () {
                        return l.removeStyles(r, t.styleSheet)
                    }
                }, [r, e, t.styleSheet, n, t.stylis]), null
            };

        function u(e, t, n, i, s) {
            if (l.isStatic) l.renderStyles(e, Q, n, s); else {
                var a = r(r({}, t), {theme: en(t, i, c.defaultProps)});
                l.renderStyles(e, a, n, s)
            }
        }

        return s.memo(c)
    }

    !function () {
        function e() {
            var e = this;
            this._emitSheetCSS = function () {
                var t = e.instance.toString(), r = n.nc,
                    i = eA([r && 'nonce="'.concat(r, '"'), "".concat(G, '="true"'), "".concat(J, '="').concat(K, '"')].filter(Boolean), " ");
                return "<style ".concat(i, ">").concat(t, "</style>")
            }, this.getStyleTags = function () {
                if (e.sealed) throw ej(2);
                return e._emitSheetCSS()
            }, this.getStyleElement = function () {
                if (e.sealed) throw ej(2);
                var t, i = ((t = {})[G] = "", t[J] = K, t.dangerouslySetInnerHTML = {__html: e.instance.toString()}, t),
                    a = n.nc;
                return a && (i.nonce = a), [s.createElement("style", r({}, i, {key: "sc-0-0"}))]
            }, this.seal = function () {
                e.sealed = !0
            }, this.instance = new eX({isServer: !0}), this.sealed = !1
        }

        e.prototype.collectStyles = function (e) {
            if (this.sealed) throw ej(2);
            return s.createElement(e9, {sheet: this.instance}, e)
        }, e.prototype.interleaveWithNodeStream = function (e) {
            throw ej(3)
        }
    }()
}

,
12415
:

function (e, t, n) {
    "use strict";
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r = n(50959), i = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }, s = r.useState, a = r.useEffect, o = r.useLayoutEffect, l = r.useDebugValue;

    function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !i(e, n)
        } catch (e) {
            return !0
        }
    }

    var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
        return t()
    } : function (e, t) {
        var n = t(), r = s({inst: {value: n, getSnapshot: t}}), i = r[0].inst, u = r[1];
        return o(function () {
            i.value = n, i.getSnapshot = t, c(i) && u({inst: i})
        }, [e, n, t]), a(function () {
            return c(i) && u({inst: i}), e(function () {
                c(i) && u({inst: i})
            })
        }, [e]), l(n), n
    };
    t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
}

,
2179
:

function (e, t, n) {
    "use strict";
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var r = n(50959), i = n(4322), s = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }, a = i.useSyncExternalStore, o = r.useRef, l = r.useEffect, c = r.useMemo, u = r.useDebugValue;
    t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var h = o(null);
        if (null === h.current) {
            var d = {hasValue: !1, value: null};
            h.current = d
        } else d = h.current;
        var p = a(e, (h = c(function () {
            function e(e) {
                if (!l) {
                    if (l = !0, a = e, e = r(e), void 0 !== i && d.hasValue) {
                        var t = d.value;
                        if (i(t, e)) return o = t
                    }
                    return o = e
                }
                if (t = o, s(a, e)) return t;
                var n = r(e);
                return void 0 !== i && i(t, n) ? t : (a = e, o = n)
            }

            var a, o, l = !1, c = void 0 === n ? null : n;
            return [function () {
                return e(t())
            }, null === c ? void 0 : function () {
                return e(c())
            }]
        }, [t, n, r, i]))[0], h[1]);
        return l(function () {
            d.hasValue = !0, d.value = p
        }, [p]), u(p), p
    }
}

,
4322
:

function (e, t, n) {
    "use strict";
    e.exports = n(12415)
}

,
7231
:

function (e, t, n) {
    "use strict";
    e.exports = n(2179)
}

,
39202
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        a: function () {
            return _
        }
    });
    var r = n(11527), i = n(50959), s = n(11822), a = n(33871), o = n(70444), l = n(99586), c = n(39771), u = n(57804),
        h = n(83741), d = n(86259), p = {
            root: "m_5ae2e3c",
            barsLoader: "m_7a2bd4cd",
            bar: "m_870bb79",
            "bars-loader-animation": "m_5d2b3b9d",
            dotsLoader: "m_4e3f22d7",
            dot: "m_870c4af",
            "loader-dots-animation": "m_aac34a1",
            ovalLoader: "m_b34414df",
            "oval-loader-animation": "m_f8e89c4b"
        };
    let f = (0, i.forwardRef)(({className: e, ...t}, n) => (0, r.jsxs)(u.x, {
        component: "span",
        className: (0, d.Z)(p.barsLoader, e), ...t,
        ref: n,
        children: [(0, r.jsx)("span", {className: p.bar}), (0, r.jsx)("span", {className: p.bar}), (0, r.jsx)("span", {className: p.bar})]
    })), m = (0, i.forwardRef)(({className: e, ...t}, n) => (0, r.jsxs)(u.x, {
        component: "span",
        className: (0, d.Z)(p.dotsLoader, e), ...t,
        ref: n,
        children: [(0, r.jsx)("span", {className: p.dot}), (0, r.jsx)("span", {className: p.dot}), (0, r.jsx)("span", {className: p.dot})]
    })), g = {
        bars: f,
        oval: (0, i.forwardRef)(({className: e, ...t}, n) => (0, r.jsx)(u.x, {
            component: "span",
            className: (0, d.Z)(p.ovalLoader, e), ...t,
            ref: n
        })),
        dots: m
    }, y = {loaders: g, type: "oval"}, v = (0, a.Z)((e, {size: t, color: n}) => ({
        root: {
            "--loader-size": (0, s.ap)(t, "loader-size"),
            "--loader-color": n ? (0, o.p)(n, e) : void 0
        }
    })), _ = (0, h.d)((e, t) => {
        let n = (0, l.w)("Loader", y, e), {
            size: i,
            color: s,
            type: a,
            vars: o,
            className: h,
            style: d,
            classNames: f,
            styles: m,
            unstyled: g,
            loaders: _,
            variant: b,
            children: w,
            ...S
        } = n, E = (0, c.y)({
            name: "Loader",
            props: n,
            classes: p,
            className: h,
            style: d,
            classNames: f,
            styles: m,
            unstyled: g,
            vars: o,
            varsResolver: v
        });
        return w ? (0, r.jsx)(u.x, {...E("root"), ref: t, ...S, children: w}) : (0, r.jsx)(u.x, {
            ...E("root"),
            ref: t,
            component: _[a],
            variant: b,
            size: i, ...S
        })
    });
    _.defaultLoaders = g, _.classes = p, _.displayName = "@mantine/core/Loader"
}

,
78620
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        f: function () {
            return y
        }
    });
    var r = n(11527);
    n(50959);
    var i = n(3635), s = n(33871), a = n(34233), o = n(99586), l = n(39771), c = n(57804), u = n(83741), h = n(39202),
        d = n(64430), p = n(78695), f = {root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17"};
    let m = {
        transitionProps: {transition: "fade", duration: 0},
        overlayProps: {backgroundOpacity: .75},
        zIndex: (0, i.w)("overlay")
    }, g = (0, s.Z)((e, {zIndex: t}) => ({root: {"--lo-z-index": t?.toString()}})), y = (0, u.d)((e, t) => {
        let n = (0, o.w)("LoadingOverlay", m, e), {
            classNames: i,
            className: s,
            style: u,
            styles: y,
            unstyled: v,
            vars: _,
            transitionProps: b,
            loaderProps: w,
            overlayProps: S,
            visible: E,
            zIndex: k,
            ...T
        } = n, x = (0, a.rZ)(), C = (0, l.y)({
            name: "LoadingOverlay",
            classes: f,
            props: n,
            className: s,
            style: u,
            classNames: i,
            styles: y,
            unstyled: v,
            vars: _,
            varsResolver: g
        }), I = {...m.overlayProps, ...S};
        return (0, r.jsx)(p.u, {
            transition: "fade", ...b,
            mounted: !!E,
            children: e => (0, r.jsxs)(c.x, {
                ...C("root", {style: e}),
                ref: t, ...T,
                children: [(0, r.jsx)(h.a, {...C("loader"), unstyled: v, ...w}), (0, r.jsx)(d.a, {
                    ...I, ...C("overlay"),
                    darkHidden: !0,
                    unstyled: v,
                    color: S?.color || x.white
                }), (0, r.jsx)(d.a, {
                    ...I, ...C("overlay"),
                    lightHidden: !0,
                    unstyled: v,
                    color: S?.color || x.colors.dark[5]
                })]
            })
        })
    });
    y.classes = f, y.displayName = "@mantine/core/LoadingOverlay"
}

,
64430
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        a: function () {
            return g
        }
    });
    var r = n(11527), i = n(1138);
    n(50959);
    var s = n(3635), a = n(11822), o = n(33871), l = n(71132), c = n(99586), u = n(39771), h = n(57804), d = n(54973),
        p = {root: "m_9814e45f"};
    let f = {zIndex: (0, s.w)("modal")}, m = (0, o.Z)((e, {
        gradient: t,
        color: n,
        backgroundOpacity: r,
        blur: s,
        radius: o,
        zIndex: c
    }) => ({
        root: {
            "--overlay-bg": t || (void 0 !== n || void 0 !== r) && (0, l.m)(n || "#000", r ?? .6) || void 0,
            "--overlay-filter": s ? `blur(${(0, i.h)(s)})` : void 0,
            "--overlay-radius": void 0 === o ? void 0 : (0, a.H5)(o),
            "--overlay-z-index": c?.toString()
        }
    })), g = (0, d.b)((e, t) => {
        let n = (0, c.w)("Overlay", f, e), {
            classNames: i,
            className: s,
            style: a,
            styles: o,
            unstyled: l,
            vars: d,
            fixed: g,
            center: y,
            children: v,
            radius: _,
            zIndex: b,
            gradient: w,
            blur: S,
            color: E,
            backgroundOpacity: k,
            mod: T,
            ...x
        } = n, C = (0, u.y)({
            name: "Overlay",
            props: n,
            classes: p,
            className: s,
            style: a,
            classNames: i,
            styles: o,
            unstyled: l,
            vars: d,
            varsResolver: m
        });
        return (0, r.jsx)(h.x, {ref: t, ...C("root"), mod: [{center: y, fixed: g}, T], ...x, children: v})
    });
    g.classes = p, g.displayName = "@mantine/core/Overlay"
}

,
78695
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        u: function () {
            return p
        }
    });
    var r = n(11527), i = n(1138), s = n(50959);
    let a = e => ({
        in: {opacity: 1, transform: "scale(1)"},
        out: {opacity: 0, transform: `scale(.9) translateY(${(0, i.h)("bottom" === e ? 10 : -10)})`},
        transitionProperty: "transform, opacity"
    }), o = {
        fade: {in: {opacity: 1}, out: {opacity: 0}, transitionProperty: "opacity"},
        "fade-up": {
            in: {opacity: 1, transform: "translateY(0)"},
            out: {opacity: 0, transform: `translateY(${(0, i.h)(30)}`},
            transitionProperty: "opacity, transform"
        },
        "fade-down": {
            in: {opacity: 1, transform: "translateY(0)"},
            out: {opacity: 0, transform: `translateY(${(0, i.h)(-30)}`},
            transitionProperty: "opacity, transform"
        },
        "fade-left": {
            in: {opacity: 1, transform: "translateX(0)"},
            out: {opacity: 0, transform: `translateX(${(0, i.h)(30)}`},
            transitionProperty: "opacity, transform"
        },
        "fade-right": {
            in: {opacity: 1, transform: "translateX(0)"},
            out: {opacity: 0, transform: `translateX(${(0, i.h)(-30)}`},
            transitionProperty: "opacity, transform"
        },
        scale: {
            in: {opacity: 1, transform: "scale(1)"},
            out: {opacity: 0, transform: "scale(0)"},
            common: {transformOrigin: "top"},
            transitionProperty: "transform, opacity"
        },
        "scale-y": {
            in: {opacity: 1, transform: "scaleY(1)"},
            out: {opacity: 0, transform: "scaleY(0)"},
            common: {transformOrigin: "top"},
            transitionProperty: "transform, opacity"
        },
        "scale-x": {
            in: {opacity: 1, transform: "scaleX(1)"},
            out: {opacity: 0, transform: "scaleX(0)"},
            common: {transformOrigin: "left"},
            transitionProperty: "transform, opacity"
        },
        "skew-up": {
            in: {opacity: 1, transform: "translateY(0) skew(0deg, 0deg)"},
            out: {opacity: 0, transform: `translateY(${(0, i.h)(-20)}) skew(-10deg, -5deg)`},
            common: {transformOrigin: "top"},
            transitionProperty: "transform, opacity"
        },
        "skew-down": {
            in: {opacity: 1, transform: "translateY(0) skew(0deg, 0deg)"},
            out: {opacity: 0, transform: `translateY(${(0, i.h)(20)}) skew(-10deg, -5deg)`},
            common: {transformOrigin: "bottom"},
            transitionProperty: "transform, opacity"
        },
        "rotate-left": {
            in: {opacity: 1, transform: "translateY(0) rotate(0deg)"},
            out: {opacity: 0, transform: `translateY(${(0, i.h)(20)}) rotate(-5deg)`},
            common: {transformOrigin: "bottom"},
            transitionProperty: "transform, opacity"
        },
        "rotate-right": {
            in: {opacity: 1, transform: "translateY(0) rotate(0deg)"},
            out: {opacity: 0, transform: `translateY(${(0, i.h)(20)}) rotate(5deg)`},
            common: {transformOrigin: "top"},
            transitionProperty: "transform, opacity"
        },
        "slide-down": {
            in: {opacity: 1, transform: "translateY(0)"},
            out: {opacity: 0, transform: "translateY(-100%)"},
            common: {transformOrigin: "top"},
            transitionProperty: "transform, opacity"
        },
        "slide-up": {
            in: {opacity: 1, transform: "translateY(0)"},
            out: {opacity: 0, transform: "translateY(100%)"},
            common: {transformOrigin: "bottom"},
            transitionProperty: "transform, opacity"
        },
        "slide-left": {
            in: {opacity: 1, transform: "translateX(0)"},
            out: {opacity: 0, transform: "translateX(100%)"},
            common: {transformOrigin: "left"},
            transitionProperty: "transform, opacity"
        },
        "slide-right": {
            in: {opacity: 1, transform: "translateX(0)"},
            out: {opacity: 0, transform: "translateX(-100%)"},
            common: {transformOrigin: "right"},
            transitionProperty: "transform, opacity"
        },
        pop: {...a("bottom"), common: {transformOrigin: "center center"}},
        "pop-bottom-left": {...a("bottom"), common: {transformOrigin: "bottom left"}},
        "pop-bottom-right": {...a("bottom"), common: {transformOrigin: "bottom right"}},
        "pop-top-left": {...a("top"), common: {transformOrigin: "top left"}},
        "pop-top-right": {...a("top"), common: {transformOrigin: "top right"}}
    }, l = {entering: "in", entered: "in", exiting: "out", exited: "out", "pre-exiting": "out", "pre-entering": "out"};
    var c = n(10422), u = n(75531), h = n(40423), d = n(34233);

    function p({
                   keepMounted: e,
                   transition: t = "fade",
                   duration: n = 250,
                   exitDuration: i = n,
                   mounted: a,
                   children: p,
                   timingFunction: f = "ease",
                   onExit: m,
                   onEntered: g,
                   onEnter: y,
                   onExited: v
               }) {
        let {transitionDuration: _, transitionStatus: b, transitionTimingFunction: w} = function ({
                                                                                                      duration: e,
                                                                                                      exitDuration: t,
                                                                                                      timingFunction: n,
                                                                                                      mounted: r,
                                                                                                      onEnter: i,
                                                                                                      onExit: a,
                                                                                                      onEntered: o,
                                                                                                      onExited: l
                                                                                                  }) {
            let p = (0, d.rZ)(), f = (0, u.J)(),
                m = !!p.respectReducedMotion && f, [g, y] = (0, s.useState)(m ? 0 : e), [v, _] = (0, s.useState)(r ? "entered" : "exited"),
                b = (0, s.useRef)(-1), w = (0, s.useRef)(-1), S = n => {
                    let r = n ? i : a, s = n ? o : l;
                    window.clearTimeout(b.current);
                    let u = m ? 0 : n ? e : t;
                    y(u), 0 === u ? ("function" == typeof r && r(), "function" == typeof s && s(), _(n ? "entered" : "exited")) : w.current = requestAnimationFrame(() => {
                        c.flushSync(() => {
                            _(n ? "pre-entering" : "pre-exiting")
                        }), w.current = requestAnimationFrame(() => {
                            "function" == typeof r && r(), _(n ? "entering" : "exiting"), b.current = window.setTimeout(() => {
                                "function" == typeof s && s(), _(n ? "entered" : "exited")
                            }, u)
                        })
                    })
                };
            return (0, h.l)(() => {
                S(r)
            }, [r]), (0, s.useEffect)(() => () => {
                window.clearTimeout(b.current), cancelAnimationFrame(w.current)
            }, []), {transitionDuration: g, transitionStatus: v, transitionTimingFunction: n || "ease"}
        }({
            mounted: a,
            exitDuration: i,
            duration: n,
            timingFunction: f,
            onExit: m,
            onEntered: g,
            onEnter: y,
            onExited: v
        });
        return 0 === _ ? a ? (0, r.jsx)(r.Fragment, {children: p({})}) : e ? p({display: "none"}) : null : "exited" === b ? e ? p({display: "none"}) : null : (0, r.jsx)(r.Fragment, {
            children: p(function ({
                                      transition: e,
                                      state: t,
                                      duration: n,
                                      timingFunction: r
                                  }) {
                let i = {transitionDuration: `${n}ms`, transitionTimingFunction: r};
                return "string" == typeof e ? e in o ? {transitionProperty: o[e].transitionProperty, ...i, ...o[e].common, ...o[e][l[t]]} : {} : {transitionProperty: e.transitionProperty, ...i, ...e.common, ...e[l[t]]}
            }({transition: t, duration: _, state: b, timingFunction: w}))
        })
    }

    p.displayName = "@mantine/core/Transition"
}

,
57804
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        x: function () {
            return y
        }
    });
    var r = n(11527), i = n(50959), s = n(86259), a = n(49696), o = n(85354), l = n(23168), c = n(34233);

    function u(e) {
        return e.startsWith("data-") ? e : `data-${e}`
    }

    function h(e, t) {
        return Array.isArray(e) ? [...e].reduce((e, n) => ({...e, ...h(n, t)}), {}) : "function" == typeof e ? e(t) : null == e ? {} : e
    }

    var d = n(93434);
    let p = {
        m: {type: "spacing", property: "margin"},
        mt: {type: "spacing", property: "marginTop"},
        mb: {type: "spacing", property: "marginBottom"},
        ml: {type: "spacing", property: "marginLeft"},
        mr: {type: "spacing", property: "marginRight"},
        ms: {type: "spacing", property: "marginInlineStart"},
        me: {type: "spacing", property: "marginInlineEnd"},
        mx: {type: "spacing", property: "marginInline"},
        my: {type: "spacing", property: "marginBlock"},
        p: {type: "spacing", property: "padding"},
        pt: {type: "spacing", property: "paddingTop"},
        pb: {type: "spacing", property: "paddingBottom"},
        pl: {type: "spacing", property: "paddingLeft"},
        pr: {type: "spacing", property: "paddingRight"},
        ps: {type: "spacing", property: "paddingInlineStart"},
        pe: {type: "spacing", property: "paddingInlineEnd"},
        px: {type: "spacing", property: "paddingInline"},
        py: {type: "spacing", property: "paddingBlock"},
        bg: {type: "color", property: "background"},
        c: {type: "textColor", property: "color"},
        opacity: {type: "identity", property: "opacity"},
        ff: {type: "fontFamily", property: "fontFamily"},
        fz: {type: "fontSize", property: "fontSize"},
        fw: {type: "identity", property: "fontWeight"},
        lts: {type: "size", property: "letterSpacing"},
        ta: {type: "identity", property: "textAlign"},
        lh: {type: "lineHeight", property: "lineHeight"},
        fs: {type: "identity", property: "fontStyle"},
        tt: {type: "identity", property: "textTransform"},
        td: {type: "identity", property: "textDecoration"},
        w: {type: "spacing", property: "width"},
        miw: {type: "spacing", property: "minWidth"},
        maw: {type: "spacing", property: "maxWidth"},
        h: {type: "spacing", property: "height"},
        mih: {type: "spacing", property: "minHeight"},
        mah: {type: "spacing", property: "maxHeight"},
        bgsz: {type: "size", property: "backgroundSize"},
        bgp: {type: "identity", property: "backgroundPosition"},
        bgr: {type: "identity", property: "backgroundRepeat"},
        bga: {type: "identity", property: "backgroundAttachment"},
        pos: {type: "identity", property: "position"},
        top: {type: "identity", property: "top"},
        left: {type: "size", property: "left"},
        bottom: {type: "size", property: "bottom"},
        right: {type: "size", property: "right"},
        inset: {type: "size", property: "inset"},
        display: {type: "identity", property: "display"},
        flex: {type: "identity", property: "flex"}
    };
    var f = n(92739), m = n(90107);
    let g = (0, i.forwardRef)(({
                                   component: e,
                                   style: t,
                                   __vars: n,
                                   className: i,
                                   variant: g,
                                   mod: y,
                                   size: v,
                                   hiddenFrom: _,
                                   visibleFrom: b,
                                   lightHidden: w,
                                   darkHidden: S,
                                   renderRoot: E,
                                   ...k
                               }, T) => {
        let x = (0, c.rZ)(), {styleProps: C, rest: I} = (0, d.c)(k), O = (0, l.dv)(), R = O?.(C.sx), A = (0, m.m)(),
            $ = (0, f.n)({styleProps: C, theme: x, data: p}), P = {
                ref: T,
                style: function ({theme: e, style: t, vars: n, styleProps: r}) {
                    let i = h(t, e), s = h(n, e);
                    return {...i, ...s, ...r}
                }({theme: x, style: t, vars: n, styleProps: $.inlineStyles}),
                className: (0, s.Z)(i, R, {
                    [A]: $.hasResponsiveStyles,
                    "mantine-light-hidden": w,
                    "mantine-dark-hidden": S,
                    [`mantine-hidden-from-${_}`]: _,
                    [`mantine-visible-from-${b}`]: b
                }),
                "data-variant": g,
                "data-size": (0, o.s)(v) ? void 0 : v || void 0, ...function e(t) {
                    return t ? "string" == typeof t ? {[u(t)]: !0} : Array.isArray(t) ? [...t].reduce((t, n) => ({...t, ...e(n)}), {}) : Object.keys(t).reduce((e, n) => {
                        let r = t[n];
                        return void 0 === r || "" === r || !1 === r || null === r || (e[u(n)] = t[n]), e
                    }, {}) : null
                }(y), ...I
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [$.hasResponsiveStyles && (0, r.jsx)(a.f, {
                selector: `.${A}`,
                styles: $.styles,
                media: $.media
            }), "function" == typeof E ? E(P) : (0, r.jsx)(e || "div", {...P})]
        })
    });
    g.displayName = "@mantine/core/Box";
    let y = g
}

,
93434
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        c: function () {
            return i
        }
    });
    var r = n(12210);

    function i(e) {
        let {
            m: t,
            mx: n,
            my: i,
            mt: s,
            mb: a,
            ml: o,
            mr: l,
            me: c,
            ms: u,
            p: h,
            px: d,
            py: p,
            pt: f,
            pb: m,
            pl: g,
            pr: y,
            pe: v,
            ps: _,
            bg: b,
            c: w,
            opacity: S,
            ff: E,
            fz: k,
            fw: T,
            lts: x,
            ta: C,
            lh: I,
            fs: O,
            tt: R,
            td: A,
            w: $,
            miw: P,
            maw: j,
            h: M,
            mih: N,
            mah: D,
            bgsz: L,
            bgp: F,
            bgr: U,
            bga: B,
            pos: z,
            top: H,
            left: q,
            bottom: W,
            right: G,
            inset: V,
            display: J,
            flex: K,
            hiddenFrom: Y,
            visibleFrom: X,
            lightHidden: Z,
            darkHidden: Q,
            sx: ee,
            ...et
        } = e;
        return {
            styleProps: (0, r.L)({
                m: t,
                mx: n,
                my: i,
                mt: s,
                mb: a,
                ml: o,
                mr: l,
                me: c,
                ms: u,
                p: h,
                px: d,
                py: p,
                pt: f,
                pb: m,
                pl: g,
                pr: y,
                pe: v,
                ps: _,
                bg: b,
                c: w,
                opacity: S,
                ff: E,
                fz: k,
                fw: T,
                lts: x,
                ta: C,
                lh: I,
                fs: O,
                tt: R,
                td: A,
                w: $,
                miw: P,
                maw: j,
                h: M,
                mih: N,
                mah: D,
                bgsz: L,
                bgp: F,
                bgr: U,
                bga: B,
                pos: z,
                top: H,
                left: q,
                bottom: W,
                right: G,
                inset: V,
                display: J,
                flex: K,
                hiddenFrom: Y,
                visibleFrom: X,
                lightHidden: Z,
                darkHidden: Q,
                sx: ee
            }), rest: et
        }
    }

    n(50959), n(11527)
}

,
92739
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        n: function () {
            return d
        }
    });
    var r = n(49340);
    n(50959), n(11527);
    var i = n(32110);

    function s(e, t) {
        let n = (0, i.E)({color: e, theme: t});
        return "dimmed" === n.color ? "var(--mantine-color-dimmed)" : "bright" === n.color ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color
    }

    let a = {
        text: "var(--mantine-font-family)",
        mono: "var(--mantine-font-family-monospace)",
        monospace: "var(--mantine-font-family-monospace)",
        heading: "var(--mantine-font-family-headings)",
        headings: "var(--mantine-font-family-headings)"
    };
    var o = n(1138);
    let l = ["h1", "h2", "h3", "h4", "h5", "h6"], c = ["h1", "h2", "h3", "h4", "h5", "h6"], u = {
        color: s, textColor: function (e, t) {
            let n = (0, i.E)({color: e, theme: t});
            return n.isThemeColor && void 0 === n.shade ? `var(--mantine-color-${n.color}-text)` : s(e, t)
        }, fontSize: function (e, t) {
            return "string" == typeof e && e in t.fontSizes ? `var(--mantine-font-size-${e})` : "string" == typeof e && l.includes(e) ? `var(--mantine-${e}-font-size)` : "number" == typeof e || "string" == typeof e ? (0, o.h)(e) : e
        }, spacing: function (e, t) {
            if ("number" == typeof e) return (0, o.h)(e);
            if ("string" == typeof e) {
                let n = e.replace("-", "");
                if (!(n in t.spacing)) return (0, o.h)(e);
                let r = `--mantine-spacing-${n}`;
                return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`
            }
            return e
        }, identity: function (e) {
            return e
        }, size: function (e) {
            return "number" == typeof e ? (0, o.h)(e) : e
        }, lineHeight: function (e, t) {
            return "string" == typeof e && e in t.lineHeights ? `var(--mantine-line-height-${e})` : "string" == typeof e && c.includes(e) ? `var(--mantine-${e}-line-height)` : e
        }, fontFamily: function (e) {
            return "string" == typeof e && e in a ? a[e] : e
        }
    };

    function h(e) {
        return e.replace("(min-width: ", "").replace("em)", "")
    }

    function d({styleProps: e, data: t, theme: n}) {
        return function ({media: e, ...t}) {
            let n = Object.keys(e).sort((e, t) => Number(h(e)) - Number(h(t))).map(t => ({query: t, styles: e[t]}));
            return {...t, media: n}
        }((0, r.X)(e).reduce((i, s) => {
            var a, o;
            if ("hiddenFrom" === s || "visibleFrom" === s || "sx" === s) return i;
            let l = t[s], c = Array.isArray(l.property) ? l.property : [l.property],
                h = "object" == typeof (o = e[s]) && null !== o ? "base" in o ? o.base : void 0 : o;
            if (!function (e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.keys(e);
                return 1 !== t.length || "base" !== t[0]
            }(e[s])) return c.forEach(e => {
                i.inlineStyles[e] = u[l.type](h, n)
            }), i;
            i.hasResponsiveStyles = !0;
            let d = "object" == typeof (a = e[s]) && null !== a ? (0, r.X)(a).filter(e => "base" !== e) : [];
            return c.forEach(t => {
                h && (i.styles[t] = u[l.type](h, n)), d.forEach(r => {
                    var a;
                    let o = `(min-width: ${n.breakpoints[r]})`;
                    i.media[o] = {
                        ...i.media[o],
                        [t]: u[l.type]("object" == typeof (a = e[s]) && null !== a && r in a ? a[r] : a, n)
                    }
                })
            }), i
        }, {hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {}}))
    }
}

,
90107
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        m: function () {
            return i
        }
    });
    var r = n(50959);

    function i() {
        let e = (0, r.useId)().replace(/:/g, "");
        return `__m__-${e}`
    }
}

,
49696
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        f: function () {
            return o
        }
    });
    var r = n(11527);
    n(50959);
    var i = n(23168), s = n(49340);

    function a(e) {
        return (0, s.X)(e).reduce((t, n) => void 0 !== e[n] ? `${t}${n.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)}:${e[n]};` : t, "").trim()
    }

    function o({selector: e, styles: t, media: n}) {
        let s = (0, i.R7)();
        return (0, r.jsx)("style", {
            "data-mantine-styles": "inline",
            nonce: s?.(),
            dangerouslySetInnerHTML: {
                __html: function ({selector: e, styles: t, media: n}) {
                    let r = t ? a(t) : "",
                        i = Array.isArray(n) ? n.map(t => `@media${t.query}{${e}{${a(t.styles)}}}`) : [];
                    return `${r ? `${e}{${r}}` : ""}${i.join("")}`.trim()
                }({selector: e, styles: t, media: n})
            }
        })
    }
}

,
23168
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        DE: function () {
            return u
        }, Nu: function () {
            return c
        }, R7: function () {
            return l
        }, Sm: function () {
            return a
        }, XD: function () {
            return i
        }, dv: function () {
            return h
        }, sZ: function () {
            return d
        }, uK: function () {
            return o
        }
    });
    var r = n(50959);
    let i = (0, r.createContext)(null);

    function s() {
        let e = (0, r.useContext)(i);
        if (!e) throw Error("[@mantine/core] MantineProvider was not found in tree");
        return e
    }

    function a() {
        return s().cssVariablesResolver
    }

    function o() {
        return s().classNamesPrefix
    }

    function l() {
        return s().getStyleNonce
    }

    function c() {
        return s().withStaticClasses
    }

    function u() {
        return s().headless
    }

    function h() {
        return s().stylesTransform?.sx
    }

    function d() {
        return s().stylesTransform?.styles
    }
}

,
34233
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        M2: function () {
            return d
        }, rZ: function () {
            return h
        }
    });
    var r = n(11527), i = n(50959), s = n(75354), a = n(31686);

    function o(e) {
        return !(e < 0) && !(e > 9) && parseInt(e.toString(), 10) === e
    }

    function l(e) {
        if (!(e.primaryColor in e.colors)) throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");
        if ("object" == typeof e.primaryShade && (!o(e.primaryShade.dark) || !o(e.primaryShade.light)) || "number" == typeof e.primaryShade && !o(e.primaryShade)) throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")
    }

    let c = (0, i.createContext)(null), u = () => (0, i.useContext)(c) || s.t;

    function h() {
        let e = (0, i.useContext)(c);
        if (!e) throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");
        return e
    }

    function d({theme: e, children: t, inherit: n = !0}) {
        let o = u(), h = (0, i.useMemo)(() => (function (e, t) {
            if (!t) return l(e), e;
            let n = (0, a.R)(e, t);
            return t.fontFamily && !t.headings?.fontFamily && (n.headings.fontFamily = t.fontFamily), l(n), n
        })(n ? o : s.t, e), [e, o, n]);
        return (0, r.jsx)(c.Provider, {value: h, children: t})
    }

    d.displayName = "@mantine/core/MantineThemeProvider"
}

,
79122
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        R: function () {
            return s
        }, a: function () {
            return a
        }
    });
    var r = n(42670), i = n(32110);

    function s({color: e, theme: t, autoContrast: n}) {
        return ("boolean" == typeof n ? n : t.autoContrast) && (0, i.E)({
            color: e || t.primaryColor,
            theme: t
        }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)"
    }

    function a(e, t) {
        return s({color: e.colors[e.primaryColor][(0, r.j)(e, t)], theme: e, autoContrast: null})
    }
}

,
65582
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        u: function () {
            return i
        }
    });
    var r = n(70444);

    function i(e, t) {
        let n = {
            from: e?.from || t.defaultGradient.from,
            to: e?.to || t.defaultGradient.to,
            deg: e?.deg || t.defaultGradient.deg || 0
        }, i = (0, r.p)(n.from, t), s = (0, r.p)(n.to, t);
        return `linear-gradient(${n.deg}deg, ${i} 0%, ${s} 100%)`
    }
}

,
42670
:

function (e, t, n) {
    "use strict";

    function r(e, t) {
        return "number" == typeof e.primaryShade ? e.primaryShade : "dark" === t ? e.primaryShade.dark : e.primaryShade.light
    }

    n.d(t, {
        j: function () {
            return r
        }
    })
}

,
70444
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        p: function () {
            return i
        }
    });
    var r = n(32110);

    function i(e, t) {
        let n = (0, r.E)({color: e || t.primaryColor, theme: t});
        return n.variable ? `var(${n.variable})` : e
    }
}

,
32110
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        E: function () {
            return o
        }
    });
    var r = n(42670), i = n(21102);

    function s(e) {
        return e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
    }

    function a(e, t = .179) {
        return !e.startsWith("var(") && function (e) {
            if (e.startsWith("oklch(")) return (function (e) {
                let t = e.match(/oklch\((.*?)%\s/);
                return t ? parseFloat(t[1]) : null
            }(e) || 0) / 100;
            let {r: t, g: n, b: r} = (0, i.c)(e);
            return .2126 * s(t / 255) + .7152 * s(n / 255) + .0722 * s(r / 255)
        }(e) > t
    }

    function o({color: e, theme: t, colorScheme: n}) {
        if ("string" != typeof e) throw Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);
        if ("bright" === e) return {
            color: e,
            value: "dark" === n ? t.white : t.black,
            shade: void 0,
            isThemeColor: !1,
            isLight: a("dark" === n ? t.white : t.black, t.luminanceThreshold),
            variable: "--mantine-color-bright"
        };
        if ("dimmed" === e) return {
            color: e,
            value: "dark" === n ? t.colors.dark[2] : t.colors.gray[7],
            shade: void 0,
            isThemeColor: !1,
            isLight: a("dark" === n ? t.colors.dark[2] : t.colors.gray[6], t.luminanceThreshold),
            variable: "--mantine-color-dimmed"
        };
        if ("white" === e || "black" === e) return {
            color: e,
            value: "white" === e ? t.white : t.black,
            shade: void 0,
            isThemeColor: !1,
            isLight: a("white" === e ? t.white : t.black, t.luminanceThreshold),
            variable: `--mantine-color-${e}`
        };
        let [i, s] = e.split("."), o = s ? Number(s) : void 0, l = i in t.colors;
        if (l) {
            let e = void 0 !== o ? t.colors[i][o] : t.colors[i][(0, r.j)(t, n || "light")];
            return {
                color: i,
                value: e,
                shade: o,
                isThemeColor: l,
                isLight: a(e, t.luminanceThreshold),
                variable: s ? `--mantine-color-${i}-${o}` : `--mantine-color-${i}-filled`
            }
        }
        return {color: e, value: e, isThemeColor: l, isLight: a(e, t.luminanceThreshold), shade: o, variable: void 0}
    }
}

,
71132
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        F: function () {
            return s
        }, m: function () {
            return i
        }
    });
    var r = n(21102);

    function i(e, t) {
        if ("string" != typeof e || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
        if (e.startsWith("var(")) return `color-mix(in srgb, ${e}, transparent ${(1 - t) * 100}%)`;
        if (e.startsWith("oklch")) return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
        let {r: n, g: i, b: s} = (0, r.c)(e);
        return `rgba(${n}, ${i}, ${s}, ${t})`
    }

    let s = i
}

,
21102
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e) ? function (e) {
            let t = e.replace("#", "");
            if (3 === t.length) {
                let e = t.split("");
                t = [e[0], e[0], e[1], e[1], e[2], e[2]].join("")
            }
            if (8 === t.length) {
                let e = parseInt(t.slice(6, 8), 16) / 255;
                return {
                    r: parseInt(t.slice(0, 2), 16),
                    g: parseInt(t.slice(2, 4), 16),
                    b: parseInt(t.slice(4, 6), 16),
                    a: e
                }
            }
            let n = parseInt(t, 16);
            return {r: n >> 16 & 255, g: n >> 8 & 255, b: 255 & n, a: 1}
        }(e) : e.startsWith("rgb") ? function (e) {
            let [t, n, r, i] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
            return {r: t, g: n, b: r, a: i || 1}
        }(e) : e.startsWith("hsl") ? function (e) {
            let t, n, r;
            let i = e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);
            if (!i) return {r: 0, g: 0, b: 0, a: 1};
            let s = parseInt(i[1], 10), a = parseInt(i[2], 10) / 100, o = parseInt(i[3], 10) / 100,
                l = i[5] ? parseFloat(i[5]) : void 0, c = (1 - Math.abs(2 * o - 1)) * a, u = s / 60,
                h = c * (1 - Math.abs(u % 2 - 1)), d = o - c / 2;
            return u >= 0 && u < 1 ? (t = c, n = h, r = 0) : u >= 1 && u < 2 ? (t = h, n = c, r = 0) : u >= 2 && u < 3 ? (t = 0, n = c, r = h) : u >= 3 && u < 4 ? (t = 0, n = h, r = c) : u >= 4 && u < 5 ? (t = h, n = 0, r = c) : (t = c, n = 0, r = h), {
                r: Math.round((t + d) * 255),
                g: Math.round((n + d) * 255),
                b: Math.round((r + d) * 255),
                a: l || 1
            }
        }(e) : {r: 0, g: 0, b: 0, a: 1}
    }

    n.d(t, {
        c: function () {
            return r
        }
    })
}

,
75354
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        t: function () {
            return u
        }
    });
    var r = n(1138);
    n(50959), n(11527);
    var i = n(21102);

    function s(e, t) {
        if (e.startsWith("var(")) return `color-mix(in srgb, ${e}, black ${100 * t}%)`;
        let {r: n, g: r, b: s, a} = (0, i.c)(e), o = 1 - t, l = e => Math.round(e * o);
        return `rgba(${l(n)}, ${l(r)}, ${l(s)}, ${a})`
    }

    var a = n(65582), o = n(32110), l = n(71132);
    let c = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
        u = {
            scale: 1,
            fontSmoothing: !0,
            focusRing: "auto",
            white: "#fff",
            black: "#000",
            colors: {
                dark: ["#C9C9C9", "#b8b8b8", "#828282", "#696969", "#424242", "#3b3b3b", "#2e2e2e", "#242424", "#1f1f1f", "#141414"],
                gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
                red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
                pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
                grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
                violet: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"],
                indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
                blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
                cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
                teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
                green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
                lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
                yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"],
                orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
            },
            primaryShade: {light: 6, dark: 8},
            primaryColor: "blue",
            variantColorResolver: ({color: e, theme: t, variant: n, gradient: i, autoContrast: c}) => {
                let u = (0, o.E)({color: e, theme: t}), h = "boolean" == typeof c ? c : t.autoContrast;
                if ("filled" === n) {
                    let t = h && u.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
                    return u.isThemeColor ? void 0 === u.shade ? {
                        background: `var(--mantine-color-${e}-filled)`,
                        hover: `var(--mantine-color-${e}-filled-hover)`,
                        color: t,
                        border: `${(0, r.h)(1)} solid transparent`
                    } : {
                        background: `var(--mantine-color-${u.color}-${u.shade})`,
                        hover: `var(--mantine-color-${u.color}-${9 === u.shade ? 8 : u.shade + 1})`,
                        color: t,
                        border: `${(0, r.h)(1)} solid transparent`
                    } : {background: e, hover: s(e, .1), color: t, border: `${(0, r.h)(1)} solid transparent`}
                }
                if ("light" === n) {
                    if (u.isThemeColor) {
                        if (void 0 === u.shade) return {
                            background: `var(--mantine-color-${e}-light)`,
                            hover: `var(--mantine-color-${e}-light-hover)`,
                            color: `var(--mantine-color-${e}-light-color)`,
                            border: `${(0, r.h)(1)} solid transparent`
                        };
                        let n = t.colors[u.color][u.shade];
                        return {
                            background: (0, l.m)(n, .1),
                            hover: (0, l.m)(n, .12),
                            color: `var(--mantine-color-${u.color}-${Math.min(u.shade, 6)})`,
                            border: `${(0, r.h)(1)} solid transparent`
                        }
                    }
                    return {
                        background: (0, l.m)(e, .1),
                        hover: (0, l.m)(e, .12),
                        color: e,
                        border: `${(0, r.h)(1)} solid transparent`
                    }
                }
                if ("outline" === n) return u.isThemeColor ? void 0 === u.shade ? {
                    background: "transparent",
                    hover: `var(--mantine-color-${e}-outline-hover)`,
                    color: `var(--mantine-color-${e}-outline)`,
                    border: `${(0, r.h)(1)} solid var(--mantine-color-${e}-outline)`
                } : {
                    background: "transparent",
                    hover: (0, l.m)(t.colors[u.color][u.shade], .05),
                    color: `var(--mantine-color-${u.color}-${u.shade})`,
                    border: `${(0, r.h)(1)} solid var(--mantine-color-${u.color}-${u.shade})`
                } : {background: "transparent", hover: (0, l.m)(e, .05), color: e, border: `${(0, r.h)(1)} solid ${e}`};
                if ("subtle" === n) {
                    if (u.isThemeColor) {
                        if (void 0 === u.shade) return {
                            background: "transparent",
                            hover: `var(--mantine-color-${e}-light-hover)`,
                            color: `var(--mantine-color-${e}-light-color)`,
                            border: `${(0, r.h)(1)} solid transparent`
                        };
                        let n = t.colors[u.color][u.shade];
                        return {
                            background: "transparent",
                            hover: (0, l.m)(n, .12),
                            color: `var(--mantine-color-${u.color}-${Math.min(u.shade, 6)})`,
                            border: `${(0, r.h)(1)} solid transparent`
                        }
                    }
                    return {
                        background: "transparent",
                        hover: (0, l.m)(e, .12),
                        color: e,
                        border: `${(0, r.h)(1)} solid transparent`
                    }
                }
                return "transparent" === n ? u.isThemeColor ? void 0 === u.shade ? {
                    background: "transparent",
                    hover: "transparent",
                    color: `var(--mantine-color-${e}-light-color)`,
                    border: `${(0, r.h)(1)} solid transparent`
                } : {
                    background: "transparent",
                    hover: "transparent",
                    color: `var(--mantine-color-${u.color}-${Math.min(u.shade, 6)})`,
                    border: `${(0, r.h)(1)} solid transparent`
                } : {
                    background: "transparent",
                    hover: "transparent",
                    color: e,
                    border: `${(0, r.h)(1)} solid transparent`
                } : "white" === n ? u.isThemeColor ? void 0 === u.shade ? {
                    background: "var(--mantine-color-white)",
                    hover: s(t.white, .01),
                    color: `var(--mantine-color-${e}-filled)`,
                    border: `${(0, r.h)(1)} solid transparent`
                } : {
                    background: "var(--mantine-color-white)",
                    hover: s(t.white, .01),
                    color: `var(--mantine-color-${u.color}-${u.shade})`,
                    border: `${(0, r.h)(1)} solid transparent`
                } : {
                    background: "var(--mantine-color-white)",
                    hover: s(t.white, .01),
                    color: e,
                    border: `${(0, r.h)(1)} solid transparent`
                } : "gradient" === n ? {
                    background: (0, a.u)(i, t),
                    hover: (0, a.u)(i, t),
                    color: "var(--mantine-color-white)",
                    border: "none"
                } : "default" === n ? {
                    background: "var(--mantine-color-default)",
                    hover: "var(--mantine-color-default-hover)",
                    color: "var(--mantine-color-default-color)",
                    border: `${(0, r.h)(1)} solid var(--mantine-color-default-border)`
                } : {}
            },
            autoContrast: !1,
            luminanceThreshold: .3,
            fontFamily: c,
            fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
            respectReducedMotion: !1,
            cursorType: "default",
            defaultGradient: {from: "blue", to: "cyan", deg: 45},
            defaultRadius: "sm",
            activeClassName: "mantine-active",
            focusClassName: "",
            headings: {
                fontFamily: c,
                fontWeight: "700",
                textWrap: "wrap",
                sizes: {
                    h1: {fontSize: (0, r.h)(34), lineHeight: "1.3"},
                    h2: {fontSize: (0, r.h)(26), lineHeight: "1.35"},
                    h3: {fontSize: (0, r.h)(22), lineHeight: "1.4"},
                    h4: {fontSize: (0, r.h)(18), lineHeight: "1.45"},
                    h5: {fontSize: (0, r.h)(16), lineHeight: "1.5"},
                    h6: {fontSize: (0, r.h)(14), lineHeight: "1.5"}
                }
            },
            fontSizes: {xs: (0, r.h)(12), sm: (0, r.h)(14), md: (0, r.h)(16), lg: (0, r.h)(18), xl: (0, r.h)(20)},
            lineHeights: {xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65"},
            radius: {xs: (0, r.h)(2), sm: (0, r.h)(4), md: (0, r.h)(8), lg: (0, r.h)(16), xl: (0, r.h)(32)},
            spacing: {xs: (0, r.h)(10), sm: (0, r.h)(12), md: (0, r.h)(16), lg: (0, r.h)(20), xl: (0, r.h)(32)},
            breakpoints: {xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em"},
            shadows: {
                xs: `0 ${(0, r.h)(1)} ${(0, r.h)(3)} rgba(0, 0, 0, 0.05), 0 ${(0, r.h)(1)} ${(0, r.h)(2)} rgba(0, 0, 0, 0.1)`,
                sm: `0 ${(0, r.h)(1)} ${(0, r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, r.h)(10)} ${(0, r.h)(15)} ${(0, r.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0, r.h)(7)} ${(0, r.h)(7)} ${(0, r.h)(-5)}`,
                md: `0 ${(0, r.h)(1)} ${(0, r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, r.h)(20)} ${(0, r.h)(25)} ${(0, r.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0, r.h)(10)} ${(0, r.h)(10)} ${(0, r.h)(-5)}`,
                lg: `0 ${(0, r.h)(1)} ${(0, r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, r.h)(28)} ${(0, r.h)(23)} ${(0, r.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0, r.h)(12)} ${(0, r.h)(12)} ${(0, r.h)(-7)}`,
                xl: `0 ${(0, r.h)(1)} ${(0, r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0, r.h)(36)} ${(0, r.h)(28)} ${(0, r.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0, r.h)(17)} ${(0, r.h)(17)} ${(0, r.h)(-7)}`
            },
            other: {},
            components: {}
        }
}

,
99586
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        w: function () {
            return s
        }
    });
    var r = n(12210);
    n(50959), n(11527);
    var i = n(34233);

    function s(e, t, n) {
        let s = (0, i.rZ)(), a = s.components[e]?.defaultProps, o = "function" == typeof a ? a(s) : a;
        return {...t, ...o, ...(0, r.L)(n)}
    }
}

,
83741
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        d: function () {
            return s
        }, y: function () {
            return i
        }
    });
    var r = n(50959);

    function i(e) {
        return e
    }

    function s(e) {
        let t = (0, r.forwardRef)(e);
        return t.extend = i, t
    }
}

,
54973
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        b: function () {
            return s
        }
    });
    var r = n(50959), i = n(83741);

    function s(e) {
        let t = (0, r.forwardRef)(e);
        return t.extend = i.y, t
    }
}

,
33871
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return e
    }

    n.d(t, {
        Z: function () {
            return r
        }
    })
}

,
86121
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        m: function () {
            return s
        }
    });
    var r = n(86259);
    let i = {};

    function s({theme: e, classNames: t, props: n, stylesCtx: s}) {
        return function (e) {
            let t = {};
            return e.forEach(e => {
                Object.entries(e).forEach(([e, n]) => {
                    t[e] ? t[e] = (0, r.Z)(t[e], n) : t[e] = n
                })
            }), t
        }((Array.isArray(t) ? t : [t]).map(t => "function" == typeof t ? t(e, n, s) : t || i))
    }
}

,
87838
:

function (e, t, n) {
    "use strict";

    function r({theme: e, styles: t, props: n, stylesCtx: r}) {
        return (Array.isArray(t) ? t : [t]).reduce((t, i) => "function" == typeof i ? {...t, ...i(e, n, r)} : {...t, ...i}, {})
    }

    n.d(t, {
        i: function () {
            return r
        }
    })
}

,
39771
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        y: function () {
            return d
        }
    }), n(50959), n(11527);
    var r = n(23168), i = n(34233), s = n(86259);
    let a = {always: "mantine-focus-always", auto: "mantine-focus-auto", never: "mantine-focus-never"};
    var o = n(86121);

    function l({selector: e, stylesCtx: t, theme: n, classNames: r, props: i}) {
        return (0, o.m)({theme: n, classNames: r, props: i, stylesCtx: t})[e]
    }

    var c = n(87838);

    function u({style: e, theme: t}) {
        return Array.isArray(e) ? [...e].reduce((e, n) => ({
            ...e, ...u({
                style: n,
                theme: t
            })
        }), {}) : "function" == typeof e ? e(t) : null == e ? {} : e
    }

    var h = n(12210);

    function d({
                   name: e,
                   classes: t,
                   props: n,
                   stylesCtx: d,
                   className: p,
                   style: f,
                   rootSelector: m = "root",
                   unstyled: g,
                   classNames: y,
                   styles: v,
                   vars: _,
                   varsResolver: b
               }) {
        let w = (0, i.rZ)(), S = (0, r.uK)(), E = (0, r.Nu)(), k = (0, r.DE)(),
            T = (Array.isArray(e) ? e : [e]).filter(e => e), {
                withStylesTransform: x,
                getTransformedStyles: C
            } = function ({props: e, stylesCtx: t, themeName: n}) {
                let s = (0, i.rZ)(), a = (0, r.sZ)();
                return {
                    getTransformedStyles: r => a ? [...r.map(n => a(n, {
                        props: e,
                        theme: s,
                        ctx: t
                    })), ...n.map(n => a(s.components[n]?.styles, {props: e, theme: s, ctx: t}))].filter(Boolean) : [],
                    withStylesTransform: !!a
                }
            }({props: n, stylesCtx: d, themeName: T});
        return (e, r) => ({
            className: function ({
                                     theme: e,
                                     options: t,
                                     themeName: n,
                                     selector: r,
                                     classNamesPrefix: i,
                                     classNames: c,
                                     classes: u,
                                     unstyled: h,
                                     className: d,
                                     rootSelector: p,
                                     props: f,
                                     stylesCtx: m,
                                     withStaticClasses: g,
                                     headless: y,
                                     transformedStyles: v
                                 }) {
                return (0, s.Z)(function ({theme: e, options: t, unstyled: n}) {
                    return (0, s.Z)(t?.focusable && !n && (e.focusClassName || a[e.focusRing]), t?.active && !n && e.activeClassName)
                }({theme: e, options: t, unstyled: h || y}), function ({
                                                                           themeName: e,
                                                                           theme: t,
                                                                           selector: n,
                                                                           props: r,
                                                                           stylesCtx: i
                                                                       }) {
                    return e.map(e => o.m({
                        theme: t,
                        classNames: t.components[e]?.classNames,
                        props: r,
                        stylesCtx: i
                    })?.[n])
                }({theme: e, themeName: n, selector: r, props: f, stylesCtx: m}), function ({
                                                                                                options: e,
                                                                                                classes: t,
                                                                                                selector: n,
                                                                                                unstyled: r
                                                                                            }) {
                    return e?.variant && !r ? t[`${n}--${e.variant}`] : void 0
                }({options: t, classes: u, selector: r, unstyled: h}), l({
                    selector: r,
                    stylesCtx: m,
                    theme: e,
                    classNames: c,
                    props: f
                }), l({selector: r, stylesCtx: m, theme: e, classNames: v, props: f}), function ({
                                                                                                     selector: e,
                                                                                                     stylesCtx: t,
                                                                                                     options: n,
                                                                                                     props: r,
                                                                                                     theme: i
                                                                                                 }) {
                    return (0, o.m)({theme: i, classNames: n?.classNames, props: n?.props || r, stylesCtx: t})[e]
                }({selector: r, stylesCtx: m, options: t, props: f, theme: e}), function ({
                                                                                              rootSelector: e,
                                                                                              selector: t,
                                                                                              className: n
                                                                                          }) {
                    return e === t ? n : void 0
                }({rootSelector: p, selector: r, className: d}), function ({selector: e, classes: t, unstyled: n}) {
                    return n ? void 0 : t[e]
                }({selector: r, classes: u, unstyled: h || y}), g && !y && function ({
                                                                                         themeName: e,
                                                                                         classNamesPrefix: t,
                                                                                         selector: n,
                                                                                         withStaticClass: r
                                                                                     }) {
                    return !1 === r ? [] : e.map(e => `${t}-${e}-${n}`)
                }({themeName: n, classNamesPrefix: i, selector: r, withStaticClass: t?.withStaticClass}), t?.className)
            }({
                theme: w,
                options: r,
                themeName: T,
                selector: e,
                classNamesPrefix: S,
                classNames: y,
                classes: t,
                unstyled: g,
                className: p,
                rootSelector: m,
                props: n,
                stylesCtx: d,
                withStaticClasses: E,
                headless: k,
                transformedStyles: C([r?.styles, v])
            }),
            style: function ({
                                 theme: e,
                                 themeName: t,
                                 selector: n,
                                 options: r,
                                 props: i,
                                 stylesCtx: s,
                                 rootSelector: a,
                                 styles: o,
                                 style: l,
                                 vars: d,
                                 varsResolver: p,
                                 headless: f,
                                 withStylesTransform: m
                             }) {
                return {
                    ...!m && function ({theme: e, themeName: t, props: n, stylesCtx: r, selector: i}) {
                        return t.map(t => (0, c.i)({
                            theme: e,
                            styles: e.components[t]?.styles,
                            props: n,
                            stylesCtx: r
                        })[i]).reduce((e, t) => ({...e, ...t}), {})
                    }({theme: e, themeName: t, props: i, stylesCtx: s, selector: n}), ...!m && (0, c.i)({
                        theme: e,
                        styles: o,
                        props: i,
                        stylesCtx: s
                    })[n], ...!m && (0, c.i)({
                        theme: e,
                        styles: r?.styles,
                        props: r?.props || i,
                        stylesCtx: s
                    })[n], ...function ({
                                            vars: e,
                                            varsResolver: t,
                                            theme: n,
                                            props: r,
                                            stylesCtx: i,
                                            selector: s,
                                            themeName: a,
                                            headless: o
                                        }) {
                        return [o ? {} : t?.(n, r, i), ...a.map(e => n.components?.[e]?.vars?.(n, r, i)), e?.(n, r, i)].reduce((e, t) => (t && Object.keys(t).forEach(n => {
                            e[n] = {...e[n], ...(0, h.L)(t[n])}
                        }), e), {})?.[s]
                    }({
                        theme: e,
                        props: i,
                        stylesCtx: s,
                        vars: d,
                        varsResolver: p,
                        selector: n,
                        themeName: t,
                        headless: f
                    }), ...a === n ? u({style: l, theme: e}) : null, ...u({style: r?.style, theme: e})
                }
            }({
                theme: w,
                themeName: T,
                selector: e,
                options: r,
                props: n,
                stylesCtx: d,
                rootSelector: m,
                styles: v,
                style: f,
                vars: _,
                varsResolver: b,
                headless: k,
                withStylesTransform: x
            })
        })
    }
}

,
31686
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return e && "object" == typeof e && !Array.isArray(e)
    }

    n.d(t, {
        R: function () {
            return function e(t, n) {
                let i = {...t};
                return r(t) && r(n) && Object.keys(n).forEach(s => {
                    r(n[s]) && s in t ? i[s] = e(i[s], n[s]) : i[s] = n[s]
                }), i
            }
        }
    })
}

,
12210
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return Object.keys(e).reduce((t, n) => (void 0 !== e[n] && (t[n] = e[n]), t), {})
    }

    n.d(t, {
        L: function () {
            return r
        }
    })
}

,
3635
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        w: function () {
            return i
        }
    });
    let r = {app: 100, modal: 200, popover: 300, overlay: 400, max: 9999};

    function i(e) {
        return r[e]
    }
}

,
11822
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        Dp: function () {
            return c
        }, H5: function () {
            return o
        }, Xj: function () {
            return u
        }, ap: function () {
            return s
        }, bG: function () {
            return a
        }, yv: function () {
            return l
        }
    });
    var r = n(85354), i = n(1138);

    function s(e, t = "size", n = !0) {
        if (void 0 !== e) return (0, r.s)(e) ? n ? (0, i.h)(e) : e : `var(--${t}-${e})`
    }

    function a(e) {
        return s(e, "mantine-spacing")
    }

    function o(e) {
        return void 0 === e ? "var(--mantine-radius-default)" : s(e, "mantine-radius")
    }

    function l(e) {
        return s(e, "mantine-font-size")
    }

    function c(e) {
        return s(e, "mantine-line-height", !1)
    }

    function u(e) {
        if (e) return s(e, "mantine-shadow", !1)
    }
}

,
85354
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return "number" == typeof e || "string" == typeof e && (!!(e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && "" !== e.trim()) || /[0-9]/.test(e.trim().replace("-", "")[0]))
    }

    n.d(t, {
        s: function () {
            return r
        }
    })
}

,
49340
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return Object.keys(e)
    }

    n.d(t, {
        X: function () {
            return r
        }
    })
}

,
12274
:

function (e, t, n) {
    "use strict";

    function r(e) {
        let t = "string" == typeof e && e.includes("var(--mantine-scale)") ? e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim() : e;
        return "number" == typeof t ? t : "string" == typeof t ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? 16 * Number(t.replace("rem", "")) : t.includes("em") ? 16 * Number(t.replace("em", "")) : Number(t) : NaN
    }

    n.d(t, {
        px: function () {
            return r
        }
    })
}

,
1138
:

function (e, t, n) {
    "use strict";

    function r(e) {
        return "0rem" === e ? "0rem" : `calc(${e} * var(--mantine-scale))`
    }

    function i(e, {shouldScale: t = !1} = {}) {
        return function n(i) {
            if (0 === i || "0" === i) return `0${e}`;
            if ("number" == typeof i) {
                let n = `${i / 16}${e}`;
                return t ? r(n) : n
            }
            if ("string" == typeof i) {
                if ("" === i || i.startsWith("calc(") || i.startsWith("clamp(") || i.includes("rgba(")) return i;
                if (i.includes(",")) return i.split(",").map(e => n(e)).join(",");
                if (i.includes(" ")) return i.split(" ").map(e => n(e)).join(" ");
                if (i.includes(e)) return t ? r(i) : i;
                let s = i.replace("px", "");
                if (!Number.isNaN(Number(s))) {
                    let n = `${Number(s) / 16}${e}`;
                    return t ? r(n) : n
                }
            }
            return i
        }
    }

    n.d(t, {
        em: function () {
            return a
        }, h: function () {
            return s
        }
    });
    let s = i("rem", {shouldScale: !0}), a = i("em")
}

,
40423
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        l: function () {
            return i
        }
    });
    var r = n(50959);

    function i(e, t) {
        let n = (0, r.useRef)(!1);
        (0, r.useEffect)(() => () => {
            n.current = !1
        }, []), (0, r.useEffect)(() => {
            if (n.current) return e();
            n.current = !0
        }, t)
    }
}

,
60491
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        Y: function () {
            return i
        }
    });
    var r = n(50959);
    let i = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect
}

,
95863
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        a: function () {
            return i
        }
    });
    var r = n(50959);

    function i(e, t, {getInitialValueInEffect: n} = {getInitialValueInEffect: !0}) {
        let [i, s] = (0, r.useState)(n ? t : !!("undefined" != typeof window && "matchMedia" in window) && window.matchMedia(e).matches),
            a = (0, r.useRef)();
        return (0, r.useEffect)(() => {
            if ("matchMedia" in window) return a.current = window.matchMedia(e), s(a.current.matches), function (e, t) {
                try {
                    return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                } catch (n) {
                    return e.addListener(t), () => e.removeListener(t)
                }
            }(a.current, e => s(e.matches))
        }, [e]), i
    }
}

,
75531
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        J: function () {
            return i
        }
    });
    var r = n(95863);

    function i(e, t) {
        return (0, r.a)("(prefers-reduced-motion: reduce)", e, t)
    }
}

,
86259
:

function (e, t, n) {
    "use strict";
    t.Z = function () {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = function e(t) {
            var n, r, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t; else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                    var s = t.length;
                    for (n = 0; n < s; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r)
                } else for (r in t) t[r] && (i && (i += " "), i += r)
            }
            return i
        }(e)) && (r && (r += " "), r += t);
        return r
    }
}

,
94311
:

function (e, t, n) {
    "use strict";
    let r, i;
    n.r(t), n.d(t, {
        CheckmarkIcon: function () {
            return Y
        }, ErrorIcon: function () {
            return W
        }, LoaderIcon: function () {
            return V
        }, ToastBar: function () {
            return eo
        }, ToastIcon: function () {
            return et
        }, Toaster: function () {
            return eh
        }, default: function () {
            return ed
        }, resolveValue: function () {
            return k
        }, toast: function () {
            return L
        }, useToaster: function () {
            return B
        }, useToasterStore: function () {
            return M
        }
    });
    var s, a = n(50959);
    let o = {data: ""},
        l = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
            innerHTML: " ",
            id: "_goober"
        })).firstChild : e || o, c = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        u = /\/\*[^]*?\*\/|  +/g, h = /\n+/g, d = (e, t) => {
            let n = "", r = "", i = "";
            for (let s in e) {
                let a = e[s];
                "@" == s[0] ? "i" == s[1] ? n = s + " " + a + ";" : r += "f" == s[1] ? d(a, s) : s + "{" + d(a, "k" == s[1] ? "" : t) + "}" : "object" == typeof a ? r += d(a, t ? t.replace(/([^,])+/g, e => s.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : s) : null != a && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), i += d.p ? d.p(s, a) : s + ":" + a + ";")
            }
            return n + (t && i ? t + "{" + i + "}" : i) + r
        }, p = {}, f = e => {
            if ("object" == typeof e) {
                let t = "";
                for (let n in e) t += n + f(e[n]);
                return t
            }
            return e
        }, m = (e, t, n, r, i) => {
            var s;
            let a = f(e), o = p[a] || (p[a] = (e => {
                let t = 0, n = 11;
                for (; t < e.length;) n = 101 * n + e.charCodeAt(t++) >>> 0;
                return "go" + n
            })(a));
            if (!p[o]) {
                let t = a !== e ? e : (e => {
                    let t, n, r = [{}];
                    for (; t = c.exec(e.replace(u, ""));) t[4] ? r.shift() : t[3] ? (n = t[3].replace(h, " ").trim(), r.unshift(r[0][n] = r[0][n] || {})) : r[0][t[1]] = t[2].replace(h, " ").trim();
                    return r[0]
                })(e);
                p[o] = d(i ? {["@keyframes " + o]: t} : t, n ? "" : "." + o)
            }
            let l = n && p.g ? p.g : null;
            return n && (p.g = p[o]), s = p[o], l ? t.data = t.data.replace(l, s) : -1 === t.data.indexOf(s) && (t.data = r ? s + t.data : t.data + s), o
        }, g = (e, t, n) => e.reduce((e, r, i) => {
            let s = t[i];
            if (s && s.call) {
                let e = s(n), t = e && e.props && e.props.className || /^go/.test(e) && e;
                s = t ? "." + t : e && "object" == typeof e ? e.props ? "" : d(e, "") : !1 === e ? "" : e
            }
            return e + r + (null == s ? "" : s)
        }, "");

    function y(e) {
        let t = this || {}, n = e.call ? e(t.p) : e;
        return m(n.unshift ? n.raw ? g(n, [].slice.call(arguments, 1), t.p) : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {}) : n, l(t.target), t.g, t.o, t.k)
    }

    y.bind({g: 1});
    let v, _, b, w = y.bind({k: 1});

    function S(e, t) {
        let n = this || {};
        return function () {
            let r = arguments;

            function i(s, a) {
                let o = Object.assign({}, s), l = o.className || i.className;
                n.p = Object.assign({theme: _ && _()}, o), n.o = / *go\d+/.test(l), o.className = y.apply(n, r) + (l ? " " + l : ""), t && (o.ref = a);
                let c = e;
                return e[0] && (c = o.as || e, delete o.as), b && c[0] && b(o), v(c, o)
            }

            return t ? t(i) : i
        }
    }

    var E = e => "function" == typeof e, k = (e, t) => E(e) ? e(t) : e, T = (r = 0, () => (++r).toString()), x = () => {
        if (void 0 === i && "u" > typeof window) {
            let e = matchMedia("(prefers-reduced-motion: reduce)");
            i = !e || e.matches
        }
        return i
    }, C = new Map, I = e => {
        if (C.has(e)) return;
        let t = setTimeout(() => {
            C.delete(e), P({type: 4, toastId: e})
        }, 1e3);
        C.set(e, t)
    }, O = e => {
        let t = C.get(e);
        t && clearTimeout(t)
    }, R = (e, t) => {
        switch (t.type) {
            case 0:
                return {...e, toasts: [t.toast, ...e.toasts].slice(0, 20)};
            case 1:
                return t.toast.id && O(t.toast.id), {
                    ...e,
                    toasts: e.toasts.map(e => e.id === t.toast.id ? {...e, ...t.toast} : e)
                };
            case 2:
                let {toast: n} = t;
                return e.toasts.find(e => e.id === n.id) ? R(e, {type: 1, toast: n}) : R(e, {type: 0, toast: n});
            case 3:
                let {toastId: r} = t;
                return r ? I(r) : e.toasts.forEach(e => {
                    I(e.id)
                }), {...e, toasts: e.toasts.map(e => e.id === r || void 0 === r ? {...e, visible: !1} : e)};
            case 4:
                return void 0 === t.toastId ? {...e, toasts: []} : {
                    ...e,
                    toasts: e.toasts.filter(e => e.id !== t.toastId)
                };
            case 5:
                return {...e, pausedAt: t.time};
            case 6:
                let i = t.time - (e.pausedAt || 0);
                return {...e, pausedAt: void 0, toasts: e.toasts.map(e => ({...e, pauseDuration: e.pauseDuration + i}))}
        }
    }, A = [], $ = {toasts: [], pausedAt: void 0}, P = e => {
        $ = R($, e), A.forEach(e => {
            e($)
        })
    }, j = {blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3}, M = (e = {}) => {
        let [t, n] = (0, a.useState)($);
        (0, a.useEffect)(() => (A.push(n), () => {
            let e = A.indexOf(n);
            e > -1 && A.splice(e, 1)
        }), [t]);
        let r = t.toasts.map(t => {
            var n, r;
            return {
                ...e, ...e[t.type], ...t,
                duration: t.duration || (null == (n = e[t.type]) ? void 0 : n.duration) || (null == e ? void 0 : e.duration) || j[t.type],
                style: {...e.style, ...null == (r = e[t.type]) ? void 0 : r.style, ...t.style}
            }
        });
        return {...t, toasts: r}
    }, N = (e, t = "blank", n) => ({
        createdAt: Date.now(),
        visible: !0,
        type: t,
        ariaProps: {role: "status", "aria-live": "polite"},
        message: e,
        pauseDuration: 0, ...n,
        id: (null == n ? void 0 : n.id) || T()
    }), D = e => (t, n) => {
        let r = N(t, e, n);
        return P({type: 2, toast: r}), r.id
    }, L = (e, t) => D("blank")(e, t);
    L.error = D("error"), L.success = D("success"), L.loading = D("loading"), L.custom = D("custom"), L.dismiss = e => {
        P({type: 3, toastId: e})
    }, L.remove = e => P({type: 4, toastId: e}), L.promise = (e, t, n) => {
        let r = L.loading(t.loading, {...n, ...null == n ? void 0 : n.loading});
        return e.then(e => (L.success(k(t.success, e), {id: r, ...n, ...null == n ? void 0 : n.success}), e)).catch(e => {
            L.error(k(t.error, e), {id: r, ...n, ...null == n ? void 0 : n.error})
        }), e
    };
    var F = (e, t) => {
        P({type: 1, toast: {id: e, height: t}})
    }, U = () => {
        P({type: 5, time: Date.now()})
    }, B = e => {
        let {toasts: t, pausedAt: n} = M(e);
        (0, a.useEffect)(() => {
            if (n) return;
            let e = Date.now(), r = t.map(t => {
                if (t.duration === 1 / 0) return;
                let n = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                if (n < 0) {
                    t.visible && L.dismiss(t.id);
                    return
                }
                return setTimeout(() => L.dismiss(t.id), n)
            });
            return () => {
                r.forEach(e => e && clearTimeout(e))
            }
        }, [t, n]);
        let r = (0, a.useCallback)(() => {
            n && P({type: 6, time: Date.now()})
        }, [n]), i = (0, a.useCallback)((e, n) => {
            let {reverseOrder: r = !1, gutter: i = 8, defaultPosition: s} = n || {},
                a = t.filter(t => (t.position || s) === (e.position || s) && t.height),
                o = a.findIndex(t => t.id === e.id), l = a.filter((e, t) => t < o && e.visible).length;
            return a.filter(e => e.visible).slice(...r ? [l + 1] : [0, l]).reduce((e, t) => e + (t.height || 0) + i, 0)
        }, [t]);
        return {toasts: t, handlers: {updateHeight: F, startPause: U, endPause: r, calculateOffset: i}}
    }, z = w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, H = w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, q = w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, W = S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, G = w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${G} 1s linear infinite;
`, J = w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, K = w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Y = S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, X = S("div")`
  position: absolute;
`, Z = S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Q = w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, ee = S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, et = ({toast: e}) => {
        let {icon: t, type: n, iconTheme: r} = e;
        return void 0 !== t ? "string" == typeof t ? a.createElement(ee, null, t) : t : "blank" === n ? null : a.createElement(Z, null, a.createElement(V, {...r}), "loading" !== n && a.createElement(X, null, "error" === n ? a.createElement(W, {...r}) : a.createElement(Y, {...r})))
    }, en = e => `
0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, er = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}
`, ei = S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, es = S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, ea = (e, t) => {
        let n = e.includes("top") ? 1 : -1, [r, i] = x() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [en(n), er(n)];
        return {animation: t ? `${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}
    }, eo = a.memo(({toast: e, position: t, style: n, children: r}) => {
        let i = e.height ? ea(e.position || t || "top-center", e.visible) : {opacity: 0},
            s = a.createElement(et, {toast: e}), o = a.createElement(es, {...e.ariaProps}, k(e.message, e));
        return a.createElement(ei, {
            className: e.className,
            style: {...i, ...n, ...e.style}
        }, "function" == typeof r ? r({icon: s, message: o}) : a.createElement(a.Fragment, null, s, o))
    });
    s = a.createElement, d.p = void 0, v = s, _ = void 0, b = void 0;
    var el = ({id: e, className: t, style: n, onHeightUpdate: r, children: i}) => {
        let s = a.useCallback(t => {
            if (t) {
                let n = () => {
                    r(e, t.getBoundingClientRect().height)
                };
                n(), new MutationObserver(n).observe(t, {subtree: !0, childList: !0, characterData: !0})
            }
        }, [e, r]);
        return a.createElement("div", {ref: s, className: t, style: n}, i)
    }, ec = (e, t) => {
        let n = e.includes("top"),
            r = e.includes("center") ? {justifyContent: "center"} : e.includes("right") ? {justifyContent: "flex-end"} : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: x() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t * (n ? 1 : -1)}px)`, ...n ? {top: 0} : {bottom: 0}, ...r
        }
    }, eu = y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, eh = ({
                           reverseOrder: e,
                           position: t = "top-center",
                           toastOptions: n,
                           gutter: r,
                           children: i,
                           containerStyle: s,
                           containerClassName: o
                       }) => {
        let {toasts: l, handlers: c} = B(n);
        return a.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: 16,
                left: 16,
                right: 16,
                bottom: 16,
                pointerEvents: "none", ...s
            }, className: o, onMouseEnter: c.startPause, onMouseLeave: c.endPause
        }, l.map(n => {
            let s = n.position || t, o = ec(s, c.calculateOffset(n, {reverseOrder: e, gutter: r, defaultPosition: t}));
            return a.createElement(el, {
                id: n.id,
                key: n.id,
                onHeightUpdate: c.updateHeight,
                className: n.visible ? eu : "",
                style: o
            }, "custom" === n.type ? k(n.message, n) : i ? i(n) : a.createElement(eo, {toast: n, position: s}))
        }))
    }, ed = L
}

,
42109
:

function (e, t, n) {
    "use strict";
    n.d(t, {
        Ue: function () {
            return d
        }
    });
    let r = e => {
        let t;
        let n = new Set, r = (e, r) => {
            let i = "function" == typeof e ? e(t) : e;
            if (!Object.is(i, t)) {
                let e = t;
                t = (null != r ? r : "object" != typeof i || null === i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
            }
        }, i = () => t, s = {
            setState: r,
            getState: i,
            getInitialState: () => a,
            subscribe: e => (n.add(e), () => n.delete(e)),
            destroy: () => {
                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
            }
        }, a = t = e(r, i, s);
        return s
    }, i = e => e ? r(e) : r;
    var s = n(50959), a = n(7231);
    let {useDebugValue: o} = s, {useSyncExternalStoreWithSelector: l} = a, c = !1, u = e => e, h = e => {
        "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        let t = "function" == typeof e ? i(e) : e, n = (e, n) => (function (e, t = u, n) {
            n && !c && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), c = !0);
            let r = l(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
            return o(r), r
        })(t, e, n);
        return Object.assign(n, t), n
    }, d = e => e ? h(e) : h
}
},

function (e) {
    var t = function (t) {
        return e(e.s = t)
    };
    e.O(0, [9774, 179], function () {
        return t(79786), t(35859), t(73732)
    }), _N_E = e.O()
}

])
;