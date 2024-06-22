/* ---------------------------------------- START JS ---------------------------------------- */
(function (a, b) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = a.document ? b(a, true) : function (a) {
            if (!a.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return b(a);
        };
    } else {
        b(a);
    }
})(typeof window !== "undefined" ? window : this, function (a, b) {
    var c = [];
    var d = a.document;
    var e = c.slice;
    var f = c.concat;
    var g = c.push;
    var h = c.indexOf;
    var i = {};
    var j = i.toString;
    var k = i.hasOwnProperty;
    var l = {};
    var m = "2.2.4", n = function (a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this);
        },
        get: function (a) {
            return a != null ? a < 0 ? this[a + this.length] : this[a] : e.call(this);
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            b.prevObject = this;
            b.context = this.context;
            return b;
        },
        each: function (a) {
            return n.each(this, a);
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    };
    n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = false;
        if (typeof g === "boolean") {
            j = g;
            g = arguments[h] || {};
            h++;
        }
        if (typeof g !== "object" && !n.isFunction(g)) {
            g = {};
        }
        if (h === i) {
            g = this;
            h--;
        }
        for (; h < i; h++) {
            if ((a = arguments[h]) != null) {
                for (b in a) {
                    c = g[b];
                    d = a[b];
                    if (g === d) {
                        continue;
                    }
                    if (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))) {
                        if (e) {
                            e = false;
                            f = c && n.isArray(c) ? c : [];
                        } else {
                            f = c && n.isPlainObject(c) ? c : {};
                        }
                        g[b] = n.extend(j, f, d);
                    } else if (d !== undefined) {
                        g[b] = d;
                    }
                }
            }
        }
        return g;
    };
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function (a) {
            throw new Error(a);
        },
        noop: function () { },
        isFunction: function (a) {
            return n.type(a) === "function";
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return a != null && a === a.window;
        },
        isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function (a) {
            var b;
            if (n.type(a) !== "object" || a.nodeType || n.isWindow(a)) {
                return false;
            }
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) {
                return false;
            }
            for (b in a) { }
            return b === undefined || k.call(a, b);
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) {
                return false;
            }
            return true;
        },
        type: function (a) {
            if (a == null) {
                return a + "";
            }
            return typeof a === "object" || typeof a === "function" ? i[j.call(a)] || "object" : typeof a;
        },
        globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a);
            if (a) {
                if (a.indexOf("use strict") === 1) {
                    b = d.createElement("script");
                    b.text = a;
                    d.head.appendChild(b).parentNode.removeChild(b);
                } else {
                    c(a);
                }
            }
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b) {
            var c, d = 0;
            if (s(a)) {
                c = a.length;
                for (; d < c; d++) {
                    if (b.call(a[d], d, a[d]) === false) {
                        break;
                    }
                }
            } else {
                for (d in a) {
                    if (b.call(a[d], d, a[d]) === false) {
                        break;
                    }
                }
            }
            return a;
        },
        trim: function (a) {
            return a == null ? "" : (a + "").replace(o, "");
        },
        makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
                if (s(Object(a))) {
                    n.merge(c, typeof a === "string" ? [a] : a);
                } else {
                    g.call(c, a);
                }
            }
            return c;
        },
        inArray: function (a, b, c) {
            return b == null ? -1 : h.call(b, a, c);
        },
        merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            for (; d < c; d++) {
                a[e++] = b[d];
            }
            a.length = e;
            return a;
        },
        grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length, h = !c;
            for (; f < g; f++) {
                d = !b(a[f], f);
                if (d !== h) {
                    e.push(a[f]);
                }
            }
            return e;
        },
        map: function (a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) {
                d = a.length;
                for (; g < d; g++) {
                    e = b(a[g], g, c);
                    if (e != null) {
                        h.push(e);
                    }
                }
            } else {
                for (g in a) {
                    e = b(a[g], g, c);
                    if (e != null) {
                        h.push(e);
                    }
                }
            }
            return f.apply([], h);
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, f;
            if (typeof b === "string") {
                c = a[b];
                b = a;
                a = c;
            }
            if (!n.isFunction(a)) {
                return undefined;
            }
            d = e.call(arguments, 2);
            f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)));
            };
            f.guid = a.guid = a.guid || n.guid++;
            return f;
        },
        now: Date.now,
        support: l
    });
    if (typeof Symbol === "function") {
        n.fn[Symbol.iterator] = c[Symbol.iterator];
    }
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        if (c === "function" || n.isWindow(a)) {
            return false;
        }
        return c === "array" || b === 0 || typeof b === "number" && b > 0 && b - 1 in a;
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = fa(), z = fa(), A = fa(), B = function (a, b) {
            if (a === b) {
                l = true;
            }
            return 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            var c = 0, d = a.length;
            for (; c < d; c++) {
                if (a[c] === b) {
                    return c;
                }
            }
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|" + ".*" + ")\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320);
        }, da = function () {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes);
            E[v.childNodes.length].nodeType;
        } catch (a) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b));
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) { }
                    a.length = c - 1;
                }
            };
        }
        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            d = d || [];
            if (typeof a !== "string" || !a || x !== 1 && x !== 9 && x !== 11) {
                return d;
            }
            if (!e) {
                if ((b ? b.ownerDocument || b : v) !== n) {
                    m(b);
                }
                b = b || n;
                if (p) {
                    if (x !== 11 && (o = $.exec(a))) {
                        if (f = o[1]) {
                            if (x === 9) {
                                if (j = b.getElementById(f)) {
                                    if (j.id === f) {
                                        d.push(j);
                                        return d;
                                    }
                                } else {
                                    return d;
                                }
                            } else {
                                if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
                                    d.push(j);
                                    return d;
                                }
                            }
                        } else if (o[2]) {
                            H.apply(d, b.getElementsByTagName(a));
                            return d;
                        } else if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            H.apply(d, b.getElementsByClassName(f));
                            return d;
                        }
                    }
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (x !== 1) {
                            w = b;
                            s = a;
                        } else if (b.nodeName.toLowerCase() !== "object") {
                            if (k = b.getAttribute("id")) {
                                k = k.replace(aa, "\\$&");
                            } else {
                                b.setAttribute("id", k = u);
                            }
                            r = g(a);
                            h = r.length;
                            l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + pa(r[h]);
                            }
                            s = r.join(",");
                            w = _.test(a) && na(b.parentNode) || b;
                        }
                        if (s) {
                            try {
                                H.apply(d, w.querySelectorAll(s));
                                return d;
                            } catch (a) { } finally {
                                if (k === u) {
                                    b.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function fa() {
            var a = [];
            function b(c, e) {
                if (a.push(c + " ") > d.cacheLength) {
                    delete b[a.shift()];
                }
                return b[c + " "] = e;
            }
            return b;
        }
        function ga(a) {
            a[u] = true;
            return a;
        }
        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (a) {
                return false;
            } finally {
                if (b.parentNode) {
                    b.parentNode.removeChild(b);
                }
                b = null;
            }
        }
        function ia(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }
        function ja(a, b) {
            var c = b && a, d = c && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d;
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function ka(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a;
            };
        }
        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a;
            };
        }
        function ma(a) {
            return ga(function (b) {
                b = +b;
                return ga(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        if (c[e = f[g]]) {
                            c[e] = !(d[e] = c[e]);
                        }
                    }
                });
            });
        }
        function na(a) {
            return a && typeof a.getElementsByTagName !== "undefined" && a;
        }
        c = ea.support = {};
        f = ea.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : false;
        };
        m = ea.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            if (g === n || g.nodeType !== 9 || !g.documentElement) {
                return n;
            }
            n = g;
            o = n.documentElement;
            p = !f(n);
            if ((e = n.defaultView) && e.top !== e) {
                if (e.addEventListener) {
                    e.addEventListener("unload", da, false);
                } else if (e.attachEvent) {
                    e.attachEvent("onunload", da);
                }
            }
            c.attributes = ha(function (a) {
                a.className = "i";
                return !a.getAttribute("className");
            });
            c.getElementsByTagName = ha(function (a) {
                a.appendChild(n.createComment(""));
                return !a.getElementsByTagName("*").length;
            });
            c.getElementsByClassName = Z.test(n.getElementsByClassName);
            c.getById = ha(function (a) {
                o.appendChild(a).id = u;
                return !n.getElementsByName || !n.getElementsByName(u).length;
            });
            if (c.getById) {
                d.find["ID"] = function (a, b) {
                    if (typeof b.getElementById !== "undefined" && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : [];
                    }
                };
                d.filter["ID"] = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                        return a.getAttribute("id") === b;
                    };
                };
            } else {
                delete d.find["ID"];
                d.filter["ID"] = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                        var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                        return c && c.value === b;
                    };
                };
            }
            d.find["TAG"] = c.getElementsByTagName ? function (a, b) {
                if (typeof b.getElementsByTagName !== "undefined") {
                    return b.getElementsByTagName(a);
                } else if (c.qsa) {
                    return b.querySelectorAll(a);
                }
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if (a === "*") {
                    while (c = f[e++]) {
                        if (c.nodeType === 1) {
                            d.push(c);
                        }
                    }
                    return d;
                }
                return f;
            };
            d.find["CLASS"] = c.getElementsByClassName && function (a, b) {
                if (typeof b.getElementsByClassName !== "undefined" && p) {
                    return b.getElementsByClassName(a);
                }
            };
            r = [];
            q = [];
            if (c.qsa = Z.test(n.querySelectorAll)) {
                ha(function (a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a>" + "<select id='" + u + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (a.querySelectorAll("[msallowcapture^='']").length) {
                        q.push("[*^$]=" + L + "*(?:''|\"\")");
                    }
                    if (!a.querySelectorAll("[selected]").length) {
                        q.push("\\[" + L + "*(?:value|" + K + ")");
                    }
                    if (!a.querySelectorAll("[id~=" + u + "-]").length) {
                        q.push("~=");
                    }
                    if (!a.querySelectorAll(":checked").length) {
                        q.push(":checked");
                    }
                    if (!a.querySelectorAll("a#" + u + "+*").length) {
                        q.push(".#.+[+~]");
                    }
                });
                ha(function (a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    if (a.querySelectorAll("[name=d]").length) {
                        q.push("name" + L + "*[*^$|!~]?=");
                    }
                    if (!a.querySelectorAll(":enabled").length) {
                        q.push(":enabled", ":disabled");
                    }
                    a.querySelectorAll("*,:x");
                    q.push(",.*:");
                });
            }
            if (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                ha(function (a) {
                    c.disconnectedMatch = s.call(a, "div");
                    s.call(a, "[s!='']:x");
                    r.push("!=", O);
                });
            }
            q = q.length && new RegExp(q.join("|"));
            r = r.length && new RegExp(r.join("|"));
            b = Z.test(o.compareDocumentPosition);
            t = b || Z.test(o.contains) ? function (a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16));
            } : function (a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            B = b ? function (a, b) {
                if (a === b) {
                    l = true;
                    return 0;
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (d) {
                    return d;
                }
                d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (d & 1 || !c.sortDetached && b.compareDocumentPosition(a) === d) {
                    if (a === n || a.ownerDocument === v && t(v, a)) {
                        return -1;
                    }
                    if (b === n || b.ownerDocument === v && t(v, b)) {
                        return 1;
                    }
                    return k ? J(k, a) - J(k, b) : 0;
                }
                return d & 4 ? -1 : 1;
            } : function (a, b) {
                if (a === b) {
                    l = true;
                    return 0;
                }
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                } else if (e === f) {
                    return ja(a, b);
                }
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c);
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c);
                }
                while (g[d] === h[d]) {
                    d++;
                }
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            };
            return n;
        };
        ea.matches = function (a, b) {
            return ea(a, null, null, b);
        };
        ea.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            b = b.replace(T, "='$1']");
            if (c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && a.document.nodeType !== 11) {
                        return d;
                    }
                } catch (a) { }
            }
            return ea(b, n, null, [a]).length > 0;
        };
        ea.contains = function (a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            return t(a, b);
        };
        ea.attr = function (a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : undefined;
            return f !== undefined ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        };
        ea.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        };
        ea.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            l = !c.detectDuplicates;
            k = !c.sortStable && a.slice(0);
            a.sort(B);
            if (l) {
                while (b = a[f++]) {
                    if (b === a[f]) {
                        e = d.push(f);
                    }
                }
                while (e--) {
                    a.splice(d[e], 1);
                }
            }
            k = null;
            return a;
        };
        e = ea.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (!f) {
                while (b = a[d++]) {
                    c += e(b);
                }
            } else if (f === 1 || f === 9 || f === 11) {
                if (typeof a.textContent === "string") {
                    return a.textContent;
                } else {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                }
            } else if (f === 3 || f === 4) {
                return a.nodeValue;
            }
            return c;
        };
        d = ea.selectors = {
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    a[1] = a[1].replace(ba, ca);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca);
                    if (a[2] === "~=") {
                        a[3] = " " + a[3] + " ";
                    }
                    return a.slice(0, 4);
                },
                CHILD: function (a) {
                    a[1] = a[1].toLowerCase();
                    if (a[1].slice(0, 3) === "nth") {
                        if (!a[3]) {
                            ea.error(a[0]);
                        }
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd"));
                        a[5] = +(a[7] + a[8] || a[3] === "odd");
                    } else if (a[3]) {
                        ea.error(a[0]);
                    }
                    return a;
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    if (W["CHILD"].test(a[0])) {
                        return null;
                    }
                    if (a[3]) {
                        a[2] = a[4] || a[5] || "";
                    } else if (c && U.test(c) && (b = g(c, true)) && (b = c.indexOf(")", c.length - b) - c.length)) {
                        a[0] = a[0].slice(0, b);
                        a[2] = c.slice(0, b);
                    }
                    return a.slice(0, 3);
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return a === "*" ? function () {
                        return true;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test(typeof a.className === "string" && a.className || typeof a.getAttribute !== "undefined" && a.getAttribute("class") || "");
                    });
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ea.attr(d, a);
                        if (e == null) {
                            return b === "!=";
                        }
                        if (!b) {
                            return true;
                        }
                        e += "";
                        return b === "=" ? e === c : b === "!=" ? e !== c : b === "^=" ? c && e.indexOf(c) === 0 : b === "*=" ? c && e.indexOf(c) > -1 : b === "$=" ? c && e.slice(-c.length) === c : b === "~=" ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : b === "|=" ? e === c || e.slice(0, c.length + 1) === c + "-" : false;
                    };
                },
                CHILD: function (a, b, c, d, e) {
                    var f = a.slice(0, 3) !== "nth", g = a.slice(-4) !== "last", h = b === "of-type";
                    return d === 1 && e === 0 ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = false;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : m.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    o = p = a === "only" && !o && "nextSibling";
                                }
                                return true;
                            }
                            o = [g ? q.firstChild : q.lastChild];
                            if (g && s) {
                                m = q;
                                l = m[u] || (m[u] = {});
                                k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                j = k[a] || [];
                                n = j[0] === w && j[1];
                                t = n && j[2];
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (m.nodeType === 1 && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break;
                                    }
                                }
                            } else {
                                if (s) {
                                    m = b;
                                    l = m[u] || (m[u] = {});
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                    j = k[a] || [];
                                    n = j[0] === w && j[1];
                                    t = n;
                                }
                                if (t === false) {
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : m.nodeType === 1) && ++t) {
                                            if (s) {
                                                l = m[u] || (m[u] = {});
                                                k = l[m.uniqueID] || (l[m.uniqueID] = {});
                                                k[a] = [w, t];
                                            }
                                            if (m === b) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            t -= e;
                            return t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    if (e[u]) {
                        return e(b);
                    }
                    if (e.length > 1) {
                        c = [a, a, "", b];
                        return d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function (a, c) {
                            var d, f = e(a, b), g = f.length;
                            while (g--) {
                                d = J(a, f[g]);
                                a[d] = !(c[d] = f[g]);
                            }
                        }) : function (a) {
                            return e(a, 0, c);
                        };
                    }
                    return e;
                }
            },
            pseudos: {
                not: ga(function (a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) {
                            if (f = g[h]) {
                                a[h] = !(b[h] = f);
                            }
                        }
                    }) : function (a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        b[0] = null;
                        return !c.pop();
                    };
                }),
                has: ga(function (a) {
                    return function (b) {
                        return ea(a, b).length > 0;
                    };
                }),
                contains: ga(function (a) {
                    a = a.replace(ba, ca);
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ga(function (a) {
                    if (!V.test(a || "")) {
                        ea.error("unsupported lang: " + a);
                    }
                    a = a.replace(ba, ca).toLowerCase();
                    return function (b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                c = c.toLowerCase();
                                return c === a || c.indexOf(a + "-") === 0;
                            }
                        } while ((b = b.parentNode) && b.nodeType === 1);
                        return false;
                    };
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function (a) {
                    return a === o;
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function (a) {
                    return a.disabled === false;
                },
                disabled: function (a) {
                    return a.disabled === true;
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected;
                },
                selected: function (a) {
                    if (a.parentNode) {
                        a.parentNode.selectedIndex;
                    }
                    return a.selected === true;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function (a) {
                    return !d.pseudos["empty"](a);
                },
                header: function (a) {
                    return Y.test(a.nodeName);
                },
                input: function (a) {
                    return X.test(a.nodeName);
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button";
                },
                text: function (a) {
                    var b;
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === "text");
                },
                first: ma(function () {
                    return [0];
                }),
                last: ma(function (a, b) {
                    return [b - 1];
                }),
                eq: ma(function (a, b, c) {
                    return [c < 0 ? c + b : c];
                }),
                even: ma(function (a, b) {
                    var c = 0;
                    for (; c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                odd: ma(function (a, b) {
                    var c = 1;
                    for (; c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                lt: ma(function (a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (; --d >= 0;) {
                        a.push(d);
                    }
                    return a;
                }),
                gt: ma(function (a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (; ++d < b;) {
                        a.push(d);
                    }
                    return a;
                })
            }
        };
        d.pseudos["nth"] = d.pseudos["eq"];
        for (b in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            d.pseudos[b] = ka(b);
        }
        for (b in {
            submit: true,
            reset: true
        }) {
            d.pseudos[b] = la(b);
        }
        function oa() { }
        oa.prototype = d.filters = d.pseudos;
        d.setFilters = new oa();
        g = ea.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0);
            }
            h = a;
            i = [];
            j = d.preFilter;
            while (h) {
                if (!c || (e = R.exec(h))) {
                    if (e) {
                        h = h.slice(e[0].length) || h;
                    }
                    i.push(f = []);
                }
                c = false;
                if (e = S.exec(h)) {
                    c = e.shift();
                    f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    });
                    h = h.slice(c.length);
                }
                for (g in d.filter) {
                    if ((e = W[g].exec(h)) && (!j[g] || (e = j[g](e)))) {
                        c = e.shift();
                        f.push({
                            value: c,
                            type: g,
                            matches: e
                        });
                        h = h.slice(c.length);
                    }
                }
                if (!c) {
                    break;
                }
            }
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0);
        };
        function pa(a) {
            var b = 0, c = a.length, d = "";
            for (; b < c; b++) {
                d += a[b].value;
            }
            return d;
        }
        function qa(a, b, c) {
            var d = b.dir, e = c && d === "parentNode", f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) {
                    if (b.nodeType === 1 || e) {
                        return a(b, c, f);
                    }
                }
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || e) {
                            if (a(b, c, g)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || e) {
                            j = b[u] || (b[u] = {});
                            i = j[b.uniqueID] || (j[b.uniqueID] = {});
                            if ((h = i[d]) && h[0] === w && h[1] === f) {
                                return k[2] = h[2];
                            } else {
                                i[d] = k;
                                if (k[2] = a(b, c, g)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function ra(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return false;
                    }
                }
                return true;
            } : a[0];
        }
        function sa(a, b, c) {
            var d = 0, e = b.length;
            for (; d < e; d++) {
                ea(a, b[d], c);
            }
            return c;
        }
        function ta(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null;
            for (; h < i; h++) {
                if (f = a[h]) {
                    if (!c || c(f, d, e)) {
                        g.push(f);
                        if (j) {
                            b.push(h);
                        }
                    }
                }
            }
            return g;
        }
        function ua(a, b, c, d, e, f) {
            if (d && !d[u]) {
                d = ua(d);
            }
            if (e && !e[u]) {
                e = ua(e, f);
            }
            return ga(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || sa(b || "*", h.nodeType ? [h] : h, []), q = a && (f || !b) ? ta(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c) {
                    c(q, r, h, i);
                }
                if (d) {
                    j = ta(r, n);
                    d(j, [], h, i);
                    k = j.length;
                    while (k--) {
                        if (l = j[k]) {
                            r[n[k]] = !(q[n[k]] = l);
                        }
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [];
                            k = r.length;
                            while (k--) {
                                if (l = r[k]) {
                                    j.push(q[k] = l);
                                }
                            }
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) {
                            if ((l = r[k]) && (j = e ? J(f, l) : m[k]) > -1) {
                                f[j] = !(g[j] = l);
                            }
                        }
                    }
                } else {
                    r = ta(r === g ? r.splice(o, r.length) : r);
                    if (e) {
                        e(null, g, r, i);
                    } else {
                        H.apply(g, r);
                    }
                }
            });
        }
        function va(a) {
            var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function (a) {
                return a === b;
            }, h, true), l = qa(function (a) {
                return J(b, a) > -1;
            }, h, true), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                b = null;
                return e;
            }];
            for (; i < f; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [qa(ra(m), c)];
                } else {
                    c = d.filter[a[i].type].apply(null, a[i].matches);
                    if (c[u]) {
                        e = ++i;
                        for (; e < f; e++) {
                            if (d.relative[a[e].type]) {
                                break;
                            }
                        }
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
                            value: a[i - 2].type === " " ? "*" : ""
                        })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a));
                    }
                    m.push(c);
                }
            }
            return ra(m);
        }
        function wa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find["TAG"]("*", k), y = w += v == null ? 1 : Math.random() || .1, z = x.length;
                if (k) {
                    j = g === n || g || k;
                }
                for (; s !== z && (l = x[s]) != null; s++) {
                    if (e && l) {
                        o = 0;
                        if (!g && l.ownerDocument !== n) {
                            m(l);
                            h = !p;
                        }
                        while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break;
                            }
                        }
                        if (k) {
                            w = y;
                        }
                    }
                    if (c) {
                        if (l = !q && l) {
                            r--;
                        }
                        if (f) {
                            t.push(l);
                        }
                    }
                }
                r += s;
                if (c && s !== r) {
                    o = 0;
                    while (q = b[o++]) {
                        q(t, u, g, h);
                    }
                    if (f) {
                        if (r > 0) {
                            while (s--) {
                                if (!(t[s] || u[s])) {
                                    u[s] = F.call(i);
                                }
                            }
                        }
                        u = ta(u);
                    }
                    H.apply(i, u);
                    if (k && !f && u.length > 0 && r + b.length > 1) {
                        ea.uniqueSort(i);
                    }
                }
                if (k) {
                    w = y;
                    j = v;
                }
                return t;
            };
            return c ? ga(f) : f;
        }
        h = ea.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                if (!b) {
                    b = g(a);
                }
                c = b.length;
                while (c--) {
                    f = va(b[c]);
                    if (f[u]) {
                        d.push(f);
                    } else {
                        e.push(f);
                    }
                }
                f = A(a, wa(e, d));
                f.selector = a;
            }
            return f;
        };
        i = ea.select = function (a, b, e, f) {
            var i, j, k, l, m, n = typeof a === "function" && a, o = !f && g(a = n.selector || a);
            e = e || [];
            if (o.length === 1) {
                j = o[0] = o[0].slice(0);
                if (j.length > 2 && (k = j[0]).type === "ID" && c.getById && b.nodeType === 9 && p && d.relative[j[1].type]) {
                    b = (d.find["ID"](k.matches[0].replace(ba, ca), b) || [])[0];
                    if (!b) {
                        return e;
                    } else if (n) {
                        b = b.parentNode;
                    }
                    a = a.slice(j.shift().value.length);
                }
                i = W["needsContext"].test(a) ? 0 : j.length;
                while (i--) {
                    k = j[i];
                    if (d.relative[l = k.type]) {
                        break;
                    }
                    if (m = d.find[l]) {
                        if (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b)) {
                            j.splice(i, 1);
                            a = f.length && pa(j);
                            if (!a) {
                                H.apply(e, f);
                                return e;
                            }
                            break;
                        }
                    }
                }
            }
            (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b);
            return e;
        };
        c.sortStable = u.split("").sort(B).join("") === u;
        c.detectDuplicates = !!l;
        m();
        c.sortDetached = ha(function (a) {
            return a.compareDocumentPosition(n.createElement("div")) & 1;
        });
        if (!ha(function (a) {
            a.innerHTML = "<a href='#'></a>";
            return a.firstChild.getAttribute("href") === "#";
        })) {
            ia("type|href|height|width", function (a, b, c) {
                if (!c) {
                    return a.getAttribute(b, b.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!c.attributes || !ha(function (a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return a.firstChild.getAttribute("value") === "";
        })) {
            ia("value", function (a, b, c) {
                if (!c && a.nodeName.toLowerCase() === "input") {
                    return a.defaultValue;
                }
            });
        }
        if (!ha(function (a) {
            return a.getAttribute("disabled") == null;
        })) {
            ia(K, function (a, b, c) {
                var d;
                if (!c) {
                    return a[b] === true ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }
            });
        }
        return ea;
    }(a);
    n.find = t;
    n.expr = t.selectors;
    n.expr[":"] = n.expr.pseudos;
    n.uniqueSort = n.unique = t.uniqueSort;
    n.text = t.getText;
    n.isXMLDoc = t.isXML;
    n.contains = t.contains;
    var u = function (a, b, c) {
        var d = [], e = c !== undefined;
        while ((a = a[b]) && a.nodeType !== 9) {
            if (a.nodeType === 1) {
                if (e && n(a).is(c)) {
                    break;
                }
                d.push(a);
            }
        }
        return d;
    };
    var v = function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) {
            if (a.nodeType === 1 && a !== b) {
                c.push(a);
            }
        }
        return c;
    };
    var w = n.expr.match.needsContext;
    var x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    var y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        }
        if (b.nodeType) {
            return n.grep(a, function (a) {
                return a === b !== c;
            });
        }
        if (typeof b === "string") {
            if (y.test(b)) {
                return n.filter(b, a, c);
            }
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return h.call(b, a) > -1 !== c;
        });
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        if (c) {
            a = ":not(" + a + ")";
        }
        return b.length === 1 && d.nodeType === 1 ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return a.nodeType === 1;
        }));
    };
    n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if (typeof a !== "string") {
                return this.pushStack(n(a).filter(function () {
                    for (b = 0; b < c; b++) {
                        if (n.contains(e[b], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (b = 0; b < c; b++) {
                n.find(a, e[b], d);
            }
            d = this.pushStack(c > 1 ? n.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + a : a;
            return d;
        },
        filter: function (a) {
            return this.pushStack(z(this, a || [], false));
        },
        not: function (a) {
            return this.pushStack(z(this, a || [], true));
        },
        is: function (a) {
            return !!z(this, typeof a === "string" && w.test(a) ? n(a) : a || [], false).length;
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) {
        var e, f;
        if (!a) {
            return this;
        }
        c = c || A;
        if (typeof a === "string") {
            if (a[0] === "<" && a[a.length - 1] === ">" && a.length >= 3) {
                e = [null, a, null];
            } else {
                e = B.exec(a);
            }
            if (e && (e[1] || !b)) {
                if (e[1]) {
                    b = b instanceof n ? b[0] : b;
                    n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, true));
                    if (x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
                            if (n.isFunction(this[e])) {
                                this[e](b[e]);
                            } else {
                                this.attr(e, b[e]);
                            }
                        }
                    }
                    return this;
                } else {
                    f = d.getElementById(e[2]);
                    if (f && f.parentNode) {
                        this.length = 1;
                        this[0] = f;
                    }
                    this.context = d;
                    this.selector = a;
                    return this;
                }
            } else if (!b || b.jquery) {
                return (b || c).find(a);
            } else {
                return this.constructor(b).find(a);
            }
        } else if (a.nodeType) {
            this.context = this[0] = a;
            this.length = 1;
            return this;
        } else if (n.isFunction(a)) {
            return c.ready !== undefined ? c.ready(a) : a(n);
        }
        if (a.selector !== undefined) {
            this.selector = a.selector;
            this.context = a.context;
        }
        return n.makeArray(a, this);
    };
    C.prototype = n.fn;
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                var a = 0;
                for (; a < c; a++) {
                    if (n.contains(this, b[a])) {
                        return true;
                    }
                }
            });
        },
        closest: function (a, b) {
            var c, d = 0, e = this.length, f = [], g = w.test(a) || typeof a !== "string" ? n(a, b || this.context) : 0;
            for (; d < e; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : c.nodeType === 1 && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function (a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof a === "string") {
                return h.call(n(a), this[0]);
            }
            return h.call(this, a.jquery ? a[0] : a);
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function F(a, b) {
        while ((a = a[b]) && a.nodeType !== 1) { }
        return a;
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
            return u(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c);
        },
        next: function (a) {
            return F(a, "nextSibling");
        },
        prev: function (a) {
            return F(a, "previousSibling");
        },
        nextAll: function (a) {
            return u(a, "nextSibling");
        },
        prevAll: function (a) {
            return u(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c);
        },
        siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
            return v(a.firstChild);
        },
        contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            if (a.slice(-5) !== "Until") {
                d = c;
            }
            if (d && typeof d === "string") {
                e = n.filter(d, e);
            }
            if (this.length > 1) {
                if (!E[a]) {
                    n.uniqueSort(e);
                }
                if (D.test(a)) {
                    e.reverse();
                }
            }
            return this.pushStack(e);
        };
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        n.each(a.match(G) || [], function (a, c) {
            b[c] = true;
        });
        return b;
    }
    n.Callbacks = function (a) {
        a = typeof a === "string" ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            e = a.once;
            d = b = true;
            for (; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) {
                    if (f[h].apply(c[0], c[1]) === false && a.stopOnFalse) {
                        h = f.length;
                        c = false;
                    }
                }
            }
            if (!a.memory) {
                c = false;
            }
            b = false;
            if (e) {
                if (c) {
                    f = [];
                } else {
                    f = "";
                }
            }
        }, j = {
            add: function () {
                if (f) {
                    if (c && !b) {
                        h = f.length - 1;
                        g.push(c);
                    }
                    (function b(c) {
                        n.each(c, function (c, d) {
                            if (n.isFunction(d)) {
                                if (!a.unique || !j.has(d)) {
                                    f.push(d);
                                }
                            } else if (d && d.length && n.type(d) !== "string") {
                                b(d);
                            }
                        });
                    })(arguments);
                    if (c && !b) {
                        i();
                    }
                }
                return this;
            },
            remove: function () {
                n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) {
                        f.splice(c, 1);
                        if (c <= h) {
                            h--;
                        }
                    }
                });
                return this;
            },
            has: function (a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function () {
                if (f) {
                    f = [];
                }
                return this;
            },
            disable: function () {
                e = g = [];
                f = c = "";
                return this;
            },
            disabled: function () {
                return !f;
            },
            lock: function () {
                e = g = [];
                if (!c) {
                    f = c = "";
                }
                return this;
            },
            locked: function () {
                return !!e;
            },
            fireWith: function (a, c) {
                if (!e) {
                    c = c || [];
                    c = [a, c.slice ? c.slice() : c];
                    g.push(c);
                    if (!b) {
                        i();
                    }
                }
                return this;
            },
            fire: function () {
                j.fireWith(this, arguments);
                return this;
            },
            fired: function () {
                return !!d;
            }
        };
        return j;
    };
    n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c;
                },
                always: function () {
                    e.done(arguments).fail(arguments);
                    return this;
                },
                then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                if (a && n.isFunction(a.promise)) {
                                    a.promise().progress(c.notify).done(c.resolve).fail(c.reject);
                                } else {
                                    c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                                }
                            });
                        });
                        a = null;
                    }).promise();
                },
                promise: function (a) {
                    return a != null ? n.extend(a, d) : d;
                }
            }, e = {};
            d.pipe = d.then;
            n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add;
                if (h) {
                    g.add(function () {
                        c = h;
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                }
                e[f[0]] = function () {
                    e[f[0] + "With"](this === e ? d : this, arguments);
                    return this;
                };
                e[f[0] + "With"] = g.fireWith;
            });
            d.promise(e);
            if (a) {
                a.call(e, e);
            }
            return e;
        },
        when: function (a) {
            var b = 0, c = e.call(arguments), d = c.length, f = d !== 1 || a && n.isFunction(a.promise) ? d : 0, g = f === 1 ? a : n.Deferred(), h = function (a, b, c) {
                return function (d) {
                    b[a] = this;
                    c[a] = arguments.length > 1 ? e.call(arguments) : d;
                    if (c === i) {
                        g.notifyWith(b, c);
                    } else if (!--f) {
                        g.resolveWith(b, c);
                    }
                };
            }, i, j, k;
            if (d > 1) {
                i = new Array(d);
                j = new Array(d);
                k = new Array(d);
                for (; b < d; b++) {
                    if (c[b] && n.isFunction(c[b].promise)) {
                        c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject);
                    } else {
                        --f;
                    }
                }
            }
            if (!f) {
                g.resolveWith(k, c);
            }
            return g.promise();
        }
    });
    var I;
    n.fn.ready = function (a) {
        n.ready.promise().done(a);
        return this;
    };
    n.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function (a) {
            if (a) {
                n.readyWait++;
            } else {
                n.ready(true);
            }
        },
        ready: function (a) {
            if (a === true ? --n.readyWait : n.isReady) {
                return;
            }
            n.isReady = true;
            if (a !== true && --n.readyWait > 0) {
                return;
            }
            I.resolveWith(d, [n]);
            if (n.fn.triggerHandler) {
                n(d).triggerHandler("ready");
                n(d).off("ready");
            }
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J);
        a.removeEventListener("load", J);
        n.ready();
    }
    n.ready.promise = function (b) {
        if (!I) {
            I = n.Deferred();
            if (d.readyState === "complete" || d.readyState !== "loading" && !d.documentElement.doScroll) {
                a.setTimeout(n.ready);
            } else {
                d.addEventListener("DOMContentLoaded", J);
                a.addEventListener("load", J);
            }
        }
        return I.promise(b);
    };
    n.ready.promise();
    var K = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = c == null;
        if (n.type(c) === "object") {
            e = true;
            for (h in c) {
                K(a, b, h, c[h], true, f, g);
            }
        } else if (d !== undefined) {
            e = true;
            if (!n.isFunction(d)) {
                g = true;
            }
            if (j) {
                if (g) {
                    b.call(a, d);
                    b = null;
                } else {
                    j = b;
                    b = function (a, b, c) {
                        return j.call(n(a), c);
                    };
                }
            }
            if (b) {
                for (; h < i; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                }
            }
        }
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    var L = function (a) {
        return a.nodeType === 1 || a.nodeType === 9 || !+a.nodeType;
    };
    function M() {
        this.expando = n.expando + M.uid++;
    }
    M.uid = 1;
    M.prototype = {
        register: function (a, b) {
            var c = b || {};
            if (a.nodeType) {
                a[this.expando] = c;
            } else {
                Object.defineProperty(a, this.expando, {
                    value: c,
                    writable: true,
                    configurable: true
                });
            }
            return a[this.expando];
        },
        cache: function (a) {
            if (!L(a)) {
                return {};
            }
            var b = a[this.expando];
            if (!b) {
                b = {};
                if (L(a)) {
                    if (a.nodeType) {
                        a[this.expando] = b;
                    } else {
                        Object.defineProperty(a, this.expando, {
                            value: b,
                            configurable: true
                        });
                    }
                }
            }
            return b;
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if (typeof b === "string") {
                e[b] = c;
            } else {
                for (d in b) {
                    e[d] = b[d];
                }
            }
            return e;
        },
        get: function (a, b) {
            return b === undefined ? this.cache(a) : a[this.expando] && a[this.expando][b];
        },
        access: function (a, b, c) {
            var d;
            if (b === undefined || b && typeof b === "string" && c === undefined) {
                d = this.get(a, b);
                return d !== undefined ? d : this.get(a, n.camelCase(b));
            }
            this.set(a, b, c);
            return c !== undefined ? c : b;
        },
        remove: function (a, b) {
            var c, d, e, f = a[this.expando];
            if (f === undefined) {
                return;
            }
            if (b === undefined) {
                this.register(a);
            } else {
                if (n.isArray(b)) {
                    d = b.concat(b.map(n.camelCase));
                } else {
                    e = n.camelCase(b);
                    if (b in f) {
                        d = [b, e];
                    } else {
                        d = e;
                        d = d in f ? [d] : d.match(G) || [];
                    }
                }
                c = d.length;
                while (c--) {
                    delete f[d[c]];
                }
            }
            if (b === undefined || n.isEmptyObject(f)) {
                if (a.nodeType) {
                    a[this.expando] = undefined;
                } else {
                    delete a[this.expando];
                }
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return b !== undefined && !n.isEmptyObject(b);
        }
    };
    var N = new M();
    var O = new M();
    var P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (c === undefined && a.nodeType === 1) {
            d = "data-" + b.replace(Q, "-$&").toLowerCase();
            c = a.getAttribute(d);
            if (typeof c === "string") {
                try {
                    c = c === "true" ? true : c === "false" ? false : c === "null" ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (a) { }
                O.set(a, b, c);
            } else {
                c = undefined;
            }
        }
        return c;
    }
    n.extend({
        hasData: function (a) {
            return O.hasData(a) || N.hasData(a);
        },
        data: function (a, b, c) {
            return O.access(a, b, c);
        },
        removeData: function (a, b) {
            O.remove(a, b);
        },
        _data: function (a, b, c) {
            return N.access(a, b, c);
        },
        _removeData: function (a, b) {
            N.remove(a, b);
        }
    });
    n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (a === undefined) {
                if (this.length) {
                    e = O.get(f);
                    if (f.nodeType === 1 && !N.get(f, "hasDataAttrs")) {
                        c = g.length;
                        while (c--) {
                            if (g[c]) {
                                d = g[c].name;
                                if (d.indexOf("data-") === 0) {
                                    d = n.camelCase(d.slice(5));
                                    R(f, d, e[d]);
                                }
                            }
                        }
                        N.set(f, "hasDataAttrs", true);
                    }
                }
                return e;
            }
            if (typeof a === "object") {
                return this.each(function () {
                    O.set(this, a);
                });
            }
            return K(this, function (b) {
                var c, d;
                if (f && b === undefined) {
                    c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase());
                    if (c !== undefined) {
                        return c;
                    }
                    d = n.camelCase(a);
                    c = O.get(f, d);
                    if (c !== undefined) {
                        return c;
                    }
                    c = R(f, d, undefined);
                    if (c !== undefined) {
                        return c;
                    }
                    return;
                }
                d = n.camelCase(a);
                this.each(function () {
                    var c = O.get(this, d);
                    O.set(this, d, b);
                    if (a.indexOf("-") > -1 && c !== undefined) {
                        O.set(this, a, b);
                    }
                });
            }, null, b, arguments.length > 1, null, true);
        },
        removeData: function (a) {
            return this.each(function () {
                O.remove(this, a);
            });
        }
    });
    n.extend({
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue";
                d = N.get(a, b);
                if (c) {
                    if (!d || n.isArray(c)) {
                        d = N.access(a, b, n.makeArray(c));
                    } else {
                        d.push(c);
                    }
                }
                return d || [];
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b);
            };
            if (e === "inprogress") {
                e = c.shift();
                d--;
            }
            if (e) {
                if (b === "fx") {
                    c.unshift("inprogress");
                }
                delete f.stop;
                e.call(a, g, f);
            }
            if (!d && f) {
                f.empty.fire();
            }
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    N.remove(a, [b + "queue", c]);
                })
            });
        }
    });
    n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            if (typeof a !== "string") {
                b = a;
                a = "fx";
                c--;
            }
            if (arguments.length < c) {
                return n.queue(this[0], a);
            }
            return b === undefined ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a);
                if (a === "fx" && c[0] !== "inprogress") {
                    n.dequeue(this, a);
                }
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                if (!--d) {
                    e.resolveWith(f, [f]);
                }
            };
            if (typeof a !== "string") {
                b = a;
                a = undefined;
            }
            a = a || "fx";
            while (g--) {
                c = N.get(f[g], a + "queueHooks");
                if (c && c.empty) {
                    d++;
                    c.empty.add(h);
                }
            }
            h();
            return e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i");
    var U = ["Top", "Right", "Bottom", "Left"];
    var V = function (a, b) {
        a = b || a;
        return n.css(a, "display") === "none" || !n.contains(a.ownerDocument, a);
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
            return d.cur();
        } : function () {
            return n.css(a, b, "");
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || j !== "px" && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3];
            c = c || [];
            k = +i || 1;
            do {
                f = f || ".5";
                k = k / f;
                n.style(a, b, k + j);
            } while (f !== (f = h() / i) && f !== 1 && --g);
        }
        if (c) {
            k = +k || +i || 0;
            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2];
            if (d) {
                d.unit = j;
                d.start = k;
                d.end = e;
            }
        }
        return e;
    }
    var X = /^(?:checkbox|radio)$/i;
    var Y = /<([\w:-]+)/;
    var Z = /^$|\/(?:java|ecma)script/i;
    var $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option;
    $.tbody = $.tfoot = $.colgroup = $.caption = $.thead;
    $.th = $.td;
    function _(a, b) {
        var c = typeof a.getElementsByTagName !== "undefined" ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== "undefined" ? a.querySelectorAll(b || "*") : [];
        return b === undefined || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }
    function aa(a, b) {
        var c = 0, d = a.length;
        for (; c < d; c++) {
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
        }
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length;
        for (; o < p; o++) {
            f = a[o];
            if (f || f === 0) {
                if (n.type(f) === "object") {
                    n.merge(m, f.nodeType ? [f] : f);
                } else if (!ba.test(f)) {
                    m.push(b.createTextNode(f));
                } else {
                    g = g || l.appendChild(b.createElement("div"));
                    h = (Y.exec(f) || ["", ""])[1].toLowerCase();
                    i = $[h] || $._default;
                    g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2];
                    k = i[0];
                    while (k--) {
                        g = g.lastChild;
                    }
                    n.merge(m, g.childNodes);
                    g = l.firstChild;
                    g.textContent = "";
                }
            }
        }
        l.textContent = "";
        o = 0;
        while (f = m[o++]) {
            if (d && n.inArray(f, d) > -1) {
                if (e) {
                    e.push(f);
                }
                continue;
            }
            j = n.contains(f.ownerDocument, f);
            g = _(l.appendChild(f), "script");
            if (j) {
                aa(g);
            }
            if (c) {
                k = 0;
                while (f = g[k++]) {
                    if (Z.test(f.type || "")) {
                        c.push(f);
                    }
                }
            }
        }
        return l;
    }
    (function () {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        b.appendChild(c);
        l.checkClone = b.cloneNode(true).cloneNode(true).lastChild.checked;
        b.innerHTML = "<textarea>x</textarea>";
        l.noCloneChecked = !!b.cloneNode(true).lastChild.defaultValue;
    })();
    var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return true;
    }
    function ha() {
        return false;
    }
    function ia() {
        try {
            return d.activeElement;
        } catch (a) { }
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if (typeof b === "object") {
            if (typeof c !== "string") {
                d = d || c;
                c = undefined;
            }
            for (h in b) {
                ja(a, h, c, d, b[h], f);
            }
            return a;
        }
        if (d == null && e == null) {
            e = c;
            d = c = undefined;
        } else if (e == null) {
            if (typeof c === "string") {
                e = d;
                d = undefined;
            } else {
                e = d;
                d = c;
                c = undefined;
            }
        }
        if (e === false) {
            e = ha;
        } else if (!e) {
            return a;
        }
        if (f === 1) {
            g = e;
            e = function (a) {
                n().off(a);
                return g.apply(this, arguments);
            };
            e.guid = g.guid || (g.guid = n.guid++);
        }
        return a.each(function () {
            n.event.add(this, b, e, d, c);
        });
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (!r) {
                return;
            }
            if (c.handler) {
                f = c;
                c = f.handler;
                e = f.selector;
            }
            if (!c.guid) {
                c.guid = n.guid++;
            }
            if (!(i = r.events)) {
                i = r.events = {};
            }
            if (!(g = r.handle)) {
                g = r.handle = function (b) {
                    return typeof n !== "undefined" && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : undefined;
                };
            }
            b = (b || "").match(G) || [""];
            j = b.length;
            while (j--) {
                h = fa.exec(b[j]) || [];
                o = q = h[1];
                p = (h[2] || "").split(".").sort();
                if (!o) {
                    continue;
                }
                l = n.event.special[o] || {};
                o = (e ? l.delegateType : l.bindType) || o;
                l = n.event.special[o] || {};
                k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f);
                if (!(m = i[o])) {
                    m = i[o] = [];
                    m.delegateCount = 0;
                    if (!l.setup || l.setup.call(a, d, p, g) === false) {
                        if (a.addEventListener) {
                            a.addEventListener(o, g);
                        }
                    }
                }
                if (l.add) {
                    l.add.call(a, k);
                    if (!k.handler.guid) {
                        k.handler.guid = c.guid;
                    }
                }
                if (e) {
                    m.splice(m.delegateCount++, 0, k);
                } else {
                    m.push(k);
                }
                n.event.global[o] = true;
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (!r || !(i = r.events)) {
                return;
            }
            b = (b || "").match(G) || [""];
            j = b.length;
            while (j--) {
                h = fa.exec(b[j]) || [];
                o = q = h[1];
                p = (h[2] || "").split(".").sort();
                if (!o) {
                    for (o in i) {
                        n.event.remove(a, o + b[j], c, d, true);
                    }
                    continue;
                }
                l = n.event.special[o] || {};
                o = (d ? l.delegateType : l.bindType) || o;
                m = i[o] || [];
                h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                g = f = m.length;
                while (f--) {
                    k = m[f];
                    if ((e || q === k.origType) && (!c || c.guid === k.guid) && (!h || h.test(k.namespace)) && (!d || d === k.selector || d === "**" && k.selector)) {
                        m.splice(f, 1);
                        if (k.selector) {
                            m.delegateCount--;
                        }
                        if (l.remove) {
                            l.remove.call(a, k);
                        }
                    }
                }
                if (g && !m.length) {
                    if (!l.teardown || l.teardown.call(a, p, r.handle) === false) {
                        n.removeEvent(a, o, r.handle);
                    }
                    delete i[o];
                }
            }
            if (n.isEmptyObject(i)) {
                N.remove(a, "handle events");
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            i[0] = a;
            a.delegateTarget = this;
            if (k.preDispatch && k.preDispatch.call(this, a) === false) {
                return;
            }
            h = n.event.handlers.call(this, a, j);
            b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem;
                c = 0;
                while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                    if (!a.rnamespace || a.rnamespace.test(g.namespace)) {
                        a.handleObj = g;
                        a.data = g.data;
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i);
                        if (d !== undefined) {
                            if ((a.result = d) === false) {
                                a.preventDefault();
                                a.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (k.postDispatch) {
                k.postDispatch.call(this, a);
            }
            return a.result;
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (a.type !== "click" || isNaN(a.button) || a.button < 1)) {
                for (; i !== this; i = i.parentNode || this) {
                    if (i.nodeType === 1 && (i.disabled !== true || a.type !== "click")) {
                        d = [];
                        for (c = 0; c < h; c++) {
                            f = b[c];
                            e = f.selector + " ";
                            if (d[e] === undefined) {
                                d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length;
                            }
                            if (d[e]) {
                                d.push(f);
                            }
                        }
                        if (d.length) {
                            g.push({
                                elem: i,
                                handlers: d
                            });
                        }
                    }
                }
            }
            if (h < b.length) {
                g.push({
                    elem: this,
                    handlers: b.slice(h)
                });
            }
            return g;
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                if (a.which == null) {
                    a.which = b.charCode != null ? b.charCode : b.keyCode;
                }
                return a;
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button;
                if (a.pageX == null && b.clientX != null) {
                    c = a.target.ownerDocument || d;
                    e = c.documentElement;
                    f = c.body;
                    a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0);
                    a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0);
                }
                if (!a.which && g !== undefined) {
                    a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0;
                }
                return a;
            }
        },
        fix: function (a) {
            if (a[n.expando]) {
                return a;
            }
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            if (!h) {
                this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {};
            }
            e = h.props ? this.props.concat(h.props) : this.props;
            a = new n.Event(g);
            b = e.length;
            while (b--) {
                c = e[b];
                a[c] = g[c];
            }
            if (!a.target) {
                a.target = d;
            }
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode;
            }
            return h.filter ? h.filter(a, g) : a;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function () {
                    if (this !== ia() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === ia() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (this.type === "checkbox" && this.click && n.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    if (a.result !== undefined && a.originalEvent) {
                        a.originalEvent.returnValue = a.result;
                    }
                }
            }
        }
    };
    n.removeEvent = function (a, b, c) {
        if (a.removeEventListener) {
            a.removeEventListener(b, c);
        }
    };
    n.Event = function (a, b) {
        if (!(this instanceof n.Event)) {
            return new n.Event(a, b);
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === undefined && a.returnValue === false ? ga : ha;
        } else {
            this.type = a;
        }
        if (b) {
            n.extend(this, b);
        }
        this.timeStamp = a && a.timeStamp || n.now();
        this[n.expando] = true;
    };
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: false,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga;
            if (a && !this.isSimulated) {
                a.preventDefault();
            }
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ga;
            if (a && !this.isSimulated) {
                a.stopPropagation();
            }
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga;
            if (a && !this.isSimulated) {
                a.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                if (!e || e !== d && !n.contains(d, e)) {
                    a.type = f.origType;
                    c = f.handler.apply(this, arguments);
                    a.type = b;
                }
                return c;
            }
        };
    });
    n.fn.extend({
        on: function (a, b, c, d) {
            return ja(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
            return ja(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                d = a.handleObj;
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
                return this;
            }
            if (typeof a === "object") {
                for (e in a) {
                    this.off(e, b, a[e]);
                }
                return this;
            }
            if (b === false || typeof b === "function") {
                c = b;
                b = undefined;
            }
            if (c === false) {
                c = ha;
            }
            return this.each(function () {
                n.event.remove(this, a, c, b);
            });
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i, ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(b.nodeType !== 11 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function qa(a) {
        a.type = (a.getAttribute("type") !== null) + "/" + a.type;
        return a;
    }
    function ra(a) {
        var b = na.exec(a.type);
        if (b) {
            a.type = b[1];
        } else {
            a.removeAttribute("type");
        }
        return a;
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (b.nodeType !== 1) {
            return;
        }
        if (N.hasData(a)) {
            f = N.access(a);
            g = N.set(b, f);
            j = f.events;
            if (j) {
                delete g.handle;
                g.events = {};
                for (e in j) {
                    for (c = 0, d = j[e].length; c < d; c++) {
                        n.event.add(b, e, j[e][c]);
                    }
                }
            }
        }
        if (O.hasData(a)) {
            h = O.access(a);
            i = n.extend({}, h);
            O.set(b, i);
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        if (c === "input" && X.test(a.type)) {
            b.checked = a.checked;
        } else if (c === "input" || c === "textarea") {
            b.defaultValue = a.defaultValue;
        }
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && typeof q === "string" && !l.checkClone && ma.test(q)) {
            return a.each(function (e) {
                var f = a.eq(e);
                if (r) {
                    b[0] = q.call(this, e, f.html());
                }
                ua(f, b, c, d);
            });
        }
        if (o) {
            e = ca(b, a[0].ownerDocument, false, a, d);
            g = e.firstChild;
            if (e.childNodes.length === 1) {
                e = g;
            }
            if (g || d) {
                h = n.map(_(e, "script"), qa);
                i = h.length;
                for (; m < o; m++) {
                    j = e;
                    if (m !== p) {
                        j = n.clone(j, true, true);
                        if (i) {
                            n.merge(h, _(j, "script"));
                        }
                    }
                    c.call(a[m], j, m);
                }
                if (i) {
                    k = h[h.length - 1].ownerDocument;
                    n.map(h, ra);
                    for (m = 0; m < i; m++) {
                        j = h[m];
                        if (Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j)) {
                            if (j.src) {
                                if (n._evalUrl) {
                                    n._evalUrl(j.src);
                                }
                            } else {
                                n.globalEval(j.textContent.replace(oa, ""));
                            }
                        }
                    }
                }
            }
        }
        return a;
    }
    function va(a, b, c) {
        var d, e = b ? n.filter(b, a) : a, f = 0;
        for (; (d = e[f]) != null; f++) {
            if (!c && d.nodeType === 1) {
                n.cleanData(_(d));
            }
            if (d.parentNode) {
                if (c && n.contains(d.ownerDocument, d)) {
                    aa(_(d, "script"));
                }
                d.parentNode.removeChild(d);
            }
        }
        return a;
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(ka, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(true), i = n.contains(a.ownerDocument, a);
            if (!l.noCloneChecked && (a.nodeType === 1 || a.nodeType === 11) && !n.isXMLDoc(a)) {
                g = _(h);
                f = _(a);
                for (d = 0, e = f.length; d < e; d++) {
                    ta(f[d], g[d]);
                }
            }
            if (b) {
                if (c) {
                    f = f || _(a);
                    g = g || _(h);
                    for (d = 0, e = f.length; d < e; d++) {
                        sa(f[d], g[d]);
                    }
                } else {
                    sa(a, h);
                }
            }
            g = _(h, "script");
            if (g.length > 0) {
                aa(g, !i && _(a, "script"));
            }
            return h;
        },
        cleanData: function (a) {
            var b, c, d, e = n.event.special, f = 0;
            for (; (c = a[f]) !== undefined; f++) {
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events) {
                            for (d in b.events) {
                                if (e[d]) {
                                    n.event.remove(c, d);
                                } else {
                                    n.removeEvent(c, d, b.handle);
                                }
                            }
                        }
                        c[N.expando] = undefined;
                    }
                    if (c[O.expando]) {
                        c[O.expando] = undefined;
                    }
                }
            }
        }
    });
    n.fn.extend({
        domManip: ua,
        detach: function (a) {
            return va(this, a, true);
        },
        remove: function (a) {
            return va(this, a);
        },
        text: function (a) {
            return K(this, function (a) {
                return a === undefined ? n.text(this) : this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = a;
                    }
                });
            }, null, a, arguments.length);
        },
        append: function () {
            return ua(this, arguments, function (a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = pa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function () {
            return ua(this, arguments, function (a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function () {
            return ua(this, arguments, function (a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this);
                }
            });
        },
        after: function () {
            return ua(this, arguments, function (a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this.nextSibling);
                }
            });
        },
        empty: function () {
            var a, b = 0;
            for (; (a = this[b]) != null; b++) {
                if (a.nodeType === 1) {
                    n.cleanData(_(a, false));
                    a.textContent = "";
                }
            }
            return this;
        },
        clone: function (a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function () {
                return n.clone(this, a, b);
            });
        },
        html: function (a) {
            return K(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (a === undefined && b.nodeType === 1) {
                    return b.innerHTML;
                }
                if (typeof a === "string" && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) {
                            b = this[c] || {};
                            if (b.nodeType === 1) {
                                n.cleanData(_(b, false));
                                b.innerHTML = a;
                            }
                        }
                        b = 0;
                    } catch (a) { }
                }
                if (b) {
                    this.empty().append(a);
                }
            }, null, a, arguments.length);
        },
        replaceWith: function () {
            var a = [];
            return ua(this, arguments, function (b) {
                var c = this.parentNode;
                if (n.inArray(this, a) < 0) {
                    n.cleanData(_(this));
                    if (c) {
                        c.replaceChild(b, this);
                    }
                }
            }, a);
        }
    });
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            var c, d = [], e = n(a), f = e.length - 1, h = 0;
            for (; h <= f; h++) {
                c = h === f ? this : this.clone(true);
                n(e[h])[b](c);
                g.apply(d, c.get());
            }
            return this.pushStack(d);
        };
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        c.detach();
        return d;
    }
    function za(a) {
        var b = d, c = xa[a];
        if (!c) {
            c = ya(a, b);
            if (c === "none" || !c) {
                wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement);
                b = wa[0].contentDocument;
                b.write();
                b.close();
                c = ya(a, b);
                wa.detach();
            }
            xa[a] = c;
        }
        return c;
    }
    var Aa = /^margin/;
    var Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i");
    var Ca = function (b) {
        var c = b.ownerDocument.defaultView;
        if (!c || !c.opener) {
            c = a;
        }
        return c.getComputedStyle(b);
    };
    var Da = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f];
            a.style[f] = b[f];
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f];
        }
        return e;
    };
    var Ea = d.documentElement;
    (function () {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (!h.style) {
            return;
        }
        h.style.backgroundClip = "content-box";
        h.cloneNode(true).style.backgroundClip = "";
        l.clearCloneStyle = h.style.backgroundClip === "content-box";
        g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        g.appendChild(h);
        function i() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            h.innerHTML = "";
            Ea.appendChild(g);
            var d = a.getComputedStyle(h);
            b = d.top !== "1%";
            f = d.marginLeft === "2px";
            c = d.width === "4px";
            h.style.marginRight = "50%";
            e = d.marginRight === "4px";
            Ea.removeChild(g);
        }
        n.extend(l, {
            pixelPosition: function () {
                i();
                return b;
            },
            boxSizingReliable: function () {
                if (c == null) {
                    i();
                }
                return c;
            },
            pixelMarginRight: function () {
                if (c == null) {
                    i();
                }
                return e;
            },
            reliableMarginLeft: function () {
                if (c == null) {
                    i();
                }
                return f;
            },
            reliableMarginRight: function () {
                var b, c = h.appendChild(d.createElement("div"));
                c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                c.style.marginRight = c.style.width = "0";
                h.style.width = "1px";
                Ea.appendChild(g);
                b = !parseFloat(a.getComputedStyle(c).marginRight);
                Ea.removeChild(g);
                h.removeChild(c);
                return b;
            }
        });
    })();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        c = c || Ca(a);
        g = c ? c.getPropertyValue(b) || c[b] : undefined;
        if ((g === "" || g === undefined) && !n.contains(a.ownerDocument, a)) {
            g = n.style(a, b);
        }
        if (c) {
            if (!l.pixelMarginRight() && Ba.test(g) && Aa.test(b)) {
                d = h.width;
                e = h.minWidth;
                f = h.maxWidth;
                h.minWidth = h.maxWidth = h.width = g;
                g = c.width;
                h.width = d;
                h.minWidth = e;
                h.maxWidth = f;
            }
        }
        return g !== undefined ? g + "" : g;
    }
    function Ga(a, b) {
        return {
            get: function () {
                if (a()) {
                    delete this.get;
                    return;
                }
                return (this.get = b).apply(this, arguments);
            }
        };
    }
    var Ha = /^(none|table(?!-c[ea]).+)/, Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ka = ["Webkit", "O", "Moz", "ms"], La = d.createElement("div").style;
    function Ma(a) {
        if (a in La) {
            return a;
        }
        var b = a[0].toUpperCase() + a.slice(1), c = Ka.length;
        while (c--) {
            a = Ka[c] + b;
            if (a in La) {
                return a;
            }
        }
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Oa(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, g = 0;
        for (; f < 4; f += 2) {
            if (c === "margin") {
                g += n.css(a, c + U[f], true, e);
            }
            if (d) {
                if (c === "content") {
                    g -= n.css(a, "padding" + U[f], true, e);
                }
                if (c !== "margin") {
                    g -= n.css(a, "border" + U[f] + "Width", true, e);
                }
            } else {
                g += n.css(a, "padding" + U[f], true, e);
                if (c !== "padding") {
                    g += n.css(a, "border" + U[f] + "Width", true, e);
                }
            }
        }
        return g;
    }
    function Pa(a, b, c) {
        var d = true, e = b === "width" ? a.offsetWidth : a.offsetHeight, f = Ca(a), g = n.css(a, "boxSizing", false, f) === "border-box";
        if (e <= 0 || e == null) {
            e = Fa(a, b, f);
            if (e < 0 || e == null) {
                e = a.style[b];
            }
            if (Ba.test(e)) {
                return e;
            }
            d = g && (l.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0;
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Qa(a, b) {
        var c, d, e, f = [], g = 0, h = a.length;
        for (; g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            f[g] = N.get(d, "olddisplay");
            c = d.style.display;
            if (b) {
                if (!f[g] && c === "none") {
                    d.style.display = "";
                }
                if (d.style.display === "" && V(d)) {
                    f[g] = N.access(d, "olddisplay", za(d.nodeName));
                }
            } else {
                e = V(d);
                if (c !== "none" || !e) {
                    N.set(d, "olddisplay", e ? c : n.css(d, "display"));
                }
            }
        }
        for (g = 0; g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            if (!b || d.style.display === "none" || d.style.display === "") {
                d.style.display = b ? f[g] || "" : "none";
            }
        }
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return c === "" ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (a, b, c, d) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return;
            }
            var e, f, g, h = n.camelCase(b), i = a.style;
            b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h);
            g = n.cssHooks[b] || n.cssHooks[h];
            if (c !== undefined) {
                f = typeof c;
                if (f === "string" && (e = T.exec(c)) && e[1]) {
                    c = W(a, b, e);
                    f = "number";
                }
                if (c == null || c !== c) {
                    return;
                }
                if (f === "number") {
                    c += e && e[3] || (n.cssNumber[h] ? "" : "px");
                }
                if (!l.clearCloneStyle && c === "" && b.indexOf("background") === 0) {
                    i[b] = "inherit";
                }
                if (!g || !("set" in g) || (c = g.set(a, c, d)) !== undefined) {
                    i[b] = c;
                }
            } else {
                if (g && "get" in g && (e = g.get(a, false, d)) !== undefined) {
                    return e;
                }
                return i[b];
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h);
            g = n.cssHooks[b] || n.cssHooks[h];
            if (g && "get" in g) {
                e = g.get(a, true, c);
            }
            if (e === undefined) {
                e = Fa(a, b, d);
            }
            if (e === "normal" && b in Ja) {
                e = Ja[b];
            }
            if (c === "" || c) {
                f = parseFloat(e);
                return c === true || isFinite(f) ? f || 0 : e;
            }
            return e;
        }
    });
    n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) {
                    return Ha.test(n.css(a, "display")) && a.offsetWidth === 0 ? Da(a, Ia, function () {
                        return Pa(a, b, d);
                    }) : Pa(a, b, d);
                }
            },
            set: function (a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, n.css(a, "boxSizing", false, f) === "border-box", f);
                if (g && (e = T.exec(c)) && (e[3] || "px") !== "px") {
                    a.style[b] = c;
                    c = n.css(a, b);
                }
                return Na(a, c, g);
            }
        };
    });
    n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
        if (b) {
            return (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
                marginLeft: 0
            }, function () {
                return a.getBoundingClientRect().left;
            })) + "px";
        }
    });
    n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
        if (b) {
            return Da(a, {
                display: "inline-block"
            }, Fa, [a, "marginRight"]);
        }
    });
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                var d = 0, e = {}, f = typeof c === "string" ? c.split(" ") : [c];
                for (; d < 4; d++) {
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                }
                return e;
            }
        };
        if (!Aa.test(a)) {
            n.cssHooks[a + b].set = Na;
        }
    });
    n.fn.extend({
        css: function (a, b) {
            return K(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    d = Ca(a);
                    e = b.length;
                    for (; g < e; g++) {
                        f[b[g]] = n.css(a, b[g], false, d);
                    }
                    return f;
                }
                return c !== undefined ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function () {
            return Qa(this, true);
        },
        hide: function () {
            return Qa(this);
        },
        toggle: function (a) {
            if (typeof a === "boolean") {
                return a ? this.show() : this.hide();
            }
            return this.each(function () {
                if (V(this)) {
                    n(this).show();
                } else {
                    n(this).hide();
                }
            });
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e);
    }
    n.Tween = Ra;
    Ra.prototype = {
        constructor: Ra,
        init: function (a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || n.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function () {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
        },
        run: function (a) {
            var b, c = Ra.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration);
            } else {
                this.pos = b = a;
            }
            this.now = (this.end - this.start) * b + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (c && c.set) {
                c.set(this);
            } else {
                Ra.propHooks._default.set(this);
            }
            return this;
        }
    };
    Ra.prototype.init.prototype = Ra.prototype;
    Ra.propHooks = {
        _default: {
            get: function (a) {
                var b;
                if (a.elem.nodeType !== 1 || a.elem[a.prop] != null && a.elem.style[a.prop] == null) {
                    return a.elem[a.prop];
                }
                b = n.css(a.elem, a.prop, "");
                return !b || b === "auto" ? 0 : b;
            },
            set: function (a) {
                if (n.fx.step[a.prop]) {
                    n.fx.step[a.prop](a);
                } else if (a.elem.nodeType === 1 && (a.elem.style[n.cssProps[a.prop]] != null || n.cssHooks[a.prop])) {
                    n.style(a.elem, a.prop, a.now + a.unit);
                } else {
                    a.elem[a.prop] = a.now;
                }
            }
        }
    };
    Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function (a) {
            if (a.elem.nodeType && a.elem.parentNode) {
                a.elem[a.prop] = a.now;
            }
        }
    };
    n.easing = {
        linear: function (a) {
            return a;
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    };
    n.fx = Ra.prototype.init;
    n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        a.setTimeout(function () {
            Sa = undefined;
        });
        return Sa = n.now();
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        b = b ? 1 : 0;
        for (; d < 4; d += 2 - b) {
            c = U[d];
            e["margin" + c] = e["padding" + c] = a;
        }
        if (b) {
            e.opacity = e.width = a;
        }
        return e;
    }
    function Ya(a, b, c) {
        var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length;
        for (; f < g; f++) {
            if (d = e[f].call(c, b, a)) {
                return d;
            }
        }
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        if (!c.queue) {
            h = n._queueHooks(a, "fx");
            if (h.unqueued == null) {
                h.unqueued = 0;
                i = h.empty.fire;
                h.empty.fire = function () {
                    if (!h.unqueued) {
                        i();
                    }
                };
            }
            h.unqueued++;
            l.always(function () {
                l.always(function () {
                    h.unqueued--;
                    if (!n.queue(a, "fx").length) {
                        h.empty.fire();
                    }
                });
            });
        }
        if (a.nodeType === 1 && ("height" in b || "width" in b)) {
            c.overflow = [o.overflow, o.overflowX, o.overflowY];
            j = n.css(a, "display");
            k = j === "none" ? N.get(a, "olddisplay") || za(a.nodeName) : j;
            if (k === "inline" && n.css(a, "float") === "none") {
                o.display = "inline-block";
            }
        }
        if (c.overflow) {
            o.overflow = "hidden";
            l.always(function () {
                o.overflow = c.overflow[0];
                o.overflowX = c.overflow[1];
                o.overflowY = c.overflow[2];
            });
        }
        for (d in b) {
            e = b[d];
            if (Ua.exec(e)) {
                delete b[d];
                f = f || e === "toggle";
                if (e === (p ? "hide" : "show")) {
                    if (e === "show" && q && q[d] !== undefined) {
                        p = true;
                    } else {
                        continue;
                    }
                }
                m[d] = q && q[d] || n.style(a, d);
            } else {
                j = undefined;
            }
        }
        if (!n.isEmptyObject(m)) {
            if (q) {
                if ("hidden" in q) {
                    p = q.hidden;
                }
            } else {
                q = N.access(a, "fxshow", {});
            }
            if (f) {
                q.hidden = !p;
            }
            if (p) {
                n(a).show();
            } else {
                l.done(function () {
                    n(a).hide();
                });
            }
            l.done(function () {
                var b;
                N.remove(a, "fxshow");
                for (b in m) {
                    n.style(a, b, m[b]);
                }
            });
            for (d in m) {
                g = Ya(p ? q[d] : 0, d, l);
                if (!(d in q)) {
                    q[d] = g.start;
                    if (p) {
                        g.end = g.start;
                        g.start = d === "width" || d === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((j === "none" ? za(a.nodeName) : j) === "inline") {
            o.display = j;
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = n.camelCase(c);
            e = b[d];
            f = a[c];
            if (n.isArray(f)) {
                e = f[1];
                f = a[c] = f[0];
            }
            if (c !== d) {
                a[d] = f;
                delete a[c];
            }
            g = n.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f);
                delete a[d];
                for (c in f) {
                    if (!(c in a)) {
                        a[c] = f[c];
                        b[c] = e;
                    }
                }
            } else {
                b[d] = e;
            }
        }
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function () {
            delete i.elem;
        }), i = function () {
            if (e) {
                return false;
            }
            var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
            for (; g < i; g++) {
                j.tweens[g].run(f);
            }
            h.notifyWith(a, [j, f, c]);
            if (f < 1 && i) {
                return c;
            } else {
                h.resolveWith(a, [j]);
                return false;
            }
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(true, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                j.tweens.push(d);
                return d;
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) {
                    return this;
                }
                e = true;
                for (; c < d; c++) {
                    j.tweens[c].run(1);
                }
                if (b) {
                    h.notifyWith(a, [j, 1, 0]);
                    h.resolveWith(a, [j, b]);
                } else {
                    h.rejectWith(a, [j, b]);
                }
                return this;
            }
        }), k = j.props;
        $a(k, j.opts.specialEasing);
        for (; f < g; f++) {
            d = _a.prefilters[f].call(j, a, k, j.opts);
            if (d) {
                if (n.isFunction(d.stop)) {
                    n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d);
                }
                return d;
            }
        }
        n.map(k, Ya, j);
        if (n.isFunction(j.opts.start)) {
            j.opts.start.call(a, j);
        }
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        }));
        return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                W(c.elem, a, T.exec(b), c);
                return c;
            }]
        },
        tweener: function (a, b) {
            if (n.isFunction(a)) {
                b = a;
                a = ["*"];
            } else {
                a = a.match(G);
            }
            var c, d = 0, e = a.length;
            for (; d < e; d++) {
                c = a[d];
                _a.tweeners[c] = _a.tweeners[c] || [];
                _a.tweeners[c].unshift(b);
            }
        },
        prefilters: [Za],
        prefilter: function (a, b) {
            if (b) {
                _a.prefilters.unshift(a);
            } else {
                _a.prefilters.push(a);
            }
        }
    });
    n.speed = function (a, b, c) {
        var d = a && typeof a === "object" ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        d.duration = n.fx.off ? 0 : typeof d.duration === "number" ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default;
        if (d.queue == null || d.queue === true) {
            d.queue = "fx";
        }
        d.old = d.complete;
        d.complete = function () {
            if (n.isFunction(d.old)) {
                d.old.call(this);
            }
            if (d.queue) {
                n.dequeue(this, d.queue);
            }
        };
        return d;
    };
    n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = _a(this, n.extend({}, a), f);
                if (e || N.get(this, "finish")) {
                    b.stop(true);
                }
            };
            g.finish = g;
            return e || f.queue === false ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop;
                b(c);
            };
            if (typeof a !== "string") {
                c = b;
                b = a;
                a = undefined;
            }
            if (b && a !== false) {
                this.queue(a || "fx", []);
            }
            return this.each(function () {
                var b = true, e = a != null && a + "queueHooks", f = n.timers, g = N.get(this);
                if (e) {
                    if (g[e] && g[e].stop) {
                        d(g[e]);
                    }
                } else {
                    for (e in g) {
                        if (g[e] && g[e].stop && Va.test(e)) {
                            d(g[e]);
                        }
                    }
                }
                for (e = f.length; e--;) {
                    if (f[e].elem === this && (a == null || f[e].queue === a)) {
                        f[e].anim.stop(c);
                        b = false;
                        f.splice(e, 1);
                    }
                }
                if (b || !c) {
                    n.dequeue(this, a);
                }
            });
        },
        finish: function (a) {
            if (a !== false) {
                a = a || "fx";
            }
            return this.each(function () {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                c.finish = true;
                n.queue(this, a, []);
                if (e && e.stop) {
                    e.stop.call(this, true);
                }
                for (b = f.length; b--;) {
                    if (f[b].elem === this && f[b].queue === a) {
                        f[b].anim.stop(true);
                        f.splice(b, 1);
                    }
                }
                for (b = 0; b < g; b++) {
                    if (d[b] && d[b].finish) {
                        d[b].finish.call(this);
                    }
                }
                delete c.finish;
            });
        }
    });
    n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return a == null || typeof a === "boolean" ? c.apply(this, arguments) : this.animate(Xa(b, true), a, d, e);
        };
    });
    n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    });
    n.timers = [];
    n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        Sa = n.now();
        for (; b < c.length; b++) {
            a = c[b];
            if (!a() && c[b] === a) {
                c.splice(b--, 1);
            }
        }
        if (!c.length) {
            n.fx.stop();
        }
        Sa = undefined;
    };
    n.fx.timer = function (a) {
        n.timers.push(a);
        if (a()) {
            n.fx.start();
        } else {
            n.timers.pop();
        }
    };
    n.fx.interval = 13;
    n.fx.start = function () {
        if (!Ta) {
            Ta = a.setInterval(n.fx.tick, n.fx.interval);
        }
    };
    n.fx.stop = function () {
        a.clearInterval(Ta);
        Ta = null;
    };
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    n.fn.delay = function (b, c) {
        b = n.fx ? n.fx.speeds[b] || b : b;
        c = c || "fx";
        return this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e);
            };
        });
    };
    (function () {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox";
        l.checkOn = a.value !== "";
        l.optSelected = c.selected;
        b.disabled = true;
        l.optDisabled = !c.disabled;
        a = d.createElement("input");
        a.value = "t";
        a.type = "radio";
        l.radioValue = a.value === "t";
    })();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return K(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        }
    });
    n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (f === 3 || f === 8 || f === 2) {
                return;
            }
            if (typeof a.getAttribute === "undefined") {
                return n.prop(a, b, c);
            }
            if (f !== 1 || !n.isXMLDoc(a)) {
                b = b.toLowerCase();
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : undefined);
            }
            if (c !== undefined) {
                if (c === null) {
                    n.removeAttr(a, b);
                    return;
                }
                if (e && "set" in e && (d = e.set(a, c, b)) !== undefined) {
                    return d;
                }
                a.setAttribute(b, c + "");
                return c;
            }
            if (e && "get" in e && (d = e.get(a, b)) !== null) {
                return d;
            }
            d = n.find.attr(a, b);
            return d == null ? undefined : d;
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && b === "radio" && n.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        if (c) {
                            a.value = c;
                        }
                        return b;
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && a.nodeType === 1) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c;
                    if (n.expr.match.bool.test(c)) {
                        a[d] = false;
                    }
                    a.removeAttribute(c);
                }
            }
        }
    });
    ab = {
        set: function (a, b, c) {
            if (b === false) {
                n.removeAttr(a, c);
            } else {
                a.setAttribute(c, c);
            }
            return c;
        }
    };
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function (a, b, d) {
            var e, f;
            if (!d) {
                f = bb[b];
                bb[b] = e;
                e = c(a, b, d) != null ? b.toLowerCase() : null;
                bb[b] = f;
            }
            return e;
        };
    });
    var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return K(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        }
    });
    n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (f === 3 || f === 8 || f === 2) {
                return;
            }
            if (f !== 1 || !n.isXMLDoc(a)) {
                b = n.propFix[b] || b;
                e = n.propHooks[b];
            }
            if (c !== undefined) {
                if (e && "set" in e && (d = e.set(a, c, b)) !== undefined) {
                    return d;
                }
                return a[b] = c;
            }
            if (e && "get" in e && (d = e.get(a, b)) !== null) {
                return d;
            }
            return a[b];
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    });
    if (!l.optSelected) {
        n.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                if (b && b.parentNode) {
                    b.parentNode.selectedIndex;
                }
                return null;
            },
            set: function (a) {
                var b = a.parentNode;
                if (b) {
                    b.selectedIndex;
                    if (b.parentNode) {
                        b.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this;
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, fb(this)));
                });
            }
            if (typeof a === "string" && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    e = fb(c);
                    d = c.nodeType === 1 && (" " + e + " ").replace(eb, " ");
                    if (d) {
                        g = 0;
                        while (f = b[g++]) {
                            if (d.indexOf(" " + f + " ") < 0) {
                                d += f + " ";
                            }
                        }
                        h = n.trim(d);
                        if (e !== h) {
                            c.setAttribute("class", h);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, fb(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            if (typeof a === "string" && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    e = fb(c);
                    d = c.nodeType === 1 && (" " + e + " ").replace(eb, " ");
                    if (d) {
                        g = 0;
                        while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }
                        h = n.trim(d);
                        if (e !== h) {
                            c.setAttribute("class", h);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            if (typeof b === "boolean" && c === "string") {
                return b ? this.addClass(a) : this.removeClass(a);
            }
            if (n.isFunction(a)) {
                return this.each(function (c) {
                    n(this).toggleClass(a.call(this, c, fb(this), b), b);
                });
            }
            return this.each(function () {
                var b, d, e, f;
                if (c === "string") {
                    d = 0;
                    e = n(this);
                    f = a.match(G) || [];
                    while (b = f[d++]) {
                        if (e.hasClass(b)) {
                            e.removeClass(b);
                        } else {
                            e.addClass(b);
                        }
                    }
                } else if (a === undefined || c === "boolean") {
                    b = fb(this);
                    if (b) {
                        N.set(this, "__className__", b);
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", b || a === false ? "" : N.get(this, "__className__") || "");
                    }
                }
            });
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) {
                if (c.nodeType === 1 && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    var gb = /\r/g, hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()];
                    if (b && "get" in b && (c = b.get(e, "value")) !== undefined) {
                        return c;
                    }
                    c = e.value;
                    return typeof c === "string" ? c.replace(gb, "") : c == null ? "" : c;
                }
                return;
            }
            d = n.isFunction(a);
            return this.each(function (c) {
                var e;
                if (this.nodeType !== 1) {
                    return;
                }
                if (d) {
                    e = a.call(this, c, n(this).val());
                } else {
                    e = a;
                }
                if (e == null) {
                    e = "";
                } else if (typeof e === "number") {
                    e += "";
                } else if (n.isArray(e)) {
                    e = n.map(e, function (a) {
                        return a == null ? "" : a + "";
                    });
                }
                b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()];
                if (!b || !("set" in b) || b.set(this, e, "value") === undefined) {
                    this.value = e;
                }
            });
        }
    });
    n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return b != null ? b : n.trim(n.text(a)).replace(hb, " ");
                }
            },
            select: {
                get: function (a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0;
                    for (; i < h; i++) {
                        c = d[i];
                        if ((c.selected || i === e) && (l.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            b = n(c).val();
                            if (f) {
                                return b;
                            }
                            g.push(b);
                        }
                    }
                    return g;
                },
                set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) {
                        d = e[g];
                        if (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) {
                            c = true;
                        }
                    }
                    if (!c) {
                        a.selectedIndex = -1;
                    }
                    return f;
                }
            }
        }
    });
    n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                if (n.isArray(b)) {
                    return a.checked = n.inArray(n(a).val(), b) > -1;
                }
            }
        };
        if (!l.checkOn) {
            n.valHooks[this].get = function (a) {
                return a.getAttribute("value") === null ? "on" : a.value;
            };
        }
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            h = i = e = e || d;
            if (e.nodeType === 3 || e.nodeType === 8) {
                return;
            }
            if (ib.test(q + n.event.triggered)) {
                return;
            }
            if (q.indexOf(".") > -1) {
                r = q.split(".");
                q = r.shift();
                r.sort();
            }
            l = q.indexOf(":") < 0 && "on" + q;
            b = b[n.expando] ? b : new n.Event(q, typeof b === "object" && b);
            b.isTrigger = f ? 2 : 3;
            b.namespace = r.join(".");
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b.result = undefined;
            if (!b.target) {
                b.target = e;
            }
            c = c == null ? [b] : n.makeArray(c, [b]);
            o = n.event.special[q] || {};
            if (!f && o.trigger && o.trigger.apply(e, c) === false) {
                return;
            }
            if (!f && !o.noBubble && !n.isWindow(e)) {
                j = o.delegateType || q;
                if (!ib.test(j + q)) {
                    h = h.parentNode;
                }
                for (; h; h = h.parentNode) {
                    p.push(h);
                    i = h;
                }
                if (i === (e.ownerDocument || d)) {
                    p.push(i.defaultView || i.parentWindow || a);
                }
            }
            g = 0;
            while ((h = p[g++]) && !b.isPropagationStopped()) {
                b.type = g > 1 ? j : o.bindType || q;
                m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle");
                if (m) {
                    m.apply(h, c);
                }
                m = l && h[l];
                if (m && m.apply && L(h)) {
                    b.result = m.apply(h, c);
                    if (b.result === false) {
                        b.preventDefault();
                    }
                }
            }
            b.type = q;
            if (!f && !b.isDefaultPrevented()) {
                if ((!o._default || o._default.apply(p.pop(), c) === false) && L(e)) {
                    if (l && n.isFunction(e[q]) && !n.isWindow(e)) {
                        i = e[l];
                        if (i) {
                            e[l] = null;
                        }
                        n.event.triggered = q;
                        e[q]();
                        n.event.triggered = undefined;
                        if (i) {
                            e[l] = i;
                        }
                    }
                }
            }
            return b.result;
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: true
            });
            n.event.trigger(d, null, b);
        }
    });
    n.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) {
                return n.event.trigger(a, b, c, true);
            }
        }
    });
    n.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    });
    n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    });
    l.focusin = "onfocusin" in a;
    if (!l.focusin) {
        n.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = function (a) {
                n.event.simulate(b, a.target, n.event.fix(a));
            };
            n.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this, e = N.access(d, b);
                    if (!e) {
                        d.addEventListener(a, c, true);
                    }
                    N.access(d, b, (e || 0) + 1);
                },
                teardown: function () {
                    var d = this.ownerDocument || this, e = N.access(d, b) - 1;
                    if (!e) {
                        d.removeEventListener(a, c, true);
                        N.remove(d, b);
                    } else {
                        N.access(d, b, e);
                    }
                }
            };
        });
    }
    var jb = a.location;
    var kb = n.now();
    var lb = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "");
    };
    n.parseXML = function (b) {
        var c;
        if (!b || typeof b !== "string") {
            return null;
        }
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (a) {
            c = undefined;
        }
        if (!c || c.getElementsByTagName("parsererror").length) {
            n.error("Invalid XML: " + b);
        }
        return c;
    };
    var mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm, pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {}, tb = {}, ub = "*/".concat("*"), vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function (b, c) {
            if (typeof b !== "string") {
                c = b;
                b = "*";
            }
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    if (d[0] === "+") {
                        d = d.slice(1) || "*";
                        (a[d] = a[d] || []).unshift(c);
                    } else {
                        (a[d] = a[d] || []).push(c);
                    }
                }
            }
        };
    }
    function xb(a, b, c, d) {
        var e = {}, f = a === tb;
        function g(h) {
            var i;
            e[h] = true;
            n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                if (typeof j === "string" && !f && !e[j]) {
                    b.dataTypes.unshift(j);
                    g(j);
                    return false;
                } else if (f) {
                    return !(i = j);
                }
            });
            return i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) {
            if (b[c] !== undefined) {
                (e[c] ? a : d || (d = {}))[c] = b[c];
            }
        }
        if (d) {
            n.extend(true, a, d);
        }
        return a;
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while (i[0] === "*") {
            i.shift();
            if (d === undefined) {
                d = a.mimeType || b.getResponseHeader("Content-Type");
            }
        }
        if (d) {
            for (e in h) {
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
            }
        }
        if (i[0] in c) {
            f = i[0];
        } else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                if (!g) {
                    g = e;
                }
            }
            f = f || g;
        }
        if (f) {
            if (f !== i[0]) {
                i.unshift(f);
            }
            return c[f];
        }
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g];
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f]) {
                c[a.responseFields[f]] = b;
            }
            if (!i && d && a.dataFilter) {
                b = a.dataFilter(b, a.dataType);
            }
            i = f;
            f = k.shift();
            if (f) {
                if (f === "*") {
                    f = i;
                } else if (i !== "*" && i !== f) {
                    g = j[i + " " + f] || j["* " + f];
                    if (!g) {
                        for (e in j) {
                            h = e.split(" ");
                            if (h[1] === f) {
                                g = j[i + " " + h[0]] || j["* " + h[0]];
                                if (g) {
                                    if (g === true) {
                                        g = j[e];
                                    } else if (j[e] !== true) {
                                        f = h[0];
                                        k.unshift(h[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (g !== true) {
                        if (g && a.throws) {
                            b = g(b);
                        } else {
                            try {
                                b = g(b);
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: g ? a : "No conversion from " + i + " to " + f
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function (a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function (b, c) {
            if (typeof b === "object") {
                c = b;
                b = undefined;
            }
            c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (v === 2) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }
                        b = h[a.toLowerCase()];
                    }
                    return b == null ? null : b;
                },
                getAllResponseHeaders: function () {
                    return v === 2 ? g : null;
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    if (!v) {
                        a = u[c] = u[c] || a;
                        t[a] = b;
                    }
                    return this;
                },
                overrideMimeType: function (a) {
                    if (!v) {
                        m.mimeType = a;
                    }
                    return this;
                },
                statusCode: function (a) {
                    var b;
                    if (a) {
                        if (v < 2) {
                            for (b in a) {
                                s[b] = [s[b], a[b]];
                            }
                        } else {
                            x.always(a[x.status]);
                        }
                    }
                    return this;
                },
                abort: function (a) {
                    var b = a || w;
                    if (e) {
                        e.abort(b);
                    }
                    y(0, b);
                    return this;
                }
            };
            q.promise(x).complete = r.add;
            x.success = x.done;
            x.error = x.fail;
            m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//");
            m.type = c.method || c.type || m.method || m.type;
            m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""];
            if (m.crossDomain == null) {
                j = d.createElement("a");
                try {
                    j.href = m.url;
                    j.href = j.href;
                    m.crossDomain = vb.protocol + "//" + vb.host !== j.protocol + "//" + j.host;
                } catch (a) {
                    m.crossDomain = true;
                }
            }
            if (m.data && m.processData && typeof m.data !== "string") {
                m.data = n.param(m.data, m.traditional);
            }
            xb(sb, m, c, x);
            if (v === 2) {
                return x;
            }
            k = n.event && m.global;
            if (k && n.active++ === 0) {
                n.event.trigger("ajaxStart");
            }
            m.type = m.type.toUpperCase();
            m.hasContent = !qb.test(m.type);
            f = m.url;
            if (!m.hasContent) {
                if (m.data) {
                    f = m.url += (lb.test(f) ? "&" : "?") + m.data;
                    delete m.data;
                }
                if (m.cache === false) {
                    m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++;
                }
            }
            if (m.ifModified) {
                if (n.lastModified[f]) {
                    x.setRequestHeader("If-Modified-Since", n.lastModified[f]);
                }
                if (n.etag[f]) {
                    x.setRequestHeader("If-None-Match", n.etag[f]);
                }
            }
            if (m.data && m.hasContent && m.contentType !== false || c.contentType) {
                x.setRequestHeader("Content-Type", m.contentType);
            }
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) {
                x.setRequestHeader(l, m.headers[l]);
            }
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === false || v === 2)) {
                return x.abort();
            }
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                x[l](m[l]);
            }
            e = xb(tb, m, c, x);
            if (!e) {
                y(-1, "No Transport");
            } else {
                x.readyState = 1;
                if (k) {
                    p.trigger("ajaxSend", [x, m]);
                }
                if (v === 2) {
                    return x;
                }
                if (m.async && m.timeout > 0) {
                    i = a.setTimeout(function () {
                        x.abort("timeout");
                    }, m.timeout);
                }
                try {
                    v = 1;
                    e.send(t, y);
                } catch (a) {
                    if (v < 2) {
                        y(-1, a);
                    } else {
                        throw a;
                    }
                }
            }
            function y(b, c, d, h) {
                var j, l, t, u, w, y = c;
                if (v === 2) {
                    return;
                }
                v = 2;
                if (i) {
                    a.clearTimeout(i);
                }
                e = undefined;
                g = h || "";
                x.readyState = b > 0 ? 4 : 0;
                j = b >= 200 && b < 300 || b === 304;
                if (d) {
                    u = zb(m, x, d);
                }
                u = Ab(m, u, x, j);
                if (j) {
                    if (m.ifModified) {
                        w = x.getResponseHeader("Last-Modified");
                        if (w) {
                            n.lastModified[f] = w;
                        }
                        w = x.getResponseHeader("etag");
                        if (w) {
                            n.etag[f] = w;
                        }
                    }
                    if (b === 204 || m.type === "HEAD") {
                        y = "nocontent";
                    } else if (b === 304) {
                        y = "notmodified";
                    } else {
                        y = u.state;
                        l = u.data;
                        t = u.error;
                        j = !t;
                    }
                } else {
                    t = y;
                    if (b || !y) {
                        y = "error";
                        if (b < 0) {
                            b = 0;
                        }
                    }
                }
                x.status = b;
                x.statusText = (c || y) + "";
                if (j) {
                    q.resolveWith(o, [l, y, x]);
                } else {
                    q.rejectWith(o, [x, y, t]);
                }
                x.statusCode(s);
                s = undefined;
                if (k) {
                    p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]);
                }
                r.fireWith(o, [x, y]);
                if (k) {
                    p.trigger("ajaxComplete", [x, m]);
                    if (!--n.active) {
                        n.event.trigger("ajaxStop");
                    }
                }
            }
            return x;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function (a, b) {
            return n.get(a, undefined, b, "script");
        }
    });
    n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            if (n.isFunction(c)) {
                e = e || d;
                d = c;
                c = undefined;
            }
            return n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a));
        };
    });
    n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            throws: true
        });
    };
    n.fn.extend({
        wrapAll: function (a) {
            var b;
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).wrapAll(a.call(this, b));
                });
            }
            if (this[0]) {
                b = n(a, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b.insertBefore(this[0]);
                }
                b.map(function () {
                    var a = this;
                    while (a.firstElementChild) {
                        a = a.firstElementChild;
                    }
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (a) {
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).wrapInner(a.call(this, b));
                });
            }
            return this.each(function () {
                var b = n(this), c = b.contents();
                if (c.length) {
                    c.wrapAll(a);
                } else {
                    b.append(a);
                }
            });
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!n.nodeName(this, "body")) {
                    n(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    n.expr.filters.hidden = function (a) {
        return !n.expr.filters.visible(a);
    };
    n.expr.filters.visible = function (a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
    };
    var Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i, Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function (b, e) {
                if (c || Cb.test(a)) {
                    d(a, e);
                } else {
                    Gb(a + "[" + (typeof e === "object" && e != null ? b : "") + "]", e, c, d);
                }
            });
        } else if (!c && n.type(b) === "object") {
            for (e in b) {
                Gb(a + "[" + e + "]", b[e], c, d);
            }
        } else {
            d(a, b);
        }
    }
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : b == null ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (b === undefined) {
            b = n.ajaxSettings && n.ajaxSettings.traditional;
        }
        if (n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function () {
                e(this.name, this.value);
            });
        } else {
            for (c in a) {
                Gb(c, a[c], b, e);
            }
        }
        return d.join("&").replace(Bb, "+");
    };
    n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
            }).map(function (a, b) {
                var c = n(this).val();
                return c == null ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                };
            }).get();
        }
    });
    n.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (a) { }
    };
    var Hb = {
        0: 200,
        1223: 204
    }, Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib;
    l.ajax = Ib = !!Ib;
    n.ajaxTransport(function (b) {
        var c, d;
        if (l.cors || Ib && !b.crossDomain) {
            return {
                send: function (e, f) {
                    var g, h = b.xhr();
                    h.open(b.type, b.url, b.async, b.username, b.password);
                    if (b.xhrFields) {
                        for (g in b.xhrFields) {
                            h[g] = b.xhrFields[g];
                        }
                    }
                    if (b.mimeType && h.overrideMimeType) {
                        h.overrideMimeType(b.mimeType);
                    }
                    if (!b.crossDomain && !e["X-Requested-With"]) {
                        e["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (g in e) {
                        h.setRequestHeader(g, e[g]);
                    }
                    c = function (a) {
                        return function () {
                            if (c) {
                                c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null;
                                if (a === "abort") {
                                    h.abort();
                                } else if (a === "error") {
                                    if (typeof h.status !== "number") {
                                        f(0, "error");
                                    } else {
                                        f(h.status, h.statusText);
                                    }
                                } else {
                                    f(Hb[h.status] || h.status, h.statusText, (h.responseType || "text") !== "text" || typeof h.responseText !== "string" ? {
                                        binary: h.response
                                    } : {
                                        text: h.responseText
                                    }, h.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    h.onload = c();
                    d = h.onerror = c("error");
                    if (h.onabort !== undefined) {
                        h.onabort = d;
                    } else {
                        h.onreadystatechange = function () {
                            if (h.readyState === 4) {
                                a.setTimeout(function () {
                                    if (c) {
                                        d();
                                    }
                                });
                            }
                        };
                    }
                    c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null);
                    } catch (a) {
                        if (c) {
                            throw a;
                        }
                    }
                },
                abort: function () {
                    if (c) {
                        c();
                    }
                }
            };
        }
    });
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                n.globalEval(a);
                return a;
            }
        }
    });
    n.ajaxPrefilter("script", function (a) {
        if (a.cache === undefined) {
            a.cache = false;
        }
        if (a.crossDomain) {
            a.type = "GET";
        }
    });
    n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove();
                        c = null;
                        if (a) {
                            f(a.type === "error" ? 404 : 200, a.type);
                        }
                    });
                    d.head.appendChild(b[0]);
                },
                abort: function () {
                    if (c) {
                        c();
                    }
                }
            };
        }
    });
    var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Jb.pop() || n.expando + "_" + kb++;
            this[a] = true;
            return a;
        }
    });
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== false && (Kb.test(b.url) ? "url" : typeof b.data === "string" && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Kb.test(b.data) && "data");
        if (h || b.dataTypes[0] === "jsonp") {
            e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
            if (h) {
                b[h] = b[h].replace(Kb, "$1" + e);
            } else if (b.jsonp !== false) {
                b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e;
            }
            b.converters["script json"] = function () {
                if (!g) {
                    n.error(e + " was not called");
                }
                return g[0];
            };
            b.dataTypes[0] = "json";
            f = a[e];
            a[e] = function () {
                g = arguments;
            };
            d.always(function () {
                if (f === undefined) {
                    n(a).removeProp(e);
                } else {
                    a[e] = f;
                }
                if (b[e]) {
                    b.jsonpCallback = c.jsonpCallback;
                    Jb.push(e);
                }
                if (g && n.isFunction(f)) {
                    f(g[0]);
                }
                g = f = undefined;
            });
            return "script";
        }
    });
    n.parseHTML = function (a, b, c) {
        if (!a || typeof a !== "string") {
            return null;
        }
        if (typeof b === "boolean") {
            c = b;
            b = false;
        }
        b = b || d;
        var e = x.exec(a), f = !c && [];
        if (e) {
            return [b.createElement(e[1])];
        }
        e = ca([a], b, f);
        if (f && f.length) {
            n(f).remove();
        }
        return n.merge([], e.childNodes);
    };
    var Lb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if (typeof a !== "string" && Lb) {
            return Lb.apply(this, arguments);
        }
        var d, e, f, g = this, h = a.indexOf(" ");
        if (h > -1) {
            d = n.trim(a.slice(h));
            a = a.slice(0, h);
        }
        if (n.isFunction(b)) {
            c = b;
            b = undefined;
        } else if (b && typeof b === "object") {
            e = "POST";
        }
        if (g.length > 0) {
            n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function (a) {
                f = arguments;
                g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
            }).always(c && function (a, b) {
                g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                });
            });
        }
        return this;
    };
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a);
        };
    });
    n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem;
        }).length;
    };
    function Mb(a) {
        return n.isWindow(a) ? a : a.nodeType === 9 && a.defaultView;
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            if (k === "static") {
                a.style.position = "relative";
            }
            h = l.offset();
            f = n.css(a, "top");
            i = n.css(a, "left");
            j = (k === "absolute" || k === "fixed") && (f + i).indexOf("auto") > -1;
            if (j) {
                d = l.position();
                g = d.top;
                e = d.left;
            } else {
                g = parseFloat(f) || 0;
                e = parseFloat(i) || 0;
            }
            if (n.isFunction(b)) {
                b = b.call(a, c, n.extend({}, h));
            }
            if (b.top != null) {
                m.top = b.top - h.top + g;
            }
            if (b.left != null) {
                m.left = b.left - h.left + e;
            }
            if ("using" in b) {
                b.using.call(a, m);
            } else {
                l.css(m);
            }
        }
    };
    n.fn.extend({
        offset: function (a) {
            if (arguments.length) {
                return a === undefined ? this : this.each(function (b) {
                    n.offset.setOffset(this, a, b);
                });
            }
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (!f) {
                return;
            }
            b = f.documentElement;
            if (!n.contains(b, d)) {
                return e;
            }
            e = d.getBoundingClientRect();
            c = Mb(f);
            return {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            };
        },
        position: function () {
            if (!this[0]) {
                return;
            }
            var a, b, c = this[0], d = {
                top: 0,
                left: 0
            };
            if (n.css(c, "position") === "fixed") {
                b = c.getBoundingClientRect();
            } else {
                a = this.offsetParent();
                b = this.offset();
                if (!n.nodeName(a[0], "html")) {
                    d = a.offset();
                }
                d.top += n.css(a[0], "borderTopWidth", true);
                d.left += n.css(a[0], "borderLeftWidth", true);
            }
            return {
                top: b.top - d.top - n.css(c, "marginTop", true),
                left: b.left - d.left - n.css(c, "marginLeft", true)
            };
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && n.css(a, "position") === "static") {
                    a = a.offsetParent;
                }
                return a || Ea;
            });
        }
    });
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
            return K(this, function (a, d, e) {
                var f = Mb(a);
                if (e === undefined) {
                    return f ? f[b] : a[d];
                }
                if (f) {
                    f.scrollTo(!c ? e : f.pageXOffset, c ? e : f.pageYOffset);
                } else {
                    a[d] = e;
                }
            }, a, d, arguments.length);
        };
    });
    n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
            if (c) {
                c = Fa(a, b);
                return Ba.test(c) ? n(a).position()[b] + "px" : c;
            }
        });
    });
    n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || typeof d !== "boolean"), g = c || (d === true || e === true ? "margin" : "border");
                return K(this, function (b, c, d) {
                    var e;
                    if (n.isWindow(b)) {
                        return b.document.documentElement["client" + a];
                    }
                    if (b.nodeType === 9) {
                        e = b.documentElement;
                        return Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]);
                    }
                    return d === undefined ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : undefined, f, null);
            };
        });
    });
    n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        size: function () {
            return this.length;
        }
    });
    n.fn.andSelf = n.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return n;
        });
    }
    var Nb = a.jQuery, Ob = a.$;
    n.noConflict = function (b) {
        if (a.$ === n) {
            a.$ = Ob;
        }
        if (b && a.jQuery === n) {
            a.jQuery = Nb;
        }
        return n;
    };
    if (!b) {
        a.jQuery = a.$ = n;
    }
    return n;
});

/* ----------------------------------------  END JS  ---------------------------------------- */
