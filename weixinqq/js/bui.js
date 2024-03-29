/* @preserve 
 * @name: BUI v1.6.2  
 * @detail: BUI 是一个免费的UI交互框架, 用于快速定制开发WebApp,微信,混合移动应用(Bingotouch,Link,Dcloud,Apicloud,Appcan等).
 * @site: http://www.easybui.com/ 
 * Copyright © 2017-2020 BUI. All Rights Reserved. 
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, function() {
    "use strict";

    function e(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports }
    window.libs = window.Zepto || window.jQuery || {}, window.bui = {}, window.router = {},
        function(e) { e.debug = !0, e.hasRouter = !1, e.isWebapp, e.currentPlatform = "", e.log = !0, e.trace = !1, e.native = {}, e.config = {}, e.config.namespace = "bui", e.config.classNamePrefix = e.config.namespace + "-", e.config.version = "1.6.2", e.config.versionCode = 20200517, e.version = e.config.version, e.versionCode = e.config.versionCode, e.config.viewport = { zoom: !0, create: !0 }, e.config.init = { auto: !0 }, e.config.ready = {}, e.config.ajax = {}, e.config.get = {}, e.config.put = {}, e.config.delete = {}, e.config.post = {}, e.config.back = {}, e.config.load = {}, e.config.getPageParams = {}, e.config.refresh = {}, e.config.run = {}, e.config.checkVersion = {}, e.config.component = { auto: !0 }, e.config.dialog = {}, e.config.confirm = {}, e.config.alert = {}, e.config.hint = {}, e.config.prompt = {}, e.config.loading = {}, e.config.mask = {}, e.config.list = {}, e.config.listview = {}, e.config.scroll = {}, e.config.pullrefresh = {}, e.config.select = {}, e.config.sidebar = {}, e.config.slide = {}, e.config.actionsheet = {}, e.config.dropdown = {}, e.config.accordion = {}, e.config.stepbar = {}, e.config.rating = {}, e.config.number = {}, e.config.file = {}, e.config.fileselect = {}, e.config.upload = {}, e.config.download = {}, e.config.swipe = {}, e.config.router = {}, e.config.loader = {}, e.config.loader.define = {}, e.config.loader.load = {}, e.config.loader.component = {}, e.config.store = {}, e.config.floor = {} }(window.bui);
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        n = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
        }(),
        o = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
        r = function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) };
    ! function(e, n) {
        e.prefix = function(t) { return e.config.classNamePrefix + t }, e.showLog = function(n, i) { i = i || ""; var o = ""; "object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? o = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (o = n), e.log && console.error(i + " " + o), e.trace && console.trace && console.trace(), e.trigger("catcherror", n, i) }, e.guid = function(e) {
            function t() { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }
            return (e = void 0 === e ? "bui" : e || "") + t().substr(e.length) + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }, e.swipeDirection = function(e, t, n, i) {
            var o = t - e,
                a = i - n,
                r = Math.abs(o),
                l = Math.abs(a);
            return !(r < 9 && l < 9) && (r / l > 3 ? o > 0 ? "swiperight" : "swipeleft" : a > 0 ? "swipedown" : "swipeup")
        }, e.obj = function(i, o) {
            var a = null;
            o = o || null;
            var r = e.hasRouter ? router.currentPage() || "html" : "html";
            r = o || r;
            var l = n(r),
                c = /^(\d)/,
                s = /^[a-zA-z]/,
                u = /^\[.+\]$/,
                d = /^#\d/,
                f = /^\.\d/,
                h = "string" == typeof i,
                p = /^(html|head|body|header|main|footer|ul|li|section|dt|dd|div|span|img|article|i|strong|input|textarea|select|h1|h2|h3|h4|h5|h6|p|view|component|components)$/gi;
            if ("object" === (void 0 === i ? "undefined" : t(i))) return a = n(i);
            if (h && c.test(i)) return a = l.find("[id='" + i + "']");
            if (h && s.test(i)) { var g = p.test(i) || u.test(i) ? i : "#" + i; return a = l.find(g) }
            return d.test(i) ? a = l.find("[id='" + i.substr(1) + "']") : f.test(i) ? a = l.find("[class='" + i.substr(1) + "']") : i && (a = l.find(i)), a
        }, e.$ = e.obj, e.objId = function(t) { return e.obj(t, "html") }, e.selector = function(e) { return void 0 === e ? this : n(e, this) }, e.widget = function(e) { return e && e in this ? this[e] : this }, e.option = function(t, i) {
            if ("object" !== e.typeof(t) && void 0 === i) return "string" == typeof t ? this.config[t] : this.config;
            if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;
            if (t && "object" === e.typeof(t)) { var o = n.extend(this.config, t); return this.init(o) }
            if (this.config.hasOwnProperty(t)) {
                var a = {};
                a[t] = i;
                var o = n.extend(this.config, a);
                return this.init(o)
            }
            return this
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.emitter = function() {
            function n() { this.handle = Object.create(null) }
            return n.prototype.on = function(t, n, i) { return "function" == typeof n ? (i = n, n = this) : (i = i, n = n || this), n.handle = n.handle || {}, e.unit.stringToArray(t).forEach(function(e, t) { void 0 === n.handle[e] && (n.handle[e] = []), n.handle[e].push(i) }), n }, n.prototype.off = function(n, i, o) {
                    "function" == typeof i ? (o = i, i = this) : "function" == typeof o ? (o = o, i = i || this) : i = this;
                    var a = e.typeof(n);
                    if (void 0 === n) i.handle = Object.create(null);
                    else if ("string" === a && "function" == typeof o) {
                        var r = i.handle[n] || [];
                        e.array.remove(r, o)
                    } else if ("string" === a || "array" === a) {
                        "object" !== t(i.handle) && (i.handle = {});
                        var l = e.unit.stringToArray(n);
                        l.forEach(function(e, t) { i.handle[e] = [] })
                    }
                    return i
                }, n.prototype.one = function(e, t) {
                    function n() { t && t.apply(i, arguments), i.off(e, n) }
                    var i = this;
                    return this.on(e, n), this
                }, n.prototype.wait = function(t, n) {
                    var i = this,
                        o = e.unit.stringToArray(t),
                        a = [],
                        r = !0;
                    return o.forEach(function(e, t) { i.on(e, function(e) { a[t] = e, a.length === o.length && r && (n && n.apply(i, a), r = !1) }) }), this
                }, n.prototype.trigger = function(e) {
                    try {
                        if (this.handle[arguments[0]] instanceof Array) {
                            var t = this.handle[arguments[0]],
                                n = [].slice.apply(arguments);
                            n.shift();
                            for (var i = 0, o = t.length; i < o; i++) t[i] && t[i].apply(this.self || this, n)
                        }
                    } catch (e) {}
                    return this
                }, n.prototype.notify = function() {
                    try {
                        for (var e in this.handle)
                            if (this.handle[e] instanceof Array)
                                for (var t = this.handle[e], n = 0, i = t.length; n < i; n++) t[n] && t[n].apply(this.self || this)
                    } catch (e) {}
                    return this
                },
                function(e) { return new n }
        }();
        var i = e.emitter();
        e.on = i.on, e.off = i.off, e.trigger = i.trigger, e.one = i.one
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.store = function(i) {
            function a(t) {
                function i(e) {
                    var t = 0;
                    for (t = 0; t < e.length; t++) {
                        var a = e[t];
                        a.beforeMount && ue.beforeMounts.push(a.beforeMount), a.beforeCompile && ue.beforeCompiles.push(a.beforeCompile), a.beforeUpdate && ue.beforeUpdates.push(a.beforeUpdate), a.updated && ue.updateds.push(a.updated), a.compiled && ue.compileds.push(a.compiled), a.mounted && ue.mounteds.push(a.mounted), a.beforeDestroy && ue.beforeDestroys.push(a.beforeDestroy), a.destroyed && ue.destroyeds.push(a.destroyed), o = n.extend(!0, r, a), a.mixins && a.mixins.length && t < e.length - 1 && i(a.mixins)
                    }
                }
                var o = null,
                    a = t && t.extends ? [t.extends] : [];
                e.array.merge(ue.mixins, a, t.mixins || [], [t]);
                var r = n.extend(!0, {}, ue, e.config.store);
                return i(ue.mixins), o = n.extend(!0, ue, o)
            }

            function r() {
                Ee = e.hasRouter ? router.$ : n;
                var i = Ee(de.el);
                Ne = "object" === t(de.el) ? n(de.el) : i.length ? i : n(de.el), Be = Ne && Ne.parent(), De = Ne && Ne.children(), We.$el = Ne, We.$parent = Be, We.$children = De, We.$data = fe;
                for (var o in ve) ve[o] = ve[o].bind(We);
                return We.$methods = ve, ve && p(), me && g(), le.call(We, "beforemount"), de.beforeMounts.forEach(function(e, t) { e.call(We) }), K(fe), c(), be && s(), pe && h(), ye ? de.needCompile && router && router.on("complete", function(e) { de.needView ? O({ id: Ne, compiled: function() { de.needCompile && v(), Me && de.mounteds.forEach(function(t, n) { t.call(We, e) }) } }) : (de.needCompile && v(), Me && de.mounteds.forEach(function(t, n) { t.call(We, e) })), Ae = n.extend(!0, {}, fe), ke = !1, Te = !0, le.call(We, "mounted", e), Me = !1, Re = [] }) : (Me || re(), xe && l(), de.needView ? O({ id: Ne, compiled: function() { de.needCompile && v(), de.mounteds.forEach(function(e, t) { e.call(We) }) } }) : (de.needCompile && v(), de.mounteds.forEach(function(e, t) { e.call(We) })), Ae = n.extend(!0, {}, fe), ke = !1, Te = !0, Re = [], le.call(We, "mounted"), Me = !1), this
            }

            function l() { var e = Ne.html(); return e = b(e), Ne.html(e), this }

            function c() { for (var e in fe) ! function(e) { Object.defineProperty(We, e, { configurable: !0, get: function() { ze && console.log("1. module getting " + e, Re), !ke && Te ? (ke = !0, Te = !1, Re = []) : (ke = !1, Te = !1); var t = fe[e]; return Array.isArray(t) && Pe.target && (Ie[e] = [], Ie[e].push(Pe.target)), t }, set: function(t) { ze && console.log("2. module setting " + e, Re), Re = [], fe[e] = t, Ae[e] = t } }) }(e) }

            function s() { try { Object.keys(be).forEach(function(e, t) { f(e, be[e]) }) } catch (t) { e.showLog(t) } }

            function u(t) { return oe("nexttick", function(n) { try { t && t.call(We, n) } catch (n) { e.showLog(n) } }), this }

            function d(t, n) { var i = "nexttick-" + t; return Oe.hasOwnProperty(i) ? this : (Oe[i] = n, oe("nexttick", function(n) { if (n.keyname === t) try { Ce[t].pop(), 0 == Ce[t].length && Oe[i] && Oe[i].call(We, n) } catch (n) { e.showLog(n) } }), this) }

            function f(t, n) {
                return oe(t, function(t) {
                    try {
                        var i = [t.value, t.preValue || "", t];
                        if ("init" !== t.action) {
                            var o = n;
                            switch (e.typeof(o)) {
                                case "function":
                                    o.apply(We, i);
                                    break;
                                case "array":
                                    o.forEach(function(e, t) { e.apply(We, i) });
                                    break;
                                case "string":
                                    new Function(o + "(" + t.value + "," + (t.preValue || "") + ")")();
                                    break;
                                default:
                                    o.apply(We, i)
                            }
                        }
                    } catch (t) { e.showLog(t) }
                }), this
            }

            function h() {
                try {
                    Object.keys(pe).forEach(function(t) {
                        if (fe.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
                        var n = pe[t];
                        Object.defineProperty(We, t, {
                            get: function() {
                                var e, i = "function" == typeof n ? n.bind(this) : n.get.bind(this);
                                return Pe.target = function() {
                                    var e = i();
                                    le(t, { target: null, value: e, action: "set", keyname: t, param: [], origin: Ae }), Pe.target = null, Re = []
                                }, e = i(), Pe.target = null, Re = [], e
                            },
                            set: n && "object" === e.typeof(n) ? n.set || function() {} : function() {}
                        })
                    })
                } catch (t) { e.showLog(t) }
            }

            function p() {
                try {
                    Object.keys(ve).forEach(function(t) {
                        if (fe.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
                        Object.defineProperty(We, t, { get: function() { return ve[t].bind(this) }, set: function() {} })
                    })
                } catch (t) { e.showLog(t) }
            }

            function g() {
                try {
                    Object.keys(me).forEach(function(t) {
                        if (fe.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
                        Object.defineProperty(We, t, { get: function() { return me[t].bind(this) }, set: function() {} })
                    })
                } catch (t) { e.showLog(t) }
            }

            function v(i) {
                try {
                    var o = null,
                        a = null;
                    void 0 === i ? (o = Ne, a = de) : "string" == typeof i ? (o = Ee(i), a = de) : i && "object" === (void 0 === i ? "undefined" : t(i)) && (o = Ee(i) || n(i), a = n.extend(!0, {}, de, i));
                    var r = !0;
                    if (a.beforeCompiles.forEach(function(e, t) { if (!1 === (r = e.call(We, a))) return !1 }), !1 === r) return Re = [], !1;
                    if (j(o), w(o), a.needComponent) return loader.components({ id: o, compiled: function() { k(o), I(o), T(o), Fe = !0, m(), Re = [], a.compileds.forEach(function(e, t) { e.call(We, a) }) } }), this;
                    k(o), I(o), T(o), Fe = !0, m(), Re = [], a.compileds.forEach(function(e, t) { e.call(We, a) })
                } catch (t) { e.showLog(t) }
                return this
            }

            function m() {
                return Ne.find("[ref]").each(function() {
                    var t = this.getAttribute("ref"),
                        n = Le.hasOwnProperty(t),
                        i = null;
                    n && "htmldivelement" === e.typeof(Le[t]) ? (i = [Le[t]], i.push(this), Le[t] = i) : n && "array" === e.typeof(Le[t]) ? Le[t].push(this) : Le[t] = this
                }), this
            }

            function b(t) {
                try {
                    var i = this,
                        o = "string" == typeof t ? t : "",
                        a = new RegExp("{{[\\s]?" + he + ge + "(.*?)}}", "mg");
                    return o = o.replace(a, function(t, o) { var a = o.split(he + ge); "" === n.trim(a[0]) && a.shift(); var r = a.length > 0 && e.unit.getKeyValue(a.join("."), Ae) || ""; return "function" == typeof r ? r.call(i) : r })
                } catch (t) { e.showLog(t) }
            }

            function y(t, n) {
                var i = void 0;
                if (Ue && Ue.hasOwnProperty(t)) i = Ue[t];
                else {
                    if (void 0 === (i = e.unit.getKeyValue(t, n))) return void(ze && console.warn("请检查 " + t + " 在bui.store scope:" + he + " 中有没有声明定义"));
                    Ue[t] = i
                }
                return i
            }

            function w(t) {
                try {
                    var n = t,
                        i = [],
                        o = n[0] && n[0].outerHTML || n.html() || "",
                        a = o.match(Ve) || [],
                        r = e.array.uniq(a);
                    r.length && r.forEach(function(t, o) {
                        var a = n.find("[" + t + "*=" + he + "]");
                        a.length < 1 && (a = n.closest("[" + t + "*=" + he + "]")), a.length && a.each(function(n, o) {
                            var a = this,
                                r = "",
                                l = _.call(this, "" + t),
                                c = l[0] && l[0].keyname || "",
                                s = c.indexOf(".length"),
                                u = s > -1 ? c.substr(0, s) : c,
                                d = l[0] && l[0].param;
                            y(u, We);
                            var f = _.call(this, "b-linked");
                            if (f.length && f.forEach(function(t, n) { oe(t.keyname, function(t) { le(c, { target: null, value: e.unit.getKeyValue(c, We), action: "set", keyname: c, param: d, origin: Ae }) }) }), "b-show" === t) switch (l[0] && l[0].rule) {
                                case "!":
                                    r = "b-hide";
                                    break;
                                default:
                                    r = "b-show"
                            } else r = t;
                            if (ye) { var h = e.array.compare($e[r], u);!h && $e[r].push(u), !h && oe(u, qe[r].bind(a)) } else !Me && 0 === n && re(u), oe(u, qe[r].bind(a));
                            e.array.compare(i, u) || i.push(u), Re = [], ke = !1, Te = !0
                        })
                    }), x(i)
                } catch (t) { e.showLog(t) }
            }

            function x(e) { e.forEach(function(e, t) { le(e, { target: null, action: "init", value: Ue[e], param: null, keyname: e, origin: Ae }), Re = [] }) }

            function k(t) {
                function i(t) {
                    var n = t.target.value,
                        i = _.call(this, "b-model"),
                        o = i[0] && i[0].keyname || "";
                    if ("" === o) return e.showLog("b-model的值不能为空"), !1;
                    ee(o, n), Re = [], t.stopPropagation()
                }

                function o(t) {
                    try {
                        var n = this,
                            i = this.getAttribute("value") || this.checked,
                            o = this.getAttribute("type"),
                            a = _.call(this, "b-model"),
                            l = a[0].keyname,
                            c = null,
                            s = this.getAttribute("check-value"),
                            u = this.getAttribute("uncheck-value"),
                            d = this.getAttribute("check"),
                            f = this.getAttribute("uncheck");
                        (d || f || s || u) && (i = this.checked ? s || this.value || d : u || f || ""), c = y(l, We);
                        var h = /\{.+\}$/g,
                            p = h.test(i),
                            g = p ? null : r.find('[type="checkbox"][b-model="' + he + "." + l + '"][value="' + i + '"],\n                [type="radio"][b-model="' + he + "." + l + '"][value="' + i + '"]');
                        switch (o) {
                            case "checkbox":
                                this.checked && (c && "array" === e.typeof(c) ? !e.array.compare(c, i) && e.unit.getKeyValue(l, We).push(i) : ee(l, i), this.checked = !0), this.checked || (c && "array" === e.typeof(c) ? e.array.remove(e.unit.getKeyValue(l, We), i) : ee(l, i), this.checked = !1), g && g.each(function(e, t) { this.checked = n.checked });
                                break;
                            case "radio":
                            default:
                                ee(l, i)
                        }
                        Re = [], t.stopPropagation()
                    } catch (t) { e.showLog(t) }
                }

                function a(t) {
                    try {
                        var i = n(this).val(),
                            o = (this.selectedIndex, this.multiple),
                            a = _.call(this, "b-model"),
                            r = a[0].keyname,
                            l = null;
                        switch (l = y(r, We), o) {
                            case !0:
                                "array" !== e.typeof(l) && e.showLog(r + "的类型必须为数组"), i.splice(0, 0, 0, i.length + 1), l.splice.apply(l, i);
                                break;
                            default:
                                ee(r, i)
                        }
                        Re = [], t.stopPropagation()
                    } catch (t) { e.showLog(t) }
                }
                var r = t,
                    l = '[type="text"][b-model*=' + he + '],\n                                [type="search"][b-model*=' + he + '],\n                                [type="password"][b-model*=' + he + '],\n                                [type="url"][b-model*=' + he + '],\n                                [type="number"][b-model*=' + he + '],\n                                [type="email"][b-model*=' + he + '],\n                                [type="range"][b-model*=' + he + '],\n                                [type="tel"][b-model*=' + he + "],\n                                textarea[b-model*=" + he + "]";
                if ("input" === de.modelEvent) {
                    var c = !1;
                    r.off("input compositionstart compositionend", l).on(we, l, function(e) { c || i.call(e.target, e) }).on("compositionstart", l, function(e) { c = !0, e.stopPropagation() }).on("compositionend", l, function(e) { c = !1, i.call(e.target, e), e.stopPropagation() })
                } else r.off(we, l).on(we, l, i);
                var s = '[type="checkbox"][b-model*=' + he + '],\n                                [type="radio"][b-model*=' + he + "]";
                r.off("change", s).on("change", s, o);
                var u = "select[b-model*=" + he + "]";
                r.off("change", u).on("change", u, a)
            }

            function T(e) {
                e.off("change", "[b-checked*=" + he + "]").on("change", "[b-checked*=" + he + "]", function(e) {
                    var t = this.checked;
                    ee(_.call(this, "b-checked")[0].keyname, t), Re = [], e.stopPropagation()
                })
            }

            function I(e) {
                var t = e;
                t.off("click.bui", "[b-click*=" + he + "]").on("click.bui", "[b-click*=" + he + "]", function(e) {
                    var t = C.call(this, e, "b-click");
                    if (!1 === t) return !1;
                    void 0 === t && e.stopPropagation()
                }), t.off("touchstart", "[b-touchstart*=" + he + "]").on("touchstart", "[b-touchstart*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-touchstart")) return !1 }), t.off("touchmove", "[b-touchmove*=" + he + "]").on("touchmove", "[b-touchmove*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-touchmove")) return !1 }), t.off("touchend", "[b-touchend*=" + he + "]").on("touchend", "[b-touchend*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-touchend")) return !1 }), t.off("focus", "[b-focus*=" + he + "]").on("focus", "[b-focus*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-focus")) return !1 }), t.off("change", "[b-change*=" + he + "]").on("change", "[b-change*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-change")) return !1 }), t.off("blur", "[b-blur*=" + he + "]").on("blur", "[b-blur*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-blur")) return !1 }), t.off("submit", "[b-submit*=" + he + "]").on("submit", "[b-submit*=" + he + "]", function(e) { if (!1 === C.call(this, e, "b-submit")) return !1 })
            }

            function C(t, n) {
                var i = _.call(this, n),
                    o = i[0].keyname,
                    a = i[0].param,
                    r = null;
                a.push(t);
                try { r = y(o, We); var l = "function" == typeof r && r.apply(We, a); return Re = [], le(o, { target: this, value: r, action: "set", keyname: o, param: a, origin: Ae }), l } catch (t) { e.showLog(t) }
            }

            function O(e) { loader.views({ id: e.id, loaded: function(e) { v(e.el) }, compiled: e.compiled }) }

            function j(t) {
                var n = t,
                    i = n.find("[b-template*=" + he + "]"),
                    o = [];
                if (Ce = {}, i.length) try {
                    i.each(function(t, n) {
                        var i = this,
                            a = Ee(i),
                            r = _.call(this, "b-template"),
                            l = r[0].keyname,
                            c = r[0].param,
                            s = he + ge;
                        c[0] || console.error('b-template 没有找到数据源, 格式为: b-template="page.template(page.sources)"');
                        var u = "string" == typeof c[0] && c[0].replace(new RegExp(s), "") || "",
                            d = a.attr("b-command"),
                            f = d || "html",
                            h = a.attr("b-children") || a.children()[0] && a.children()[0].tagName;
                        y(u, We);
                        ye && re(u), Ce.hasOwnProperty(u) ? Ce[u].push(u) : Ce[u] = [u], oe(u, function(t) {
                            try {
                                var n, i = t.param;
                                switch (t.action) {
                                    case "push":
                                    case "unshift":
                                        n = i;
                                        break;
                                    case "splice":
                                        n = i.slice(2) || "";
                                        break;
                                    default:
                                        n = t.value
                                }
                                if (me && me.hasOwnProperty(l)) {
                                    c = c.map(function(e, t) { if ("string" == typeof e && 0 == e.indexOf(he + ge) && t > 0) { return y(e.replace(new RegExp(s), ""), Ae) } return e }), c[0] = n;
                                    var o = void 0 !== n && "undefined" !== n && me[l] && me[l].apply(We, c);
                                    void 0 === o && (o = "", e.showLog(l + "模板方法需要返回内容，例如：return html;")), ye && (a = Ee('[b-template*="' + (s + u) + '"]'));
                                    var r = t.preValue || [];
                                    0 == r.length && a.empty();
                                    var d = h ? a.children(h) : a.children(),
                                        p = d,
                                        g = i && i.length || 0,
                                        v = null;
                                    switch (Me = !0, t.action) {
                                        case "push":
                                            if (a.append(o), d = a.children(h), g && g == d.length) w(d);
                                            else if (g > 1)
                                                for (var m = p.length, b = m; b < d.length; b++) v = d.eq(m + b - 1), w(v);
                                            else v = d.last(), w(v);
                                            break;
                                        case "unshift":
                                            if (a.prepend(o), d = a.children(h), g && g == d.length) w(d);
                                            else if (g > 1)
                                                for (var b = 0; b < g; b++) v = d.eq(b), w(v);
                                            else v = d.first(), w(v);
                                            break;
                                        case "pop":
                                            d.last().remove(), d = a.children(h), v = d.last(), w(v);
                                            break;
                                        case "shift":
                                            d.first().remove(), d = a.children(h), v = d.first(), w(v);
                                            break;
                                        case "length":
                                            break;
                                        case "splice":
                                            var x = parseInt(i[0]),
                                                k = parseInt(i[1]);
                                            k >= r.length && (a.empty(), d = a.children(h));
                                            var T = d.length,
                                                I = T > 0;
                                            if (0 == k)
                                                if (I && T - 1 >= x) { d.eq(x).before(o), d = a.children(h); for (var b = 0; b < n.length; b++) v = d.eq(x + b), w(v) } else { a.append(o), d = a.children(h); for (var b = 0; b < n.length; b++) v = d.eq(T + b), w(v) }
                                            else if (k > 0) {
                                                if (void 0 !== i[2])
                                                    if (I && T - 1 >= x) { d.eq(x).before(o), d = a.children(h); for (var b = 0; b < n.length; b++) v = d.eq(x + b), w(v) } else { a.append(o), d = a.children(h); for (var b = 0; b < n.length; b++) v = d.eq(T + b), w(v) }
                                                for (var b = 0; b < k; b++) d.eq(x + n.length + b).remove()
                                            }
                                            break;
                                        case "reverse":
                                        case "sort":
                                            a.html(o), w(a);
                                            break;
                                        default:
                                            a[f](o), w(a)
                                    }
                                    le.call(We, "nexttick", t)
                                } else e.showLog("找不到对应的模板,请检查下 scope:" + he + " 的templates是否存在" + l, "bui.store")
                            } catch (t) { e.showLog(t) }
                        }), e.array.compare(o, u) || o.push(u), Re = []
                    }), x(o)
                } catch (t) { e.showLog(t) }
            }

            function L(t) {
                var n = S.call(this, t, "b-text"),
                    i = "",
                    o = e.typeof(t.value),
                    a = n.attr("b-text"),
                    r = _.call(this, "b-text"),
                    l = (r[0].keyname, r[0].param);
                switch (o) {
                    case "array":
                        i = P(t, a);
                        break;
                    case "function":
                        i = t.value.apply(We, l);
                        break;
                    default:
                        i = t.value
                }
                n.text(i), Re = []
            }

            function S(e, t) { var i = he + ge + e.keyname; return ye ? n("[" + t + '="' + i + '"]') : Ee(this) }

            function P(e, t) { return t.indexOf(".length") > -1 ? e.value.length || 0 : e.value instanceof Array ? e.value.join(",") : e.value }

            function E(t) {
                var n = S.call(this, t, "b-html"),
                    i = "",
                    o = e.typeof(t.value),
                    a = n.attr("b-html"),
                    r = _.call(this, "b-html"),
                    l = (r[0].keyname, r[0].param);
                switch (o) {
                    case "array":
                        i = P(t, a);
                        break;
                    case "function":
                        i = t.value.apply(We, l);
                        break;
                    default:
                        i = t.value
                }
                n.html(i), Re = []
            }

            function N(e) {
                var t = S.call(this, e, "b-value");
                ye ? t.each(function(t, n) { B.call(this, e) }) : B.call(t[0], e), Re = []
            }

            function B(t) {
                var n = this.getAttribute("type"),
                    i = this.value,
                    o = this,
                    a = this.getAttribute("b-value");
                switch (n) {
                    case "radio":
                        i == t.value ? this.checked = !0 : this.checked = !1;
                        break;
                    case "checkbox":
                        "array" === e.typeof(t.value) && t.value.forEach(function(e, t) { i == e && (o.checked = !0) });
                        break;
                    default:
                        this.value = P(t, a)
                }
            }

            function D(e) {
                var t = S.call(this, e, "b-model");
                ye ? t.each(function(t, n) { R.call(this, e) }) : R.call(t[0], e)
            }

            function R(e) {
                var t = this.getAttribute("type"),
                    i = this.value,
                    o = (e.param, this);
                if ("SELECT" === this.nodeName && this.multiple) return void(e.value.length > 1 ? e.value.forEach(function(e, t) { "string" == typeof e ? n(o).find("option[value=" + e + "]").attr("selected", !0) : n(o).find("option[value=" + e.value + "]").attr("selected", !0) }) : this.value = e.value[0]);
                switch (t) {
                    case "radio":
                        i == e.value ? this.checked = !0 : this.checked = !1;
                        break;
                    case "checkbox":
                        if (i && e.value instanceof Array) switch (e.action) {
                            case "push":
                            case "unshift":
                                e.param.filter(function(e, t) { if (i === e) return void(o.checked = !0) });
                                break;
                            case "pop":
                            case "shift":
                                e.param.filter(function(e, t) { i === e && (o.checked = !1) });
                                break;
                            case "splice":
                                var a = e.param,
                                    r = parseInt(a[1]),
                                    l = a.slice(2);
                                0 == r ? l.forEach(function(e, t) { i === e && (o.checked = !0) }) : r > 0 && (e.preValue.forEach(function(t, n) { n <= e.param[1] && (o.checked = !1) }), e.value.forEach(function(e, t) { i === e && (o.checked = !0) }));
                                break;
                            case "length":
                                break;
                            default:
                                e.value.filter(function(e, t) { i == e && (o.checked = !0) })
                        } else e.value === i || !this.checked === e.value ? this.checked = !0 : this.checked = !1;
                        break;
                    default:
                        if (event && event.target && "INPUT" === event.target.nodeName) break;
                        this.value = e.value
                }
                Re = []
            }

            function F(e) {
                var t = S.call(this, e, "b-show");
                e.value ? this.removeAttribute("style") : t.css("display", "none"), Re = []
            }

            function M(e) {
                var t = "!" + he + ge + e.keyname,
                    i = ye ? n('[b-show="' + t + '"]') : Ee(this);
                e.value ? i.css("display", "none") : i.css("display", "block")
            }

            function A(e) { this.checked = !!e.value, Re = [] }

            function H(e) {
                var n = S.call(this, e, "b-bind"),
                    i = this,
                    o = e.keyname,
                    a = e.value;
                if ("object" === (void 0 === a ? "undefined" : t(a))) { for (var r in a) ! function(t) { oe(o + "." + t, function(n) { z(S.call(i, e, "b-bind"), t, n.value) }), z(n, t, a[t]) }(r) } else {
                    var l = "string" == typeof o && o.split(".");
                    z(n, l[l.length - 1], a)
                }
            }

            function z(e, n, i) {
                switch (n) {
                    case "disabled":
                        i ? e.attr(n, i) : e.removeAttr(n);
                        break;
                    case "checked":
                        e.prop(n, i);
                        break;
                    default:
                        var o = "object" === (void 0 === i ? "undefined" : t(i)) ? JSON.stringify(i) : i;
                        e.attr(n, o)
                }
                Re = []
            }

            function V(e) {
                var t = S.call(this, e, "b-src");
                t.attr("src", e.value), Re = []
            }

            function q(e) {
                var t = S.call(this, e, "b-id");
                t.attr("id", e.value), Re = []
            }

            function $(e) {
                var t = S.call(this, e, "b-href");
                t.attr("href", e.value), Re = []
            }

            function U(e) {
                var n = S.call(this, e, "b-style"),
                    i = this;
                if ("object" === t(e.value)) { for (var o in e.value) ! function(t) { oe(e.keyname + "." + t, function(n) { S.call(i, e, "b-style").css(t, n.value) }), n.css(e.value) }(o) } else n.css(e.keyname, e.value);
                Re = []
            }

            function W(n) {
                var i = S.call(this, n, "b-class"),
                    o = this;
                this.classList;
                if ("object" === t(n.value))
                    if ("array" === e.typeof(n.value)) i.attr("class", ""), n.value.forEach(function(e, t) {!i.hasClass(e) && i.addClass(e) });
                    else {
                        for (var a in n.value) ! function(e) {
                            var t = n.value[e],
                                a = n.preValue && n.preValue[e] || "";
                            oe(n.keyname + "." + e, function(t) { Y(S.call(o, n, "b-class"), e, t.value) }), Y(i, e, t, a)
                        }(a)
                    }
                else {
                    var r = "string" == typeof n.keyname && n.keyname.split(".");
                    Y(i, r[r.length - 1], n.value, n.preValue)
                }
                Re = []
            }

            function Y(e, t, n, i) { "boolean" == typeof n ? (n && e.addClass(t), !n && e.removeClass(t)) : "string" == typeof n ? (ye && e.removeClass(n), i && e.removeClass(i), n && !e.hasClass(n) && e.addClass(n), void 0 !== i && "" === n && e.removeClass(i)) : (Boolean(n) && e.addClass(t), !Boolean(n) && e.removeClass(t)) }

            function _(t) {
                var n = [],
                    i = this,
                    o = this.getAttribute(t) || "",
                    a = o.indexOf("&") > -1 ? o.split("&") : o && [o] || [];
                try {
                    a.forEach(function(e, o) {
                        var a = {},
                            r = J.call(i, e, t);
                        a.scope = he, a.rule = r.rule, a.keyname = r.name, a.param = r.param, a.eventType = r.eventType, a.eventProperty = r.eventProperty, n.push(a)
                    })
                } catch (t) { e.showLog("参数处理出错") }
                return n
            }

            function J(t, i) {
                try {
                    var o = /([^\(|\)]+)/g,
                        a = t ? t.match(o) : [],
                        r = "",
                        l = "",
                        c = null,
                        s = [],
                        u = null,
                        d = this,
                        f = "",
                        h = n(d).attr("b-target"),
                        p = h ? n(d).parents(h)[0] || d : d,
                        g = "",
                        v = "";
                    if (c = a[0] && a[0].indexOf(he + ge) > -1 ? a[0].split(he + ge) : [he, a[0]], f = c[0].split(he), f = f[0] || f[1] || "", r = he, l = c[1] || "", l.indexOf("$index") > -1) {
                        var m = n(p).index();
                        l = l.replace("$index", m)
                    } else if (l.indexOf("$id") > -1) {
                        var b = p.id;
                        l = l.replace("$id", b)
                    } else if (l.indexOf("$parentIndex") > -1) {
                        var y = n(p).parent().index();
                        l = l.replace("$parentIndex", y)
                    }
                    if (void 0 !== a[1]) {
                        var w = a[1] || "";
                        try {
                            var x = /\{.+\}$/g,
                                k = /\[.+\]$/g,
                                T = /(\"(.*?)\".*?)|(\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})|(^((https|http|ftp|rtsp|mms)?:\/\/)[^\,]+)|([a-zA-Z0-9][-a-zA-Z0-9\._]{0,62})|(\{.+\})|(\[.+])|([$\w\.]+)|([\d\.]+)|([\u4e00-\u9fa5|\w|\d]+)/g,
                                I = w ? w.match(T) : [];
                            s = I.map(function(t, o) {
                                var a = t.replace(/^\"|\"$/g, ""),
                                    r = n(p).attr("b-target"),
                                    l = r ? n(p).parents(r)[0] || p : p;
                                switch (t) {
                                    case "$this":
                                        a = l;
                                        break;
                                    case "$index":
                                        a = n(l).index();
                                        break;
                                    case "$parentIndex":
                                        a = n(l).parent().index();
                                        break;
                                    case "$parent":
                                        a = l.parentNode;
                                        break;
                                    case "$children":
                                        a = n(l).children();
                                        break;
                                    case "$id":
                                        a = l.id;
                                        break;
                                    case "$text":
                                        a = l.textContent;
                                        break;
                                    case "$value":
                                        a = l.value;
                                        break;
                                    case "$html":
                                        a = l.innerHTML
                                }
                                if ("b-template" !== i) {
                                    var c = he + ge;
                                    e.unit.startWithStr(a, c) && (a = e.unit.getKeyValue(a.split(c)[1], We))
                                }
                                return x.test(t) || k.test(t) ? JSON.parse(t) : a
                            })
                        } catch (t) { e.showLog(t, "getArguments"), s = [] }
                    }
                    void 0 !== a[2] && (u = a[2].indexOf(".") > -1 ? a[2].split(".") : [a[2]], g = u[0], v = u[1] || "")
                } catch (n) { e.showLog("参数格式错误:" + t) }
                return { scope: r, rule: f, name: l, param: s, eventType: g, eventProperty: v }
            }

            function K(e, t) { return X(e, t) }

            function X(t, n) {
                function i(t, n) { var i = t[n]; if (i instanceof Array ? G(i, n) : Z(t, n), i && "object" === e.typeof(i)) return K(i) }
                if (n && "array" === e.typeof(n))
                    if (n.length > 1) {
                        var o = n.pop(),
                            a = e.unit.getKeyValue(n.join("."), t);
                        i(a, o)
                    } else i(t, n[0]);
                else Object.keys(t).forEach(function(e) { i(t, e) })
            }

            function Z(t, n) {
                var i = t[n],
                    o = "function" == typeof i ? i.call(We) : i,
                    a = [];
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: function(e) { return ze && console.log("3. data getting " + n + ":", o), Se.target = this, (ke || !ke && Te) && Re.push(n), Pe.target && a.push(Pe.target), o },
                    set: function(t) {
                        if (t === o) return Re = [], je = !1, ke = !1, Te = !0, !0;
                        Se.target === this && (Re = []), Se.target = this, (!Te || !ke && Te) && Re.push(n);
                        var i = Re.join(".");
                        !je && le.call(We, "beforeupdate", { action: "set", value: t, preValue: o, keyname: i, origin: Ae }), !je && de.beforeUpdates.forEach(function(e, n) { e.call(We, { action: "set", value: t, preValue: o, keyname: i, origin: Ae }) }), ze && console.log("4. data setting " + i, t);
                        var r = e.unit.getKeyValue(i, Ae);
                        return o = t, a.forEach(function(e) { return e() }), !je && le(i, { action: "set", value: o, preValue: r, keyname: i, origin: Ae }), e.unit.setKeyValue(i, o, Ae), o instanceof Array ? K(fe, Re) : "object" === e.typeof(o) && (de.deep && K(t), o && Object.keys(o).forEach(function(e, t) {
                            var i = n + "." + e;
                            Re = [], le(i, { target: null, value: o[e], preValue: r && r[e], action: "set", keyname: i, origin: Ae })
                        })), !je && le.call(We, "updated", { action: "set", value: o, preValue: r, keyname: i, origin: Ae }), !je && de.updateds.forEach(function(e, t) { e.call(We, { action: "set", value: o, preValue: r, keyname: i, origin: Ae }) }), Re = [], je = !1, ke = !1, Te = !0, !0
                    }
                })
            }

            function G(t, n) {
                var i = [],
                    o = Array.prototype,
                    a = Object.create(o);
                return ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
                    var r = o[t];
                    Object.defineProperty(a, t, {
                        enumerable: !0,
                        configurable: !0,
                        value: function(o) {
                            var a = [].concat(Array.prototype.slice.call(arguments));
                            le.call(We, "beforeupdate", { target: null, action: t, param: a, value: this, prevValue: [], keyname: n, origin: Ae }), i.push(n), fe.hasOwnProperty(n) || i.unshift(Re.join("."));
                            var l = i.join("."),
                                c = this.slice(0),
                                s = r.apply(this, a);
                            switch (ze && console.log("5. " + l + " action " + t + " "), t) {
                                case "pop":
                                case "shift":
                                    a = [s]
                            }
                            e.unit.setKeyValue(l, this, Ae);
                            var u = Ne.find('[b-template*="' + he + "." + l + '"]');
                            return le(l, { target: u, action: t, param: a, value: this, preValue: c, keyname: n, origin: Ae }), Ie[i[0]] && "array" === e.typeof(Ie[i[0]]) && Ie[i[0]].forEach(function(e) { return e() }), i = [], Re = [], ke = !1, Te = !0, le.call(We, "updated", { target: u, action: t, param: a, value: this, preValue: c, keyname: n, origin: Ae }), de.updateds.forEach(function(e, i) { e.call(We, { target: u, action: t, param: a, value: this, preValue: c, keyname: n, origin: Ae }) }), s
                        }
                    })
                }), a.$index = function(t, n) { return e.array.index(this, t, n) }, a.$include = function(t, n) { return e.array.compare(this, t, n) }, a.$empty = function() { return e.array.empty(this) }, a.$replace = function(t) { return e.array.replace(this, t) }, a.$merge = function() { var t; return (t = e.array).merge.apply(t, [this].concat(Array.prototype.slice.call(arguments))) }, a.$get = function(t, n) { return e.array.get(this, t, n) }, a.$set = function(t, n, i) { return e.array.set(this, t, n, i) }, a.$delete = function(t, n) { return e.array.delete(this, t, n) }, t.__proto__ = a, t
            }

            function Q(t) { if (void 0 === t) return Ae = Ae; if ("string" == typeof t) { var n = e.unit.getKeyValue(t, Ae); return Re = [], n } return Ae }

            function ee(i, a) {
                var r = "string" == typeof i,
                    l = [],
                    c = null;
                if (Re = [], r && void 0 !== a) {
                    var s, u;
                    ze && console.log("set " + i + " "), je = !0, le.call(We, "beforeupdate", (s = { action: "set", target: null, value: c, preValue: d }, o(s, "action", "set"), o(s, "keyname", i), o(s, "origin", Ae), s)), de.beforeUpdates.forEach(function(e, t) {
                        var n;
                        e.call(We, (n = { action: "set", target: null, value: c, preValue: d }, o(n, "action", "set"), o(n, "keyname", i), o(n, "origin", Ae), n))
                    });
                    var d = e.unit.getKeyValue(i, Ae);
                    a && "object" === e.typeof(a) ? (c = n.extend(!0, {}, a), l.push(i), Object.keys(a).forEach(function(e, t) {
                        var n = i + "." + e;
                        le.call(We, n, { target: null, value: a[e], preValue: d, action: "set", keyname: n, origin: Ae })
                    })) : c = a, e.unit.setKeyValue(i, a, fe), e.unit.setKeyValue(i, c, Ae), He[i] = c, le.call(We, i, { target: null, value: c, preValue: d, action: "set", keyname: i, origin: Ae }), le.call(We, "updated", (u = { action: "set", target: null, value: c, preValue: d }, o(u, "action", "set"), o(u, "keyname", i), o(u, "origin", Ae), u)), de.updateds.forEach(function(e, t) {
                        var n;
                        e.call(We, (n = { action: "set", target: null, value: c, preValue: d }, o(n, "action", "set"), o(n, "keyname", i), o(n, "origin", Ae), n))
                    }), "object" === (void 0 === a ? "undefined" : t(a)) && (a instanceof Array ? K(fe, i.split(ge)) : K(a)), Re = []
                } else i && "object" === e.typeof(i) && (Ae = n.extend(!0, {}, Ae, i), ie(i));
                return Ae
            }

            function te(t, n) { return "string" == typeof t && (e.unit.delKey(t, Ae), n && n.call(We, t)), Ae }

            function ne(e, t) { return te(e, function(t) { le(e) }), Ae }

            function ie(t, n) {
                for (var i in t) {
                    var o = void 0 === n ? i : n + i,
                        a = t[i];
                    le(o, { target: null, value: a, preValue: Ae[i] || "undefined", action: "set", param: null, keyname: o, origin: Ae }), a && "object" === e.typeof(a) && ie(a, i + ".")
                }
            }

            function oe(t, n) { var i = ""; return i = t && "array" === e.typeof(t) ? t.map(function(e, t) { return he + ge + e }) : he + ge + t, Se.on.call(We, i, n), this }

            function ae(e, t) { return Oe.hasOwnProperty(e) ? this : (oe(e, t), Oe[e] = t, this) }

            function re(e, t) {
                if (e) {
                    var n = he + ge + e;
                    Se.off.call(We, n, t)
                } else We.handle = {};
                return this
            }

            function le(e) { var t = he + ge + e; return ze && console.warn(t, "trigger"), arguments[0] = t, Se.trigger.apply(We, arguments), ke = !1, Te = !0, this }

            function ce() { return Re = [], ke = !1, Te = !0, je = !1, this }

            function se() { return Re = [], de.beforeDestroys.forEach(function(e, t) { e.call(We) }), ke = !1, Te = !0, je = !1, re(), de.beforeMounts = [], de.beforeCompiles = [], de.compileds = [], de.mounteds = [], de.beforeUpdates = [], de.updateds = [], de.destroyeds.forEach(function(e, t) { e.call(We) }), this }
            var ue = { el: null, scope: "", data: null, extends: null, mixins: [], beforeMounts: [], beforeCompiles: [], compileds: [], beforeUpdates: [], mounteds: [], updateds: [], beforeDestroys: [], destroyeds: [], computed: null, methods: null, watch: null, templates: null, beforeMount: null, mounted: null, beforeCompile: null, compiled: null, beforeUpdate: null, updated: null, beforeDestroy: null, destroyed: null, isPublic: !1, modelEvent: "input", scopeSplit: ".", delayInput: 200, needStatic: !1, needView: !0, needComponent: !1, needCompile: !0, needNative: !1, deep: !0, log: !1, autoinit: !0 },
                de = null;
            de = a(i);
            var fe = de.data,
                he = de.scope || e.guid(),
                pe = de.computed,
                ge = de.scopeSplit,
                ve = de.methods,
                me = de.templates,
                be = de.watch || ue.watch,
                ye = (de.delayInput, de.isPublic),
                we = de.modelEvent,
                xe = de.needStatic,
                ke = !1,
                Te = !0,
                Ie = {},
                Ce = {},
                Oe = {},
                je = !1,
                Le = {},
                Se = e.emitter(),
                Pe = { target: null };
            de.el ? de.el = de.el : de.el = ye ? "body" : ".bui-page";
            var Ee = null,
                Ne = null,
                Be = null,
                De = null,
                Re = [],
                Fe = !1,
                Me = !0,
                Ae = fe,
                He = {},
                ze = void 0 === de.log ? ue.log : de.log,
                Ve = /b-text|b-html|b-value|b-show|b-hide|b-checked|b-src|b-href|b-bind|b-style|b-class|b-model/gim,
                qe = { "b-text": L, "b-html": E, "b-value": N, "b-show": F, "b-hide": M, "b-checked": A, "b-bind": H, "b-src": V, "b-id": q, "b-href": $, "b-class": W, "b-model": D, "b-style": U },
                $e = { "b-text": [], "b-html": [], "b-value": [], "b-show": [], "b-hide": [], "b-checked": [], "b-bind": [], "b-src": [], "b-href": [], "b-class": [], "b-model": [], "b-style": [] },
                Ue = {},
                We = (n.extend(!0, {}, fe, ve, be, pe, me), { $methods: ve, $refs: Le, mixin: a, $options: de, $templates: me, config: de, watch: f, nextTick: u, oneTick: d, get: Q, set: ee, delete: ne, del: ne, observer: K, compile: v, $mount: v, compileHtml: b, clearKey: ce, destroy: se, init: r, on: oe, off: re, one: ae, trigger: le, emitter: Se });
            try { de.autoinit && r() } catch (t) { e.showLog(t) }
            return We
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        function n(n, i) {
            function o(t) {
                var n = i || 750,
                    o = document.head.parentNode,
                    a = t || (p / n * 100).toFixed(2);
                return u = a || 48, e.config.viewport.zoom && (o.style.fontSize = u + "px"), e.trigger.call(e, "viewportinit"), this
            }

            function a(e) { return p || t("body").width() || t("#bui-router").width() || t(".bui-page").width() }

            function r(e) { return g || t("body").height() || t("#bui-router").height() || t(".bui-page").height() }

            function l(e) { return v }

            function c(e) { return m }

            function s(e) { return h }
            e.trigger.call(e, "viewportbefore");
            var u, d = document.querySelector("meta[name=viewport]"),
                f = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
                h = window.devicePixelRatio,
                p = document.documentElement.clientWidth,
                g = document.documentElement.clientHeight,
                v = parseInt(p) * parseInt(h),
                m = parseInt(g) * parseInt(h);
            if (p = p > g ? g + 24 : p, d) e.config.viewport.create && (d.content = f);
            else {
                var b = document.createElement("meta");
                b.name = "viewport", b.content = f;
                var y = document.head;
                e.config.viewport.create && y.appendChild(b), b = null
            }
            var w = [240, 320, 360, 375, 384, 393, 412, 414, 435, 480, 512, 540, 768, 1024, 1536, 2048, 2732, 534, 854, 750],
                x = [32, 42.67, 48, 50, 51.2, 52.4, 54.93, 55.2, 58, 64, 68.27, 60, 60, 60, 60, 60, 60, 60, 60, 60],
                k = e.array.index(w, document.documentElement.clientWidth);
            return k > -1 && void 0 === n ? u = x[k] : o(n), { width: a, height: r, fontSize: u, screenWidth: l, screenHeight: c, ratio: s, init: o }
        }
        e.viewport = n
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.loader = function(i) {
            function o(e) { return e = e || {}, U = n.extend({}, U, e), this }

            function r(e) {
                if (void 0 === e) return K;
                if ("object" === (void 0 === e ? "undefined" : t(e)) && ("modules" in e || "baseUrl" in e)) K = n.extend(!0, {}, K, e), X = K.modules;
                else if ("object" === (void 0 === e ? "undefined" : t(e)) && "moduleName" in e) {
                    var i = u(e);
                    X[e.moduleName] = i || {}, K = n.extend(!1, K, { modules: X }), X = K.modules
                }
                return K
            }

            function l(e) { if ("string" == typeof e) return K.modules[e] || null }

            function c(t, n) {
                if (n && "object" === e.typeof(n)) {
                    if (n.moduleName = t, n.hasOwnProperty("loaded") && "function" == typeof n.loaded) {
                        var i = n.loaded;
                        n.loaded = function() {
                            X = K.modules;
                            var e = n.moduleName,
                                t = X[e].depend,
                                o = [v, X[e] && X[e].exports, X[e]],
                                a = [];
                            t.length && t.forEach(function(e, t) { X[e] && a.push(X[e].exports) });
                            var r = a.concat(o);
                            return i && i.apply(this, r)
                        }, n.script = n.moduleName + ".js", n.path = n.script.substr(0, n.script.lastIndexOf("/") + 1)
                    }
                    n.depend && n.depend.length && (n.depend = f(n.depend, n.script)), r(n)
                }
                return this
            }

            function s(e, t) {
                var n = e,
                    i = t.lastIndexOf("/"),
                    o = t.substr(0, i);
                return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, function(e) { var t = o.lastIndexOf("/"); return o = o.substr(0, t), "" }), n = o ? o + "/" + e : e) : e.indexOf("./") > -1 && (n = o + "/" + e.replace(/\.\//g, "")), n
            }

            function u(e) {
                var t = { id: "", moduleName: "", template: "", data: null, depend: [], script: "", style: [], isDefined: !1, isLoaded: !1, beforeCreate: null, created: null, beforeLoad: null, loaded: null, show: null, hide: null, beforeDestroy: null, destroyed: null, path: "", exports: {}, dependExports: [] },
                    i = {};
                return X.hasOwnProperty(e.moduleName) && (i = X[e.moduleName]), n.extend(!0, {}, t, i, e)
            }

            function d(t) {
                U.log && console.log("destroy " + t);
                var i = "string" == typeof t ? X[t] : null;
                if (i) {
                    i.beforeDestroy && i.beforeDestroy.call(i);
                    var o = n('script[name="' + t + '"]').attr("src");
                    Y = e.array.remove(Y, o), n('script[name="' + t + '"]').remove(), delete K.modules[t], X = K.modules, i.destroyed && i.destroyed.call(i)
                }
            }

            function f(e, t) {
                for (var n = [], i = 0; i < e.length; i++) {
                    var o = e[i],
                        a = o.indexOf("./") > -1 ? s(o, t) : o;
                    if (a.indexOf(".css") > -1) a.indexOf("css!") > -1 ? styles.push(a.substr(4)) : styles.push(a);
                    else {
                        var l = a.indexOf(".js");
                        l > -1 && (a = a.substr(0, l)), n.push(a), X.hasOwnProperty(a) || r({ moduleName: a })
                    }
                }
                return n
            }

            function h(t, i, o) {
                var a = { moduleName: "", template: "", script: "", path: "", data: null, depend: [], beforeCreate: null, created: null, beforeLoad: null, loaded: null, hide: null, show: null, beforeDestroy: null, destroyed: null },
                    l = {},
                    c = "";
                try {
                    var s = g().name ? g() : p(),
                        u = s.name
                } catch (e) {}
                var d = [],
                    h = [];
                if (void 0 === t) return e.showLog("define第1个参数不能为空"), this;
                "function" == typeof t ? (o = t, c = u, i = []) : "object" === e.typeof(t) ? (c = u, i = t.depend || [], o = t.loaded, l = n.extend(!0, {}, a, t)) : "array" === e.typeof(t) ? (o = i, i = t, c = u) : "function" == typeof i ? (c = t, o = i, i = []) : (c = t, i = i, o = o);
                var m = X.hasOwnProperty(c) ? X[c].script || s.src : s.src;
                if (U.log && console.log("define " + c), i.length && (d = f(i, m)), "string" == typeof c && "function" == typeof o) {
                    var b = function() {
                        var e = [v, X[u] && X[u].exports, X[u]],
                            t = [];
                        d.length && d.forEach(function(e, n) { X[e] && t.push(X[e].exports) });
                        var n = t.concat(e);
                        return o && o.apply(this, n)
                    };
                    l = t && "object" === e.typeof(t) ? n.extend(!0, {}, a, X[c], e.config.loader.define, t) : n.extend(!0, {}, a, X[c], e.config.loader.define), l.moduleName = c, l.depend = d, l.style = h, l.script = m, l.path = m.substr(0, m.lastIndexOf("/") + 1), l.loaded = b, l.isDefined = !0, r(l)
                } else e.showLog("define " + c + "模块的参数格式不对");
                return this
            }

            function p(e) {
                var t = window.location.pathname,
                    n = t.indexOf(".html"),
                    i = "",
                    o = "";
                return n > -1 ? (i = t.substr(1, n), o = i + ".js") : (i = t.substr(1), o = i + ".js"), { name: i, src: o }
            }

            function g() {
                var e, t, i = window.location.href,
                    o = [],
                    r = document.currentScript;
                if (i.indexOf("#") > -1 ? o = i.split("#") : o.push(i), q = o[0].replace("/index.html", "") + "/", r) return e = r.src.replace(q, ""), t = r.getAttribute("name") || e.substr("0", e.indexOf(U.scriptSuffix)), { name: t, src: e };
                try { a() } catch (e) {
                    var l = e.stack || e.sourceURL || e.stacktrace || "",
                        c = l.split(/[@ ]/g).pop(),
                        s = c.replace(/(:\d+)?:\d+$/i, ""),
                        s = s.replace(new RegExp(q, "g"), "");
                    return r = n('script[src="' + s + '"]')[0], t = r ? r.getAttribute("name") : s.replace(U.scriptSuffix, ""), { name: t, src: s }
                }
            }

            function v(t, n) {
                U.log && console.log("require " + t);
                if (t && "string" == typeof t) {
                    if (t.indexOf(".css") > -1) return E(t, n);
                    if (t.indexOf(".html") > -1) return E(t, n);
                    t = [t]
                }
                if (n && "function" != typeof n) return e.showLog("require第2个参数格式为function", "bui.loader.require"), this;
                try { t = t.map(function(t, n) { return e.unit.resolvePath(t) }), m(t, n) } catch (t) { e.showLog(t, "bui.loader.require") }
                return this
            }

            function m(t, n) {
                function i(t, n) {
                    function a(e, t) { var o = X[e]; return o && (o.isDefined = !0), !1 !== (o && o.beforeLoad && o.beforeLoad.call(o, o.depend)) && (o && o.depend && o.depend.length ? void i(o.depend, n) : void(t == r.length - 1 && n && n.apply(o))) }
                    t = t || [], X = K.modules;
                    var r = e.array.uniq(t);
                    r.length > 1 && r.forEach(function(e, t) {
                        var n = X[e];
                        n && 1 == n.isLoaded && r.splice(t, 1)
                    }), r.forEach(function(t, i) {
                        var l = X[t];
                        if (X[t] && X[t].style && X[t] && X[t].style.length && R(X[t].style), e.array.compare(o, t) || o.unshift(t), l && l.isLoaded) {
                            if (!1 === (l && l.beforeLoad && l.beforeLoad.call(l, l.depend))) return !1;
                            i == r.length - 1 && (n && n.apply(l), o = [])
                        } else if (l && l.loaded) {
                            var c = X[t].beforeCreate && X[t].beforeCreate.call(X[t]);
                            if (!1 === c) return !1;
                            X[t].created && X[t].created.call(X[t]), a(t, i)
                        } else D(t, function() {
                            var e = X[t];
                            if (!1 === (e && e.beforeCreate && e.beforeCreate.call(X[t]))) return !1;
                            e && e.style && e.style.length && R(e.style), e && e.created && e.created.call(X[t]), a(t, i)
                        }, function() { i == r.length - 1 && (n && n.apply(null), o = []) })
                    })
                }
                var o = [];
                i(t, function() {
                    if (y(o)) {
                        var e = [];
                        t.forEach(function(i, o) { b(i), e.push(X[i] && X[i].exports), o === t.length - 1 && n && n.apply(Z, e || []) })
                    }
                })
            }

            function b(t) {
                X = K.modules;
                var n = "string" == typeof t ? X[t] || {} : t,
                    i = n.depend || [],
                    o = null,
                    a = [];
                n.dependExports = [];
                try {
                    if (i.length)
                        for (var r = 0; r < i.length; r++) {
                            var l = i[r],
                                c = X[l];
                            c.isLoaded ? a[r] = c.exports : a[r] = b(c) || c.exports, c.exports = a[r], n.dependExports.push(a[r]), c.isLoaded = !0
                        }
                    o = n.isLoaded ? n.exports : n.loaded && n.loaded.apply(n, a), n.exports = o || X[n.moduleName] && X[n.moduleName].exports, n.isLoaded = !0, V(n.moduleName, n, n.exports), U.log && console.log("execute " + n.moduleName)
                } catch (t) { e.showLog(t, "bui.loader.execute") }
                return o
            }

            function y(e) {
                var t = !0,
                    n = e || [];
                if (X = K.modules, n.length) n.forEach(function(e, n) {
                    var i = X[e];
                    i && !1 === i.isDefined && (t = !1)
                });
                else
                    for (var i in X) X[i] && !1 === X[i].isDefined && (t = !1);
                return t
            }

            function w(t) {
                var n = !0,
                    i = [];
                if (X = K.modules, "string" == typeof t) { t.indexOf(",") > -1 ? i = t.split(",") : i.push(t) } else t && "array" === e.typeof(t) && (i = t || []);
                if (i.length) i.forEach(function(e, t) { X.hasOwnProperty(e) || (n = !1), X[e] && !1 === X[e].isLoaded && (n = !1) });
                else
                    for (var o in X) X[o] && !1 === X[o].isLoaded && (n = !1);
                return n
            }

            function x(t) {
                var i = n.extend(!0, { id: "", cacheHtml: !1, cache: !1, url: "", script: "", param: null, template: null, beforeLoad: null, loaded: null }, e.config.loader.load, t);
                if (!i.id) return void e.showLog("id不能为空");
                if (!i.url) return void e.showLog("url不能为空");
                if (!1 === ("function" == typeof i.beforeLoad ? i.beforeLoad.call(Z) : i.beforeLoad)) return this;
                var o = P(i.url);
                if (i.script) {
                    var a = i.script.indexOf(".js");
                    o.module = i.script.substr(0, a)
                }
                var l = "string" == typeof i.id && (i.id.indexOf("#") > -1 || i.id.indexOf(".") > -1) ? i.id.substr(1) : i.id;
                i.id = l, i.name = o.module, i.url = o.url, r({ id: l, moduleName: o.module }), e.history.getLast().currentComponent = l, e.history.setComponent({ id: i.id, name: i.name, url: i.url, param: i.param || null });
                var c = r().modules[i.name];
                if (c && "function" == typeof c.template) { var s = c.template.call(c) || ""; return !i.cacheHtml && e.obj(i.id).html(s), k(i), this }
                if (i.cacheHtml) return k(i), this;
                if ("function" == typeof o.url) { var u = o.url(i) || ""; return !i.cacheHtml && e.obj(i.id).html(u), k(i), this }
                return E(o.url, function(t) {!i.cacheHtml && e.obj(i.id).html(t), k(i) }, function(e) { i.onFail && i.onFail.call(this, o) }), this
            }

            function k(t) {
                var n = r().modules[t.name];
                if (!1 === (n.beforeLoad && n.beforeLoad.call(n, n.depend))) return !1;
                if (n.isLoaded && "function" == typeof n.loaded && !t.cache) { n.id = t.id, n.exports = n.loaded && n.loaded.call(n, n.exports); var i = { id: t.id, name: t.name, url: t.url, param: t.param || null, exports: n.exports || {} }; return e.history.setComponent(i), t.loaded && t.loaded.call(n, n.exports), V(t.id, i), Z }
                e.checkLoad(t.name);
                v(t.name, function(i) {
                    var o = { id: t.id, name: t.name, url: t.url, param: t.param || null, exports: i || {} };
                    e.history.setComponent(o), t.loaded && t.loaded.call(n, i), V(t.id, o)
                })
            }

            function T(i) {
                var o = n.extend(!0, { id: "", isSelf: !0, deepComponent: U.deepComponent, cache: !1, cacheHtml: !1, delay: !0, param: null, beforeLoad: null, loaded: null, compiled: null }, e.config.loader.component, i),
                    a = null;
                a = "" === o.id ? e.$(U.componentTag) : o.isSelf ? e.$(o.id) : e.$(o.id).find(U.componentTag);
                for (var l = [], c = [], s = [], u = [], d = r().modules, f = 0; f < a.length; f++) {
                    var h = a[f],
                        p = e.guid();
                    !h.id && h.setAttribute("id", p);
                    var g = e.unit.getAttributes(h),
                        v = g.parentId = o && o.id || e.history.getLast().id || "bui-page",
                        m = e.$(v).parents("component"),
                        b = o.isSelf ? m[0] && m[0].id : o.id;
                    "array" === e.typeof(v) ? b = o.isSelf ? m && m[0].id : v[0].id : "object" == t(g.parentId) && e.typeof(g.parentId).indexOf("element") > -1 && (b = o.isSelf ? m[0] && m[0].id : v.id);
                    var y = b && e.history.getComponent(b, "name");
                    if (y) g.parentId = b, g.parentName = y;
                    else {
                        var w = e.history.getLast();
                        g.parentId = w.id, g.parentName = w.name
                    }
                    var k = g.name || h.getAttribute("name"),
                        T = "true" === g.rendered || o.cacheHtml;
                    if (k && (!g.delay || !o.delay)) {
                        g = n.extend(!0, {}, g, o.param);
                        var I = d[k],
                            O = h.innerHTML,
                            j = I && "string" == typeof I.template ? I.template : k + ".html",
                            L = I && I.script ? I.script : k + ".js";
                        j = j || k + ".html", I && "function" == typeof I.template ? l.push({ id: h.id, el: h, name: k, cacheHtml: T, cache: o.cache, deepComponent: o.deepComponent, template: I.template || "", url: j, srcript: L, slot: O, param: g }) : (s.push(j), u.push(L), c.push({ id: h.id, el: h, name: k, cacheHtml: T, cache: o.cache, deepComponent: o.deepComponent, url: j, srcript: L, slot: O, param: g }))
                    }
                }
                return l.length && (l.forEach(function(e, t) { x({ id: e.id, url: e.url, param: e.param || null, template: e.template, cacheHtml: e.cacheHtml, cache: e.cache, beforeLoad: o.beforeLoad }) }), o.data = l, C(o)), c.length ? (N(e.array.merge(s, u), function(e) {! function t(n) { var i = c[n]; return n == c.length ? (o.data = c, C(o), this) : i ? (i.template = e[n], void x({ id: i.id, url: i.url, param: i.param || null, cacheHtml: i.cacheHtml, cache: i.cache, beforeLoad: o.beforeLoad, loaded: function(e) { t(n + 1) }, onFail: function() { t(n + 1) } })) : this }(0) }), this) : (o.compiled && o.compiled(o.data), V("componentcompiled", o.data), !1)
            }

            function I(e) { return T(n.extend(!0, { id: "", isSelf: !1, deepComponent: U.deepComponent, cache: !1, cacheHtml: !1, beforeLoad: null, loaded: null, compiled: null }, e)), this }

            function C(t) {
                for (var n = 0; n < t.data.length; n++) {
                    var i = t.data[n];
                    new RegExp("<" + U.viewTag + ".+name=", "gi").test(i.template) && L({ id: i.id });
                    var o = new RegExp("<" + U.componentTag + ".+name=", "gi");
                    new RegExp("<" + U.componentTag + '.+name="' + i.name + '"', "gi").test(i.template) ? e.showLog("请检查代码, <" + U.componentTag + ' name="' + i.name + '"></' + U.componentTag + ">的模板里面存在循环嵌套") : (t.deepComponent && o.test(i.template) && I({ id: i.id }), t.loaded && t.loaded(i), V("componentloaded", i))
                }
                t.compiled && t.compiled(t.data), V("componentcompiled", t.data)
            }

            function O(t) {
                for (var i = n.extend(!0, { id: "", deepView: U.deepView, deepComponent: U.deepComponent, delay: !1, param: null, beforeLoad: null, loaded: null, compiled: null }, t), o = e.$(i.id), a = 0; a < o.length; a++) {
                    var r = o[a],
                        l = r && r.getAttribute("delay"),
                        c = r && r.tagName.toLowerCase();
                    "true" === l && ("true" === l && c === U.componentTag ? (i.isSelf = !0, i.id = r, r.setAttribute("delay", "false"), T(i)) : "true" === l && c === U.viewTag ? (i.isSelf = !0, i.id = r, r.removeAttribute("delay"), S(i)) : (i.isSelf = !1, c = n(r).find('[delay="true"]')[0] && n(r).find('[delay="true"]')[0].tagName.toLowerCase(), n(r).find('[delay="true"]').removeAttr("delay"), c === U.componentTag && T(i), c === U.viewTag && S(i)))
                }
                return this
            }

            function j(t) {
                for (var i = 0; i < t.data.length; i++) {
                    var o = t.data[i];
                    if (!o.cacheHtml) {
                        o.el.innerHTML = o.template;
                        var a = new RegExp("<" + U.componentTag + ".+name", "gi");
                        new RegExp("<" + U.componentTag + '.+name="' + o.name + '"', "gi");
                        a.test(o.template) && I({ id: o.id });
                        var r = new RegExp("<" + U.viewTag + '.+name="' + o.name + '"', "gi"),
                            l = new RegExp("<" + U.viewTag + '.+name="' + o.name + '"', "gi");
                        if (l.test(o.template)) { e.showLog("请检查代码, <" + U.viewTag + ' name="' + o.name + '"></' + U.viewTag + ">的模板里面存在循环嵌套"); continue }
                        t.deepView && r.test(o.template) && !l.test(o.template) && L({ id: n(o.el) })
                    }
                    t.loaded && t.loaded(o), V("viewloaded", o)
                }
                t.compiled && t.compiled(t.data), V("viewcompiled", t.data)
            }

            function L(e) { return S(n.extend(!0, { id: "", isSelf: !1, deepView: U.deepView, loaded: null, compiled: null }, e)), this }

            function S(t) {
                var i = n.extend(!0, { id: "", isSelf: !0, deepView: U.deepView, loaded: null, compiled: null }, t),
                    o = null;
                o = "" === i.id ? e.$(U.viewTag) : i.isSelf ? e.$(i.id) : e.$(i.id).find(U.viewTag);
                for (var a = [], r = [], l = loader.map().modules, c = 0; c < o.length; c++) {
                    var s = o[c],
                        u = s.getAttribute("name"),
                        d = s.getAttribute("delay"),
                        f = l[u],
                        h = "true" === s.getAttribute("rendered"),
                        p = e.guid();
                    if (!s.id && s.setAttribute("id", p), "true" !== d) {
                        var g = s.innerHTML,
                            v = f && f.template ? f.template : u + ".html";
                        f && "function" == typeof f.template ? r.push({ id: s.id, el: s, name: u, cacheHtml: h, template: f.template.call(f) || "", url: v, slot: g }) : a.push({ id: s.id, el: s, name: u, cacheHtml: h, url: v, slot: g })
                    }
                }
                return r.length && (r.forEach(function(e, t) { e.el.innerHTML = e.template }), i.data = r, j(i)),
                    function e(t) {
                        if (t == a.length) return i.data = a, void j(i);
                        a[t] && B(a[t].url, function(n) { a[t].template = n, e(t + 1) }, function(n) { a[t].template = "", e(t + 1) })
                    }(0), this
            }

            function P(e) {
                var t = X,
                    n = {},
                    i = e && e.indexOf(".html");
                return i > -1 ? (n.url = e, n.module = e.substr(0, i)) : (n.url = t[e].template || e + ".html", n.module = e), n
            }

            function E(t, i, o) {
                return new Promise(function(a, r) {
                    if ("string" == typeof t) t = e.unit.resolvePath(t), t.indexOf(".css") > -1 ? (i && i(t), F(t).then(function(e) { a(t) })) : t.indexOf(".html") > -1 || t.indexOf(".htm") > -1 ? B(t).then(function(e) {
                        if ("function" != typeof i) return n(i).html(e), o && o(e), void a(e);
                        i && i(e), a(e)
                    }, function(e) { o && o(e), r(e) }) : D(t).then(function(e) { i && i(e), a(e) }, function(e) { o && o(e), r(e) });
                    else if (t && "array" === e.typeof(t)) {
                        var l = t.map(function(t, n) { return t = e.unit.resolvePath(t), t.indexOf(".css") > -1 ? F(t) : t.indexOf(".html") > -1 || t.indexOf(".htm") > -1 ? B(t) : D(t) });
                        Promise.all(l).then(function(e) { i && i(e), a(e) }, function(e) { o && o(e), r(e) })
                    }
                })
            }

            function N(t, n, i) {
                return new Promise(function(o, a) {
                    if ("string" == typeof t) E(t, n, i);
                    else if (t && "array" === e.typeof(t)) { var r = [];! function i(a) { if (a == t.length) return n && n(r), void o(r); var l = e.unit.resolvePath(t[a]); return l.indexOf(".css") > -1 ? F(l) : l.indexOf(".html") > -1 || l.indexOf(".htm") > -1 ? B(l, function(e) { r.push(e), i(a + 1) }, function(e) { i(a + 1) }) : D(l, function(e) { r.push(e), i(a + 1) }, function(e) { i(a + 1) }) }(0) }
                })
            }

            function B(t, n, i) { return new Promise(function(o, a) { var r = "function" == typeof n; if (t = e.hasRouter ? t : e.unit.relativePath(t, U.relativePath), J.hasOwnProperty(t)) return r ? n && n.call(Z, J[t], 200) : "string" == typeof n && e.$(n).html(J[t]), o(J[t], 200), this; "string" == typeof t && bui.ajax({ baseUrl: U.baseUrl, url: t, dataType: "html", contentType: "text/html;charset=UTF-8", mimeType: "html", processData: !1, needNative: U.needNative, data: null, success: function(a, l, c) { J[t] = a, r ? n && n.call(Z, a, l, c) : "string" == typeof n && (e.$(n).html(a), i && i.call(Z, a, l, c)), o(a, l) }, error: function(e, t, n) { r && i && i.call(Z, e, t, n), a(e, t, n) } }) }) }

            function D(t, i, o) {
                return new Promise(function(a, r) {
                    var l, c = this;
                    if (X = K.modules, void 0 === t || "" == t) return o && o.call(c, t), r(t), this;
                    if (t in X) l = t, t = X[t].script || l + U.scriptSuffix;
                    else {
                        var s = t.indexOf(U.scriptSuffix);
                        s > -1 ? (t = t, l = t.substr(0, s)) : (l = t, t += U.scriptSuffix)
                    }
                    t = e.hasRouter ? t : e.unit.relativePath(t, U.relativePath);
                    var u = document.createElement("script") || {},
                        d = U.cache ? "" : "?t=" + (new Date).getTime(),
                        f = t.indexOf("http://") > -1 || t.indexOf("https://") > -1;
                    u.type = "text/javascript", u.async = !1, u.src = f ? t + d : K.baseUrl + t + d, u.setAttribute("name", l), u.onload = function() { U.log && console.log("create " + t), i && i(t), a(t) }, u.onerror = function(e) { U.log && console.log("createError " + t), o && o(t), r(t) };
                    var h = e.array.index(Y, t);
                    return X[l] && X[l].isDefined ? (i && i(t), a(t)) : (h > -1 && X.hasOwnProperty(l) && n('script[name="' + l + '"]').remove(), document.body && document.body.appendChild(u), U.cache && Y.push(t)), u = null, this
                })
            }

            function R(t) { return new Promise(function(n, i) { t.length; if ("array" === e.typeof(t)) { var o = t.map(function(e) { return F(e) }); return Promise.all(o) } return F(t) }) }

            function F(t) {
                return new Promise(function(n, i) {
                    if ("string" != typeof t) return void e.showLog(t + "的格式不正确");
                    if (e.array.index(_, t) < 0) {
                        var o = e.hasRouter ? t : e.unit.relativePath(t, U.relativePath),
                            a = document.createElement("link") || {};
                        a.href = o + (U.cache ? "" : "?t=" + (new Date).getTime()), a.setAttribute("rel", "stylesheet"), a.setAttribute("type", "text/css"), document.head && document.head.appendChild(a), a = null, _.push(t)
                    }
                    n(t)
                })
            }

            function M(t, n) {
                var i = e.history.getLast("id"),
                    o = arguments;
                return e.unit.stringToArray(t).forEach(function(e, t) { o[0] = i + "-" + e, W.on.apply(Z, o) }), this
            }

            function A(e, t) { return W.one.apply(Z, arguments), this }

            function H(e, t) { return W.wait.apply(Z, arguments), this }

            function z(t, n) {
                var i = e.history.getLast("id"),
                    o = arguments;
                return e.unit.stringToArray(t).forEach(function(e, t) { o[0] = i + "-" + e, W.off.apply(Z, o) }), this
            }

            function V(t) {
                Z.self = this == window || this == Z ? null : this;
                var n = e.history.getLast("id");
                arguments[0] = n + "-" + t, W.trigger.apply(Z, arguments)
            }
            var q, $ = { cache: !0, log: !1, baseUrl: "", relativePath: "pages", needNative: !1, deepView: !1, viewTag: "view", componentTag: "component", deepComponent: !0, scriptSuffix: ".js" },
                U = n.extend({}, $, e.config.loader, i),
                W = e.emitter(),
                Y = [],
                _ = [],
                J = {},
                K = { baseUrl: "", modules: {} },
                X = {},
                Z = { init: o, define: h, require: v, destroy: d, map: r, import: E, importSync: N, importHtml: B, load: x, checkLoad: w, components: I, component: T, delay: O, views: L, view: S, get: l, set: c, one: A, wait: H, on: M, off: z, trigger: V };
            return Z
        }, window.loader = e.loader(), e.define = loader.define, e.require = loader.require, e.map = loader.map, e.import = loader.import, e.checkLoad = loader.checkLoad, e.checkDefine = loader.checkDefine
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.toggle = function(n) {
            function i(t) {
                if (t = t || m, y = !1, !t.id) return void e.showLog("toggle id不能为空", "bui.toggle");
                x = e.objId(t.id), m = v.config = t, g = x.attr("class") || "";
                var n = t.effect,
                    i = t.inOrder ? e.array.index(w.hideInOrder, n) : e.array.index(w.hide, n),
                    o = n && (e.array.index(w.show, n) > -1 ? e.array.index(w.show, n) : i);
                return I = !(x[0] && "none" == x[0].style.display || "none" == x.css("display")), o < 0 ? (p = w.show[0], h = t.inOrder ? w.hideInOrder[0] : w.hide[0]) : (p = w.show[o], h = t.inOrder ? w.hideInOrder[o] : w.hide[o]), this
            }

            function o() { return I }

            function a(t, n) { if (!y) return x = e.objId(m.id), !(!k && !T) && (k = !1, "function" == typeof t ? (t = t, n = n || p || "") : (n = t || p || "", t = null), x[0] && "none" == x[0].style.display && x.css("display", b), x.addClass("animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !0, k = !0) : x.one("webkitAnimationEnd", function() { try {!I && x.css("display", b), m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !0, k = !0 } catch (t) { e.showLog(t, "toggle show method") } }), this) }

            function r(t, n) { if (!y && (x = e.objId(m.id), k || T)) return T = !1, "function" == typeof t ? (t = t, n = n || h || "") : (n = t || h || "", t = null), x.css("display", b).addClass("animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (x.css("display", "none"), m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !1, T = !0) : x.one("webkitAnimationEnd", function() { try { x.css("display", "none"), m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !1, T = !0 } catch (t) { e.showLog(t, "toggle hide method") } }), this }

            function l() { return x.remove(), this }

            function c(e) {
                var e = 1 == e;
                x && (x.off(), e && x.remove()), y = !0
            }

            function s(t) { var n = {}; return e.widget.call(n, t) }

            function u(t, n) { return e.option.call(v, t, n) }
            var d = { id: "", effect: "fadeIn", useBox: !1, revert: !0, inOrder: !1 };
            if ("string" == typeof n) {
                var f = n || "";
                n = {}, n.id = f
            }
            var h, p, g, v = { show: a, hide: r, remove: l, isShow: o, destroy: c, widget: s, option: u, config: m, init: i },
                m = v.config = t.extend(!0, {}, d, n),
                b = m.useBox ? "-webkit-box" : "block",
                y = !1,
                w = { show: ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp", "fadeInLeftBig", "fadeInRightBig", "fadeInUpBig", "fadeInDownBig", "zoomIn", "bounceIn", "rotateIn", "rollIn", "flipInX", "flipInY", "lightSpeedIn", "showIn", "slideInRight", "slideInLeft", "coverInLeft", "coverInRight", "zoomSlideInLeft", "zoomSlideInRight", "pushInLeft", "pushInRight"], hide: ["fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "fadeOutDown", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutDownBig", "fadeOutUpBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutRight", "slideOutLeft", "coverOutLeft", "coverOutRight", "zoomSlideOutLeft", "zoomSlideOutRight", "pushOutLeft", "pushOutRight"], hideInOrder: ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRightBig", "fadeOutLeftBig", "fadeOutUpBig", "fadeOutDownBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutLeft", "slideOutRight", "coverOutRight", "coverOutLeft", "zoomSlideOutRight", "zoomSlideOutLeft", "pushOutRight", "pushOutLeft"] },
                x = null,
                k = !0,
                T = !0,
                I = !1;
            return m.id && i(m), v
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.unit = {}, e.unit.remToPx = function(e) {
            var t = window && window.viewport && window.viewport.fontSize || 100,
                e = (parseFloat(e) * t).toFixed(2);
            return e
        }, e.unit.pxToRem = function(e) {
            var t = window && window.viewport && window.viewport.fontSize || 100,
                e = (parseFloat(e) / t).toFixed(2);
            return e
        }, e.unit.pxToRemZoom = function(e) { var e = (parseFloat(e) / 100).toFixed(2); return e }, e.unit.debounce = function(e, t, n) {
            var i;
            return function() {
                var o = n || this,
                    a = arguments,
                    r = function() { i = null, e.apply(o, a) };
                clearTimeout(i), i = setTimeout(r, t)
            }
        }, e.unit.throttle = function(e, t, n) {
            t || (t = 250);
            var i, o;
            return function() {
                var a = n || this,
                    r = +new Date,
                    l = arguments;
                i && r < i + t ? (clearTimeout(o), o = setTimeout(function() { i = r, e.apply(a, l) }, t)) : (i = r, e.apply(a, l))
            }
        }, e.unit.startWithCss = function(e) { var t = new RegExp("^\\.|^#"); return "string" == typeof e && t.test(e) }, e.unit.startWithStr = function(e, t) { var n = new RegExp("^" + t); return "string" == typeof e && n.test(e) }, e.unit.startWithId = function(e) { var t = new RegExp("^#"); return "string" == typeof e && t.test(e) }, e.unit.startWithClass = function(e) { var t = new RegExp("^\\."); return "string" == typeof e && t.test(e) }, e.unit.endWithImage = function(e) { var t = new RegExp("(.png|.jpg|.gif)$"); return "string" == typeof e && t.test(e) }, e.unit.tel = function(t) {
            var n, t = String(t),
                i = "tel:";
            return 0 == t.indexOf("+") && (i = "wtai://wp/mc;"), n = t, window.location.href = i + n, e
        }, e.unit.sms = function(t, n) {
            var i = navigator.userAgent,
                o = /(iPhone|iPad|iOS)/i.test(i),
                a = o ? "&" : "?";
            return window.location.href = "sms:" + t + a + "body=" + n, e
        }, e.unit.mailto = function(t) { var t = "email" in t ? t : {}; return "string" == typeof t.email && t.email.indexOf("@") > 0 ? window.location.href = "mailto:" + t.email + "?subject=" + (t.subject || "") + "&body=" + (t.body || "") + "&cc=" + (t.cc || "") : e.showLog(email + "格式不正确"), e }, e.unit.openExtral = function(t) {
            var n = [],
                i = "",
                t = String(t);
            if (t.indexOf("mailto:") >= 0)
                if (n = t.split("mailto:"), i = n[1], i.indexOf("?") > -1) {
                    var o = i.split("?"),
                        a = e.unit.keyStringToObject(o[1]);
                    a.email = o[0], e.unit.mailto(a)
                } else e.unit.mailto({ email: i });
            if (t.indexOf("tel:") >= 0 && (n = t.split("tel:"), i = parseInt(n[1]), e.unit.tel(i)), t.indexOf("sms:") >= 0)
                if (n = t.split("sms:"), i = n[1], t.indexOf("=") >= 0) {
                    var r = t.split("="),
                        l = r[1];
                    e.unit.sms(i, l)
                } else e.unit.sms(i);
            return e
        }, e.unit.objectToKeyString = function(e, t) { var n = ""; for (var i in e) { n += "&" + i + "=" + (t ? encodeURIComponent(e[i]) : e[i]) } return n.substr(1) }, e.unit.keyStringToObject = function(t, n) {
            var i, o = {},
                a = [];
            try {
                for (a = t.split("&"), i = 0; i < a.length; i++) {
                    var r = n ? decodeURIComponent(a[i].split("=")[1]) : a[i].split("=")[1];
                    o[a[i].split("=")[0]] = r
                }
            } catch (t) { e.showLog(t) }
            return o
        }, e.unit.checkTargetInclude = function(e, t) {
            var i = t,
                o = [];
            if (i.indexOf(",") > -1) {
                o = i.split(",");
                var a, r = o.length;
                for (a = 0; a < r; a++) {
                    var l = o[a];
                    l.indexOf(".") > -1 && (o[a] = l.substr(1))
                }
            } else i.indexOf(".") > -1 ? o[0] = i.substr(1) : o[0] = i;
            var c, s = o.length;
            for (c = 0; c < s; c++)
                if (n(e).hasClass(o[c])) return !0;
            return !1
        }, e.unit.jsonToString = function(n) {
            function i(n) { if (n && "object" === e.typeof(n)) { for (var i in n) { var o = n[i]; "object" === (void 0 === o ? "undefined" : t(o)) && (n[i] = JSON.stringify(o)) } return n } }

            function o(n) { if (n && "array" === e.typeof(n)) return n.forEach(function(e, i) { "object" === (void 0 === e ? "undefined" : t(e)) && (n[i] = JSON.stringify(e)) }), n }
            return "object" === (void 0 === n ? "undefined" : t(n)) ? function(t) {
                function n(t, n) { var a = t[n]; return a && "object" === e.typeof(a) ? t[n] = i(a) : a && "array" === e.typeof(a) ? t[n] = o(a) : t[n] = a, t[n] }
                var a;
                if ("object" === e.typeof(t)) {
                    for (var r in t) t[r] = n(t, r);
                    a = JSON.stringify(t)
                } else "array" === e.typeof(t) ? (t.forEach(function(e, i) { t[i] = n(t, i) }), a = JSON.stringify(t)) : a = t;
                return a
            }(n) : n
        }, e.unit.stringToJson = function(n) {
            function i(n) {
                var o, a;
                try {
                    if (o = "object" === (void 0 === n ? "undefined" : t(n)) ? n : JSON.parse(n), "array" === e.typeof(o)) o.forEach(function(e, t) { o[t] = i(e) });
                    else if ("object" === e.typeof(o))
                        for (var r in o) {
                            var l = o[r];
                            o[r] = i(l)
                        }
                    a = o
                } catch (e) { a = n }
                return a
            }
            return n && i(n)
        }, e.unit.stringToArray = function(t) { var n = e.typeof(t); return "array" === n ? t : "string" === n && t.indexOf(",") > -1 ? t.split(",") : [t] }, e.unit.setKeyValue = function(e, t, n) {
            function i(e, n) {
                if (o.length) return i(o.shift(), n[e] || {});
                n[e] = t
            }
            var o = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return i(o.shift(), n)
        }, e.unit.getKeyValue = function(e, t) {
            function n(e, t) {
                var o = t[e];
                if (o && "string" == typeof o && o.indexOf("{") > -1 && o.indexOf("}") > -1) try { t[e] = JSON.parse(o) } catch (n) { t[e] = o }
                return void 0 !== o && i.length ? n(i.shift(), o) : o
            }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.getKeyObj = function(e, t) {
            function n(e, t) { var o = t[e]; return !o instanceof Array && o instanceof Object ? n(i.shift(), o) : o }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.delKey = function(e, t) {
            function n(e, o) { return i.length ? n(i.shift(), o[e]) : (delete o[e], t) }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.calcHeight = function(e, t) {
            var i = n(e);
            i[0] && (i[0].style.height = "calc(100% - " + t + ")")
        }, e.unit.resolvePath = function(t) {
            if (!e.hasRouter) return t;
            t = t || "";
            var n = t,
                i = router && router.history && router.history.getLast() || { url: n },
                o = i.url || "",
                a = o.lastIndexOf("/"),
                r = o.substr(0, a);
            return t.indexOf("../") > -1 ? (t = t.replace(/\..\//g, function(e) { var t = r.lastIndexOf("/"); return r = r.substr(0, t), "" }), n = r ? r + "/" + t : t) : t.indexOf("./") > -1 && (n = r + "/" + t.replace(/\.\//g, "")), n
        }, e.unit.filterField = function(n, i) {
            var o = {};
            if ("object" === (void 0 === i ? "undefined" : t(i))) {
                var a = "object" === e.typeof(n),
                    r = "object" === e.typeof(i),
                    l = "array" === e.typeof(n),
                    c = "array" === e.typeof(i);
                if (a) {
                    if (r)
                        for (var s in i) o[s] = i[s] ? n[i[s]] : n[s];
                    else c && i.forEach(function(e, t) { o[e] = n[e] });
                    return o
                }
                return l ? (o = [], c ? n.forEach(function(e, t) {
                    var n = {};
                    i.forEach(function(t, i) { n[t] = e[t] }), o.push(n)
                }) : r && n.forEach(function(e, t) {
                    var n = {};
                    for (var a in i) n[a] = i[a] ? e[i[a]] : e[a];
                    o.push(n)
                }), o) : void 0
            }
        }, e.unit.fixZero = function(e) { return e < 10 ? "0" + e : e }, e.unit.getAttributes = function(n) {
            if ("object" !== (void 0 === n ? "undefined" : t(n))) return null;
            var i = {},
                o = /\{.+\}$/g,
                a = /\[.+\]$/g;
            return n.attributes && Object.keys(n.attributes).forEach(function(t, r) {
                var l = n.attributes[t],
                    c = l.value;
                if (o.test(c) || a.test(c)) try { c = JSON.parse(c) } catch (t) { c = c, e.showLog(t) }
                i[l.name] = c
            }), i
        }, e.unit.resolvePathname = function(e, t) {
            t = t || 0;
            var n = e.lastIndexOf("/"),
                i = e.substring(t, n);
            return i.indexOf("/") > -1 ? i.split("/") : [i]
        }, e.unit.relativeUrl = function(e, t) {
            var n = [];
            return t.length >= e.length ? t.forEach(function(t, i) {
                var o = e[i];
                o && t === o || (o && t !== o ? (n.unshift(".."), n.push(t)) : n.push(t))
            }) : e.forEach(function(e, i) {
                var o = t[i];
                o && e === o || (o && e !== o ? (n.unshift(".."), n.push(o)) : n.unshift(".."))
            }), n
        }, e.unit.relativePath = function(t, n) {
            n = n || "pages";
            var i = window.location.href,
                o = i.indexOf(n),
                a = t && t.indexOf("/") > -1 ? t.split("/") : [t],
                r = [];
            if (o < 0) {
                var l = window.location.pathname.toLocaleLowerCase(),
                    c = l.indexOf("www"),
                    s = l.indexOf("src"),
                    u = l.indexOf("dist");
                if (c > -1) {
                    var d = e.unit.resolvePathname(l, c + 4);
                    r = e.unit.relativeUrl(d, a)
                } else if (u > -1) {
                    var f = e.unit.resolvePathname(l, u + 5);
                    r = e.unit.relativeUrl(f, a)
                } else {
                    if (!(s > -1)) return 0 == t.indexOf("/") ? t.replace("/", "") : t;
                    var h = e.unit.resolvePathname(l, s + 4);
                    r = e.unit.relativeUrl(h, a)
                }
            } else {
                var p = e.unit.resolvePathname(i, o);
                r = e.unit.relativeUrl(p, a)
            }
            return r.join("/")
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.history = function() {
            var i = [],
                o = {};
            o.get = function(t, n) { if (void 0 === t) return i; var o = n || "name" || "pid"; return e.array.get(i, t, o) }, o.getLast = function(e) {
                var t = i.length - 1,
                    n = i[t] || {};
                return e ? n[e] : n
            }, o.getPrev = function(e) {
                var t = i.length - 2,
                    n = i[t] || {};
                return e ? n[e] : n
            }, o.getParams = function(e) {
                var t = this.getLast(),
                    n = {};
                switch (e) {
                    case "page":
                        n = this.getPageParam() || n;
                        break;
                    case "part":
                    case "component":
                        n = this.getComponentParam() || n;
                        break;
                    case "url":
                        n = t.param || bui.getUrlParams();
                        break;
                    default:
                        n = this.getComponentParam(e) || this.getPageParam(e) || t.param || bui.getUrlParams()
                }
                return n
            }, o.setComponent = function(e) { return this.getLast().component[e.id] = e, e }, o.getComponentParam = function(e) {
                var t = this.getLast(),
                    n = e || t.currentComponent;
                return n && t.component[n] && t.component[n].param || null
            }, o.getComponent = function(t, n) {
                if (void 0 === t) return void e.showLog("必须传component id才能获取实例");
                n = n || "exports";
                var i = this.getLast();
                return i.component[t] && i.component[t][n] || null
            }, o.getParentComponent = function() { var e = this.getComponentParam(); return this.getComponent(e.parentId) || this.getLast("exports") }, o.getParentParams = function() { var e = this.getComponentParam(); return this.getParams(e.parentId) || this.getLast("param") || null }, o.getPage = function(t, n) {
                if (void 0 === t) return void e.showLog("必须传page id 或者 模块名才能获取实例");
                n = n || "exports";
                var i = this.getLast(),
                    o = null,
                    a = i.page;
                if (a.hasOwnProperty(t)) o = a[t] && a[t][n] || {};
                else if (t)
                    for (var r = Object.keys(a), l = 0; l < r.length; l++) { var c = a[r[l]] || {}; if (c.name === t) return c[n] } else {
                        var s = i.currentPage;
                        o = a[s] && a[s][n] || {}
                    }
                return o
            }, o.getPageDialog = function(t) { if (void 0 === t) return void e.showLog("必须传page id才能获取对话框信息"); var n = this.getLast(); return n.page[t] && n.page[t].dialog || null }, o.setPage = function(e) { var n = this.getLast(); return "object" !== (void 0 === e ? "undefined" : t(e)) ? e : e && e.hasOwnProperty("id") ? (n.page[e.id] = e, e) : void 0 }, o.getPageParam = function(e) {
                var t = this.getLast(),
                    n = e || t.currentPage;
                return n && t.page[n] && t.page[n].param || null
            }, o.add = function(t) {
                var o = n.extend(!0, { id: "", name: "", url: "", replace: !1, syncHistory: !0, param: {}, part: {}, page: {}, toggle: null, effect: "push" }, t),
                    a = i;
                if (t.toggle) {
                    var r = n.extend(!0, {}, o, t);
                    o.toggle = null, a.push(r)
                } else a.push(o);
                var l = window.location.origin + window.location.pathname + "#" + o.name,
                    c = e.setUrlParams(l, o.param);
                return o.syncHistory && "pushState" in window.history && window.history.pushState(o, null, c), a
            }, o.replace = function(t) {
                var t = n.extend(!0, { id: "", name: "", url: "", replace: !1, syncHistory: !0, param: {}, part: {}, page: {}, toggle: null, effect: "push" }, opts),
                    o = i,
                    a = o.length - 1,
                    r = window.location.origin + window.location.pathname + "#" + t.name,
                    l = e.setUrlParams(r, t.param);
                if (a > -1) {
                    if (opts.toggle) {
                        var c = n.extend(!0, {}, t, opts);
                        t.toggle = null, o.splice(a, 1, c)
                    } else o.splice(a, 1, t);
                    t.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, l)
                }
                return o
            }, o.refresh = function() {
                if (e.hasRouter) {
                    var t = o.getLast(),
                        i = loader.get(t.name);
                    loader.import(t.url, function(o) { n("#" + t.id).html(o), e.config.init.auto && e.init(), router.config.needView && loader.views(), i.loaded(), router.config.needComponent && loader.components() })
                } else window.location.reload(!0)
            }, o.removeNext = function(t) {
                var n = i,
                    o = t.index;
                if (parseInt(o) < 0) return e.showLog("index 必须大于或者等于0"), n;
                var a = n.length - o;
                n.splice(o, a);
                var r = this.getLast(),
                    l = window.location.origin + window.location.pathname + "#" + r.name,
                    c = e.setUrlParams(l, r.param);
                return t.syncHistory && "replaceState" in window.history && window.history.replaceState(r.param, null, c), n
            }, o.removeLast = function(e) {
                var t = i,
                    n = t.length - 1;
                return this.removeNext({ index: n, syncHistory: !1 !== e })
            }, o.check = function(t) { var n = i; return e.array.compare(n, t, "name") || e.array.compare(n, t, "url") || e.array.compare(n, t, "id") }, o.checkComponent = function(t) {
                var n = this.getLast(),
                    i = Object.keys(n.component);
                return e.array.compare(i, t)
            }, o.checkPage = function(e, t) {
                t = t || "id";
                for (var n = this.getLast(), i = Object.keys(n.page), o = 0; o < i.length; o++) {
                    var a = i[o],
                        r = n.page[a];
                    if (r.name === e || r.id === e) return !0
                }
                return !1
            }, o.epmty = function(e) { return i = [] };
            var a = function(t) {
                t = t && t.replace(window.location.origin, "") || window.location.pathname;
                var n = t.indexOf(".html"),
                    i = t.indexOf("?"),
                    o = "",
                    a = "",
                    r = "",
                    l = null,
                    c = loader.map().modules;
                if (i > -1) {
                    var s = t.substr(i + 1);
                    l = e.unit.keyStringToObject(s, !0)
                }
                return n > -1 ? (o = 0 == t.indexOf("/") ? t.substr(1, n - 1) : t.substr(0, n - 1), a = o + ".html", r = o + ".js") : (o = t, a = c[o] && c[o].template || "", r = c[o] && c[o].script || ""), { pid: o, name: o, url: a, src: r, param: l }
            };
            return function() {
                var t = a(window.location.href),
                    o = e.guid();
                n(document).ready(function() { document.body.setAttribute("id", o) }), i.push({ id: e.guid(), pid: t.pid, name: t.pid, url: t.url, src: t.src, param: t.param, page: {}, component: {} })
            }(), o
        }()
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.router = function(i) {
            function o(t) {
                if (we.store = t.store || null, delete t.store, t = n.extend(!0, {}, U, e.config.router, t), U = we.config = t, be = !0, "pages/main/main.html" === t.indexModule.template && "pages/main/main.js" === t.indexModule.script || (pe = loader.map(t.indexModule)), ne && "effect" in t && ge.forEach(function(e, n) { e.effect = t.effect }), !t.id) return e.showLog("id 不能为空", "bui.router.init"), !1;
                if (z = e.objId(t.id), q = bui.mask({ appendTo: z, opacity: 0, autoClose: !1 }), V = e.loading({ display: "block", width: 30, height: 30, opacity: 0 }), _ = z.children(".bui-router-main"), Z = t.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", G = t.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", !_.length) {
                    var i = L(t);
                    z.html(i), _ = z.children(".bui-router-main")
                }
                return (t.width > 0 || String(t.width).indexOf("%") > -1) && _.width(t.width), (t.height > 0 || String(t.height).indexOf("%") > -1) && _.height(t.height), X || l(t), R.call(this, "init", { target: z[0] }), we
            }

            function a(e) { var e = e || {}; return e.width = e.width || U.width, e.height = e.height || U.height, window.viewport = bui.viewport(), Z = e.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", G = e.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", _.css({ width: Z, height: G }), R.call(this, "resize", { target: ge[ge.length - 1] }), this }

            function r() {
                var e = me.get("hasCache", 0);
                Boolean(e) && U.reloadCache ? fe.load() : s(), ue = !0
            }

            function l(t) {
                return r(), window.addEventListener("beforeunload", function(e) { U.reloadCache && fe.save(), R.call(Y, "beforeunload", { target: ge[ge.length - 1] }) }), t.hash ? (window.addEventListener("hashchange", function(t) {
                    var n = u(),
                        i = "" == n.pid || "undefined" == n.pid ? "main" : n.pid,
                        o = e.array.index(ge, i, "pid");
                    o > -1 ? (v({ index: -(ge.length - o - 1) }), R.call(Y, "popstate", { type: "back", prevTarget: ge[o - 1], target: ge[o] })) : (f({ url: i, param: n.param, replace: !0 }), R.call(Y, "popstate", { type: "load", prevTarget: ge[ge.length - 2], target: ge[ge.length - 1] }))
                }), this) : (U.syncHistory && "pushState" in window.history && window.addEventListener("popstate", function(t) {
                    var n = u(),
                        i = "" == n.pid ? U.indexModule.moduleName : n.pid,
                        o = b(i);
                    e.array.index(ge, i, "pid") > -1 ? (v({ index: o, param: n.param }), R.call(Y, "popstate", { type: "back", prevTarget: ge[o - 1], target: ge[o] })) : (f({ url: i, param: n.param }), R.call(Y, "popstate", { type: "load", prevTarget: ge[ge.length - 2], target: ge[ge.length - 1] }))
                }), this)
            }

            function c(e) {
                var t = window.location.href,
                    n = t.indexOf(U.hashPrefix),
                    n = n > -1 ? n : 0,
                    i = n > -1 ? t.substr(0, n) : t;
                f({ url: U.errorPage || i, param: { error: e } }), R.call(we, "error", { target: e, status: 404 })
            }

            function s(t) {
                try {
                    var n = u();
                    if (n.pid) {
                        if (n.pid.indexOf("http://") > -1 || n.pid.indexOf("https://") > -1) return void f({ url: n.pid, param: n.param, iframe: !0 });
                        f({ url: n.pid, param: n.param })
                    } else f({ url: U.indexModule.moduleName, param: n.param || {} })
                } catch (t) { e.showLog(t, "bui.router.loadUrl") }
            }

            function u(e) {
                function t(t, n) {
                    for (var i = t && t.substr(n + 1), o = i && i.split("&"), a = 0; a < o.length; a++) {
                        var r = e ? decodeURIComponent(o[a].split("=")[1]) : o[a].split("=")[1];
                        u[o[a].split("=")[0]] = r
                    }
                }
                var n = window.location.hash || window.location.search,
                    i = window.location.search,
                    o = i && i.indexOf("?"),
                    e = 0 != e,
                    a = n && n.indexOf("?"),
                    r = a > -1 ? n && n.substr(1, a - 1) : window.location.hash.substr(1),
                    l = r && r.indexOf(U.pageSuffix),
                    c = l > -1 ? r.substr(0, l) : r,
                    s = l > -1 ? r : r + U.pageSuffix,
                    u = {};
                return a > -1 && (t(i, o), t(n, a)), { pid: c, url: s, param: u }
            }

            function d(t) {
                var i = n.Deferred(),
                    o = function(n, o) {
                        return y(n.url, function(i) {
                            var a = e.guid(),
                                r = g(n.url),
                                l = r.pid,
                                c = (P({ id: a, content: i, pid: l }), []);
                            fe.add(l, { id: a, pid: l, template: i }), c.push(l), n.style && "array" === e.typeof(n.style) ? n.style.forEach(function(e, t) { c.push(e) }) : n.style && "string" === e.typeof(n.style) && c.push(n.style), n.script && "array" === e.typeof(n.script) ? n.script.forEach(function(e, t) { c.push(e) }) : n.script && "string" === e.typeof(n.script) && c.push(n.script), loader.import(c, function() { R.call(we, "preloadafter", { prevTarget: null, target: null }), o && o(t) }, function() { R.call(we, "preloadafter", { prevTarget: null, target: null }), o && o(t) })
                        }, function(t) { e.showLog(n.url + "请求失败"), i.reject(n.url) }), i.promise()
                    };
                return t && "object" === e.typeof(t) ? "url" in t && o(t, function() { i.resolve(t) }) : t && "array" === e.typeof(t) && t.forEach(function(e, n) { n == t.length - 1 ? "url" in e && o(e, function() { i.resolve(t) }) : "url" in e && o(e) }), i
            }

            function f(i) {
                function o(n, i, o, a) { if (q && q.hide(), v.progress && V && V.hide(), re.removeLast(), m.reject(n), "object" === (void 0 === i ? "undefined" : t(i))) return e.showLog("找不到页面" + n, "bui.router.load"), U.errorPage && f(n), !1 }

                function a(t) {
                    te || L in ae ? (B.exports = ae[L], u({ pid: L }), se && l(), t && t(), U.needComponent && loader.components()) : (loader.checkLoad(L) ? (u({ pid: L }), U.needComponent && loader.components(), t && t()) : loader.require(L, function(n) {
                        try {
                            if (v.firstAnimate && v.progress && V && V.hide(), ae[L] = n || null, B.exports = n, m.resolve(n), Q || v.firstAnimate || v.replace) {
                                var i = loader.get(L);
                                i && i.show && i.show({ type: "firstload", target: B })
                            }
                            t && t(), v.loaded && v.loaded({ prevTarget: b, target: B }), v.callback && v.callback({ prevTarget: b, target: B }), U.needComponent && loader.components()
                        } catch (t) { e.showLog(t, "bui.router.load"), m.reject() }
                    }), R.call(we, "complete", { prevTarget: b, target: B }))
                }

                function r() {
                    W = e.objId(F.id);
                    var t = W && W.find(".bui-page");
                    t && t.length && v.autoInit && e.init({ id: t, height: G })
                }

                function l(t) {
                    W = e.objId(k), O(), j();
                    try {
                        if (Q || te || v.replace || v.part) {
                            !v.firstAnimate && v.progress && V && V.hide(), t && t(), q && q.hide(), W && W.css("zIndex", 5);
                            var n = re.getLast(),
                                i = "pageshow-" + n.pid;
                            R.call(we, "pageshow", { type: "load", target: re.getLast() }), R.call(we, i, { type: "load", target: re.getLast() })
                        } else J && J.hide(), K && K.show(function() {
                            !v.firstAnimate && v.progress && V && V.hide(), t && t(), W && W.css("zIndex", 5), q && q.hide();
                            var e = ge[ge.length - 2] || {},
                                n = re.getLast(),
                                i = loader.get(n.pid),
                                o = e && e.pid && loader.get(e.pid) || null,
                                a = "pageshow-" + n.pid,
                                r = "pagehide-" + e.pid;
                            R.call(we, r, { type: "load", target: ge[ge.length - 2] }), R.call(we, a, { type: "load", target: re.getLast() }), R.call(we, "pagehide", { type: "load", target: ge[ge.length - 2] }), R.call(we, "pageshow", { type: "load", target: re.getLast() }), o && o.hide && o.hide({ type: "load", target: ge[ge.length - 2] }), i && i.show && i.show({ type: "load", target: re.getLast() })
                        })
                    } catch (t) { e.showLog(t, "bui.router.doAnimate") }
                }

                function s(t) {
                    var n = "";
                    if (we.store && (t = we.store.compileHtml(t)), v.part) n = E({ content: t }), v.id ? T.html(n) : e.showLog("id 不能为空", "router.loadPart");
                    else if (v.replace) {
                        var i = re.getLast();
                        T = ge.length ? e.objId(i.id) : _, i.pid = L, i.url = N, i.param = w;
                        e.array.index(ge, L, "pid");
                        n = L in le ? fe.get(L, "template") : E({ content: t }), T.html(n).attr("data-page", L)
                    } else te || (n = P({ id: k, content: t, pid: L }), _ && _.attr("data-main", k).append(n));
                    return U.needView && loader.views({ compiled: function() { we.store && !we.store.config.isPublic && we.store.config.needCompile && we.store.compile("#" + k) } }), !we.store || U.needView || we.store.config.isPublic || we.store.config.needCompile && we.store.compile("#" + k), n
                }

                function u(e) {
                    var t = e || re.getLast(),
                        n = ve[t.pid] && ve[t.pid] || {},
                        i = n.loaded,
                        o = i && i.apply(n, n.dependExports) || n.exports;
                    ae[t.pid] = o || null, n.exports = o, te && R.call(we, "refresh", { prevTarget: b, target: t }), q && q.hide(), U.progress && V && V.hide(), m.resolve(o), te = !1, Q = !1
                }

                function d() {
                    var e = ge[ge.length - 2] || null,
                        t = re.getLast();
                    Q && !v.part && (R.call(we, "firstload", { prevTarget: e, target: t }), Q = !1), v.part ? R.call(we, "loadpart", { prevTarget: e, target: t }) : R.call(we, "load", { prevTarget: e, target: t })
                }

                function f(e) { c(e) }
                var h = { id: "", url: "", param: {}, effect: "", command: "html", path: U.path, firstAnimate: U.firstAnimate, progress: U.progress, reload: U.reload, autoInit: U.autoInit, needView: U.needView, needComponent: U.needComponent, replace: !1, iframe: !1, decode: !1, part: !1, cache: U.cache, callback: null, beforeLoad: U.beforeLoad, loaded: U.loaded },
                    v = n.extend(!0, {}, h, i),
                    m = n.Deferred(),
                    b = re.getLast() || null;
                ge[ge.length - 2];
                v.url.indexOf("./") > -1 && (v.url = p(v.url, b)), v.path && (v.path = "/" == v.path[v.path.length - 1] ? v.path : v.path + "/"), v.url = v.url in ve || v.iframe || v.url.indexOf("http:") > -1 ? v.url : v.path + v.url, document.activeElement.blur();
                var w = null,
                    x = {};
                v.id = (v.id && v.id.indexOf("#") > -1 ? v.id.substr(1) : v.id) || "";
                var k = v.replace ? b.id : v.id || e.guid(),
                    T = e.objId(k);
                if (!v.url) return e.showLog("url 不能为空", "bui.router.load"), m.promise();
                if (v.url = v.decode ? decodeURIComponent(v.url) : v.url, v.url.indexOf("tel:") >= 0 || v.url.indexOf("mailto:") >= 0 || v.url.indexOf("sms:") >= 0) return e.unit.openExtral(v.url), m.promise();
                if (v.url && v.url.indexOf("?") > -1) {
                    var I = v.url.split("?");
                    x = e.unit.keyStringToObject(I[1]), v.url = I[0]
                }
                w = n.extend(!0, {}, x, v.param), "undefined" == v.url && (v.url = "main"), v.iframe = Boolean(v.iframe);
                var C = g(v.url),
                    L = C.pid,
                    N = v.iframe ? v.url : C.url,
                    B = { id: k, pid: L, name: L, url: "function" == typeof N ? v.url : N, replace: v.replace, param: w, component: {}, page: {}, toggle: null, exports: {}, effect: i.effect || U.effect, syncHistory: U.syncHistory };
                ie = v.part ? b : B, q && q.show(), v.progress && V && V.show(), loader.map({ moduleName: L, id: k });
                loader.get(B.pid);
                if (ge.length && v.effect) {
                    var D = ge.length - 1;
                    ge[D].effect = v.effect
                }!te && !v.part && !v.replace && re.add(B), v.replace && re.replace(B);
                var F = B,
                    M = "function" == typeof v.beforeLoad ? v.beforeLoad.call(we, { prevTarget: b, target: B }) : v.beforeLoad;
                if (R.call(we, "loadbefore", { prevTarget: b, target: B }), R.call(we, "beforeload", { prevTarget: b, target: B }), !1 === M) return Q = !1, this;
                if (v.part && (e.history.setComponent({ id: k, pid: L, url: N, param: w }), F.currentComponent = k, ge.splice(ge.length - 1, 1, F)), v.part || (de = B), L in le) ! function(e) { s(fe.get(e.pid, "template")), e.part ? u(e) : (r(), !te && l(function() { e.progress && V && V.hide() }), u(e)) }({ pid: L, progress: v.progress, part: v.part }), R.call(we, "complete", { prevTarget: b, target: B }), v.loaded && v.loaded({ prevTarget: b, target: B }), v.callback && v.callback({ prevTarget: b, target: B }), U.needComponent && loader.components();
                else {
                    if (v.iframe) return function(e) {
                        var t = S({ id: e.id, pid: e.pid, url: e.url, param: e.param });
                        _ && _.attr("data-main", e.id).append(t), l(function() { v.progress && V && V.hide() })
                    }({ id: k, pid: L, url: v.url, param: w }), m.promise();
                    if (v.part) return function() { y(N, function(t, n, i) { e.objId(k)[v.command](t), a(d), v.cache && fe.add(L, { id: k, pid: L, template: t }), q && q.hide(), v.progress && V && V.hide() }, function(e, t, n) { o(N, e, t, n), R.call(we, "loadfail", e, t, n) }) }(), m.promise();
                    ! function() { y(N, function(e, n, i) { return "object" === (void 0 === e ? "undefined" : t(e)) ? (o(N, e, n, i), !1) : (s(e), v.cache && fe.add(L, { id: k, pid: L, template: e }), r(), v.firstAnimate ? void l(function() { a(d), v.progress && V && V.hide(), he.add(L, { id: k, pid: L, param: w }) }) : (l(function() { v.progress && V && V.hide() }), a(d), he.add(L, { id: k, pid: L, param: w }), void 0)) }, function(e, t, n) { o(N, e, t, n), R.call(we, "loadfail", e, t, n) }) }()
                }
                return m.promise()
            }

            function h(e) { var t = { id: "", url: "", command: "html", param: {}, part: !0 }; return f(n.extend(!0, {}, t, e)).promise() }

            function p(e, t) {
                var n = e,
                    i = t.url.lastIndexOf("/"),
                    o = t.url.substr(0, i);
                return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, function(e) { var t = o.lastIndexOf("/"); return o = o.substr(0, t), "" }), n = o ? o + "/" + e : e) : e.indexOf("./") > -1 && (n = o + "/" + e.replace(/\.\//g, "")), n
            }

            function g(e) {
                var t = "",
                    n = e;
                pe = loader.map(), ve = pe.modules;
                var i = n.indexOf(U.pageSuffix);
                return i > -1 ? (t = n, n = t.substr(0, i), ve.hasOwnProperty(n) && (t = ve[n] && ve[n].template || t || "")) : (n = n, t = ve[n] && ve[n].template || n + U.pageSuffix || ""), { pid: n, url: t }
            }

            function v(t) {
                var i = this,
                    o = {};
                "function" == typeof t ? o.callback = t : o = t || {};
                var a = n.extend(!0, { index: -1, name: "", beforeBack: U.beforeBack, callback: null, loaded: U.loaded }, o),
                    r = parseInt(a.index),
                    l = ge.length;
                if (pe = loader.map(), ve = pe.modules, r > 0) return void e.showLog("index 参数只能是负数", "bui.router.back");
                var c = re.getLast(),
                    s = l - 1,
                    u = c.toggle;
                if (u) return u.hide(), void O();
                var d = "function" == typeof a.beforeBack ? a.beforeBack.call(we, { prevTarget: null, target: c }) : o.beforeBack;
                R.call(we, "beforeback", { prevTarget: null, target: c });
                var f = loader.get(c.pid);
                return f && f.beforeDestroy && f.beforeDestroy(), !1 === d ? this : (a.name && (r = b(a.name)), Math.abs(r) > s && (r = -s), l > 1 && ee && (r < -1 && j(r), ee = !1, o.effect && (J.option({ effect: o.effect }), K.option({ effect: o.effect })), J && J.show(), K && K.hide(function() {
                    var t = l + r;
                    C(t), re.removeNext(t), j();
                    var n = O(),
                        o = n.pid;
                    e.objId(n.id).css("zIndex", 5),
                        function() {
                            var e = {};
                            e = ae[o] || {};
                            var t = loader.get(n.pid);
                            a.callback && a.callback.call(i, e, n), a.backed && a.backed.call(we, { prevTarget: c, target: n }), R.call(we, "back", { prevTarget: c, target: n }), de = n;
                            var r = "pageshow-" + n.pid,
                                l = "pagehide-" + c.pid;
                            f && f.hide && f.hide({ type: "back", target: c }), t && t.show && t.show({ type: "back", target: n }), R.call(we, l, { type: "back", target: c }), R.call(we, r, { type: "back", target: n }), R.call(we, "pageshow", { type: "back", target: n }), R.call(we, "pagehide", { type: "back", target: c }), f && f.destroyed && f.destroyed(), ee = !0
                        }()
                })), this)
            }

            function m(t) { return "string" == typeof t && "main" !== t ? (loader.destroy(t), fe.del(t), t in ae && delete ae[t]) : e.showLog("参数只能是字符串"), this }

            function b(t) {
                var n, i = e.array.indexs(ge, t, "pid"),
                    o = i.length;
                if (o) {
                    var a = -(ge.length - i[o - 1] - 1);
                    n = 0 == a ? -1 : a
                } else n = -1;
                return n
            }

            function y(t, n, i) {
                if ("string" == typeof t) {
                    var o = null;
                    t.indexOf(".js") > -1 && (o = loader.get(de.pid)) && o.beforeCreate && o.beforeCreate(), loader.importHtml(t, function(e, t, i) { "" === e && R.call(we, "fail", e, t, i), n && n(e, t, i), R.call(we, "success", e, t, i), o && o.created && o.created() }, function(e, t, n) { i && i(e, t, n), R.call(we, "fail", e, t, n) })
                } else if ("function" == typeof t) {
                    var a = t && t();
                    n && n(a, 200, {}), R.call(we, "success", a, 200, {})
                } else e.showLog("url 不能为空", "bui.router.requestUrl")
            }

            function w() {
                var t = ge.length - 1,
                    n = ge[t],
                    i = ge.length > 1 ? ge[ge.length - 2] : null;
                return e.history.refresh(), R.call(we, "refresh", { prevTarget: i, target: n }), this
            }

            function x(e) { return e = e || {}, f({ url: e.url || "", param: e.param || {}, replace: !0 }), this }

            function k() { return re.getLast().param }

            function T(t) { return e.history.getComponentParam(t) }

            function I(e) { var t; return e && (t = e in ae), t }

            function C(e) { _.children().each(function(t, i) { t >= e && n(i).remove() }) }

            function O() {
                var t = re.getLast(),
                    n = t.id || "",
                    i = t.effect || U.effect;
                return n && (R.call(we, "beforepageshow", { target: t }), K = null, K = e.toggle({ id: document.getElementById(n), effect: oe[i] && oe[i].inRight || "" }), _ && _.attr("data-main", n)), t
            }

            function j(t) {
                t = t || -1;
                var n = ge.length + t - 1,
                    i = ge[n],
                    o = i && i.id || "",
                    a = i && i.effect || U.effect;
                return o && (R.call(we, "beforepagehide", { target: i }), J = null, J = e.toggle({ id: document.getElementById(o), effect: oe[a] && oe[a].inLeft || "" })), i
            }

            function L(e) {
                e = e || {};
                var t = "";
                String(Z).indexOf("%"), String(G).indexOf("%");
                return t += '<div class="bui-router-main">', t += "</div>"
            }

            function S(t) {
                var n = t.param ? e.setUrlParams(t.url, t.param) : t.url,
                    i = "",
                    o = e.platform.isIos() ? 'scrolling="no"' : "";
                return i += '<div id="' + t.id + '" class="bui-router-item bui-router-fixiframe" data-page="' + t.pid + '">', i += '<iframe class="bui-router-iframe" src="' + n + '" ' + o + "></iframe>", i += "</div>"
            }

            function P(e) { var t = ""; return t += '<div id="' + e.id + '" class="bui-router-item" data-page="' + e.pid + '">', t += e.content || "", t += "</div>" }

            function E(e) { var t = ""; return t += e.content }

            function N(t, n) { return ne = !0, e.option.call(we, t, n) }

            function B(t, n) { return e.on.apply(we, arguments), this }

            function D(t, n) { return e.off.apply(we, arguments), this }

            function R(t) { we.self = this == window || this == we ? null : this, e.trigger.apply(we, arguments) }

            function F() { return re.getLast() }

            function M() { var e = re.getLast(); return document.getElementById(e.id) }

            function A(e) { return re.getLast().id }

            function H(i) {
                var o = re.getLast(),
                    a = e.objId(o.id),
                    r = "object" === (void 0 === i ? "undefined" : t(i)) ? n(i) : a.find(".bui-page");
                return r.length && e.init({ id: r, height: G }), this
            }
            var z, V, q, $ = { id: "", progress: !1, syncHistory: !0, autoInit: !0, firstAnimate: !1, path: "", indexModule: { moduleName: "main", template: "pages/main/main.html", script: "pages/main/main.js" }, errorPage: "", hash: !1, cache: !0, reloadCache: !1, reload: !1, needNative: !1, needView: !1, needComponent: !0, useScroll: ".bui-scroll-x", beforeBack: null, beforeLoad: null, loaded: null, store: null, width: 0, height: 0, async: !0, effect: "push", hashPrefix: "#", scriptSuffix: ".js", pageSuffix: ".html" },
                U = n.extend({}, $, e.config.router, i),
                W = null,
                Y = this,
                _ = null,
                J = null,
                K = null,
                X = !1,
                Z = "",
                G = "",
                Q = !0,
                ee = !0,
                te = !1,
                ne = !1,
                ie = null,
                oe = { none: { inRight: "showIn", inLeft: "showIn" }, fadein: { inRight: "fadeIn", inLeft: "fadeIn" }, fadeinslide: { inRight: "fadeInRight", inLeft: "fadeInLeft" }, slide: { inRight: "slideInRight", inLeft: "slideInLeft" }, push: { inRight: "pushInRight", inLeft: "pushInLeft" }, zoom: { inRight: "zoomIn", inLeft: "zoomIn" }, cover: { inRight: "coverInRight", inLeft: "coverInLeft" }, zoomslide: { inRight: "zoomSlideInRight", inLeft: "zoomSlideInLeft" }, fadeinslideback: { inRight: "fadeInLeft", inLeft: "fadeInRight" }, slideback: { inRight: "slideInLeft", inLeft: "slideInRight" }, pushback: { inRight: "pushInLeft", inLeft: "pushInRight" }, coverback: { inRight: "coverInLeft", inLeft: "coverInRight" }, zoomslideback: { inRight: "zoomSlideInLeft", inLeft: "zoomSlideInRight" } },
                ae = {},
                re = {},
                le = {},
                ce = {},
                se = !1,
                ue = !1,
                de = {},
                fe = {},
                he = {},
                pe = loader.map(U.indexModule),
                ge = e.history.epmty(),
                ve = pe.modules,
                me = e.storage({ local: !1 }),
                be = !1;
            e.hasRouter = !0, re.get = function() { return ge }, re.add = function(t) {
                if (t = t || {}, t.toggle) {
                    var i = n.extend(!0, {}, t);
                    t.toggle = null, ge.push(i)
                } else ge.push(t);
                var o = window.location.origin + window.location.pathname + "#" + t.pid,
                    a = e.setUrlParams(o, t.param);
                return Q ? void(U.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, a)) : (U.syncHistory && "pushState" in window.history && window.history.pushState(t, null, a), ge)
            }, re.prepend = function(t) {
                t = t || {};
                var n = window.location.origin + window.location.pathname + "#" + t.pid;
                e.setUrlParams(n, t.param);
                return ge.unshift(t), ge
            }, re.replace = function(t) {
                t = t || {};
                var n = ge.length - 1,
                    i = window.location.origin + window.location.pathname + "#" + t.pid,
                    o = e.setUrlParams(i, t.param);
                return n > -1 && (ge.splice(n, 1, t), U.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, o)), ge
            }, re.getLast = function(e) {
                var t = ge.length - 1,
                    n = ge[t] || {};
                return e ? n[e] : n
            }, re.removeNext = function(t) {
                var n = ge.length - t;
                ge.splice(t, n);
                var i = re.getLast(),
                    o = window.location.origin + window.location.pathname + "#" + i.pid,
                    a = e.setUrlParams(o, i.param);
                U.syncHistory && "replaceState" in window.history && window.history.replaceState(i.param, null, a)
            }, re.removeLast = function() {
                var e = ge.length - 1;
                re.removeNext(e)
            }, re.checkLoad = function(t) { return e.array.compare(ge, t, "pid") || e.array.compare(ge, t, "url") || e.array.compare(ge, t, "id") }, fe.add = function(e, t) { return le[e] = t || {}, le[e] }, fe.del = function(e) { delete le[e] }, fe.get = function(e, t) { if (t) { return (le[e] || {})[t] } return le[e] }, fe.save = function() {
                if (ge.length > 1) {
                    var e = z.html();
                    me.set("cacheHtml", e), me.set("cacheHistory", ge), me.set("hasCache", "true")
                }
            }, fe.load = function() {
                var t = me.get("cacheHtml", 0),
                    n = me.get("cacheHistory", 0),
                    i = [];
                if (n.length > 1) {
                    z.html(t), _ = z.children(".bui-router-main");
                    v({ name: u().pid });
                    try {
                        n.forEach(function(e, t) {
                            var n = "string" == typeof e ? JSON.parse(e) : e;
                            i.push(n)
                        });
                        var o = i[i.length - 1];
                        de = o, loader.require(o.pid, function(e) { ae[o.pid] = e || null }), B("back", function(e) { loader.require(e.target.pid, function(t) { ae[e.target.pid] = t || null }) })
                    } catch (t) { e.showLog(t) }
                    ge = i, O(), j(), Q = !1, se = !0, fe.clear()
                }
            }, fe.clear = function() { me.remove("cacheHistory"), me.remove("cacheHtml"), me.remove("hasCache") }, he.add = function(e, t) { return ce[e] = t || {}, ce[e] }, he.get = function(e, t) { if (t) { return (ce[e] || {})[t] } return ce[e] };
            var ye = function(t) {
                    var n = re.getLast(),
                        i = document.getElementById(n.id) || document;
                    return e.obj(t, i)
                },
                we = { init: o, option: N, config: U, data: {}, on: B, off: D, trigger: R, load: f, resize: a, destroy: m, loadPart: h, replace: x, refresh: w, back: v, isLoad: I, $: ye, currentId: A, currentPage: M, currentModule: F, getPageParams: k, getPartParams: T, getHistory: re.get, preload: d, initScroll: H, history: { get: re.get, check: re.checkLoad, getLast: re.getLast, add: re.add, removeLast: re.removeLast, replace: re.replace } };
            return we
        }
    }(window.bui || {}, window.libs),
    function(e, o) {
        var a = function() {
            function a(t) {
                n(this, a), this._default = { log: !1, hasLife: !0, onBeforeInit: null, onInited: null }, this._plugin = t || { name: "", depend: null, config: null, param: null, callback: null };
                var i = e.config.hasOwnProperty(this._plugin.name) ? e.config[this._plugin.name] : null;
                this.config = o.extend(!0, {}, this._default, i, this._plugin.config, this._plugin.param), this.initStatus = !1, this.reinitStatus = !1, this.widgets = Object.create(null), this.init()
            }
            return i(a, [{ key: "widget", value: function(e) { return e && e in this.widgets ? this.widgets[e] : this.widgets } }, {
                key: "init",
                value: function(e) {
                    var t = this,
                        n = e || null;
                    t.config = o.extend(!0, this.config, n);
                    var i = t.config,
                        a = i.hasLife && i.onBeforeInit && i.onBeforeInit.call(t, i);
                    return i.log && console.log(t._plugin.name + " before init"), !1 === a ? t : (t._plugin.callback && t._plugin.callback.call(t, i), i.log && console.log(t._plugin.name + " init"), i.hasLife && i.onInited && i.onInited.call(t, i), i.log && console.log(t._plugin.name + " after inited"), this.initStatus = !0, t)
                }
            }, { key: "reinit", value: function() { return this.destroy(), this.init(), this.config.log && console.log(this._plugin.name + " reinit"), this } }, { key: "destroy", value: function(e) { return this.beforeDestroy && this.beforeDestroy(), this.beforeDestroy = null, this.widgets = {}, this.off(), this.initStatus = !1, e && e.call(this), this.config.log && console.log(this._plugin.name + " destroyed"), this } }, { key: "prefix", value: function(t) { return e.config.classNamePrefix + t } }, { key: "showLog", value: function(n, i) { i = i || ""; var o = ""; return "object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? o = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (o = n), e.log && console.error(i + " " + o), e.trace && console.trace && console.trace(), this } }, {
                key: "option",
                value: function(t, n) {
                    if ("object" !== e.typeof(t) && void 0 === n) return "string" == typeof t ? this.config[t] : this.config;
                    var i = this;
                    if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;
                    if (t && "object" === e.typeof(t)) { var a = o.extend(this.config, t); return i && i.init(a) }
                    if (this.config.hasOwnProperty(t)) {
                        var r = {};
                        r[t] = n;
                        var l = o.extend(this.config, r);
                        return i && i.init(l)
                    }
                    return this
                }
            }, { key: "emitter", get: function() { return e.emitter() } }, { key: "on", get: function() { return this.emitter.on } }, { key: "off", get: function() { return this.emitter.off } }, { key: "trigger", get: function() { return this.emitter.trigger } }]), a
        }();
        e.extend = function(t) {
            var o = function() {
                function o(e) { n(this, o), this.init(e) }
                return i(o, [{ key: "init", value: function(n) { var i = n.name; return this.checkName(i) ? (e[i] = function(e) { return t.param = e, new a(t) }, this) : this } }, { key: "checkName", value: function(t) { return t ? !e.hasOwnProperty(t) || (console.warn("已有相同名为" + t + "的插件或方法,请重新换个名称注册."), !1) : (console.warn("插件名字不能为空"), !1) } }]), o
            }();
            new o(t)
        }
    }(window.bui || {}, window.libs);
    e(function(e) {
        ! function(n, i) {
            var a;
            n.extend({
                name: "page",
                config: (a = { id: "", url: "", param: null, script: "", appendTo: "", className: "bui-dialog-page", effect: "", pageSuffix: ".html", height: 0, width: 0, iframe: !1, openFirst: !0, closeFirst: !1, autoClose: !1, needRemove: !1, useBox: !0, syncHistory: !1, title: "", buttons: null, mask: !1, life: !0, scroll: !1, needView: !1, needComponent: !0, cache: !0, close: !1, autoload: !0, fullscreen: !0 }, o(a, "effect", "fadeInRight"), o(a, "onError", null), o(a, "beforeClose", null), o(a, "closed", null), o(a, "beforeOpen", null), o(a, "opened", null), o(a, "beforeLoad", null), o(a, "loaded", null), a),
                callback: function(o) {
                    function a(e) {
                        var t = loader.map().modules[p.module] || {};
                        if (t.hide && s.life) {
                            var i = n.hasRouter ? n.history.getLast() : {};
                            t.hide({ type: "page", target: i })
                        }
                        "function" == typeof e && e.call(c, t), s.closed && s.closed.call(c, t)
                    }

                    function r(t, i) {
                        var o = n.history.getLast(),
                            a = f[t];
                        if (s.cache && d) return !s.openFirst && h.open(), "function" == typeof i && i.call(c, a.exports), c;
                        if (n.history.setPage({ id: h.config.id, name: t, url: s.url, dialog: h, param: s.param }), "function" == typeof a.loaded) {
                            var r = a.loaded && a.loaded.call(e, a.exports);
                            n.history.setPage({ id: h.config.id, name: t, url: s.url, dialog: h, exports: r, param: s.param });
                            var l = loader.map().modules[t] || {};
                            return l.show && s.life && l.show({ type: "page", target: o }), "function" == typeof i && i.call(c, r), c.compile({ id: h.config.id }), s.opened && s.opened.call(c, r), !s.openFirst && h.open(), this
                        }
                        loader.require(t, function(e) {
                            var a = loader.map().modules[t] || {};
                            n.history.setPage({ id: h.config.id, name: t, url: s.url, dialog: h, exports: e, param: s.param }), a.show && s.life && a.show({ type: "page", target: o }), "function" == typeof i && i.call(c, e), c.compile({ id: h.config.id }), s.opened && s.opened.call(c, e)
                        }), d = !0
                    }

                    function l(e) {
                        var t = loader.map().modules,
                            n = {},
                            i = e.indexOf(s.pageSuffix);
                        return i > -1 ? (n.url = e, n.module = e.substr(0, i)) : (n.url = t[e].template, n.module = e), n
                    }
                    var c = this,
                        s = c.config,
                        u = "body" == c.appendTo ? i : n.obj,
                        d = !1,
                        f = loader.map().modules || {},
                        h = c.widgets.dialog = n.dialog({ autoinit: !1, needRemove: o.needRemove }),
                        p = null;
                    c.init = function(e) {
                        var o = i.extend(!0, {}, c.config, e);
                        if (o.iframe) { var r = n.platform.isIos() ? 'scrolling="no"' : ""; return o.content = '<iframe class="bui-router-iframe" src="' + o.url + '" ' + r + " ></iframe>", h.create(o), o.autoload && h.open(), c }
                        if (o.onClose = function() { n.hasRouter && o.syncHistory && bui.back(), a() }, p = l(o.url), o.script) {
                            var s = o.script.indexOf(".js");
                            p.module = o.script.substr(0, s)
                        }
                        return !1 === (o.beforeLoad && o.beforeLoad.call(c, p)) ? this : (loader.import(p.url, function(e) {
                            if ("object" === (void 0 === e ? "undefined" : t(e))) return void(o.onError && o.onError.call(c, e));
                            o.id ? (h.init(o), u(o.id).html(e)) : (o.content = e, h.create(o)), o.autoload && c.open(), o.loaded && o.loaded.call(c, p)
                        }), c)
                    }, c.compile = function(e) {
                        var t = i.extend(!0, { id: h.config.id, cacheHtml: !1, cache: !1 }, e);
                        t.needView && loader.views(t), t.needComponent && loader.components(t)
                    }, c.toggle = function(e, t) { return c.isOpen() ? c.close(t) : c.open(e), c }, c.isOpen = h.isOpen, c.close = function(e) { return !1 === (o.beforeClose && s.beforeClose.call(c)) ? this : (n.hasRouter && s.syncHistory && n.history.removeLast(s.syncHistory), s.closeFirst ? (h.close(function() { c.trigger("close"), a(e) }), c) : (a(e), h.close(), c.trigger("close"), c)) }, c.remove = function(e) { return h.remove(e), c.trigger("remove"), c }, c.open = function(e) { if (!1 === (s.beforeOpen && s.beforeOpen.call(c))) return this; if (s.iframe) return h.open(e), c; var t = { hide: c.close, show: c.open }; return n.hasRouter && s.syncHistory && n.history.add({ id: h.config.id, name: p.module, url: s.url, replace: !1, param: s.param || {}, part: {}, page: {}, effect: "push", toggle: t, syncHistory: s.syncHistory }), loader.map({ moduleName: p.module, id: h.config.id }), n.history.getLast().currentPage = h.config.id, s.openFirst ? (h.open(function() { c.trigger("open"), r(p.module, e) }), c) : (r(p.module, e), c.trigger("open"), c) }, c.init(s)
                }
            })
        }(window.bui || {}, window.libs)
    });
    ! function(e, n) {
        e.setUrlParams = function(n, i, o) {
            var o = 0 != o,
                i = "object" == (void 0 === i ? "undefined" : t(i)) ? i : {},
                a = e.unit.objectToKeyString(i, o);
            return "" == a ? n : n + "?" + a
        }, e.getUrlParams = function(t) {
            var t = 0 != t,
                n = window.location.href,
                i = n.indexOf("?"),
                o = {};
            if (i > -1) {
                var a = n.substr(i + 1);
                o = e.unit.keyStringToObject(a, t)
            }
            return o
        }, e.getUrlParam = function(e) {
            var t = window.location.href,
                n = new RegExp("(^|&|.)" + e + "=([^&]*)(&|$)", "i"),
                i = t.substr(1).match(n);
            return null != i ? decodeURIComponent(i[2]) : null
        }, e.typeof = function(e) { var t = Object.prototype.toString.call(e).slice(8, -1); return t = t.toLowerCase() }, e.setting = function(n, i) { return "string" == typeof n && "object" === (void 0 === i ? "undefined" : t(i)) ? e.config[n] = i : "string" == typeof n && void 0 === i ? e.config[n] : e.config }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.array = {}, e.array.index = e.inArray = function(e, t, n) {
            var i, o;
            e instanceof Array ? (i = e || [], o = t) : (i = t || [], o = e);
            for (var a = 0; a < i.length; a++) { var r = i[a]; if ((r && r[n] || r) === o) return parseInt(a) }
            return -1
        }, e.array.compare = e.compareArray = function(e, t, n) {
            var i, o;
            e instanceof Array ? (i = e || [], o = t) : (i = t || [], o = e);
            for (var a = 0; a < i.length; a++) { var r = i[a]; if ((r && r[n] || r) === o) return !0 }
            return !1
        }, e.array.remove = e.removeArray = function(t, n, i) { var o, a; return t instanceof Array ? (o = t || [], a = n) : (o = n || [], a = t || []), e.array.delete(o, a, i), o }, e.array.filter = e.filterArray = function(t, n, i) {
            var o, a;
            t instanceof Array ? (o = t || [], a = n) : (o = n || [], a = t);
            var r = [];
            for (var l in o) try {
                var c = o[l] && o[l][i] || o[l];
                new RegExp(a).test(c) && r.push(o[l])
            } catch (t) { e.showLog(t) }
            return r
        }, e.array.indexs = e.indexArray = function(e, t, n) {
            var i, o;
            e instanceof Array ? (i = e || [], o = t) : (i = t || [], o = e);
            var a = [];
            for (var r in i) {
                (i[r] && i[r][n] || i[r]) === o && a.push(+r)
            }
            return a
        }, e.array.excess = e.excessArray = function(e, t, n) {
            var i;
            e instanceof Array ? i = e || [] : i = t || [];
            var o = {},
                a = [];
            for (var r in i) try {
                var l = i[r] && i[r][n] || i[r];
                o[l] !== l && (o[l] = l, a.push(i[r]))
            } catch (e) {}
            return a
        }, e.array.uniq = function(t, n) {
            for (var i = [], o = 0; o < t.length; o++) {
                var a = void 0 === n,
                    r = t[o],
                    l = a ? r : r[n] || r;
                e.array.index(i, l, n) < 0 && i.push(r)
            }
            return i
        }, e.array.copy = e.copyArray = function(t, n, i) { var o = []; if (n = n || 0, i = i || t && t.length, !t || "array" === e.typeof(t)) { t.forEach(function(e, t) { o.push(e) }); return o.splice(n, i) || [] } }, e.array.empty = function(t) { if (!t || "array" === e.typeof(t)) return t.splice(0, t.length) }, e.array.replace = function(t, n) { if (!(t && "array" !== e.typeof(t) || n && "array" !== e.typeof(n))) { var i = [0, t.length].concat(n); return t.splice.apply(t, i) } }, e.array.merge = function(t) {
            var n;
            if (!t || "array" === e.typeof(t)) {
                var i = arguments,
                    o = i.length - 1,
                    a = i[o];
                if ("string" == typeof a && i.length > 1) {
                    for (var l, c = o, s = [], u = 0; u < c; u++) ! function(e) {
                        var n = Array.prototype.slice.call(i[e], 0);
                        t.forEach(function(e, t) {
                            var i = e[a] || e;
                            n instanceof Array && n.forEach(function(t, o) {
                                var r = t[a] || t;
                                if (i === r) {
                                    for (var l in t) e[l] = t[l];
                                    n.splice(o, 1)
                                }
                            })
                        }), s.push(n)
                    }(u);
                    return (l = e.array).merge.apply(l, [t].concat(s))
                }
                var d = (n = [t.length, 0]).concat.apply(n, r(Array.prototype.slice.call(arguments, 1)));
                return t.splice.apply(t, d), t
            }
        }, e.array.get = function(t, n, i) {
            if (!t || "array" === e.typeof(t)) {
                for (var o, a = null, r = 0; r < t.length; r++) {
                    a = t[r];
                    (a && a[i] || a) === n && (o = a)
                }
                return o
            }
        }, e.array.getAll = function(e, t, n) {
            var e = e || [],
                i = [],
                o = null;
            for (var a in e) try {
                o = e[a];
                var r = o && o[n] || o;
                t && t instanceof Array ? t.forEach(function(e, t) { r === e && i.push(o) }) : r === t && i.push(o)
            } catch (e) {}
            return i
        }, e.array.set = function(t, n, i, o) {
            if (!t || "array" === e.typeof(t)) {
                for (var a = /\d/.test(n), r = 0; r < t.length; r++) {
                    var l = t[r],
                        c = void 0 === o ? l : l[o] || l;
                    if (a ? r === n : c === n) {
                        if (o) {
                            if (i && "object" === e.typeof(i))
                                for (var s in i) l[s] = i[s];
                            else l[o] = i;
                            t.splice(r, 1, l)
                        } else t.splice(r, 1, i);
                        return t
                    }
                }
                return t
            }
        }, e.array.setAll = function(t, n, i, o) {
            if (!t || "array" === e.typeof(t)) return t.filter(function(a, r) {
                var l = void 0 === o ? a : a[o] || a;
                if (r == n || l === n)
                    if (o) {
                        if (i && "object" === e.typeof(i))
                            for (var c in i) a[c] = i[c];
                        else a[o] = i;
                        t.splice(r, 1, a)
                    } else t.splice(r, 1, i)
            }), t
        }, e.array.delete = function(t, n, i) {
            function o(e) {
                for (var n = 0, o = 0; o < r.length; o++) {
                    var l = o - n,
                        c = t.length !== r.length,
                        s = c ? t[l] || {} : t[o] || {};
                    (void 0 !== i ? s[i] || s : s) === e && (c ? t.splice(l, 1) : t.splice(o, 1), a.push(o), ++n)
                }
            }
            if (!t || "array" === e.typeof(t)) {
                var a = [],
                    r = e.array.copy(t);
                return n && "array" === e.typeof(n) ? n.forEach(function(e, t) { o(void 0 !== i ? e[i] || e : e) }) : o(n), a
            }
        }, e.array.deleteIndex = function(t, n) { if (!t || "array" === e.typeof(t)) { var i = []; return n && "array" === e.typeof(n) ? n.forEach(function(n, o) { i.push(t[n]), e.array.remove(t, t[n]) }) : (i.push(t[n]), e.array.remove(t, t[n])), i } }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.storage = function(n) {
            function i(t, n, i) {
                t = u + t;
                var o = 1 == c ? null : p.getItem(t),
                    a = [],
                    r = "",
                    l = i ? n[i] : n;
                if (null === o) { a.push(n), r = JSON.stringify(a); try { p.setItem(t, r) } catch (e) { "QuotaExceededError" == e.name && console.log("超出本地存储限额！") } } else {
                    var s = JSON.parse(o);
                    if (i ? e.array.compare(s, l, i) : e.array.compare(s, l)) { e.array.remove(s, l, i), s[h](n); try { r = JSON.stringify(s), p.setItem(t, r) } catch (e) { "QuotaExceededError" == e.name && console.log("超出本地存储限额！") } } else { s[h](n), s.length > c && 0 != c && s.pop(); try { r = JSON.stringify(s), p.setItem(t, r) } catch (e) { "QuotaExceededError" == e.name && console.log("超出本地存储限额！") } }
                }
                return this
            }

            function o(t, n, i) {
                t = u + t;
                var o, a = p.getItem(t) || "";
                try { o = d ? a && e.unit.stringToJson(a) : a && JSON.parse(a) } catch (t) { o = a, e.showLog(t.name + ": " + t.message, "bui.storage.get") }
                if ("number" == typeof n && i) o = o && o[n] && o[n][i] || void 0;
                else if ("string" == typeof n) {
                    var r = e.array.index(o, n, i);
                    o = o && o[r]
                } else o = "number" == typeof n ? o && o[n] || void 0 : o;
                return o
            }

            function a(t, n, i) {
                if ("string" != typeof(t = u + t)) return void e.showLog("要删除的字段名只能是字符串", "bui.storage.remove");
                var a = o(t) || [];
                if ("number" == typeof n) {
                    var r = "number" == typeof i ? i : r;
                    a.splice(n, r);
                    try {
                        var l = JSON.stringify(a) || "";
                        p.setItem(t, l)
                    } catch (t) { e.showLog(t.name + ": " + t.message, "bui.storage.remove") }
                } else if ("string" == typeof n) {
                    var c = e.array.remove(a, n, i);
                    try {
                        var l = JSON.stringify(c) || "";
                        p.setItem(t, l)
                    } catch (t) { e.showLog(t.name + ": " + t.message, "bui.storage.remove") }
                } else p.removeItem(t);
                return this
            }

            function r() {
                if (u)
                    for (var e = 0; e < localStorage.length; e++) {
                        var t = localStorage.key(e);
                        0 === t.indexOf(u) && p.removeItem(t)
                    } else p.clear();
                return this
            }

            function l(e) {
                for (var t = {}, n = parseInt(e) || 0, i = 0; i < localStorage.length; i++) {
                    var o = localStorage.key(i);
                    o.substr(u.length);
                    if (u && 0 === o.indexOf(u)) try {
                        var a = JSON.parse(p.getItem(o));
                        t[o] = void 0 !== e ? a[n] : a
                    } catch (e) { t[o] = p.getItem(o) }
                    if ("" === u) try { t[o] = JSON.parse(p.getItem(o)) } catch (e) { t[o] = p.getItem(o) }
                }
                return t
            }
            var c = 1,
                s = !0,
                u = "",
                d = !1,
                f = !0;
            "number" == typeof n || "string" == typeof n ? c = 0 == parseInt(n) ? 0 : parseInt(n) || 1 : "object" === (void 0 === n ? "undefined" : t(n)) && (c = n && 0 == n.size ? 0 : n.size || 1, f = !n || 0 != n.local, s = !n || 0 != n.reverse, d = !(!n || 1 != n.deep), u = n.prefix || "");
            var h = s ? "push" : "unshift",
                p = f ? localStorage : sessionStorage;
            return { get: o, getAll: l, set: i, remove: a, clear: r }
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.platform = function() {
            function e(e) { return /Windows NT/i.test(s) }

            function t() { return /Macintosh/i.test(s) }

            function n(e) { return /(Android|Linux)/i.test(s) }

            function i(e) { return /(iPhone)/i.test(s) }

            function o(e) { var t = !1; return 3 == window.devicePixelRatio && 375 == document.documentElement.clientWidth && 812 == document.documentElement.clientHeight && (t = !0), t }

            function a(e) { return /(iPad)/i.test(s) }

            function r(e) { return /(iPhone|iPad|iOS)/i.test(s) }

            function l(e) { return /(micromessenger)/i.test(s) }

            function c(e) { return /(crosswalk)/i.test(s) }
            var s = navigator.userAgent;
            return { isAndroid: n, isIphone: i, isIpad: a, isIos: r, isWeiXin: l, isBingotouch: c, isMac: t, isIphoneX: o, isWindow: e }
        }()
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.date = {}, e.date.format = function(e, t) {
            if (null == e) return "";
            var n = this.convert(e);
            t = t || "yyyy-MM-dd";
            var i = { "M+": n.getMonth() + 1, "d+": n.getDate(), "h+": n.getHours(), "m+": n.getMinutes(), "s+": n.getSeconds(), "q+": Math.floor((n.getMonth() + 3) / 3), S: n.getMilliseconds() };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var o in i) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[o] : ("00" + i[o]).substr(("" + i[o]).length)));
            return t
        }, e.date.convert = function(e, t) {
            if (e && e.constructor == Date) return e;
            if ("number" == typeof e && 13 === String(e).length) return new Date(e);
            e = String(e);
            var n = new Date,
                i = n.getFullYear(),
                o = n.getMonth() + 1,
                a = n.getDate();
            if (e = e.replace(/[-|年|月]/gim, "/").replace(/[时|分|秒|小时|分钟]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, function(e, t) { return t + "/1" }).replace(/[日|号]/gim, "").replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, function(e, t) { return n.getFullYear() + "/" + t }), e.indexOf("T") > -1 && -1 == e.indexOf("GMT")) { e = e.replace("T", " "); var r = e.indexOf(".") > -1 ? e.split(".") : [e]; return new Date(r[0]) }
            if (e.indexOf("GMT") > -1) {
                var r = e.split(" "),
                    l = { Jan: "1", Feb: "2", Mar: "3", Apr: "4", May: "5", Jun: "6", Jul: "7", Aug: "8", Sep: "9", Oct: "10", Nov: "11", Dec: "12" },
                    c = r[3] + "/" + l[r[1]] + "/" + r[2] + " " + r[4];
                return new Date(c)
            }
            return e.indexOf("/") < 0 && e.indexOf(":") > -1 && (e = i + "/" + o + "/" + a + " " + e), 4 === e.length ? e += "/1/1 00:00:00" : "MM" === t || "M" === t ? e = i + "/" + e + "/1 00:00:00" : "dd" !== t && "d" !== t || (e = i + "/" + o + "/" + e + " 00:00:00"), new Date(e)
        }, e.date.after = function(e, t, n) {
            var t = 0 === t ? 0 : t || 1,
                i = this.convert(e),
                o = i.getTime(),
                a = 1e3 * parseInt(t) * 3600 * 24,
                r = o + a;
            return this.format(r, n || "yyyy-MM-dd")
        }, e.date.afterTime = function(e, t, n) {
            var i = 0 === t ? 0 : t || 30,
                o = this.format(new Date, "yyyy/MM/dd") + " " + e,
                a = new Date(o),
                r = a.getTime(),
                l = 1e3 * i * 60,
                c = r + l;
            return this.format(c, n || "hh:mm")
        }, e.date.count = function(t, n, i) {
            var o, a;
            switch (i) {
                case "number":
                    o = t, a = n;
                    break;
                case "hour":
                    var r = this.format(new Date, "yyyy/MM/dd"),
                        l = r + " " + t,
                        c = this.convert(l),
                        s = r + " " + n,
                        u = this.convert(s);
                    o = c.getTime(), a = u.getTime();
                    break;
                case "date":
                default:
                    o = this.convert(t).getTime(), a = this.convert(n).getTime()
            }
            var d = o - a;
            d = Math.abs(d);
            var f = parseInt(d / 1e3 / 3600 / 24, 10),
                h = parseInt(d / 1e3 / 3600 % 24, 10),
                p = parseInt(d / 1e3 / 60 % 60, 10),
                g = parseInt(d / 1e3 % 60, 10);
            return { value: d, day: f, hour: h, minute: p, second: g, tip: f + "天 " + e.unit.fixZero(h) + ":" + e.unit.fixZero(p) + ":" + e.unit.fixZero(g) }
        }, e.date.countMonth = function(e) {
            var t = this.convert(e),
                n = t.getMonth() + 1;
            return t.setMonth(n), t.setDate(0), t.getDate()
        }, e.date.toWeek = function(e, t) {
            var n = this.convert(e),
                i = null;
            switch (t) {
                case 1:
                    i = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
                    break;
                default:
                    i = t || ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            }
            return i[n.getDay()]
        }, e.date.today = function(e) { return e = e || "M-d", this.format(new Date, e) }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.animate = function(i) {
            function o(t) { return t.id ? (E = e.objId(t.id), E.css({ "-webkit-transition": H, transition: H }), N = t.open3D, B = t.zoom, D = t.animates || [], F = R.config = t, this) : void e.showLog("animate id不能为空", "bui.animate") }

            function a(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : B ? -t / 100 + "rem" : -t + "px";
                var n = "translateX(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function r(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? e : B ? t / 100 + "rem" : t + "px";
                var n = "translateX(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function l(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : B ? -t / 100 + "rem" : -t + "px";
                var n = "translateY(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function c(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? e : B ? t / 100 + "rem" : t + "px";
                var n = "translateY(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function s(e) {
                var t = String(e),
                    e = t.indexOf(",") > -1 ? t : e + ",1",
                    n = "scale(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function u(e) {
                var e = String(e),
                    t = "scaleX(" + e + ")";
                return D.push(t), M.push(t), this
            }

            function d(e) {
                var e = String(e),
                    t = "scaleY(" + e + ")";
                return D.push(t), M.push(t), this
            }

            function f(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotate(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function h(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotateX(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function p(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotateY(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function g(e) {
                var e, t = String(e),
                    i = [];
                t.indexOf(",") > -1 ? (i = t.split(","), e = "", n.each(i, function(t, n) { t < 2 && (e += n.indexOf("deg") > -1 ? "," + n : "," + n + "deg") }), e = e.substr(1)) : e = t.indexOf("deg") > -1 ? t : t + "deg,0";
                var o = "skew(" + e + ")";
                return D.push(o), M.push(o), this
            }

            function v(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "skewX(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function m(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "skewY(" + e + ")";
                return D.push(n), M.push(n), this
            }

            function b(e) { var t = String(e); return E.css({ "-webkit-transform-origin": t, "transform-origin": t }), this }

            function y(e, t) { var n = t || "ease-out"; return H = "number" == typeof e ? "all " + e + "ms " + n : 0 == e || "none" == e ? "none" : 1 == e ? "all 300ms " + n : e || "all 300ms " + n, E.css({ "-webkit-transition": H, transition: H }), this }

            function w() { return D = [], M = [], A = [], z = 0, this }

            function x(e) { return V && (y(), V = !1), E.css({ "-webkit-transform": "", transform: "" }), "none" != H && E.one("webkitTransitionEnd", function() { e && e.call(R, this) }), w(), this }

            function k(e) { var t = N ? M.join("") + "translateZ(0)" : M.join(""); try { A[z] = [], A[z].push(D.join("")), D = [], z++ } catch (e) {} return E.css({ "-webkit-transform": t, transform: t }), "none" != H ? E.one("webkitTransitionEnd", function() { e && e.call(R, this) }) : e && e.call(R, this), this }

            function T(e) {
                function t(e) {
                    var a = e[i] || [],
                        r = e[i + 1] || [];
                    n = N ? a.join("") + "translateZ(0)" : a.join(""), n = M.join("") + n.replace(/\(.*?\)/g, "(0)"), E.css({ "-webkit-transform": "", transform: "" }), i++;
                    try {
                        E.one("webkitTransitionEnd", function() {
                            if (!r || !r.length) return i = 0, void(historyCache = []);
                            t(o)
                        })
                    } catch (e) {}
                }
                var n, i = 0,
                    o = A.reverse();
                return t(o), this
            }

            function I(e, t) { return E.css({ "-webkit-transform": e, transform: e }), t && "none" != y && E.one("webkitTransitionEnd", function() { t.call(R, this) }), this }

            function C(e) { return e = parseFloat(e) || 100, N = !0, E.parent().css({ perspective: e + "px" }), this }

            function O(e, n) { var i = {}; return "object" === (void 0 === e ? "undefined" : t(e)) ? (i = e, n = "") : "string" == typeof e && (i[e] = n || ""), E.css(i), this }

            function j(t) { var n = {}; return e.widget.call(n, t) }

            function L(t, n) { return e.option.call(R, t, n) }
            var S = { id: "", zoom: !0, open3D: !1, animates: [] };
            if ("object" === (void 0 === i ? "undefined" : t(i)) && i.id) i = i || {};
            else {
                var P = i || "";
                i = {}, i.id = P
            }
            var E, N, B, D, R = { origin: b, transition: y, property: O, open3D: C, transform: I, start: k, stop: x, clear: w, left: a, right: r, up: l, down: c, scale: s, scaleX: u, scaleY: d, rotate: f, rotateX: h, rotateY: p, skew: g, skewX: v, skewY: m, reverse: T, widget: j, option: L, config: F, init: o },
                F = R.config = n.extend(!0, {}, S, i),
                M = [],
                A = [],
                H = "all 300ms ease-out";
            o(F);
            var z = 0,
                V = !1;
            return R
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.mask = function(n) {
            function i(n) { j = !1; var i = t.extend(!0, y, x, n); return i.onBeforeInit && i.onBeforeInit.call(w, i), i.appendTo = i.appendTo || "body", I = e.objId(i.appendTo), x = w.config = i, m = I.css("position"), i.autoTrigger && r(i), C = e.objId(i.id), i.onInited && i.onInited.call(w, i), this }

            function o(e) {
                var t = function(t) { e.callback && e.callback.call(w, t), e.autoClose && s(), t.stopPropagation() };
                C.off("click.bui").on("click.bui", t), O = !0
            }

            function a(t) {
                var n = t.background ? t.background : "rgba(0,0,0," + t.opacity + ")",
                    i = "";
                return i += '<div id="' + T + '" class="' + e.prefix("mask") + " " + t.className + '" style="background:' + n + ";z-index:" + t.zIndex + '"></div>'
            }

            function r(n) {
                if (!j) {
                    var i = t.extend(!0, {}, y, x, n),
                        r = a(i);
                    return C = e.objId(T), C && C.length ? C.css("display", "block") : (I.append(r).css("position", "relative"), C = e.objId(T)), b = !0, v.call(w, "show"), O || o(i), this
                }
            }

            function l() { if (!j) return C && C.remove(), C = null, I.css("position", m || "static"), b = !1, O = !1, v.call(w, "hide"), this }

            function c(t) { if (!j) return C = e.objId(T), C && C.length ? (C.css("display", "block"), I.css("position", "relative"), b = !0) : r(x), v.call(w, "show"), this }

            function s() { if (!j) return C && C.css("display", "none"), I.css("position", "relative"), b = !1, v.call(w, "hide"), this }

            function u() { return b }

            function d(e) { l(), I && I.off("click.mask"), g("show"), g("hide"), j = !0 }

            function f(t) { var n = {}; return e.widget.call(n, t) }

            function h(t, n) { return e.option.call(w, t, n) }

            function p(t, n) { return e.on.apply(w, arguments), this }

            function g(t, n) { return e.off.apply(w, arguments), this }

            function v(t) { w.self = this == window || this == w ? null : this, e.trigger.apply(w, arguments) }
            var m, b, y = { id: "", appendTo: "", className: "", opacity: .3, background: "", zIndex: 100, autoTrigger: !1, autoClose: !1, onBeforeInit: null, onInited: null, callback: null },
                w = { handle: {}, on: p, off: g, hide: s, show: c, isShow: u, remove: l, destroy: d, widget: f, option: h, config: x, init: i },
                x = w.config = t.extend(!0, {}, y, e.config.mask, n),
                k = e.guid(),
                T = x.id ? x.id.indexOf("#") > -1 ? x.id.substring(1) : x.id : k,
                I = (t("body"), e.objId(x.appendTo)),
                C = null,
                O = !1,
                j = !1;
            return i(x), w
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.loading = function(n) {
            function i(i) { E = !1; var o = t.extend(!0, {}, C, i); return o.onBeforeInit && o.onBeforeInit.call(I, n), o.appendTo = o.appendTo || "body", O = t(o.appendTo), C = I.config = o, o.autoTrigger && S.length < 1 && r(o), S = e.objId(j), o.onInited && o.onInited.call(I, o), this }

            function o(e) {
                var t = e || C,
                    n = function(e) { t.callback && t.callback.call(I, e), e.stopPropagation() };
                return O.off("click.bui", "#" + j).on("click.bui", "#" + j, n), P = !0, this
            }

            function a(t) {
                t = t || {};
                var n = t.text,
                    i = O.width() || document.documentElement.clientWidth,
                    o = n && "block" == t.display ? parseInt(t.height) + 30 : parseInt(t.height),
                    a = -i / 2,
                    r = -o / 2,
                    l = "block" == t.display ? e.prefix("loading-block") : e.prefix("loading-inline"),
                    c = "";
                return c += '<div id="' + j + '" class="' + e.prefix("loading") + " " + l + '" style="width:' + i + "px;height:" + o + "px;line-height:" + o + "px;margin-left:" + a + "px;margin-top:" + r + "px;" + (t.zIndex ? "z-index:" + t.zIndex : "") + '" >', t.onlyText || (c += '<div class="' + e.prefix("loading-cell") + '" style="width:' + parseFloat(t.width) + "px;height:" + parseFloat(t.height) + 'px;"></div>'), c += '<div class="' + e.prefix("loading-text") + '">' + t.text + "</div>", c += "</div>", t && t.template ? t.template.call(I, t) : c
            }

            function r(n) {
                if (!E) {
                    var i = t.extend(!0, {}, C, n);
                    if (S = e.objId(j), k = S.children(".bui-loading-cell"), S.hasClass("bui-loading-pause")) S.removeClass("bui-loading-pause"), w.call(this, "start");
                    else {
                        S.length && S.remove();
                        var r = a(i);
                        O.append(r), F && F.show(), w.call(this, "show")
                    }
                    return i.timeout && (B && clearTimeout(B), B = setTimeout(function() { d() }, i.timeout)), P || o(i), N = !0, this
                }
            }

            function l(t) { if (!E) { S = e.objId(j), x = S.children(".bui-loading-text"); return void 0 === t ? x && x.text() : (x && x.html(t), this) } }

            function c() { if (!E) return S = e.objId(j), k = S.children(".bui-loading-cell"), k.css("display", "inline-block"), S.removeClass("bui-loading-pause"), this }

            function s() { if (!E) return S = e.objId(j), k = S.children(".bui-loading-cell"), k.css("display", "none"), S.addClass("bui-loading-pause"), this }

            function u() { return N }

            function d() { if (!E) return S = e.objId(j), S && S.remove(), S = null, F && F.remove(), P = !1, N = !1, w.call(this, "remove"), w.call(this, "hide"), this }

            function f() { if (!E) return S && S.addClass("bui-loading-pause"), w.call(this, "pause"), this }

            function h(n) { var i = n || {}; if (!E) { var o = t.extend(!0, C, i); return S = e.objId(o.id), S && S.length ? (l(o.text), S[0].style.display = "-webkit-box", F && F.show(), w.call(this, "show")) : r(o), C.timeout && (B && clearTimeout(B), B = setTimeout(function(e) { p() }, C.timeout)), N = !0, this } }

            function p() { if (!E) return S = e.objId(j), C.appendTo ? (S.css("display", "none"), F && F.hide()) : S && S.length && (S.css("display", "none"), F && F.hide()), N = !1, w.call(this, "hide"), this }

            function g(e) {
                var e = 1 == e;
                d(), O && O.off("click.bui"), y("show"), y("hide"), y("start"), y("stop"), y("pause"), y("remove"), F && F.destroy(e), E = !0
            }

            function v(t) { var n = { mask: F || {} }; return e.widget.call(n, t) }

            function m(t, n) { return e.option.call(I, t, n) }

            function b(t, n) { return e.on.apply(I, arguments), this }

            function y(t, n) { return e.off.apply(I, arguments), this }

            function w(t) { I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments) }
            var x, k, T = { appendTo: "", width: 30, height: 30, text: "", onlyText: !1, mask: !0, zIndex: "", autoTrigger: !1, autoClose: !0, timeout: 0, opacity: 0, display: "block", template: null, onBeforeInit: null, onInited: null, callback: null },
                I = { handle: {}, on: b, off: y, start: r, stop: d, isLoading: u, pause: f, text: l, showRing: c, hideRing: s, show: h, hide: p, destroy: g, widget: v, option: m, config: C, init: i },
                C = I.config = t.extend(!0, {}, T, e.config.loading, n),
                O = (t("body"), null),
                j = e.guid(),
                L = j + "-mask",
                S = e.objId(j),
                P = !1,
                E = !1,
                N = !1,
                B = null;
            C.id = j;
            var D = C.callback;
            C.callback = function(e) { C.autoClose && d(), D && D.call(I, e) };
            var R = t.extend(!0, {}, C, { id: L }),
                F = C.mask ? e.mask(R) : null;
            return i(C), I
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.slide = function(n) {
            function i(n) {
                var i = t.extend(!1, pe, n);
                if (!1 === (i.onBeforeInit && i.onBeforeInit.call(he, i))) return this;
                if (!i.id) return void e.showLog("slide id不能为空", "bui.slide.init");
                if (z = e.obj(i.id), i.relative) {
                    var l = z.parent().width();
                    i.width = l
                }
                if (pe = he.config = i, G = i.direction, "function" == typeof i.template) z.html(i.template.call(he, i.data || []) || "");
                else if (i.data && !i.template) {
                    var c = z.find(i.main).length <= 0;
                    if (c) {
                        var s = E(i);
                        z.html(s)
                    }
                    var u = z.find(i.children),
                        d = N.call(he, i.data);
                    u.html(d)
                }
                if (i.needLoading && (xe = bui.loading({ appendTo: z })), V = 0 == i.menu.indexOf("#") ? e.obj(i.menu) : z.find(i.menu).eq(0), q = V.children(), $ = z.find(i.children).eq(0), U = $.parent(), W = $.children(), ue = W.length, i.loop && W.length) {
                    var f = W.eq(W.length - 1).clone(!0),
                        h = W.eq(0).clone(!0);
                    $.prepend(f).append(h), W = $.children();
                    var p = W.length - 1;
                    A("afterto"), M("afterto", function(e) { 0 == e && g(p - 1, "none"), e == p && g(1, "none") }), g(1, "none");
                    !z.hasClass(".bui-slide-loop") && z.addClass("bui-slide-loop"), be = !0
                }
                if (i.cross && W.length) {
                    var m = function(e) {
                        var t = W.eq(e);
                        t.removeClass("bui-cross-prev").removeClass("bui-cross-next"), t.prev().removeClass("bui-cross-next").addClass("bui-cross-prev"), t.next().removeClass("bui-cross-prev").addClass("bui-cross-next")
                    };
                    !z.hasClass(".bui-slide-cross") && z.addClass("bui-slide-cross"), A("to", m), M("to", m), g(1, "none"), ye = !0
                }
                return o(i), r(i), se = i.autoplay, se && v(), me || (a(), Ie = !0), ve = $.children(".active").length ? $.children(".active").index() : ve || i.index, parseInt(i.index) > 0 ? g(i.index, "none") : g(ve, "none"), i.onInited && i.onInited.call(he, i), this
            }

            function o(e) {
                re = document.documentElement.clientWidth, le = document.documentElement.clientHeight, e.height = String(e.height).indexOf("%") > -1 ? parseFloat(e.height) / 100 * le : parseFloat(e.height), e.width = String(e.width).indexOf("%") > -1 ? parseFloat(e.width) / 100 * re : parseFloat(e.width), W = $.children();
                var t = z.parents(".bui-page"),
                    n = (z.parents("main"), z[0] && z[0].offsetTop || 0),
                    i = t.children(e.header),
                    o = i[0] && i[0].offsetHeight || 0,
                    a = t.children(e.footer),
                    r = a[0] && a[0].offsetHeight || 0;
                ie = le - (o || 0) - (r || 0) - n, oe = 0 == e.height ? ie : e.height;
                var l = "static" == V.parent().css("position") ? V.css("position") : V.parent().css("position");
                ae = z.find(e.menu).length ? "absolute" == l || "fixed" == l ? oe : oe - (V[0] && V[0].offsetHeight || 0) : oe, Z = e.fullscreen ? le : 0 == e.height ? ae : e.height, X = e.fullscreen ? re : e.width || re, Y = W.length, Q = "x" == G ? X / pe.visibleNum : X, ne = "y" == G ? Z / pe.visibleNum : Z, ce = "y" == pe.direction ? ne * pe.scrollNum : Q * pe.scrollNum, J = X * Y / pe.visibleNum, K = Z * Y / pe.visibleNum
            }

            function a() {
                var e = function(e) {
                    var n = t(this).hasClass("active"),
                        i = t(this).index(),
                        o = t(this).attr("disabled"),
                        a = t(this).hasClass("disabled") || "" == o || "true" == o || "disabled" == o;
                    if (e.currentIndex = i, e.prevIndex = ve, !1 === (pe.onBeforeTo && pe.onBeforeTo.call(he, e))) return !1;
                    n || a || (pe.animate ? g(i) : g(i, "none"), k(i), se && v()), e.stopPropagation()
                };
                0 == pe.menu.indexOf("#") ? V.off("click.bui", "li").on("click.bui", "li", e) : z.off("click.bui", pe.menu + " li").on("click.bui", pe.menu + " li", e), z.off("click.bui", pe.prev).on("click.bui", pe.prev, w), z.off("click.bui", pe.next).on("click.bui", pe.next, x);
                var n = pe.children + " " + pe.item;
                pe.data && z.off("click.bui", n).on("click.bui", n, function(e) {
                    var n = t(e.currentTarget),
                        i = n.attr("href"),
                        o = "true" == n.attr("data-reload"),
                        a = "true" == n.attr("data-iframe");
                    i && bui.load({ url: i, reload: o, iframe: a }), H.call(he, "click", e), pe.callback && pe.callback.call(he, e, he), e.stopPropagation()
                }), I(), pe.swipe || T(), me = !0
            }

            function r(e) {
                W = $.children(), ue = W.length, Ce = { x: { swipeDir: "swipeleft", swipeDir2: "swiperight", width: ce }, y: { swipeDir: "swipeup", swipeDir2: "swipedown", width: ce } }, de = { x: { parentInitKey: "width", parentInitValue: J, boxCss: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;", boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + Q + "px;height:" + ne + "px;" }, y: { parentInitKey: "height", parentInitValue: K, box: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;-webkit-box-orient: vertical;box-orient: vertical;", boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + Q + "px;height:" + ne + "px;" } }, U[de[G].parentInitKey](de[G].parentInitValue);
                var n, i = W.length;
                for (n = 0; n < i; n++) {
                    var o = W[n].getAttribute("data-scroll"),
                        a = null == o ? pe.scroll : "false" != o;
                    de[G].boxItemCSS = de[G].boxItemCSS + (a ? "overflow:auto;" : "overflow:hidden;"), W[n].style.cssText = de[G].boxItemCSS
                }
                try { $[0] && ($[0].style.cssText = de[G].boxCss) } catch (e) { console.log("请检查下children参数是否正确.", "bui.slide id:" + pe.id) }
                var r = "y" == G && pe.visibleNum > 1 ? ae / pe.visibleNum : ae,
                    c = pe.zoom ? oe / 100 + "rem" : oe + "px",
                    s = pe.zoom ? r / 100 + "rem" : r + "px";
                pe.zoom;
                if (pe.fullscreen ? (t("main").css({ position: "static" }), z.addClass("bui-slide-fullscreen").css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, "z-index": 10, overflow: "hidden", width: X, height: le }), W.addClass(pe.alignClassName || "bui-box-center").css("height", le)) : (z.css({ position: "relative", overflow: "hidden", width: X, height: c }), W.addClass(pe.alignClassName).height(s)), pe.autoheight && z.addClass("bui-slide-autoheight"), pe.autopage) {
                    var u = l(),
                        d = $.find(".active").index() + 1,
                        f = C(u, d);
                    z.children(".bui-slide-head").remove(), z.append(f), q = z.find(pe.menu).eq(0).children()
                }
            }

            function l() {
                var e = W.length,
                    t = e - pe.visibleNum;
                return e % pe.scrollNum != 0 ? t + 1 : t / pe.scrollNum + 1
            }

            function c(t) {
                var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches,
                    i = je ? n[0] : t;
                return ge.x1 = i.pageX, ge.y1 = i.pageY, ge.direction = "", !1 !== (pe.onBeforeTouchstart && pe.onBeforeTouchstart.call(he, t, ge)) && (pe.stopHandle && e.unit.checkTargetInclude(t.target, pe.stopHandle) ? void(Pe = !1) : (Ne = -ve * ce, Be = -ve * ce, n.length > 1 || t.scale && 1 !== t.scale ? void f("x" == G ? Ne : Be) : (se && (m(), se = !0), H.call(he, "touchstart", t, ge), pe.onStart && pe.onStart.call(he, t, ge, he), void(Pe = !0))))
            }

            function s(n) {
                var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
                if (i.length > 1 || n.scale && 1 !== n.scale) return void f("x" == G ? Ne : Be);
                if (Pe) {
                    var o = je ? i[0] : n;
                    ge.x2 = o.pageX, ge.y2 = o.pageY;
                    if (!1 === (pe.onBeforeTouchmove && pe.onBeforeTouchmove.call(he, n, ge))) return !1;
                    ge.direction || (ge.direction = e.swipeDirection(ge.x1, ge.x2, ge.y1, ge.y2)), "swipeleft" !== ge.direction && "swiperight" !== ge.direction || (n.preventDefault(), n.stopPropagation()), H.call(he, "touchmove", n, ge);
                    try {
                        if ("y" == G && pe.scroll) {
                            var a = t(n.target).closest(".active"),
                                r = a[0].scrollTop || 0,
                                c = a[0].scrollHeight || 0,
                                s = a[0].offsetHeight || 0;
                            if ("swipedown" === ge.direction && r > 1) return void(Ee = !1);
                            if ("swipeup" === ge.direction && c - r - s >= 2) return void(Ee = !1)
                        }
                    } catch (n) {}
                    ee = ge.x2 - ge.x1, te = ge.y2 - ge.y1, Ce.x.move = Ne + ee, Ce.x.absDelta = Math.abs(ee), Ce.y.move = Be + te, Ce.y.absDelta = Math.abs(te);
                    var u = l();
                    ge.direction !== Ce[G].swipeDir && ge.direction !== Ce[G].swipeDir2 || (pe.delay && Ce[G].absDelta > pe.distance && f(Ce[G].move, "none"), pe.delay || (pe.bufferEffect ? f(Ce[G].move, "none") : 0 == ve && u > 1 && ("swipeleft" == ge.direction || "swipeup" == ge.direction) ? f(Ce[G].move, "none") : ve == u - 1 && u > 1 && ("swiperight" == ge.direction || "swipedown" == ge.direction) ? f(Ce[G].move, "none") : ve > 0 && ve < u - 1 && u > 1 && f(Ce[G].move, "none"), n.preventDefault()), pe.onMove && pe.onMove.call(he, n, ge, he)), Ee = !0
                }
            }

            function u(e) {
                switch (H.call(he, "touchend", e, ge), ge.direction) {
                    case "swiperight":
                    case "swipedown":
                        e.currentIndex = ve - 1;
                        break;
                    case "swipeleft":
                    case "swipeup":
                        e.currentIndex = ve + 1
                }
                if (e.prevIndex = ve, !1 === (pe.onBeforeTouchend && pe.onBeforeTouchend.call(he, e, ge))) return !1;
                if (Ee) {
                    if (ee = ge.x2 - ge.x1, te = ge.y2 - ge.y1, Ce.x.delta = Ne, Ce.x.absDelta = Math.abs(ee), Ce.y.delta = Be, Ce.y.absDelta = Math.abs(te), "x" != pe.direction || "swipeleft" != ge.direction && "swiperight" != ge.direction) { if ("y" == pe.direction && ("swipeup" == ge.direction || "swipedown" == ge.direction)) var t = pe.onBeforeTo && pe.onBeforeTo.call(he, e) } else var t = pe.onBeforeTo && pe.onBeforeTo.call(he, e);
                    if (!1 === t) return f(Ce[G].delta), "swipeleft" != ge.direction && "swiperight" != ge.direction || e.stopPropagation(), Le += ge.y2 - ge.y1, Se += ge.x2 - ge.x1, ge.lastX = Se, ge.lastY = Le, ge = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, Pe = !1, Ee = !1, p(), !1;
                    Ce[G].absDelta > pe.distance ? (d.call(this, e, ge, Ce), pe.onEnd && pe.onEnd.call(he, e, ge, he)) : Ce[G].absDelta < pe.distance && f(Ce[G].delta), se && v(), "swipeleft" != ge.direction && "swiperight" != ge.direction || e.stopPropagation(), Le += ge.y2 - ge.y1, Se += ge.x2 - ge.x1, ge.lastX = Se, ge.lastY = Le, ge = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, Pe = !1, Ee = !1, p()
                }
            }

            function d(e, t, i) {
                ve = $.children(".active").index();
                var o;
                if (t.direction == i[G].swipeDir) {
                    var a = W.length,
                        r = a - pe.visibleNum,
                        l = a % pe.scrollNum != 0 ? r + 1 : r / pe.scrollNum + 1;
                    if (ve >= l - 1) o = ve, i[G].delta = -o * i[G].width, f(i[G].delta), ve = o, k(o), H.call(he, "last", o);
                    else if (o = ve + 1, i[G].delta = -o * i[G].width, f(i[G].delta), ve = o, k(o), n.autoload) O(ve);
                    else {
                        W.eq(ve);
                        if (n.loop && ve > ue) return;
                        H.call(he, "to", o)
                    }
                    H.call(he, "next", o)
                } else if (t.direction == i[G].swipeDir2)
                    if (ve > 0) {
                        if (o = ve - 1, i[G].delta = -o * i[G].width, f(i[G].delta), ve = o, k(o), n.autoload) O(ve);
                        else {
                            W.eq(ve);
                            if (n.loop && 0 == ve) return;
                            H.call(he, "to", o)
                        }
                        H.call(he, "prev", o)
                    } else o = ve, i[G].delta = -o * i[G].width, f(i[G].delta), ve = o, k(o), H.call(he, "first", o)
            }

            function f(e, t) {
                var n = pe.transition,
                    t = t || "all " + n + "ms",
                    e = e || 0;
                switch (G) {
                    case "x":
                        h(e + "px", 0, t, U);
                        break;
                    case "y":
                        h(0, e + "px", t, U)
                }
                return this
            }

            function h(e, t, n, i) {
                var o = t || 0;
                "y" == G && pe.zoom && String(t).indexOf("%") <= -1 && (o = parseInt(t) / 100 + "rem");
                var n, i = i || z,
                    e = e || 0,
                    a = e,
                    r = String(e).indexOf("%") > -1 ? String(e) : a,
                    l = String(t).indexOf("%") > -1 ? String(t) : o;
                n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
                try { i.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + r + "," + l + ")", transform: "translate(" + r + "," + l + ")" }) } catch (e) { console.log(e.message) }
            }

            function p(e) { U.one("webkitTransitionEnd", function() { U.css({ "-webkit-transition": "none", transition: "none" }), e && e.call(he, ve), H.call(he, "afterto", ve) }) }

            function g(e, i, o) {
                var a = 0,
                    r = null,
                    o = 0 != o;
                if ("string" == typeof e && e.indexOf(".html") > -1) {
                    var c = [];
                    q.each(function(n, i) {
                        var o = t(i).attr("href") || void 0;
                        c[n] = o, o == e && (a = n)
                    })
                } else a = parseInt(e);
                "function" == typeof i && (r = i, i = "");
                var s = { x: { transform: -a * parseFloat(ce) }, y: { transform: -a * parseFloat(ce) } },
                    u = l();
                if (t(".bui-slide-video video").each(function(e, t) { this.pause() }), a >= u || a < 0) return !1;
                if (f(s[G].transform, i), ve = a, k(a), se && v(), n.autoload) O(ve);
                else {
                    W.eq(ve);
                    if (!o) return;
                    H.call(he, "to", a)
                }
                return p(r), this
            }

            function v(e) {
                var e = e || pe.interval;
                m(), se = !0;
                var t = ve;
                _ = setInterval(function() {
                    var e = l();
                    t >= 0 && t < e - 1 ? t += 1 : t = 0, g(t)
                }, e), H.call(he, "play")
            }

            function m(e) {
                if (_) try { window.clearInterval(_), se = !1, H.call(he, "stop") } catch (e) {}
                return this
            }

            function b(e) { v(e) }

            function y() { return ve }

            function w() { var e = ve - 1; return pe.loop && -1 == e && (e = ue), g(e), H.call(he, "prev", e), this }

            function x() { var e = ve + 1; return pe.loop && e > ue + 1 && (e = 1), g(e), H.call(he, "next", e), this }

            function k(e) { e = e || 0, W.removeClass("active"), W.eq(e).addClass("active"), q.removeClass("active"), q.eq(e).addClass("active") }

            function T() { return z.off("touchstart", c).off("touchmove", s).off("touchend", u).off("touchcancel"), H.call(he, "lock"), this }

            function I(e) { return z.on("touchstart", c).on("touchmove", s).on("touchend", u).on("touchcancel", function() { f("x" == G ? Ne : Be) }), H.call(he, "unlock"), this }

            function C(e, t) {
                var n, i = "",
                    t = t || 1;
                for (i += '<div class="bui-slide-head">', i += "<ul >", n = 1; n < Number(e) + 1; n++) i += "<li " + (n == t ? 'class="active"' : "") + ">" + n + "</li>";
                return i += "</ul >", i += "</div >"
            }

            function O(t) {
                var n = W.eq(t),
                    i = q.eq(t),
                    o = i.attr("href") || "";
                if (e.array.compare(ke, t)) return H.call(he, "to", t, "200"), !1;
                pe.autoload && (o ? (o = e.unit.resolvePath(o), o in we ? (n.html(we[o]), ke.push(t), !Ie && H.call(he, "load", t, status), !Ie && H.call(he, "to", t, status), Ie = !1) : (we[o] = "", xe && xe.show(), loader && loader.import(o, function(e) { we[o] = e, n.html(e), ke.push(t), H.call(he, "load", t, status), !Ie && H.call(he, "to", t, status), Ie = !1, xe && xe.hide() }, function(e, n) { H.call(he, "loadfail", t, n), xe && xe.hide() }))) : (!Ie && H.call(he, "to", t), Ie = !1))
            }

            function j(t) {
                var n, i = e.guid(),
                    t = t || 1,
                    o = "";
                for (n = 0; n < t; n++) o += '<li id="' + i + '" style="-webkit-box-flex:1;box-flex:1;width:' + Q + "px;height:" + ne + 'px;"></li>';
                $.append(o), W = $.children();
                var a = Q * W.length;
                Y = W.length, U.width(a)
            }

            function L(n) {
                var i = { id: null, url: "", preload: !1, param: {}, success: null, fail: null },
                    o = t.extend(!0, {}, i, n),
                    a = o.url || "",
                    r = null,
                    l = W.length ? ve + 1 : 0;
                if (o.id) r = e.obj(o.id);
                else {
                    var c = W.eq(l);
                    c.length ? r = c : (j(), W = $.children(), r = W.eq(l))
                }
                if (a)
                    if (ve = l, Te[l] = o.param, a in we) { e.array.compare(ke, l) || (ke.push(l), r.html(we[a]), o.success && o.success.call(he, we[a], "cache"), H.call(he, "load", we[a], "cache")), o.preload || g(l) } else loader.importHtml(a, function(t, n) { t ? (we[a] = t, e.array.compare(ke, l) || (ke.push(l), r.html(we[a]), o.success && o.success.call(he, we[a], n), H.call(he, "load", t, n)), o.preload || g(l)) : (o.fail && o.fail.call(r, t, n), H.call(he, "loadfail", t, n)) }, function(e, t) { o.fail && o.fail.call(he, e, t), H.call(he, "loadfail", e, t) });
                return this
            }

            function S(e) { var e = "number" == typeof e ? e : ve; return Te[e] || {} }

            function P(e) { return W.eq(ve)[0] }

            function E(e) { return '<div class="' + e.main.substr(1) + '">\n              <ul class="bui-slide-main-ul">\n              </ul>\n            </div>' }

            function N(e) {
                var e = e || [],
                    t = "";
                return e.length && e.forEach(function(e, n) {
                    var i = e.title ? '<div class="bui-slide-title">' + e.title + "</div>" : "",
                        o = e.background ? '<div class="bui-slide-img" style="background-image:url(' + e.background + ')"></div>' : '<div class="bui-slide-img"><img src="' + e.image + '" alt="' + (e.title || "") + '"/></div>',
                        a = "";
                    e.video && (a = '<div class="bui-slide-video">\n                        <video class="bui-video" src="' + e.video.src + '" width="' + (e.video.width ? e.video.width : "100%") + '" height="' + (e.video.height ? e.video.height : "100%") + '" poster="' + (e.video.poster ? e.video.poster : "") + '" ' + (e.video.preload ? "preload" : "") + " " + (e.video.muted ? "muted" : "") + " " + (e.video.autoplay ? "autoplay" : "") + " " + (e.video.controls ? "controls" : "") + " " + (e.video.loop ? "loop" : "") + " " + (e.video.fullscreen ? "fullscreen" : "") + "></video>\n                        </div>"), t += '<li data-id="' + (e.id || "") + '" href="' + (e.url || "") + '" data-reload="' + (e.reload || !1) + '" data-iframe="' + (e.iframe || !1) + '">\n                  ' + (a || o) + "\n                  " + i + "\n                  </li>"
                }), t
            }

            function B(e) { var i = t.extend(!0, {}, n, e); return o(i), r(i), g(ve, "none"), this }

            function D(e) {
                var e = 1 == e;
                m(), V && (V.off("click.bui"), e && V.remove()), z && (z.off(), e && z.remove()), A("stop"), A("play"), A("first"), A("last"), A("to")
            }

            function R(t) { var n = { loading: xe }; return e.widget.call(n, t) }

            function F(t, n) { return e.option.call(he, t, n) }

            function M(t, n) { return e.on.apply(he, arguments), this }

            function A(t, n) { return e.off.apply(he, arguments), this }

            function H(t) { he.self = this == window || this == he ? null : this, e.trigger.apply(he, arguments) }
            var z, V, q, $, U, W, Y, _, J, K, X, Z, G, Q, ee, te, ne, ie, oe, ae, re, le, ce, se, ue, de, fe = { id: "", menu: ".bui-slide-head > ul", children: ".bui-slide-main > ul", main: ".bui-slide-main", header: "header", footer: "footer", item: "li", prev: ".bui-slide-prev", next: ".bui-slide-next", alignClassName: "", stopHandle: "", width: 0, height: 0, data: null, zoom: !0, transition: 200, interval: 5e3, relative: !1, swipe: !0, animate: !0, delay: !1, bufferEffect: !0, visibleNum: 1, scrollNum: 1, distance: 40, direction: "x", autoplay: !1, loop: !1, cross: !1, autoheight: !1, autoinit: !0, scroll: !1, index: 0, fullscreen: !1, autopage: !1, autoload: !1, needLoading: !1, async: !0, template: null, callback: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeTo: null, onBeforeInit: null, onInited: null, onStart: null, onMove: null, onEnd: null },
                he = { handle: {}, on: M, off: A, to: g, load: L, resize: B, getPageParams: S, getPages: l, $active: P, prev: w, next: x, stop: m, start: b, lock: T, index: y, unlock: I, destroy: D, widget: R, option: F, config: pe, init: i },
                pe = he.config = t.extend(!0, {}, fe, e.config.slide, n),
                ge = {},
                ve = 0,
                me = !1,
                be = !1,
                ye = !1,
                we = {},
                xe = null,
                ke = [],
                Te = [],
                Ie = !1,
                Ce = { x: {}, y: {} },
                Oe = /hp-tablet/gi.test(navigator.appVersion),
                je = "ontouchstart" in window && !Oe,
                G = "",
                Le = 0,
                Se = 0,
                Pe = !1,
                Ee = !1,
                ge = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" };
            try { pe.autoinit && i(pe) } catch (t) { e.showLog(t) }
            var Ne, Be;
            return he
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.swipe = function() {
            var n = null,
                i = null;
            return function(o) {
                function a(i) { var o = t.extend(!0, X, i); return o.onBeforeInit && o.onBeforeInit.call(K, o), pe = !1, o.id ? (F = e.obj(o.id), z = o.width > 0 ? o.width : Te.clientWidth, V = o.height > 0 ? o.height : Te.clientHeight, M = F.children(o.handle), A = Q ? F.children() : F, $ = A.children(o.swipeleft), U = A.children(o.swiperight), W = A.children(o.swipeup), Y = A.children(o.swipedown), _ = parseFloat(o.movingDistance), H = _, c(), ee || (r(o), ee = !0), n && n.close(), de || (P(), L()), o.onInited && o.onInited.call(K, o), this) : void e.showLog("swipe id不能为空", "bui.swipe.init") }

                function r(e) {
                    A.css({ width: z, position: "relative", overflow: "hidden" }), !Q && A.css({ height: V }), M.css({ position: "relative", "z-index": 10 });
                    try {
                        var t = $.attr("data-moving") || _,
                            n = U.attr("data-moving") || _,
                            i = W.attr("data-moving") || _,
                            o = Y.attr("data-moving") || _,
                            a = l(t),
                            r = l(n),
                            c = l(i),
                            s = l(o);
                        ne && $.css({ width: a }), te && U.css({ width: r }), oe && Y.css({ height: s }), ie && W.css({ height: c })
                    } catch (e) {}
                }

                function l(e) { return X.zoom ? e / 100 + "rem" : e + "px" }

                function c() { "x" == G ? (te = !!U.length, ne = !!$.length) : "y" == G ? (oe = !!Y.length, ie = !!W.length) : "xy" == G && (oe = !!Y.length, ie = !!W.length, ne = !!$.length, te = !!U.length) }

                function s(n) {
                    var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
                    if (i.length > 1 || n.scale && 1 !== n.scale) return void(be = !1);
                    if (X.stopHandle && e.unit.checkTargetInclude(n.target, X.stopHandle)) return void(be = !1);
                    var o = me ? i[0] : n;
                    if (Z.id = X.id, Z.x1 = o.pageX, Z.y1 = o.pageY, Z.direction = "", q = t(n.target).closest(X.handle), !1 === (X.onBeforeTouchstart && X.onBeforeTouchstart.call(K, n, Z))) return !1;
                    R.call(K, "touchstart", n, Z);
                    var a = t(n.target).closest(".bui-scroll"),
                        l = t(n.target).closest(".bui-tab-main li.active"),
                        s = t(n.target).closest("main"),
                        u = t(n.target).closest(".swipedown"),
                        d = t(n.target).closest(".swipeup"),
                        f = u.length ? u : d.length ? d : q;
                    if (Z.scrollObj = a.length ? a : l.length ? l : s.length ? s : u.length ? u : f, Ie = Z.scrollObj.scrollTop() || 0, Q && !ge) {
                        M = q, A = M.parent(), $ = A.children(X.swipeleft), U = A.children(X.swiperight), W = A.children(X.swipeup), Y = A.children(X.swipedown), c();
                        A.index();
                        r(X), (0 == X.height || "" == A[0].style.height) && A.height(q[0] && q[0].offsetHeight)
                    }
                    if (Z.movingleft = parseInt($.attr("data-moving") || _), Z.movingright = parseInt(U.attr("data-moving") || _), Z.movingup = parseInt(W.attr("data-moving") || _), Z.movingdown = parseInt(Y.attr("data-moving") || _), q.length) {
                        var h = !1;
                        switch (G) {
                            case "x":
                                h = !(!ne && !te);
                                break;
                            case "y":
                                h = !(!ie && !oe);
                                break;
                            case "xy":
                                h = !!(ne || te || ie || oe)
                        }
                    }
                    be = void 0 == h || 1 == h
                }

                function u(t) {
                    var o = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches;
                    if (o.length > 1 || t.scale && 1 !== t.scale) return void k();
                    var a = me ? o[0] : t;
                    if (Z.x2 = a.pageX, Z.y2 = a.pageY, !1 === (X.onBeforeTouchmove && X.onBeforeTouchmove.call(K, t, Z))) return !1;
                    if (R.call(K, "touchmove", t, Z), n && t.stopPropagation(), be) {
                        var r = Z.scrollObj.scrollTop() <= 0,
                            l = (Z.scrollObj[0] && Z.scrollObj[0].scrollHeight) - (Z.scrollObj[0] && Z.scrollObj[0].offsetHeight) - Z.scrollObj.scrollTop() <= 2,
                            c = Z.y2 - Z.y1 > 0,
                            s = Z.y2 - Z.y1 < 0;
                        if (le) { if (c && r) return ye = !1, void t.preventDefault(); if (s && l && t.preventDefault(), s && !l) return void(ye = !1); if (c && !r) return void(ye = !1) }
                        if (oe && !le && (c && r && t.preventDefault(), s && l && t.preventDefault()), !oe && c && r && t.preventDefault(), ce) { if (c && r && t.preventDefault(), s && l) return t.preventDefault(), void(ye = !1); if (s && !l) return void(ye = !1); if (c && !r) return void(ye = !1) }
                        Z.direction || (Z.direction = e.swipeDirection(Z.x1, Z.x2, Z.y1, Z.y2)), "swipeleft" !== Z.direction && "swiperight" !== Z.direction || t.preventDefault();
                        try {
                            if ("swipeup" === Z.direction || "swipedown" === Z.direction) {
                                var u = F[0].scrollTop || 0,
                                    d = (F[0].scrollHeight, q[0].scrollTop, q[0].scrollHeight, Z.scrollObj[0] && Z.scrollObj[0].scrollTop || 0),
                                    p = Z.scrollObj[0] && Z.scrollObj[0].offsetHeight || 0,
                                    g = Z.scrollObj[0] && Z.scrollObj[0].scrollHeight || 0,
                                    v = !1,
                                    m = !1;
                                u <= 0 && d <= 0 && (v = !0), g - d - p <= 2 && (m = !0)
                            }
                        } catch (t) {}
                        var b = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Z.x2 - Z.x1 : Z.y2 - Z.y1,
                            y = 0;
                        Z.deltax = ge ? Math.abs(b) : Math.abs(b) + xe, !te || "swiperight" != Z.direction || re || ge || i ? !v || !oe || "swipedown" != Z.direction || le || ge || i ? !ne || "swipeleft" != Z.direction || ae || ge || i ? !m || !ie || "swipeup" != Z.direction || ce || ge || i ? "swipeleft" == Z.direction && re ? (H = Z.movingright, y = f(Z, Z.movingright), ue && S(-Z.deltax, 0, "none", i || U), se && S(-y, 0, "none", M), R.call(K, "movingleft", t, Z), ye = !0, t.stopPropagation()) : "swipeup" == Z.direction && le ? (H = Z.movingdown, y = f(Z, Z.movingdown), ue && S(0, -Z.deltax, "none", i || Y), se && S(0, -y, "none", M), R.call(K, "movingup", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : "swiperight" == Z.direction && ae ? (H = Z.movingleft, y = f(Z, Z.movingleft), ue && S(Z.deltax, 0, "none", i || $), se && S(y, 0, "none", M), R.call(K, "movingright", t, Z), ye = !0, t.stopPropagation()) : "swipedown" == Z.direction && ce && (H = Z.movingup, y = f(Z, Z.movingup), ue && S(0, Z.deltax, "none", i || W), se && S(0, y, "none", M), R.call(K, "movingdown", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : (H = Z.movingup, y = h(Z, Z.movingup), ue && S(0, y, "none", W), se && S(0, -Z.deltax, "none", M), R.call(K, "movingup", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : (H = Z.movingleft, y = h(Z, Z.movingleft), ue && S(y, 0, "none", $), se && S(-Z.deltax, 0, "none", M), R.call(K, "movingleft", t, Z), ye = !0, t.stopPropagation()) : (H = Z.movingdown, y = f(Z, Z.movingdown), ue && S(0, y, "none", Y), se && S(0, Z.deltax, "none", M), R.call(K, "movingdown", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : (H = Z.movingright, y = f(Z, Z.movingright), ue && S(y, 0, "none", U), se && S(Z.deltax, 0, "none", M), R.call(K, "movingright", t, Z), ye = !0, t.stopPropagation())
                    }
                }

                function d(e) {
                    if (R.call(K, "touchend", e, Z), !1 === (X.onBeforeTouchend && X.onBeforeTouchend.call(K, e, Z))) return !1;
                    if (ye) {
                        var t = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Math.abs(Z.x2 - Z.x1) : Math.abs(Z.y2 - Z.y1),
                            n = "";
                        switch (Z.direction) {
                            case "swiperight":
                                n = "swipeleft";
                                break;
                            case "swipeleft":
                                n = "swiperight";
                                break;
                            case "swipeup":
                                n = "swipedown";
                                break;
                            case "swipedown":
                                n = "swipeup"
                        }
                        te && "swiperight" == Z.direction && t > X.distance && !re && !ge ? (g(), R.call(K, Z.direction, e, Z), R.call(K, "open", Z.direction)) : ne && "swipeleft" == Z.direction && t > X.distance && !ae && !ge ? (p(), R.call(K, Z.direction, e, Z), R.call(K, "open", Z.direction)) : ie && "swipeup" == Z.direction && t > X.distance && !ce && !ge ? (v(), R.call(K, Z.direction, e, Z), R.call(K, "open", Z.direction)) : oe && "swipedown" == Z.direction && t > X.distance && !le && !ge ? (m(), R.call(K, Z.direction, e, Z), R.call(K, "open", Z.direction)) : ge && t < X.distance ? (ne && ae && p(), te && re && g(), ie && ce && v(), oe && le && m(), R.call(K, Z.direction, e, Z), X.alwaysTrigger && R.call(K, "open", Z.direction)) : ge && t > X.distance ? (ne && ae && y(), te && re && b(), ie && ce && w(), oe && le && x(), R.call(K, Z.direction, e, Z), R.call(K, "close", n)) : !ge && t < X.distance && ("swipeleft" === Z.direction && ne && !ae && y(), "swiperight" === Z.direction && te && !re && b(), "swipeup" === Z.direction && ie && !ce && w(), "swipedown" === Z.direction && oe && !le && x(), X.alwaysTrigger && R.call(K, "close", n), R.call(K, Z.direction, e, Z)), we = Z.direction, be = !1, ye = !1, e.stopPropagation()
                    }
                }

                function f(e, t) { var n = -t + e.deltax; return n = n > 0 ? 0 : n }

                function h(e, t) { var n = t - e.deltax; return n = n > t ? t : n }

                function p(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || $, e.handle = e.handle || M, n && n.close(), ge = !0, ae = !0, Q && (n = K, i = $, Te.addEventListener("click", j, !0)), ue && S(0, 0, e.transition, e.target), se && S(-H, 0, e.transition, e.handle) }

                function g(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || U, e.handle = e.handle || M, n && n.close(), ge = !0, re = !0, Q && (n = K, i = U, Te.addEventListener("click", j, !0)), ue && S(0, 0, e.transition, e.target), se && S(H, 0, e.transition, e.handle) }

                function v(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || W, e.handle = e.handle || M, n && n.close(), ge = !0, ce = !0, Q && (n = K, i = W, Te.addEventListener("click", j, !0)), ue && S(0, 0, e.transition, e.target), se && S(0, -H, e.transition, e.handle) }

                function m(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || Y, e.handle = e.handle || M, n && n.close(), ge = !0, le = !0, Q && (n = K, i = Y, Te.addEventListener("click", j, !0)), ue && S(0, 0, e.transition, e.target), se && S(0, H, e.transition, e.handle) }

                function b(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = U, e.handle = he || M, ge = !1, re = !1, Q && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && S(-(H + 1), 0, e.transition, e.target), se && S(xe, 0, e.transition, e.handle) }

                function y(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = $, e.handle = he || M, ge = !1, ae = !1, Q && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && S("101%", 0, e.transition, e.target), se && S(-xe, 0, e.transition, e.handle) }

                function w(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = W, e.handle = he || M, ge = !1, ce = !1, Q && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && S(0, "100%", e.transition, e.target), se && S(0, -xe, e.transition, e.handle) }

                function x(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = Y, e.handle = he || M, ge = !1, le = !1, Q && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && S(0, -H, e.transition, e.target), se && S(0, xe, e.transition, e.handle) }

                function k() { re && b(), ae && y(), le && x(), ce && w(), R.call(K, "close", we) }

                function T() { if (!pe) return k(), this }

                function I(e) {
                    if (!pe) {
                        var t = e || {};
                        t.transition = t.transition || X.transition, t.index = t.index || 0;
                        var n, i = t.target;
                        switch (we = i, i) {
                            case "swiperight":
                                t.target = U.eq(t.index), n = t.target.parent().index(), t.handle = Q ? F.children().eq(n).children(X.handle) : M, he = t.handle, fe = t.target, H = U.attr("data-moving") || _, te && g(t);
                                break;
                            case "swipeleft":
                                t.target = $.eq(t.index), n = t.target.parent().index(), t.handle = Q ? F.children().eq(n).children(X.handle) : M, he = t.handle, fe = t.target, H = $.attr("data-moving") || _, ne && p(t);
                                break;
                            case "swipedown":
                                t.target = Y.eq(t.index), n = t.target.parent().index(), t.handle = Q ? F.children().eq(n).children(X.handle) : M, he = t.handle, fe = t.target, H = Y.attr("data-moving") || _, oe && m(t);
                                break;
                            case "swipeup":
                                t.target = W.eq(t.index), n = t.target.parent().index(), t.handle = Q ? F.children().eq(n).children(X.handle) : M, he = t.handle, fe = t.target, H = W.attr("data-moving") || _, ie && v(t);
                                break;
                            default:
                                t.target = U.eq(t.index), n = t.target.parent().index(), t.handle = Q ? F.children().eq(n).children(X.handle) : M, he = t.handle, fe = t.target, te && g(t)
                        }
                        return R.call(K, "open", i), this
                    }
                }

                function C() { return n }

                function O() { return ge }

                function j(e) {
                    var i = t(e.target),
                        o = i.closest($).length || i.closest(U).length || i.closest(W).length || i.closest(Y).length || e.target.className.indexOf("bui-mask") > -1 || e.target.className.indexOf("bui-click") > -1;
                    n && (o || (n.close(), e.stopPropagation()))
                }

                function L() { F.on("touchstart", s).on("touchmove", u).on("touchend", d).on("touchcancel", function() {}), de = !0 }

                function S(e, t, n, i) {
                    var n, o = i || F,
                        e = e || 0,
                        t = t || 0,
                        a = X.zoom ? parseFloat(e) / 100 + "rem" : parseFloat(e) + "px",
                        r = X.zoom ? parseFloat(t) / 100 + "rem" : parseFloat(t) + "px",
                        l = String(e).indexOf("%") > -1 ? e : a,
                        c = String(t).indexOf("%") > -1 ? t : r;
                    return n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms", o.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + l + "," + c + ")", transform: "translate(" + l + "," + c + ")" }).one("webkitTransitionEnd", function() { o.css({ "-webkit-transition": "none", transition: "none" }) }), this
                }

                function P() { if (!pe) return F.off("touchmove", u).off("touchend", d).off("touchcancel", function() {}), R.call(K, "lock"), this }

                function E() { if (!pe) return F.on("touchmove", u).on("touchend", d).on("touchcancel", function() {}), R.call(K, "unlock"), this }

                function N(e) {
                    var e = 1 == e;
                    F && (F.off(), e && F.remove()), D("open"), D("close"), pe = !0
                }

                function B(t, n) { return e.on.apply(K, arguments), this }

                function D(t, n) { return e.off.apply(K, arguments), this }

                function R(t) { K.self = this == window || this == K ? null : this, e.trigger.apply(K, arguments) }
                var F, M, A, H, z, V, q, $, U, W, Y, _, J = { id: "", handle: ".handle", swiperight: ".swiperight", swipeleft: ".swipeleft", swipeup: ".swipeup", swipedown: ".swipedown", direction: "x", stopHandle: "", hasChild: !1, handleMove: !0, targetMove: !0, alwaysTrigger: !1, width: 0, height: 0, movingDistance: 280, initDistance: 0, zoom: !1, distance: 40, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, transition: 300 },
                    K = { handle: {}, active: C, isActive: O, on: B, off: D, close: T, open: I, destroy: N, lock: P, unlock: E, init: a },
                    X = K.config = t.extend(!0, {}, J, e.config.swipe, o),
                    Z = {},
                    G = X.direction,
                    Q = X.hasChild,
                    ee = !1,
                    te = !1,
                    ne = !1,
                    ie = !1,
                    oe = !1,
                    ae = !1,
                    re = !1,
                    le = !1,
                    ce = !1,
                    se = X.handleMove,
                    ue = X.targetMove,
                    de = !1,
                    fe = null,
                    he = null,
                    pe = !1,
                    ge = !1,
                    ve = /hp-tablet/gi.test(navigator.appVersion),
                    me = "ontouchstart" in window && !ve,
                    be = !1,
                    ye = !1,
                    Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "", deltax: 0, movingleft: 0, movingright: 0, movingup: 0, movingdown: 0, scrollObj: null },
                    we = "",
                    xe = X.initDistance,
                    ke = document,
                    Te = ke.documentElement;
                X.autoinit && a(X);
                var Ie = 0;
                return K
            }
        }()
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.sidebar = function(n) {
            function i(n) { var i = t.extend(!0, w, n); return i.onBeforeInit && i.onBeforeInit.call(y, i), w = y.config = i, i.trigger && (C = e.obj(i.trigger)), k = e.obj(i.handle), m || (m = e.swipe({ id: i.id, handle: i.handle, movingDistance: i.width, swiperight: i.swiperight, swipeleft: i.swipeleft, direction: "x", hasChild: !1, width: 0, height: 0, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, handleMove: i.handleMove, zoom: i.zoom, distance: i.distance, transition: 300 })), w.mask && !x && (x = bui.mask({ id: i.id + "-mask", appendTo: k, autoTrigger: !1, opacity: i.opacity, callback: function() { m.close() } })), I || (o(), i.height > 0 && e.obj(i.id).height(i.height)), i.onInited && i.onInited.call(y, i), this }

            function o() {
                var e = this;
                m.on("open", function(t) { C && C.addClass("active"), x && x.show(), k.css("overflow-y", "hidden"), T = !0, v.call(e, "open", t) }), m.on("close", function() { C && C.removeClass("active"), x && x.hide(), k.css("overflow-y", "auto"), T = !1, v.call(e, "close") }), C && C.off("click.bui").on("click.bui", function(e) {
                    if (!t(this).hasClass("disabled")) {
                        var n = t(this).attr("data-target") || "swiperight";
                        T ? r() : a({ target: n })
                    }
                }), I = !0
            }

            function a(e) { var t = e || {}; return t.target = t.target || "swiperight", t.transition = t.transition || 300, m.open(t), this }

            function r() { return m.close(), this }

            function l() { return m.lock(), v.call(this, "lock"), this }

            function c(e) { return m.unlock(), v.call(this, "unlock"), this }

            function s() { return T }

            function u() { return m.active() }

            function d(e) {
                var e = 1 == e;
                C && C.off("click.bui"), g("open"), g("close"), x && x.destroy(e), m && m.destroy(e)
            }

            function f(t) { var n = { swipe: m, mask: x }; return e.widget.call(n, t) }

            function h(t, n) { return e.option.call(y, t, n) }

            function p(t, n) { return e.on.apply(y, arguments), this }

            function g(t, n) { return e.off.apply(y, arguments), this }

            function v(t) { y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments) }
            var m, b = { id: "", trigger: "", handle: ".bui-page", swiperight: ".swiperight", swipeleft: ".swipeleft", handleMove: !0, mask: !0, width: 280, opacity: .1, height: 0, zoom: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, autoinit: !0, onBeforeInit: null, onInited: null, distance: 40 },
                y = { handle: {}, on: p, off: g, active: u, isActive: s, open: a, close: r, lock: l, unlock: c, destroy: d, widget: f, option: h, config: w, init: i },
                w = y.config = t.extend(!0, {}, b, e.config.sidebar, n),
                x = null,
                k = null,
                T = !1,
                I = !1,
                C = null;
            return w.autoinit && i(w), y
        }
    }(bui || {}, libs),
    function(e, t) {
        e.listview = function(n) {
            function i(n) { var i = t.extend(!0, k, n); return i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, b = e.obj(i.id), y = b.children(), y.length && o(i), T || a(i), i.onInited && i.onInited.call(x, i), this }

            function o(e) {
                e.height > 0 && b.height(e.height), e.data && e.data.length ? y.each(function(n, i) {
                    var o = t(i),
                        a = o.attr("status"),
                        l = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
                    if (!a) {
                        var c = "function" == typeof e.template ? e.template.call(x, e.data) : r(e);
                        o.append(c).attr("status", "1")
                    }
                    i.style.height || t(i).height(l)
                }) : y.each(function(n, i) {
                    var o = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
                    i.style.height || t(i).height(o)
                })
            }

            function a(e) {
                var t = this,
                    n = function(t) { t.ui = x, e.callback && e.callback.call(x, t, m) };
                b.off("click.bui", ".bui-listview-menu .bui-btn").on("click.bui", ".bui-listview-menu .bui-btn", n), m = bui.swipe({ id: e.id, handle: e.handle, movingDistance: e.menuWidth, swiperight: e.swiperight, swipeleft: e.swipeleft, direction: "x", hasChild: !0, width: e.width, height: 0, zoom: e.zoom, distance: e.distance, onBeforeTouchstart: e.onBeforeTouchstart, onBeforeTouchmove: e.onBeforeTouchmove, onBeforeTouchend: e.onBeforeTouchend, transition: 300 }), m.on("open", function(e) { I = !0, v.call(t, "open", e) }), m.on("close", function(e) { I = !1, v.call(t, "close", e) }), T = !0
            }

            function r(e) {
                var n = "",
                    i = "right" == e.position ? e.swipeleft.substr(1) : e.swiperight.substr(1);
                return n += '<div class="bui-listview-menu ' + i + '">', t.each(e.data, function(e, t) { n += '    <div class="bui-btn ' + t.classname + '">' + t.text + "</div>" }), n += "</div>"
            }

            function l() { return m.active() }

            function c(e) { var t = e || {}; return t.target = t.target || ("right" == k.position ? k.swipeleft.substr(1) : k.swiperight.substr(1)), t.transition = t.transition || 300, t.index = t.index || 0, m.open(t), this }

            function s() { return m.close(), this }

            function u() { return m.lock(), v.call(this, "lock"), this }

            function d(e) { return m.unlock(), v.call(this, "unlock"), this }

            function f(e) {
                var e = 1 == e;
                y && (y.off("click.bui"), y = null), b && (b.off("click.bui"), e && b.remove(), b = null), g("open"), g("close"), m && m.destroy(e), k = null, x = null
            }

            function h(t) { var n = { swipe: m }; return e.widget.call(n, t) }

            function p(t, n) { return e.option.call(x, t, n) }

            function g(t, n) { return e.off.apply(x, arguments), this }

            function v(t) { x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments) }
            var m, b, y, w = { id: "", data: [], handle: ".bui-btn", swiperight: ".swiperight", swipeleft: ".swipeleft", position: "right", width: 0, height: 0, menuWidth: 160, menuHeight: 0, distance: 80, zoom: !1, autoinit: !0, template: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, callback: null },
                x = { active: l, lock: u, unlock: d, open: c, close: s, destroy: f, widget: h, option: p, config: k, init: i },
                k = x.config = t.extend(!0, {}, w, e.config.listview, n),
                T = !1,
                I = !1;
            return k.autoinit && i(k), x
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.btn = function(n) {
            function i(n) {
                var n = n,
                    i = 0;
                l.off("click.bui", u).on("click.bui", u, function(o) {
                    var a = t(this),
                        r = d.beforeCallback || d.beforeLoad;
                    if (!1 === (r && r.call(f, o))) return o.preventDefault(), o.stopPropagation(), !1;
                    var l = n || a.attr("href"),
                        u = a.attr("target"),
                        h = "true" === a.attr("iframe"),
                        p = "true" === a.attr("firstAnimate"),
                        g = a.attr("disabled"),
                        v = a.hasClass("disabled") || "" == g || "true" == g || "disabled" == g;
                    if (l && !v && !(l && l.indexOf("javascript:") > -1)) {
                        var m = a.attr("param") || "",
                            b = m && m.indexOf("{") > -1 && m.indexOf("}") > -1 ? JSON.parse(a.attr("param")) : {},
                            y = b;
                        (a.attr("progress") ? "false" != a.attr("progress") : c) && e.loading({ autoTrigger: !0, display: "block", opacity: 0, timeout: d.timeout });
                        var w = +new Date;
                        if (w - i < 350) return !1;
                        i = w;
                        var x = { url: l, param: y, replace: s, firstAnimate: p, iframe: h };
                        return "_blank" == u ? e.run({ id: l, data: y }) : e.load(x), o.preventDefault(), o.stopPropagation(), !1
                    }
                })
            }

            function o(n, i) {
                function o(o) {
                    if (!1 === (d.beforeCallback && d.beforeCallback.call(this, o))) return o.preventDefault(), o.stopPropagation(), !1;
                    var r = this,
                        l = t(r).css("background-color");
                    if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) {
                        var c = "none" == l ? "#fff" : l;
                        if (i.appendTo = r, i.background = i.background || c, i.display = i.display || "inline", i.width = i.width || 15, i.height = i.height || 15, i.text = i.text || "加载中", i.autoClose = 1 == i.autoClose, i.autoTrigger = 0 != i.autoTrigger, a) {
                            if (a.isLoading()) return;
                            a.show()
                        } else a = e.loading(i);
                        return n && n.call(r, a, o)
                    }
                }
                var i = i || {},
                    a = null;
                d.id && d.handle ? l.off("click.bui", u).on("click.bui", u, o) : l.click(o)
            }

            function a(e) {
                function n(n) { if (!1 === (d.beforeCallback && d.beforeCallback.call(this, n))) return n.preventDefault(), n.stopPropagation(), !1; var o = this; if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) { var a = +new Date; return !(a - i < 350) && (i = a, e && e.call(o, n)) } }
                var i = 0;
                d.id && d.handle ? l.off("click.bui", u).on("click.bui", u, n) : l.click(n)
            }

            function r() { return l.off("click.bui", u), this }
            var l, c, s, u, d = {},
                f = { load: i, submit: o, click: a, off: r };
            return function(n) { n && "object" === e.typeof(n) ? (d.id = n.id || "", d.handle = n.handle || "", d.progress = "progress" in n && n.progress, d.replace = "replace" in n && n.replace, d.timeout = n.timeout || 3e3, d.beforeCallback = n.beforeCallback || null, l = t(d.id)) : "string" == typeof n && (d.id = n || "", d.handle = "", d.progress = !1, d.replace = !1, d.timeout = 3e3, d.beforeCallback = null, l = e.obj(d.id)), u = d.handle, c = d.progress, s = d.replace }(n), f
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.dialog = function(i) {
            function o(i) {
                var o = n.extend(!0, j, i);
                switch (o.onBeforeInit && o.onBeforeInit.call(O, o), o.appendTo = o.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), F = !1, T = o.effect, D = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth, R = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight, o.position) {
                    case "top":
                        L = "bui-dialog-top", T = o.effect || "fadeInDown";
                        break;
                    case "bottom":
                        L = "bui-dialog-bottom", T = o.effect || "fadeInUp";
                        break;
                    case "left":
                        L = "bui-dialog-left", T = o.effect || "fadeInLeft";
                        break;
                    case "right":
                        L = "bui-dialog-right", T = o.effect || "fadeInRight";
                        break;
                    case "center":
                        L = "bui-dialog-center", T = o.effect || E;
                        break;
                    case "custom":
                        L = "bui-dialog-custom", T = o.effect || E
                }
                o.fullscreen && (L = "bui-dialog-fullscreen", T = o.effect || E), o.render ? (o.id = e.guid(), u(o), x = e.objId(o.id)) : (x = e.obj(o.id), x.addClass(L).css("z-index", o.zIndex), o.useBox && x.addClass("bui-box-vertical")), o.style && x.css(o.style), S = x.width() > D ? D : x.width(), P = x.height() > R ? R : x.height(), x.css("display", "none"), k || (k = e.toggle({ id: o.id, effect: T, useBox: o.useBox }));
                try {
                    var a = "object" === t(o.id) ? n(o.id).attr("id") + "-mask" : o.id + "-mask";
                    i.mask && !I && (I = e.mask({
                        id: a,
                        opacity: i.opacity,
                        appendTo: x.parent(),
                        autoTrigger: !1,
                        onlyOne: !0,
                        autoClose: !1,
                        zIndex: parseInt(i.zIndex, 10) - 1,
                        callback: function(e) {
                            if (!1 === (i.onMask && i.onMask.call(O, e))) return !1;
                            j.autoClose && (B ? c(s) : c())
                        }
                    }))
                } catch (t) { e.showLog(t) }
                return N && !j.render || d(), j = O.config = o, o.onInited && o.onInited.call(O, o), this
            }

            function a(e) {
                var t = "",
                    i = e.useBox ? "bui-box-vertical " : "";
                return t += '<div id="' + e.id + '" class="bui-dialog ' + i + L + " " + e.className + '" style="display:block;z-index:' + e.zIndex + '">', e.title && (t += '\t<div class="bui-dialog-head">' + e.title + "</div>"), t += '\t<div class="bui-dialog-main">', e.content && (t += e.content), t += "\t</div>", e.buttons && e.buttons.length && (t += '\t<div class="bui-dialog-foot"><div class="bui-box">', n(e.buttons).each(function(e, n) { t += '\t\t<div class="bui-btn span1 ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || n) + "</div>" }), t += "\t</div></div>"), e.close && (t += '   <div class="bui-dialog-close">' + (e.closeText ? e.closeText : '<i class="icon-close"></i>') + "</div>"), t += "</div>"
            }

            function r(t) {
                if (!l && !F) {
                    var i = { width: j.width, height: j.height, zoom: j.zoom, fullscreen: j.fullscreen, position: j.position, scroll: j.scroll, onBeforeOpen: j.onBeforeOpen, useBox: j.useBox, effect: "", callback: null },
                        o = i;
                    "function" == typeof t ? o.callback = t : "string" == typeof t ? o.effect = t : t && "object" === e.typeof(t) && (o = n.extend(!0, {}, i, t));
                    var a = o.onBeforeOpen && o.onBeforeOpen.call(O, { toggle: k });
                    if (w.call(O, "beforeopen", { toggle: k }), !1 === a) return this;
                    var r = j.useBox ? "-webkit-box" : "block";
                    x && x.css("display", r);
                    if (0 == (x.attr("status") || 0)) {
                        S = String(o.width).indexOf("%") > -1 ? D * parseFloat(o.width) / 100 : o.width || x.width(), P = String(o.height).indexOf("%") > -1 ? R * parseFloat(o.height) / 100 : o.height || x.height();
                        var c = e.unit.pxToRemZoom(S),
                            s = e.unit.pxToRemZoom(P),
                            u = o.zoom ? c + "rem" : S + "px",
                            f = o.zoom ? s + "rem" : P + "px",
                            h = o.zoom ? "-" + s / 2 + "rem" : "-" + P / 2 + "px",
                            p = o.zoom ? "-" + c / 2 + "rem" : "-" + S / 2 + "px";
                        if (o.fullscreen && "custom" != o.position || x.css({ width: u, height: f }), "center" != o.position || o.fullscreen || x.css({ top: "50%", "margin-top": h, left: "50%", "margin-left": p, right: "auto" }), o.fullscreen && x.addClass("bui-dialog-fullscreen"), o.scroll && !o.useBox) {
                            var g = x.children(".bui-dialog-head"),
                                v = x.children(".bui-dialog-foot"),
                                m = x.children(".bui-dialog-main"),
                                b = g.length ? g.height() : 0,
                                y = v.length ? v.height() : 0,
                                T = x.height() - b - y;
                            m.css({ height: T })
                        }
                        x.attr("status", "1")
                    }
                    return I && I.show(), k.show(function(e) { l = !0, o.callback && o.callback.call(O, { toggle: k }), w.call(O, "openafter", { toggle: k }), w.call(O, "afteropen", { toggle: k }) }, o.effect), N || d(), w.call(O, "open", { toggle: k }), this
                }
            }

            function l(e) { return l }

            function c(t) { if (l && !F) { var n = {}; "function" == typeof t ? n.callback = t : "string" == typeof t ? (n.effect = t, n.callback = j.onClose) : t && "object" === e.typeof(t) && (n = t), n.onBeforeClose = j.onBeforeClose; var i = n.onBeforeClose && n.onBeforeClose.call(O, { toggle: k }); if (w.call(O, "beforeclose", { toggle: k }), !1 === i) return this; try { k.hide(function(e) { l = !1, n.callback && n.callback.call(O, { toggle: k }) }, n.effect), I && I.hide(), w.call(this, "close", { toggle: k }) } catch (t) { e.showLog(t, "bui.dialog.close") } return this } }

            function s() { try { x.remove(), I && I.remove(), w.call(this, "remove") } catch (t) { e.showLog(t, "bui.dialog.remove") } return this }

            function u(e) { var t = a(e); return n(e.appendTo).append(t), this }

            function d() {
                return x.off("click.bui", ".bui-dialog-close").on("click.bui", ".bui-dialog-close", function(e) { B ? c(s) : c(), j.onClose && j.onClose.call(O, e, O), e.stopPropagation() }), x.on("click.bui", ".bui-dialog-foot .bui-btn", function(e) {
                    if (e.target = this, !1 === (j.callback && j.callback.call(O, e, O))) return !1;
                    j.autoClose && (B ? c(s) : c()), e.stopPropagation()
                }), N = !0, this
            }

            function f(t) { return e.selector.call(x, t) }

            function h(e) { var t = e || {}; return C.title = j.title || "提示", C.content = j.content || "", C.close = !1, C.render = !0, C.autoClose = j.autoClose, C.mask = j.mask, C.buttons = j.buttons && j.buttons.length ? j.buttons : ["确定"], C.callback = j.callback || null, o(n.extend(!0, C, t)), w.call(O, "create"), this }

            function p(e, t) { return O.isOpen() ? O.close(t) : O.open(e), this }

            function g() {
                var e = 1 == e;
                x && (x.off("click.bui"), x.remove(), x = null), y("open"), y("close"), I && I.destroy(e), k && k.destroy(e), F = !0
            }

            function v(t) { var n = { toggle: k, mask: I }; return e.widget.call(n, t) }

            function m(t, n) { return e.option.call(O, t, n) }

            function b(t, n) { return e.on.apply(O, arguments), this }

            function y(t, n) { return e.off.apply(O, arguments), this }

            function w(t) { O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments) }
            var x, k, T, I, C = { id: "", title: "", effect: "zoomIn", content: "", className: "", appendTo: "", position: "center", style: null, fullscreen: !1, useBox: !1, width: 0, height: 0, mask: !0, opacity: .3, render: !1, needRemove: !0, autoClose: !0, close: !0, scroll: !0, closeText: "", zoom: !1, zIndex: 101, buttons: [], onBeforeClose: null, onBeforeOpen: null, onBeforeInit: null, autoinit: !0, onInited: null, onMask: null, onClose: null, callback: null },
                O = { selector: f, $el: f, $: f, handle: {}, on: b, off: y, open: r, close: c, isOpen: l, toggle: p, create: h, remove: s, destroy: g, widget: v, option: m, config: j, init: o },
                j = O.config = n.extend(!1, {}, C, e.config.dialog, i),
                L = "",
                S = "",
                P = "",
                E = "fadeInDown",
                l = !1,
                N = !1,
                B = !1 !== j.needRemove && !!j.render,
                D = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth,
                R = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight,
                F = !1;
            return j.id && j.autoinit && o(j), O
        }
    }(bui || {}, libs),
    function(e, t) {
        e.alert = function(n, i) {
            var o = e.dialog(),
                a = {};
            a.className = "bui-alert", a.title = "", a.width = 580, a.height = 360, a.scroll = !0, a.zIndex = 111, a.position = "center", a.autoClose = !0, a.zoom = !0, a.buttons = [{ name: "确定", className: "primary-reverse" }], a.callback = i || function() {};
            var r = t.extend(a, e.config.alert),
                l = "";
            try { l = "string" == typeof n && n.indexOf("<") > -1 && n.indexOf(">") > -1 ? "<xmp>" + n + "</xmp>" : !n || "object" !== e.typeof(n) && "array" !== e.typeof(n) ? n && "function" === e.typeof(n) ? n.toString() : n : JSON.stringify(n), r.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + l + "</div>" } catch (t) { e.showLog(t, "bui.alert") }
            return o.create(r).open(), o
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.confirm = function(i, o) {
            var a = e.dialog(),
                r = {};
            r.className = "bui-confirm", r.title = "", r.width = 580, r.height = 360, r.scroll = !0, r.zIndex = 111, r.autoClose = !0, r.zoom = !0, r.position = "center", r.buttons = [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], r.callback = o || function() {};
            var l = {};
            return "object" === (void 0 === i ? "undefined" : t(i)) ? (i.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i.content + "</div>", l = n.extend(r, e.config.confirm, i)) : (l = n.extend(r, e.config.confirm), l.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i + "</div>", l.callback = o || function() {}), a.create(l).open(), a
        }
    }(window.bui || {}, window.libs);
    e(function(e) {
        ! function(n, i) {
            n.prompt = function(o, a) {
                var r = n.dialog(),
                    l = {};
                l.className = "bui-prompt", l.title = "", l.width = 580, l.height = 400, l.scroll = !0, l.autoClose = !1, l.zoom = !0, l.zIndex = 111, l.position = "center", l.buttons = [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], l.callback = a || function() {}, l.placeholder = "", l.row = 1, l.type = "text", l.value = "", l.onChange = null;
                var c = {},
                    s = "",
                    u = "";
                switch ("object" === (void 0 === o ? "undefined" : t(o)) ? (c = i.extend(l, n.config.prompt, o), s = c.content || "") : (c = i.extend(l, n.config.prompt), c.callback = a || function() {}, s = o || ""), c.type) {
                    case "number":
                        c.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + s + '</div> <div class="span1"> <input class="bui-prompt-text" placeholder="' + c.placeholder + '" type="' + c.type + '" value="' + c.value + '"/> </div> </div>';
                        break;
                    default:
                        c.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + s + '</div> <div class="span1"> <textarea class="bui-prompt-text" placeholder="' + c.placeholder + '" rows="' + c.row + '" >' + c.value + "</textarea> </div> </div>"
                }
                return r.create(c).open(), i("#" + r.config.id).on("change", ".bui-prompt-text", function(t) { u = this.value, c.onChange && c.onChange.call(e, t) }), r.value = function(e) { return void 0 === e ? u : (i("#" + r.config.id).find(".bui-prompt-text").val(e), u = e) }, r.focus = function(e) { i("#" + r.config.id).find(".bui-prompt-text").focus() }, r
            }
        }(window.bui || {}, window.libs)
    });
    ! function(e, n) {
        e.hint = function(i, o) {
            function a(t) { var i = n.extend(!0, I, t); return i.onBeforeInit && i.onBeforeInit.call(T, i), x = e.guid(), L = "top" === i.position ? "fadeInDown" : "bottom" === i.position ? "fadeInUp" : i.effect, I = T.config = i, l(x, i.content, C, i.appendTo), ++C, j = e.objId(x), O || (O = e.toggle({ id: j, effect: L, useBox: i.useBox })), S = !0, i.autoTrigger ? O.show() : O.hide("showIn"), i.autoClose && (k && clearTimeout(k), k = setTimeout(function() { i.autoTrigger ? s() : O.hide(), i.onClose && i.onClose.call(T) }, i.timeout)), P || r(i), i.onInited && i.onInited.call(T, i), this }

            function r(e) { e.showClose && j.off("click.bui", ".bui-hint-close").on("click.bui", ".bui-hint-close", function(t) { e.autoTrigger ? s() : O.hide(), e.onClose && e.onClose.call(T, t) }), P = !0 }

            function l(t, i, o, a) {
                var r, l = "11" + o,
                    c = a ? e.obj(a) : n("body");
                switch (I.position) {
                    case "top":
                        r = "bui-hint-top";
                        break;
                    case "bottom":
                        r = "bui-hint-bottom";
                        break;
                    case "center":
                        r = "bui-hint-center"
                }
                var s = I.height;
                I.width = String(I.width).indexOf("%") > -1 ? 750 * parseFloat(I.width) / 100 : parseFloat(I.width), I.height = parseFloat(I.height) || 0;
                var u = I.background ? "background:" + I.background : "",
                    d = I.width > 0 ? "width:" + I.width / 100 + "rem;margin-left:-" + I.width / 100 / 2 + "rem;" : "",
                    f = I.height > 0 ? "height:" + I.height / 100 + "rem;" : "",
                    h = "auto" == s ? "height:auto;" : f,
                    p = "center" === I.position && I.width > 0 ? "margin-top:-" + I.height / 100 / 2 + "rem;" : "",
                    g = u + ";z-index:" + l + ";opacity:" + I.opacity + ";" + d + h + p,
                    v = '<div id="' + t + '" class="bui-hint ' + r + " " + I.skin + '" style="' + g + '"><span class="bui-hint-inner">' + i + "</span>" + (I.showClose ? '<div class="bui-hint-close"><i class="icon-close"></i></div>' : "") + "</div>";
                c.append(v), a && c.css("position", "relative")
            }

            function c() { return S }

            function s() { var e = this; return O && (S = !1, O.hide(function() { O.remove(), b.call(e, "remove", { toggle: O }), O = null })), this }

            function u(e, t) { var n = this; return "function" == typeof e ? (e = e, t = t || I.effect || "") : (t = e || I.effect || "", e = null), O && (S = !1, O.hide(function() { e && e.call(T, { toggle: O }), b.call(n, "hide", { toggle: O }) }, t)), this }

            function d(e, t) { var n = this; return "function" == typeof e ? (e = e, t = t || I.effect || "") : (t = e || I.effect || "", e = null), O && (S = !0, O.show(function(t) { b.call(n, "show", { toggle: O }), e && e.call(T, { toggle: O }) }, t)), I.autoClose && (k && clearTimeout(k), k = setTimeout(function() { I.autoTrigger ? s() : O.hide(), I.onClose && I.onClose.call(T) }, I.timeout)), this }

            function f(e) {
                var e = 1 == e;
                j.off("click.bui"), O && O.destroy(e), m("show"), m("hide")
            }

            function h(t) { var n = { toggle: O }; return e.widget.call(n, t) }

            function p(t, n) { return e.option.call(T, t, n) }

            function g(e) { return j.find(".bui-hint-inner").length && j.find(".bui-hint-inner").html(e), this }

            function v(t, n) { return e.on.apply(T, arguments), this }

            function m(t, n) { return e.off.apply(T, arguments), this }

            function b(t) { T.self = this == window || this == T ? null : this, e.trigger.apply(T, arguments) }
            var y = { appendTo: "", content: "", timeout: 2e3, autoClose: !0, showClose: !1, autoTrigger: !0, useBox: !0, opacity: 1, background: "", effect: "fadeInUp", skin: "", position: "bottom", width: 0, height: 0, onBeforeInit: null, onInited: null, onClose: null };
            if ("number" == typeof i || "string" == typeof i) {
                var w = i || "";
                i = {}, i.content = w, i.onClose = o || null
            } else "object" === (void 0 === i ? "undefined" : t(i)) && (i = i);
            var x, k, T = { handle: {}, on: v, off: m, remove: s, hide: u, show: d, text: g, isShow: c, destroy: f, widget: h, option: p, config: I, init: a },
                I = T.config = n.extend(!0, {}, y, e.config.hint, i),
                C = 0,
                O = null,
                j = null,
                L = "",
                S = !1,
                P = !1;
            return a(I), T
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.pullrefresh = function(n) {
            function i(n) { var i = t.extend(!0, A, n); return i.onBeforeInit && i.onBeforeInit.call(M, i), i.id ? (C = e.obj(i.id), A = M.config = i, O = C[0], j = C.children(B), L = C.children(D), S = C.children(R), N = o, E = i.refreshTips.end, U || (U = e.loading({ appendTo: j, width: 15, height: 15, autoClose: !1, text: E, onlyText: !0, display: "inline", autoTrigger: !1, mask: !1 })), i.autoLoad && (V = !0, U.start({ text: i.refreshTips.start, onlyText: !1 }), N()), q || r(i), m(i.height), i.onInited && i.onInited.call(M, i), this) : void e.hint("pullrefresh id不能为空") }

            function o() { z = (new Date).getTime(), A.onBeforeRefresh && A.onBeforeRefresh.call(M), A.onRefresh && A.onRefresh.call(M), I.call(M, "refresh") }

            function a() {
                var e = (new Date).getTime(),
                    t = e - z,
                    n = Math.floor(t / 36e5),
                    i = Math.floor(t / 6e4);
                Math.floor(t / 1e3);
                return n <= 0 && i <= 0 ? "刚刚更新" : n <= 0 && i > 0 ? i + "分钟前更新" : "上次更新时间:" + (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i)
            }

            function r(e) { H || d(), q = !0 }

            function l(n) {
                var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches,
                    o = Y ? i[0] : n;
                return Z.x1 = o.pageX, Z.y1 = o.pageY, Z.direction = "", G = C.scrollTop(), A.stopHandle && e.unit.checkTargetInclude(n.target, A.stopHandle) ? void(K = !1) : i.length > 1 || n.scale && 1 !== n.scale ? void(K = !1) : !1 !== (A.onBeforeTouchstart && A.onBeforeTouchstart.call(M, n, Z)) && (E = A.lastUpdated ? a() : A.refreshTips.end, I.call(M, "touchstart", n, Z), t(window).scrollTop() <= 0 && G <= 0 && A.onRefresh && !V ? (K = !0, t(this).css("touch-action", "none")) : K = !1, void(A.stopPropagation && n.stopPropagation()))
            }

            function c(t) {
                var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches || [];
                if (!K) return void h();
                if (n.length > 1 || t.scale && 1 !== t.scale) return void h();
                var i = Y ? n[0] : t;
                if (Z.x2 = i.pageX, Z.y2 = i.pageY, !1 === (A.onBeforeTouchmove && A.onBeforeTouchmove.call(M, t, Z))) return !1;
                Z.direction || (Z.direction = e.swipeDirection(Z.x1, Z.x2, Z.y1, Z.y2)), I.call(M, "touchmove", t, Z), "swipeleft" !== Z.direction && "swiperight" !== Z.direction || t.preventDefault(), Z.y2 - Z.y1 > 0 && G <= 0 && t.preventDefault(), "swipedown" == Z.direction ? (I.call(M, "movingdown", t, Z), P = Math.abs(Z.y2 - Z.y1), h(P / 2, !1), P >= A.distance ? Q || (U.show({ text: A.refreshTips.release, onlyText: !1 }).pause(), Q = !0) : ee || (U.show({ text: E, onlyText: !1 }).pause(), ee = !0), X = !0, A.maxDistance > A.distance && P >= A.maxDistance && (U.show({ text: A.refreshTips.start, onlyText: !1 }), V = !0, A.onRefresh && N(), X = !1, Q = !1, ee = !1, Z = {}, _ += Z.y2 - Z.y1, J += Z.x2 - Z.x1, Z.lastX = J, Z.lastY = _, Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, K = !1, X = !1), t.preventDefault(), t.stopPropagation()) : "swipeup" == Z.direction && (I.call(M, "movingup", t, Z), X = !0, t.stopPropagation()), U && U.pause()
            }

            function s(e) { return I.call(M, "touchend", e, Z), !1 !== (A.onBeforeTouchend && A.onBeforeTouchend.call(M, e, Z)) && (t(this).css("touch-action", "auto"), X ? ("swipedown" == Z.direction ? (I.call(M, Z.direction, e, Z), P >= A.distance ? (h(A.distance / 2), U.show({ text: A.refreshTips.start, onlyText: !1 }).start(), V = !0, A.onRefresh && N()) : h(), e.stopPropagation(), Q = !1, ee = !1, Z = {}) : "swipeup" == Z.direction && (I.call(M, Z.direction, e, Z), e.stopPropagation()), _ += Z.y2 - Z.y1, J += Z.x2 - Z.x1, Z.lastX = J, Z.lastY = _, Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, K = !1, void(X = !1)) : (Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, K = !1, void(X = !1))) }

            function u(e) { return H = !0, C.off("touchstart", l).off("touchmove", c).off("touchend", s).off("touchcancel", h), h(), e && e.call(M), I.call(M, "lock"), this }

            function d(e) { return H = !1, C.on("touchstart", l).on("touchmove", c).on("touchend", s).on("touchcancel", h), e && e.call(this), I.call(M, "unlock"), this }

            function f(e, t, n) { return $ || (U.show({ text: A.refreshTips.success, onlyText: !1 }), h(e, t), L.one("webkitTransitionEnd", function() { U && U.hide().pause(), $ = !1, n && n.call(M) })), this }

            function h(e, t) { t = 0 != t, e = e || 0, V = !1; var n = t ? "all 300ms ease-out" : "none"; return p(0, e + "px", n, L), S.length && p(0, e + "px", n, S), this }

            function p(e, t, n, i) {
                var n, i = i || C,
                    e = e || 0,
                    t = t || 0,
                    o = e,
                    a = t,
                    r = String(e).indexOf("%") > -1 ? String(e) : o,
                    l = String(t).indexOf("%") > -1 ? String(t) : a;
                n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
                try { i.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + r + "," + l + ")", transform: "translate(" + r + "," + l + ")" }), i.one("webkitTransitionEnd", function() { i.css({ "-webkit-transition": "none", transition: "none" }), U.hide() }) } catch (e) { console.log(e.message) }
            }

            function g() { $ = !0, h(), e.hint(A.refreshTips.fail), I.call(M, "fail") }

            function v() { h(A.distance / 2, !0), U.start({ text: A.refreshTips.start, onlyText: !1 }), A.onRefresh && N() }

            function m(n) {
                var i = e.$(".bui-page"),
                    o = (e.$("main"), C.parents(".bui-tab")),
                    a = e.$(".bui-tab-head"),
                    r = o[0] && o[0].offsetTop || 0,
                    l = C[0] && C[0].offsetTop || 0,
                    c = i.children(A.header),
                    s = c.length > 1 ? c.eq(c.length - 1).height() : c.height(),
                    u = i.children(A.footer),
                    d = u.length > 1 ? u.eq(u.length - 1).height() : u.height(),
                    f = (window && window.viewport && window.viewport.height() || t(window).height()) - (s || 0) - (d || 0) - r - l - (a.height() || 0),
                    h = n ? parseFloat(n) : f;
                C.height(h)
            }

            function b(e) { var t = e || { height: 0, width: 0 }; return this.setHeight(t), t && t.width > 0 && C.width(t.width), this }

            function y(e) {
                var e = 1 == e;
                C && (C.off(), e && C.remove()), U && U.destroy(e), T("refresh"), T("movingdown"), T("swipedown")
            }

            function w(t) { var n = { loading: U }; return e.widget.call(n, t) }

            function x(t, n) { return e.option.call(M, t, n) }

            function k(t, n) { return e.on.apply(M, arguments), this }

            function T(t, n) { return e.off.apply(M, arguments), this }

            function I(t) { M.self = this == window || this == M ? null : this, e.trigger.apply(M, arguments) }
            var C, O, j, L, S, P, E, N, B = "." + e.prefix("scroll-head"),
                D = "." + e.prefix("scroll-main"),
                R = "." + e.prefix("scroll-foot"),
                F = { id: "", stopHandle: "", childrenTop: B, childrenMain: D, header: ".bui-page header", footer: ".bui-page footer", distance: 90, maxDistance: 0, autoLoad: !0, lastUpdated: !1, height: 0, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "刷新失败,请检查下网络再试试", success: "刷新成功" }, autoinit: !0, stopPropagation: !1, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onBeforeRefresh: null, onInited: null, onRefresh: null },
                M = { handle: {}, on: k, off: T, reverse: f, refresh: v, setHeight: m, resize: b, fail: g, lock: u, unlock: d, destroy: y, widget: w, option: x, config: A, init: i },
                A = M.config = t.extend(!0, {}, F, e.config.pullrefresh, n),
                H = !1,
                z = (new Date).getTime(),
                V = !1,
                q = !1,
                $ = !1,
                U = null,
                W = /hp-tablet/gi.test(navigator.appVersion),
                Y = "ontouchstart" in window && !W,
                _ = 0,
                J = 0,
                K = !1,
                X = !1,
                Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" };
            A.autoinit && i(A);
            var G = 0,
                Q = !1,
                ee = !1;
            return M
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.scroll = function(i) {
            function o(t) {
                var i = n.extend(!0, X, t);
                if (i.onBeforeInit && i.onBeforeInit.call(K, i), F = n(window), !i.id) return void e.hint("scroll id不能为空");
                D = e.obj(i.id), re = i.page, le = i.pageSize, X = K.config = i, ne = !0, ie = !0, oe = !1, ae = !1, R = D[0], A = D.children(W), z = D.children(Y), H = D.children(_), z.css({ position: "relative" }), G || (G = e.loading({ appendTo: H, width: 20, height: 20, autoClose: !1, text: i.scrollTips.start, zIndex: 10, display: "inline", autoTrigger: !1, mask: !1 })), V = c, q = l, $ ? $.init({ id: i.id, onBeforeRefresh: i.onBeforeRefresh, onRefresh: V, distance: i.distance, maxDistance: i.maxDistance, lastUpdated: i.lastUpdated, height: i.height, stopPropagation: i.stopPropagation, refreshTips: i.refreshTips, autoLoad: i.autoRefresh }) : i.refresh && i.onRefresh ? ($ = e.pullrefresh({ id: i.id, onBeforeRefresh: i.onBeforeRefresh, onRefresh: V, distance: i.distance, stopHandle: i.stopHandle, maxDistance: i.maxDistance, lastUpdated: i.lastUpdated, header: i.header, footer: i.footer, height: i.height, stopPropagation: i.stopPropagation, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, refreshTips: i.refreshTips, autoLoad: i.autoRefresh }), $.lock(), ee = !0) : "y" === i.direction && w(i.height), "x" === i.direction && D.addClass("bui-box-center").attr("direction", "x");
                try { q && q.call(K, re, le) } catch (t) { e.showLog(t, "bui.scroll.init") }
                return ce || i.scroll && a(i), i.onInited && i.onInited.call(K, i), this
            }

            function a(t) { D.off("scroll").on("scroll", e.unit.debounce(r, t.delayTime)), ce = !0 }

            function r(e) {
                var t = e.target,
                    n = t.scrollTop || 0,
                    i = t.scrollLeft || 0;
                "y" === X.direction ? 0 == n ? B.call(K, "scrolltop", e) : t.scrollTop + t.clientHeight >= (t && t.scrollHeight - X.endDistance) && X.onLoad && (X.page = K.config.page = ++re, X.autoScroll && q && q.call(K, X.page, le), B.call(K, "scrollbottom", e)) : 0 == i ? B.call(K, "scrolltop", e) : t.scrollLeft + t.clientWidth >= (t && t.scrollWidth - X.endDistance) && X.onLoad && (X.page = K.config.page = ++re, X.autoScroll && q && q.call(K, X.page, le), B.call(K, "scrollbottom", e)), B.call(K, "scrollend", e), X.onScrolling && X.onScrolling.call(K, e, K)
            }

            function l(e, t) { return te = !0, ae = !1, ie && !oe && (X.page = K.config.page = e, X.onBeforeLoad && X.onBeforeLoad.call(K, e, t), X.onLoad && G && G.start({ text: X.scrollTips.start, onlyText: !1 }), X.onLoad && X.onLoad.call(K, e, t)), ee && X.refresh && $ && $.unlock(), this }

            function c() { te = !0, ie = !0, oe = !1, ne = !0, ae = !0, X.refreshPage && (re = Z, le = X.pageSize, se = {}), X.page = K.config.page = re, B.call(K, "refresh", re), X.onRefresh && X.onRefresh.call(K, re, le) }

            function s() { return X.page }

            function u(t, n, i) {
                var i = 0 != i;
                if (!n || "array" != e.typeof(n)) return G && G.stop(), e.showLog("scroll 控件的updatePage 第2个参数,必须是一个数组,如果是list控件,检测field的data映射是否准确", "bui.scroll.updatePage"), void(n = []);
                n = n, te = !1, ue && clearTimeout(ue), ue = setTimeout(function() {
                    var e = parseInt(D.height()),
                        o = parseInt(D.find(X.childrenMain)[0] && D.find(X.childrenMain)[0].scrollHeight);
                    if (i)
                        if (n && n.length > le - 1) {
                            if (ie = !0, oe = !1, ne = !1, G && G.start({ text: X.scrollTips.end, onlyText: !0 }), o >= 10 && o < e && X.autoNext && X.onLoad) {
                                var a = ++re;
                                q && q.call(K, a, le)
                            }
                            B.call(K, "loadpage", n, re)
                        } else {
                            ie = !1, oe = !0;
                            var r = ne && n && n.length < 1 ? X.scrollTips.nodata : X.scrollTips.last;
                            G && G.start({ text: r, onlyText: !0 }), B.call(K, "loadpage", n, re), B.call(K, "lastpage", n, re)
                        }
                    else ie = !1, oe = !0, G && G.stop();
                    return se[t] = n
                }, 10)
            }

            function d(e) { return $ && $.reverse(), e && e.call(K, $), this }

            function f() { return ae }

            function h(e) { return se }

            function p(e) { se = {} }

            function g(e, t) { return Q = !0, ee = !0, G.show({ text: X.scrollTips.fail, onlyText: !0, callback: function(n) { l(e, t) } }), $ && $.lock(), this }

            function v(t, n) {
                var i, o, a = [];
                if (t && n)
                    for (i in se) {
                        var r = e.array.filter(se[i], t, n) || [];
                        if (r.length)
                            for (o in r) a.push(r[o])
                    }
                return a
            }

            function m(e, t) {
                var e = e || 0;
                M = D.find(X.children).children(X.handle);
                var n = D.height(),
                    i = parseFloat(M.height()),
                    o = R.scrollHeight,
                    a = i * parseInt(e) - i;
                return o > n && (R.scrollTop = a, B.call(K, "to", e), t && t.call(K, parseInt(e))), this
            }

            function b(e) { return D[0] && (D[0].scrollTop = D[0].scrollHeight, e && e.call(K)), this }

            function y(e) { var i = 0; return i = "object" === (void 0 === e ? "undefined" : t(e)) ? n(e)[0].offsetTop : "string" == typeof e && e.indexOf("#") > -1 ? n(e)[0].offsetTop : parseInt(e) || 0, R.scrollTop = i, this }

            function w(t) {
                var i = e.$(".bui-page"),
                    o = (e.$("main"), D.parents(".bui-tab")),
                    a = e.$(".bui-tab-head"),
                    r = o[0] && o[0].offsetTop || 0,
                    l = D[0] && D[0].offsetTop || 0,
                    c = i.children(X.header),
                    s = c.length > 1 ? c.eq(c.length - 1).height() : c.height(),
                    u = i.children(X.footer),
                    d = u.length > 1 ? u.eq(u.length - 1).height() : u.height(),
                    f = (window && window.viewport && window.viewport.height() || n(window).height()) - (s || 0) - (d || 0) - r - l - (a.height() || 0),
                    h = t ? parseFloat(t) : f;
                D.height(h)
            }

            function x() { return D.off("scroll"), B.call(K, "lock"), this }

            function k(t) { return D.on("scroll", e.unit.debounce(r, X.delayTime)), B.call(K, "unlock"), this }

            function T() { return m(1), $ && $.refresh(), this }

            function I(e) { var e = e || re; return re = e, q && q.call(K, re, le), this }

            function C() { return q && q.call(K, ++re, le), this }

            function O() { return re-- > 0 && q && q.call(K, re--, le), this }

            function j(e) { var t = e || { height: 0, width: 0 }; return this.setHeight(t), t && t.width > 0 && D.width(t.width), this }

            function L(e) {
                var e = 1 == e;
                D && (D.off("scroll"), e && D.remove()), $ && $.destroy(e), G && G.destroy(e), N("loadpage"), N("lastpage"), N("scrolltop"), N("scrollbottom"), N("scrollend")
            }

            function S(t) { var n = { pullrefresh: $, loading: G }; return e.widget.call(n, t) }

            function P(t, n) { return e.option.call(K, t, n) }

            function E(t, n) { return e.on.apply(K, arguments), this }

            function N(t, n) { return e.off.apply(K, arguments), this }

            function B(t) { K.self = this == window || this == K ? null : this, e.trigger.apply(K, arguments) }
            var D, R, F, M, A, H, z, V, q, $, U = "." + e.prefix("list"),
                W = "." + e.prefix("scroll-head"),
                Y = "." + e.prefix("scroll-main"),
                _ = "." + e.prefix("scroll-foot"),
                J = { id: "", childrenTop: W, childrenMain: Y, childrenBottom: _, children: U, stopHandle: "", header: ".bui-page header", footer: ".bui-page footer", handle: "li", distance: 100, endDistance: 5, height: 0, page: 1, pageSize: 10, stopPropagation: !1, lastUpdated: !0, autoRefresh: !1, autoNext: !0, autoScroll: !0, refresh: !0, refreshPage: !0, scroll: !0, delayTime: 100, direction: "y", scrollTips: { start: "努力加载中..", end: "上拉加载更多", nodata: "没有更多内容", last: "没有更多内容", fail: "点击重新加载" }, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "点击加载", success: "刷新成功" }, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onScrolling: null, onBeforeRefresh: null, onRefresh: null, onBeforeLoad: null, onLoad: null },
                K = { handle: {}, on: E, off: N, reverse: d, updateCache: u, updatePage: u, getPage: s, getCache: h, clearCache: p, resize: j, fail: g, filter: v, to: m, toBottom: b, scrollTop: y, lock: x, unlock: k, refresh: T, load: I, nextPage: C, prevPage: O, setHeight: w, isRefresh: f, destroy: L, widget: S, option: P, config: X, init: o },
                X = K.config = n.extend(!0, {}, J, e.config.scroll, i),
                Z = X.page,
                G = null,
                Q = !1,
                ee = !1,
                te = !1,
                Q = !1,
                ne = !0,
                ie = !0,
                oe = !1,
                ae = !1,
                re = X.page,
                le = X.pageSize,
                ce = !1,
                se = {};
            X.autoinit && o(X);
            var ue;
            return K
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.list = function(n) {
            function i(n) {
                var i = S = t.extend(!0, S, n);
                i.onBeforeInit && i.onBeforeInit.call(L, i), k = e.obj(i.id), T = k.find(i.children), S = L.config = i, N = S.data;
                var r = 0 == S.refresh ? null : s,
                    c = { id: i.id, children: i.children, handle: i.handle, header: i.header, footer: i.footer, page: i.page, pageSize: i.pageSize, distance: i.distance, stopHandle: i.stopHandle, maxDistance: i.maxDistance, height: i.height, refresh: i.refresh, autoNext: i.autoNext, refreshPage: i.refreshPage, autoScroll: i.autoScroll, scroll: i.scroll, stopPropagation: i.stopPropagation, scrollTips: i.scrollTips, refreshTips: i.refreshTips, direction: i.direction, lastUpdated: i.lastUpdated, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, onBeforeRefresh: i.onBeforeRefresh, onBeforeLoad: i.onBeforeLoad, onRefresh: r, onLoad: l };
                return "html" != i.commandRefresh && (i.refreshPage = !1), i.urlrule && (i.url = o(i)), O ? O.init(c) : O = bui.scroll(c), L.toBottom = O.toBottom, L.scrollTop = O.scrollTop, L.to = O.to, B || a(i), i.onInited && i.onInited.call(L, i), this
            }

            function o(e) { return P.replace("(page)", e.page).replace("(size)", e.pageSize) }

            function a(e) { return e.callback && k.off("click.bui", e.handle).on("click.bui", e.handle, function(t) { e.callback.call(L, t) }), B = !0, this }

            function r() { return O.getPage() }

            function l(i, a, r) {
                function l(e, t, n) { var i = (e - 1) * t; return i + t >= n.length ? n.slice(i, n.length) : n.slice(i, i + t) }

                function c(t, o, a) {
                    var r, c, d;
                    r = "string" == typeof t ? t && JSON.parse(t) || {} : t || {}, c = S && S.field && "" == S.field.data ? r || [] : "object" === e.typeof(r) && e.unit.getKeyValue(S.field.data, r) || [];
                    var f = /\[?.+\]$/g;
                    if ("string" == typeof c && f.test(c)) try { d = JSON.parse(c) } catch (t) { d = c, e.showLog(t) } else d = c;
                    c = d && "array" === e.typeof(d) ? d : [], S.localData && (c = l(i, S.pageSize, c));
                    var h = n.template && n.template.call(L, c, r, i) || "";
                    T && T[u](h);
                    var p = O && O.isRefresh() || !1;
                    x.call(s, "success", t, i, a);
                    try { p ? (S.onRefresh && S.onRefresh.call(L, O, r, a), x.call(s, "refresh", t, i, a), S.refresh && O.reverse()) : (x.call(this, "onloadbefore"), S.onLoad && S.onLoad.call(L, O, r, a), x.call(s, "onload", t, i, a)), S.localData ? S.autoUpdatePage && s && s.updatePage(i, c) : S.autoUpdatePage && O && O.updatePage(i, c), C = c } catch (e) {}
                }
                var s = this,
                    u = r || S.commandLoad;
                return N = t.extend(!0, {}, D, S.data, N), S.field.page.length && e.unit.setKeyValue(S.field.page, i, N), S.field.size.length && e.unit.setKeyValue(S.field.size, a, N), S.page = L.config.page = i, S.data = N, S.localData ? void c(S.localData, 200) : (S.urlrule && (S.url = o(S)), S.success = c, S.fail = function(e, t, n) { x.call(s, "fail", e, i, n), S.onFail && S.onFail.call(L, e, i, n), O && O.fail(i, a, e) }, I = e.ajax(S), this)
            }

            function c() { var e = O.getPage(); return O.updatePage(e, C), this }

            function s() {
                var e = E;
                S.refreshPage || (e = L.config.page + 1);
                var t = S.pageSize;
                return x.call(this, "refreshbefore"), l(e, t, S.commandRefresh), this
            }

            function u() { return x.call(this, "refreshbefore"), O.refresh(), this }

            function d() { return x.call(this, "refreshbefore"), s(), this }

            function f(n, i) { var o; if ("string" == typeof i) try { o = JSON.parse(i) } catch (t) { return void e.showLog("data 参数必须为对象", "bui.list.modifyData") } else o = i; return N = t.extend(!0, {}, D, o) }

            function h() { return T.html(""), this }

            function p(e) {
                var e = 1 == e;
                k && (k.off("click.bui"), e && k.remove(), k = null), w("refreshbefore"), w("refresh"), w("success"), w("fail"), O && O.destroy(e)
            }

            function g(t) { var n = { scroll: O, ajax: I }; return e.widget.call(n, t) }

            function v(t, n) { return "data" == t && void 0 !== n ? f(t, n) : e.option.call(L, t, n) }

            function m(e) { return S = L.config = t.extend(!0, {}, L.config, e), N = S.data, this }

            function b(e) { return O.resize(e), this }

            function y(t, n) { return e.on.apply(L, arguments), this }

            function w(t, n) { return e.off.apply(L, arguments), this }

            function x(t) { L.self = this == window || this == L ? null : this, e.trigger.apply(L, arguments) }
            var k, T, I, C, O, j = { id: "", url: "", data: {}, method: "GET", dataType: "json", headers: {}, contentType: null, timeout: 2e4, field: { page: "page", size: "pageSize", data: "" }, scrollTips: { start: "努力加载中..", end: "上拉加载更多", nodata: "没有更多内容", last: "没有更多内容", fail: "点击重新加载" }, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "点击加载", success: "刷新成功" }, lastUpdated: !1, page: 1, pageSize: 10, autoNext: !0, refreshPage: !0, autoUpdatePage: !0, autoScroll: !0, stopPropagation: !1, autoinit: !0, urlrule: !0, native: !0, needNative: !1, relative: !1, refresh: !0, direction: "y", stopHandle: "", children: ".bui-list", handle: ".bui-btn", header: ".bui-page header", footer: ".bui-page footer", height: 0, commandRefresh: "html", commandLoad: "append", scroll: !0, localData: null, template: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onBeforeRefresh: null, onRefresh: null, onLoad: null, onFail: null, callback: null },
                L = { handle: {}, on: y, off: w, empty: h, updatePage: c, getPage: r, refresh: u, reload: d, resize: b, modify: m, destroy: p, widget: g, option: v, config: S, init: i },
                S = L.config = t.extend(!0, {}, j, e.config.list, n),
                P = S.url,
                E = S.page,
                N = (S.page, {}),
                B = !1,
                D = S.data;
            return S.autoinit && i(S), L
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.searchbar = function(n) {
            function i(n) { var i = t.extend(!0, w, n); return i.onBeforeInit && i.onBeforeInit.call(y, i), p = e.obj(i.id), w = y.config = i, v = p.find("input"), p.find(i.handleRemove).length > 0 || v.after('<i class="' + i.handleRemove.substr(1) + '"></i>'), m = p.find(i.handleRemove), m.hide(), x || o(i), i.onInited && i.onInited.call(y, i), this }

            function o(e) {
                p.off("click.bui", e.handle).on("click.bui", e.handle, function(t) {
                    document.activeElement.blur();
                    var n = v.val();
                    g = n, h.call(y, "search", t, n), e.callback && e.callback.call(y, t, n)
                }), p.off("click.bui", e.handleRemove).on("click.bui", e.handleRemove, function(n) {
                    document.activeElement.blur(), v.val("");
                    var i = v.val();
                    g = i, t(this).hide(), h.call(y, "remove", n, i), e.onRemove && e.onRemove.call(y, n, i)
                });
                var n = !1;
                return e.onInput && p.off("input", "input").on("compositionstart", function() { n = !0 }).on("compositionend", function(t) {
                    n = !1;
                    var i = v.val();
                    e.onInput.call(y, t, i)
                }).on("input", "input", function(t) {
                    var i = v.val();
                    g = i, i ? m.show() : m.hide(), h.call(y, "input", t, i), n || e.onInput.call(y, t, i)
                }), e.onChange && p.off("change", "input").on("change", "input", function(t) {
                    var n = v.val();
                    g = n, n ? m.show() : m.hide(), h.call(y, "change", t, n), e.onChange.call(y, t, n)
                }), x = !0, this
            }

            function a(e) { var t = e || g; return g = t, h.call(this, "search", {}, t), w.callback && w.callback.call(this, {}, t), this }

            function r() { return v.val() }

            function l() { return v.val(""), m.hide(), this }

            function c(e) {
                var e = 1 == e;
                p && (p.off(), e && p.remove()), f("search"), f("remove"), f("input")
            }

            function s(t) { var n = {}; return e.widget.call(n, t) }

            function u(t, n) { return e.option.call(y, t, n) }

            function d(t, n) { return e.on.apply(y, arguments), this }

            function f(t, n) { return e.off.apply(y, arguments), this }

            function h(t) { y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments) }
            var p, g, v, m, b = { id: "", handle: ".icon-search,.btn-search", handleRemove: ".icon-removefill", delayTime: 400, onInput: null, onChange: null, onRemove: null, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
                y = { handle: {}, on: d, off: f, search: a, reset: l, value: r, destroy: c, widget: s, option: u, config: w, init: i },
                w = y.config = t.extend(!0, {}, b, e.config.searchbar, n),
                x = !1;
            return w.autoinit && i(w), y
        }
    }(bui || {}, libs),
    function(e, n) {
        e.select = function(i) {
            function o(t) {
                var i = n.extend(!0, W, t);
                if (i.onBeforeInit && i.onBeforeInit.call(U, i), i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), ee = [], te = [], ne = [], ie = [], Y = i.id ? e.obj(i.id).attr("id") : Y, W = U.config = i, Q = "function" == typeof i.template ? i.template : f, i.data && i.data.length || oe) var o = Q.call(this, i.data);
                if (i.popup)
                    if (q) A.find(".bui-dialog-list").html(o);
                    else {
                        if (i.id) A = e.obj(i.id);
                        else {
                            var r = u();
                            n(i.appendTo).append(r), A = e.obj(Y), A.find(".bui-dialog-list").html(o)
                        }
                        q = e.dialog({ id: Y, effect: i.effect, mask: i.mask, position: i.position, autoClose: !1, height: i.height, width: i.width, zoom: !1, fullscreen: i.fullscreen, onMask: function(e) { g() } }), i.appendTo && i.id && (n(i.appendTo).append(A.prop("outerHTML")), A.remove(), A = n(i.id))
                    }
                else {
                    if (!i.id) return void e.hint("select id 必须有");
                    A = e.obj(i.id), (i.data && i.data.length || oe) && A.html(o)
                }
                return V = A.find(i.handle), i.data && i.data.length < 1 && a(), c(i), i.value && m(i.value), i.onInited && i.onInited.call(U, i), this
            }

            function a() {
                var e = [],
                    t = [];
                return V.find("input").each(function(i, o) {
                    var a = n(this);
                    if (!(a.length < 1)) {
                        var l = a.val(),
                            c = a.attr("text"),
                            s = a.attr("image"),
                            u = a.attr("icon"),
                            d = a.is(":checked");
                        W.data[i] = {}, W.data[i][K] = c, W.data[i][X] = l, W.data[i][Z] = s, W.data[i][G] = u, e.push(l), t.push(c), d && r({ name: c, value: l, index: i })
                    }
                }), { value: e, text: t }
            }

            function r(e) {
                var t = parseInt(e.index, 10);
                switch (W.type) {
                    case "radio":
                    case "select":
                        ee = [], te = [], ne = [], ie = [], ee.push(e.name), te.push(e.value), ie.push(e.icon), ne.push(t);
                        break;
                    case "checkbox":
                        ee.push(e.name), te.push(e.value), ie.push(e.icon), ne.push(t)
                }
            }

            function l(t) {
                var n = e.array.filter(i.data, t, "name"),
                    o = '没有与此相关的结果:<span class="danger-reverse">' + t + "</span>",
                    a = e.guid();
                n.length && (o = f(n, a)), A.find(".bui-dialog-result").css("display", "block").html(o)
            }

            function c(t) {
                function i(e) { e ? (d.css("display", "block"), u.css("display", "block")) : (d.css("display", "none"), u.css("display", "none")) }
                t.trigger && (M = e.obj(t.trigger), z = M.find(t.triggerChildren).length ? M.find(t.triggerChildren) : M, H = t.placeholder || n.trim(z.html() || ""), t.placeholder && z.html(t.placeholder), M.off("click.bui").on("click.bui", function(e) {
                    var i = t.onBeforeOpen && t.onBeforeOpen.call(U);
                    n(this).hasClass("disabled") || 0 == i || h()
                }));
                var o = function(i) {
                        var o = n(i.target[i.target.length - 1]);
                        if (!o.attr("disabled")) {
                            var a = o.val(),
                                l = o.attr("text"),
                                c = o.attr("index"),
                                s = "INPUT" !== i.srcElement.nodeName ? o.is(":checked") : !o.is(":checked");
                            i.target = o[0], i.index = c, s ? s && (t.toggle || "checkbox" == t.type) && (F.call(U, "uncheck", i), e.array.remove(ee, l), e.array.remove(te, a), e.array.remove(ne, c), e.array.remove(ie, c)) : (F.call(U, "check", i), r({ name: l, value: a, index: c })), J && t.onChange && t.onChange.call(U, i), m(te.join(",") || "", i), w(ee.join(",") || ""), i.stopPropagation()
                        }
                    },
                    a = function(e) {
                        var i = null;
                        e.srcElement = e.originalEvent && e.originalEvent.srcElement || e.srcElement, i = n(this).find("input"), e.target = [i[0]], o.call(U, e), t.popup && t.autoClose && g(), F.call(U, "select", e), e.stopPropagation()
                    },
                    c = t.needSearch ? ".bui-dialog-list " + t.handle : t.handle;
                A.off("click.bui", c).on("click.bui", c, a);
                var s = function(e) { t.callback && t.callback.call(U, e, U), e.stopPropagation() };
                A.off("click.bui", t.callbackHandle).on("click.bui", t.callbackHandle, s);
                var u = A.find(".bui-searchbar-close"),
                    d = A.find(".bui-dialog-result"),
                    f = A.find(".bui-searchbar input");
                t.data && t.data.length && t.needSearch && (A.find(".btn-search").click(function(e) {
                    var t = A.find(".bui-searchbar input").val();
                    l(t), i(t), e.stopPropagation()
                }), f.on("input", function(e) {
                    var t = n(this).val();
                    l(t), i(t), e.stopPropagation()
                }), u.click(function(e) { f.val(""), d.css("display", "none"), n(this).css("display", "none"), e.stopPropagation() }), A.on("click.bui", ".bui-dialog-result .bui-btn", function(i) {
                    var o = n(this).find("input"),
                        a = "INPUT" !== i.srcElement.nodeName ? o.is(":checked") : !o.is(":checked"),
                        l = o.attr("text"),
                        c = o.attr("value"),
                        s = e.array.index(t.data, c, "value");
                    a && (t.toggle || "checkbox" == t.type) ? (o.prop("checked", !1), F.call(U, "uncheck", i), e.array.remove(ee, l), e.array.remove(te, c), e.array.remove(ne, s), e.array.remove(ie, s), t.onChange && t.onChange.call(U, i)) : (o.prop("checked", !0), F.call(U, "check", i), r({ name: l, value: c, index: s }), t.onChange && t.onChange.call(U, i)), m(te.join(",") || "", i), w(ee.join(",") || ""), i.stopPropagation()
                })), oe = !0
            }

            function s() { A.find(".bui-searchbar-close").trigger("click") }

            function u(e) {
                var t = "",
                    i = W.templateTitle ? W.templateTitle.call(U, W) || "" : '<div class="bui-dialog-title">' + W.title + "</div>";
                return W.popup && (t += '<div id="' + Y + '" class="bui-dialog bui-dialog-select">', (W.title || W.needSearch) && (t += '<div class="bui-dialog-head">\n                                ' + (W.title || W.templateTitle ? i : "") + "\n                                " + (W.needSearch ? '<div class="bui-searchbar bui-box">\n                                    <div class="span1">\n                                        <div class="bui-input">\n                                            <i class="icon-search"></i>\n                                            <input type="search" value="" placeholder="请输入关键字" />\n                                            <div class="bui-searchbar-close"><i class="icon-removefill"></i></div>\n                                        </div>\n                                    </div>\n                                </div>' : "") + "\n                            </div>"), t += '  <div class="bui-dialog-main">'), W.popup && (t += '<div class="bui-dialog-list"></div>', t += W.needSearch ? '<div class="bui-dialog-result"></div>' : "", t += "  </div>", W.buttons.length > 0 && (t += '    <div class="bui-dialog-foot bui-box">', n.each(W.buttons, function(e, n) { t += '        <div class="span1">', t += '             <div class="bui-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || n) + "</div>", t += "        </div>" }), t += "    </div>"), t += "</div>"), t
            }

            function d(t) {
                var t = t || {},
                    n = document.createElement("input");
                for (var i in t) "string" != typeof t[i] && "number" != typeof t[i] || n.setAttribute(i, t[i]);
                switch (W.type) {
                    case "mulelect":
                        n.setAttribute("type", "checkbox"), n.setAttribute("class", W.className || "bui-choose");
                        break;
                    case "select":
                        n.setAttribute("type", "radio"), n.setAttribute("class", W.className || "bui-choose");
                        break;
                    case "radio":
                        n.setAttribute("type", "radio"), n.setAttribute("class", W.className || "bui-radio");
                        break;
                    case "checkbox":
                        n.setAttribute("type", "checkbox"), n.setAttribute("class", W.className || "bui-choose");
                        break;
                    default:
                        n.setAttribute("type", "checkbox")
                }
                return e.array.compare(te, t.value) && n.setAttribute("checked", "true"), n
            }

            function f(t, i) {
                var o = i || _,
                    a = "",
                    r = "";
                return n.each(t, function(t, i) {
                    var a = "string" == typeof i ? i : i[K] || i || "",
                        l = i && i[Z] ? i[Z] || i : "",
                        c = i && i[G] ? i[G] || i : "",
                        s = i && i[X] ? i[X] || i : i || a || t,
                        u = t,
                        f = { name: o, value: s, text: a, index: u };
                    l && (f.image = l), c && (f.icon = c), i = i && "object" === e.typeof(i) ? i : {};
                    var h = n.extend(!0, {}, i, f),
                        p = d(h).outerHTML;
                    if (r += '    <div class="bui-btn bui-box bui-btn-line">', "left" == W.direction && (r += p), l) {
                        var g = e.unit.endWithImage(l) ? '<div class="thumbnail"><img src="' + l + '" alt="" /></div>' : '<div class="thumbnail ' + l + '"></div>';
                        r += g
                    }
                    if (c) {
                        var v = e.unit.endWithImage(c) ? '<i class="icon"><img src="' + c + '" alt="" /></i>' : '<i class="icon ' + c + '"></i>';
                        r += v
                    }
                    "center" == W.direction ? (r += '        <div class="span1" align="center">' + a + "</div>", r += p) : r += '        <div class="span1">' + a + "</div>", "right" == W.direction && (r += p), r += "    </div>"
                }), a += '    <div class="bui-list bui-list-select">', a += r, a += "    </div>"
            }

            function h(e) { F.call(this, "beforeshow"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(U), F.call(U, "show") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), W.popup && q ? (!q.isOpen() && q.open(n), F.call(U, "show")) : (A.css("display", "block"), n.callback ? n.callback() : F.call(U, "show")), this }

            function p() { return A.html(""), W.data = [], oe = !1, this }

            function g(e) { F.call(this, "beforehide"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(U), F.call(U, "hide") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), W.popup && q ? q.isOpen() && q.close(n) : (A.css("display", "none"), n.callback ? n.callback() : F.call(U, "hide")), this }

            function v() { return ne.join(",") }

            function m(t, n) {
                if (void 0 === t) return te.join(",");
                n = n || event, V = A.find(W.handle);
                var i = [],
                    o = [],
                    a = [],
                    r = [],
                    l = [],
                    c = [];
                "string" == typeof t && t.indexOf(",") > -1 ? c = t.split(",") : t instanceof Array ? c = t : t && c.push(t), W.data && W.data.forEach(function(t, n) {
                    var s = t && "object" === e.typeof(t) && t.hasOwnProperty(K) ? String(t[K]) : String(t),
                        u = t && "object" === e.typeof(t) && t.hasOwnProperty(G) ? String(t[G]) : "",
                        d = t && "object" === e.typeof(t) && t.hasOwnProperty(X) ? String(t[X]) : String(t) || String(n),
                        f = V.eq(n).find("input");
                    if ("" == t) return f.prop("checked", !1), ee = [], te = [], ne = [], void(ie = []);
                    var h = e.array.index(c, s);
                    e.array.index(c, d) > -1 || h > -1 ? ("radio" != W.type && "select" != W.type || (o = [], a = [], l = [], r = []), o.push(s), a.push(d), r.push(u), l.push(n), i[n] = f, f.prop("checked", !0)) : f.prop("checked", !1)
                }), ee = o.slice(0), te = a.slice(0), ne = l.slice(0), ie = r.slice(0);
                var s = n || { target: i[i.length - 1], index: ne };
                F.call(U, "change", s), !J && W.onChange && W.onChange.call(U, n), M && W.change && (M.attr("value", a.join(",")), z.text(ee.join(","))), A.attr("value", a.join(",")), J = !1
            }

            function b() { var e = []; return te.forEach(function(t, n) { e.push({ value: t, name: ee[n], index: ne[n], icon: ie[n] }) }), e }

            function y() {
                var e = [];
                return W.data && W.data.forEach(function(t, n) {
                    var i = V.eq(n).find("input"),
                        o = i.prop("checked");
                    t.checked = o, e.push(t)
                }), e
            }

            function w(e) { return void 0 === e ? ee.join(",") : (M && W.change && (M.attr("text", e), z.html(e || H)), A.attr("text", e), this) }

            function x(e) { var t = []; return String(e).indexOf(",") > -1 ? t = e.split(",") : t.push(parseInt(e)), ee = [], te = [], t.forEach(function(e, t) { W.data[e] && ee.push(W.data[e][K] || W.data[e]), W.data[e] && te.push(W.data[e][X] || W.data[e] || t) }), "checkbox" == W.type || "mulselect" == W.type ? (w(ee.join(",")), m(te.join(","))) : (w(ee[0]), m(te[0])), this }

            function k(t) {
                var n = [];
                return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(parseInt(t)), n.forEach(function(t, n) {
                    var i = V.eq(t).find("input"),
                        o = i.val(),
                        a = i.attr("text");
                    e.array.delete(ee, a), e.array.delete(te, o), i.prop("checked", null)
                }), F.call(U, "change", {}), this
            }

            function T() { if ("checkbox" == W.type) { x(W.data.map(function(e, t) { return t }).join(",")) } else x(0); return this }

            function I() { return ee = [], te = [], V.find("input").prop("checked", null), m(""), w(""), F.call(this, "reset"), this }

            function C() {
                if ("checkbox" == W.type) {
                    var t = ee.map(function(e, t) { return e });
                    te.map(function(e, t) { return e });
                    ee = [], te = [], W.data && W.data.forEach(function(n, i) {
                        var o = V.eq(i).find("input");
                        e.array.index(t, n[K]) > -1 ? o.prop("checked", null) : (o.prop("checked", !0), ee.push(n[K]), te.push(n[X]))
                    }), m(te.join(",") || ""), w(ee.join(",") || "")
                } else I();
                return this
            }

            function O(t) {
                var n = [];
                return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(t), n.forEach(function(t, n) {
                    var i = null;
                    W.data.forEach(function(n, o) {
                        var a = n[K] || n,
                            r = n[X] || n;
                        t != r && t != a || (i = V.eq(o).find("input"), i.prop("checked", null), e.array.remove(ee, a), e.array.remove(te, r))
                    })
                }), F.call(U, "change", {}), this
            }

            function j() { var e = M; return e && e.addClass("disabled"), this }

            function L() { var e = M; return e && e.removeClass("disabled"), this }

            function S(e) {
                if (void 0 === e) V.find("input").attr("disabled", !0);
                else {
                    if ("number" != typeof e) return void console.log("index 必须为数字");
                    V.eq(e).find("input").attr("disabled", !0)
                }
                return this
            }

            function P(e) {
                if (void 0 === e) V.find("input").removeAttr("disabled");
                else {
                    if ("number" != typeof e) return void console.log("index 必须为数字");
                    V.eq(e).find("input").removeAttr("disabled")
                }
                return this
            }

            function E(e) { var e = 1 == e; return A && (A.off(), e && A.remove()), M && (M.off("click.bui"), e && M.remove()), q && q.destroy(e), oe = !1, R("show"), R("hide"), R("change"), R("select"), R("check"), R("uncheck"), this }

            function N(t) { var n = { dialog: q || {} }; return e.widget.call(n, t) }

            function B(t, n) { return e.option.call(U, t, n) }

            function D(t, n) { return e.on.apply(U, arguments), this }

            function R(t, n) { return e.off.apply(U, arguments), this }

            function F(t) { U.self = this == window || this == U ? null : this, e.trigger.apply(U, arguments) }
            var M, A, H, z, V, q, $ = { id: "", trigger: "", triggerChildren: ".span1", handle: ".bui-list .bui-btn", className: "", name: "", appendTo: "", data: [], popup: !0, title: "", autoClose: !1, placeholder: "", field: { name: "name", value: "value", image: "image", icon: "icon" }, height: 0, width: 0, mask: !0, change: !0, toggle: !1, effect: "fadeInUp", type: "select", direction: "left", position: "bottom", fullscreen: !1, needSearch: !1, value: "", buttons: [], onChange: null, autoinit: !0, onBeforeOpen: null, onBeforeInit: null, template: null, onInited: null, callbackHandle: ".bui-dialog-foot .bui-btn", callback: null },
                U = { handle: {}, on: D, off: R, value: m, values: b, allValues: y, index: v, active: x, unactive: k, disabled: j, enabled: L, disabledSelect: S, enabledSelect: P, template: Q, empty: p, text: w, show: h, hide: g, selectAll: T, selectNone: I, clearSearch: s, unselect: C, unselected: O, destroy: E, widget: N, option: B, config: W, init: o },
                W = U.config = n.extend(!0, {}, $, e.config.select, i),
                Y = e.guid(),
                _ = W.name || e.guid(),
                J = !0,
                K = W.field.name,
                X = W.field.value,
                Z = W.field.image,
                G = W.field.icon,
                Q = null,
                ee = [],
                te = [],
                ne = [],
                ie = [],
                oe = !1;
            return W.autoinit && o(W), U
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.dropdown = function(n) {
            function i(n) {
                var i = t.extend(!0, E, n);
                if (i.onBeforeInit && i.onBeforeInit.call(P, i), !i.id) return void e.showLog("dropdown id不能为空", "bui.dropdown.init");
                if (T = e.obj(i.id), E = P.config = i, I = T.children(i.handle), L = i.target ? T.find(i.target) : I.next(), D = I.text(), i.data && i.data.length) {
                    var l = "function" == typeof i.template ? i.template.call(P, i.data) : p(i.data);
                    L.length ? L.remove() && I.after(l) : T.append(l), L = T.find(i.target)
                }
                O = i.relative, C = T.attr("position") || i.position;
                var c = T[0] && T[0].offsetLeft >= document.documentElement.clientWidth ? 0 : T[0] && T[0].offsetLeft,
                    u = i.width ? "auto" : -c + "px",
                    d = { bottom: { menuPosition: "bui-menu-bottom", arrowPosition: "bui-arrow-up", left: u }, top: { menuPosition: "bui-menu-top", arrowPosition: "bui-arrow-down", left: u }, left: { menuPosition: "bui-menu-left", arrowPosition: "bui-arrow-right", left: "auto" }, right: { menuPosition: "bui-menu-right", arrowPosition: "bui-arrow-left", left: "100%" } };
                if (j = i.width > 0 ? i.width : O ? N : i.width, parseFloat(j) > 0 && L.width(j), a(i.showArrow ? d[C].arrowPosition + " " + d[C].menuPosition : d[C].menuPosition, d[C].left), i.value) r(i.value);
                else {
                    var f = L.find(i.targetHandle + ".active").eq(0),
                        h = f.index();
                    h > -1 && s(h)
                }
                return B || o(i), i.onInited && i.onInited.call(P, i), this
            }

            function o(e) {
                var n = function(n) {
                        if (!t(this).hasClass("disabled")) {
                            var i = t(this).hasClass("active"),
                                o = e.target ? t(this).parent().find(e.target) : t(this).next();
                            h(), i ? (t(this).removeClass("active"), o.css("display", "none"), k.call(P, "hide")) : (t(this).addClass("active"), o.css("display", "block"), k.call(P, "show")), n.stopPropagation()
                        }
                    },
                    i = function(n) {
                        var i = t(this),
                            o = i.parent(),
                            a = r(),
                            l = i.attr("value") || "";
                        t.trim(i.text()), void 0 != o.attr("change") ? o.attr("change") : e.change;
                        e.showActive && i.addClass("active").siblings().removeClass("active"), r.call(this, l), E.autoClose && d(), n.target = this, e.callback && e.callback.call(P, n), a !== l && e.onChange && e.onChange.call(P, n), E.stopPropagation && n.stopPropagation()
                    };
                I.off("click.bui").on("click.bui", n), T.off("click.bui", e.targetHandle).on("click.bui", e.targetHandle, i);
                var o = function(e) { h(), e.stopPropagation() };
                E.autoClose && t("body").off("click.bui").on("click.bui", ":not(.bui-dropdown)", o), B = !0
            }

            function a(e, t) { L.addClass(e), O && L.css({ left: t }) }

            function r(n) {
                if (void 0 === n) { return R || I.attr("value") }
                var i = "htmllielement" === e.typeof(this),
                    o = i && t(this).parent(),
                    a = i ? t(this).parents(".bui-dropdown").children(E.handle) : I,
                    r = i ? o.find(E.targetHandle) : L.find(E.targetHandle);
                if (r.removeClass("active"), E.data && E.data.length) {
                    if ("" == n) return R = "", void a.attr("value", n);
                    var l = e.array.index(E.data, n, "value"),
                        c = e.array.index(E.data, n, "name");
                    l > -1 ? (r.eq(l).addClass("active"), a.attr("value", n), E.change && u.call(this, E.data[l].name), R = n) : c > -1 && (r.eq(c).addClass("active"), a.attr("value", E.data[c].value), E.change && u.call(this, n), R = E.data[c].value)
                } else r.each(function(e, i) {
                    var o = i.innerText,
                        r = i.getAttribute("value");
                    o != n && r != n || (t(this).addClass("active"), a.attr("value", r), E.change && u.call(this, o), R = r)
                });
                E.change || k.call(P, "change")
            }

            function l() { return { name: F, value: R } }

            function c() { return R = "", r(""), u(D), d(), this }

            function s(e) { e = parseInt(e); var n = L.find(E.targetHandle).eq(e); if (n.length >= 0) { r(n.attr("value") || t.trim(n.text()) || ""), E.showActive && n.addClass("active").siblings().removeClass("active") } return this }

            function u(n) {
                if (void 0 === n) { return F || t.trim(I.text()) }
                var i = "htmllielement" === e.typeof(this),
                    o = i ? t(this).parents(".bui-dropdown").children(E.handle) : I,
                    a = o.children(E.handleChildren);
                return a.length ? a.text(n) : o.text(n), F = n, k.call(P, "change"), this
            }

            function d() { return I.removeClass("active"), L.css("display", "none"), k.call(this, "hide"), this }

            function f() { return I.addClass("active"), L.css("display", "block"), k.call(this, "show"), this }

            function h() { return t(".bui-dropdown > .bui-btn").removeClass("active"), t(".bui-dropdown > .bui-list").css("display", "none"), k.call(this, "hide"), this }

            function p(e) { var t = ""; return t += '<ul class="bui-list">', e.map(function(e, n) { t += '<li class="bui-btn" value="' + e.value + '">' + e.name + "</li>" }), t += "</ul>" }

            function g() { var e = I; return e && e.addClass("disabled"), this }

            function v() { var e = I; return e && e.removeClass("disabled"), this }

            function m(e) {
                var e = 1 == e;
                T && (T.off("click.bui"), e && T.remove()), I && (I.off("click.bui"), e && I.remove()), t("body").off("click.bui"), x("show"), x("hide")
            }

            function b(t) { var n = {}; return e.widget.call(n, t) }

            function y(t, n) { return e.option.call(P, t, n) }

            function w(t, n) { return e.on.apply(P, arguments), this }

            function x(t, n) { return e.off.apply(P, arguments), this }

            function k(t) { P.self = this == window || this == P ? null : this, e.trigger.apply(P, arguments) }
            var T, I, C, O, j, L, S = { id: "", handle: ".bui-btn", handleChildren: ".span1", target: ".bui-list", targetHandle: ".bui-btn", data: null, position: "bottom", showArrow: !1, showActive: !0, autoClose: !0, stopPropagation: !1, width: 0, value: "", relative: !0, change: !0, autoinit: !0, template: null, onBeforeInit: null, onInited: null, callback: null, onChange: null },
                P = { handle: {}, on: w, off: x, active: s, disabled: g, enabled: v, value: r, values: l, reset: c, text: u, hide: d, show: f, hideAll: h, destroy: m, widget: b, option: y, config: E, init: i },
                E = P.config = t.extend(!0, {}, S, e.config.dropdown, n),
                N = document.documentElement.clientWidth,
                B = !1,
                D = "",
                R = "",
                F = "";
            return E.autoinit && i(E), P
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.accordion = function(n) {
            function i(n) { var i = t.extend(!0, j, n); return i.onBeforeInit && i.onBeforeInit.call(O, i), x = document.documentElement.clientWidth, k = document.documentElement.clientHeight, L = e.obj(i.id) || e.obj("." + e.prefix("accordion")), j = O.config = i, T = i.handle.indexOf("#") > -1 ? e.obj(i.handle) : L.children(i.handle), I = i.target.indexOf("#") > -1 ? e.obj(i.target) : L.children(i.target), o(i), S || a(i), i.onInited && i.onInited.call(O, i), this }

            function o(e) { T.removeClass("active"), I.css("display", "none"), parseFloat(e.targetHeight) > 0 && I.height(e.targetHeight), parseFloat(e.height) > 0 && L.height(e.height) }

            function a(e) {
                var n = function(n) {
                    if (!t(this).hasClass("disabled") && !t(this).attr("href")) {
                        if (!1 === (e.callback && e.callback.call(O, n))) return !1;
                        c.call(this, n, e), (e.stopPropagation || !t(this).attr("href")) && n.stopPropagation()
                    }
                };
                e.handle.indexOf("#") > -1 ? !e.lock && T.off("click.bui").on("click.bui", n) : !e.lock && L.off("click.bui").on("click.bui", e.handle, n), S = !0
            }

            function r(e) { var t; return t = "number" == typeof e ? T.eq(e) : T, t && t.addClass("disabled"), this }

            function l(e) { var t; return t = "number" == typeof e ? T.eq(e) : T, t && t.removeClass("disabled"), this }

            function c(n, i) {
                var o = t(this),
                    a = o.hasClass("active"),
                    r = (T.index(this), i.target.indexOf("#") > -1 ? e.obj(i.target) : o.next(i.target));
                i.single ? a ? (o.removeClass("active"), r.css("display", "none"), w.call(O, "hide", n)) : (p(), o.addClass("active"), r.css("display", "block"), w.call(O, "show", n)) : a ? (o.removeClass("active"), r.css("display", "none"), w.call(O, "hide", n)) : (o.addClass("active"), r.css("display", "block"), w.call(O, "show", n))
            }

            function s(e) {
                var e = Number(e) || 0,
                    t = T.eq(e).length ? T.eq(e) : T,
                    n = I.eq(e).length ? I.eq(e) : t.next(j.target);
                return t.addClass("active"), n.css("display", "block"), w.call(this, "show", { target: T[e] }), this
            }

            function u(e) {
                var e = Number(e) || 0,
                    t = T.eq(e).length ? T.eq(e) : T,
                    n = I.eq(e).length ? I.eq(e) : t.next(j.target);
                return t.removeClass("active"), n.css("display", "none"), w.call(this, "hide", { target: T[e] }), this
            }

            function d() { return L.length > 1 ? L.each(function(e, t) { f(0, t) }) : f(0), w.call(this, "show", { target: T[0] }), this }

            function f(e, n) {
                var e = e || 0;
                (n ? t(n) : L).children(j.handle).eq(e).addClass("active").next(j.target).css("display", "block")
            }

            function h() { return T.each(function(e, n) { t(n).addClass("active").next(j.target).css("display", "block") }), w.call(this, "showall", { target: T }), this }

            function p() { return T.each(function(e, n) { t(n).removeClass("active").next(j.target).css("display", "none") }), w.call(this, "hideall", { target: T }), this }

            function g(e) { L && (L.off("click.bui"), L.remove(), L = null), y("hide"), y("show") }

            function v(t) { var n = {}; return e.widget.call(n, t) }

            function m(t, n) { return e.option.call(O, t, n) }

            function b(t, n) { return e.on.apply(O, arguments), this }

            function y(t, n) { return e.off.apply(O, arguments), this }

            function w(t) { O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments) }
            var x, k, T, I, C = { id: "", handle: "dt", target: "dd", height: 0, targetHeight: 0, single: !1, stopPropagation: !1, lock: !1, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
                O = { handle: {}, on: b, off: y, showFirst: d, showAll: h, hideAll: p, disabled: r, enabled: l, destroy: g, show: s, hide: u, widget: v, option: m, config: j, init: i },
                j = O.config = t.extend(!0, {}, C, e.config.accordion, n),
                L = null,
                S = !1;
            return j.autoinit && i(j), O
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.rating = function(n) {
            function i(n) { var i = t.extend(!0, O, n); return i.onBeforeInit && i.onBeforeInit.call(C, i), i.id ? (y = e.obj(i.id), O = C.config = i, w = i.fullClassName, x = i.halfClassName, l(i), j || r(i), i.onInited && i.onInited.call(C, i), this) : void e.hint("rating id不能为空") }

            function o(t) {
                var n = (e.guid(), ""),
                    i = 0,
                    o = t.stars;
                for (i = 0; i < o; i++) n += '<div class="bui-rating-cell" ></div>';
                return n
            }

            function a(e) {
                var t, n = "",
                    e = String(e) || String(k),
                    i = 0,
                    o = O.stars,
                    a = [];
                a = e.indexOf(".") > -1 ? e.split(".") : [e, 0];
                var r = parseInt(a[0]);
                for (t = a[1] / 10 * 100 + "%", i = 0; i < o; i++) i < r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:100%;">&nbsp;</div></div>'), i == r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:' + t + ';">&nbsp;</div></div>'), i > r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:0;">&nbsp;</div></div>');
                return n
            }

            function r(e) {
                if (!e.disabled) {
                    var n = String(e.value).indexOf(".") > -1 ? 1 : 0;
                    y.off("click.bui", e.handle).on("click.bui", e.handle, function(i) {
                        var o = t(this).index(),
                            a = parseInt(s()),
                            r = 0;
                        if (e.half) { r = n % 2 == 0 ? o + .5 : o + 1 } else r = o + 1;
                        c(r), s(r), n++, a !== r && e.onChange && e.onChange.call(C, i), e.callback && e.callback.call(C, i), i.stopPropagation()
                    })
                }
                j = !0
            }

            function l(e) {
                if (e.render) {
                    var t = o(e);
                    y.html(t), T = y.children(e.handle)
                } else T = y.children(e.handle);
                s(e.value)
            }

            function c(e) {
                var n = [];
                e = String(e), O.half && e.indexOf(".") > -1 ? n = e.split(".") : n.push(e), T.removeClass(w).removeClass(x), T.each(function(e, i) { 1 == n.length && e < n[0] ? t(i).addClass(w) : 2 == n.length && (e < n[0] && t(i).addClass(w), e == n[0] && t(i).addClass(x)) })
            }

            function s(e) { return "number" == typeof e ? (y.attr("value", e), c(e), k = e, b.call(C, "change", e)) : k = y.attr("value"), k }

            function u(e) {
                var t = a(e);
                y.attr("value", e).html(t), k = e
            }

            function d(e) { var e = 0 != e; return e ? (y.off("click.bui", O.handle), b.call(C, "disabled")) : f(), this }

            function f(e) { return O.disabled = !1, r(), b.call(C, "undisabled"), this }

            function h(e) {
                var e = 1 == e;
                y && (y.off("click.bui"), e && y.remove()), m("change")
            }

            function p(t) { var n = {}; return e.widget.call(n, t) }

            function g(t, n) { return e.option.call(C, t, n) }

            function v(t, n) { return e.on.apply(C, arguments), this }

            function m(t, n) { return e.off.apply(C, arguments), this }

            function b(t) { C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments) }
            var y, w, x, k, T, I = { id: "", handle: ".bui-rating-cell", fullClassName: "bui-rating-cell-full", halfClassName: "bui-rating-cell-half", half: !1, stars: 5, value: 0, disabled: !1, render: !0, autoinit: !0, onBeforeInit: null, onChange: null, onInited: null, callback: null },
                C = { handle: {}, on: v, off: m, disabled: d, show: u, value: s, destroy: h, widget: p, option: g, config: O, init: i },
                O = C.config = t.extend(!0, {}, I, e.config.rating, n),
                j = !1;
            return O.autoinit && i(O), C
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.actionsheet = function(i) {
            function o(t) {
                var i = n.extend(!0, C, t);
                if (i.onBeforeInit && i.onBeforeInit.call(I, i), x = e.obj(i.trigger), C = I.config = i, O) e.obj(C.id).find(".bui-list").html(l(i.data || i.buttons));
                else {
                    var o = "function" == typeof i.template ? i.template.call(I, i.data || i.buttons) : r(i.data || i.buttons);
                    e.obj(i.appendTo).append(o)
                }
                return y || (y = e.dialog({ id: C.id, position: i.position, mask: i.mask, effect: i.effect, opacity: i.opacity, onBeforeOpen: i.onBeforeOpen, onBeforeClose: i.onBeforeClose, onMask: function() { c(), i.onMask && i.onMask() } })), k = y.$el(), w = k.find(i.handle), O || a(), i.onInited && i.onInited.call(I, i), this
            }

            function a() {
                var e = function(e) { e.target = this, C.callback && C.callback.call(I, e, I), b.call(I, "click", e) },
                    t = function(e) { n(this).hasClass("disabled") || s.call(this) };
                k && k.off("click.bui", C.handle).on("click.bui", C.handle, e), x && x.off("click.bui").on("click.bui", t), O = !0
            }

            function r(e) {
                var t = parseFloat(C.width),
                    n = t > 0 ? "width:" + t + "px;left:50%;right:0;margin-left:-" + t / 2 + "px;" : "",
                    i = "";
                return e && e.length && (i += '<div id="' + C.id + '" class="bui-actionsheet" style="' + n + '">', i += '    <ul class="bui-list">', i += l(e), i += "    </ul>", C.cancelText && (i += '    <div class="bui-btn" value="cancel">' + C.cancelText + "</div>"), i += "</div>"), i
            }

            function l(e) { var t = ""; return n.each(e, function(e, n) { t += '        <li class="bui-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || "") + "</li>" }), t }

            function c(e) { b.call(this, "beforehide"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(I), b.call(I, "hide") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), y.isOpen() && y.close(n), this }

            function s(e) { b.call(this, "beforeshow"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(I), b.call(I, "show") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), !y.isOpen() && y.open(n), this }

            function u(e) { var t = x; return t && t.addClass("disabled"), this }

            function d() { var e = x; return e && e.removeClass("disabled"), this }

            function f(e) {
                var e = 1 == e;
                x && x.off("click.bui"), m("hide"), m("show"), y && y.destroy(e)
            }

            function h(t) { var n = { dialog: y }; return e.widget.call(n, t) }

            function p(t, n) { return "buttons" == t && void 0 !== n ? g(t, n) : e.option.call(I, t, n) }

            function g(t, n) {
                if (n && "array" === e.typeof(n)) {
                    var i = l(n);
                    e.obj(C.id).find(".bui-list").html(i)
                }
            }

            function v(t, n) { return e.on.apply(I, arguments), this }

            function m(t, n) { return e.off.apply(I, arguments), this }

            function b(t) { I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments) }
            var y, w, x, k, T = { id: "", appendTo: ".bui-page", trigger: "", handle: ".bui-btn", position: "bottom", effect: "fadeInUp", width: 0, mask: !0, opacity: .6, data: null, buttons: [], template: null, cancelText: "取消", autoinit: !0, onMask: null, onBeforeOpen: null, onBeforeClose: null, onBeforeInit: null, onInited: null, callback: null },
                I = { handle: {}, on: v, off: m, disabled: u, enabled: d, hide: c, show: s, destroy: f, widget: h, option: p, config: C, init: o },
                C = I.config = n.extend(!1, {}, T, e.config.actionsheet, i),
                O = !1;
            return C.id = C.id || e.guid(), C.autoinit && o(C), I
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.number = function(i) {
            function o(i) { var o = n.extend(!0, B, i); return o.onBeforeInit && o.onBeforeInit.call(N, o), F = !1, I = o.max, C = o.min, O = o.step, M = e.obj(o.parentId), "object" === t(o.id) ? (P = e.obj(o.id), R = !1) : "string" == typeof o.id && 0 === o.id.indexOf("#") ? (P = e.obj(o.id), R = !0) : (P = M.find(o.id), R = !1), B = N.config = o, o.render && r(o), j = P.children(o.prev), L = P.children(o.next), S = P.children(o.input), D || c(o), o.disabled && S.attr("disabled", "disabled"), u(o.value), o.target = S, o.value = o.value, o.onInited && o.onInited.call(N, o), o.inited && o.inited.call(N, o), this }

            function a(e) { var t = ""; return t += '    <div class="bui-number-prev"><i class="icon-minus"></i></div>', t += '    <input type="text" name="' + e.name + '" value="' + e.value + '"/>', t += '    <div class="bui-number-next"><i class="icon-plus"></i></div>' }

            function r(e) { var t = a(e); return P.html(t), this }

            function l(t) { return e.selector.call(P, t) }

            function c(t) {
                var i = ".bui-number " + t.input,
                    o = ".bui-number " + t.prev,
                    a = ".bui-number " + t.next,
                    r = function(e) {
                        var i = n(this).val();
                        e.value = i, t.onInput && t.onInput.call(N, e), e.stopPropagation()
                    },
                    l = function(e) { var i = t.autocheck && isNaN(parseInt(n(this).val(), 10)) ? 0 : parseInt(n(this).val(), 10); /^[0-9]*$/i.test(i) && u.call(this, i), e.value = i, t.onChange && t.onChange.call(N, e), e.stopPropagation() },
                    c = function(e) {
                        var i = n(this).next(B.input);
                        e.value = i.val(), v.call(i, e), t.callback && t.callback.call(N, e), e.preventDefault(), e.stopPropagation()
                    },
                    s = function(e) {
                        var i = n(this).prev(B.input);
                        e.value = i.val(), m.call(i, e), t.callback && t.callback.call(N, e), e.preventDefault(), e.stopPropagation()
                    };
                return R ? (t.onInput && P.off("input", t.input).on("input", t.input, e.unit.debounce(r, 400)), P.off("change", t.input).on("change", t.input, l), P.off("click.bui", t.prev).on("click.bui", t.prev, c), P.off("click.bui", t.next).on("click.bui", t.next, s)) : (t.onInput && M.off("input", i).on("input", i, e.unit.debounce(r, 400)), M.off("change", i).on("change", i, l), M.off("click.bui", o).on("click.bui", o, c), M.off("click.bui", a).on("click.bui", a, s)), D = !0, this
            }

            function s() { g(); var e = this == N ? S : n(this); return parseInt(e.val(), 10) }

            function u(e) {
                g();
                var t = this == N ? S : n(this);
                return Array.prototype.slice.call(t).forEach(function(t, n) {
                    var i = t.getAttribute("max") || t.parentElement.getAttribute("data-max") || B.max,
                        o = t.getAttribute("min") || t.parentElement.getAttribute("data-min") || B.min,
                        a = B.autocheck ? d(e, o, i) : e;
                    t.value = a;
                    T.call(N, "change", { target: t, value: e }), B.onChange && B.onChange.call(N, { target: t, value: e })
                }), this
            }

            function d(e, t, n) { var i = e || 0; return i > n && (i = n), i < t && (i = t), i && i >= t && i <= n && (i = i), i }

            function f(e) { var t = 0; return void 0 !== e ? (u.call(this, e), t = e) : t = s.call(this), t }

            function h(t) {
                if (P.length < 1 && (P = M.find(B.id)), t && "array" === e.typeof(t)) return Array.prototype.slice.call(P).forEach(function(e, n) {
                    (e.id || e.getAttribute("name") || "") == t[n].id && (e.querySelector("input").value = t[n].value)
                }), this;
                var n = [];
                return Array.prototype.slice.call(P).forEach(function(e, t) {
                    var i = e.id || e.getAttribute("name") || "",
                        o = parseInt(e.querySelector("input").value, 10);
                    n.push({ id: i, value: o })
                }), n
            }

            function p(e) {
                g();
                var t = this == N ? S : n(this),
                    e = 0 != e;
                return e ? t.attr("disabled", "disabled") : t.removeAttr("disabled"), this
            }

            function g() { "object" === t(B.id) ? (P = e.obj(B.id), R = !1) : "string" == typeof B.id && 0 === B.id.indexOf("#") ? (P = e.obj(B.id), R = !0) : (P = M.find(B.id), R = !1), j = P.children(B.prev), L = P.children(B.next), S = P.children(B.input) }

            function v() {
                g();
                var e = this == N ? S : n(this),
                    t = e.val(),
                    i = parseInt(t, 10),
                    o = i -= O;
                return u.call(e, o), T.call(N, "prev", o), this
            }

            function m() {
                g();
                var e = this == N ? S : n(this),
                    t = e.val(),
                    i = parseInt(t, 10),
                    o = i += O;
                return u.call(e, o), T.call(N, "next", o), this
            }

            function b(e) {
                var e = 1 == e;
                P = M.find(B.id), P && (P.off("click.bui"), P.off("input"), e && P.remove()), k("prev"), k("next"), k("change"), F = !0
            }

            function y(t) { var n = {}; return e.widget.call(n, t) }

            function w(t, n) { return e.option.call(N, t, n) }

            function x(t, n) { return e.on.apply(N, arguments), this }

            function k(t, n) { return e.off.apply(N, arguments), this }

            function T(t) { N.self = this == window || this == N ? null : this, e.trigger.apply(N, arguments) }
            var I, C, O, j, L, S, P, E = { parentId: ".bui-page", id: ".bui-number", min: 0, max: 100, step: 1, value: 1, disabled: !1, render: !0, tips: !1, autocheck: !0, name: "", prev: ".bui-number-prev", input: "input", next: ".bui-number-next", onInput: null, autoinit: !0, inited: null, onBeforeInit: null, onInited: null, onChange: null, callback: null },
                N = { handle: {}, on: x, off: k, $el: l, disabled: p, value: f, values: h, prev: v, next: m, destroy: b, widget: y, option: w, config: B, init: o },
                B = N.config = n.extend(!0, {}, E, e.config.number, i),
                D = !1,
                R = !1,
                F = !1,
                M = null;
            return B.autoinit && o(B), N
        }
    }(bui || {}, libs),
    function(e, t) {
        e.stepbar = function(n) {
            function i(n) {
                var i = t.extend(!0, y, n);
                if (i.onBeforeInit && i.onBeforeInit.call(b, i), !i.id) return void e.hint("stepbar id不能为空");
                g = e.obj(i.id), y = b.config = i;
                var l = "function" == typeof i.template ? i.template.call(b, i.data) : o(i.data);
                return i.lineCenter && g.addClass("bui-stepbar-center"), i.data.length && g.html(l), v = g.children(), w || a(i), "number" == typeof i.value && r(i.value), i.onInited && i.onInited.call(b, i), this
            }

            function o(e) {
                var n = "";
                return t.each(e, function(e, t) {
                    var i = y.hasNumber ? e + 1 : "",
                        o = y.hasNumber ? "bui-stepbar-number " : "",
                        a = t.className || "";
                    n += '<div class="bui-stepbar-cell ' + o + a + '">', n += '    <span class="bui-stepbar-dot">' + i + "</span>", n += '    <div class="bui-stepbar-text">', t.title && (n += "        <h3>" + t.title + "</h3>"), t.subtitle && (n += '        <p class="bui-stepbar-time">' + t.subtitle + "</p>"), t.content && (n += '        <p class="bui-stepbar-desc">' + t.content + "</p>"), n += "    </div>", n += "</div>"
                }), n
            }

            function a(e) {
                var n = function(n) {
                    if (e.click) { r(t(this).index()) }
                    e.callback && e.callback.call(b, n, b)
                };
                return g.off("click.bui", e.handle).on("click.bui", e.handle, n), w = !0, this
            }

            function r(e, n) { if (n = n || "", "number" == typeof e) return e = e >= v.length - 1 ? v.length - 1 : e < 0 ? 0 : e, v.each(function(i, o) { i < e && t(o).removeClass("active " + n).addClass("visited"), i == e && t(o).removeClass("visited " + n).addClass("active " + n), i > e && t(o).removeClass("visited active " + n) }), p.call(this, "change", e), e; var e = g.children(".active").index(); return e }

            function l(e) { var t = r() + 1; return p.call(this, "next", t), r(t, e) }

            function c(e) { var t = r() - 1; return p.call(this, "prev", t), r(t, e) }

            function s(e) {
                var e = 1 == e;
                g && (g.off("click.bui"), e && g.remove()), h("next"), h("prev"), h("change")
            }

            function u(t) { var n = {}; return e.widget.call(n, t) }

            function d(t, n) { return e.option.call(b, t, n) }

            function f(t, n) { return e.on.apply(b, arguments), this }

            function h(t, n) { return e.off.apply(b, arguments), this }

            function p(t) { b.self = this == window || this == b ? null : this, e.trigger.apply(b, arguments) }
            var g, v, m = { id: null, handle: ".bui-stepbar-cell", hasNumber: !1, lineCenter: !1, click: !0, autoinit: !0, data: [], template: null, value: null, onBeforeInit: null, onInited: null, callback: null },
                b = { handle: {}, on: f, off: h, value: r, next: l, prev: c, destroy: s, widget: u, option: d, config: y, init: i },
                y = b.config = t.extend(!0, {}, m, e.config.stepbar, n),
                w = !1;
            return y.autoinit && i(y), b
        }
    }(window.bui || {}, window.libs);
    var l = function(e) {
        function t(e) { return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e) }

        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
            }
            return e
        }

        function i(e, t) {
            "string" != typeof t && (t += "ms");
            for (var n = 0; n < e.length; n++) {
                var i = e[n].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
            }
            return e
        }

        function o(e, t) { var n, i, o, a; return void 0 === t && (t = "x"), o = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), a = new WebKitCSSMatrix("none" === i ? "" : i)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0 }
        var a = this,
            r = { updateValuesOnTouchmove: !1, rotateEffect: !1, momentumRatio: 7, freeMode: !1 };
        e = e || {};
        for (var l in r) void 0 === e[l] && (e[l] = r[l]);
        a.params = e, a.cols = [], a.initialized = !1;
        var c = function() {
            var e = navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = e.match(/(iPad).*OS\s([\d_]+)/),
                i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !n && e.match(/(iPhone\sOS)\s([\d_]+)/),
                a = n || i || o,
                r = !!t;
            return a || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !r
        }();
        return a.setValue = function(e, t) { var n = 0; if (0 === a.cols.length) return a.value = e, void a.updateValue(e); for (var i = 0; i < a.cols.length; i++) a.cols[i] && !a.cols[i].divider && (a.cols[i].setValue(e[n], t), n++) }, a.updateValue = function(e) {
            for (var t = e || [], n = [], i = 0; i < a.cols.length; i++) a.cols[i].divider || (t.push(a.cols[i].value), n.push(a.cols[i].displayValue));
            t.indexOf(void 0) >= 0 || (a.value = t, a.displayValue = n, a.params.onChange && a.params.onChange(a, a.value, a.displayValue))
        }, a.initPickerCol = function(e, r) {
            function l(e) {
                if (!k && !x) {
                    var t = e.originalEvent || e;
                    t.preventDefault(), x = !0, T = I = t.targetTouches ? t.targetTouches[0].pageY : t.pageY, C = (new Date).getTime(), B = !0, j = S = o(p.wrapper[0], "y")
                }
            }

            function s(e) {
                if (x) {
                    var r = e.originalEvent || e;
                    r.preventDefault(), B = !1, I = r.targetTouches ? r.targetTouches[0].pageY : r.pageY, k || (t(w), k = !0, j = S = o(p.wrapper[0], "y"), i(p.wrapper, "0ms")), r.preventDefault();
                    S = j + (I - T), L = void 0, S < b && (S = b - Math.pow(b - S, .8), L = "min"), S > y && (S = y + Math.pow(S - y, .8), L = "max"), n(p.wrapper, "translate3d(0," + S + "px,0)"), p.updateItems(void 0, S, 0, a.params.updateValuesOnTouchmove), E = S - P || S, N = (new Date).getTime(), P = S
                }
            }

            function u(e) {
                if (!x || !k) return void(x = k = !1);
                x = k = !1, i(p.wrapper, ""), L && ("min" === L ? n(p.wrapper, "translate3d(0," + b + "px,0)") : n(p.wrapper, "translate3d(0," + y + "px,0)")), O = (new Date).getTime();
                var t;
                O - C > 300 ? t = S : (Math.abs(E / (O - N)), t = S + E * a.params.momentumRatio), t = Math.max(Math.min(t, y), b);
                var o = -Math.floor((t - y) / v);
                a.params.freeMode || (t = -o * v + y), n(p.wrapper, "translate3d(0," + parseInt(t, 10) + "px,0)"), p.updateItems(o, t, "", !0), setTimeout(function() { B = !0 }, 100)
            }

            function d(e) {
                if (B) {
                    t(w);
                    var n = $(this).attr("data-picker-value");
                    p.setValue(n)
                }
            }
            var f = $(e),
                h = f.index(),
                p = a.cols[h];
            if (!p.divider) {
                p.container = f, p.wrapper = p.container.find(".picker-items-col-wrapper"), p.items = p.wrapper.find(".picker-item");
                var g, v, m, b, y;
                p.replaceValues = function(e, t, n) {
                    p.destroyEvents(), p.values = e, p.displayValues = t;
                    var i = a.columnHTML(p, !0);
                    p.wrapper.html(i), p.items = p.wrapper.find(".picker-item"), p.calcSize(), p.setValue(n || p.values[0], 0, !0), p.initEvents()
                }, p.calcSize = function() {
                    a.params.rotateEffect && (p.container.removeClass("picker-items-col-absolute"), p.width || (p.container[0].style.width = ""));
                    var e, t;
                    e = 0, t = p.container[0].offsetHeight, g = p.wrapper[0].offsetHeight, v = p.items[0].offsetHeight, m = v * p.items.length, b = t / 2 - m + v / 2, y = t / 2 - v / 2, p.width && (e = p.width, parseInt(e, 10) === e && (e += "px"), p.container[0].style.width = e), a.params.rotateEffect && (p.width || (p.items.each(function() {
                        var t = $(this);
                        t[0].style.width = "auto", e = Math.max(e, t[0].offsetWidth), t[0].style.width = ""
                    }), p.container[0].style.width = e + 2 + "px"), p.container.addClass("picker-items-col-absolute"))
                }, p.calcSize(), n(p.wrapper, "translate3d(0," + y + "px,0)"), i(p.wrapper, "0ms");
                var w;
                p.setValue = function(e, t, o) {
                    void 0 === t && (t = "");
                    var a = p.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
                    void 0 !== a && -1 !== a || (a = 0);
                    var r = -a * v + y;
                    n(p.wrapper, "translate3d(0," + r + "px,0)"), i(p.wrapper, t + "ms"), p.updateItems(a, r, t, o)
                }, p.updateItems = function(e, t, r, l) {
                    void 0 === t && (t = o(p.wrapper[0], "y")), void 0 === e && (e = -Math.round((t - y) / v)), e < 0 && (e = 0), e >= p.items.length && (e = p.items.length - 1);
                    var s = p.activeIndex;
                    p.wrapper.find(".picker-selected").removeClass("picker-selected"), i(p.items, r);
                    var u = p.items.eq(e).addClass("picker-selected");
                    if (n(u, ""), a.params.rotateEffect) {
                        Math.floor((t - y) / v);
                        p.items.each(function() {
                            var e = $(this),
                                i = e.index() * v,
                                o = y - t,
                                a = i - o,
                                r = a / v,
                                l = Math.ceil(p.height / v / 2) + 1,
                                s = -18 * r;
                            s > 180 && (s = 180), s < -180 && (s = -180), Math.abs(r) > l ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), n(e, "translate3d(0, " + (-t + y) + "px, " + (c ? -110 : 0) + "px) rotateX(" + s + "deg)")
                        })
                    }(l || void 0 === l) && (p.value = u.attr("data-picker-value"), p.displayValue = p.displayValues ? p.displayValues[e] : p.value, s != e && (p.onChange && p.onChange(a, p.value, p.displayValue), a.updateValue()))
                }, r && p.updateItems(0, y, 0);
                var x, k, T, I, C, O, j, L, S, P, E, N, B = !0;
                p.initEvents = function(e) {
                    var t = /hp-tablet/gi.test(navigator.appVersion),
                        n = "ontouchstart" in window && !t,
                        i = n ? "touchstart" : "mousedown",
                        o = n ? "touchmove" : "mousemove",
                        a = n ? "touchend" : "mouseup",
                        r = e ? "off" : "on";
                    p.container[r](i, l), p.container[r](o, s), p.container[r](a, u), "mouseup" == a && document.documentElement.addEventListener("mouseleave", u, !1), p.items[r]("click", d)
                }, p.destroyEvents = function() { p.initEvents(!0) }, p.initEvents()
            }
        }, a.columnHTML = function(e, t) {
            var n = "",
                i = "";
            if (e.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
            else {
                for (var o = 0; o < e.values.length; o++) n += '<div class="picker-item" data-picker-value="' + e.values[o] + '">' + (e.displayValues ? e.displayValues[o] : e.values[o]) + "</div>";
                i += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>"
            }
            return t ? n : i
        }, a.layout = function() {
            var e, t = "",
                n = "";
            a.cols = [];
            var i = "";
            for (e = 0; e < a.params.cols.length; e++) {
                var o = a.params.cols[e];
                i += a.columnHTML(a.params.cols[e]), a.cols.push(o)
            }
            n = "picker-modal picker-columns " + (a.params.cssClass || "") + (a.params.rotateEffect ? " picker-3d" : ""), t = '<div class="' + n + '"><div class="picker-modal-inner picker-items">' + i + '<div class="picker-center-highlight"></div></div></div>', a.pickerHTML = t
        }, a.init = function() {
            a.initialized || (a.layout(), a.container = $(a.pickerHTML), a.container.addClass("picker-modal-inline"), $(a.params.container).html(a.container), a.container.find(".picker-items-col").each(function() {
                var e = !0;
                (!a.initialized && a.params.value || a.initialized && a.value) && (e = !1), a.initPickerCol(this, e)
            }), a.value ? a.setValue(a.value, 0) : a.params.value && a.setValue(a.params.value, 0)), a.initialized = !0
        }, a.init(), a
    };
    ! function(e, t) { e.picker = function(e) { return new l(e) } }(window.bui || {}, window.libs),
    function(e, n) {
        e.pickerdate = function() {
            function i(e, t) {
                if (e && e.constructor == Date) return e;
                if ("number" == typeof e && 13 === String(e).length) return new Date(e);
                e = String(e);
                var n = new Date,
                    i = n.getFullYear(),
                    o = n.getMonth() + 1,
                    a = n.getDate();
                return e = e.replace(/[-|年|月]/gim, "/").replace(/[时|分|秒|小时|分钟]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, function(e, t) { return t + "/1" }).replace(/[日|号]/gim, "").replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, function(e, t) { return n.getFullYear() + "/" + t }), e.indexOf("/") < 0 && e.indexOf(":") > -1 && (e = i + "/" + o + "/" + a + " " + e), 4 === e.length ? e += "/1/1 00:00:00" : "MM" === t || "M" === t ? e = i + "/" + e + "/1 00:00:00" : "dd" !== t && "d" !== t || (e = i + "/" + o + "/" + e + " 00:00:00"), new Date(e)
            }

            function o(e, t) { var e, t, n = new Date; return n.getTime() < e.getTime() ? e : n.getTime() > t.getTime() ? t : n }

            function a(a) {
                function r(e) { var t = new Date("1970/1/1"); return E.forEach(function(n, i) { t["set" + n](e[j[n]].value - ("Month" == n ? 1 : 0)) }), t }

                function l(e) { var t = i(e); return E.map(function(e, n) { return t["get" + e]() + ("Month" == e ? 1 : 0) }) }

                function c() {
                    if (!n(this).hasClass("disabled")) {
                        if (O.bindValue) {
                            k = n(this), T.el = this;
                            var e = k.val() || k.text();
                            T.value(e)
                        }
                        C && !C.isOpen() && C.open()
                    }
                }

                function s(t) { T.self = this == window || this == T ? null : this, e.trigger.apply(T, arguments) }
                var u, d, f, h, p, g, v, m, b, y, w = e.guid(),
                    x = { id: w, title: "", height: 260, popup: !0, mask: !0, autoinit: !0, bindValue: !1, handleParent: "", position: "bottom", effect: "fadeInUp", appendTo: "", rotateEffect: !1, buttons: [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], onBeforeInit: null, onInited: null, onMask: function() { C && C.close() }, callback: null },
                    k = null,
                    T = this,
                    I = function() {},
                    C = null,
                    O = n.extend(!0, {}, x, a);
                O.appendTo = O.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), O.callback = function(e) {
                    var t = a.callback && a.callback.call(T, e);
                    if (!1 === t) return !1;
                    if (1 == t || void 0 === t)
                        if ("取消" == n(e.target).text().trim() || "cancel" == n(e.target).text().trim() || "关闭" == n(e.target).text().trim()) try {
                            var o = i(u);
                            T.value(o)
                        } catch (e) {} else u = T.value();
                    k = null
                };
                var j = {},
                    L = ["FullYear", "Month", "Date"],
                    S = ["Hours", "Minutes", "Seconds"],
                    P = { FullYear: "year", Month: "month", Date: "date", Hours: "hour", Minutes: "minute", Seconds: "second" },
                    E = [],
                    N = !1;
                this.config = {}, this.option = function() {}, this.cols = function(e) { e = e || {}; var t = []; return b = [], m = [], j = {}, E = [], L.forEach(function(n, i) { "none" !== e[P[n]] && (E.push(n), t.push(n)) }), S.forEach(function(t, n) { "none" !== e[P[t]] && (E.push(t), b.push(t)) }), t.forEach(function(t, n) { j[t] = m.length, m.push(R[t](e[P[t]])) }), b.forEach(function(n, i) { 0 == i && 0 != t.length ? m.push(R.Space()) : m.push(R.Divider()), 0 == t.length && (m[0].content = ""), j[n] = m.length, m.push(R[n](e[P[n]])) }), T.picker && (T.picker.params.cols = m, T.picker.initialized = !1, T.picker.init()), N = !1, this }, this.id = function(e) { e && !p && (p = e) }, this.reset = function() { return T.picker && (T.picker.initialized = !1, T.picker.init()), this }, this.empty = function() { return T.picker && e.obj(a.handle).val(""), this }, this.min = function(e) { var t = (new Date).getFullYear() - 1 + "/01/01 00:00:00"; return f = i(e || O.min || t), this }, this.max = function(e) { var t = (new Date).getFullYear() + 1 + "/12/31 00:00:00"; return h = i(e || O.max || t), this }, this.value = function(e) {
                    if (e) {
                        var t = i(e, T.config.formatValue),
                            n = l(t);
                        return T.picker.setValue(n, 0), this
                    }
                    return v(T.picker, T.value, T.displayValue)
                }, this.handle = function(t) { return t && d !== t && (d = t, a.handleParent ? e.$(a.handleParent).off("click.bui", d).on("click.bui", d, c) : e.$(d).off("click.bui").on("click.bui", c), c.hasOpen = !1, d = t), this };
                var B = {
                    y: function(e, t) { return e.getFullYear().toString().slice(-t) },
                    M: function(e, t) { return ((t > 1 ? "0" : "") + (e.getMonth() + 1)).slice(-2) },
                    d: function(e, t) { return ((t > 1 ? "0" : "") + e.getDate()).slice(-2) },
                    h: function(e, t) { return ((t > 1 ? "0" : "") + e.getHours()).slice(-2) },
                    m: function(e, t) {
                        return ((t > 1 ? "0" : "") + e.getMinutes()).slice(-2)
                    },
                    s: function(e, t) { return ((t > 1 ? "0" : "") + e.getSeconds()).slice(-2) }
                };
                this.formatValue = function(e) { return v = function(t, n, i) { var o = r(t.cols); return e.replace(/y+|M+|d+|h+|m+|s+/g, function(e) { return B[e[0]](o, e.length) }) }, T.picker && T.picker.updateValue(), N = !1, this }, this.formatDate = function(e, t) {
                    if (null == e) return "";
                    var n = i(e);
                    t = t || "yyyy-MM-dd";
                    var o = { "M+": n.getMonth() + 1, "d+": n.getDate(), "h+": n.getHours(), "m+": n.getMinutes(), "s+": n.getSeconds(), "q+": Math.floor((n.getMonth() + 3) / 3), S: n.getMilliseconds() };
                    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
                    for (var a in o) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[a] : ("00" + o[a]).substr(("" + o[a]).length)));
                    return t
                }, this.onChange = function(t) { var n = this; return g = O.bindValue ? function(i) { k ? k[0] && "INPUT" === k[0].nodeName ? k.val(i) : k.text(i) : e.obj(d).each(function(e, t) { "INPUT" === t.nodeName ? t.value = i : t.innerTEXT = i }), t && t.call(n, i) } : t || I, s.call(this, "change", y), this }, this.popup = function(i) {
                    if (O.popup && !C) {
                        var o = '<div id="' + w + '" class="bui-dialog" >';
                        O.title && (o += '<div class="bui-dialog-head">' + O.title + "</div>"), o += '<div class="bui-dialog-main"><div id="' + w + '-picker"></div></div>', O.buttons && O.buttons.length && (o += '<div class="bui-dialog-foot bui-box">', n.each(O.buttons, function(e, n) {
                            var i = "object" == (void 0 === n ? "undefined" : t(n)) && "className" in n ? " " + n.className : "",
                                a = "object" == (void 0 === n ? "undefined" : t(n)) && "name" in n ? n.name : n;
                            o += '<div class="span1"><div class="bui-btn' + i + '">' + a + "</div></div>"
                        }), o += "</div>"), o += "</div>";
                        n(O.appendTo).append(o);
                        p = e.obj(w + "-picker")
                    }
                    return this
                };
                var D = function(e, t, n) {
                        var i = r(e.cols),
                            o = f["get" + t](),
                            a = h["get" + t](),
                            l = i.getTime(),
                            c = f.getTime(),
                            s = h.getTime();
                        return l < c && i["get" + t]() < o ? ("Month" == t && (o += 1), void e.cols[j[t]].setValue(o)) : l > s && i["get" + t]() > a ? ("Month" == t && (a += 1), void e.cols[j[t]].setValue(a)) : void(n && (l < c || l > s) && e.cols[j[n]].onChange(e))
                    },
                    R = {};
                R.FullYear = function(e) { return e = e || { values: function() { for (var e = [], t = f.getFullYear(), n = h.getFullYear(), i = t; i <= n; i++) e.push(i); return e }() }, { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { D(e, "FullYear", j.Month ? "Month" : "") } } }, R.Month = function(e) {
                    return e = e || { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], displayValues: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, {
                        values: e.values,
                        displayValues: e.displayValues,
                        textAlign: "right",
                        onChange: function(e, t, n) {
                            for (var i = new Date, o = e.cols[j.FullYear] ? e.cols[j.FullYear].value : i.getFullYear(), a = e.cols[j.Month] ? e.cols[j.Month].value : i.getMonth() + 1, r = new Date(o, parseInt(a), 0).getDate(), l = [], c = 1; c <= r; c++) l.push(c);
                            var s = e.cols[j.Date];
                            s && s.replaceValues && s.replaceValues(l, null, s.value < r ? s.value : r), D(e, "Month", j.Date ? "Date" : "")
                        }
                    }
                }, R.Date = function(e) {
                    return e = e || {
                        values: function() {
                            var e = 31,
                                t = [];
                            do { t.unshift(e) } while (e--);
                            return t
                        }(),
                        displayValues: function() {
                            var e = 31,
                                t = [];
                            do { t.unshift(e + "天") } while (e--);
                            return t
                        }()
                    }, { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { D(e, "Date") } }
                }, R.Space = function() { return { divider: !0, content: "  " } }, R.Hours = function(e) { return e = e || function() { for (var e = [], t = [], n = 0; n < 24; n++) e.push(n), t.push(("0" + n).slice(-2)); return { values: e, displayValues: t } }(), { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { D(e, "Hours", j.Minutes ? "Minutes" : "") } } }, R.Divider = function() { return { divider: !0, textAlign: "center", content: ":" } }, R.Minutes = function(e) { return e = e || function() { for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2)); return { values: e, displayValues: t } }(), { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { D(e, "Minutes", j.Seconds ? "Seconds" : "") } } }, R.Seconds = function(e) { return e = e || function() { for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2)); return { values: e, displayValues: t } }(), { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { D(e, "Seconds") } } }, T.init = function(t) {
                    var a = n.extend(!0, O, t);
                    a.onBeforeInit && a.onBeforeInit.call(T, a), T.config = a, T.min(a.min), T.max(a.max), T.cols(a.cols), T.id(a.id), T.$el = e.obj(a.handle) || null, T.el = T.$el ? T.$el[0] : null, T.handle(a.handle), T.popup(a), T.onChange(a.onChange), T.formatValue(a.formatValue || "yyyy-MM-dd hh:mm:ss"), T.picker = e.picker({
                        container: p,
                        rotateEffect: a.rotateEffect,
                        value: l(a.value ? i(a.value) : o(f, h)),
                        onChange: function(e, t, n) {
                            var i = v(e, t, n);
                            y != i && (y = i, g && g.call(T, i), s.call(this, "change", i))
                        },
                        cols: m
                    }), a.popup && !C && (C = e.dialog.call(T, a), C && C.on("open", function() { u = v(T.picker, T.value, T.displayValue), T.picker && (T.picker.initialized = !1, T.picker.init()), s.call(T, "show") }), C && C.on("close", function() { s.call(T, "hide") })), a.onInited && a.onInited.call(T, a)
                }, O.autoinit && T.init(O), this.disabled = function() { var t = e.obj(d); return t && t.addClass("disabled"), this }, this.open = function(e) { return C.open(e), this }, this.isOpen = function() { return C.isOpen() }, this.close = function(e) { return C.close(e), this }, this.modifyTitle = function(t) { return e.obj(w).find(".bui-dialog-head").html(t), this }, this.enabled = function() { var t = e.obj(d); return t && t.removeClass("disabled"), this }, this.destroy = function(e) {
                    var e = 1 == e;
                    this.off("show"), this.off("hide"), this.off("change"), C && C.destroy(e), T = null
                }, this.widget = function(t) { var n = { dialog: C || {} }; return e.widget.call(n, t) }, this.on = function(t, n) { return e.on.apply(T, arguments), this }, this.off = function(t, n) { return e.off.apply(T, arguments), this }
            }
            return function(e) { return new a(e) }
        }()
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.levelselect = function(i) {
            function o(t) {
                var i = T = M.config = n.extend(!0, {}, T, t);
                i.onBeforeInit && i.onBeforeInit.call(M, i);
                var o = "";
                i.popup ? (o = p(i), A.append(o), F || (F = bui.dialog({ id: C, height: i.height, mask: i.mask, scroll: !1, autoClose: i.autoClose, fullscreen: i.fullscreen, position: i.position, effect: i.effect, onMask: i.onMask })), j = e.obj(C)) : (o = g(i), A.append(o), j = e.objId(C)), L = e.objId(O);
                var a = 0;
                for (a = 0; a < i.level; a++) ! function(t) {
                    D[t] = e.$(".select-level-val-" + t, j), B[t] = e.$(".select-level-" + t, L), i.trigger && (R[t] = e.$(i.trigger).eq(t)), N[t] || (N[t] = bui.select({ id: B[t], type: "select", direction: "right", field: { name: i.field.name, icon: i.field.icon, image: i.field.image, value: i.field.value || i.field.name }, popup: !1, data: [], template: i.template }), N[t].on("change", function(o) {
                        i.log && console.log("change", t);
                        var a = N[t].index() || 0,
                            r = N[t].value() || 0,
                            l = N[t].text() || N[t].value();
                        P[t] = { name: l, value: r, index: a };
                        var c = [];
                        "string" == typeof i.field.data ? c = I[t][a][i.field.data] || I[t][a] : i.field.data && "array" === e.typeof(i.field.data) && i.field.data.forEach(function(e, n) { I[t][a][i.field.data[n]] && I[t][a][i.field.data[n]].length && (c = I[t][a][i.field.data[n]]) }), I[t + 1] = c, N[t + 1] && N[t + 1].option("data", c), N[t + 2] && N[t + 2].option("data", []), B[t] && B[t].find(".bui-btn").removeClass("active"), n(o.target).parents(".bui-btn").addClass("active"), f(t), D[t] && D[t].text(l), D[t + 1] && D[t + 1].text(i.placeholder), D[t + 2] && D[t + 2].text(""), R[t] && R[t].text(l), R[t + 1] && R[t + 1].text(i.placeholder), R[t + 2] && R[t + 2].text(""), o.context = { trigger: R[t], selector: D[t], index: t, select: N[t], data: I[t] };
                        var s = I[t],
                            u = I[t + 1] || [];
                        b.call(M, "change", o, s, u), i.onChange && i.onChange.call(M, o, s, u), (t == i.level - 1 || u.length < 1) && b.call(M, "lastchange", o, s, u), 1 == i.visibleNum && (i.log && console.log("next"), E.next()), i.popup && !F.isOpen() || (t == i.level - 1 ? (i.log && console.log("close"), i.autoClose && F && F.close()) : 0 != t && (i.log && console.log("next"), E.next()))
                    }), D[t].on("click.bui", function() {
                        var e = n(this).index(),
                            t = E.index();
                        1 == i.visibleNum ? E.to(e) : (e > t ? E.next() : E.prev(), n(this).addClass("active").siblings().removeClass("active"))
                    }))
                }(a);
                var r = window && window.viewport && window.viewport.height() || n(window).height(),
                    l = i.fullscreen ? r : String(i.height).indexOf("%") > -1 ? r * parseFloat(i.height) / 100 : i.height;
                i.popup && F ? F.on("open", function(e) { S = l - j.find(".select-value").height() - j.children(".bui-dialog-head").height(), u(i) }) : (S = l, u(i)), D[0] && D[0].text(i.placeholder), R[0] && R[0].text(i.placeholder), I[0] = i.data, N[0].option("data", I[0]), i.value && d(i.value), i.onInited && i.onInited.call(this, i), H = !1
            }

            function a(e, t) { return E && E.to(e, t), this }

            function r() { return E && E.prev(), this }

            function l() { return E && E.next(), this }

            function c(e) { b.call(this, "beforeshow"); var n = {}; "function" == typeof e ? n.callback = function() { e && e.call(M), b.call(M, "show") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), F && F.open(n) }

            function s(e) { b.call(this, "beforehide"); var n = {}; "function" == typeof e ? n.callback = function() { e && e.call(M), b.call(M, "hide") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), F && F.close(n) }

            function u(e) { E || (E = bui.tab({ id: O, height: S, scroll: !0, zoom: !1, visibleNum: e.visibleNum, scrollNum: e.scrollNum }).lock(), E.on("to", function(e) { f(e) })) }

            function d(n) {
                if (void 0 === n) return P;
                n && "array" === e.typeof(n) ? n.forEach(function(e, n) { "string" == typeof e ? N[n].value(e) : "object" === (void 0 === e ? "undefined" : t(e)) && (N[n].text(e.name), N[n].value(e.value)) }) : e.showLog("参数是一个数组类型")
            }

            function f(e) { n(".select-value div", j).removeClass("active"), n(".select-value div", j).eq(e).addClass("active") }

            function h(e, t) { n(".select-value div", j).eq(e).html(t), R[e].html(t) }

            function p(e) { var t = ""; return t += '<div id="' + C + '" class="bui-dialog bui-levelselect" style="display:none;">', t += '    <div class="bui-dialog-head">' + e.title + "</div>", t += '    <div class="bui-dialog-main">', t += g(e), t += "    </div>", t += '    <div class="bui-dialog-close"><i class="icon-close"></i></div>', t += "</div>" }

            function g(e) {
                var t = "",
                    n = 0;
                if (e.popup || (t += '<div id="' + C + '" class="bui-levelselect">'), e.showValue) {
                    for (t += '    <div class="bui-box select-value">', n = 0; n < e.level; n++) t += '        <div class="select-level-val-' + n + '"></div>';
                    t += "    </div>"
                }
                for (t += '<div id="' + O + '" class="bui-tab bui-levelselect-tab">', t += '    <div class="bui-tab-main">', t += "        <ul>", n = 0; n < e.level; n++) t += "            <li>", t += '                <div class="select-level-' + n + '"></div>', t += "            </li>";
                return t += "        </ul>", t += "    </div>", t += "</div>", e.popup || (t += "</div>"), t
            }

            function v(t, n) { return e.on.apply(M, arguments), this }

            function m(t, n) { return e.off.apply(M, arguments), this }

            function b(t) { M.self = this == window || this == M ? null : this, e.trigger.apply(M, arguments) }

            function y(t, n) { return e.option.call(M, t, n) }

            function w(e) {
                for (var t = 0; t < N.length; t++) N[t].destroy(), R[t].text(""), D[t].off("change"), B[t].off("click");
                F.destroy(), F = null, E.destroy(), E = null, I = [], j = null, L = null, S = 0, P = [], N = [], B = [], D = [], R = [], m("change"), m("lastchange"), H = !0
            }

            function x(t) { var n = { dialog: F, slide: E, select: N }; return e.widget.call(n, t) }
            var k = { popup: !0, data: [], height: 300, appendTo: "", title: "所在地区", trigger: null, placeholder: "请选择", level: 3, visibleNum: 2, scrollNum: 1, log: !1, mask: !0, autoClose: !0, fullscreen: !1, position: "bottom", effect: "fadeInUp", showValue: !0, onMask: null, value: [], autoinit: !0, onChange: null, onBeforeInit: null, template: null, onInited: null, field: { name: "n", icon: "icon", image: "image", value: "", data: ["c", "a"] } },
                T = n.extend(!0, {}, k, i),
                I = [],
                C = bui.guid(),
                O = C + "-slide",
                j = null,
                L = null,
                S = 0,
                P = [],
                E = null,
                N = [],
                B = [],
                D = [],
                R = [],
                F = null,
                M = { init: o, show: c, hide: s, widget: x, value: d, setNav: h, destroy: w, option: y, to: a, prev: r, next: l, on: v, off: m, trigger: b };
            i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body");
            var A = n(i.id ? i.id : i.appendTo),
                H = !0;
            return T.onBeforeInit && T.onBeforeInit.call(M, T), T.autoinit && o(T), M
        }
    }(window.bui || {}, window.libs);
    e(function(e) {
        ! function(t, n) {
            t.tab = function(i) {
                var o = { id: "", menu: ".bui-tab-head > ul", children: ".bui-tab-main > ul", header: "header", footer: "footer", main: ".bui-tab-main", item: "li", prev: ".bui-tab-prev", next: ".bui-tab-next", alignClassName: "", stopHandle: "", width: 0, height: 0, relative: !1, zoom: !1, swipe: !0, animate: !0, bufferEffect: !1, visibleNum: 1, scrollNum: 1, distance: 40, direction: "x", autoplay: !1, autoheight: !1, scroll: !0, index: 0, fullscreen: !1, autopage: !1, autoload: !1, autoinit: !0, data: null, template: null, async: !0, callback: null, onBeforeInit: null, onInited: null, onStart: null, onMove: null, onEnd: null },
                    a = e.config = n.extend(!0, {}, o, t.config.slide, i);
                return t.slide(a)
            }
        }(window.bui || {}, window.libs)
    });
    ! function(e, t) {
        e.input = function(n) {
            function i(n) {
                var i = t.extend(!0, k, n);
                if (i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, "" != i.id && null !== i.id) {
                    if (p = e.obj(i.id), y = p.find(i.target), v = y.eq(0), m = e.unit.startWithClass(i.iconClass) ? i.iconClass : "." + i.iconClass, !T) {
                        if (o(i), i.showLength) {
                            var r = a(i);
                            p.append(r)
                        }
                        i.maxLength > 0 && y.attr("maxlength", i.maxLength)
                    }
                    return i.showLength && y.trigger(i.event), i.onInited && i.onInited.call(x, i), this
                }
            }

            function o(e) {
                var n = !1;
                return y.on(e.event, function(i) {
                    var o = this.value,
                        a = t(this).parent(),
                        r = a.find(m);
                    g = o, o.length > 0 && e.showIcon ? r && r.length ? r.css("display", "block") : (a.append('<i class="' + m.replace(/\./g, " ").substr(1) + '"></i>'), r = y.find(m)) : r && r.css("display", "none"), e.showLength && (b = a.find("em"), b.text(o.length)), n || (e.onInput && e.onInput.call(x, i), h.call(x, "input", i))
                }).on("compositionstart", function() { n = !0 }).on("compositionend", function(t) {
                    n = !1;
                    var i = v.val();
                    e.onInput && e.onInput.call(x, t, i)
                }), e.onChange && y.off("change").on("change", function(t) { e.onChange.call(x, t), h.call(x, "change", t) }), e.onFocus && y.off("focus").on("focus", function(n) {
                    var i = this.value;
                    g = i, v = t(this), e.showIcon && (p.find(m).css("display", "none"), i && t(this).next().css("display", "block")), e.onFocus.call(x, n), h.call(x, "focus", n)
                }), e.onBlur && y.off("blur").on("blur", function(t) {
                    var n = e.onBlur && e.onBlur.call(x, t);
                    g = 1 == n || null === n ? this.value : "", h.call(x, "blur", t)
                }), e.showIcon && p.off("click.bui", m).on("click.bui", m, function(t) { e.callback && e.callback.call(x, t), h.call(x, "click", t) }), T = !0, this
            }

            function a(e) { v.parent(); return '<span class="bui-input-length"><em>0</em>/' + e.maxLength + "</span>" }

            function r(e) { return void 0 !== e ? (v.val(e), y.trigger(k.event), this) : v.val() }

            function l() { return v.val(""), v.next().css("display", "none"), k.showLength && b.text(0), this }

            function c() { return "text" == v.attr("type") ? v.attr("type", "password") : v.attr("type", "text"), this }

            function s(t) { var n = {}; return e.widget.call(n, t) }

            function u(t, n) { return e.option.call(x, t, n) }

            function d(t, n) { return e.on.apply(x, arguments), this }

            function f(t, n) { return e.off.apply(x, arguments), this }

            function h(t) { x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments) }
            var p, g, v, m, b, y, w = { id: "", target: "input,textarea", event: "input", iconClass: ".icon-remove", showIcon: !0, showLength: !1, maxLength: 0, onInput: null, onBlur: null, onFocus: null, autoinit: !0, onBeforeInit: null, onChange: null, onInited: null, callback: null },
                x = { handle: {}, empty: l, value: r, toggleType: c, on: d, off: f, widget: s, option: u, config: k, init: i },
                k = x.config = t.extend(!0, {}, w, e.config.searchbar, n),
                T = !1;
            return k.autoinit && i(k), x
        }
    }(bui || {}, libs),
    function(e, t) {
        e.timer = function(n) {
            function i(t) {
                var n = null;
                switch (t.type) {
                    case "minute":
                        n = 60 * parseInt(v, 10);
                        break;
                    case "hour":
                        n = 60 * parseInt(v, 10) * 60;
                        break;
                    case "day":
                        n = 60 * parseInt(v, 10) * 60 * 24;
                        break;
                    case "date":
                        n = (e.date.convert(v).getTime() - (new Date).getTime()) / 1e3;
                        break;
                    case "second":
                    default:
                        n = parseInt(v, 10)
                }
                return f || (v = n, n = 0), n
            }

            function o() { return p = b, g = !0, clearTimeout(y), this }

            function a() { return p = 0, b = i(d), y = clearTimeout(y), w(), this }

            function r(t) {
                var n = new Date,
                    i = e.date.format(n, "yyyy-MM-dd"),
                    o = 0,
                    a = 0,
                    r = 0,
                    c = "",
                    s = parseInt(t % 60, 10);
                switch (d.type) {
                    case "minute":
                        a = parseInt(t / 60, 10), c = l(a) + ":" + l(s);
                        break;
                    case "hour":
                        o = parseInt(t / 60 / 60, 10), a = parseInt(t / 60 % 60, 10), c = l(o) + ":" + l(a) + ":" + l(s);
                        break;
                    case "date":
                        i = e.date.format(d.times || d.time, "yyyy-MM-dd"), r = parseInt(t / 60 / 60 / 24, 10), o = parseInt(t / 60 / 60 % 24, 10), a = parseInt(t / 60 % 60, 10), c = "剩余" + r + "天 " + l(o) + ":" + l(a) + ":" + l(s);
                        break;
                    case "day":
                        i = e.date.format(n.getTime() + 1e3 * t, "yyyy-MM-dd"), r = parseInt(t / 60 / 60 / 24, 10), o = parseInt(t / 60 / 60 % 24, 10), a = parseInt(t / 60 % 60, 10), c = "剩余" + r + "天 " + l(o) + ":" + l(a) + ":" + l(s);
                        break;
                    case "second":
                        a = parseInt(t / 60, 10), c = l(a) + ":" + l(s);
                        break;
                    case "number":
                        a = parseInt(t / 60, 10), c = "" + l(parseInt(t, 10))
                }
                return { date: i, day: r, hour: o, minute: a, second: s, count: t, value: c, target: h && h[0] }
            }

            function l(e) { return e < 10 && d.fixZero ? "0" + e : e }

            function c() { g && (b = p, g = !1); var e = r(b); return b <= 0 ? (b = 0, h && h.text(e.value), d.onEnd && d.onEnd.call(this, e), clearTimeout(y), void(m = !1)) : (h && h.text(e.value), d.onProcess && d.onProcess.call(this, e), b--, m = !0, y = setTimeout(function() { c() }, d.interval), this) }

            function s() { g && (b = p, g = !1); var e = r(b); return b >= v ? (h && h.text(e.value), b = v, d.onEnd && d.onEnd.call(this, e), clearTimeout(y), void(m = !1)) : (h && h.text(e.value), d.onProcess && d.onProcess.call(this, e), b++, m = !0, y = setTimeout(function() { s() }, d.interval), this) }
            var u = { interval: 1e3, target: null, reduce: !0, onEnd: null, onProcess: null, fixZero: !0, type: "number", time: 10, times: 0 },
                d = t.extend({}, u, n),
                f = d.reduce,
                h = d.target ? e.obj(d.target) : null,
                p = 0,
                g = !1,
                v = d.times || d.time,
                m = !1,
                b = i(d),
                y = null,
                w = f ? c : s;
            return { stop: function(e) { p = 0, b = i(d), clearTimeout(y), y = null, e && e.call(this) }, start: w, restart: a, status: function() { return m }, pause: o }
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.extend({
            name: "floor",
            config: { id: "", menu: "", handle: ".bui-btn", floorItem: ".bui-floor-item", footer: ".bui-floor-footer", area: .5, delay: 200, height: "inherit", distance: 1, onScroll: null, onScrollTop: null, onScrollBottom: null, onLoaded: null },
            callback: function(n) {
                function i(e) {
                    var n = function(n) {
                        if (d) {
                            var i = t(this).scrollTop();
                            0 === i && (n.index = 0, a.trigger("scrolltop", n), e.onScrollTop && e.onScrollTop.call(a, n)), i > 5 && h && (o(), h = !1);
                            var r = v * parseFloat(e.area),
                                l = 0;
                            for (l = 0; l < m.length; l++) {
                                var s = m[l];
                                if (s.top > -1) {
                                    var u = s.top - i;
                                    if (s.top == i && 0 == i) return c && c.removeClass("active"), c && c.eq(l).addClass("active"), n.index = l, void a.trigger("scrollto", n);
                                    u < r && (c && c.removeClass("active"), c && c.eq(l).addClass("active"), n.index = l, a.trigger("scrollto", n))
                                }
                            }
                            parseInt(i + this.offsetHeight, 10) == parseInt(this.scrollHeight, 10) && (n.index = m.length - 1, a.trigger("scrollbottom", n), e.onScrollBottom && e.onScrollBottom.call(a, n))
                        }
                        a.trigger("scroll", n), e.onScroll && e.onScroll.call(a, n)
                    };
                    r.scroll(n), l && l.off("click.bui", e.handle).on("click.bui", e.handle, function(e) {
                        d = !1, p && (o(), p = !1);
                        var n = t(this).index();
                        a.to(n), a.trigger("click", e)
                    }), f = !0
                }

                function o() {
                    m = [], s.each(function(e, t) {
                        var n = { top: "none" === this.style.display ? -1 : this.offsetTop, display: this.style.display };
                        m.push(n)
                    })
                }
                var a = this,
                    r = null,
                    l = null,
                    c = null,
                    s = null,
                    u = null,
                    d = !0,
                    f = !1,
                    h = !0,
                    p = !0,
                    g = null,
                    v = 0,
                    m = [];
                a.init = function(n) {
                    var d = t.extend(!0, a.config, n);
                    if (a.config = d, d.id || e.showLog("id 不能为空"), r = e.$(d.id), l = e.$(d.menu), c = l && l.find(d.handle), s = r.find(d.floorItem), u = r.find(d.footer), "string" == typeof d.height && "inherit" !== d.height) {
                        var h = t(window).height() - e.$("header").height() - e.$("footer").height() - r[0].offsetTop;
                        h = d.height.indexOf("%") > -1 ? t(window).height() * parseInt(d.height, 10) / 100 : h, r.height(h).css("position", "relative"), v = h
                    } else "number" == typeof d.height && d.height > 0 ? (r.height(d.height).css("position", "relative"), v = d.height) : v = r.height();
                    o(), f || i(d), d.onLoaded && d.onLoaded.call(a, d)
                }, a.to = function(e, t) {
                    c = l && l.find(a.config.handle);
                    var n = m[e] && m[e].top || 0;
                    r[0].scrollTop = n, c && c.removeClass("active"), c && c.eq(e).addClass("active"), g && clearTimeout(g), g = setTimeout(function() { d = !0 }, a.config.delay), t && t.call(a, e), a.trigger("to", e);
                    var i = { target: r[0], index: e };
                    a.trigger("scrollto", i)
                }, a.destroy = function(e) {
                    var e = 1 == e;
                    r && (r.off("click.bui"), r.off("scroll"), e && r.remove(), r = null), l && (l.off("click.bui"), l = null), a.off("click"), a.off("to"), a.off("scroll"), a.off("scrollto"), a.off("scrolltop"), a.off("scrollbottom"), f = !1
                }, a.init(a.config)
            }
        })
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.ajax = function(i) {
            function o(e) {
                var t = function(t, n, i) {
                        var o = null;
                        if ("string" == typeof t && "json" == e.dataType) try { o = JSON.parse(t) } catch (e) { o = t } else o = t || {};
                        o = e.transformResponse ? e.transformResponse.call(a, o) || o : o, s && s(o, n, i), a.resolve(o, n, i)
                    },
                    i = function(t, n, i) {
                        var o;
                        if ("string" == typeof t && "json" == e.dataType) try { o = JSON.parse(t) } catch (e) { o = t } else o = t || {};
                        u && u(o, n, i), a.reject(o, n, i)
                    };
                e.success = t, e.error = i;
                var o = e.type && e.type.toUpperCase();
                e.type = o || e.method.toUpperCase(), r = n.ajax(e)
            }
            var a = n.Deferred(),
                r = null,
                l = { baseUrl: "", data: {}, method: "GET", dataType: "json", timeout: 6e4, headers: {}, processData: !0, mimeType: "none", cache: !0, async: !0, needJsonString: !1, contentType: null, localData: null, transformRequest: null, transformResponse: null, native: !0, needNative: !1 },
                c = n.extend(!0, {}, l, e.config.ajax, i),
                s = c.success,
                u = c.fail || c.error;
            null === c.contentType && "GET" == c.method ? c.contentType = "text/html;charset=UTF-8" : null === c.contentType && "POST" == c.method ? c.contentType = "application/x-www-form-urlencoded" : c.contentType = c.contentType;
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            if (c.needJsonString) try { c.data = "object" === t(c.data) ? JSON.stringify(c.data) : c.data } catch (e) { c.data = c.data }
            if (c.data = c.transformRequest ? c.transformRequest.call(a, c.data) || c.data : c.data, !c.url) return e.showLog("url不能为空", "bui.ajax"), a;
            if (c.url.indexOf("://") > -1 ? c.url = c.url : c.url.indexOf("./") > -1 || c.url.indexOf("../") > -1 ? c.url = bui.unit.resolvePath(c.url) : c.url = c.baseUrl + c.url, c.proxy) {
                var d = c.url.indexOf(c.proxy),
                    f = d > -1 ? d + 1 : -1;
                c.url = c.url.substr(f)
            }
            if (a.abort = function() { r && r.abort() }, c.localData) return c.localData = c.transformResponse ? c.transformResponse.call(a, c.localData) || c.localData : c.localData, s && s(c.localData, 200), a.resolve(c.localData, 200), a;
            if (c.needNative) { if (void 0 === e.native.ajax) return o(c), a; try { a = e.native.ajax && e.native.ajax(c) || a } catch (e) {} } else o(c);
            return a
        }, e.get = function(t, i, o) {
            var a = {};
            a.method = "GET", a.url = t, a.data = i || {};
            var r = null,
                l = o && o[0];
            return r = o && "array" === e.typeof(o) && "object" == e.typeof(l) ? n.extend(!0, {}, e.config.get, a, l) : a, bui.ajax(r)
        }, e.post = function(i, o, a) {
            var r = {};
            r.method = "POST", r.contentType = "application/x-www-form-urlencoded", r.url = i, r.data = o || {};
            var l = null,
                c = a && a[0];
            return l = a && "array" === e.typeof(a) && "object" == e.typeof(c) ? n.extend(!0, {}, e.config.post, r, c) : r, l.contentType.indexOf("application/json") > -1 && (l.data = "object" === t(l.data) ? JSON.stringify(l.data) : l.data), bui.ajax(l)
        }, e.put = function(i, o, a) {
            var r = {};
            r.method = "PUT", r.contentType = "application/json", r.url = i, r.data = o || {};
            var l = null,
                c = a && a[0];
            return l = a && "array" === e.typeof(a) && "object" == e.typeof(c) ? n.extend(!0, {}, e.config.put, r, c) : r, l.contentType.indexOf("application/json") > -1 && (l.data = "object" === t(l.data) ? JSON.stringify(l.data) : l.data), bui.ajax(l)
        }, e.delete = function(i, o, a) {
            var r = {};
            r.method = "DELETE", r.contentType = "application/json", r.url = i, r.data = o || {};
            var l = null,
                c = a && a[0];
            return l = a && "array" === e.typeof(a) && "object" == e.typeof(c) ? n.extend(!0, {}, e.config.delete, r, c) : r, l.contentType.indexOf("application/json") > -1 && (l.data = "object" === t(l.data) ? JSON.stringify(l.data) : l.data), bui.ajax(l)
        }, e.all = function(t) { var i = null; return i = t && "array" === e.typeof(t) ? t : Array.prototype.slice.apply(arguments), n.when.apply(null, i) }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.load = function(n) {
            var i, o = { url: "", param: {}, reload: !1, replace: !1, native: !0, needNative: !1 },
                a = t.extend(!0, {}, o, e.config.load, n),
                r = {},
                l = a.url;
            if (!a.url) return void e.showLog("url 不能为空!", "bui.load:web");
            if (document.activeElement.blur(), l.indexOf("tel:") >= 0 || l.indexOf("mailto:") >= 0 || l.indexOf("sms:") >= 0) return void e.unit.openExtral(l);
            if (l && l.indexOf("?") > -1) {
                var c = l.split("?");
                r = e.unit.keyStringToObject(c[1]), a.url = c[0]
            }
            try {
                var s = "string" == typeof a.param && JSON.parse(a.param) || a.param || {};
                a.param = t.extend(!0, {}, r, s)
            } catch (t) { return void e.showLog("param 参数值必须是一个{}对象", "bui.load:web") }
            if (n && n.needNative) return void(e.native.load && e.native.load(a));
            if (i = e.setUrlParams(a.url, a.param), a.reload && e.isWebapp) return void(window.location.href = i);
            if (a.reload && !e.isWebapp) return void(e.native.load && e.native.load(a));
            if (a.replace && !("load" in window.router)) return void window.location.replace(i);
            if ("load" in window.router) window.router.load(a);
            else if (a.native && e.isWebapp || !a.native && !e.isWebapp) window.location.href = i;
            else {
                if (void 0 === e.native.load) return void(window.location.href = i);
                e.native.load && e.native.load(a)
            }
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.getPageParams = function(i) {
            var o = n.Deferred(),
                a = { callback: null, native: !0, needNative: !1 };
            i = i || {};
            var r = n.extend(!0, {}, a, e.config.getPageParams);
            "function" == typeof i ? r.callback = i : i && "object" === e.typeof(i) && (r = n.extend(!0, {}, a, e.config.getPageParams, i));
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            if (i && i.needNative) return o = e.native.getPageParams && e.native.getPageParams(r) || o;
            if ("getPageParams" in window.router) {
                var l = window.router.getPageParams && window.router.getPageParams() || e.getUrlParams();
                r.callback && r.callback(l), o.resolve(l)
            } else if (r.native && e.isWebapp || !r.native && !e.isWebapp) {
                var c = e.getUrlParams();
                r.callback && r.callback(c), o.resolve(c)
            } else {
                if (void 0 === e.native.getPageParams) { var c = e.getUrlParams(); return r.callback && r.callback(c), o.resolve(c), o }
                o = e.native.getPageParams && e.native.getPageParams(r) || o
            }
            return o
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.back = function(i) {
            function o() {
                var t = e.hasRouter && e.history.getPrev() || {},
                    n = t.exports || {};
                window.history.go(a.index), f && clearTimeout(f), a.delay && a.callback ? f = setTimeout(function() { e.hasRouter ? a.callback.call(router, n) : a.callback.call(e, {}) }, 500) : a.callback && a.callback()
            }
            var a, r = { index: -1, name: "", delay: !0, native: !0, beforeBack: !0, callback: null };
            "function" == typeof i ? (r.callback = i, a = n.extend(!0, {}, r, e.config.back)) : a = i && "object" === e.typeof(i) ? n.extend(!0, {}, r, e.config.back, i) : n.extend(!0, {}, r, e.config.back);
            var l = ("object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp, e.hasRouter ? router.history && router.history.getLast() || null : null);
            if (!1 !== ("function" == typeof a.beforeBack ? a.beforeBack.call(this, { prevTarget: null, target: l }) : a.beforeBack)) {
                if (i && i.needNative) return void(e.native.back && e.native.back(a));
                if ("back" in window.router)
                    if (window.router.config.syncHistory) {
                        var c = e.history.get(),
                            s = c.length - 1;
                        if (a.name) {
                            var u = e.array.indexs(c, a.name, "name"),
                                d = u.length;
                            a.index = d ? -(c.length - u[d - 1] - 1) : -1
                        }
                        if (Math.abs(a.index) >= c.length && (a.index = -s), Math.abs(a.index) >= window.history.length && window.router.config.hash && (a.index = window.router.config.reloadCache ? -s : -(window.history.length - 1)), 0 == a.index && (a.index = -1), window.router.config.hash && !window.router.config.reloadCache) return void o();
                        c.length > 1 && o()
                    } else window.router.back && window.router.back(a);
                else if (a.native && e.isWebapp || !a.native && !e.isWebapp) o();
                else {
                    if (void 0 === e.native.back) return void o();
                    e.native.back && e.native.back(a)
                }
                var f = null
            }
        }
    }(window.bui || {}, window.libs),
    function(e, t) { e.refresh = e.history.refresh }(window.bui || {}, window.libs),
    function(e, n) {
        e.run = function(i) {
            var o = {},
                a = { id: "", name: "", data: null, onFail: null, native: !0, needNative: !0 };
            "string" == typeof i ? o.id = i : i && "object" === e.typeof(i) && (o = n.extend(!0, {}, a, e.config.run, i));
            var r = String(o.id);
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            if (i.needNative) e.native.run && e.native.run(o);
            else if (r.indexOf("http://") > -1 || r.indexOf("https://") > -1) {
                var l = e.setUrlParams(o.id, o.data);
                if (e.platform.isIos()) return void(window.location.href = l);
                var c = window.open("", "_blank") || window.open("", "_newtab");
                c.location.href = l
            }
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.fileselect = function(i) {
            function o(t) {
                var i = n.extend(!0, T, t);
                switch (T.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), i.mediaType) {
                    case "allmedeia":
                        P = "*";
                        break;
                    case "picture":
                    case "image":
                        P = "image/*";
                        break;
                    case "video":
                        P = "video/*";
                        break;
                    case "audio":
                        P = "audio/*";
                        break;
                    default:
                        P = i.mediaType
                }
                return L = [], N = new Image, B = new FileReader, D = document.createElement("canvas"), R = D.getContext("2d"), S ? (f(), E || a(i)) : x = e.native.fileselect && e.native.fileselect.call(this, t, { module: C }) || {}, this
            }

            function a(t) {
                return w.on("change", function(t) {
                    var n = this.files;
                    if (!(n.length < 1)) {
                        n.length > 1 && e.showLog("一次只能选一张图片", "bui.fileselect:web");
                        var i = n[0];
                        O = i;
                        var o = { name: i.name, data: i, type: i.type, size: i.size };
                        if (L.push(o), j.needCompress) {
                            j.data = i, j.mimeType = j.mimeType ? j.mimeType : i.type;
                            r(j)
                        } else j.onSuccess && j.onSuccess.call(I, i, L);
                        this.value = ""
                    }
                }), E = !0, this
            }

            function r(i) {
                var o = n.extend(!0, { destinationType: "file", data: null, mimeType: "", quality: .8, width: 800, height: 800, needCompress: !0, needChangeData: !1, onSuccess: null, onFail: null }, T, i);
                N.onload = function() {
                    var t = this.width,
                        n = this.height,
                        i = null,
                        a = o.width,
                        r = o.height,
                        c = t,
                        s = n;
                    o.needCompress && (t > a || n > r) && (t / n > a / r ? (c = a, s = Math.round(a * (n / t))) : (s = r, c = Math.round(r * (t / n)))), D.width = c, D.height = s, R.clearRect(0, 0, c, s), R.drawImage(N, 0, 0, c, s);
                    var f = D.toDataURL(o.mimeType || o.data && o.data.type || "image/jpeg", o.quality),
                        h = l(o.data.name) || "";
                    switch (o.destinationType) {
                        case "file":
                            i = u(f, h);
                            break;
                        case "blob":
                            i = d(f);
                            break;
                        case "data":
                            i = f
                    }
                    if (o.needChangeData) {
                        O = i;
                        var p = e.array.index(L, o.data.name, "name");
                        p > -1 && (L[p].data = i, i.size && (L[p].size = i.size), i.type && (L[p].type = i.type))
                    }
                    return o.onSuccess && o.onSuccess.call(I, i, L), i
                }, N.onerror = function() { o.onFail && o.onFail.call(I, N.src) }, B.onload = function(e) { N.src = e.target.result };
                try {
                    var a = o.data && o.data.type || "";
                    a = "object" === (void 0 === a ? "undefined" : t(a)) ? a.type || "" : a || "", o.data && 0 == a.indexOf("image") && B.readAsDataURL(i.data)
                } catch (t) { e.showLog(t) }
            }

            function l(e) { return e.indexOf(".png") > -1 || e.indexOf(".jpg") > -1 || e.indexOf(".gif") > -1 || e.indexOf(".jpeg") > -1 ? e.substr(0, e.lastIndexOf(".")) : e }

            function c(t) { O = null; var i = n.extend(!0, { needChangeData: !0, needCompress: !1, name: "resize.jpg" }, T, t); return j = i, j.mimeType = t.mimeType ? t.mimeType : "", S ? (t.from ? "picture" === t.from || "photo" === t.from || "savephoto" === t.from ? w.removeAttr("capture") : w.attr("capture", t.from) : w.removeAttr("capture"), e.platform.isIos() && "function" == typeof FastClick ? w[0].dispatchEvent(new Event("click")) : w.trigger("click")) : x.add(i), this }

            function s(t) { var i = n.extend(!0, { needCompress: !1, destinationType: "data", mimeType: "", needChangeData: !1 }, t); if (i.data = i.data || O, i.mimeType = t.mimeType ? t.mimeType : i.data && i.data.type || "image/jpeg", S) try { r(i) } catch (t) { e.showLog(t) } else x.toBase64(i); return this }

            function u(t, n) { try { n = n || "file"; for (var i = t.split(","), o = i[0].match(/:(.*?);/) || [], a = o[1] || "image/jpeg", r = a.split("/")[1], l = atob(i[1]), c = l.length, s = new Uint8Array(c); c--;) s[c] = l.charCodeAt(c); return new File([s], n + "." + r, { type: a }) } catch (t) { e.showLog(t) } }

            function d(e) { for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], i = atob(t[1]), o = i.length, a = new Uint8Array(o); o--;) a[o] = i.charCodeAt(o); return new Blob([a], { type: n }) }

            function f() {
                if (void 0 == w) {
                    y = bui.guid();
                    var e = T.from ? 'capture="' + T.from + '"' : "",
                        t = '<input type="file" accept="' + P + '" name="uploadFiles" id="' + y + '" ' + e + ' style="display:none"/>';
                    n(T.appendTo).append(t), w = n("#" + y) || n('input[name="uploadFiles"]')
                }
            }

            function h(t, n) { var n = n || "name"; if (!S) return L = x.remove(t, n); if ("string" == typeof t) { L.length && e.array.remove(L, t, n); var i = L.length ? L[L.length - 1].data : null; return O = i, w[0].value = "", L } return this }

            function p() { return L = [], O = null, S ? w[0].value = "" : x.clear(), L }

            function g() { return L = S ? L : x.data() }

            function v() { return O = S ? O : x.value() }

            function m() { return S ? L[L.length - 1].name : x.value().name }

            function b() { return S ? L.length - 1 : x.data().length - 1 }
            var y, w, x, k = { native: !0, needNative: !1, needCompress: !1, appendTo: "", quality: .8, from: "camera", width: 800, height: 800, duration: 10, onSuccess: null, onFail: null, mediaType: "picture" },
                T = n.extend(!0, {}, k, e.config.fileselect, i),
                I = this,
                C = { add: c, remove: h, clear: p, value: v, data: g, toFile: u, toBase64: s, resize: r, toBlob: d, currentIndex: b, currentName: m, init: o },
                O = null,
                j = null,
                L = [],
                S = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
                P = "*",
                E = !1,
                N = null,
                B = null,
                D = null,
                R = null;
            return o(T), C
        }
    }(bui || {}, libs),
    function(e, n) {
        e.file = function(i) {
            function o(t) { return y = e.fileselect(t), v = a(t), !t.needNative && (m = r({ root: !0, create: !0 })), this }

            function a(t) {
                function i(e) {
                    var t = "";
                    try {
                        switch (e.code) {
                            case FileError.QUOTA_EXCEEDED_ERR:
                                t = "QUOTA_EXCEEDED_ERR";
                                break;
                            case FileError.NOT_FOUND_ERR:
                                t = "NOT_FOUND_ERR";
                                break;
                            case FileError.SECURITY_ERR:
                                t = "SECURITY_ERR";
                                break;
                            case FileError.INVALID_MODIFICATION_ERR:
                                t = "INVALID_MODIFICATION_ERR";
                                break;
                            case FileError.INVALID_STATE_ERR:
                                t = "INVALID_STATE_ERR";
                                break;
                            default:
                                t = "Unknown Error"
                        }
                    } catch (e) {}
                    var n = { msg: t };
                    o.reject(n)
                }
                var o = n.Deferred();
                return t.needNative ? w = e.native.file && e.native.file(t, { fileselect: y, module: T }) || {} : (p = "bui.app", g = window, b = 1024 * parseInt(I.size) * 1024, window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, navigator.webkitPersistentStorage && navigator.webkitPersistentStorage.requestQuota(b, function(e) {
                    window.requestFileSystem(window.PERSISTENT, e, function(e) { o.resolve(e) }, i)
                })), o
            }

            function r(e) {
                var t = { folderName: p, root: !1, create: !1, msg: "", param: { create: !1, exclusive: !1 }, onSuccess: null, onFail: null },
                    i = n.extend({}, t, e),
                    o = "";
                if (i.create ? (o = "创建 ", i.param.create = !0) : (o = "获取 ", i.param.create = !1), I.needNative) w.getFolder(i);
                else {
                    var a = l(i.folderName);
                    a = i.root ? a : p + "/" + a, v.done(function(e) {
                        e.root.getDirectory(a, i.param, function(t) { i.onSuccess && i.onSuccess.call(T, t, e) }, function(e) {
                            var t = { msg: o + a + " 文件夹失败" };
                            i.onFail && i.onFail.call(T, t)
                        })
                    }).fail(function(e) {
                        var t = { msg: "文件系统还没准备好." };
                        i.onFail && i.onFail.call(T, t)
                    })
                }
                return this
            }

            function l(e) { var t; return "." == e[0] || "/" == e[0] || " " == e[0] ? (t = e.slice(1), l(t)) : "." != e[0] && "/" != e[0] && " " != e[0] ? e : void 0 }

            function c(e) { return e && e.indexOf("/") > -1 ? e.slice(e.lastIndexOf("/") + 1, e.indexOf("?") > -1 ? e.indexOf("?") : void 0) : e }

            function s(e) {
                var t = { fileName: "", folderName: "", root: !1, create: !1, param: { create: !1, exclusive: !1 }, onSuccess: null, onFail: null },
                    i = n.extend({}, t, e),
                    o = "";
                if (i.create ? (o = "创建 ", i.param.create = !0) : (o = "获取 ", i.param.create = !1), !i.fileName || i.fileName.indexOf(".") < 0) return void(i.onFail && i.onFail());
                if (I.needNative) w.getFile(i);
                else {
                    var a = c(i.fileName);
                    r({
                        root: i.root,
                        folderName: i.folderName,
                        create: !0,
                        onSuccess: function(e, t) {
                            var n = e.name == p ? e.name + "/" + a : p + "/" + e.name + "/" + a;
                            t.root.getFile(n, i.param, function(e) { x = e, i.onSuccess && i.onSuccess.call(T, e, t) }, function(e) {
                                var t = { msg: o + a + " 文件失败" };
                                i.onFail && i.onFail.call(T, t)
                            })
                        },
                        onFail: function(e) { i.onFail && i.onFail(e) }
                    })
                }
                return this
            }

            function u(e) {
                var t = n.extend(!0, {}, e);
                return I.needNative ? w.removeFolder(t) : r({
                    root: t.root,
                    folderName: t.folderName,
                    create: t.create,
                    onSuccess: function(e, n) {
                        e.removeRecursively(function() { t.onSuccess && t.onSuccess.call(T, e, n) }, function(n) {
                            var i = { msg: "删除 " + t.folderName + " 文件失败" };
                            t.onFail && t.onFail.call(T, i, e)
                        })
                    },
                    onFail: function(e) {
                        var n = { msg: "删除 " + t.folderName + " 文件失败" };
                        t.onFail && t.onFail.call(T, n)
                    }
                }), this
            }

            function d(e) {
                var t = n.extend(!0, {}, e);
                return I.needNative ? w.removeFile(t) : s({
                    root: t.root,
                    create: t.create,
                    folderName: t.folderName,
                    fileName: t.fileName,
                    onSuccess: function(e, n) {
                        e.remove(function() { t.onSuccess && t.onSuccess.call(T, e, n) }, function(n) {
                            var i = { msg: "删除 " + t.fileName + " 文件失败" };
                            t.onFail && t.onFail.call(T, i, e)
                        })
                    },
                    onFail: function(e) {
                        var n = { msg: "删除 " + t.fileName + " 文件失败" };
                        t.onFail && t.onFail.call(T, n)
                    }
                }), this
            }

            function f(t) { var n = t || {}; if (n.url) return I.needNative ? w.open(n) : e.showLog("web暂不支持open方法", "bui.file.open:web"), this }

            function h(e) { return y.toBase64(e), this }
            var p, g, v, m, b, y, w, x, k = { size: 10, native: !0, needNative: !1 },
                T = { getFolder: r, removeFolder: u, getFile: s, getFileName: c, removeFile: d, toBase64: h, open: f, init: o },
                I = T.config = n.extend(!0, {}, k, e.config.file, i);
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            return o(I), T
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.upload = function(i) {
            function o(t) { return x = e.loading({ display: "block", width: 30, height: 30, opacity: 0, autoClose: t.autoClose, callback: t.onMask }), k = e.fileselect.call(E, { native: t.native, needNative: t.needNative, from: t.from, mediaType: t.mediaType }), t && t.needNative && (I = e.native.upload && e.native.upload(t, { loading: x, fileselect: k, module: E }) || {}), t.data ? (d(t), this) : this }

            function a(e) { return k.resize(e), this }

            function r(e) { return e.onSuccess = e.onSuccess ? e.onSuccess.bind(E) : null, e.onFail = e.onFail ? e.onFail.bind(E) : null, k.add(e), this }

            function l(e, t) {
                var n = u(),
                    i = n.length;
                return i < 1 ? this : (/\d/.test(e) && e.indexOf(".") < 0 ? k.remove(n[e].name, t) : "string" == typeof e ? k.remove(e, t) : k.remove(n[i - 1].name, t), this)
            }

            function c() { return k.clear(), this }

            function s(e) { return k.toBase64(e), this }

            function u() { return k.data() }

            function d(e) {
                var t = n.extend(!0, {}, S, e);
                if (O = t.url, C = k.value(), N = t.showProgress, C) {
                    if (N && x.show(), t && t.needNative) return I.start(t) || P;
                    var i = t.data,
                        o = new FormData;
                    o.append(t.fileKey, C);
                    for (var a in i) t.fileKey === a && o.delete(a), o.append(a, i[a]);
                    return t.data = o, p(t)
                }
            }

            function f(e) {
                var t = n.extend(!0, { needFileinfo: !1 }, S, e),
                    i = t[t.fileKey] || k.data();
                return null === t.data && (t.data = {}), i.forEach(function(e, n) {
                    ! function(e) {
                        if (t.data[t.fileKey] = i[e].data, t.needFileinfo)
                            for (var n in i[e]) "data" !== n && (t.data[n] = i[e][n]);
                        d(t)
                    }(n)
                }), P
            }

            function h(e) { return S && S.needNative ? I.stop(e) : (x && x.stop(), T && T.abort(), e && e.call(E, x, T)), this }

            function p(e) {
                var t = e.onSuccess,
                    i = e.onFail;
                return T = n.ajax({ url: O, type: e.method, data: e.data, cache: e.cache, headers: e.headers, dataType: e.dataType, contentType: e.contentType, processData: e.processData, timeout: e.timeout, xhr: function() { var e = n.ajaxSettings.xhr(); if (g && e.upload) return e.upload.addEventListener("progress", g, !1), e }, success: function(e) { m(), t && t.call(E, e), P.resolve(e) }, error: function(e, t, n) { m(), i && i.call(E, e, t), P.reject(e, t, n) } }), P
            }

            function g(e) {
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame(function() {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        j = t.toString() + "%", t < 100 ? v(j) : m(), B && B.call(E, j)
                    }
                })
            }

            function v(e) { return N && x && x.show({ text: e }), this }

            function m() { return x && x.stop(), this }

            function b() { return k.currentName() }

            function y() { return k.currentIndex() }

            function w(t) { var n = { loading: x, fileselect: k, ajax: T }; return e.widget.call(n, t) }
            var x, k, T, I, C, O, j, L = { url: "", data: null, headers: {}, showProgress: !0, timeout: 6e4, contentType: !1, processData: !1, autoClose: !0, native: !0, needNative: !1, method: "POST", fileKey: "file", dataType: "json", mediaType: "picture", from: "picture", onProgress: null, onMask: function() { h() }, onSuccess: null, onFail: null },
                S = n.extend(!0, {}, L, e.config.upload, i),
                P = n.Deferred(),
                E = { init: o, add: r, remove: l, resize: a, currentIndex: y, currentName: b, clear: c, data: u, start: d, startAll: f, stop: h, toBase64: s, widget: w },
                N = S.showProgress,
                B = S.onProgress;
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            return o(S), E
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.download = function(i) {
            function o(t) { return P = t.showProgress && e.loading({ display: "block", width: 30, height: 30, opacity: 0, callback: function() { u() } }), m = e.file({ native: t.native, needNative: t.needNative }), t.needNative ? b = e.native.download && e.native.download(t, { file: m, loading: P, module: I }) || {} : function(e) { m.getFolder({ folderName: e.folderName, create: !1, onSuccess: function(e, t) { w = e.fullPath }, onFail: function(t) { m.getFolder({ folderName: e.folderName, create: !0, onSuccess: function(e, t) { w = e.fullPath }, onFail: function(e) { S && S.call(I, e) } }) } }), e.url && a(e) }(t), this }

            function a(e) {
                var t = n.extend(!0, {}, C, e);
                y = t.needEncode ? encodeURI(t.url) : t.url, L = t.onProgress, j = t.showProgress, j && P && P.show({ text: "0%" }), x = w + "/" + (e.fileName || m.getFileName(t.url)), t.needNative ? b.start(t) : (t.cache = !1, t.contentType = !1, t.processData = !1, v = n.ajax({
                    url: y,
                    type: t.method,
                    data: t.data,
                    cache: t.cache,
                    headers: t.headers,
                    contentType: t.contentType,
                    processData: t.processData,
                    timeout: t.timeout,
                    xhr: function() { var e = n.ajaxSettings.xhr(); if (d && e) return e.addEventListener("progress", d, !1), e },
                    success: function(n) {
                        var i = e.fileName || m.getFileName(t.url);
                        m.getFile({ fileName: i, folderName: t.folderName, create: !0, onSuccess: function(e, n) { t.onSuccess && t.onSuccess.call(I, e.fullPath, n) } })
                    },
                    fail: function(e) { h(), t.onFail && t.onFail.call(I, e) }
                }))
            }

            function r(e) {
                var t = n.extend(!0, { autoDown: !0 }, C, e),
                    i = e.fileName || m.getFileName(t.url);
                m.getFile({ fileName: i, folderName: t.folderName, onSuccess: function(e, n) { t.onSuccess && t.onSuccess.call(I, e.fullPath || e, e, n) }, onFail: function(e) { t.autoDown = a(t) } })
            }

            function l(t) { return t.fileName ? (t.folderName = t.folderName || C.folderName, m.removeFile(t), this) : (e.showLog("请告诉我们你要删除哪个文件, fileName "), this) }

            function c(e) { return e.folderName = e.folderName || C.folderName, m.removeFolder(e), this }

            function s(e) { return m.open(e), this }

            function u(e) { O ? (h(), v && v.abort(), E && window.cancelAnimationFrame(E)) : b.stop(), e && e.call(I, P, v) }

            function d(e) {
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, E = window.requestAnimationFrame(function() {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        k = t.toString() + "%", t < 100 ? f(k) : h(), L && L.call(I, k)
                    }
                })
            }

            function f(e) { j && P && P.show({ text: e }) }

            function h() { j && P && P.stop() }

            function p(e) { return m.toBase64(e), this }

            function g(t) { var n = { loading: P, file: m, ajax: v }; return e.widget.call(n, t) }
            var v, m, b, y, w, x, k, T = { url: "", data: {}, headers: {}, method: "GET", showProgress: !0, timeout: 6e4, fileName: "", folderName: "download", native: !0, needNative: !0, onProgress: null, onSuccess: null, onFail: null },
                I = { open: s, getFile: r, removeFile: l, removeFolder: c, start: a, stop: u, toBase64: p, init: o, widget: g },
                C = I.config = n.extend(!0, {}, T, e.config.download, i),
                O = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
                j = C.showProgress,
                L = C.onProgress,
                S = C.onFail,
                P = null,
                E = null;
            return o(C), I
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.currentPlatform = "webapp", e.on("pagereadybefore", function() { e.platform.isWindow() || e.platform.isMac() ? window.viewport = e.viewport(40) : window.viewport = e.viewport(), e.config.init.auto && e.init(), !e.hasRouter && e.config.component.auto && loader.components({ id: "body" }) }), e.webready = function(n) { t(document).ready(function() { e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready") }) }, e.ready = function(n) {
            e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp;
            var i = t.Deferred();
            if (e.isWebapp) t(document).ready(function() { e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready"), i.resolve() });
            else {
                if (void 0 === e.native.ready) return e.showLog("当前 bui.isWebapp = false; 但bui.js为webapp版本,不支持原生方法,请使用 buijs update -p xxx, 更换bui.js为对应xxx平台版本;"), e.webready(n), i;
                i = e.native.ready && e.native.ready(n) || i
            }
            return i
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.init = function(n) {
            var i, o = { id: ".bui-page", height: 0, header: "header", main: "main", footer: "footer", reduceRem: 0 };
            if ("object" == e.typeof(n)) i = t.extend({}, o, e.config.init, n);
            else {
                var a = {};
                a.height = n, i = t.extend({}, o, a)
            }
            var r = i.height || document.documentElement.clientHeight || t("body").height() || t("#bui-router").height() || t(".bui-page").height();
            if (!(e.obj(i.main).length < 1)) {
                try {
                    var l = e.obj(i.id),
                        c = i.header.indexOf("#") > -1 ? e.obj(i.header)[0] : l.children(i.header)[0],
                        s = i.footer.indexOf("#") > -1 ? e.obj(i.footer)[0] : l.children(i.footer)[0],
                        u = i.main.indexOf("#") > -1 ? e.obj(i.main) : l.children(i.main),
                        d = c ? c.offsetHeight : 0,
                        f = s ? s.offsetHeight : 0,
                        h = i.reduceRem > 0 ? e.unit.remToPx(i.reduceRem) : 0,
                        p = r - d - f - h;
                    if (parseInt(p) > 0) u.height(p);
                    else {
                        var g = d + f + h + "px";
                        e.unit.calcHeight(u, g)
                    }
                } catch (t) { e.showLog(t, "bui.init") }
                return p
            }
        }, window.addEventListener ? window.addEventListener("load", function(t) { e.trigger.call(e, "onload") }, !1) : window.attachEvent("onload", function(t) { e.trigger.call(e, "onload") }), t(document).ready(function() { e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp, e.trigger.call(e, "pagebefore"), "function" == typeof FastClick && FastClick.attach(document.body), e.trigger.call(e, "pageinit") });
        try {
            var n = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "",
                i = n.replace(/hidden/i, "visibilitychange"),
                o = function(t) { document[n] ? e.trigger.call(e, "pagehide", t) : e.trigger.call(e, "pageshow", t) };
            document.addEventListener(i, o)
        } catch (e) {}
        try { navigator.control.gesture(!1), navigator.control.longpressMenu(!1) } catch (e) {}
    }(window.bui || {}, window.libs)
});