"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5878],
  {
    42477: function (e, t, i) {
      let s, n;
      i.d(t, {
        ZP: function () {
          return rl;
        },
      });
      var r,
        o = "undefined" != typeof window ? window : void 0,
        a = "undefined" != typeof globalThis ? globalThis : o,
        l = Array.prototype,
        c = l.forEach,
        u = l.indexOf,
        d = null == a ? void 0 : a.navigator,
        h = null == a ? void 0 : a.document,
        _ = null == a ? void 0 : a.location,
        p = null == a ? void 0 : a.fetch,
        g =
          null != a &&
          a.XMLHttpRequest &&
          "withCredentials" in new a.XMLHttpRequest()
            ? a.XMLHttpRequest
            : void 0,
        v = null == a ? void 0 : a.AbortController,
        f = null == d ? void 0 : d.userAgent,
        m = null != o ? o : {},
        b = { DEBUG: !1, LIB_VERSION: "1.203.1" },
        y = "$copy_autocapture",
        w = [
          "$snapshot",
          "$pageview",
          "$pageleave",
          "$set",
          "survey dismissed",
          "survey sent",
          "survey shown",
          "$identify",
          "$groupidentify",
          "$create_alias",
          "$$client_ingestion_warning",
          "$web_experiment_applied",
          "$feature_enrollment_update",
          "$feature_flag_called",
        ];
      function S(e, t) {
        return -1 !== e.indexOf(t);
      }
      ((eZ = r || (r = {})).GZipJS = "gzip-js"), (eZ.Base64 = "base64");
      var E = function (e) {
          return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        k = function (e) {
          return e.replace(/^\$/, "");
        },
        x = Array.isArray,
        C = Object.prototype,
        I = C.hasOwnProperty,
        P = C.toString,
        R =
          x ||
          function (e) {
            return "[object Array]" === P.call(e);
          },
        F = (e) => "function" == typeof e,
        T = (e) => e === Object(e) && !R(e),
        $ = (e) => {
          if (T(e)) {
            for (var t in e) if (I.call(e, t)) return !1;
            return !0;
          }
          return !1;
        },
        O = (e) => void 0 === e,
        L = (e) => "[object String]" == P.call(e),
        A = (e) => L(e) && 0 === e.trim().length,
        M = (e) => null === e,
        D = (e) => O(e) || M(e),
        N = (e) => "[object Number]" == P.call(e),
        q = (e) => "[object Boolean]" === P.call(e),
        B = (e) => e instanceof FormData,
        H = (e) => S(w, e),
        U = (e) => {
          var t = {
            _log: function (t) {
              if (
                o &&
                (b.DEBUG || m.POSTHOG_DEBUG) &&
                !O(o.console) &&
                o.console
              ) {
                for (
                  var i =
                      ("__rrweb_original__" in o.console[t])
                        ? o.console[t].__rrweb_original__
                        : o.console[t],
                    s = arguments.length,
                    n = Array(s > 1 ? s - 1 : 0),
                    r = 1;
                  r < s;
                  r++
                )
                  n[r - 1] = arguments[r];
                i(e, ...n);
              }
            },
            info: function () {
              for (var e = arguments.length, i = Array(e), s = 0; s < e; s++)
                i[s] = arguments[s];
              t._log("log", ...i);
            },
            warn: function () {
              for (var e = arguments.length, i = Array(e), s = 0; s < e; s++)
                i[s] = arguments[s];
              t._log("warn", ...i);
            },
            error: function () {
              for (var e = arguments.length, i = Array(e), s = 0; s < e; s++)
                i[s] = arguments[s];
              t._log("error", ...i);
            },
            critical: function () {
              for (var t = arguments.length, i = Array(t), s = 0; s < t; s++)
                i[s] = arguments[s];
              console.error(e, ...i);
            },
            uninitializedWarning: (e) => {
              t.error("You must initialize PostHog before calling ".concat(e));
            },
            createLogger: (t) => U("".concat(e, " ").concat(t)),
          };
          return t;
        },
        z = U("[PostHog.js]"),
        j = z.createLogger,
        W = j("[ExternalScriptsLoader]"),
        G = (e, t, i) => {
          if (e.config.disable_external_dependency_loading)
            return (
              W.warn(
                "".concat(
                  t,
                  " was requested but loading of external scripts is disabled."
                )
              ),
              i("Loading of external scripts is disabled")
            );
          var s = () => {
            if (!h) return i("document not found");
            var e = h.createElement("script");
            (e.type = "text/javascript"),
              (e.crossOrigin = "anonymous"),
              (e.src = t),
              (e.onload = (e) => i(void 0, e)),
              (e.onerror = (e) => i(e));
            var s,
              n = h.querySelectorAll("body > script");
            n.length > 0
              ? null === (s = n[0].parentNode) ||
                void 0 === s ||
                s.insertBefore(e, n[0])
              : h.body.appendChild(e);
          };
          null != h && h.body
            ? s()
            : null == h || h.addEventListener("DOMContentLoaded", s);
        };
      function V(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(i), !0).forEach(function (t) {
                Y(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : V(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function Y(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function K(e, t) {
        if (null == e) return {};
        var i,
          s,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              s,
              n = {},
              r = Object.keys(e);
            for (s = 0; s < r.length; s++)
              (i = r[s]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (s = 0; s < r.length; s++)
            (i = r[s]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (n[i] = e[i]));
        }
        return n;
      }
      (m.__PosthogExtensions__ = m.__PosthogExtensions__ || {}),
        (m.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
          var s = "/static/".concat(t, ".js") + "?v=".concat(e.version);
          if (
            ("remote-config" === t &&
              (s = "/array/".concat(e.config.token, "/config.js")),
            "toolbar" === t)
          ) {
            var n = 3e5 * Math.floor(Date.now() / 3e5);
            s = "".concat(s, "&t=").concat(n);
          }
          var r = e.requestRouter.endpointFor("assets", s);
          G(e, r, i);
        }),
        (m.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
          var s = e.requestRouter.endpointFor("api", t);
          G(e, s, i);
        });
      var X = {};
      function Q(e, t, i) {
        if (R(e)) {
          if (c && e.forEach === c) e.forEach(t, i);
          else if ("length" in e && e.length === +e.length) {
            for (var s = 0, n = e.length; s < n; s++)
              if (s in e && t.call(i, e[s], s) === X) return;
          }
        }
      }
      function Z(e, t, i) {
        if (!D(e)) {
          if (R(e)) return Q(e, t, i);
          if (B(e)) {
            for (var s of e.entries()) if (t.call(i, s[1], s[0]) === X) return;
          } else
            for (var n in e)
              if (I.call(e, n) && t.call(i, e[n], n) === X) return;
        }
      }
      var ee = function (e) {
        for (
          var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1;
          s < t;
          s++
        )
          i[s - 1] = arguments[s];
        return (
          Q(i, function (t) {
            for (var i in t) void 0 !== t[i] && (e[i] = t[i]);
          }),
          e
        );
      };
      function et(e) {
        for (var t = Object.keys(e), i = t.length, s = Array(i); i--; )
          s[i] = [t[i], e[t[i]]];
        return s;
      }
      var ei = function (e) {
          try {
            return e();
          } catch (e) {
            return;
          }
        },
        es = function (e) {
          return function () {
            try {
              for (var t = arguments.length, i = Array(t), s = 0; s < t; s++)
                i[s] = arguments[s];
              return e.apply(this, i);
            } catch (e) {
              z.critical(
                "Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."
              ),
                z.critical(e);
            }
          };
        },
        en = function (e) {
          var t = {};
          return (
            Z(e, function (e, i) {
              L(e) && e.length > 0 && (t[i] = e);
            }),
            t
          );
        },
        er = (function () {
          function e(t) {
            return (
              t &&
                ((t.preventDefault = e.preventDefault),
                (t.stopPropagation = e.stopPropagation)),
              t
            );
          }
          return (
            (e.preventDefault = function () {
              this.returnValue = !1;
            }),
            (e.stopPropagation = function () {
              this.cancelBubble = !0;
            }),
            function (t, i, s, n, r) {
              if (t) {
                if (t.addEventListener && !n) t.addEventListener(i, s, !!r);
                else {
                  var a = "on" + i,
                    l = t[a];
                  t[a] = function (i) {
                    if ((i = i || e(null == o ? void 0 : o.event))) {
                      var n,
                        r = !0;
                      F(l) && (n = l(i));
                      var a = s.call(t, i);
                      return (!1 !== n && !1 !== a) || (r = !1), r;
                    }
                  };
                }
              } else z.error("No valid element provided to register_event");
            }
          );
        })();
      function eo(e, t) {
        for (var i = 0; i < e.length; i++) if (t(e[i])) return e[i];
      }
      var ea = "$people_distinct_id",
        el = "__alias",
        ec = "__timers",
        eu = "$autocapture_disabled_server_side",
        ed = "$heatmaps_enabled_server_side",
        eh = "$exception_capture_enabled_server_side",
        e_ = "$web_vitals_enabled_server_side",
        ep = "$dead_clicks_enabled_server_side",
        eg = "$web_vitals_allowed_metrics",
        ev = "$session_recording_enabled_server_side",
        ef = "$console_log_recording_enabled_server_side",
        em = "$session_recording_network_payload_capture",
        eb = "$session_recording_canvas_recording",
        ey = "$replay_sample_rate",
        ew = "$replay_minimum_duration",
        eS = "$replay_script_config",
        eE = "$sesid",
        ek = "$session_is_sampled",
        ex = "$session_recording_url_trigger_activated_session",
        eC = "$session_recording_event_trigger_activated_session",
        eI = "$enabled_feature_flags",
        eP = "$early_access_features",
        eR = "$stored_person_properties",
        eF = "$stored_group_properties",
        eT = "$surveys",
        e$ = "$surveys_activated",
        eO = "$flag_call_reported",
        eL = "$user_state",
        eA = "$client_session_props",
        eM = "$capture_rate_limit",
        eD = "$initial_campaign_params",
        eN = "$initial_referrer_info",
        eq = "$initial_person_info",
        eB = "$epp",
        eH = "__POSTHOG_TOOLBAR__",
        eU = "$posthog_cklsh",
        ez = [
          ea,
          el,
          "__cmpns",
          ec,
          ev,
          ed,
          eE,
          eI,
          eL,
          eP,
          eF,
          eR,
          eT,
          eO,
          eA,
          eM,
          eD,
          eN,
          eB,
        ],
        ej = j("[FeatureFlags]"),
        eW = "$active_feature_flags",
        eG = "$override_feature_flags",
        eV = "$feature_flag_payloads",
        eJ = (e) => {
          var t = {};
          for (var [i, s] of et(e || {})) s && (t[i] = s);
          return t;
        };
      class eY {
        constructor(e) {
          Y(this, "_override_warning", !1),
            Y(this, "_hasLoadedFlags", !1),
            Y(this, "_requestInFlight", !1),
            Y(this, "_reloadingDisabled", !1),
            Y(this, "_additionalReloadRequested", !1),
            Y(this, "_decideCalled", !1),
            Y(this, "_flagsLoadedFromRemote", !1),
            (this.instance = e),
            (this.featureFlagEventHandlers = []);
        }
        decide() {
          if (this.instance.config.__preview_remote_config)
            this._decideCalled = !0;
          else {
            var e =
              !this._reloadDebouncer &&
              (this.instance.config.advanced_disable_feature_flags ||
                this.instance.config
                  .advanced_disable_feature_flags_on_first_load);
            this._callDecideEndpoint({ disableFlags: e });
          }
        }
        get hasLoadedFlags() {
          return this._hasLoadedFlags;
        }
        getFlags() {
          return Object.keys(this.getFlagVariants());
        }
        getFlagVariants() {
          var e = this.instance.get_property(eI),
            t = this.instance.get_property(eG);
          if (!t) return e || {};
          for (var i = ee({}, e), s = Object.keys(t), n = 0; n < s.length; n++)
            i[s[n]] = t[s[n]];
          return (
            this._override_warning ||
              (ej.warn(" Overriding feature flags!", {
                enabledFlags: e,
                overriddenFlags: t,
                finalFlags: i,
              }),
              (this._override_warning = !0)),
            i
          );
        }
        getFlagPayloads() {
          return this.instance.get_property(eV) || {};
        }
        reloadFeatureFlags() {
          this._reloadingDisabled ||
            this.instance.config.advanced_disable_feature_flags ||
            this._reloadDebouncer ||
            (this._reloadDebouncer = setTimeout(() => {
              this._callDecideEndpoint();
            }, 5));
        }
        clearDebouncer() {
          clearTimeout(this._reloadDebouncer), (this._reloadDebouncer = void 0);
        }
        ensureFlagsLoaded() {
          this._hasLoadedFlags ||
            this._requestInFlight ||
            this._reloadDebouncer ||
            this.reloadFeatureFlags();
        }
        setAnonymousDistinctId(e) {
          this.$anon_distinct_id = e;
        }
        setReloadingPaused(e) {
          this._reloadingDisabled = e;
        }
        _callDecideEndpoint(e) {
          if (
            (this.clearDebouncer(),
            !this.instance.config.advanced_disable_decide)
          ) {
            if (this._requestInFlight) this._additionalReloadRequested = !0;
            else {
              var t = {
                token: this.instance.config.token,
                distinct_id: this.instance.get_distinct_id(),
                groups: this.instance.getGroups(),
                $anon_distinct_id: this.$anon_distinct_id,
                person_properties: this.instance.get_property(eR),
                group_properties: this.instance.get_property(eF),
              };
              ((null != e && e.disableFlags) ||
                this.instance.config.advanced_disable_feature_flags) &&
                (t.disable_flags = !0),
                (this._requestInFlight = !0),
                this.instance._send_request({
                  method: "POST",
                  url: this.instance.requestRouter.endpointFor(
                    "api",
                    "/decide/?v=3"
                  ),
                  data: t,
                  compression: this.instance.config.disable_compression
                    ? void 0
                    : r.Base64,
                  timeout: this.instance.config.feature_flag_request_timeout_ms,
                  callback: (e) => {
                    var i,
                      s,
                      n = !0;
                    200 === e.statusCode &&
                      ((this.$anon_distinct_id = void 0), (n = !1)),
                      (this._requestInFlight = !1),
                      this._decideCalled ||
                        ((this._decideCalled = !0),
                        this.instance._onRemoteConfig(
                          null !== (s = e.json) && void 0 !== s ? s : {}
                        )),
                      t.disable_flags ||
                        ((this._flagsLoadedFromRemote = !n),
                        this.receivedFeatureFlags(
                          null !== (i = e.json) && void 0 !== i ? i : {},
                          n
                        ),
                        this._additionalReloadRequested &&
                          ((this._additionalReloadRequested = !1),
                          this._callDecideEndpoint()));
                  },
                });
            }
          }
        }
        getFeatureFlag(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            this._hasLoadedFlags ||
            (this.getFlags() && this.getFlags().length > 0)
          ) {
            var i,
              s,
              n,
              r,
              o,
              a = this.getFlagVariants()[e],
              l = "".concat(a),
              c = this.instance.get_property(eO) || {};
            return (
              (!t.send_event && "send_event" in t) ||
                (e in c && c[e].includes(l)) ||
                (R(c[e]) ? c[e].push(l) : (c[e] = [l]),
                null === (i = this.instance.persistence) ||
                  void 0 === i ||
                  i.register({ [eO]: c }),
                this.instance.capture("$feature_flag_called", {
                  $feature_flag: e,
                  $feature_flag_response: a,
                  $feature_flag_payload: this.getFeatureFlagPayload(e) || null,
                  $feature_flag_bootstrapped_response:
                    (null === (s = this.instance.config.bootstrap) ||
                    void 0 === s ||
                    null === (n = s.featureFlags) ||
                    void 0 === n
                      ? void 0
                      : n[e]) || null,
                  $feature_flag_bootstrapped_payload:
                    (null === (r = this.instance.config.bootstrap) ||
                    void 0 === r ||
                    null === (o = r.featureFlagPayloads) ||
                    void 0 === o
                      ? void 0
                      : o[e]) || null,
                  $used_bootstrap_value: !this._flagsLoadedFromRemote,
                })),
              a
            );
          }
          ej.warn(
            'getFeatureFlag for key "' +
              e +
              "\" failed. Feature flags didn't load in time."
          );
        }
        getFeatureFlagPayload(e) {
          return this.getFlagPayloads()[e];
        }
        isFeatureEnabled(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            this._hasLoadedFlags ||
            (this.getFlags() && this.getFlags().length > 0)
          )
            return !!this.getFeatureFlag(e, t);
          ej.warn(
            'isFeatureEnabled for key "' +
              e +
              "\" failed. Feature flags didn't load in time."
          );
        }
        addFeatureFlagsHandler(e) {
          this.featureFlagEventHandlers.push(e);
        }
        removeFeatureFlagsHandler(e) {
          this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(
            (t) => t !== e
          );
        }
        receivedFeatureFlags(e, t) {
          if (this.instance.persistence) {
            this._hasLoadedFlags = !0;
            var i = this.getFlagVariants(),
              s = this.getFlagPayloads();
            !(function (e, t) {
              var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                n = e.featureFlags,
                r = e.featureFlagPayloads;
              if (n) {
                if (R(n)) {
                  var o = {};
                  if (n) for (var a = 0; a < n.length; a++) o[n[a]] = !0;
                  t && t.register({ [eW]: n, [eI]: o });
                } else {
                  var l = n,
                    c = r;
                  e.errorsWhileComputingFlags &&
                    ((l = J(J({}, i), l)), (c = J(J({}, s), c))),
                    t &&
                      t.register({
                        [eW]: Object.keys(eJ(l)),
                        [eI]: l || {},
                        [eV]: c || {},
                      });
                }
              }
            })(e, this.instance.persistence, i, s),
              this._fireFeatureFlagsCallbacks(t);
          }
        }
        override(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.instance.__loaded || !this.instance.persistence)
            return ej.uninitializedWarning("posthog.feature_flags.override");
          if (((this._override_warning = t), !1 === e))
            this.instance.persistence.unregister(eG);
          else if (R(e)) {
            for (var i = {}, s = 0; s < e.length; s++) i[e[s]] = !0;
            this.instance.persistence.register({ [eG]: i });
          } else this.instance.persistence.register({ [eG]: e });
        }
        onFeatureFlags(e) {
          if ((this.addFeatureFlagsHandler(e), this._hasLoadedFlags)) {
            var { flags: t, flagVariants: i } =
              this._prepareFeatureFlagsForCallbacks();
            e(t, i);
          }
          return () => this.removeFeatureFlagsHandler(e);
        }
        updateEarlyAccessFeatureEnrollment(e, t) {
          var i,
            s = (this.instance.get_property(eP) || []).find(
              (t) => t.flagKey === e
            ),
            n = { ["$feature_enrollment/".concat(e)]: t },
            r = { $feature_flag: e, $feature_enrollment: t, $set: n };
          s && (r.$early_access_feature_name = s.name),
            this.instance.capture("$feature_enrollment_update", r),
            this.setPersonPropertiesForFlags(n, !1);
          var o = J(J({}, this.getFlagVariants()), {}, { [e]: t });
          null === (i = this.instance.persistence) ||
            void 0 === i ||
            i.register({ [eW]: Object.keys(eJ(o)), [eI]: o }),
            this._fireFeatureFlagsCallbacks();
        }
        getEarlyAccessFeatures(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = this.instance.get_property(eP);
          if (i && !t) return e(i);
          this.instance._send_request({
            url: this.instance.requestRouter.endpointFor(
              "api",
              "/api/early_access_features/?token=".concat(
                this.instance.config.token
              )
            ),
            method: "GET",
            callback: (t) => {
              var i;
              if (t.json) {
                var s = t.json.earlyAccessFeatures;
                return (
                  null === (i = this.instance.persistence) ||
                    void 0 === i ||
                    i.register({ [eP]: s }),
                  e(s)
                );
              }
            },
          });
        }
        _prepareFeatureFlagsForCallbacks() {
          var e = this.getFlags(),
            t = this.getFlagVariants();
          return {
            flags: e.filter((e) => t[e]),
            flagVariants: Object.keys(t)
              .filter((e) => t[e])
              .reduce((e, i) => ((e[i] = t[i]), e), {}),
          };
        }
        _fireFeatureFlagsCallbacks(e) {
          var { flags: t, flagVariants: i } =
            this._prepareFeatureFlagsForCallbacks();
          this.featureFlagEventHandlers.forEach((s) =>
            s(t, i, { errorsLoading: e })
          );
        }
        setPersonPropertiesForFlags(e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = this.instance.get_property(eR) || {};
          this.instance.register({ [eR]: J(J({}, i), e) }),
            t && this.instance.reloadFeatureFlags();
        }
        resetPersonPropertiesForFlags() {
          this.instance.unregister(eR);
        }
        setGroupPropertiesForFlags(e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = this.instance.get_property(eF) || {};
          0 !== Object.keys(i).length &&
            Object.keys(i).forEach((t) => {
              (i[t] = J(J({}, i[t]), e[t])), delete e[t];
            }),
            this.instance.register({ [eF]: J(J({}, i), e) }),
            t && this.instance.reloadFeatureFlags();
        }
        resetGroupPropertiesForFlags(e) {
          if (e) {
            var t = this.instance.get_property(eF) || {};
            this.instance.register({ [eF]: J(J({}, t), {}, { [e]: {} }) });
          } else this.instance.unregister(eF);
        }
      }
      Math.trunc ||
        (Math.trunc = function (e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e);
        }),
        Number.isInteger ||
          (Number.isInteger = function (e) {
            return N(e) && isFinite(e) && Math.floor(e) === e;
          });
      var eK = "0123456789abcdef";
      class eX {
        constructor(e) {
          if (((this.bytes = e), 16 !== e.length))
            throw TypeError("not 128-bit length");
        }
        static fromFieldsV7(e, t, i, s) {
          if (
            !Number.isInteger(e) ||
            !Number.isInteger(t) ||
            !Number.isInteger(i) ||
            !Number.isInteger(s) ||
            e < 0 ||
            t < 0 ||
            i < 0 ||
            s < 0 ||
            e > 0xffffffffffff ||
            t > 4095 ||
            i > 1073741823 ||
            s > 4294967295
          )
            throw RangeError("invalid field value");
          var n = new Uint8Array(16);
          return (
            (n[0] = e / 1099511627776),
            (n[1] = e / 4294967296),
            (n[2] = e / 16777216),
            (n[3] = e / 65536),
            (n[4] = e / 256),
            (n[5] = e),
            (n[6] = 112 | (t >>> 8)),
            (n[7] = t),
            (n[8] = 128 | (i >>> 24)),
            (n[9] = i >>> 16),
            (n[10] = i >>> 8),
            (n[11] = i),
            (n[12] = s >>> 24),
            (n[13] = s >>> 16),
            (n[14] = s >>> 8),
            (n[15] = s),
            new eX(n)
          );
        }
        toString() {
          for (var e = "", t = 0; t < this.bytes.length; t++)
            (e =
              e +
              eK.charAt(this.bytes[t] >>> 4) +
              eK.charAt(15 & this.bytes[t])),
              (3 !== t && 5 !== t && 7 !== t && 9 !== t) || (e += "-");
          if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
          return e;
        }
        clone() {
          return new eX(this.bytes.slice(0));
        }
        equals(e) {
          return 0 === this.compareTo(e);
        }
        compareTo(e) {
          for (var t = 0; t < 16; t++) {
            var i = this.bytes[t] - e.bytes[t];
            if (0 !== i) return Math.sign(i);
          }
          return 0;
        }
      }
      class eQ {
        constructor() {
          Y(this, "timestamp", 0),
            Y(this, "counter", 0),
            Y(this, "random", new e2());
        }
        generate() {
          var e = this.generateOrAbort();
          if (O(e)) {
            this.timestamp = 0;
            var t = this.generateOrAbort();
            if (O(t))
              throw Error("Could not generate UUID after timestamp reset");
            return t;
          }
          return e;
        }
        generateOrAbort() {
          var e = Date.now();
          if (e > this.timestamp) (this.timestamp = e), this.resetCounter();
          else {
            if (!(e + 1e4 > this.timestamp)) return;
            this.counter++,
              this.counter > 4398046511103 &&
                (this.timestamp++, this.resetCounter());
          }
          return eX.fromFieldsV7(
            this.timestamp,
            Math.trunc(this.counter / 1073741824),
            1073741823 & this.counter,
            this.random.nextUint32()
          );
        }
        resetCounter() {
          this.counter =
            1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
        }
      }
      var eZ,
        e0,
        e1 = (e) => {
          if (
            "undefined" != typeof UUIDV7_DENY_WEAK_RNG &&
            UUIDV7_DENY_WEAK_RNG
          )
            throw Error("no cryptographically strong RNG available");
          for (var t = 0; t < e.length; t++)
            e[t] =
              65536 * Math.trunc(65536 * Math.random()) +
              Math.trunc(65536 * Math.random());
          return e;
        };
      o &&
        !O(o.crypto) &&
        crypto.getRandomValues &&
        (e1 = (e) => crypto.getRandomValues(e));
      class e2 {
        constructor() {
          Y(this, "buffer", new Uint32Array(8)), Y(this, "cursor", 1 / 0);
        }
        nextUint32() {
          return (
            this.cursor >= this.buffer.length &&
              (e1(this.buffer), (this.cursor = 0)),
            this.buffer[this.cursor++]
          );
        }
      }
      var e3 = () => e5().toString(),
        e5 = () => (e0 || (e0 = new eQ())).generate(),
        e6 = "",
        e8 = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
        e4 = {
          is_supported: () => !!h,
          error: function (e) {
            z.error("cookieStore error: " + e);
          },
          get: function (e) {
            if (h) {
              try {
                for (
                  var t = e + "=",
                    i = h.cookie.split(";").filter((e) => e.length),
                    s = 0;
                  s < i.length;
                  s++
                ) {
                  for (var n = i[s]; " " == n.charAt(0); )
                    n = n.substring(1, n.length);
                  if (0 === n.indexOf(t))
                    return decodeURIComponent(n.substring(t.length, n.length));
                }
              } catch (e) {}
              return null;
            }
          },
          parse: function (e) {
            var t;
            try {
              t = JSON.parse(e4.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set: function (e, t, i, s, n) {
            if (h)
              try {
                var r = "",
                  o = "",
                  a = (function (e, t) {
                    if (t) {
                      var i = (function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : h;
                        if (e6) return e6;
                        if (!t || ["localhost", "127.0.0.1"].includes(e))
                          return "";
                        for (
                          var i = e.split("."),
                            s = Math.min(i.length, 8),
                            n = "dmn_chk_" + e3(),
                            r = RegExp("(^|;)\\s*" + n + "=1");
                          !e6 && s--;

                        ) {
                          var o = i.slice(s).join("."),
                            a = n + "=1;domain=." + o;
                          (t.cookie = a),
                            r.test(t.cookie) &&
                              ((t.cookie =
                                a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"),
                              (e6 = o));
                        }
                        return e6;
                      })(e);
                      if (!i) {
                        var s,
                          n = (s = e.match(e8)) ? s[0] : "";
                        n !== i &&
                          z.info(
                            "Warning: cookie subdomain discovery mismatch",
                            n,
                            i
                          ),
                          (i = n);
                      }
                      return i ? "; domain=." + i : "";
                    }
                    return "";
                  })(h.location.hostname, s);
                if (i) {
                  var l = new Date();
                  l.setTime(l.getTime() + 24 * i * 36e5),
                    (r = "; expires=" + l.toUTCString());
                }
                n && (o = "; secure");
                var c =
                  e +
                  "=" +
                  encodeURIComponent(JSON.stringify(t)) +
                  r +
                  "; SameSite=Lax; path=/" +
                  a +
                  o;
                return (
                  c.length > 3686.4 &&
                    z.warn(
                      "cookieStore warning: large cookie, len=" + c.length
                    ),
                  (h.cookie = c),
                  c
                );
              } catch (e) {
                return;
              }
          },
          remove: function (e, t) {
            try {
              e4.set(e, "", -1, t);
            } catch (e) {
              return;
            }
          },
        },
        e7 = null,
        e9 = {
          is_supported: function () {
            if (!M(e7)) return e7;
            var e = !0;
            if (O(o)) e = !1;
            else
              try {
                var t = "__mplssupport__";
                e9.set(t, "xyz"),
                  '"xyz"' !== e9.get(t) && (e = !1),
                  e9.remove(t);
              } catch (t) {
                e = !1;
              }
            return (
              e ||
                z.error(
                  "localStorage unsupported; falling back to cookie store"
                ),
              (e7 = e),
              e
            );
          },
          error: function (e) {
            z.error("localStorage error: " + e);
          },
          get: function (e) {
            try {
              return null == o ? void 0 : o.localStorage.getItem(e);
            } catch (e) {
              e9.error(e);
            }
            return null;
          },
          parse: function (e) {
            try {
              return JSON.parse(e9.get(e)) || {};
            } catch (e) {}
            return null;
          },
          set: function (e, t) {
            try {
              null == o || o.localStorage.setItem(e, JSON.stringify(t));
            } catch (e) {
              e9.error(e);
            }
          },
          remove: function (e) {
            try {
              null == o || o.localStorage.removeItem(e);
            } catch (e) {
              e9.error(e);
            }
          },
        },
        te = ["distinct_id", eE, ek, eB, eq],
        tt = J(
          J({}, e9),
          {},
          {
            parse: function (e) {
              try {
                var t = {};
                try {
                  t = e4.parse(e) || {};
                } catch (e) {}
                var i = ee(t, JSON.parse(e9.get(e) || "{}"));
                return e9.set(e, i), i;
              } catch (e) {}
              return null;
            },
            set: function (e, t, i, s, n, r) {
              try {
                e9.set(e, t, void 0, void 0, r);
                var o = {};
                te.forEach((e) => {
                  t[e] && (o[e] = t[e]);
                }),
                  Object.keys(o).length && e4.set(e, o, i, s, n, r);
              } catch (e) {
                e9.error(e);
              }
            },
            remove: function (e, t) {
              try {
                null == o || o.localStorage.removeItem(e), e4.remove(e, t);
              } catch (e) {
                e9.error(e);
              }
            },
          }
        ),
        ti = {},
        ts = {
          is_supported: function () {
            return !0;
          },
          error: function (e) {
            z.error("memoryStorage error: " + e);
          },
          get: function (e) {
            return ti[e] || null;
          },
          parse: function (e) {
            return ti[e] || null;
          },
          set: function (e, t) {
            ti[e] = t;
          },
          remove: function (e) {
            delete ti[e];
          },
        },
        tn = null,
        tr = {
          is_supported: function () {
            if (!M(tn)) return tn;
            if (((tn = !0), O(o))) tn = !1;
            else
              try {
                var e = "__support__";
                tr.set(e, "xyz"),
                  '"xyz"' !== tr.get(e) && (tn = !1),
                  tr.remove(e);
              } catch (e) {
                tn = !1;
              }
            return tn;
          },
          error: function (e) {
            z.error("sessionStorage error: ", e);
          },
          get: function (e) {
            try {
              return null == o ? void 0 : o.sessionStorage.getItem(e);
            } catch (e) {
              tr.error(e);
            }
            return null;
          },
          parse: function (e) {
            try {
              return JSON.parse(tr.get(e)) || null;
            } catch (e) {}
            return null;
          },
          set: function (e, t) {
            try {
              null == o || o.sessionStorage.setItem(e, JSON.stringify(t));
            } catch (e) {
              tr.error(e);
            }
          },
          remove: function (e) {
            try {
              null == o || o.sessionStorage.removeItem(e);
            } catch (e) {
              tr.error(e);
            }
          },
        },
        to = ["localhost", "127.0.0.1"],
        ta = (e) => {
          var t = null == h ? void 0 : h.createElement("a");
          return O(t) ? null : ((t.href = e), t);
        },
        tl = function (e, t) {
          return (
            !!(function (e) {
              try {
                new RegExp(e);
              } catch (e) {
                return !1;
              }
              return !0;
            })(t) && new RegExp(t).test(e)
          );
        },
        tc = function (e) {
          var t,
            i,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "&",
            n = [];
          return (
            Z(e, function (e, s) {
              O(e) ||
                O(s) ||
                "undefined" === s ||
                ((t = encodeURIComponent(
                  e instanceof File ? e.name : e.toString()
                )),
                (i = encodeURIComponent(s)),
                (n[n.length] = i + "=" + t));
            }),
            n.join(s)
          );
        },
        tu = function (e, t) {
          for (
            var i,
              s = ((e.split("#")[0] || "").split("?")[1] || "").split("&"),
              n = 0;
            n < s.length;
            n++
          ) {
            var r = s[n].split("=");
            if (r[0] === t) {
              i = r;
              break;
            }
          }
          if (!R(i) || i.length < 2) return "";
          var o = i[1];
          try {
            o = decodeURIComponent(o);
          } catch (e) {
            z.error("Skipping decoding for malformed query param: " + o);
          }
          return o.replace(/\+/g, " ");
        },
        td = function (e, t) {
          var i = e.match(RegExp(t + "=([^&]*)"));
          return i ? i[1] : null;
        },
        th = "Mobile",
        t_ = "Android",
        tp = "Tablet",
        tg = t_ + " " + tp,
        tv = "iPad",
        tf = "Apple",
        tm = tf + " Watch",
        tb = "Safari",
        ty = "BlackBerry",
        tw = "Samsung",
        tS = tw + "Browser",
        tE = tw + " Internet",
        tk = "Chrome",
        tx = tk + " OS",
        tC = tk + " iOS",
        tI = "Internet Explorer",
        tP = tI + " " + th,
        tR = "Opera",
        tF = tR + " Mini",
        tT = "Edge",
        t$ = "Microsoft " + tT,
        tO = "Firefox",
        tL = tO + " iOS",
        tA = "Nintendo",
        tM = "PlayStation",
        tD = "Xbox",
        tN = t_ + " " + th,
        tq = th + " " + tb,
        tB = "Windows",
        tH = tB + " Phone",
        tU = "Nokia",
        tz = "Ouya",
        tj = "Generic",
        tW = tj + " " + th.toLowerCase(),
        tG = tj + " " + tp.toLowerCase(),
        tV = "Konqueror",
        tJ = "(\\d+(\\.\\d+)?)",
        tY = RegExp("Version/" + tJ),
        tK = RegExp(tD, "i"),
        tX = RegExp(tM + " \\w+", "i"),
        tQ = RegExp(tA + " \\w+", "i"),
        tZ = RegExp(ty + "|PlayBook|BB10", "i"),
        t0 = {
          "NT3.51": "NT 3.11",
          "NT4.0": "NT 4.0",
          "5.0": "2000",
          5.1: "XP",
          5.2: "XP",
          "6.0": "Vista",
          6.1: "7",
          6.2: "8",
          6.3: "8.1",
          6.4: "10",
          "10.0": "10",
        },
        t1 = (e, t) => (t && S(t, tf)) || (S(e, tb) && !S(e, tk) && !S(e, t_)),
        t2 = function (e, t) {
          return (
            (t = t || ""),
            S(e, " OPR/") && S(e, "Mini")
              ? tF
              : S(e, " OPR/")
              ? tR
              : tZ.test(e)
              ? ty
              : S(e, "IE" + th) || S(e, "WPDesktop")
              ? tP
              : S(e, tS)
              ? tE
              : S(e, tT) || S(e, "Edg/")
              ? t$
              : S(e, "FBIOS")
              ? "Facebook " + th
              : S(e, "UCWEB") || S(e, "UCBrowser")
              ? "UC Browser"
              : S(e, "CriOS")
              ? tC
              : S(e, "CrMo") || S(e, tk)
              ? tk
              : S(e, t_) && S(e, tb)
              ? tN
              : S(e, "FxiOS")
              ? tL
              : S(e.toLowerCase(), tV.toLowerCase())
              ? tV
              : t1(e, t)
              ? S(e, th)
                ? tq
                : tb
              : S(e, tO)
              ? tO
              : S(e, "MSIE") || S(e, "Trident/")
              ? tI
              : S(e, "Gecko")
              ? tO
              : ""
          );
        },
        t3 = {
          [tP]: [RegExp("rv:" + tJ)],
          [t$]: [RegExp(tT + "?\\/" + tJ)],
          [tk]: [RegExp("(" + tk + "|CrMo)\\/" + tJ)],
          [tC]: [RegExp("CriOS\\/" + tJ)],
          "UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + tJ)],
          [tb]: [tY],
          [tq]: [tY],
          [tR]: [RegExp("(Opera|OPR)\\/" + tJ)],
          [tO]: [RegExp(tO + "\\/" + tJ)],
          [tL]: [RegExp("FxiOS\\/" + tJ)],
          [tV]: [RegExp("Konqueror[:/]?" + tJ, "i")],
          [ty]: [RegExp(ty + " " + tJ), tY],
          [tN]: [RegExp("android\\s" + tJ, "i")],
          [tE]: [RegExp(tS + "\\/" + tJ)],
          [tI]: [RegExp("(rv:|MSIE )" + tJ)],
          Mozilla: [RegExp("rv:" + tJ)],
        },
        t5 = [
          [
            RegExp(tD + "; " + tD + " (.*?)[);]", "i"),
            (e) => [tD, (e && e[1]) || ""],
          ],
          [RegExp(tA, "i"), [tA, ""]],
          [RegExp(tM, "i"), [tM, ""]],
          [tZ, [ty, ""]],
          [
            RegExp(tB, "i"),
            (e, t) => {
              if (/Phone/.test(t) || /WPDesktop/.test(t)) return [tH, ""];
              if (new RegExp(th).test(t) && !/IEMobile\b/.test(t))
                return [tB + " " + th, ""];
              var i = /Windows NT ([0-9.]+)/i.exec(t);
              if (i && i[1]) {
                var s = t0[i[1]] || "";
                return /arm/i.test(t) && (s = "RT"), [tB, s];
              }
              return [tB, ""];
            },
          ],
          [
            /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
            (e) =>
              e && e[3]
                ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")]
                : ["iOS", ""],
          ],
          [
            /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
            (e) => {
              var t = "";
              return (
                e && e.length >= 3 && (t = O(e[2]) ? e[3] : e[2]),
                ["watchOS", t]
              );
            },
          ],
          [
            RegExp("(" + t_ + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + t_ + ")", "i"),
            (e) =>
              e && e[2] ? [t_, [e[2], e[3], e[4] || "0"].join(".")] : [t_, ""],
          ],
          [
            /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
            (e) => {
              var t = ["Mac OS X", ""];
              if (e && e[1]) {
                var i = [e[1], e[2], e[3] || "0"];
                t[1] = i.join(".");
              }
              return t;
            },
          ],
          [/Mac/i, ["Mac OS X", ""]],
          [/CrOS/, [tx, ""]],
          [/Linux|debian/i, ["Linux", ""]],
        ],
        t6 = function (e) {
          return tQ.test(e)
            ? tA
            : tX.test(e)
            ? tM
            : tK.test(e)
            ? tD
            : RegExp(tz, "i").test(e)
            ? tz
            : RegExp("(" + tH + "|WPDesktop)", "i").test(e)
            ? tH
            : /iPad/.test(e)
            ? tv
            : /iPod/.test(e)
            ? "iPod Touch"
            : /iPhone/.test(e)
            ? "iPhone"
            : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)
            ? tm
            : tZ.test(e)
            ? ty
            : /(kobo)\s(ereader|touch)/i.test(e)
            ? "Kobo"
            : RegExp(tU, "i").test(e)
            ? tU
            : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) ||
              /(kf[a-z]+)( bui|\)).+silk\//i.test(e)
            ? "Kindle Fire"
            : /(Android|ZTE)/i.test(e)
            ? !new RegExp(th).test(e) ||
              /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(
                e
              )
              ? (/pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e)) ||
                /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) ||
                (/lmy47v/i.test(e) && !/QTAQZ3/i.test(e))
                ? t_
                : tg
              : t_
            : RegExp("(pda|" + th + ")", "i").test(e)
            ? tW
            : RegExp(tp, "i").test(e) && !RegExp(tp + " pc", "i").test(e)
            ? tG
            : "";
        },
        t8 = "https?://(.*)",
        t4 = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_content",
          "utm_term",
          "gclid",
          "gad_source",
          "gclsrc",
          "dclid",
          "gbraid",
          "wbraid",
          "fbclid",
          "msclkid",
          "twclid",
          "li_fat_id",
          "mc_cid",
          "igshid",
          "ttclid",
          "rdt_cid",
        ],
        t7 = {
          campaignParams: function (e) {
            return h ? this._campaignParamsFromUrl(h.URL, e) : {};
          },
          _campaignParamsFromUrl: function (e, t) {
            var i = t4.concat(t || []),
              s = {};
            return (
              Z(i, function (t) {
                var i = tu(e, t);
                s[t] = i || null;
              }),
              s
            );
          },
          _searchEngine: function (e) {
            return e
              ? 0 === e.search(t8 + "google.([^/?]*)")
                ? "google"
                : 0 === e.search(t8 + "bing.com")
                ? "bing"
                : 0 === e.search(t8 + "yahoo.com")
                ? "yahoo"
                : 0 === e.search(t8 + "duckduckgo.com")
                ? "duckduckgo"
                : null
              : null;
          },
          _searchInfoFromReferrer: function (e) {
            var t = t7._searchEngine(e),
              i = {};
            if (!M(t)) {
              i.$search_engine = t;
              var s = h ? tu(h.referrer, "yahoo" != t ? "q" : "p") : "";
              s.length && (i.ph_keyword = s);
            }
            return i;
          },
          searchInfo: function () {
            var e = null == h ? void 0 : h.referrer;
            return e ? this._searchInfoFromReferrer(e) : {};
          },
          browser: t2,
          browserVersion: function (e, t) {
            var i = t3[t2(e, t)];
            if (O(i)) return null;
            for (var s = 0; s < i.length; s++) {
              var n = i[s],
                r = e.match(n);
              if (r) return parseFloat(r[r.length - 2]);
            }
            return null;
          },
          browserLanguage: function () {
            return navigator.language || navigator.userLanguage;
          },
          browserLanguagePrefix: function () {
            var e = this.browserLanguage();
            return "string" == typeof e ? e.split("-")[0] : void 0;
          },
          os: function (e) {
            for (var t = 0; t < t5.length; t++) {
              var [i, s] = t5[t],
                n = i.exec(e),
                r = n && (F(s) ? s(n, e) : s);
              if (r) return r;
            }
            return ["", ""];
          },
          device: t6,
          deviceType: function (e) {
            var t = t6(e);
            return t === tv ||
              t === tg ||
              "Kobo" === t ||
              "Kindle Fire" === t ||
              t === tG
              ? tp
              : t === tA || t === tD || t === tM || t === tz
              ? "Console"
              : t === tm
              ? "Wearable"
              : t
              ? th
              : "Desktop";
          },
          referrer: function () {
            return (null == h ? void 0 : h.referrer) || "$direct";
          },
          referringDomain: function () {
            var e;
            return (
              (null != h &&
                h.referrer &&
                (null === (e = ta(h.referrer)) || void 0 === e
                  ? void 0
                  : e.host)) ||
              "$direct"
            );
          },
          referrerInfo: function () {
            return {
              $referrer: this.referrer(),
              $referring_domain: this.referringDomain(),
            };
          },
          initialPersonInfo: function () {
            return {
              r: this.referrer().substring(0, 1e3),
              u: null == _ ? void 0 : _.href.substring(0, 1e3),
            };
          },
          initialPersonPropsFromInfo: function (e) {
            var t,
              { r: i, u: s } = e,
              n = {
                $initial_referrer: i,
                $initial_referring_domain:
                  null == i
                    ? void 0
                    : "$direct" == i
                    ? "$direct"
                    : null === (t = ta(i)) || void 0 === t
                    ? void 0
                    : t.host,
              };
            if (s) {
              n.$initial_current_url = s;
              var r = ta(s);
              (n.$initial_host = null == r ? void 0 : r.host),
                (n.$initial_pathname = null == r ? void 0 : r.pathname),
                Z(this._campaignParamsFromUrl(s), function (e, t) {
                  n["$initial_" + k(t)] = e;
                });
            }
            return (
              i &&
                Z(this._searchInfoFromReferrer(i), function (e, t) {
                  n["$initial_" + k(t)] = e;
                }),
              n
            );
          },
          timezone: function () {
            try {
              return Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch (e) {
              return;
            }
          },
          timezoneOffset: function () {
            try {
              return new Date().getTimezoneOffset();
            } catch (e) {
              return;
            }
          },
          properties: function () {
            if (!f) return {};
            var [e, t] = t7.os(f);
            return ee(
              en({
                $os: e,
                $os_version: t,
                $browser: t7.browser(f, navigator.vendor),
                $device: t7.device(f),
                $device_type: t7.deviceType(f),
                $timezone: t7.timezone(),
                $timezone_offset: t7.timezoneOffset(),
              }),
              {
                $current_url: null == _ ? void 0 : _.href,
                $host: null == _ ? void 0 : _.host,
                $pathname: null == _ ? void 0 : _.pathname,
                $raw_user_agent:
                  f.length > 1e3 ? f.substring(0, 997) + "..." : f,
                $browser_version: t7.browserVersion(f, navigator.vendor),
                $browser_language: t7.browserLanguage(),
                $browser_language_prefix: t7.browserLanguagePrefix(),
                $screen_height: null == o ? void 0 : o.screen.height,
                $screen_width: null == o ? void 0 : o.screen.width,
                $viewport_height: null == o ? void 0 : o.innerHeight,
                $viewport_width: null == o ? void 0 : o.innerWidth,
                $lib: "web",
                $lib_version: b.LIB_VERSION,
                $insert_id:
                  Math.random().toString(36).substring(2, 10) +
                  Math.random().toString(36).substring(2, 10),
                $time: Date.now() / 1e3,
              }
            );
          },
          people_properties: function () {
            if (!f) return {};
            var [e, t] = t7.os(f);
            return ee(
              en({
                $os: e,
                $os_version: t,
                $browser: t7.browser(f, navigator.vendor),
              }),
              { $browser_version: t7.browserVersion(f, navigator.vendor) }
            );
          },
        },
        t9 = [
          "cookie",
          "localstorage",
          "localstorage+cookie",
          "sessionstorage",
          "memory",
        ];
      class ie {
        constructor(e) {
          var t;
          (this.config = e),
            (this.props = {}),
            (this.campaign_params_saved = !1),
            (this.name =
              ((t = ""),
              e.token &&
                (t = e.token
                  .replace(/\+/g, "PL")
                  .replace(/\//g, "SL")
                  .replace(/=/g, "EQ")),
              e.persistence_name
                ? "ph_" + e.persistence_name
                : "ph_" + t + "_posthog")),
            (this.storage = this.buildStorage(e)),
            this.load(),
            e.debug &&
              z.info("Persistence loaded", e.persistence, J({}, this.props)),
            this.update_config(e, e),
            this.save();
        }
        buildStorage(e) {
          -1 === t9.indexOf(e.persistence.toLowerCase()) &&
            (z.critical(
              "Unknown persistence type " +
                e.persistence +
                "; falling back to localStorage+cookie"
            ),
            (e.persistence = "localStorage+cookie"));
          var t = e.persistence.toLowerCase();
          return "localstorage" === t && e9.is_supported()
            ? e9
            : "localstorage+cookie" === t && tt.is_supported()
            ? tt
            : "sessionstorage" === t && tr.is_supported()
            ? tr
            : "memory" === t
            ? ts
            : "cookie" === t
            ? e4
            : tt.is_supported()
            ? tt
            : e4;
        }
        properties() {
          var e = {};
          return (
            Z(this.props, function (t, i) {
              if (i === eI && T(t))
                for (var s, n = Object.keys(t), r = 0; r < n.length; r++)
                  e["$feature/".concat(n[r])] = t[n[r]];
              else
                (s = !1),
                  (M(ez)
                    ? s
                    : u && ez.indexOf === u
                    ? -1 != ez.indexOf(i)
                    : (Z(ez, function (e) {
                        if (s || (s = e === i)) return X;
                      }),
                      s)) || (e[i] = t);
            }),
            e
          );
        }
        load() {
          if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = ee({}, e));
          }
        }
        save() {
          this.disabled ||
            this.storage.set(
              this.name,
              this.props,
              this.expire_days,
              this.cross_subdomain,
              this.secure,
              this.config.debug
            );
        }
        remove() {
          this.storage.remove(this.name, !1),
            this.storage.remove(this.name, !0);
        }
        clear() {
          this.remove(), (this.props = {});
        }
        register_once(e, t, i) {
          if (T(e)) {
            O(t) && (t = "None"),
              (this.expire_days = O(i) ? this.default_expiry : i);
            var s = !1;
            if (
              (Z(e, (e, i) => {
                (this.props.hasOwnProperty(i) && this.props[i] !== t) ||
                  ((this.props[i] = e), (s = !0));
              }),
              s)
            )
              return this.save(), !0;
          }
          return !1;
        }
        register(e, t) {
          if (T(e)) {
            this.expire_days = O(t) ? this.default_expiry : t;
            var i = !1;
            if (
              (Z(e, (t, s) => {
                e.hasOwnProperty(s) &&
                  this.props[s] !== t &&
                  ((this.props[s] = t), (i = !0));
              }),
              i)
            )
              return this.save(), !0;
          }
          return !1;
        }
        unregister(e) {
          e in this.props && (delete this.props[e], this.save());
        }
        update_campaign_params() {
          if (!this.campaign_params_saved) {
            var e = t7.campaignParams(this.config.custom_campaign_params);
            $(en(e)) || this.register(e), (this.campaign_params_saved = !0);
          }
        }
        update_search_keyword() {
          this.register(t7.searchInfo());
        }
        update_referrer_info() {
          this.register_once(t7.referrerInfo(), void 0);
        }
        set_initial_person_info() {
          this.props[eD] ||
            this.props[eN] ||
            this.register_once({ [eq]: t7.initialPersonInfo() }, void 0);
        }
        get_referrer_info() {
          return en({
            $referrer: this.props.$referrer,
            $referring_domain: this.props.$referring_domain,
          });
        }
        get_initial_props() {
          var e = {};
          Z([eN, eD], (t) => {
            var i = this.props[t];
            i &&
              Z(i, function (t, i) {
                e["$initial_" + k(i)] = t;
              });
          });
          var t = this.props[eq];
          return t && ee(e, t7.initialPersonPropsFromInfo(t)), e;
        }
        safe_merge(e) {
          return (
            Z(this.props, function (t, i) {
              i in e || (e[i] = t);
            }),
            e
          );
        }
        update_config(e, t) {
          if (
            ((this.default_expiry = this.expire_days = e.cookie_expiration),
            this.set_disabled(e.disable_persistence),
            this.set_cross_subdomain(e.cross_subdomain_cookie),
            this.set_secure(e.secure_cookie),
            e.persistence !== t.persistence)
          ) {
            var i = this.buildStorage(e),
              s = this.props;
            this.clear(), (this.storage = i), (this.props = s), this.save();
          }
        }
        set_disabled(e) {
          (this.disabled = e), this.disabled ? this.remove() : this.save();
        }
        set_cross_subdomain(e) {
          e !== this.cross_subdomain &&
            ((this.cross_subdomain = e), this.remove(), this.save());
        }
        get_cross_subdomain() {
          return !!this.cross_subdomain;
        }
        set_secure(e) {
          e !== this.secure && ((this.secure = e), this.remove(), this.save());
        }
        set_event_timer(e, t) {
          var i = this.props[ec] || {};
          (i[e] = t), (this.props[ec] = i), this.save();
        }
        remove_event_timer(e) {
          var t = (this.props[ec] || {})[e];
          return O(t) || (delete this.props[ec][e], this.save()), t;
        }
        get_property(e) {
          return this.props[e];
        }
        set_property(e, t) {
          (this.props[e] = t), this.save();
        }
      }
      function it(e) {
        var t, i;
        return (
          (null ===
            (t = JSON.stringify(
              e,
              ((i = []),
              function (e, t) {
                if (T(t)) {
                  for (; i.length > 0 && i[i.length - 1] !== this; ) i.pop();
                  return i.includes(t) ? "[Circular]" : (i.push(t), t);
                }
                return t;
              })
            )) || void 0 === t
            ? void 0
            : t.length) || 0
        );
      }
      var ii =
          (((s = ii || {})[(s.DomContentLoaded = 0)] = "DomContentLoaded"),
          (s[(s.Load = 1)] = "Load"),
          (s[(s.FullSnapshot = 2)] = "FullSnapshot"),
          (s[(s.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
          (s[(s.Meta = 4)] = "Meta"),
          (s[(s.Custom = 5)] = "Custom"),
          (s[(s.Plugin = 6)] = "Plugin"),
          s),
        is =
          (((n = is || {})[(n.Mutation = 0)] = "Mutation"),
          (n[(n.MouseMove = 1)] = "MouseMove"),
          (n[(n.MouseInteraction = 2)] = "MouseInteraction"),
          (n[(n.Scroll = 3)] = "Scroll"),
          (n[(n.ViewportResize = 4)] = "ViewportResize"),
          (n[(n.Input = 5)] = "Input"),
          (n[(n.TouchMove = 6)] = "TouchMove"),
          (n[(n.MediaInteraction = 7)] = "MediaInteraction"),
          (n[(n.StyleSheetRule = 8)] = "StyleSheetRule"),
          (n[(n.CanvasMutation = 9)] = "CanvasMutation"),
          (n[(n.Font = 10)] = "Font"),
          (n[(n.Log = 11)] = "Log"),
          (n[(n.Drag = 12)] = "Drag"),
          (n[(n.StyleDeclaration = 13)] = "StyleDeclaration"),
          (n[(n.Selection = 14)] = "Selection"),
          (n[(n.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
          (n[(n.CustomElement = 16)] = "CustomElement"),
          n);
      function ir(e) {
        var t;
        return (
          e instanceof Element &&
          (e.id === eH ||
            !(
              null === (t = e.closest) ||
              void 0 === t ||
              !t.call(e, ".toolbar-global-fade-container")
            ))
        );
      }
      function io(e) {
        return !!e && 1 === e.nodeType;
      }
      function ia(e, t) {
        return (
          !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
        );
      }
      function il(e) {
        return !!e && 3 === e.nodeType;
      }
      function ic(e) {
        return !!e && 11 === e.nodeType;
      }
      function iu(e) {
        return e ? E(e).split(/\s+/) : [];
      }
      function id(e) {
        var t = null == o ? void 0 : o.location.href;
        return !!(t && e && e.some((e) => t.match(e)));
      }
      function ih(e) {
        var t = "";
        switch (typeof e.className) {
          case "string":
            t = e.className;
            break;
          case "object":
            t =
              (e.className && "baseVal" in e.className
                ? e.className.baseVal
                : null) ||
              e.getAttribute("class") ||
              "";
            break;
          default:
            t = "";
        }
        return iu(t);
      }
      function i_(e) {
        return D(e)
          ? null
          : E(e)
              .split(/(\s+)/)
              .filter((e) => iI(e))
              .join("")
              .replace(/[\r\n]/g, " ")
              .replace(/[ ]+/g, " ")
              .substring(0, 255);
      }
      function ip(e) {
        var t = "";
        return (
          ib(e) &&
            !iy(e) &&
            e.childNodes &&
            e.childNodes.length &&
            Z(e.childNodes, function (e) {
              var i;
              il(e) &&
                e.textContent &&
                (t +=
                  null !== (i = i_(e.textContent)) && void 0 !== i ? i : "");
            }),
          E(t)
        );
      }
      function ig(e) {
        var t;
        return O(e.target)
          ? e.srcElement || null
          : null !== (t = e.target) && void 0 !== t && t.shadowRoot
          ? e.composedPath()[0] || null
          : e.target || null;
      }
      var iv = ["a", "button", "form", "input", "select", "textarea", "label"];
      function im(e) {
        var t = e.parentNode;
        return !(!t || !io(t)) && t;
      }
      function ib(e) {
        for (var t = e; t.parentNode && !ia(t, "body"); t = t.parentNode) {
          var i = ih(t);
          if (S(i, "ph-sensitive") || S(i, "ph-no-capture")) return !1;
        }
        if (S(ih(e), "ph-include")) return !0;
        var s = e.type || "";
        if (L(s))
          switch (s.toLowerCase()) {
            case "hidden":
            case "password":
              return !1;
          }
        var n = e.name || e.id || "";
        return !(
          L(n) &&
          /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
            n.replace(/[^a-zA-Z0-9]/g, "")
          )
        );
      }
      function iy(e) {
        return !!(
          (ia(e, "input") &&
            !["button", "checkbox", "submit", "reset"].includes(e.type)) ||
          ia(e, "select") ||
          ia(e, "textarea") ||
          "true" === e.getAttribute("contenteditable")
        );
      }
      var iw =
          "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
        iS = new RegExp("^(?:".concat(iw, ")$")),
        iE = new RegExp(iw),
        ik = "\\d{3}-?\\d{2}-?\\d{4}",
        ix = new RegExp("^(".concat(ik, ")$")),
        iC = new RegExp("(".concat(ik, ")"));
      function iI(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return !(
          D(e) ||
          (L(e) &&
            ((e = E(e)),
            (t ? iS : iE).test((e || "").replace(/[- ]/g, "")) ||
              (t ? ix : iC).test(e)))
        );
      }
      function iP(e) {
        var t = ip(e);
        return iI(
          (t = ""
            .concat(t, " ")
            .concat(
              (function e(t) {
                var i = "";
                return (
                  t &&
                    t.childNodes &&
                    t.childNodes.length &&
                    Z(t.childNodes, function (t) {
                      var s;
                      if (
                        t &&
                        "span" ===
                          (null === (s = t.tagName) || void 0 === s
                            ? void 0
                            : s.toLowerCase())
                      )
                        try {
                          var n = ip(t);
                          (i = "".concat(i, " ").concat(n).trim()),
                            t.childNodes &&
                              t.childNodes.length &&
                              (i = "".concat(i, " ").concat(e(t)).trim());
                        } catch (e) {
                          z.error("[AutoCapture]", e);
                        }
                    }),
                  i
                );
              })(e)
            )
            .trim())
        )
          ? t
          : "";
      }
      function iR(e) {
        return e.replace(/"|\\"/g, '\\"');
      }
      var iF = "[SessionRecording]",
        iT = "redacted",
        i$ = {
          initiatorTypes: [
            "audio",
            "beacon",
            "body",
            "css",
            "early-hint",
            "embed",
            "fetch",
            "frame",
            "iframe",
            "icon",
            "image",
            "img",
            "input",
            "link",
            "navigation",
            "object",
            "ping",
            "script",
            "track",
            "video",
            "xmlhttprequest",
          ],
          maskRequestFn: (e) => e,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: [
            "first-input",
            "navigation",
            "paint",
            "resource",
          ],
          payloadSizeLimitBytes: 1e6,
          payloadHostDenyList: [
            ".lr-ingest.io",
            ".ingest.sentry.io",
            ".clarity.ms",
            "analytics.google.com",
          ],
        },
        iO = [
          "authorization",
          "x-forwarded-for",
          "authorization",
          "cookie",
          "set-cookie",
          "x-api-key",
          "x-real-ip",
          "remote-addr",
          "forwarded",
          "proxy-authorization",
          "x-csrf-token",
          "x-csrftoken",
          "x-xsrf-token",
        ],
        iL = [
          "password",
          "secret",
          "passwd",
          "api_key",
          "apikey",
          "auth",
          "credentials",
          "mysql_pwd",
          "privatekey",
          "private_key",
          "token",
        ],
        iA = ["/s/", "/e/", "/i/"];
      function iM(e, t, i, s) {
        if (D(e)) return e;
        var n =
          (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
        return (
          L(n) && (n = parseInt(n)),
          n > i
            ? iF +
              " ".concat(s, " body too large to record (").concat(n, " bytes)")
            : e
        );
      }
      function iD(e, t) {
        if (D(e)) return e;
        var i = e;
        return (
          iI(i, !1) || (i = iF + " " + t + " body " + iT),
          Z(iL, (e) => {
            var s, n;
            null !== (s = i) &&
              void 0 !== s &&
              s.length &&
              -1 !==
                (null === (n = i) || void 0 === n ? void 0 : n.indexOf(e)) &&
              (i = iF + " " + t + " body " + iT + " as might contain: " + e);
          }),
          i
        );
      }
      var iN = (e, t) => {
        var i,
          s,
          n = {
            payloadSizeLimitBytes: i$.payloadSizeLimitBytes,
            performanceEntryTypeToObserve: [
              ...i$.performanceEntryTypeToObserve,
            ],
            payloadHostDenyList: [
              ...(t.payloadHostDenyList || []),
              ...i$.payloadHostDenyList,
            ],
          },
          r = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
          o = !1 !== e.session_recording.recordBody && t.recordBody,
          a = !1 !== e.capture_performance && t.recordPerformance,
          l =
            ((s = Math.min(
              1e6,
              null !== (i = n.payloadSizeLimitBytes) && void 0 !== i ? i : 1e6
            )),
            (e) => (
              null != e &&
                e.requestBody &&
                (e.requestBody = iM(
                  e.requestBody,
                  e.requestHeaders,
                  s,
                  "Request"
                )),
              null != e &&
                e.responseBody &&
                (e.responseBody = iM(
                  e.responseBody,
                  e.responseHeaders,
                  s,
                  "Response"
                )),
              e
            )),
          c = (t) => {
            var i;
            return l(
              ((e, t) => {
                var i,
                  s = ta(e.name),
                  n =
                    0 === t.indexOf("http")
                      ? null === (i = ta(t)) || void 0 === i
                        ? void 0
                        : i.pathname
                      : t;
                "/" === n && (n = "");
                var r = null == s ? void 0 : s.pathname.replace(n || "", "");
                if (!(s && r && iA.some((e) => 0 === r.indexOf(e)))) return e;
              })(
                (D((i = t.requestHeaders)) ||
                  Z(Object.keys(null != i ? i : {}), (e) => {
                    iO.includes(e.toLowerCase()) && (i[e] = iT);
                  }),
                t),
                e.api_host
              )
            );
          },
          u = F(e.session_recording.maskNetworkRequestFn);
        return (
          u &&
            F(e.session_recording.maskCapturedNetworkRequestFn) &&
            z.warn(
              "Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."
            ),
          u &&
            (e.session_recording.maskCapturedNetworkRequestFn = (t) => {
              var i = e.session_recording.maskNetworkRequestFn({ url: t.name });
              return J(J({}, t), {}, { name: null == i ? void 0 : i.url });
            }),
          (n.maskRequestFn = F(e.session_recording.maskCapturedNetworkRequestFn)
            ? (t) => {
                var i,
                  s,
                  n,
                  r = c(t);
                return r &&
                  null !==
                    (i =
                      null ===
                        (s = (n = e.session_recording)
                          .maskCapturedNetworkRequestFn) || void 0 === s
                        ? void 0
                        : s.call(n, r)) &&
                  void 0 !== i
                  ? i
                  : void 0;
              }
            : (e) =>
                (function (e) {
                  if (!O(e))
                    return (
                      (e.requestBody = iD(e.requestBody, "Request")),
                      (e.responseBody = iD(e.responseBody, "Response")),
                      e
                    );
                })(c(e))),
          J(
            J(J({}, i$), n),
            {},
            {
              recordHeaders: r,
              recordBody: o,
              recordPerformance: a,
              recordInitialRequests: a,
            }
          )
        );
      };
      function iq(e, t, i, s, n) {
        return (
          t > i && (z.warn("min cannot be greater than max."), (t = i)),
          N(e)
            ? e > i
              ? (s &&
                  z.warn(
                    s +
                      " cannot be  greater than max: " +
                      i +
                      ". Using max value instead."
                  ),
                i)
              : e < t
              ? (s &&
                  z.warn(
                    s +
                      " cannot be less than min: " +
                      t +
                      ". Using min value instead."
                  ),
                t)
              : e
            : (s &&
                z.warn(
                  s +
                    " must be a number. using max or fallback. max: " +
                    i +
                    ", fallback: " +
                    n
                ),
              iq(n || i, t, i, s))
        );
      }
      class iB {
        constructor(e) {
          var t,
            i,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          Y(this, "bucketSize", 100),
            Y(this, "refillRate", 10),
            Y(this, "mutationBuckets", {}),
            Y(this, "loggedTracker", {}),
            Y(this, "refillBuckets", () => {
              Object.keys(this.mutationBuckets).forEach((e) => {
                (this.mutationBuckets[e] =
                  this.mutationBuckets[e] + this.refillRate),
                  this.mutationBuckets[e] >= this.bucketSize &&
                    delete this.mutationBuckets[e];
              });
            }),
            Y(this, "getNodeOrRelevantParent", (e) => {
              var t = this.rrweb.mirror.getNode(e);
              if (
                "svg" !== (null == t ? void 0 : t.nodeName) &&
                t instanceof Element
              ) {
                var i = t.closest("svg");
                if (i) return [this.rrweb.mirror.getId(i), i];
              }
              return [e, t];
            }),
            Y(this, "numberOfChanges", (e) => {
              var t, i, s, n, r, o, a, l;
              return (
                (null !==
                  (t =
                    null === (i = e.removes) || void 0 === i
                      ? void 0
                      : i.length) && void 0 !== t
                  ? t
                  : 0) +
                (null !==
                  (s =
                    null === (n = e.attributes) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== s
                  ? s
                  : 0) +
                (null !==
                  (r =
                    null === (o = e.texts) || void 0 === o
                      ? void 0
                      : o.length) && void 0 !== r
                  ? r
                  : 0) +
                (null !==
                  (a =
                    null === (l = e.adds) || void 0 === l
                      ? void 0
                      : l.length) && void 0 !== a
                  ? a
                  : 0)
              );
            }),
            Y(this, "throttleMutations", (e) => {
              if (3 !== e.type || 0 !== e.data.source) return e;
              var t = e.data,
                i = this.numberOfChanges(t);
              t.attributes &&
                (t.attributes = t.attributes.filter((e) => {
                  var t,
                    i,
                    s,
                    [n, r] = this.getNodeOrRelevantParent(e.id);
                  return (
                    0 !== this.mutationBuckets[n] &&
                    ((this.mutationBuckets[n] =
                      null !== (t = this.mutationBuckets[n]) && void 0 !== t
                        ? t
                        : this.bucketSize),
                    (this.mutationBuckets[n] = Math.max(
                      this.mutationBuckets[n] - 1,
                      0
                    )),
                    0 === this.mutationBuckets[n] &&
                      (this.loggedTracker[n] ||
                        ((this.loggedTracker[n] = !0),
                        null === (i = (s = this.options).onBlockedNode) ||
                          void 0 === i ||
                          i.call(s, n, r))),
                    e)
                  );
                }));
              var s = this.numberOfChanges(t);
              return 0 !== s || i === s ? e : void 0;
            }),
            (this.rrweb = e),
            (this.options = s),
            (this.refillRate = iq(
              null !== (t = this.options.refillRate) && void 0 !== t
                ? t
                : this.refillRate,
              0,
              100,
              "mutation throttling refill rate"
            )),
            (this.bucketSize = iq(
              null !== (i = this.options.bucketSize) && void 0 !== i
                ? i
                : this.bucketSize,
              0,
              100,
              "mutation throttling bucket size"
            )),
            setInterval(() => {
              this.refillBuckets();
            }, 1e3);
        }
      }
      var iH = Uint8Array,
        iU = Uint16Array,
        iz = Uint32Array,
        ij = new iH([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        iW = new iH([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        iG = new iH([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        iV = function (e, t) {
          for (var i = new iU(31), s = 0; s < 31; ++s)
            i[s] = t += 1 << e[s - 1];
          var n = new iz(i[30]);
          for (s = 1; s < 30; ++s)
            for (var r = i[s]; r < i[s + 1]; ++r) n[r] = ((r - i[s]) << 5) | s;
          return [i, n];
        },
        iJ = iV(ij, 2),
        iY = iJ[0],
        iK = iJ[1];
      (iY[28] = 258), (iK[258] = 28);
      for (
        var iX = iV(iW, 0)[1], iQ = new iU(32768), iZ = 0;
        iZ < 32768;
        ++iZ
      ) {
        var i0 = ((43690 & iZ) >>> 1) | ((21845 & iZ) << 1);
        (i0 =
          ((61680 & (i0 = ((52428 & i0) >>> 2) | ((13107 & i0) << 2))) >>> 4) |
          ((3855 & i0) << 4)),
          (iQ[iZ] = (((65280 & i0) >>> 8) | ((255 & i0) << 8)) >>> 1);
      }
      var i1 = function (e, t, i) {
          for (var s = e.length, n = 0, r = new iU(t); n < s; ++n)
            ++r[e[n] - 1];
          var o,
            a = new iU(t);
          for (n = 0; n < t; ++n) a[n] = (a[n - 1] + r[n - 1]) << 1;
          if (i) {
            o = new iU(1 << t);
            var l = 15 - t;
            for (n = 0; n < s; ++n)
              if (e[n])
                for (
                  var c = (n << 4) | e[n],
                    u = t - e[n],
                    d = a[e[n] - 1]++ << u,
                    h = d | ((1 << u) - 1);
                  d <= h;
                  ++d
                )
                  o[iQ[d] >>> l] = c;
          } else
            for (o = new iU(s), n = 0; n < s; ++n)
              o[n] = iQ[a[e[n] - 1]++] >>> (15 - e[n]);
          return o;
        },
        i2 = new iH(288);
      for (iZ = 0; iZ < 144; ++iZ) i2[iZ] = 8;
      for (iZ = 144; iZ < 256; ++iZ) i2[iZ] = 9;
      for (iZ = 256; iZ < 280; ++iZ) i2[iZ] = 7;
      for (iZ = 280; iZ < 288; ++iZ) i2[iZ] = 8;
      var i3 = new iH(32);
      for (iZ = 0; iZ < 32; ++iZ) i3[iZ] = 5;
      var i5 = i1(i2, 9, 0),
        i6 = i1(i3, 5, 0),
        i8 = function (e) {
          return ((e / 8) >> 0) + (7 & e && 1);
        },
        i4 = function (e, t, i) {
          (null == i || i > e.length) && (i = e.length);
          var s = new (e instanceof iU ? iU : e instanceof iz ? iz : iH)(i - t);
          return s.set(e.subarray(t, i)), s;
        },
        i7 = function (e, t, i) {
          i <<= 7 & t;
          var s = (t / 8) >> 0;
          (e[s] |= i), (e[s + 1] |= i >>> 8);
        },
        i9 = function (e, t, i) {
          i <<= 7 & t;
          var s = (t / 8) >> 0;
          (e[s] |= i), (e[s + 1] |= i >>> 8), (e[s + 2] |= i >>> 16);
        },
        se = function (e, t) {
          for (var i = [], s = 0; s < e.length; ++s)
            e[s] && i.push({ s: s, f: e[s] });
          var n = i.length,
            r = i.slice();
          if (!n) return [new iH(0), 0];
          if (1 == n) {
            var o = new iH(i[0].s + 1);
            return (o[i[0].s] = 1), [o, 1];
          }
          i.sort(function (e, t) {
            return e.f - t.f;
          }),
            i.push({ s: -1, f: 25001 });
          var a = i[0],
            l = i[1],
            c = 0,
            u = 1,
            d = 2;
          for (i[0] = { s: -1, f: a.f + l.f, l: a, r: l }; u != n - 1; )
            (a = i[i[c].f < i[d].f ? c++ : d++]),
              (l = i[c != u && i[c].f < i[d].f ? c++ : d++]),
              (i[u++] = { s: -1, f: a.f + l.f, l: a, r: l });
          var h = r[0].s;
          for (s = 1; s < n; ++s) r[s].s > h && (h = r[s].s);
          var _ = new iU(h + 1),
            p = st(i[u - 1], _, 0);
          if (p > t) {
            s = 0;
            var g = 0,
              v = p - t,
              f = 1 << v;
            for (
              r.sort(function (e, t) {
                return _[t.s] - _[e.s] || e.f - t.f;
              });
              s < n;
              ++s
            ) {
              var m = r[s].s;
              if (!(_[m] > t)) break;
              (g += f - (1 << (p - _[m]))), (_[m] = t);
            }
            for (g >>>= v; g > 0; ) {
              var b = r[s].s;
              _[b] < t ? (g -= 1 << (t - _[b]++ - 1)) : ++s;
            }
            for (; s >= 0 && g; --s) {
              var y = r[s].s;
              _[y] == t && (--_[y], ++g);
            }
            p = t;
          }
          return [new iH(_), p];
        },
        st = function (e, t, i) {
          return -1 == e.s
            ? Math.max(st(e.l, t, i + 1), st(e.r, t, i + 1))
            : (t[e.s] = i);
        },
        si = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var i = new iU(++t),
              s = 0,
              n = e[0],
              r = 1,
              o = function (e) {
                i[s++] = e;
              },
              a = 1;
            a <= t;
            ++a
          )
            if (e[a] == n && a != t) ++r;
            else {
              if (!n && r > 2) {
                for (; r > 138; r -= 138) o(32754);
                r > 2 &&
                  (o(r > 10 ? ((r - 11) << 5) | 28690 : ((r - 3) << 5) | 12305),
                  (r = 0));
              } else if (r > 3) {
                for (o(n), --r; r > 6; r -= 6) o(8304);
                r > 2 && (o(((r - 3) << 5) | 8208), (r = 0));
              }
              for (; r--; ) o(n);
              (r = 1), (n = e[a]);
            }
          return [i.subarray(0, s), t];
        },
        ss = function (e, t) {
          for (var i = 0, s = 0; s < t.length; ++s) i += e[s] * t[s];
          return i;
        },
        sn = function (e, t, i) {
          var s = i.length,
            n = i8(t + 2);
          (e[n] = 255 & s),
            (e[n + 1] = s >>> 8),
            (e[n + 2] = 255 ^ e[n]),
            (e[n + 3] = 255 ^ e[n + 1]);
          for (var r = 0; r < s; ++r) e[n + r + 4] = i[r];
          return 8 * (n + 4 + s);
        },
        sr = function (e, t, i, s, n, r, o, a, l, c, u) {
          i7(t, u++, i), ++n[256];
          for (
            var d = se(n, 15),
              h = d[0],
              _ = d[1],
              p = se(r, 15),
              g = p[0],
              v = p[1],
              f = si(h),
              m = f[0],
              b = f[1],
              y = si(g),
              w = y[0],
              S = y[1],
              E = new iU(19),
              k = 0;
            k < m.length;
            ++k
          )
            E[31 & m[k]]++;
          for (k = 0; k < w.length; ++k) E[31 & w[k]]++;
          for (
            var x = se(E, 7), C = x[0], I = x[1], P = 19;
            P > 4 && !C[iG[P - 1]];
            --P
          );
          var R,
            F,
            T,
            $,
            O = (c + 5) << 3,
            L = ss(n, i2) + ss(r, i3) + o,
            A =
              ss(n, h) +
              ss(r, g) +
              o +
              14 +
              3 * P +
              ss(E, C) +
              (2 * E[16] + 3 * E[17] + 7 * E[18]);
          if (O <= L && O <= A) return sn(t, u, e.subarray(l, l + c));
          if ((i7(t, u, 1 + (A < L)), (u += 2), A < L)) {
            (R = i1(h, _, 0)), (F = h), (T = i1(g, v, 0)), ($ = g);
            var M = i1(C, I, 0);
            for (
              i7(t, u, b - 257),
                i7(t, u + 5, S - 1),
                i7(t, u + 10, P - 4),
                u += 14,
                k = 0;
              k < P;
              ++k
            )
              i7(t, u + 3 * k, C[iG[k]]);
            u += 3 * P;
            for (var D = [m, w], N = 0; N < 2; ++N) {
              var q = D[N];
              for (k = 0; k < q.length; ++k) {
                var B = 31 & q[k];
                i7(t, u, M[B]),
                  (u += C[B]),
                  B > 15 && (i7(t, u, (q[k] >>> 5) & 127), (u += q[k] >>> 12));
              }
            }
          } else (R = i5), (F = i2), (T = i6), ($ = i3);
          for (k = 0; k < a; ++k)
            if (s[k] > 255) {
              i9(t, u, R[(B = (s[k] >>> 18) & 31) + 257]),
                (u += F[B + 257]),
                B > 7 && (i7(t, u, (s[k] >>> 23) & 31), (u += ij[B]));
              var H = 31 & s[k];
              i9(t, u, T[H]),
                (u += $[H]),
                H > 3 && (i9(t, u, (s[k] >>> 5) & 8191), (u += iW[H]));
            } else i9(t, u, R[s[k]]), (u += F[s[k]]);
          return i9(t, u, R[256]), u + F[256];
        },
        so = new iz([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        sa = (function () {
          for (var e = new iz(256), t = 0; t < 256; ++t) {
            for (var i = t, s = 9; --s; ) i = (1 & i && 3988292384) ^ (i >>> 1);
            e[t] = i;
          }
          return e;
        })(),
        sl = function () {
          var e = 4294967295;
          return {
            p: function (t) {
              for (var i = e, s = 0; s < t.length; ++s)
                i = sa[(255 & i) ^ t[s]] ^ (i >>> 8);
              e = i;
            },
            d: function () {
              return 4294967295 ^ e;
            },
          };
        },
        sc = function (e, t, i) {
          for (; i; ++t) (e[t] = i), (i >>>= 8);
        },
        su = function (e, t) {
          var i = t.filename;
          if (
            ((e[0] = 31),
            (e[1] = 139),
            (e[2] = 8),
            (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
            (e[9] = 3),
            0 != t.mtime &&
              sc(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
            i)
          ) {
            e[3] = 8;
            for (var s = 0; s <= i.length; ++s) e[s + 10] = i.charCodeAt(s);
          }
        };
      function sd(e, t) {
        void 0 === t && (t = {});
        var i,
          s,
          n,
          r = sl(),
          o = e.length;
        r.p(e);
        var a =
            ((s = t),
            (n = 10 + (((i = t).filename && i.filename.length + 1) || 0)),
            (function (e, t, i, s, n, r) {
              var o = e.length,
                a = new iH(s + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
                l = a.subarray(s, a.length - 8),
                c = 0;
              if (!t || o < 8)
                for (var u = 0; u <= o; u += 65535) {
                  var d = u + 65535;
                  d < o
                    ? (c = sn(l, c, e.subarray(u, d)))
                    : ((l[u] = r), (c = sn(l, c, e.subarray(u, o))));
                }
              else {
                for (
                  var h = so[t - 1],
                    _ = h >>> 13,
                    p = 8191 & h,
                    g = (1 << i) - 1,
                    v = new iU(32768),
                    f = new iU(g + 1),
                    m = Math.ceil(i / 3),
                    b = 2 * m,
                    y = function (t) {
                      return (e[t] ^ (e[t + 1] << m) ^ (e[t + 2] << b)) & g;
                    },
                    w = new iz(25e3),
                    S = new iU(288),
                    E = new iU(32),
                    k = 0,
                    x = 0,
                    C = ((u = 0), 0),
                    I = 0,
                    P = 0;
                  u < o;
                  ++u
                ) {
                  var R = y(u),
                    F = 32767 & u,
                    T = f[R];
                  if (((v[F] = T), (f[R] = F), I <= u)) {
                    var $ = o - u;
                    if ((k > 7e3 || C > 24576) && $ > 423) {
                      (c = sr(e, l, 0, w, S, E, x, C, P, u - P, c)),
                        (C = k = x = 0),
                        (P = u);
                      for (var O = 0; O < 286; ++O) S[O] = 0;
                      for (O = 0; O < 30; ++O) E[O] = 0;
                    }
                    var L = 2,
                      A = 0,
                      M = p,
                      D = (F - T) & 32767;
                    if ($ > 2 && R == y(u - D))
                      for (
                        var N = Math.min(_, $) - 1,
                          q = Math.min(32767, u),
                          B = Math.min(258, $);
                        D <= q && --M && F != T;

                      ) {
                        if (e[u + L] == e[u + L - D]) {
                          for (
                            var H = 0;
                            H < B && e[u + H] == e[u + H - D];
                            ++H
                          );
                          if (H > L) {
                            if (((L = H), (A = D), H > N)) break;
                            var U = Math.min(D, H - 2),
                              z = 0;
                            for (O = 0; O < U; ++O) {
                              var j = (u - D + O + 32768) & 32767,
                                W = (j - v[j] + 32768) & 32767;
                              W > z && ((z = W), (T = j));
                            }
                          }
                        }
                        D += ((F = T) - (T = v[F]) + 32768) & 32767;
                      }
                    if (A) {
                      w[C++] = 268435456 | (iK[L] << 18) | iX[A];
                      var G = 31 & iK[L],
                        V = 31 & iX[A];
                      (x += ij[G] + iW[V]),
                        ++S[257 + G],
                        ++E[V],
                        (I = u + L),
                        ++k;
                    } else (w[C++] = e[u]), ++S[e[u]];
                  }
                }
                c = sr(e, l, r, w, S, E, x, C, P, u - P, c);
              }
              return i4(a, 0, s + i8(c) + n);
            })(
              e,
              null == s.level ? 6 : s.level,
              null == s.mem
                ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
                : 12 + s.mem,
              n,
              8,
              !0
            )),
          l = a.length;
        return su(a, t), sc(a, l - 8, r.d()), sc(a, l - 4, o), a;
      }
      function sh(e, t) {
        var i = e.length;
        if ("undefined" != typeof TextEncoder)
          return new TextEncoder().encode(e);
        for (
          var s = new iH(e.length + (e.length >>> 1)),
            n = 0,
            r = function (e) {
              s[n++] = e;
            },
            o = 0;
          o < i;
          ++o
        ) {
          if (n + 5 > s.length) {
            var a = new iH(n + 8 + ((i - o) << 1));
            a.set(s), (s = a);
          }
          var l = e.charCodeAt(o);
          l < 128 || t
            ? r(l)
            : (l < 2048
                ? r(192 | (l >>> 6))
                : (l > 55295 && l < 57344
                    ? (r(
                        240 |
                          ((l =
                            (65536 + (1047552 & l)) |
                            (1023 & e.charCodeAt(++o))) >>>
                            18)
                      ),
                      r(128 | ((l >>> 12) & 63)))
                    : r(224 | (l >>> 12)),
                  r(128 | ((l >>> 6) & 63))),
              r(128 | (63 & l)));
        }
        return i4(s, 0, n);
      }
      var s_ = "[SessionRecording]",
        sp = j(s_),
        sg = [
          is.MouseMove,
          is.MouseInteraction,
          is.Scroll,
          is.ViewportResize,
          is.Input,
          is.TouchMove,
          is.MediaInteraction,
          is.Drag,
        ],
        sv = (e) => ({ rrwebMethod: e, enqueuedAt: Date.now(), attempt: 1 });
      function sf(e) {
        return (function (e, t) {
          for (var i = "", s = 0; s < e.length; ) {
            var n = e[s++];
            n < 128 || t
              ? (i += String.fromCharCode(n))
              : n < 224
              ? (i += String.fromCharCode(((31 & n) << 6) | (63 & e[s++])))
              : n < 240
              ? (i += String.fromCharCode(
                  ((15 & n) << 12) | ((63 & e[s++]) << 6) | (63 & e[s++])
                ))
              : (i += String.fromCharCode(
                  55296 |
                    ((n =
                      (((15 & n) << 18) |
                        ((63 & e[s++]) << 12) |
                        ((63 & e[s++]) << 6) |
                        (63 & e[s++])) -
                      65536) >>
                      10),
                  56320 | (1023 & n)
                ));
          }
          return i;
        })(sd(sh(JSON.stringify(e))), !0);
      }
      function sm(e) {
        return e.type === ii.Custom && "sessionIdle" === e.data.tag;
      }
      function sb(e, t) {
        return t.some(
          (t) => "regex" === t.matching && new RegExp(t.url).test(e)
        );
      }
      class sy {
        get sessionIdleThresholdMilliseconds() {
          return (
            this.instance.config.session_recording.session_idle_threshold_ms ||
            3e5
          );
        }
        get rrwebRecord() {
          var e, t;
          return null == m ||
            null === (e = m.__PosthogExtensions__) ||
            void 0 === e ||
            null === (t = e.rrweb) ||
            void 0 === t
            ? void 0
            : t.record;
        }
        get started() {
          return this._captureStarted;
        }
        get sessionManager() {
          if (!this.instance.sessionManager)
            throw Error(s_ + " must be started with a valid sessionManager.");
          return this.instance.sessionManager;
        }
        get fullSnapshotIntervalMillis() {
          var e, t;
          return "trigger_pending" === this.triggerStatus
            ? 6e4
            : null !==
                (e =
                  null === (t = this.instance.config.session_recording) ||
                  void 0 === t
                    ? void 0
                    : t.full_snapshot_interval_millis) && void 0 !== e
            ? e
            : 3e5;
        }
        get isSampled() {
          var e = this.instance.get_property(ek);
          return q(e) ? e : null;
        }
        get sessionDuration() {
          var e,
            t,
            i =
              null === (e = this.buffer) || void 0 === e
                ? void 0
                : e.data[
                    (null === (t = this.buffer) || void 0 === t
                      ? void 0
                      : t.data.length) - 1
                  ],
            { sessionStartTimestamp: s } =
              this.sessionManager.checkAndGetSessionAndWindowId(!0);
          return i ? i.timestamp - s : null;
        }
        get isRecordingEnabled() {
          var e = !!this.instance.get_property(ev),
            t = !this.instance.config.disable_session_recording;
          return o && e && t;
        }
        get isConsoleLogCaptureEnabled() {
          var e = !!this.instance.get_property(ef),
            t = this.instance.config.enable_recording_console_log;
          return null != t ? t : e;
        }
        get canvasRecording() {
          var e,
            t,
            i,
            s,
            n,
            r,
            o = this.instance.config.session_recording.captureCanvas,
            a = this.instance.get_property(eb),
            l =
              null !==
                (e =
                  null !== (t = null == o ? void 0 : o.recordCanvas) &&
                  void 0 !== t
                    ? t
                    : null == a
                    ? void 0
                    : a.enabled) &&
              void 0 !== e &&
              e,
            c =
              null !==
                (i =
                  null !== (s = null == o ? void 0 : o.canvasFps) &&
                  void 0 !== s
                    ? s
                    : null == a
                    ? void 0
                    : a.fps) && void 0 !== i
                ? i
                : 0,
            u =
              null !==
                (n =
                  null !== (r = null == o ? void 0 : o.canvasQuality) &&
                  void 0 !== r
                    ? r
                    : null == a
                    ? void 0
                    : a.quality) && void 0 !== n
                ? n
                : 0;
          return {
            enabled: l,
            fps: iq(c, 0, 12, "canvas recording fps"),
            quality: iq(u, 0, 1, "canvas recording quality"),
          };
        }
        get networkPayloadCapture() {
          var e,
            t,
            i = this.instance.get_property(em),
            s = {
              recordHeaders:
                null === (e = this.instance.config.session_recording) ||
                void 0 === e
                  ? void 0
                  : e.recordHeaders,
              recordBody:
                null === (t = this.instance.config.session_recording) ||
                void 0 === t
                  ? void 0
                  : t.recordBody,
            },
            n =
              (null == s ? void 0 : s.recordHeaders) ||
              (null == i ? void 0 : i.recordHeaders),
            r =
              (null == s ? void 0 : s.recordBody) ||
              (null == i ? void 0 : i.recordBody),
            o = T(this.instance.config.capture_performance)
              ? this.instance.config.capture_performance.network_timing
              : this.instance.config.capture_performance,
            a = !!(q(o) ? o : null == i ? void 0 : i.capturePerformance);
          return n || r || a
            ? { recordHeaders: n, recordBody: r, recordPerformance: a }
            : void 0;
        }
        get sampleRate() {
          var e = this.instance.get_property(ey);
          return N(e) ? e : null;
        }
        get minimumDuration() {
          var e = this.instance.get_property(ew);
          return N(e) ? e : null;
        }
        get status() {
          return this.receivedDecide
            ? this.isRecordingEnabled
              ? this._urlBlocked
                ? "paused"
                : D(this._linkedFlag) || this._linkedFlagSeen
                ? "trigger_pending" === this.triggerStatus
                  ? "buffering"
                  : q(this.isSampled)
                  ? this.isSampled
                    ? "sampled"
                    : "disabled"
                  : "active"
                : "buffering"
              : "disabled"
            : "buffering";
        }
        get urlTriggerStatus() {
          var e;
          return 0 === this._urlTriggers.length
            ? "trigger_disabled"
            : (null === (e = this.instance) || void 0 === e
                ? void 0
                : e.get_property(ex)) === this.sessionId
            ? "trigger_activated"
            : "trigger_pending";
        }
        get eventTriggerStatus() {
          var e;
          return 0 === this._eventTriggers.length
            ? "trigger_disabled"
            : (null === (e = this.instance) || void 0 === e
                ? void 0
                : e.get_property(eC)) === this.sessionId
            ? "trigger_activated"
            : "trigger_pending";
        }
        get triggerStatus() {
          var e =
              "trigger_activated" === this.eventTriggerStatus ||
              "trigger_activated" === this.urlTriggerStatus,
            t =
              "trigger_pending" === this.eventTriggerStatus ||
              "trigger_pending" === this.urlTriggerStatus;
          return e
            ? "trigger_activated"
            : t
            ? "trigger_pending"
            : "trigger_disabled";
        }
        constructor(e) {
          if (
            (Y(this, "queuedRRWebEvents", []),
            Y(this, "isIdle", !1),
            Y(this, "_linkedFlagSeen", !1),
            Y(this, "_lastActivityTimestamp", Date.now()),
            Y(this, "_linkedFlag", null),
            Y(this, "_removePageViewCaptureHook", void 0),
            Y(this, "_onSessionIdListener", void 0),
            Y(this, "_persistDecideOnSessionListener", void 0),
            Y(this, "_samplingSessionListener", void 0),
            Y(this, "_urlTriggers", []),
            Y(this, "_urlBlocklist", []),
            Y(this, "_urlBlocked", !1),
            Y(this, "_eventTriggers", []),
            Y(this, "_removeEventTriggerCaptureHook", void 0),
            Y(this, "_forceAllowLocalhostNetworkCapture", !1),
            Y(this, "_onBeforeUnload", () => {
              this._flushBuffer();
            }),
            Y(this, "_onOffline", () => {
              this._tryAddCustomEvent("browser offline", {});
            }),
            Y(this, "_onOnline", () => {
              this._tryAddCustomEvent("browser online", {});
            }),
            Y(this, "_onVisibilityChange", () => {
              if (null != h && h.visibilityState) {
                var e = "window " + h.visibilityState;
                this._tryAddCustomEvent(e, {});
              }
            }),
            (this.instance = e),
            (this._captureStarted = !1),
            (this._endpoint = "/s/"),
            (this.stopRrweb = void 0),
            (this.receivedDecide = !1),
            !this.instance.sessionManager)
          )
            throw (
              (sp.error("started without valid sessionManager"),
              Error(
                s_ + " started without valid sessionManager. This is a bug."
              ))
            );
          if (this.instance.config.__preview_experimental_cookieless_mode)
            throw Error(
              s_ +
                " cannot be used with __preview_experimental_cookieless_mode."
            );
          var { sessionId: t, windowId: i } =
            this.sessionManager.checkAndGetSessionAndWindowId();
          (this.sessionId = t),
            (this.windowId = i),
            (this.buffer = this.clearBuffer()),
            this.sessionIdleThresholdMilliseconds >=
              this.sessionManager.sessionTimeoutMs &&
              sp.warn(
                "session_idle_threshold_ms ("
                  .concat(
                    this.sessionIdleThresholdMilliseconds,
                    ") is greater than the session timeout ("
                  )
                  .concat(
                    this.sessionManager.sessionTimeoutMs,
                    "). Session will never be detected as idle"
                  )
              );
        }
        startIfEnabledOrStop(e) {
          this.isRecordingEnabled
            ? (this._startCapture(e),
              null == o ||
                o.addEventListener("beforeunload", this._onBeforeUnload),
              null == o || o.addEventListener("offline", this._onOffline),
              null == o || o.addEventListener("online", this._onOnline),
              null == o ||
                o.addEventListener(
                  "visibilitychange",
                  this._onVisibilityChange
                ),
              this._setupSampling(),
              this._addEventTriggerListener(),
              D(this._removePageViewCaptureHook) &&
                (this._removePageViewCaptureHook = this.instance.on(
                  "eventCaptured",
                  (e) => {
                    try {
                      if ("$pageview" === e.event) {
                        var t =
                          null != e && e.properties.$current_url
                            ? this._maskUrl(
                                null == e ? void 0 : e.properties.$current_url
                              )
                            : "";
                        if (!t) return;
                        this._tryAddCustomEvent("$pageview", { href: t });
                      }
                    } catch (e) {
                      sp.error("Could not add $pageview to rrweb session", e);
                    }
                  }
                )),
              this._onSessionIdListener ||
                (this._onSessionIdListener = this.sessionManager.onSessionId(
                  (e, t, i) => {
                    var s, n, r, o;
                    i &&
                      (this._tryAddCustomEvent("$session_id_change", {
                        sessionId: e,
                        windowId: t,
                        changeReason: i,
                      }),
                      null === (s = this.instance) ||
                        void 0 === s ||
                        null === (n = s.persistence) ||
                        void 0 === n ||
                        n.unregister(eC),
                      null === (r = this.instance) ||
                        void 0 === r ||
                        null === (o = r.persistence) ||
                        void 0 === o ||
                        o.unregister(ex));
                  }
                )))
            : this.stopRecording();
        }
        stopRecording() {
          var e, t, i, s;
          this._captureStarted &&
            this.stopRrweb &&
            (this.stopRrweb(),
            (this.stopRrweb = void 0),
            (this._captureStarted = !1),
            null == o ||
              o.removeEventListener("beforeunload", this._onBeforeUnload),
            null == o || o.removeEventListener("offline", this._onOffline),
            null == o || o.removeEventListener("online", this._onOnline),
            null == o ||
              o.removeEventListener(
                "visibilitychange",
                this._onVisibilityChange
              ),
            this.clearBuffer(),
            clearInterval(this._fullSnapshotTimer),
            null === (e = this._removePageViewCaptureHook) ||
              void 0 === e ||
              e.call(this),
            (this._removePageViewCaptureHook = void 0),
            null === (t = this._removeEventTriggerCaptureHook) ||
              void 0 === t ||
              t.call(this),
            (this._removeEventTriggerCaptureHook = void 0),
            null === (i = this._onSessionIdListener) ||
              void 0 === i ||
              i.call(this),
            (this._onSessionIdListener = void 0),
            null === (s = this._samplingSessionListener) ||
              void 0 === s ||
              s.call(this),
            (this._samplingSessionListener = void 0),
            sp.info("stopped"));
        }
        makeSamplingDecision(e) {
          var t,
            i,
            s = this.sessionId !== e,
            n = this.sampleRate;
          if (N(n)) {
            var r,
              o = this.isSampled,
              a = s || !q(o);
            (r = a ? Math.random() < n : o),
              a &&
                (r
                  ? this._reportStarted("sampled")
                  : sp.warn(
                      "Sample rate ("
                        .concat(n, ") has determined that this sessionId (")
                        .concat(e, ") will not be sent to the server.")
                    ),
                this._tryAddCustomEvent("samplingDecisionMade", {
                  sampleRate: n,
                  isSampled: r,
                })),
              null === (i = this.instance.persistence) ||
                void 0 === i ||
                i.register({ [ek]: r });
          } else
            null === (t = this.instance.persistence) ||
              void 0 === t ||
              t.register({ [ek]: null });
        }
        onRemoteConfig(e) {
          var t, i, s, n, r, o;
          if (
            (this._tryAddCustomEvent("$remote_config_received", e),
            this._persistRemoteConfig(e),
            (this._linkedFlag =
              (null === (t = e.sessionRecording) || void 0 === t
                ? void 0
                : t.linkedFlag) || null),
            null !== (i = e.sessionRecording) &&
              void 0 !== i &&
              i.endpoint &&
              (this._endpoint =
                null === (o = e.sessionRecording) || void 0 === o
                  ? void 0
                  : o.endpoint),
            this._setupSampling(),
            !D(this._linkedFlag) && !this._linkedFlagSeen)
          ) {
            var a = L(this._linkedFlag)
                ? this._linkedFlag
                : this._linkedFlag.flag,
              l = L(this._linkedFlag) ? null : this._linkedFlag.variant;
            this.instance.onFeatureFlags((e, t) => {
              var i = T(t) && a in t,
                s = l ? t[a] === l : i;
              s &&
                this._reportStarted("linked_flag_matched", {
                  linkedFlag: a,
                  linkedVariant: l,
                }),
                (this._linkedFlagSeen = s);
            });
          }
          null !== (s = e.sessionRecording) &&
            void 0 !== s &&
            s.urlTriggers &&
            (this._urlTriggers = e.sessionRecording.urlTriggers),
            null !== (n = e.sessionRecording) &&
              void 0 !== n &&
              n.urlBlocklist &&
              (this._urlBlocklist = e.sessionRecording.urlBlocklist),
            null !== (r = e.sessionRecording) &&
              void 0 !== r &&
              r.eventTriggers &&
              (this._eventTriggers = e.sessionRecording.eventTriggers),
            (this.receivedDecide = !0),
            this.startIfEnabledOrStop();
        }
        _setupSampling() {
          N(this.sampleRate) &&
            D(this._samplingSessionListener) &&
            (this._samplingSessionListener = this.sessionManager.onSessionId(
              (e) => {
                this.makeSamplingDecision(e);
              }
            ));
        }
        _persistRemoteConfig(e) {
          if (this.instance.persistence) {
            var t,
              i = this.instance.persistence,
              s = () => {
                var t,
                  s,
                  n,
                  r,
                  o,
                  a,
                  l,
                  c,
                  u =
                    null === (t = e.sessionRecording) || void 0 === t
                      ? void 0
                      : t.sampleRate,
                  d = D(u) ? null : parseFloat(u),
                  h =
                    null === (s = e.sessionRecording) || void 0 === s
                      ? void 0
                      : s.minimumDurationMilliseconds;
                i.register({
                  [ev]: !!e.sessionRecording,
                  [ef]:
                    null === (n = e.sessionRecording) || void 0 === n
                      ? void 0
                      : n.consoleLogRecordingEnabled,
                  [em]: J(
                    { capturePerformance: e.capturePerformance },
                    null === (r = e.sessionRecording) || void 0 === r
                      ? void 0
                      : r.networkPayloadCapture
                  ),
                  [eb]: {
                    enabled:
                      null === (o = e.sessionRecording) || void 0 === o
                        ? void 0
                        : o.recordCanvas,
                    fps:
                      null === (a = e.sessionRecording) || void 0 === a
                        ? void 0
                        : a.canvasFps,
                    quality:
                      null === (l = e.sessionRecording) || void 0 === l
                        ? void 0
                        : l.canvasQuality,
                  },
                  [ey]: d,
                  [ew]: O(h) ? null : h,
                  [eS]:
                    null === (c = e.sessionRecording) || void 0 === c
                      ? void 0
                      : c.scriptConfig,
                });
              };
            s(),
              null === (t = this._persistDecideOnSessionListener) ||
                void 0 === t ||
                t.call(this),
              (this._persistDecideOnSessionListener =
                this.sessionManager.onSessionId(s));
          }
        }
        log(e) {
          var t,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "log";
          null === (t = this.instance.sessionRecording) ||
            void 0 === t ||
            t.onRRwebEmit({
              type: 6,
              data: {
                plugin: "rrweb/console@1",
                payload: { level: i, trace: [], payload: [JSON.stringify(e)] },
              },
              timestamp: Date.now(),
            });
        }
        _startCapture(e) {
          if (
            !O(Object.assign) &&
            !O(Array.from) &&
            !(
              this._captureStarted ||
              this.instance.config.disable_session_recording ||
              this.instance.consent.isOptedOut()
            )
          ) {
            var t, i;
            ((this._captureStarted = !0),
            this.sessionManager.checkAndGetSessionAndWindowId(),
            this.rrwebRecord)
              ? this._onScriptLoaded()
              : null === (t = m.__PosthogExtensions__) ||
                void 0 === t ||
                null === (i = t.loadExternalDependency) ||
                void 0 === i ||
                i.call(t, this.instance, this.scriptName, (e) => {
                  if (e) return sp.error("could not load recorder", e);
                  this._onScriptLoaded();
                }),
              sp.info("starting"),
              "active" === this.status &&
                this._reportStarted(e || "recording_initialized");
          }
        }
        get scriptName() {
          var e, t, i;
          return (
            (null === (e = this.instance) ||
            void 0 === e ||
            null === (t = e.persistence) ||
            void 0 === t ||
            null === (i = t.get_property(eS)) ||
            void 0 === i
              ? void 0
              : i.script) || "recorder"
          );
        }
        isInteractiveEvent(e) {
          var t;
          return (
            3 === e.type &&
            -1 !==
              sg.indexOf(
                null === (t = e.data) || void 0 === t ? void 0 : t.source
              )
          );
        }
        _updateWindowAndSessionIds(e) {
          var t = this.isInteractiveEvent(e);
          t ||
            this.isIdle ||
            (e.timestamp - this._lastActivityTimestamp >
              this.sessionIdleThresholdMilliseconds &&
              ((this.isIdle = !0),
              clearInterval(this._fullSnapshotTimer),
              this._tryAddCustomEvent("sessionIdle", {
                eventTimestamp: e.timestamp,
                lastActivityTimestamp: this._lastActivityTimestamp,
                threshold: this.sessionIdleThresholdMilliseconds,
                bufferLength: this.buffer.data.length,
                bufferSize: this.buffer.size,
              }),
              this._flushBuffer()));
          var i = !1;
          if (
            (t &&
              ((this._lastActivityTimestamp = e.timestamp),
              this.isIdle &&
                ((this.isIdle = !1),
                this._tryAddCustomEvent("sessionNoLongerIdle", {
                  reason: "user activity",
                  type: e.type,
                }),
                (i = !0))),
            !this.isIdle)
          ) {
            var { windowId: s, sessionId: n } =
                this.sessionManager.checkAndGetSessionAndWindowId(
                  !t,
                  e.timestamp
                ),
              r = this.sessionId !== n,
              o = this.windowId !== s;
            (this.windowId = s),
              (this.sessionId = n),
              r || o
                ? (this.stopRecording(),
                  this.startIfEnabledOrStop("session_id_changed"))
                : i && this._scheduleFullSnapshot();
          }
        }
        _tryRRWebMethod(e) {
          try {
            return e.rrwebMethod(), !0;
          } catch (t) {
            return (
              this.queuedRRWebEvents.length < 10
                ? this.queuedRRWebEvents.push({
                    enqueuedAt: e.enqueuedAt || Date.now(),
                    attempt: e.attempt++,
                    rrwebMethod: e.rrwebMethod,
                  })
                : sp.warn("could not emit queued rrweb event.", t, e),
              !1
            );
          }
        }
        _tryAddCustomEvent(e, t) {
          return this._tryRRWebMethod(
            sv(() => this.rrwebRecord.addCustomEvent(e, t))
          );
        }
        _tryTakeFullSnapshot() {
          return this._tryRRWebMethod(
            sv(() => this.rrwebRecord.takeFullSnapshot())
          );
        }
        _onScriptLoaded() {
          var e,
            t = {
              blockClass: "ph-no-capture",
              blockSelector: void 0,
              ignoreClass: "ph-ignore-input",
              maskTextClass: "ph-mask",
              maskTextSelector: void 0,
              maskTextFn: void 0,
              maskAllInputs: !0,
              maskInputOptions: { password: !0 },
              maskInputFn: void 0,
              slimDOMOptions: {},
              collectFonts: !1,
              inlineStylesheet: !0,
              recordCrossOriginIframes: !1,
            };
          for (var [i, s] of Object.entries(
            this.instance.config.session_recording || {}
          ))
            i in t &&
              ("maskInputOptions" === i
                ? (t.maskInputOptions = J({ password: !0 }, s))
                : (t[i] = s));
          if (
            (this.canvasRecording &&
              this.canvasRecording.enabled &&
              ((t.recordCanvas = !0),
              (t.sampling = { canvas: this.canvasRecording.fps }),
              (t.dataURLOptions = {
                type: "image/webp",
                quality: this.canvasRecording.quality,
              })),
            this.rrwebRecord)
          ) {
            this.mutationRateLimiter =
              null !== (e = this.mutationRateLimiter) && void 0 !== e
                ? e
                : new iB(this.rrwebRecord, {
                    refillRate:
                      this.instance.config.session_recording
                        .__mutationRateLimiterRefillRate,
                    bucketSize:
                      this.instance.config.session_recording
                        .__mutationRateLimiterBucketSize,
                    onBlockedNode: (e, t) => {
                      var i = "Too many mutations on node '".concat(
                        e,
                        "'. Rate limiting. This could be due to SVG animations or something similar"
                      );
                      sp.info(i, { node: t }), this.log(s_ + " " + i, "warn");
                    },
                  });
            var n = this._gatherRRWebPlugins();
            (this.stopRrweb = this.rrwebRecord(
              J(
                {
                  emit: (e) => {
                    this.onRRwebEmit(e);
                  },
                  plugins: n,
                },
                t
              )
            )),
              (this._lastActivityTimestamp = Date.now()),
              (this.isIdle = !1),
              this._tryAddCustomEvent("$session_options", {
                sessionRecordingOptions: t,
                activePlugins: n.map((e) => (null == e ? void 0 : e.name)),
              }),
              this._tryAddCustomEvent("$posthog_config", {
                config: this.instance.config,
              });
          } else
            sp.error(
              "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong."
            );
        }
        _scheduleFullSnapshot() {
          if (
            (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer),
            !this.isIdle)
          ) {
            var e = this.fullSnapshotIntervalMillis;
            e &&
              (this._fullSnapshotTimer = setInterval(() => {
                this._tryTakeFullSnapshot();
              }, e));
          }
        }
        _gatherRRWebPlugins() {
          var e,
            t,
            i,
            s,
            n = [],
            r =
              null === (e = m.__PosthogExtensions__) ||
              void 0 === e ||
              null === (t = e.rrwebPlugins) ||
              void 0 === t
                ? void 0
                : t.getRecordConsolePlugin;
          r && this.isConsoleLogCaptureEnabled && n.push(r());
          var o =
            null === (i = m.__PosthogExtensions__) ||
            void 0 === i ||
            null === (s = i.rrwebPlugins) ||
            void 0 === s
              ? void 0
              : s.getRecordNetworkPlugin;
          return (
            this.networkPayloadCapture &&
              F(o) &&
              (!to.includes(location.hostname) ||
              this._forceAllowLocalhostNetworkCapture
                ? n.push(
                    o(iN(this.instance.config, this.networkPayloadCapture))
                  )
                : sp.info(
                    "NetworkCapture not started because we are on localhost."
                  )),
            n
          );
        }
        onRRwebEmit(e) {
          var t;
          if ((this._processQueuedEvents(), e && T(e))) {
            if (e.type === ii.Meta) {
              var i = this._maskUrl(e.data.href);
              if (((this._lastHref = i), !i)) return;
              e.data.href = i;
            } else this._pageViewFallBack();
            if (
              (this._checkUrlTriggerConditions(),
              "paused" !== this.status ||
                (e.type === ii.Custom && "recording paused" === e.data.tag))
            ) {
              e.type === ii.FullSnapshot && this._scheduleFullSnapshot(),
                e.type === ii.FullSnapshot &&
                  "trigger_pending" === this.triggerStatus &&
                  this.clearBuffer();
              var s = this.mutationRateLimiter
                ? this.mutationRateLimiter.throttleMutations(e)
                : e;
              if (s) {
                var n = (function (e) {
                  if (
                    e &&
                    T(e) &&
                    6 === e.type &&
                    T(e.data) &&
                    "rrweb/console@1" === e.data.plugin
                  ) {
                    e.data.payload.payload.length > 10 &&
                      ((e.data.payload.payload = e.data.payload.payload.slice(
                        0,
                        10
                      )),
                      e.data.payload.payload.push("...[truncated]"));
                    for (
                      var t = [], i = 0;
                      i < e.data.payload.payload.length;
                      i++
                    )
                      e.data.payload.payload[i] &&
                      e.data.payload.payload[i].length > 2e3
                        ? t.push(
                            e.data.payload.payload[i].slice(0, 2e3) +
                              "...[truncated]"
                          )
                        : t.push(e.data.payload.payload[i]);
                    return (e.data.payload.payload = t), e;
                  }
                  return e;
                })(s);
                if (
                  (this._updateWindowAndSessionIds(n), !this.isIdle || sm(n))
                ) {
                  if (sm(n)) {
                    var r = n.data.payload;
                    if (r) {
                      var o = r.lastActivityTimestamp,
                        a = r.threshold;
                      n.timestamp = o + a;
                    }
                  }
                  var l =
                      null ===
                        (t =
                          this.instance.config.session_recording
                            .compress_events) ||
                      void 0 === t ||
                      t
                        ? (function (e) {
                            if (1024 > it(e)) return e;
                            try {
                              if (e.type === ii.FullSnapshot)
                                return J(
                                  J({}, e),
                                  {},
                                  { data: sf(e.data), cv: "2024-10" }
                                );
                              if (
                                e.type === ii.IncrementalSnapshot &&
                                e.data.source === is.Mutation
                              )
                                return J(
                                  J({}, e),
                                  {},
                                  {
                                    cv: "2024-10",
                                    data: J(
                                      J({}, e.data),
                                      {},
                                      {
                                        texts: sf(e.data.texts),
                                        attributes: sf(e.data.attributes),
                                        removes: sf(e.data.removes),
                                        adds: sf(e.data.adds),
                                      }
                                    ),
                                  }
                                );
                              if (
                                e.type === ii.IncrementalSnapshot &&
                                e.data.source === is.StyleSheetRule
                              )
                                return J(
                                  J({}, e),
                                  {},
                                  {
                                    cv: "2024-10",
                                    data: J(
                                      J({}, e.data),
                                      {},
                                      {
                                        adds: sf(e.data.adds),
                                        removes: sf(e.data.removes),
                                      }
                                    ),
                                  }
                                );
                            } catch (e) {
                              sp.error(
                                "could not compress event - will use uncompressed event",
                                e
                              );
                            }
                            return e;
                          })(n)
                        : n,
                    c = {
                      $snapshot_bytes: it(l),
                      $snapshot_data: l,
                      $session_id: this.sessionId,
                      $window_id: this.windowId,
                    };
                  "disabled" !== this.status
                    ? this._captureSnapshotBuffered(c)
                    : this.clearBuffer();
                }
              }
            }
          }
        }
        _pageViewFallBack() {
          if (!this.instance.config.capture_pageview && o) {
            var e = this._maskUrl(o.location.href);
            this._lastHref !== e &&
              (this._tryAddCustomEvent("$url_changed", { href: e }),
              (this._lastHref = e));
          }
        }
        _processQueuedEvents() {
          if (this.queuedRRWebEvents.length) {
            var e = [...this.queuedRRWebEvents];
            (this.queuedRRWebEvents = []),
              e.forEach((e) => {
                Date.now() - e.enqueuedAt <= 2e3 && this._tryRRWebMethod(e);
              });
          }
        }
        _maskUrl(e) {
          var t = this.instance.config.session_recording;
          if (t.maskNetworkRequestFn) {
            var i,
              s = { url: e };
            return null === (i = s = t.maskNetworkRequestFn(s)) || void 0 === i
              ? void 0
              : i.url;
          }
          return e;
        }
        clearBuffer() {
          return (
            (this.buffer = {
              size: 0,
              data: [],
              sessionId: this.sessionId,
              windowId: this.windowId,
            }),
            this.buffer
          );
        }
        _flushBuffer() {
          this.flushBufferTimer &&
            (clearTimeout(this.flushBufferTimer),
            (this.flushBufferTimer = void 0));
          var e = this.minimumDuration,
            t = this.sessionDuration,
            i = N(t) && t >= 0,
            s = N(e) && i && t < e;
          return "buffering" === this.status || "paused" === this.status || s
            ? ((this.flushBufferTimer = setTimeout(() => {
                this._flushBuffer();
              }, 2e3)),
              this.buffer)
            : (this.buffer.data.length > 0 &&
                (function e(t) {
                  var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 6606028.8;
                  if (t.size >= i && t.data.length > 1) {
                    var s = Math.floor(t.data.length / 2),
                      n = t.data.slice(0, s),
                      r = t.data.slice(s);
                    return [
                      e({
                        size: it(n),
                        data: n,
                        sessionId: t.sessionId,
                        windowId: t.windowId,
                      }),
                      e({
                        size: it(r),
                        data: r,
                        sessionId: t.sessionId,
                        windowId: t.windowId,
                      }),
                    ].flatMap((e) => e);
                  }
                  return [t];
                })(this.buffer).forEach((e) => {
                  this._captureSnapshot({
                    $snapshot_bytes: e.size,
                    $snapshot_data: e.data,
                    $session_id: e.sessionId,
                    $window_id: e.windowId,
                    $lib: "web",
                    $lib_version: b.LIB_VERSION,
                  });
                }),
              this.clearBuffer());
        }
        _captureSnapshotBuffered(e) {
          var t,
            i =
              2 +
              ((null === (t = this.buffer) || void 0 === t
                ? void 0
                : t.data.length) || 0);
          !this.isIdle &&
            (this.buffer.size + e.$snapshot_bytes + i > 943718.4 ||
              this.buffer.sessionId !== this.sessionId) &&
            (this.buffer = this._flushBuffer()),
            (this.buffer.size += e.$snapshot_bytes),
            this.buffer.data.push(e.$snapshot_data),
            this.flushBufferTimer ||
              this.isIdle ||
              (this.flushBufferTimer = setTimeout(() => {
                this._flushBuffer();
              }, 2e3));
        }
        _captureSnapshot(e) {
          this.instance.capture("$snapshot", e, {
            _url: this.instance.requestRouter.endpointFor(
              "api",
              this._endpoint
            ),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0,
          });
        }
        _checkUrlTriggerConditions() {
          if (void 0 !== o && o.location.href) {
            var e = o.location.href,
              t = "paused" === this.status,
              i = sb(e, this._urlBlocklist);
            i && !t
              ? this._pauseRecording()
              : !i && t && this._resumeRecording(),
              sb(e, this._urlTriggers) && this._activateTrigger("url");
          }
        }
        _activateTrigger(e) {
          var t, i;
          "trigger_pending" === this.triggerStatus &&
            (null === (t = this.instance) ||
              void 0 === t ||
              null === (i = t.persistence) ||
              void 0 === i ||
              i.register({ ["url" === e ? ex : eC]: this.sessionId }),
            this._flushBuffer(),
            this._reportStarted(e + "_trigger_matched"));
        }
        _pauseRecording() {
          "paused" !== this.status &&
            ((this._urlBlocked = !0),
            clearInterval(this._fullSnapshotTimer),
            sp.info("recording paused due to URL blocker"),
            this._tryAddCustomEvent("recording paused", {
              reason: "url blocker",
            }));
        }
        _resumeRecording() {
          "paused" === this.status &&
            ((this._urlBlocked = !1),
            this._tryTakeFullSnapshot(),
            this._scheduleFullSnapshot(),
            this._tryAddCustomEvent("recording resumed", {
              reason: "left blocked url",
            }),
            sp.info("recording resumed"));
        }
        _addEventTriggerListener() {
          0 !== this._eventTriggers.length &&
            D(this._removeEventTriggerCaptureHook) &&
            (this._removeEventTriggerCaptureHook = this.instance.on(
              "eventCaptured",
              (e) => {
                try {
                  this._eventTriggers.includes(e.event) &&
                    this._activateTrigger("event");
                } catch (e) {
                  sp.error("Could not activate event trigger", e);
                }
              }
            ));
        }
        overrideLinkedFlag() {
          (this._linkedFlagSeen = !0),
            this._reportStarted("linked_flag_overridden");
        }
        overrideSampling() {
          var e;
          null === (e = this.instance.persistence) ||
            void 0 === e ||
            e.register({ [ek]: !0 }),
            this._reportStarted("sampling_overridden");
        }
        overrideTrigger(e) {
          this._activateTrigger(e);
        }
        _reportStarted(e, t) {
          this.instance.register_for_session({
            $session_recording_start_reason: e,
          }),
            sp.info(e.replace("_", " "), t),
            S(["recording_initialized", "session_id_changed"], e) ||
              this._tryAddCustomEvent(e, t);
        }
      }
      var sw = j("[RemoteConfig]");
      class sS {
        constructor(e) {
          this.instance = e;
        }
        get remoteConfig() {
          var e, t;
          return null === (e = m._POSTHOG_REMOTE_CONFIG) ||
            void 0 === e ||
            null === (t = e[this.instance.config.token]) ||
            void 0 === t
            ? void 0
            : t.config;
        }
        _loadRemoteConfigJs(e) {
          var t, i, s;
          null !== (t = m.__PosthogExtensions__) &&
          void 0 !== t &&
          t.loadExternalDependency
            ? null === (i = m.__PosthogExtensions__) ||
              void 0 === i ||
              null === (s = i.loadExternalDependency) ||
              void 0 === s ||
              s.call(i, this.instance, "remote-config", () =>
                e(this.remoteConfig)
              )
            : (sw.error(
                "PostHog Extensions not found. Cannot load remote config."
              ),
              e());
        }
        _loadRemoteConfigJSON(e) {
          this.instance._send_request({
            method: "GET",
            url: this.instance.requestRouter.endpointFor(
              "assets",
              "/array/".concat(this.instance.config.token, "/config")
            ),
            callback: (t) => {
              e(t.json);
            },
          });
        }
        load() {
          try {
            if (this.remoteConfig)
              return (
                sw.info("Using preloaded remote config", this.remoteConfig),
                void this.onRemoteConfig(this.remoteConfig)
              );
            if (this.instance.config.advanced_disable_decide)
              return void sw.warn(
                "Remote config is disabled. Falling back to local config."
              );
            this._loadRemoteConfigJs((e) => {
              if (!e)
                return (
                  sw.info(
                    "No config found after loading remote JS config. Falling back to JSON."
                  ),
                  void this._loadRemoteConfigJSON((e) => {
                    this.onRemoteConfig(e);
                  })
                );
              this.onRemoteConfig(e);
            });
          } catch (e) {
            sw.error("Error loading remote config", e);
          }
        }
        onRemoteConfig(e) {
          e
            ? this.instance.config.__preview_remote_config
              ? (this.instance._onRemoteConfig(e),
                !1 !== e.hasFeatureFlags &&
                  this.instance.featureFlags.ensureFlagsLoaded())
              : sw.info(
                  "__preview_remote_config is disabled. Logging config instead",
                  e
                )
            : sw.error("Failed to fetch remote config from PostHog.");
        }
      }
      var sE,
        sk =
          null != o && o.location
            ? td(o.location.hash, "__posthog") || td(location.hash, "state")
            : null,
        sx = "_postHogToolbarParams";
      ((sD = sE || (sE = {}))[(sD.UNINITIALIZED = 0)] = "UNINITIALIZED"),
        (sD[(sD.LOADING = 1)] = "LOADING"),
        (sD[(sD.LOADED = 2)] = "LOADED");
      class sC {
        constructor(e) {
          this.instance = e;
        }
        setToolbarState(e) {
          m.ph_toolbar_state = e;
        }
        getToolbarState() {
          var e;
          return null !== (e = m.ph_toolbar_state) && void 0 !== e
            ? e
            : sE.UNINITIALIZED;
        }
        maybeLoadToolbar() {
          var e,
            t,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0;
          if (!o || !h) return !1;
          (i = null !== (e = i) && void 0 !== e ? e : o.location),
            (n = null !== (t = n) && void 0 !== t ? t : o.history);
          try {
            if (!s) {
              try {
                o.localStorage.setItem("test", "test"),
                  o.localStorage.removeItem("test");
              } catch (e) {
                return !1;
              }
              s = null == o ? void 0 : o.localStorage;
            }
            var r,
              a = sk || td(i.hash, "__posthog") || td(i.hash, "state"),
              l = a
                ? ei(() => JSON.parse(atob(decodeURIComponent(a)))) ||
                  ei(() => JSON.parse(decodeURIComponent(a)))
                : null;
            return (
              l && "ph_authorize" === l.action
                ? (((r = l).source = "url"),
                  r &&
                    Object.keys(r).length > 0 &&
                    (l.desiredHash
                      ? (i.hash = l.desiredHash)
                      : n
                      ? n.replaceState(n.state, "", i.pathname + i.search)
                      : (i.hash = "")))
                : (((r = JSON.parse(s.getItem(sx) || "{}")).source =
                    "localstorage"),
                  delete r.userIntent),
              !(!r.token || this.instance.config.token !== r.token) &&
                (this.loadToolbar(r), !0)
            );
          } catch (e) {
            return !1;
          }
        }
        _callLoadToolbar(e) {
          (m.ph_load_toolbar || m.ph_load_editor)(e, this.instance);
        }
        loadToolbar(e) {
          var t,
            i,
            s = !(null == h || !h.getElementById(eH));
          if (!o || s) return !1;
          var n =
              "custom" === this.instance.requestRouter.region &&
              this.instance.config.advanced_disable_toolbar_metrics,
            r = J(
              J({ token: this.instance.config.token }, e),
              {},
              { apiURL: this.instance.requestRouter.endpointFor("ui") },
              n ? { instrument: !1 } : {}
            );
          return (
            (o.localStorage.setItem(
              sx,
              JSON.stringify(J(J({}, r), {}, { source: void 0 }))
            ),
            this.getToolbarState() === sE.LOADED)
              ? this._callLoadToolbar(r)
              : this.getToolbarState() === sE.UNINITIALIZED &&
                (this.setToolbarState(sE.LOADING),
                null === (t = m.__PosthogExtensions__) ||
                  void 0 === t ||
                  null === (i = t.loadExternalDependency) ||
                  void 0 === i ||
                  i.call(t, this.instance, "toolbar", (e) => {
                    if (e)
                      return (
                        z.error("[Toolbar] Failed to load", e),
                        void this.setToolbarState(sE.UNINITIALIZED)
                      );
                    this.setToolbarState(sE.LOADED), this._callLoadToolbar(r);
                  }),
                er(o, "turbolinks:load", () => {
                  this.setToolbarState(sE.UNINITIALIZED), this.loadToolbar(r);
                })),
            !0
          );
        }
        _loadEditor(e) {
          return this.loadToolbar(e);
        }
        maybeLoadEditor() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0;
          return this.maybeLoadToolbar(e, t, i);
        }
      }
      class sI {
        constructor(e) {
          Y(this, "isPaused", !0),
            Y(this, "queue", []),
            Y(this, "flushTimeoutMs", 3e3),
            (this.sendRequest = e);
        }
        enqueue(e) {
          this.queue.push(e), this.flushTimeout || this.setFlushTimeout();
        }
        unload() {
          this.clearFlushTimeout();
          var e = Object.values(
            this.queue.length > 0 ? this.formatQueue() : {}
          );
          [
            ...e.filter((e) => 0 === e.url.indexOf("/e")),
            ...e.filter((e) => 0 !== e.url.indexOf("/e")),
          ].map((e) => {
            this.sendRequest(J(J({}, e), {}, { transport: "sendBeacon" }));
          });
        }
        enable() {
          (this.isPaused = !1), this.setFlushTimeout();
        }
        setFlushTimeout() {
          var e = this;
          this.isPaused ||
            (this.flushTimeout = setTimeout(() => {
              if ((this.clearFlushTimeout(), this.queue.length > 0)) {
                var t = this.formatQueue();
                for (var i in t)
                  !(function (i) {
                    var s = t[i],
                      n = new Date().getTime();
                    s.data &&
                      R(s.data) &&
                      Z(s.data, (e) => {
                        (e.offset = Math.abs(e.timestamp - n)),
                          delete e.timestamp;
                      }),
                      e.sendRequest(s);
                  })(i);
              }
            }, this.flushTimeoutMs));
        }
        clearFlushTimeout() {
          clearTimeout(this.flushTimeout), (this.flushTimeout = void 0);
        }
        formatQueue() {
          var e = {};
          return (
            Z(this.queue, (t) => {
              var i,
                s = (t ? t.batchKey : null) || t.url;
              O(e[s]) && (e[s] = J(J({}, t), {}, { data: [] })),
                null === (i = e[s].data) || void 0 === i || i.push(t.data);
            }),
            (this.queue = []),
            e
          );
        }
      }
      var sP = function (e) {
          var t,
            i,
            s,
            n,
            r = "";
          for (
            t = i = 0,
              s = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"))
                .length,
              n = 0;
            n < s;
            n++
          ) {
            var o = e.charCodeAt(n),
              a = null;
            o < 128
              ? i++
              : (a =
                  o > 127 && o < 2048
                    ? String.fromCharCode((o >> 6) | 192, (63 & o) | 128)
                    : String.fromCharCode(
                        (o >> 12) | 224,
                        ((o >> 6) & 63) | 128,
                        (63 & o) | 128
                      )),
              M(a) ||
                (i > t && (r += e.substring(t, i)), (r += a), (t = i = n + 1));
          }
          return i > t && (r += e.substring(t, e.length)), r;
        },
        sR = !!g || !!p,
        sF = "text/plain",
        sT = (e, t) => {
          var [i, s] = e.split("?"),
            n = J({}, t);
          null == s ||
            s.split("&").forEach((e) => {
              var [t] = e.split("=");
              delete n[t];
            });
          var r = tc(n);
          return (
            (r = r ? (s ? s + "&" : "") + r : s), "".concat(i, "?").concat(r)
          );
        },
        s$ = (e, t) =>
          JSON.stringify(
            e,
            (e, t) => ("bigint" == typeof t ? t.toString() : t),
            t
          ),
        sO = (e) => {
          var { data: t, compression: i } = e;
          if (t) {
            if (i === r.GZipJS) {
              var s = new Blob([sd(sh(s$(t)), { mtime: 0 })], { type: sF });
              return { contentType: sF, body: s, estimatedSize: s.size };
            }
            if (i === r.Base64) {
              let e;
              var n =
                "data=" +
                encodeURIComponent(
                  "string" ==
                    typeof (e = (function (e) {
                      var t,
                        i,
                        s,
                        n,
                        r,
                        o =
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        a = 0,
                        l = 0,
                        c = "",
                        u = [];
                      if (!e) return e;
                      e = sP(e);
                      do
                        (t =
                          ((r =
                            (e.charCodeAt(a++) << 16) |
                            (e.charCodeAt(a++) << 8) |
                            e.charCodeAt(a++)) >>
                            18) &
                          63),
                          (i = (r >> 12) & 63),
                          (s = (r >> 6) & 63),
                          (n = 63 & r),
                          (u[l++] =
                            o.charAt(t) +
                            o.charAt(i) +
                            o.charAt(s) +
                            o.charAt(n));
                      while (a < e.length);
                      switch (((c = u.join("")), e.length % 3)) {
                        case 1:
                          c = c.slice(0, -2) + "==";
                          break;
                        case 2:
                          c = c.slice(0, -1) + "=";
                      }
                      return c;
                    })(s$(t)))
                    ? e
                    : s$(e)
                );
              return {
                contentType: "application/x-www-form-urlencoded",
                body: n,
                estimatedSize: new Blob([n]).size,
              };
            }
            var o = s$(t);
            return {
              contentType: "application/json",
              body: o,
              estimatedSize: new Blob([o]).size,
            };
          }
        },
        sL = [];
      p &&
        sL.push({
          transport: "fetch",
          method: (e) => {
            var t,
              i,
              {
                contentType: s,
                body: n,
                estimatedSize: r,
              } = null !== (t = sO(e)) && void 0 !== t ? t : {},
              o = new Headers();
            Z(e.headers, function (e, t) {
              o.append(t, e);
            }),
              s && o.append("Content-Type", s);
            var a = e.url,
              l = null;
            if (v) {
              var c = new v();
              l = {
                signal: c.signal,
                timeout: setTimeout(() => c.abort(), e.timeout),
              };
            }
            p(
              a,
              J(
                {
                  method: (null == e ? void 0 : e.method) || "GET",
                  headers: o,
                  keepalive: "POST" === e.method && 52428.8 > (r || 0),
                  body: n,
                  signal: null === (i = l) || void 0 === i ? void 0 : i.signal,
                },
                e.fetchOptions
              )
            )
              .then((t) =>
                t.text().then((i) => {
                  var s,
                    n = { statusCode: t.status, text: i };
                  if (200 === t.status)
                    try {
                      n.json = JSON.parse(i);
                    } catch (e) {
                      z.error(e);
                    }
                  null === (s = e.callback) || void 0 === s || s.call(e, n);
                })
              )
              .catch((t) => {
                var i;
                z.error(t),
                  null === (i = e.callback) ||
                    void 0 === i ||
                    i.call(e, { statusCode: 0, text: t });
              })
              .finally(() => (l ? clearTimeout(l.timeout) : null));
          },
        }),
        g &&
          sL.push({
            transport: "XHR",
            method: (e) => {
              var t,
                i = new g();
              i.open(e.method || "GET", e.url, !0);
              var { contentType: s, body: n } =
                null !== (t = sO(e)) && void 0 !== t ? t : {};
              Z(e.headers, function (e, t) {
                i.setRequestHeader(t, e);
              }),
                s && i.setRequestHeader("Content-Type", s),
                e.timeout && (i.timeout = e.timeout),
                (i.withCredentials = !0),
                (i.onreadystatechange = () => {
                  if (4 === i.readyState) {
                    var t,
                      s = { statusCode: i.status, text: i.responseText };
                    if (200 === i.status)
                      try {
                        s.json = JSON.parse(i.responseText);
                      } catch (e) {}
                    null === (t = e.callback) || void 0 === t || t.call(e, s);
                  }
                }),
                i.send(n);
            },
          }),
        null != d &&
          d.sendBeacon &&
          sL.push({
            transport: "sendBeacon",
            method: (e) => {
              var t = sT(e.url, { beacon: "1" });
              try {
                var i,
                  { contentType: s, body: n } =
                    null !== (i = sO(e)) && void 0 !== i ? i : {},
                  r = "string" == typeof n ? new Blob([n], { type: s }) : n;
                d.sendBeacon(t, r);
              } catch (e) {}
            },
          });
      var sA = ["retriesPerformedSoFar"];
      class sM {
        constructor(e) {
          Y(this, "isPolling", !1),
            Y(this, "pollIntervalMs", 3e3),
            Y(this, "queue", []),
            (this.instance = e),
            (this.queue = []),
            (this.areWeOnline = !0),
            !O(o) &&
              "onLine" in o.navigator &&
              ((this.areWeOnline = o.navigator.onLine),
              o.addEventListener("online", () => {
                (this.areWeOnline = !0), this.flush();
              }),
              o.addEventListener("offline", () => {
                this.areWeOnline = !1;
              }));
        }
        retriableRequest(e) {
          var { retriesPerformedSoFar: t } = e,
            i = K(e, sA);
          N(t) && t > 0 && (i.url = sT(i.url, { retry_count: t })),
            this.instance._send_request(
              J(
                J({}, i),
                {},
                {
                  callback: (e) => {
                    var s;
                    200 !== e.statusCode &&
                    (e.statusCode < 400 || e.statusCode >= 500) &&
                    (null != t ? t : 0) < 10
                      ? this.enqueue(J({ retriesPerformedSoFar: t }, i))
                      : null === (s = i.callback) ||
                        void 0 === s ||
                        s.call(i, e);
                  },
                }
              )
            );
        }
        enqueue(e) {
          var t,
            i,
            s,
            n = e.retriesPerformedSoFar || 0;
          e.retriesPerformedSoFar = n + 1;
          var r =
              ((s =
                (Math.random() - 0.5) *
                ((i = Math.min(18e5, (t = 3e3 * Math.pow(2, n)))) - t / 2)),
              Math.ceil(i + s)),
            o = Date.now() + r;
          this.queue.push({ retryAt: o, requestOptions: e });
          var a = "Enqueued failed request for retry in ".concat(r);
          navigator.onLine || (a += " (Browser is offline)"),
            z.warn(a),
            this.isPolling || ((this.isPolling = !0), this.poll());
        }
        poll() {
          this.poller && clearTimeout(this.poller),
            (this.poller = setTimeout(() => {
              this.areWeOnline && this.queue.length > 0 && this.flush(),
                this.poll();
            }, this.pollIntervalMs));
        }
        flush() {
          var e = Date.now(),
            t = [],
            i = this.queue.filter((i) => i.retryAt < e || (t.push(i), !1));
          if (((this.queue = t), i.length > 0))
            for (var { requestOptions: s } of i) this.retriableRequest(s);
        }
        unload() {
          for (var { requestOptions: e } of (this.poller &&
            (clearTimeout(this.poller), (this.poller = void 0)),
          this.queue))
            try {
              this.instance._send_request(
                J(J({}, e), {}, { transport: "sendBeacon" })
              );
            } catch (e) {
              z.error(e);
            }
          this.queue = [];
        }
      }
      var sD,
        sN,
        sq = j("[SessionId]");
      class sB {
        constructor(e, t, i) {
          if ((Y(this, "_sessionIdChangedHandlers", []), !e.persistence))
            throw Error(
              "SessionIdManager requires a PostHogPersistence instance"
            );
          if (e.config.__preview_experimental_cookieless_mode)
            throw Error(
              "SessionIdManager cannot be used with __preview_experimental_cookieless_mode"
            );
          (this.config = e.config),
            (this.persistence = e.persistence),
            (this._windowId = void 0),
            (this._sessionId = void 0),
            (this._sessionStartTimestamp = null),
            (this._sessionActivityTimestamp = null),
            (this._sessionIdGenerator = t || e3),
            (this._windowIdGenerator = i || e3);
          var s,
            n = this.config.persistence_name || this.config.token,
            r = this.config.session_idle_timeout_seconds || 1800;
          if (
            ((this._sessionTimeoutMs =
              1e3 * iq(r, 60, 36e3, "session_idle_timeout_seconds", 1800)),
            e.register({
              $configured_session_timeout_ms: this._sessionTimeoutMs,
            }),
            this.resetIdleTimer(),
            (this._window_id_storage_key = "ph_" + n + "_window_id"),
            (this._primary_window_exists_storage_key =
              "ph_" + n + "_primary_window_exists"),
            this._canUseSessionStorage())
          ) {
            var o = tr.parse(this._window_id_storage_key),
              a = tr.parse(this._primary_window_exists_storage_key);
            o && !a
              ? (this._windowId = o)
              : tr.remove(this._window_id_storage_key),
              tr.set(this._primary_window_exists_storage_key, !0);
          }
          if (
            null !== (s = this.config.bootstrap) &&
            void 0 !== s &&
            s.sessionID
          )
            try {
              var l = ((e) => {
                var t = e.replace(/-/g, "");
                if (32 !== t.length) throw Error("Not a valid UUID");
                if ("7" !== t[12]) throw Error("Not a UUIDv7");
                return parseInt(t.substring(0, 12), 16);
              })(this.config.bootstrap.sessionID);
              this._setSessionId(
                this.config.bootstrap.sessionID,
                new Date().getTime(),
                l
              );
            } catch (e) {
              sq.error("Invalid sessionID in bootstrap", e);
            }
          this._listenToReloadWindow();
        }
        get sessionTimeoutMs() {
          return this._sessionTimeoutMs;
        }
        onSessionId(e) {
          return (
            O(this._sessionIdChangedHandlers) &&
              (this._sessionIdChangedHandlers = []),
            this._sessionIdChangedHandlers.push(e),
            this._sessionId && e(this._sessionId, this._windowId),
            () => {
              this._sessionIdChangedHandlers =
                this._sessionIdChangedHandlers.filter((t) => t !== e);
            }
          );
        }
        _canUseSessionStorage() {
          return (
            "memory" !== this.config.persistence &&
            !this.persistence.disabled &&
            tr.is_supported()
          );
        }
        _setWindowId(e) {
          e !== this._windowId &&
            ((this._windowId = e),
            this._canUseSessionStorage() &&
              tr.set(this._window_id_storage_key, e));
        }
        _getWindowId() {
          return this._windowId
            ? this._windowId
            : this._canUseSessionStorage()
            ? tr.parse(this._window_id_storage_key)
            : null;
        }
        _setSessionId(e, t, i) {
          (e === this._sessionId &&
            t === this._sessionActivityTimestamp &&
            i === this._sessionStartTimestamp) ||
            ((this._sessionStartTimestamp = i),
            (this._sessionActivityTimestamp = t),
            (this._sessionId = e),
            this.persistence.register({ [eE]: [t, e, i] }));
        }
        _getSessionId() {
          if (
            this._sessionId &&
            this._sessionActivityTimestamp &&
            this._sessionStartTimestamp
          )
            return [
              this._sessionActivityTimestamp,
              this._sessionId,
              this._sessionStartTimestamp,
            ];
          var e = this.persistence.props[eE];
          return R(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0];
        }
        resetSessionId() {
          this._setSessionId(null, null, null);
        }
        _listenToReloadWindow() {
          null == o ||
            o.addEventListener("beforeunload", () => {
              this._canUseSessionStorage() &&
                tr.remove(this._primary_window_exists_storage_key);
            });
        }
        checkAndGetSessionAndWindowId() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          if (this.config.__preview_experimental_cookieless_mode)
            throw Error(
              "checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode"
            );
          var i = t || new Date().getTime(),
            [s, n, r] = this._getSessionId(),
            o = this._getWindowId(),
            a = N(r) && r > 0 && Math.abs(i - r) > 864e5,
            l = !1,
            c = !n,
            u = !e && Math.abs(i - s) > this.sessionTimeoutMs;
          c || u || a
            ? ((n = this._sessionIdGenerator()),
              (o = this._windowIdGenerator()),
              sq.info("new session ID generated", {
                sessionId: n,
                windowId: o,
                changeReason: {
                  noSessionId: c,
                  activityTimeout: u,
                  sessionPastMaximumLength: a,
                },
              }),
              (r = i),
              (l = !0))
            : o || ((o = this._windowIdGenerator()), (l = !0));
          var d = 0 === s || !e || a ? i : s,
            h = 0 === r ? new Date().getTime() : r;
          return (
            this._setWindowId(o),
            this._setSessionId(n, d, h),
            e || this.resetIdleTimer(),
            l &&
              this._sessionIdChangedHandlers.forEach((e) =>
                e(
                  n,
                  o,
                  l
                    ? {
                        noSessionId: c,
                        activityTimeout: u,
                        sessionPastMaximumLength: a,
                      }
                    : void 0
                )
              ),
            {
              sessionId: n,
              windowId: o,
              sessionStartTimestamp: h,
              changeReason: l
                ? {
                    noSessionId: c,
                    activityTimeout: u,
                    sessionPastMaximumLength: a,
                  }
                : void 0,
              lastActivityTimestamp: s,
            }
          );
        }
        resetIdleTimer() {
          clearTimeout(this._enforceIdleTimeout),
            (this._enforceIdleTimeout = setTimeout(() => {
              this.resetSessionId();
            }, 1.1 * this.sessionTimeoutMs));
        }
      }
      ((sG = sN || (sN = {})).US = "us"),
        (sG.EU = "eu"),
        (sG.CUSTOM = "custom");
      var sH = "i.posthog.com";
      class sU {
        constructor(e) {
          Y(this, "_regionCache", {}), (this.instance = e);
        }
        get apiHost() {
          var e = this.instance.config.api_host.trim().replace(/\/$/, "");
          return "https://app.posthog.com" === e
            ? "https://us.i.posthog.com"
            : e;
        }
        get uiHost() {
          var e,
            t =
              null === (e = this.instance.config.ui_host) || void 0 === e
                ? void 0
                : e.replace(/\/$/, "");
          return (
            t || (t = this.apiHost.replace(".".concat(sH), ".posthog.com")),
            "https://app.posthog.com" === t ? "https://us.posthog.com" : t
          );
        }
        get region() {
          return (
            this._regionCache[this.apiHost] ||
              (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(
                this.apiHost
              )
                ? (this._regionCache[this.apiHost] = sN.US)
                : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(
                    this.apiHost
                  )
                ? (this._regionCache[this.apiHost] = sN.EU)
                : (this._regionCache[this.apiHost] = sN.CUSTOM)),
            this._regionCache[this.apiHost]
          );
        }
        endpointFor(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if ((t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e))
            return this.uiHost + t;
          if (this.region === sN.CUSTOM) return this.apiHost + t;
          var i = sH + t;
          switch (e) {
            case "assets":
              return "https://".concat(this.region, "-assets.").concat(i);
            case "api":
              return "https://".concat(this.region, ".").concat(i);
          }
        }
      }
      var sz = "posthog-js";
      function sj(e) {
        var {
          organization: t,
          projectId: i,
          prefix: s,
          severityAllowList: n = ["error"],
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (r) => {
          if (!("*" === n || n.includes(r.level)) || !e.__loaded) return r;
          r.tags || (r.tags = {});
          var o,
            a,
            l,
            c,
            u,
            d = e.requestRouter.endpointFor(
              "ui",
              "/project/"
                .concat(e.config.token, "/person/")
                .concat(e.get_distinct_id())
            );
          (r.tags["PostHog Person URL"] = d),
            e.sessionRecordingStarted() &&
              (r.tags["PostHog Recording URL"] = e.get_session_replay_url({
                withTimestamp: !0,
              }));
          var h =
            (null === (o = r.exception) || void 0 === o ? void 0 : o.values) ||
            [];
          h.map((e) => {
            e.stacktrace && (e.stacktrace.type = "raw");
          });
          var _ = {
            $exception_message:
              (null === (a = h[0]) || void 0 === a ? void 0 : a.value) ||
              r.message,
            $exception_type:
              null === (l = h[0]) || void 0 === l ? void 0 : l.type,
            $exception_personURL: d,
            $exception_level: r.level,
            $exception_list: h,
            $sentry_event_id: r.event_id,
            $sentry_exception: r.exception,
            $sentry_exception_message:
              (null === (c = h[0]) || void 0 === c ? void 0 : c.value) ||
              r.message,
            $sentry_exception_type:
              null === (u = h[0]) || void 0 === u ? void 0 : u.type,
            $sentry_tags: r.tags,
          };
          return (
            t &&
              i &&
              (_.$sentry_url =
                (s || "https://sentry.io/organizations/") +
                t +
                "/issues/?project=" +
                i +
                "&query=" +
                r.event_id),
            e.exceptions.sendExceptionEvent(_),
            r
          );
        };
      }
      class sW {
        constructor(e, t, i, s, n) {
          (this.name = sz),
            (this.setupOnce = function (r) {
              r(
                sj(e, {
                  organization: t,
                  projectId: i,
                  prefix: s,
                  severityAllowList: n,
                })
              );
            });
        }
      }
      var sG,
        sV,
        sJ,
        sY,
        sK = j("[SegmentIntegration]");
      class sX {
        constructor(e) {
          this._instance = e;
        }
        doPageView(e) {
          var t,
            i = this._previousPageViewProperties(e);
          return (
            (this._currentPath =
              null !== (t = null == o ? void 0 : o.location.pathname) &&
              void 0 !== t
                ? t
                : ""),
            this._instance.scrollManager.resetContext(),
            (this._prevPageviewTimestamp = e),
            i
          );
        }
        doPageLeave(e) {
          return this._previousPageViewProperties(e);
        }
        _previousPageViewProperties(e) {
          var t = this._currentPath,
            i = this._prevPageviewTimestamp,
            s = this._instance.scrollManager.getContext();
          if (!i) return {};
          var n = {};
          if (s) {
            var {
              maxScrollHeight: r,
              lastScrollY: o,
              maxScrollY: a,
              maxContentHeight: l,
              lastContentY: c,
              maxContentY: u,
            } = s;
            O(r) ||
              O(o) ||
              O(a) ||
              O(l) ||
              O(c) ||
              O(u) ||
              ((r = Math.ceil(r)),
              (o = Math.ceil(o)),
              (a = Math.ceil(a)),
              (l = Math.ceil(l)),
              (c = Math.ceil(c)),
              (u = Math.ceil(u)),
              (n = {
                $prev_pageview_last_scroll: o,
                $prev_pageview_last_scroll_percentage:
                  r <= 1 ? 1 : iq(o / r, 0, 1),
                $prev_pageview_max_scroll: a,
                $prev_pageview_max_scroll_percentage:
                  r <= 1 ? 1 : iq(a / r, 0, 1),
                $prev_pageview_last_content: c,
                $prev_pageview_last_content_percentage:
                  l <= 1 ? 1 : iq(c / l, 0, 1),
                $prev_pageview_max_content: u,
                $prev_pageview_max_content_percentage:
                  l <= 1 ? 1 : iq(u / l, 0, 1),
              }));
          }
          return (
            t && (n.$prev_pageview_pathname = t),
            i &&
              (n.$prev_pageview_duration = (e.getTime() - i.getTime()) / 1e3),
            n
          );
        }
      }
      ((s1 = sV || (sV = {})).Popover = "popover"),
        (s1.API = "api"),
        (s1.Widget = "widget"),
        ((s2 = sJ || (sJ = {})).Open = "open"),
        (s2.MultipleChoice = "multiple_choice"),
        (s2.SingleChoice = "single_choice"),
        (s2.Rating = "rating"),
        (s2.Link = "link"),
        ((s3 = sY || (sY = {})).NextQuestion = "next_question"),
        (s3.End = "end"),
        (s3.ResponseBased = "response_based"),
        (s3.SpecificQuestion = "specific_question");
      class sQ {
        constructor() {
          Y(this, "events", {}), (this.events = {});
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = []),
            this.events[e].push(t),
            () => {
              this.events[e] = this.events[e].filter((e) => e !== t);
            }
          );
        }
        emit(e, t) {
          for (var i of this.events[e] || []) i(t);
          for (var s of this.events["*"] || []) s(e, t);
        }
      }
      class sZ {
        constructor(e) {
          Y(this, "_debugEventEmitter", new sQ()),
            Y(
              this,
              "checkStep",
              (e, t) =>
                this.checkStepEvent(e, t) &&
                this.checkStepUrl(e, t) &&
                this.checkStepElement(e, t)
            ),
            Y(
              this,
              "checkStepEvent",
              (e, t) =>
                null == t ||
                !t.event ||
                (null == e ? void 0 : e.event) ===
                  (null == t ? void 0 : t.event)
            ),
            (this.instance = e),
            (this.actionEvents = new Set()),
            (this.actionRegistry = new Set());
        }
        init() {
          var e, t;
          O(
            null === (e = this.instance) || void 0 === e
              ? void 0
              : e._addCaptureHook
          ) ||
            null === (t = this.instance) ||
            void 0 === t ||
            t._addCaptureHook((e, t) => {
              this.on(e, t);
            });
        }
        register(e) {
          var t, i;
          if (
            !O(
              null === (t = this.instance) || void 0 === t
                ? void 0
                : t._addCaptureHook
            ) &&
            (e.forEach((e) => {
              var t, i;
              null === (t = this.actionRegistry) || void 0 === t || t.add(e),
                null === (i = e.steps) ||
                  void 0 === i ||
                  i.forEach((e) => {
                    var t;
                    null === (t = this.actionEvents) ||
                      void 0 === t ||
                      t.add((null == e ? void 0 : e.event) || "");
                  });
            }),
            null !== (i = this.instance) && void 0 !== i && i.autocapture)
          ) {
            var s,
              n = new Set();
            e.forEach((e) => {
              var t;
              null === (t = e.steps) ||
                void 0 === t ||
                t.forEach((e) => {
                  null != e &&
                    e.selector &&
                    n.add(null == e ? void 0 : e.selector);
                });
            }),
              null === (s = this.instance) ||
                void 0 === s ||
                s.autocapture.setElementSelectors(n);
          }
        }
        on(e, t) {
          var i;
          null != t &&
            0 != e.length &&
            (this.actionEvents.has(e) ||
              this.actionEvents.has(null == t ? void 0 : t.event)) &&
            this.actionRegistry &&
            (null === (i = this.actionRegistry) || void 0 === i
              ? void 0
              : i.size) > 0 &&
            this.actionRegistry.forEach((e) => {
              this.checkAction(t, e) &&
                this._debugEventEmitter.emit("actionCaptured", e.name);
            });
        }
        _addActionHook(e) {
          this.onAction("actionCaptured", (t) => e(t));
        }
        checkAction(e, t) {
          if (null == (null == t ? void 0 : t.steps)) return !1;
          for (var i of t.steps) if (this.checkStep(e, i)) return !0;
          return !1;
        }
        onAction(e, t) {
          return this._debugEventEmitter.on(e, t);
        }
        checkStepUrl(e, t) {
          if (null != t && t.url) {
            var i,
              s =
                null == e || null === (i = e.properties) || void 0 === i
                  ? void 0
                  : i.$current_url;
            if (
              !s ||
              "string" != typeof s ||
              !sZ.matchString(
                s,
                null == t ? void 0 : t.url,
                (null == t ? void 0 : t.url_matching) || "contains"
              )
            )
              return !1;
          }
          return !0;
        }
        static matchString(e, t, i) {
          switch (i) {
            case "regex":
              return !!o && tl(e, t);
            case "exact":
              return t === e;
            case "contains":
              return tl(
                e,
                sZ.escapeStringRegexp(t).replace(/_/g, ".").replace(/%/g, ".*")
              );
            default:
              return !1;
          }
        }
        static escapeStringRegexp(e) {
          return e
            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            .replace(/-/g, "\\x2d");
        }
        checkStepElement(e, t) {
          if (
            ((null != t && t.href) ||
              (null != t && t.tag_name) ||
              (null != t && t.text)) &&
            !this.getElementsList(e).some(
              (e) =>
                !(
                  null != t &&
                  t.href &&
                  !sZ.matchString(
                    e.href || "",
                    null == t ? void 0 : t.href,
                    (null == t ? void 0 : t.href_matching) || "exact"
                  )
                ) &&
                (null == t ||
                  !t.tag_name ||
                  e.tag_name === (null == t ? void 0 : t.tag_name)) &&
                !(
                  null != t &&
                  t.text &&
                  !sZ.matchString(
                    e.text || "",
                    null == t ? void 0 : t.text,
                    (null == t ? void 0 : t.text_matching) || "exact"
                  ) &&
                  !sZ.matchString(
                    e.$el_text || "",
                    null == t ? void 0 : t.text,
                    (null == t ? void 0 : t.text_matching) || "exact"
                  )
                )
            )
          )
            return !1;
          if (null != t && t.selector) {
            var i,
              s =
                null == e || null === (i = e.properties) || void 0 === i
                  ? void 0
                  : i.$element_selectors;
            if (!s || !s.includes(null == t ? void 0 : t.selector)) return !1;
          }
          return !0;
        }
        getElementsList(e) {
          return null == (null == e ? void 0 : e.properties.$elements)
            ? []
            : null == e
            ? void 0
            : e.properties.$elements;
        }
      }
      class s0 {
        constructor(e) {
          (this.instance = e),
            (this.eventToSurveys = new Map()),
            (this.actionToSurveys = new Map());
        }
        register(e) {
          var t;
          O(
            null === (t = this.instance) || void 0 === t
              ? void 0
              : t._addCaptureHook
          ) ||
            (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e));
        }
        setupActionBasedSurveys(e) {
          var t = e.filter((e) => {
            var t, i, s, n;
            return (
              (null === (t = e.conditions) || void 0 === t
                ? void 0
                : t.actions) &&
              (null === (i = e.conditions) ||
              void 0 === i ||
              null === (s = i.actions) ||
              void 0 === s ||
              null === (n = s.values) ||
              void 0 === n
                ? void 0
                : n.length) > 0
            );
          });
          0 !== t.length &&
            (null == this.actionMatcher &&
              ((this.actionMatcher = new sZ(this.instance)),
              this.actionMatcher.init(),
              this.actionMatcher._addActionHook((e) => {
                this.onAction(e);
              })),
            t.forEach((e) => {
              var t, i, s, n, r, o, a, l, c, u;
              e.conditions &&
                null !== (t = e.conditions) &&
                void 0 !== t &&
                t.actions &&
                null !== (i = e.conditions) &&
                void 0 !== i &&
                null !== (s = i.actions) &&
                void 0 !== s &&
                s.values &&
                (null === (n = e.conditions) ||
                void 0 === n ||
                null === (r = n.actions) ||
                void 0 === r ||
                null === (o = r.values) ||
                void 0 === o
                  ? void 0
                  : o.length) > 0 &&
                (null === (a = this.actionMatcher) ||
                  void 0 === a ||
                  a.register(e.conditions.actions.values),
                null === (l = e.conditions) ||
                  void 0 === l ||
                  null === (c = l.actions) ||
                  void 0 === c ||
                  null === (u = c.values) ||
                  void 0 === u ||
                  u.forEach((t) => {
                    if (t && t.name) {
                      var i = this.actionToSurveys.get(t.name);
                      i && i.push(e.id),
                        this.actionToSurveys.set(t.name, i || [e.id]);
                    }
                  }));
            }));
        }
        setupEventBasedSurveys(e) {
          var t;
          0 !==
            e.filter((e) => {
              var t, i, s, n;
              return (
                (null === (t = e.conditions) || void 0 === t
                  ? void 0
                  : t.events) &&
                (null === (i = e.conditions) ||
                void 0 === i ||
                null === (s = i.events) ||
                void 0 === s ||
                null === (n = s.values) ||
                void 0 === n
                  ? void 0
                  : n.length) > 0
              );
            }).length &&
            (null === (t = this.instance) ||
              void 0 === t ||
              t._addCaptureHook((e, t) => {
                this.onEvent(e, t);
              }),
            e.forEach((e) => {
              var t, i, s;
              null === (t = e.conditions) ||
                void 0 === t ||
                null === (i = t.events) ||
                void 0 === i ||
                null === (s = i.values) ||
                void 0 === s ||
                s.forEach((t) => {
                  if (t && t.name) {
                    var i = this.eventToSurveys.get(t.name);
                    i && i.push(e.id),
                      this.eventToSurveys.set(t.name, i || [e.id]);
                  }
                });
            }));
        }
        onEvent(e, t) {
          var i,
            s,
            n =
              (null === (i = this.instance) ||
              void 0 === i ||
              null === (s = i.persistence) ||
              void 0 === s
                ? void 0
                : s.props[e$]) || [];
          if (s0.SURVEY_SHOWN_EVENT_NAME == e && t && n.length > 0) {
            var r,
              o =
                null == t || null === (r = t.properties) || void 0 === r
                  ? void 0
                  : r.$survey_id;
            if (o) {
              var a = n.indexOf(o);
              a >= 0 && (n.splice(a, 1), this._updateActivatedSurveys(n));
            }
          } else
            this.eventToSurveys.has(e) &&
              this._updateActivatedSurveys(
                n.concat(this.eventToSurveys.get(e) || [])
              );
        }
        onAction(e) {
          var t,
            i,
            s =
              (null === (t = this.instance) ||
              void 0 === t ||
              null === (i = t.persistence) ||
              void 0 === i
                ? void 0
                : i.props[e$]) || [];
          this.actionToSurveys.has(e) &&
            this._updateActivatedSurveys(
              s.concat(this.actionToSurveys.get(e) || [])
            );
        }
        _updateActivatedSurveys(e) {
          var t, i;
          null === (t = this.instance) ||
            void 0 === t ||
            null === (i = t.persistence) ||
            void 0 === i ||
            i.register({ [e$]: [...new Set(e)] });
        }
        getSurveys() {
          var e, t;
          return (
            (null === (e = this.instance) ||
            void 0 === e ||
            null === (t = e.persistence) ||
            void 0 === t
              ? void 0
              : t.props[e$]) || []
          );
        }
        getEventToSurveys() {
          return this.eventToSurveys;
        }
        _getActionMatcher() {
          return this.actionMatcher;
        }
      }
      Y(s0, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
      var s1,
        s2,
        s3,
        s5,
        s6,
        s8,
        s4,
        s7,
        s9,
        ne,
        nt,
        ni = {},
        ns = [],
        nn =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        nr = Array.isArray;
      function no(e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      }
      function na(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function nl(e, t, i, s, n) {
        var r = {
          type: e,
          props: t,
          key: i,
          ref: s,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == n ? ++s8 : n,
          __i: -1,
          __u: 0,
        };
        return null == n && null != s6.vnode && s6.vnode(r), r;
      }
      function nc(e) {
        return e.children;
      }
      function nu(e, t) {
        (this.props = e), (this.context = t);
      }
      function nd(e, t) {
        if (null == t) return e.__ ? nd(e.__, e.__i + 1) : null;
        for (var i; t < e.__k.length; t++)
          if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
        return "function" == typeof e.type ? nd(e) : null;
      }
      function nh(e) {
        ((!e.__d && (e.__d = !0) && s4.push(e) && !n_.__r++) ||
          s7 !== s6.debounceRendering) &&
          ((s7 = s6.debounceRendering) || s9)(n_);
      }
      function n_() {
        var e, t, i, s, n, r, o, a, l;
        for (s4.sort(ne); (e = s4.shift()); )
          e.__d &&
            ((t = s4.length),
            (s = void 0),
            (r = (n = (i = e).__v).__e),
            (a = []),
            (l = []),
            (o = i.__P) &&
              (((s = no({}, n)).__v = n.__v + 1),
              s6.vnode && s6.vnode(s),
              nb(
                o,
                s,
                n,
                i.__n,
                void 0 !== o.ownerSVGElement,
                32 & n.__u ? [r] : null,
                a,
                null == r ? nd(n) : r,
                !!(32 & n.__u),
                l
              ),
              (s.__.__k[s.__i] = s),
              (function (e, t, i) {
                t.__d = void 0;
                for (var s = 0; s < i.length; s++) ny(i[s], i[++s], i[++s]);
                s6.__c && s6.__c(t, e),
                  e.some(function (t) {
                    try {
                      (e = t.__h),
                        (t.__h = []),
                        e.some(function (e) {
                          e.call(t);
                        });
                    } catch (e) {
                      s6.__e(e, t.__v);
                    }
                  });
              })(a, s, l),
              s.__e != r &&
                (function e(t) {
                  var i, s;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, i = 0;
                      i < t.__k.length;
                      i++
                    )
                      if (null != (s = t.__k[i]) && null != s.__e) {
                        t.__e = t.__c.base = s.__e;
                        break;
                      }
                    return e(t);
                  }
                })(s)),
            s4.length > t && s4.sort(ne));
        n_.__r = 0;
      }
      function np(e, t, i, s, n, r, o, a, l, c, u) {
        var d,
          h,
          _,
          p,
          g,
          v = (s && s.__k) || ns,
          f = t.length;
        for (
          i.__d = l,
            (function (e, t, i) {
              var s,
                n,
                r,
                o,
                a,
                l = t.length,
                c = i.length,
                u = c,
                d = 0;
              for (e.__k = [], s = 0; s < l; s++)
                null !=
                (n = e.__k[s] =
                  null == (n = t[s]) ||
                  "boolean" == typeof n ||
                  "function" == typeof n
                    ? null
                    : "string" == typeof n ||
                      "number" == typeof n ||
                      "bigint" == typeof n ||
                      n.constructor == String
                    ? nl(null, n, null, null, n)
                    : nr(n)
                    ? nl(nc, { children: n }, null, null, null)
                    : void 0 === n.constructor && n.__b > 0
                    ? nl(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v)
                    : n)
                  ? ((n.__ = e),
                    (n.__b = e.__b + 1),
                    (a = (function (e, t, i, s) {
                      var n = e.key,
                        r = e.type,
                        o = i - 1,
                        a = i + 1,
                        l = t[i];
                      if (null === l || (l && n == l.key && r === l.type))
                        return i;
                      if (s > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
                        for (; o >= 0 || a < t.length; ) {
                          if (o >= 0) {
                            if (
                              (l = t[o]) &&
                              0 == (131072 & l.__u) &&
                              n == l.key &&
                              r === l.type
                            )
                              return o;
                            o--;
                          }
                          if (a < t.length) {
                            if (
                              (l = t[a]) &&
                              0 == (131072 & l.__u) &&
                              n == l.key &&
                              r === l.type
                            )
                              return a;
                            a++;
                          }
                        }
                      return -1;
                    })(n, i, (o = s + d), u)),
                    (n.__i = a),
                    (r = null),
                    -1 !== a && (u--, (r = i[a]) && (r.__u |= 131072)),
                    null == r || null === r.__v
                      ? (-1 == a && d--,
                        "function" != typeof n.type && (n.__u |= 65536))
                      : a !== o &&
                        (a === o + 1
                          ? d++
                          : a > o
                          ? u > l - o
                            ? (d += a - o)
                            : d--
                          : (d = a < o && a == o - 1 ? a - o : 0),
                        a !== s + d && (n.__u |= 65536)))
                  : (r = i[s]) &&
                    null == r.key &&
                    r.__e &&
                    (r.__e == e.__d && (e.__d = nd(r)),
                    nw(r, r, !1),
                    (i[s] = null),
                    u--);
              if (u)
                for (s = 0; s < c; s++)
                  null != (r = i[s]) &&
                    0 == (131072 & r.__u) &&
                    (r.__e == e.__d && (e.__d = nd(r)), nw(r, r));
            })(i, t, v),
            l = i.__d,
            d = 0;
          d < f;
          d++
        )
          null != (_ = i.__k[d]) &&
            "boolean" != typeof _ &&
            "function" != typeof _ &&
            ((h = -1 === _.__i ? ni : v[_.__i] || ni),
            (_.__i = d),
            nb(e, _, h, n, r, o, a, l, c, u),
            (p = _.__e),
            _.ref &&
              h.ref != _.ref &&
              (h.ref && ny(h.ref, null, _), u.push(_.ref, _.__c || p, _)),
            null == g && null != p && (g = p),
            65536 & _.__u || h.__k === _.__k
              ? (l = (function e(t, i, s) {
                  var n, r;
                  if ("function" == typeof t.type) {
                    for (n = t.__k, r = 0; n && r < n.length; r++)
                      n[r] && ((n[r].__ = t), (i = e(n[r], i, s)));
                    return i;
                  }
                  return (
                    t.__e != i &&
                      (s.insertBefore(t.__e, i || null), (i = t.__e)),
                    i && i.nextSibling
                  );
                })(_, l, e))
              : "function" == typeof _.type && void 0 !== _.__d
              ? (l = _.__d)
              : p && (l = p.nextSibling),
            (_.__d = void 0),
            (_.__u &= -196609));
        (i.__d = l), (i.__e = g);
      }
      function ng(e, t, i) {
        "-" === t[0]
          ? e.setProperty(t, null == i ? "" : i)
          : (e[t] =
              null == i
                ? ""
                : "number" != typeof i || nn.test(t)
                ? i
                : i + "px");
      }
      function nv(e, t, i, s, n) {
        var r;
        e: if ("style" === t) {
          if ("string" == typeof i) e.style.cssText = i;
          else {
            if (("string" == typeof s && (e.style.cssText = s = ""), s))
              for (t in s) (i && t in i) || ng(e.style, t, "");
            if (i) for (t in i) (s && i[t] === s[t]) || ng(e.style, t, i[t]);
          }
        } else if ("o" === t[0] && "n" === t[1])
          (r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1"))),
            (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + r] = i),
            i
              ? s
                ? (i.u = s.u)
                : ((i.u = Date.now()), e.addEventListener(t, r ? nm : nf, r))
              : e.removeEventListener(t, r ? nm : nf, r);
        else {
          if (n) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" !== t &&
            "height" !== t &&
            "href" !== t &&
            "list" !== t &&
            "form" !== t &&
            "tabIndex" !== t &&
            "download" !== t &&
            "rowSpan" !== t &&
            "colSpan" !== t &&
            "role" !== t &&
            t in e
          )
            try {
              e[t] = null == i ? "" : i;
              break e;
            } catch (e) {}
          "function" == typeof i ||
            (null == i || (!1 === i && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, i));
        }
      }
      function nf(e) {
        var t = this.l[e.type + !1];
        if (e.t) {
          if (e.t <= t.u) return;
        } else e.t = Date.now();
        return t(s6.event ? s6.event(e) : e);
      }
      function nm(e) {
        return this.l[e.type + !0](s6.event ? s6.event(e) : e);
      }
      function nb(e, t, i, s, n, r, o, a, l, c) {
        var u,
          d,
          h,
          _,
          p,
          g,
          v,
          f,
          m,
          b,
          y,
          w,
          S,
          E,
          k,
          x = t.type;
        if (void 0 !== t.constructor) return null;
        128 & i.__u && ((l = !!(32 & i.__u)), (r = [(a = t.__e = i.__e)])),
          (u = s6.__b) && u(t);
        e: if ("function" == typeof x)
          try {
            if (
              ((f = t.props),
              (m = (u = x.contextType) && s[u.__c]),
              (b = u ? (m ? m.props.value : u.__) : s),
              i.__c
                ? (v = (d = t.__c = i.__c).__ = d.__E)
                : ("prototype" in x && x.prototype.render
                    ? (t.__c = d = new x(f, b))
                    : ((t.__c = d = new nu(f, b)),
                      (d.constructor = x),
                      (d.render = nS)),
                  m && m.sub(d),
                  (d.props = f),
                  d.state || (d.state = {}),
                  (d.context = b),
                  (d.__n = s),
                  (h = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              null == d.__s && (d.__s = d.state),
              null != x.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = no({}, d.__s)),
                no(d.__s, x.getDerivedStateFromProps(f, d.__s))),
              (_ = d.props),
              (p = d.state),
              (d.__v = t),
              h)
            )
              null == x.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
              if (
                (null == x.getDerivedStateFromProps &&
                  f !== _ &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(f, b),
                !d.__e &&
                  ((null != d.shouldComponentUpdate &&
                    !1 === d.shouldComponentUpdate(f, d.__s, b)) ||
                    t.__v === i.__v))
              ) {
                for (
                  t.__v !== i.__v &&
                    ((d.props = f), (d.state = d.__s), (d.__d = !1)),
                    t.__e = i.__e,
                    t.__k = i.__k,
                    t.__k.forEach(function (e) {
                      e && (e.__ = t);
                    }),
                    y = 0;
                  y < d._sb.length;
                  y++
                )
                  d.__h.push(d._sb[y]);
                (d._sb = []), d.__h.length && o.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(f, d.__s, b),
                null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(_, p, g);
                  });
            }
            if (
              ((d.context = b),
              (d.props = f),
              (d.__P = e),
              (d.__e = !1),
              (w = s6.__r),
              (S = 0),
              "prototype" in x && x.prototype.render)
            ) {
              for (
                d.state = d.__s,
                  d.__d = !1,
                  w && w(t),
                  u = d.render(d.props, d.state, d.context),
                  E = 0;
                E < d._sb.length;
                E++
              )
                d.__h.push(d._sb[E]);
              d._sb = [];
            } else
              do
                (d.__d = !1),
                  w && w(t),
                  (u = d.render(d.props, d.state, d.context)),
                  (d.state = d.__s);
              while (d.__d && ++S < 25);
            (d.state = d.__s),
              null != d.getChildContext &&
                (s = no(no({}, s), d.getChildContext())),
              h ||
                null == d.getSnapshotBeforeUpdate ||
                (g = d.getSnapshotBeforeUpdate(_, p)),
              np(
                e,
                nr(
                  (k =
                    null != u && u.type === nc && null == u.key
                      ? u.props.children
                      : u)
                )
                  ? k
                  : [k],
                t,
                i,
                s,
                n,
                r,
                o,
                a,
                l,
                c
              ),
              (d.base = t.__e),
              (t.__u &= -161),
              d.__h.length && o.push(d),
              v && (d.__E = d.__ = null);
          } catch (e) {
            (t.__v = null),
              l || null != r
                ? ((t.__e = a),
                  (t.__u |= l ? 160 : 32),
                  (r[r.indexOf(a)] = null))
                : ((t.__e = i.__e), (t.__k = i.__k)),
              s6.__e(e, t, i);
          }
        else
          null == r && t.__v === i.__v
            ? ((t.__k = i.__k), (t.__e = i.__e))
            : (t.__e = (function (e, t, i, s, n, r, o, a, l) {
                var c,
                  u,
                  d,
                  h,
                  _,
                  p,
                  g,
                  v = i.props,
                  f = t.props,
                  m = t.type;
                if (("svg" === m && (n = !0), null != r)) {
                  for (c = 0; c < r.length; c++)
                    if (
                      (_ = r[c]) &&
                      "setAttribute" in _ == !!m &&
                      (m ? _.localName === m : 3 === _.nodeType)
                    ) {
                      (e = _), (r[c] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === m) return document.createTextNode(f);
                  (e = n
                    ? document.createElementNS("http://www.w3.org/2000/svg", m)
                    : document.createElement(m, f.is && f)),
                    (r = null),
                    (a = !1);
                }
                if (null === m) v === f || (a && e.data === f) || (e.data = f);
                else {
                  if (
                    ((r = r && s5.call(e.childNodes)),
                    (v = i.props || ni),
                    !a && null != r)
                  )
                    for (v = {}, c = 0; c < e.attributes.length; c++)
                      v[(_ = e.attributes[c]).name] = _.value;
                  for (c in v)
                    (_ = v[c]),
                      "children" == c ||
                        ("dangerouslySetInnerHTML" == c
                          ? (d = _)
                          : "key" === c || c in f || nv(e, c, null, _, n));
                  for (c in f)
                    (_ = f[c]),
                      "children" == c
                        ? (h = _)
                        : "dangerouslySetInnerHTML" == c
                        ? (u = _)
                        : "value" == c
                        ? (p = _)
                        : "checked" == c
                        ? (g = _)
                        : "key" === c ||
                          (a && "function" != typeof _) ||
                          v[c] === _ ||
                          nv(e, c, _, v[c], n);
                  if (u)
                    a ||
                      (d &&
                        (u.__html === d.__html || u.__html === e.innerHTML)) ||
                      (e.innerHTML = u.__html),
                      (t.__k = []);
                  else if (
                    (d && (e.innerHTML = ""),
                    np(
                      e,
                      nr(h) ? h : [h],
                      t,
                      i,
                      s,
                      n && "foreignObject" !== m,
                      r,
                      o,
                      r ? r[0] : i.__k && nd(i, 0),
                      a,
                      l
                    ),
                    null != r)
                  )
                    for (c = r.length; c--; ) null != r[c] && na(r[c]);
                  a ||
                    ((c = "value"),
                    void 0 === p ||
                      (p === e[c] &&
                        ("progress" !== m || p) &&
                        ("option" !== m || p === v[c])) ||
                      nv(e, c, p, v[c], !1),
                    (c = "checked"),
                    void 0 !== g && g !== e[c] && nv(e, c, g, v[c], !1));
                }
                return e;
              })(i.__e, t, i, s, n, r, o, l, c));
        (u = s6.diffed) && u(t);
      }
      function ny(e, t, i) {
        try {
          "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
          s6.__e(e, i);
        }
      }
      function nw(e, t, i) {
        var s, n;
        if (
          (s6.unmount && s6.unmount(e),
          (s = e.ref) && ((s.current && s.current !== e.__e) || ny(s, null, t)),
          null != (s = e.__c))
        ) {
          if (s.componentWillUnmount)
            try {
              s.componentWillUnmount();
            } catch (e) {
              s6.__e(e, t);
            }
          (s.base = s.__P = null), (e.__c = void 0);
        }
        if ((s = e.__k))
          for (n = 0; n < s.length; n++)
            s[n] && nw(s[n], t, i || "function" != typeof e.type);
        i || null == e.__e || na(e.__e), (e.__ = e.__e = e.__d = void 0);
      }
      function nS(e, t, i) {
        return this.constructor(e, i);
      }
      (s5 = ns.slice),
        (s6 = {
          __e: function (e, t, i, s) {
            for (var n, r, o; (t = t.__); )
              if ((n = t.__c) && !n.__)
                try {
                  if (
                    ((r = n.constructor) &&
                      null != r.getDerivedStateFromError &&
                      (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
                    null != n.componentDidCatch &&
                      (n.componentDidCatch(e, s || {}), (o = n.__d)),
                    o)
                  )
                    return (n.__E = n);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (s8 = 0),
        (nu.prototype.setState = function (e, t) {
          var i;
          (i =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = no({}, this.state))),
            "function" == typeof e && (e = e(no({}, i), this.props)),
            e && no(i, e),
            null != e && this.__v && (t && this._sb.push(t), nh(this));
        }),
        (nu.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), nh(this));
        }),
        (nu.prototype.render = nc),
        (s4 = []),
        (s9 =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (ne = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (n_.__r = 0),
        (nt = 0),
        (ri = {
          isPreviewMode: !1,
          previewPageIndex: 0,
          handleCloseSurveyPopup: () => {},
          isPopup: !0,
        }),
        ((rn = {
          __c: (rs = "__cC" + nt++),
          __: ri,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var t, i;
            return (
              this.getChildContext ||
                ((t = []),
                ((i = {})[rs] = this),
                (this.getChildContext = function () {
                  return i;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    t.some(function (e) {
                      (e.__e = !0), nh(e);
                    });
                }),
                (this.sub = function (e) {
                  t.push(e);
                  var i = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    t.splice(t.indexOf(e), 1), i && i.call(e);
                  };
                })),
              e.children
            );
          },
        }).Provider.__ = rn.Consumer.contextType =
          rn);
      var nE = j("[Surveys]"),
        nk = {
          icontains: (e) =>
            !!o && o.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
          not_icontains: (e) =>
            !!o &&
            -1 === o.location.href.toLowerCase().indexOf(e.toLowerCase()),
          regex: (e) => !!o && tl(o.location.href, e),
          not_regex: (e) => !!o && !tl(o.location.href, e),
          exact: (e) => (null == o ? void 0 : o.location.href) === e,
          is_not: (e) => (null == o ? void 0 : o.location.href) !== e,
        };
      class nx {
        constructor(e) {
          (this.instance = e), (this._surveyEventReceiver = null);
        }
        onRemoteConfig(e) {
          (this._decideServerResponse = !!e.surveys), this.loadIfEnabled();
        }
        reset() {
          localStorage.removeItem("lastSeenSurveyDate"),
            (() => {
              for (var e = [], t = 0; t < localStorage.length; t++) {
                var i = localStorage.key(t);
                null != i && i.startsWith("seenSurvey_") && e.push(i);
              }
              return e;
            })().forEach((e) => localStorage.removeItem(e));
        }
        loadIfEnabled() {
          var e,
            t,
            i,
            s =
              null == m ||
              null === (e = m.__PosthogExtensions__) ||
              void 0 === e
                ? void 0
                : e.generateSurveys;
          this.instance.config.disable_surveys ||
            !this._decideServerResponse ||
            s ||
            (null == this._surveyEventReceiver &&
              (this._surveyEventReceiver = new s0(this.instance)),
            null === (t = m.__PosthogExtensions__) ||
              void 0 === t ||
              null === (i = t.loadExternalDependency) ||
              void 0 === i ||
              i.call(t, this.instance, "surveys", (e) => {
                var t, i;
                if (e) return nE.error("Could not load surveys script", e);
                this._surveyManager =
                  null === (t = m.__PosthogExtensions__) ||
                  void 0 === t ||
                  null === (i = t.generateSurveys) ||
                  void 0 === i
                    ? void 0
                    : i.call(t, this.instance);
              }));
        }
        getSurveys(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.instance.config.disable_surveys) return e([]);
          null == this._surveyEventReceiver &&
            (this._surveyEventReceiver = new s0(this.instance));
          var i = this.instance.get_property(eT);
          if (i && !t) return e(i);
          this.instance._send_request({
            url: this.instance.requestRouter.endpointFor(
              "api",
              "/api/surveys/?token=".concat(this.instance.config.token)
            ),
            method: "GET",
            callback: (t) => {
              if (200 !== t.statusCode || !t.json) return e([]);
              var i,
                s,
                n = t.json.surveys || [],
                r = n.filter((e) => {
                  var t, i, s, n, r, o, a, l, c, u, d, h;
                  return (
                    ((null === (t = e.conditions) || void 0 === t
                      ? void 0
                      : t.events) &&
                      (null === (i = e.conditions) ||
                      void 0 === i ||
                      null === (s = i.events) ||
                      void 0 === s
                        ? void 0
                        : s.values) &&
                      (null === (n = e.conditions) ||
                      void 0 === n ||
                      null === (r = n.events) ||
                      void 0 === r ||
                      null === (o = r.values) ||
                      void 0 === o
                        ? void 0
                        : o.length) > 0) ||
                    ((null === (a = e.conditions) || void 0 === a
                      ? void 0
                      : a.actions) &&
                      (null === (l = e.conditions) ||
                      void 0 === l ||
                      null === (c = l.actions) ||
                      void 0 === c
                        ? void 0
                        : c.values) &&
                      (null === (u = e.conditions) ||
                      void 0 === u ||
                      null === (d = u.actions) ||
                      void 0 === d ||
                      null === (h = d.values) ||
                      void 0 === h
                        ? void 0
                        : h.length) > 0)
                  );
                });
              return (
                r.length > 0 &&
                  (null === (s = this._surveyEventReceiver) ||
                    void 0 === s ||
                    s.register(r)),
                null === (i = this.instance.persistence) ||
                  void 0 === i ||
                  i.register({ [eT]: n }),
                e(n)
              );
            },
          });
        }
        getActiveMatchingSurveys(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.getSurveys((t) => {
            var i,
              s = t
                .filter((e) => !(!e.start_date || e.end_date))
                .filter((e) => {
                  if (!e.conditions) return !0;
                  var t,
                    i,
                    s,
                    n,
                    r =
                      null === (t = e.conditions) ||
                      void 0 === t ||
                      !t.url ||
                      nk[
                        null !==
                          (i =
                            null === (s = e.conditions) || void 0 === s
                              ? void 0
                              : s.urlMatchType) && void 0 !== i
                          ? i
                          : "icontains"
                      ](e.conditions.url),
                    o =
                      null === (n = e.conditions) ||
                      void 0 === n ||
                      !n.selector ||
                      (null == h
                        ? void 0
                        : h.querySelector(e.conditions.selector));
                  return r && o;
                }),
              n =
                null === (i = this._surveyEventReceiver) || void 0 === i
                  ? void 0
                  : i.getSurveys();
            return e(
              s.filter((e) => {
                if (
                  !(
                    e.linked_flag_key ||
                    e.targeting_flag_key ||
                    e.internal_targeting_flag_key ||
                    (null !== (t = e.feature_flag_keys) &&
                      void 0 !== t &&
                      t.length)
                  )
                )
                  return !0;
                var t,
                  i,
                  s,
                  r,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d,
                  h,
                  _ =
                    !e.linked_flag_key ||
                    this.instance.featureFlags.isFeatureEnabled(
                      e.linked_flag_key
                    ),
                  p =
                    !e.targeting_flag_key ||
                    this.instance.featureFlags.isFeatureEnabled(
                      e.targeting_flag_key
                    ),
                  g =
                    (null === (i = e.conditions) || void 0 === i
                      ? void 0
                      : i.events) &&
                    (null === (s = e.conditions) ||
                    void 0 === s ||
                    null === (r = s.events) ||
                    void 0 === r
                      ? void 0
                      : r.values) &&
                    (null === (o = e.conditions) ||
                    void 0 === o ||
                    null === (a = o.events) ||
                    void 0 === a
                      ? void 0
                      : a.values.length) > 0,
                  v =
                    (null === (l = e.conditions) || void 0 === l
                      ? void 0
                      : l.actions) &&
                    (null === (c = e.conditions) ||
                    void 0 === c ||
                    null === (u = c.actions) ||
                    void 0 === u
                      ? void 0
                      : u.values) &&
                    (null === (d = e.conditions) ||
                    void 0 === d ||
                    null === (h = d.actions) ||
                    void 0 === h
                      ? void 0
                      : h.values.length) > 0,
                  f = (!g && !v) || (null == n ? void 0 : n.includes(e.id)),
                  m = this._canActivateRepeatedly(e),
                  b =
                    !(e.internal_targeting_flag_key && !m) ||
                    this.instance.featureFlags.isFeatureEnabled(
                      e.internal_targeting_flag_key
                    ),
                  y = this.checkFlags(e);
                return _ && p && b && f && y;
              })
            );
          }, t);
        }
        checkFlags(e) {
          var t;
          return (
            null === (t = e.feature_flag_keys) ||
            void 0 === t ||
            !t.length ||
            e.feature_flag_keys.every((e) => {
              var { key: t, value: i } = e;
              return !t || !i || this.instance.featureFlags.isFeatureEnabled(i);
            })
          );
        }
        getNextSurveyStep(e, t, i) {
          var s,
            n = e.questions[t],
            r = t + 1;
          if (null === (s = n.branching) || void 0 === s || !s.type)
            return t === e.questions.length - 1 ? sY.End : r;
          if (n.branching.type === sY.End) return sY.End;
          if (n.branching.type === sY.SpecificQuestion) {
            if (Number.isInteger(n.branching.index)) return n.branching.index;
          } else if (n.branching.type === sY.ResponseBased) {
            if (n.type === sJ.SingleChoice) {
              var o,
                a,
                l = n.choices.indexOf("".concat(i));
              if (
                null !== (o = n.branching) &&
                void 0 !== o &&
                null !== (a = o.responseValues) &&
                void 0 !== a &&
                a.hasOwnProperty(l)
              ) {
                var c = n.branching.responseValues[l];
                return Number.isInteger(c) ? c : c === sY.End ? sY.End : r;
              }
            } else if (n.type === sJ.Rating) {
              if ("number" != typeof i || !Number.isInteger(i))
                throw Error("The response type must be an integer");
              var u,
                d,
                h = (function (e, t) {
                  if (3 === t) {
                    if (e < 1 || e > 3)
                      throw Error("The response must be in range 1-3");
                    return 1 === e
                      ? "negative"
                      : 2 === e
                      ? "neutral"
                      : "positive";
                  }
                  if (5 === t) {
                    if (e < 1 || e > 5)
                      throw Error("The response must be in range 1-5");
                    return e <= 2
                      ? "negative"
                      : 3 === e
                      ? "neutral"
                      : "positive";
                  }
                  if (7 === t) {
                    if (e < 1 || e > 7)
                      throw Error("The response must be in range 1-7");
                    return e <= 3
                      ? "negative"
                      : 4 === e
                      ? "neutral"
                      : "positive";
                  }
                  if (10 === t) {
                    if (e < 0 || e > 10)
                      throw Error("The response must be in range 0-10");
                    return e <= 6
                      ? "detractors"
                      : e <= 8
                      ? "passives"
                      : "promoters";
                  }
                  throw Error("The scale must be one of: 3, 5, 7, 10");
                })(i, n.scale);
              if (
                null !== (u = n.branching) &&
                void 0 !== u &&
                null !== (d = u.responseValues) &&
                void 0 !== d &&
                d.hasOwnProperty(h)
              ) {
                var _ = n.branching.responseValues[h];
                return Number.isInteger(_) ? _ : _ === sY.End ? sY.End : r;
              }
            }
            return r;
          }
          return (
            nE.warn(
              "Falling back to next question index due to unexpected branching type"
            ),
            r
          );
        }
        _canActivateRepeatedly(e) {
          var t;
          return D(
            null === (t = m.__PosthogExtensions__) || void 0 === t
              ? void 0
              : t.canActivateRepeatedly
          )
            ? (nE.warn("init was not called"), !1)
            : m.__PosthogExtensions__.canActivateRepeatedly(e);
        }
        canRenderSurvey(e) {
          D(this._surveyManager)
            ? nE.warn("init was not called")
            : this.getSurveys((t) => {
                var i = t.filter((t) => t.id === e)[0];
                this._surveyManager.canRenderSurvey(i);
              });
        }
        renderSurvey(e, t) {
          D(this._surveyManager)
            ? nE.warn("init was not called")
            : this.getSurveys((i) => {
                var s = i.filter((t) => t.id === e)[0];
                this._surveyManager.renderSurvey(
                  s,
                  null == h ? void 0 : h.querySelector(t)
                );
              });
        }
      }
      var nC = j("[RateLimiter]");
      class nI {
        constructor(e) {
          var t, i;
          Y(this, "serverLimits", {}),
            Y(this, "lastEventRateLimited", !1),
            Y(this, "checkForLimiting", (e) => {
              var t = e.text;
              if (t && t.length)
                try {
                  (JSON.parse(t).quota_limited || []).forEach((e) => {
                    nC.info("".concat(e || "events", " is quota limited.")),
                      (this.serverLimits[e] = new Date().getTime() + 6e4);
                  });
                } catch (e) {
                  return void nC.warn(
                    'could not rate limit - continuing. Error: "'.concat(
                      null == e ? void 0 : e.message,
                      '"'
                    ),
                    { text: t }
                  );
                }
            }),
            (this.instance = e),
            (this.captureEventsPerSecond =
              (null === (t = e.config.rate_limiting) || void 0 === t
                ? void 0
                : t.events_per_second) || 10),
            (this.captureEventsBurstLimit = Math.max(
              (null === (i = e.config.rate_limiting) || void 0 === i
                ? void 0
                : i.events_burst_limit) || 10 * this.captureEventsPerSecond,
              this.captureEventsPerSecond
            )),
            (this.lastEventRateLimited = this.clientRateLimitContext(
              !0
            ).isRateLimited);
        }
        clientRateLimitContext() {
          var e,
            t,
            i,
            s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = new Date().getTime(),
            r =
              null !==
                (e =
                  null === (t = this.instance.persistence) || void 0 === t
                    ? void 0
                    : t.get_property(eM)) && void 0 !== e
                ? e
                : { tokens: this.captureEventsBurstLimit, last: n };
          (r.tokens += ((n - r.last) / 1e3) * this.captureEventsPerSecond),
            (r.last = n),
            r.tokens > this.captureEventsBurstLimit &&
              (r.tokens = this.captureEventsBurstLimit);
          var o = r.tokens < 1;
          return (
            o || s || (r.tokens = Math.max(0, r.tokens - 1)),
            !o ||
              this.lastEventRateLimited ||
              s ||
              this.instance.capture(
                "$$client_ingestion_warning",
                {
                  $$client_ingestion_warning_message:
                    "posthog-js client rate limited. Config is set to "
                      .concat(
                        this.captureEventsPerSecond,
                        " events per second and "
                      )
                      .concat(
                        this.captureEventsBurstLimit,
                        " events burst limit."
                      ),
                },
                { skip_client_rate_limiting: !0 }
              ),
            (this.lastEventRateLimited = o),
            null === (i = this.instance.persistence) ||
              void 0 === i ||
              i.set_property(eM, r),
            { isRateLimited: o, remainingTokens: r.tokens }
          );
        }
        isServerRateLimited(e) {
          var t = this.serverLimits[e || "events"] || !1;
          return !1 !== t && new Date().getTime() < t;
        }
      }
      var nP = () =>
        J(
          {
            initialPathName: (null == _ ? void 0 : _.pathname) || "",
            referringDomain: t7.referringDomain(),
          },
          t7.campaignParams()
        );
      class nR {
        constructor(e, t, i) {
          Y(this, "_onSessionIdCallback", (e) => {
            var t = this._getStoredProps();
            if (!t || t.sessionId !== e) {
              var i = {
                sessionId: e,
                props: this._sessionSourceParamGenerator(),
              };
              this._persistence.register({ [eA]: i });
            }
          }),
            (this._sessionIdManager = e),
            (this._persistence = t),
            (this._sessionSourceParamGenerator = i || nP),
            this._sessionIdManager.onSessionId(this._onSessionIdCallback);
        }
        _getStoredProps() {
          return this._persistence.props[eA];
        }
        getSessionProps() {
          var e,
            t =
              null === (e = this._getStoredProps()) || void 0 === e
                ? void 0
                : e.props;
          return t
            ? {
                $client_session_initial_referring_host: t.referringDomain,
                $client_session_initial_pathname: t.initialPathName,
                $client_session_initial_utm_source: t.utm_source,
                $client_session_initial_utm_campaign: t.utm_campaign,
                $client_session_initial_utm_medium: t.utm_medium,
                $client_session_initial_utm_content: t.utm_content,
                $client_session_initial_utm_term: t.utm_term,
              }
            : {};
        }
      }
      var nF = [
          "ahrefsbot",
          "ahrefssiteaudit",
          "applebot",
          "baiduspider",
          "bingbot",
          "bingpreview",
          "bot.htm",
          "bot.php",
          "crawler",
          "deepscan",
          "duckduckbot",
          "facebookexternal",
          "facebookcatalog",
          "gptbot",
          "http://yandex.com/bots",
          "hubspot",
          "ia_archiver",
          "linkedinbot",
          "mj12bot",
          "msnbot",
          "nessus",
          "petalbot",
          "pinterest",
          "prerender",
          "rogerbot",
          "screaming frog",
          "semrushbot",
          "sitebulb",
          "slurp",
          "turnitin",
          "twitterbot",
          "vercelbot",
          "yahoo! slurp",
          "yandexbot",
          "headlesschrome",
          "cypress",
          "Google-HotelAdsVerifier",
          "adsbot-google",
          "apis-google",
          "duplexweb-google",
          "feedfetcher-google",
          "google favicon",
          "google web preview",
          "google-read-aloud",
          "googlebot",
          "googleweblight",
          "mediapartners-google",
          "storebot-google",
          "Bytespider;",
        ],
        nT = function (e, t) {
          if (!e) return !1;
          var i = e.toLowerCase();
          return nF.concat(t || []).some((e) => {
            var t = e.toLowerCase();
            return -1 !== i.indexOf(t);
          });
        },
        n$ = function (e, t) {
          if (!e) return !1;
          var i = e.userAgent;
          if (i && nT(i, t)) return !0;
          try {
            var s = null == e ? void 0 : e.userAgentData;
            if (
              null != s &&
              s.brands &&
              s.brands.some((e) => nT(null == e ? void 0 : e.brand, t))
            )
              return !0;
          } catch (e) {}
          return !!e.webdriver;
        };
      class nO {
        constructor() {
          this.clicks = [];
        }
        isRageClick(e, t, i) {
          var s = this.clicks[this.clicks.length - 1];
          if (
            s &&
            Math.abs(e - s.x) + Math.abs(t - s.y) < 30 &&
            i - s.timestamp < 1e3
          ) {
            if (
              (this.clicks.push({ x: e, y: t, timestamp: i }),
              3 === this.clicks.length)
            )
              return !0;
          } else this.clicks = [{ x: e, y: t, timestamp: i }];
          return !1;
        }
      }
      var nL = j("[Dead Clicks]"),
        nA = () => !0,
        nM = (e) => {
          var t,
            i = !(
              null === (t = e.instance.persistence) ||
              void 0 === t ||
              !t.get_property(ep)
            ),
            s = e.instance.config.capture_dead_clicks;
          return q(s) ? s : i;
        };
      class nD {
        get lazyLoadedDeadClicksAutocapture() {
          return this._lazyLoadedDeadClicksAutocapture;
        }
        constructor(e, t, i) {
          (this.instance = e),
            (this.isEnabled = t),
            (this.onCapture = i),
            this.startIfEnabled();
        }
        onRemoteConfig(e) {
          this.instance.persistence &&
            this.instance.persistence.register({
              [ep]: null == e ? void 0 : e.captureDeadClicks,
            }),
            this.startIfEnabled();
        }
        startIfEnabled() {
          this.isEnabled(this) &&
            this.loadScript(() => {
              this.start();
            });
        }
        loadScript(e) {
          var t, i, s;
          null !== (t = m.__PosthogExtensions__) &&
            void 0 !== t &&
            t.initDeadClicksAutocapture &&
            e(),
            null === (i = m.__PosthogExtensions__) ||
              void 0 === i ||
              null === (s = i.loadExternalDependency) ||
              void 0 === s ||
              s.call(i, this.instance, "dead-clicks-autocapture", (t) => {
                t ? nL.error("failed to load script", t) : e();
              });
        }
        start() {
          var e;
          if (h) {
            if (
              !this._lazyLoadedDeadClicksAutocapture &&
              null !== (e = m.__PosthogExtensions__) &&
              void 0 !== e &&
              e.initDeadClicksAutocapture
            ) {
              var t = T(this.instance.config.capture_dead_clicks)
                ? this.instance.config.capture_dead_clicks
                : {};
              (t.__onCapture = this.onCapture),
                (this._lazyLoadedDeadClicksAutocapture =
                  m.__PosthogExtensions__.initDeadClicksAutocapture(
                    this.instance,
                    t
                  )),
                this._lazyLoadedDeadClicksAutocapture.start(h),
                nL.info("starting...");
            }
          } else nL.error("`document` not found. Cannot start.");
        }
        stop() {
          this._lazyLoadedDeadClicksAutocapture &&
            (this._lazyLoadedDeadClicksAutocapture.stop(),
            (this._lazyLoadedDeadClicksAutocapture = void 0),
            nL.info("stopping..."));
        }
      }
      var nN = j("[Heatmaps]");
      function nq(e) {
        return (
          T(e) &&
          "clientX" in e &&
          "clientY" in e &&
          N(e.clientX) &&
          N(e.clientY)
        );
      }
      class nB {
        constructor(e) {
          var t;
          Y(this, "rageclicks", new nO()),
            Y(this, "_enabledServerSide", !1),
            Y(this, "_initialized", !1),
            Y(this, "_flushInterval", null),
            (this.instance = e),
            (this._enabledServerSide = !(
              null === (t = this.instance.persistence) ||
              void 0 === t ||
              !t.props[ed]
            )),
            null == o ||
              o.addEventListener("beforeunload", () => {
                this.flush();
              });
        }
        get flushIntervalMilliseconds() {
          var e = 5e3;
          return (
            T(this.instance.config.capture_heatmaps) &&
              this.instance.config.capture_heatmaps
                .flush_interval_milliseconds &&
              (e =
                this.instance.config.capture_heatmaps
                  .flush_interval_milliseconds),
            e
          );
        }
        get isEnabled() {
          return O(this.instance.config.capture_heatmaps)
            ? O(this.instance.config.enable_heatmaps)
              ? this._enabledServerSide
              : this.instance.config.enable_heatmaps
            : !1 !== this.instance.config.capture_heatmaps;
        }
        startIfEnabled() {
          if (this.isEnabled)
            this._initialized ||
              (nN.info("starting..."),
              this._setupListeners(),
              (this._flushInterval = setInterval(
                this.flush.bind(this),
                this.flushIntervalMilliseconds
              )));
          else {
            var e, t;
            clearInterval(
              null !== (e = this._flushInterval) && void 0 !== e ? e : void 0
            ),
              null === (t = this.deadClicksCapture) || void 0 === t || t.stop(),
              this.getAndClearBuffer();
          }
        }
        onRemoteConfig(e) {
          var t = !!e.heatmaps;
          this.instance.persistence &&
            this.instance.persistence.register({ [ed]: t }),
            (this._enabledServerSide = t),
            this.startIfEnabled();
        }
        getAndClearBuffer() {
          var e = this.buffer;
          return (this.buffer = void 0), e;
        }
        _onDeadClick(e) {
          this._onClick(e.originalEvent, "deadclick");
        }
        _setupListeners() {
          o &&
            h &&
            (er(
              h,
              "click",
              (e) => this._onClick(e || (null == o ? void 0 : o.event)),
              !1,
              !0
            ),
            er(
              h,
              "mousemove",
              (e) => this._onMouseMove(e || (null == o ? void 0 : o.event)),
              !1,
              !0
            ),
            (this.deadClicksCapture = new nD(
              this.instance,
              nA,
              this._onDeadClick.bind(this)
            )),
            this.deadClicksCapture.startIfEnabled(),
            (this._initialized = !0));
        }
        _getProperties(e, t) {
          var i = this.instance.scrollManager.scrollY(),
            s = this.instance.scrollManager.scrollX(),
            n = this.instance.scrollManager.scrollElement(),
            r = (function (e, t, i) {
              for (var s = e; s && io(s) && !ia(s, "body") && s !== i; ) {
                if (S(t, null == o ? void 0 : o.getComputedStyle(s).position))
                  return !0;
                s = im(s);
              }
              return !1;
            })(ig(e), ["fixed", "sticky"], n);
          return {
            x: e.clientX + (r ? 0 : s),
            y: e.clientY + (r ? 0 : i),
            target_fixed: r,
            type: t,
          };
        }
        _onClick(e) {
          var t,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "click";
          if (!ir(e.target) && nq(e)) {
            var s = this._getProperties(e, i);
            null !== (t = this.rageclicks) &&
              void 0 !== t &&
              t.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
              this._capture(J(J({}, s), {}, { type: "rageclick" })),
              this._capture(s);
          }
        }
        _onMouseMove(e) {
          !ir(e.target) &&
            nq(e) &&
            (clearTimeout(this._mouseMoveTimeout),
            (this._mouseMoveTimeout = setTimeout(() => {
              this._capture(this._getProperties(e, "mousemove"));
            }, 500)));
        }
        _capture(e) {
          if (o) {
            var t = o.location.href;
            (this.buffer = this.buffer || {}),
              this.buffer[t] || (this.buffer[t] = []),
              this.buffer[t].push(e);
          }
        }
        flush() {
          this.buffer &&
            !$(this.buffer) &&
            this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer(),
            });
        }
      }
      class nH {
        constructor(e) {
          Y(this, "_updateScrollData", () => {
            this.context || (this.context = {});
            var e,
              t,
              i,
              s,
              n = this.scrollElement(),
              r = this.scrollY(),
              o = n ? Math.max(0, n.scrollHeight - n.clientHeight) : 0,
              a = r + ((null == n ? void 0 : n.clientHeight) || 0),
              l = (null == n ? void 0 : n.scrollHeight) || 0;
            (this.context.lastScrollY = Math.ceil(r)),
              (this.context.maxScrollY = Math.max(
                r,
                null !== (e = this.context.maxScrollY) && void 0 !== e ? e : 0
              )),
              (this.context.maxScrollHeight = Math.max(
                o,
                null !== (t = this.context.maxScrollHeight) && void 0 !== t
                  ? t
                  : 0
              )),
              (this.context.lastContentY = a),
              (this.context.maxContentY = Math.max(
                a,
                null !== (i = this.context.maxContentY) && void 0 !== i ? i : 0
              )),
              (this.context.maxContentHeight = Math.max(
                l,
                null !== (s = this.context.maxContentHeight) && void 0 !== s
                  ? s
                  : 0
              ));
          }),
            (this.instance = e);
        }
        getContext() {
          return this.context;
        }
        resetContext() {
          var e = this.context;
          return setTimeout(this._updateScrollData, 0), e;
        }
        startMeasuringScrollPosition() {
          null == o || o.addEventListener("scroll", this._updateScrollData, !0),
            null == o ||
              o.addEventListener("scrollend", this._updateScrollData, !0),
            null == o || o.addEventListener("resize", this._updateScrollData);
        }
        scrollElement() {
          if (!this.instance.config.scroll_root_selector)
            return null == o ? void 0 : o.document.documentElement;
          for (var e of R(this.instance.config.scroll_root_selector)
            ? this.instance.config.scroll_root_selector
            : [this.instance.config.scroll_root_selector]) {
            var t = null == o ? void 0 : o.document.querySelector(e);
            if (t) return t;
          }
        }
        scrollY() {
          if (this.instance.config.scroll_root_selector) {
            var e = this.scrollElement();
            return (e && e.scrollTop) || 0;
          }
          return (
            (o &&
              (o.scrollY ||
                o.pageYOffset ||
                o.document.documentElement.scrollTop)) ||
            0
          );
        }
        scrollX() {
          if (this.instance.config.scroll_root_selector) {
            var e = this.scrollElement();
            return (e && e.scrollLeft) || 0;
          }
          return (
            (o &&
              (o.scrollX ||
                o.pageXOffset ||
                o.document.documentElement.scrollLeft)) ||
            0
          );
        }
      }
      var nU = j("[AutoCapture]");
      function nz(e, t) {
        return t.length > e ? t.slice(0, e) + "..." : t;
      }
      class nj {
        constructor(e) {
          Y(this, "_initialized", !1),
            Y(this, "_isDisabledServerSide", null),
            Y(this, "rageclicks", new nO()),
            Y(this, "_elementsChainAsString", !1),
            (this.instance = e),
            (this._elementSelectors = null);
        }
        get config() {
          var e,
            t,
            i = T(this.instance.config.autocapture)
              ? this.instance.config.autocapture
              : {};
          return (
            (i.url_allowlist =
              null === (e = i.url_allowlist) || void 0 === e
                ? void 0
                : e.map((e) => new RegExp(e))),
            (i.url_ignorelist =
              null === (t = i.url_ignorelist) || void 0 === t
                ? void 0
                : t.map((e) => new RegExp(e))),
            i
          );
        }
        _addDomEventHandlers() {
          if (this.isBrowserSupported()) {
            if (o && h) {
              var e = (e) => {
                  e = e || (null == o ? void 0 : o.event);
                  try {
                    this._captureEvent(e);
                  } catch (e) {
                    nU.error("Failed to capture event", e);
                  }
                },
                t = (e) => {
                  (e = e || (null == o ? void 0 : o.event)),
                    this._captureEvent(e, y);
                };
              er(h, "submit", e, !1, !0),
                er(h, "change", e, !1, !0),
                er(h, "click", e, !1, !0),
                this.config.capture_copied_text &&
                  (er(h, "copy", t, !1, !0), er(h, "cut", t, !1, !0));
            }
          } else
            nU.info(
              "Disabling Automatic Event Collection because this browser is not supported"
            );
        }
        startIfEnabled() {
          this.isEnabled &&
            !this._initialized &&
            (this._addDomEventHandlers(), (this._initialized = !0));
        }
        onRemoteConfig(e) {
          e.elementsChainAsString &&
            (this._elementsChainAsString = e.elementsChainAsString),
            this.instance.persistence &&
              this.instance.persistence.register({
                [eu]: !!e.autocapture_opt_out,
              }),
            (this._isDisabledServerSide = !!e.autocapture_opt_out),
            this.startIfEnabled();
        }
        setElementSelectors(e) {
          this._elementSelectors = e;
        }
        getElementSelectors(e) {
          var t,
            i = [];
          return (
            null === (t = this._elementSelectors) ||
              void 0 === t ||
              t.forEach((t) => {
                var s = null == h ? void 0 : h.querySelectorAll(t);
                null == s ||
                  s.forEach((s) => {
                    e === s && i.push(t);
                  });
              }),
            i
          );
        }
        get isEnabled() {
          var e,
            t,
            i =
              null === (e = this.instance.persistence) || void 0 === e
                ? void 0
                : e.props[eu];
          if (
            M(this._isDisabledServerSide) &&
            !q(i) &&
            !this.instance.config.advanced_disable_decide
          )
            return !1;
          var s =
            null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!i;
          return !!this.instance.config.autocapture && !s;
        }
        _captureEvent(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "$autocapture";
          if (this.isEnabled) {
            var i,
              s = ig(e);
            il(s) && (s = s.parentNode || null),
              "$autocapture" === t &&
                "click" === e.type &&
                e instanceof MouseEvent &&
                this.instance.config.rageclick &&
                null !== (i = this.rageclicks) &&
                void 0 !== i &&
                i.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
                this._captureEvent(e, "$rageclick");
            var n = t === y;
            if (
              s &&
              (function (e, t) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : void 0,
                  s = arguments.length > 3 ? arguments[3] : void 0,
                  n = arguments.length > 4 ? arguments[4] : void 0;
                if (
                  !o ||
                  !e ||
                  ia(e, "html") ||
                  !io(e) ||
                  (null != i && i.url_allowlist && !id(i.url_allowlist)) ||
                  (null != i && i.url_ignorelist && id(i.url_ignorelist))
                )
                  return !1;
                if (null != i && i.dom_event_allowlist) {
                  var r = i.dom_event_allowlist;
                  if (r && !r.some((e) => t.type === e)) return !1;
                }
                for (
                  var a = !1, l = [e], c = !0, u = e;
                  u.parentNode && !ia(u, "body");

                )
                  if (ic(u.parentNode))
                    l.push(u.parentNode.host), (u = u.parentNode.host);
                  else {
                    if (!(c = im(u))) break;
                    if (s || iv.indexOf(c.tagName.toLowerCase()) > -1) a = !0;
                    else {
                      var d = o.getComputedStyle(c);
                      d &&
                        "pointer" === d.getPropertyValue("cursor") &&
                        (a = !0);
                    }
                    l.push(c), (u = c);
                  }
                if (
                  !(function (e, t) {
                    var i = null == t ? void 0 : t.element_allowlist;
                    if (O(i)) return !0;
                    var s = function (e) {
                      if (i.some((t) => e.tagName.toLowerCase() === t))
                        return { v: !0 };
                    };
                    for (var n of e) {
                      var r = s(n);
                      if ("object" == typeof r) return r.v;
                    }
                    return !1;
                  })(l, i) ||
                  !(function (e, t) {
                    var i = null == t ? void 0 : t.css_selector_allowlist;
                    if (O(i)) return !0;
                    var s = function (e) {
                      if (i.some((t) => e.matches(t))) return { v: !0 };
                    };
                    for (var n of e) {
                      var r = s(n);
                      if ("object" == typeof r) return r.v;
                    }
                    return !1;
                  })(l, i)
                )
                  return !1;
                var h = o.getComputedStyle(e);
                if (
                  h &&
                  "pointer" === h.getPropertyValue("cursor") &&
                  "click" === t.type
                )
                  return !0;
                var _ = e.tagName.toLowerCase();
                switch (_) {
                  case "html":
                    return !1;
                  case "form":
                    return (n || ["submit"]).indexOf(t.type) >= 0;
                  case "input":
                  case "select":
                  case "textarea":
                    return (n || ["change", "click"]).indexOf(t.type) >= 0;
                  default:
                    return a
                      ? (n || ["click"]).indexOf(t.type) >= 0
                      : (n || ["click"]).indexOf(t.type) >= 0 &&
                          (iv.indexOf(_) > -1 ||
                            "true" === e.getAttribute("contenteditable"));
                }
              })(s, e, this.config, n, n ? ["copy", "cut"] : void 0)
            ) {
              var { props: r, explicitNoCapture: a } = (function (e, t) {
                for (
                  var i,
                    s,
                    {
                      e: n,
                      maskAllElementAttributes: r,
                      maskAllText: a,
                      elementAttributeIgnoreList: l,
                      elementsChainAsString: c,
                    } = t,
                    u = [e],
                    d = e;
                  d.parentNode && !ia(d, "body");

                )
                  ic(d.parentNode)
                    ? (u.push(d.parentNode.host), (d = d.parentNode.host))
                    : (u.push(d.parentNode), (d = d.parentNode));
                var h,
                  _ = [],
                  p = {},
                  g = !1,
                  v = !1;
                if (
                  (Z(u, (e) => {
                    var t = ib(e);
                    "a" === e.tagName.toLowerCase() &&
                      ((g = e.getAttribute("href")),
                      (g = t && g && iI(g) && g)),
                      S(ih(e), "ph-no-capture") && (v = !0),
                      _.push(
                        (function (e, t, i, s) {
                          var n = e.tagName.toLowerCase(),
                            r = { tag_name: n };
                          iv.indexOf(n) > -1 &&
                            !i &&
                            ("a" === n.toLowerCase() ||
                            "button" === n.toLowerCase()
                              ? (r.$el_text = nz(1024, iP(e)))
                              : (r.$el_text = nz(1024, ip(e))));
                          var o = ih(e);
                          o.length > 0 &&
                            (r.classes = o.filter(function (e) {
                              return "" !== e;
                            })),
                            Z(e.attributes, function (i) {
                              var n;
                              if (
                                (!iy(e) ||
                                  -1 !==
                                    [
                                      "name",
                                      "id",
                                      "class",
                                      "aria-label",
                                    ].indexOf(i.name)) &&
                                (null == s || !s.includes(i.name)) &&
                                !t &&
                                iI(i.value) &&
                                (!L((n = i.name)) ||
                                  ("_ngcontent" !== n.substring(0, 10) &&
                                    "_nghost" !== n.substring(0, 7)))
                              ) {
                                var o = i.value;
                                "class" === i.name && (o = iu(o).join(" ")),
                                  (r["attr__" + i.name] = nz(1024, o));
                              }
                            });
                          for (
                            var a = 1, l = 1, c = e;
                            (c = (function (e) {
                              if (e.previousElementSibling)
                                return e.previousElementSibling;
                              var t = e;
                              do t = t.previousSibling;
                              while (t && !io(t));
                              return t;
                            })(c));

                          )
                            a++, c.tagName === e.tagName && l++;
                          return (r.nth_child = a), (r.nth_of_type = l), r;
                        })(e, r, a, l)
                      ),
                      ee(
                        p,
                        (function (e) {
                          if (!ib(e)) return {};
                          var t = {};
                          return (
                            Z(e.attributes, function (e) {
                              if (
                                e.name &&
                                0 ===
                                  e.name.indexOf("data-ph-capture-attribute")
                              ) {
                                var i = e.name.replace(
                                    "data-ph-capture-attribute-",
                                    ""
                                  ),
                                  s = e.value;
                                i && s && iI(s) && (t[i] = s);
                              }
                            }),
                            t
                          );
                        })(e)
                      );
                  }),
                  v)
                )
                  return { props: {}, explicitNoCapture: v };
                if (
                  (a ||
                    ("a" === e.tagName.toLowerCase() ||
                    "button" === e.tagName.toLowerCase()
                      ? (_[0].$el_text = iP(e))
                      : (_[0].$el_text = ip(e))),
                  g)
                ) {
                  _[0].attr__href = g;
                  var f,
                    m,
                    b = null === (f = ta(g)) || void 0 === f ? void 0 : f.host,
                    y =
                      null == o || null === (m = o.location) || void 0 === m
                        ? void 0
                        : m.host;
                  b && y && b !== y && (h = g);
                }
                return {
                  props: ee(
                    { $event_type: n.type, $ce_version: 1 },
                    c ? {} : { $elements: _ },
                    {
                      $elements_chain: _.map((e) => {
                        var t,
                          i,
                          s,
                          n = {
                            text:
                              null === (i = e.$el_text) || void 0 === i
                                ? void 0
                                : i.slice(0, 400),
                            tag_name: e.tag_name,
                            href:
                              null === (s = e.attr__href) || void 0 === s
                                ? void 0
                                : s.slice(0, 2048),
                            attr_class: (t = e.attr__class)
                              ? R(t)
                                ? t
                                : iu(t)
                              : void 0,
                            attr_id: e.attr__id,
                            nth_child: e.nth_child,
                            nth_of_type: e.nth_of_type,
                            attributes: {},
                          };
                        return (
                          et(e)
                            .filter((e) => {
                              var [t] = e;
                              return 0 === t.indexOf("attr__");
                            })
                            .forEach((e) => {
                              var [t, i] = e;
                              return (n.attributes[t] = i);
                            }),
                          n
                        );
                      })
                        .map((e) => {
                          var t,
                            i,
                            s = "";
                          if ((e.tag_name && (s += e.tag_name), e.attr_class))
                            for (var n of (e.attr_class.sort(), e.attr_class))
                              s += ".".concat(n.replace(/"/g, ""));
                          var r = J(
                              J(
                                J(
                                  J({}, e.text ? { text: e.text } : {}),
                                  {},
                                  {
                                    "nth-child":
                                      null !== (t = e.nth_child) && void 0 !== t
                                        ? t
                                        : 0,
                                    "nth-of-type":
                                      null !== (i = e.nth_of_type) &&
                                      void 0 !== i
                                        ? i
                                        : 0,
                                  },
                                  e.href ? { href: e.href } : {}
                                ),
                                e.attr_id ? { attr_id: e.attr_id } : {}
                              ),
                              e.attributes
                            ),
                            o = {};
                          return (
                            et(r)
                              .sort((e, t) => {
                                var [i] = e,
                                  [s] = t;
                                return i.localeCompare(s);
                              })
                              .forEach((e) => {
                                var [t, i] = e;
                                return (o[iR(t.toString())] = iR(i.toString()));
                              }),
                            (s +=
                              ":" +
                              et(r)
                                .map((e) => {
                                  var [t, i] = e;
                                  return "".concat(t, '="').concat(i, '"');
                                })
                                .join(""))
                          );
                        })
                        .join(";"),
                    },
                    null !== (i = _[0]) && void 0 !== i && i.$el_text
                      ? {
                          $el_text:
                            null === (s = _[0]) || void 0 === s
                              ? void 0
                              : s.$el_text,
                        }
                      : {},
                    h && "click" === n.type ? { $external_click_url: h } : {},
                    p
                  ),
                };
              })(s, {
                e: e,
                maskAllElementAttributes:
                  this.instance.config.mask_all_element_attributes,
                maskAllText: this.instance.config.mask_all_text,
                elementAttributeIgnoreList:
                  this.config.element_attribute_ignorelist,
                elementsChainAsString: this._elementsChainAsString,
              });
              if (a) return !1;
              var l = this.getElementSelectors(s);
              if ((l && l.length > 0 && (r.$element_selectors = l), t === y)) {
                var c,
                  u = i_(
                    null == o || null === (c = o.getSelection()) || void 0 === c
                      ? void 0
                      : c.toString()
                  ),
                  d = e.type || "clipboard";
                if (!u) return !1;
                (r.$selected_content = u), (r.$copy_type = d);
              }
              return this.instance.capture(t, r), !0;
            }
          }
        }
        isBrowserSupported() {
          return F(null == h ? void 0 : h.querySelectorAll);
        }
      }
      var nW = j("[TracingHeaders]");
      class nG {
        constructor(e) {
          Y(this, "_restoreXHRPatch", void 0),
            Y(this, "_restoreFetchPatch", void 0),
            Y(this, "_startCapturing", () => {
              var e, t, i, s;
              O(this._restoreXHRPatch) &&
                (null === (e = m.__PosthogExtensions__) ||
                  void 0 === e ||
                  null === (t = e.tracingHeadersPatchFns) ||
                  void 0 === t ||
                  t._patchXHR(this.instance.sessionManager)),
                O(this._restoreFetchPatch) &&
                  (null === (i = m.__PosthogExtensions__) ||
                    void 0 === i ||
                    null === (s = i.tracingHeadersPatchFns) ||
                    void 0 === s ||
                    s._patchFetch(this.instance.sessionManager));
            }),
            (this.instance = e);
        }
        _loadScript(e) {
          var t, i, s;
          null !== (t = m.__PosthogExtensions__) &&
            void 0 !== t &&
            t.tracingHeadersPatchFns &&
            e(),
            null === (i = m.__PosthogExtensions__) ||
              void 0 === i ||
              null === (s = i.loadExternalDependency) ||
              void 0 === s ||
              s.call(i, this.instance, "tracing-headers", (t) => {
                if (t) return nW.error("failed to load script", t);
                e();
              });
        }
        startIfEnabledOrStop() {
          var e, t;
          this.instance.config.__add_tracing_headers
            ? this._loadScript(this._startCapturing)
            : (null === (e = this._restoreXHRPatch) ||
                void 0 === e ||
                e.call(this),
              null === (t = this._restoreFetchPatch) ||
                void 0 === t ||
                t.call(this),
              (this._restoreXHRPatch = void 0),
              (this._restoreFetchPatch = void 0));
        }
      }
      ((rr = ro || (ro = {}))[(rr.PENDING = -1)] = "PENDING"),
        (rr[(rr.DENIED = 0)] = "DENIED"),
        (rr[(rr.GRANTED = 1)] = "GRANTED");
      class nV {
        constructor(e) {
          this.instance = e;
        }
        get config() {
          return this.instance.config;
        }
        get consent() {
          return this.getDnt() ? ro.DENIED : this.storedConsent;
        }
        isOptedOut() {
          return (
            this.consent === ro.DENIED ||
            (this.consent === ro.PENDING &&
              this.config.opt_out_capturing_by_default)
          );
        }
        isOptedIn() {
          return !this.isOptedOut();
        }
        optInOut(e) {
          this.storage.set(
            this.storageKey,
            e ? 1 : 0,
            this.config.cookie_expiration,
            this.config.cross_subdomain_cookie,
            this.config.secure_cookie
          );
        }
        reset() {
          this.storage.remove(
            this.storageKey,
            this.config.cross_subdomain_cookie
          );
        }
        get storageKey() {
          var { token: e, opt_out_capturing_cookie_prefix: t } =
            this.instance.config;
          return (t || "__ph_opt_in_out_") + e;
        }
        get storedConsent() {
          var e = this.storage.get(this.storageKey);
          return "1" === e ? ro.GRANTED : "0" === e ? ro.DENIED : ro.PENDING;
        }
        get storage() {
          if (!this._storage) {
            var e = this.config.opt_out_capturing_persistence_type;
            this._storage = "localStorage" === e ? e9 : e4;
            var t = "localStorage" === e ? e4 : e9;
            t.get(this.storageKey) &&
              (this._storage.get(this.storageKey) ||
                this.optInOut("1" === t.get(this.storageKey)),
              t.remove(this.storageKey, this.config.cross_subdomain_cookie));
          }
          return this._storage;
        }
        getDnt() {
          return (
            !!this.config.respect_dnt &&
            !!eo(
              [
                null == d ? void 0 : d.doNotTrack,
                null == d ? void 0 : d.msDoNotTrack,
                m.doNotTrack,
              ],
              (e) => S([!0, 1, "1", "yes"], e)
            )
          );
        }
      }
      var nJ = j("[ExceptionAutocapture]");
      class nY {
        constructor(e) {
          var t;
          Y(this, "originalOnUnhandledRejectionHandler", void 0),
            Y(this, "startCapturing", () => {
              var e, t, i, s;
              if (
                o &&
                this.isEnabled &&
                !this.hasHandlers &&
                !this.isCapturing
              ) {
                var n =
                    null === (e = m.__PosthogExtensions__) ||
                    void 0 === e ||
                    null === (t = e.errorWrappingFunctions) ||
                    void 0 === t
                      ? void 0
                      : t.wrapOnError,
                  r =
                    null === (i = m.__PosthogExtensions__) ||
                    void 0 === i ||
                    null === (s = i.errorWrappingFunctions) ||
                    void 0 === s
                      ? void 0
                      : s.wrapUnhandledRejection;
                if (n && r)
                  try {
                    (this.unwrapOnError = n(this.captureException.bind(this))),
                      (this.unwrapUnhandledRejection = r(
                        this.captureException.bind(this)
                      ));
                  } catch (e) {
                    nJ.error("failed to start", e), this.stopCapturing();
                  }
                else
                  nJ.error(
                    "failed to load error wrapping functions - cannot start"
                  );
              }
            }),
            (this.instance = e),
            (this.remoteEnabled = !(
              null === (t = this.instance.persistence) ||
              void 0 === t ||
              !t.props[eh]
            )),
            this.startIfEnabled();
        }
        get isEnabled() {
          var e;
          return null !== (e = this.remoteEnabled) && void 0 !== e && e;
        }
        get isCapturing() {
          var e;
          return !(
            null == o ||
            null === (e = o.onerror) ||
            void 0 === e ||
            !e.__POSTHOG_INSTRUMENTED__
          );
        }
        get hasHandlers() {
          return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
        }
        startIfEnabled() {
          this.isEnabled &&
            !this.isCapturing &&
            (nJ.info("enabled, starting..."),
            this.loadScript(this.startCapturing));
        }
        loadScript(e) {
          var t, i;
          this.hasHandlers && e(),
            null === (t = m.__PosthogExtensions__) ||
              void 0 === t ||
              null === (i = t.loadExternalDependency) ||
              void 0 === i ||
              i.call(t, this.instance, "exception-autocapture", (t) => {
                if (t) return nJ.error("failed to load script", t);
                e();
              });
        }
        stopCapturing() {
          var e, t;
          null === (e = this.unwrapOnError) || void 0 === e || e.call(this),
            null === (t = this.unwrapUnhandledRejection) ||
              void 0 === t ||
              t.call(this);
        }
        onRemoteConfig(e) {
          var t = e.autocaptureExceptions;
          (this.remoteEnabled = !!t),
            this.instance.persistence &&
              this.instance.persistence.register({ [eh]: this.remoteEnabled }),
            this.startIfEnabled();
        }
        captureException(e) {
          var t = this.instance.requestRouter.endpointFor("ui");
          (e.$exception_personURL = ""
            .concat(t, "/project/")
            .concat(this.instance.config.token, "/person/")
            .concat(this.instance.get_distinct_id())),
            this.instance.exceptions.sendExceptionEvent(e);
        }
      }
      var nK = j("[Web Vitals]");
      class nX {
        constructor(e) {
          var t;
          Y(this, "_enabledServerSide", !1),
            Y(this, "_initialized", !1),
            Y(this, "buffer", {
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0,
            }),
            Y(this, "_flushToCapture", () => {
              clearTimeout(this._delayedFlushTimer),
                0 !== this.buffer.metrics.length &&
                  (this.instance.capture(
                    "$web_vitals",
                    this.buffer.metrics.reduce(
                      (e, t) =>
                        J(
                          J({}, e),
                          {},
                          {
                            ["$web_vitals_".concat(t.name, "_event")]: J({}, t),
                            ["$web_vitals_".concat(t.name, "_value")]: t.value,
                          }
                        ),
                      {}
                    )
                  ),
                  (this.buffer = {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0,
                  }));
            }),
            Y(this, "_addToBuffer", (e) => {
              var t,
                i =
                  null === (t = this.instance.sessionManager) || void 0 === t
                    ? void 0
                    : t.checkAndGetSessionAndWindowId(!0);
              if (O(i))
                nK.error("Could not read session ID. Dropping metrics!");
              else {
                this.buffer = this.buffer || {
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0,
                };
                var s = this._currentURL();
                O(s) ||
                  (D(null == e ? void 0 : e.name) ||
                  D(null == e ? void 0 : e.value)
                    ? nK.error("Invalid metric received", e)
                    : this._maxAllowedValue && e.value >= this._maxAllowedValue
                    ? nK.error(
                        "Ignoring metric with value >= " +
                          this._maxAllowedValue,
                        e
                      )
                    : (this.buffer.url !== s &&
                        (this._flushToCapture(),
                        (this._delayedFlushTimer = setTimeout(
                          this._flushToCapture,
                          this.flushToCaptureTimeoutMs
                        ))),
                      O(this.buffer.url) && (this.buffer.url = s),
                      (this.buffer.firstMetricTimestamp = O(
                        this.buffer.firstMetricTimestamp
                      )
                        ? Date.now()
                        : this.buffer.firstMetricTimestamp),
                      e.attribution &&
                        e.attribution.interactionTargetElement &&
                        (e.attribution.interactionTargetElement = void 0),
                      this.buffer.metrics.push(
                        J(
                          J({}, e),
                          {},
                          {
                            $current_url: s,
                            $session_id: i.sessionId,
                            $window_id: i.windowId,
                            timestamp: Date.now(),
                          }
                        )
                      ),
                      this.buffer.metrics.length ===
                        this.allowedMetrics.length && this._flushToCapture()));
              }
            }),
            Y(this, "_startCapturing", () => {
              var e,
                t,
                i,
                s,
                n = m.__PosthogExtensions__;
              O(n) ||
                O(n.postHogWebVitalsCallbacks) ||
                ({
                  onLCP: e,
                  onCLS: t,
                  onFCP: i,
                  onINP: s,
                } = n.postHogWebVitalsCallbacks),
                e && t && i && s
                  ? (this.allowedMetrics.indexOf("LCP") > -1 &&
                      e(this._addToBuffer.bind(this)),
                    this.allowedMetrics.indexOf("CLS") > -1 &&
                      t(this._addToBuffer.bind(this)),
                    this.allowedMetrics.indexOf("FCP") > -1 &&
                      i(this._addToBuffer.bind(this)),
                    this.allowedMetrics.indexOf("INP") > -1 &&
                      s(this._addToBuffer.bind(this)),
                    (this._initialized = !0))
                  : nK.error("web vitals callbacks not loaded - not starting");
            }),
            (this.instance = e),
            (this._enabledServerSide = !(
              null === (t = this.instance.persistence) ||
              void 0 === t ||
              !t.props[e_]
            )),
            this.startIfEnabled();
        }
        get allowedMetrics() {
          var e,
            t,
            i = T(this.instance.config.capture_performance)
              ? null === (e = this.instance.config.capture_performance) ||
                void 0 === e
                ? void 0
                : e.web_vitals_allowed_metrics
              : void 0;
          return O(i)
            ? (null === (t = this.instance.persistence) || void 0 === t
                ? void 0
                : t.props[eg]) || ["CLS", "FCP", "INP", "LCP"]
            : i;
        }
        get flushToCaptureTimeoutMs() {
          return (
            (T(this.instance.config.capture_performance)
              ? this.instance.config.capture_performance
                  .web_vitals_delayed_flush_ms
              : void 0) || 5e3
          );
        }
        get _maxAllowedValue() {
          var e =
            T(this.instance.config.capture_performance) &&
            N(this.instance.config.capture_performance.__web_vitals_max_value)
              ? this.instance.config.capture_performance.__web_vitals_max_value
              : 9e5;
          return 0 < e && e <= 6e4 ? 9e5 : e;
        }
        get isEnabled() {
          var e = T(this.instance.config.capture_performance)
            ? this.instance.config.capture_performance.web_vitals
            : void 0;
          return q(e) ? e : this._enabledServerSide;
        }
        startIfEnabled() {
          this.isEnabled &&
            !this._initialized &&
            (nK.info("enabled, starting..."),
            this.loadScript(this._startCapturing));
        }
        onRemoteConfig(e) {
          var t = T(e.capturePerformance) && !!e.capturePerformance.web_vitals,
            i = T(e.capturePerformance)
              ? e.capturePerformance.web_vitals_allowed_metrics
              : void 0;
          this.instance.persistence &&
            (this.instance.persistence.register({ [e_]: t }),
            this.instance.persistence.register({ [eg]: i })),
            (this._enabledServerSide = t),
            this.startIfEnabled();
        }
        loadScript(e) {
          var t, i, s;
          null !== (t = m.__PosthogExtensions__) &&
            void 0 !== t &&
            t.postHogWebVitalsCallbacks &&
            e(),
            null === (i = m.__PosthogExtensions__) ||
              void 0 === i ||
              null === (s = i.loadExternalDependency) ||
              void 0 === s ||
              s.call(i, this.instance, "web-vitals", (t) => {
                t ? nK.error("failed to load script", t) : e();
              });
        }
        _currentURL() {
          var e = o ? o.location.href : void 0;
          return e || nK.error("Could not determine current URL"), e;
        }
      }
      var nQ = {
        icontains: (e, t) =>
          !!o && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
        not_icontains: (e, t) =>
          !!o && -1 === t.href.toLowerCase().indexOf(e.toLowerCase()),
        regex: (e, t) => !!o && tl(t.href, e),
        not_regex: (e, t) => !!o && !tl(t.href, e),
        exact: (e, t) => t.href === e,
        is_not: (e, t) => t.href !== e,
      };
      class nZ {
        constructor(e) {
          var t = this;
          Y(this, "getWebExperimentsAndEvaluateDisplayLogic", function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            t.getWebExperiments((e) => {
              nZ.logInfo("retrieved web experiments from the server"),
                (t._flagToExperiments = new Map()),
                e.forEach((e) => {
                  if (e.feature_flag_key) {
                    t._flagToExperiments &&
                      (nZ.logInfo(
                        "setting flag key ",
                        e.feature_flag_key,
                        " to web experiment ",
                        e
                      ),
                      null === (i = t._flagToExperiments) ||
                        void 0 === i ||
                        i.set(e.feature_flag_key, e));
                    var i,
                      s = t.instance.getFeatureFlag(e.feature_flag_key);
                    L(s) &&
                      e.variants[s] &&
                      t.applyTransforms(e.name, s, e.variants[s].transforms);
                  } else if (e.variants)
                    for (var n in e.variants) {
                      var r = e.variants[n];
                      nZ.matchesTestVariant(r) &&
                        t.applyTransforms(e.name, n, r.transforms);
                    }
                });
            }, e);
          }),
            (this.instance = e),
            this.instance.onFeatureFlags((e) => {
              this.onFeatureFlags(e);
            });
        }
        onFeatureFlags(e) {
          if (this._is_bot())
            nZ.logInfo(
              "Refusing to render web experiment since the viewer is a likely bot"
            );
          else if (!this.instance.config.disable_web_experiments) {
            if (D(this._flagToExperiments))
              return (
                (this._flagToExperiments = new Map()),
                this.loadIfEnabled(),
                void this.previewWebExperiment()
              );
            nZ.logInfo("applying feature flags", e),
              e.forEach((e) => {
                var t;
                if (
                  this._flagToExperiments &&
                  null !== (t = this._flagToExperiments) &&
                  void 0 !== t &&
                  t.has(e)
                ) {
                  var i,
                    s = this.instance.getFeatureFlag(e),
                    n =
                      null === (i = this._flagToExperiments) || void 0 === i
                        ? void 0
                        : i.get(e);
                  s &&
                    null != n &&
                    n.variants[s] &&
                    this.applyTransforms(n.name, s, n.variants[s].transforms);
                }
              });
          }
        }
        previewWebExperiment() {
          var e = nZ.getWindowLocation();
          if (null != e && e.search) {
            var t = tu(null == e ? void 0 : e.search, "__experiment_id"),
              i = tu(null == e ? void 0 : e.search, "__experiment_variant");
            t &&
              i &&
              (nZ.logInfo(
                "previewing web experiments ".concat(t, " && ").concat(i)
              ),
              this.getWebExperiments(
                (e) => {
                  this.showPreviewWebExperiment(parseInt(t), i, e);
                },
                !1,
                !0
              ));
          }
        }
        loadIfEnabled() {
          this.instance.config.disable_web_experiments ||
            this.getWebExperimentsAndEvaluateDisplayLogic();
        }
        getWebExperiments(e, t, i) {
          if (this.instance.config.disable_web_experiments && !i) return e([]);
          var s = this.instance.get_property("$web_experiments");
          if (s && !t) return e(s);
          this.instance._send_request({
            url: this.instance.requestRouter.endpointFor(
              "api",
              "/api/web_experiments/?token=".concat(this.instance.config.token)
            ),
            method: "GET",
            callback: (t) =>
              200 === t.statusCode && t.json
                ? e(t.json.experiments || [])
                : e([]),
          });
        }
        showPreviewWebExperiment(e, t, i) {
          var s = i.filter((t) => t.id === e);
          s &&
            s.length > 0 &&
            (nZ.logInfo(
              "Previewing web experiment ["
                .concat(s[0].name, "] with variant [")
                .concat(t, "]")
            ),
            this.applyTransforms(
              s[0].name,
              t,
              s[0].variants[t].transforms,
              !0
            ));
        }
        static matchesTestVariant(e) {
          return (
            !D(e.conditions) &&
            nZ.matchUrlConditions(e) &&
            nZ.matchUTMConditions(e)
          );
        }
        static matchUrlConditions(e) {
          if (
            D(e.conditions) ||
            D(null === (t = e.conditions) || void 0 === t ? void 0 : t.url)
          )
            return !0;
          var t,
            i,
            s,
            n,
            r = nZ.getWindowLocation();
          return (
            !!r &&
            (null === (i = e.conditions) ||
              void 0 === i ||
              !i.url ||
              nQ[
                null !==
                  (s =
                    null === (n = e.conditions) || void 0 === n
                      ? void 0
                      : n.urlMatchType) && void 0 !== s
                  ? s
                  : "icontains"
              ](e.conditions.url, r))
          );
        }
        static getWindowLocation() {
          return null == o ? void 0 : o.location;
        }
        static matchUTMConditions(e) {
          if (
            D(e.conditions) ||
            D(null === (i = e.conditions) || void 0 === i ? void 0 : i.utm)
          )
            return !0;
          var t = t7.campaignParams();
          if (t.utm_source) {
            var i,
              s,
              n,
              r,
              o,
              a,
              l,
              c,
              u,
              d,
              h,
              _,
              p,
              g,
              v,
              f,
              m,
              b =
                null === (s = e.conditions) ||
                void 0 === s ||
                null === (n = s.utm) ||
                void 0 === n ||
                !n.utm_campaign ||
                (null === (r = e.conditions) ||
                void 0 === r ||
                null === (o = r.utm) ||
                void 0 === o
                  ? void 0
                  : o.utm_campaign) == t.utm_campaign,
              y =
                null === (a = e.conditions) ||
                void 0 === a ||
                null === (l = a.utm) ||
                void 0 === l ||
                !l.utm_source ||
                (null === (c = e.conditions) ||
                void 0 === c ||
                null === (u = c.utm) ||
                void 0 === u
                  ? void 0
                  : u.utm_source) == t.utm_source,
              w =
                null === (d = e.conditions) ||
                void 0 === d ||
                null === (h = d.utm) ||
                void 0 === h ||
                !h.utm_medium ||
                (null === (_ = e.conditions) ||
                void 0 === _ ||
                null === (p = _.utm) ||
                void 0 === p
                  ? void 0
                  : p.utm_medium) == t.utm_medium,
              S =
                null === (g = e.conditions) ||
                void 0 === g ||
                null === (v = g.utm) ||
                void 0 === v ||
                !v.utm_term ||
                (null === (f = e.conditions) ||
                void 0 === f ||
                null === (m = f.utm) ||
                void 0 === m
                  ? void 0
                  : m.utm_term) == t.utm_term;
            return b && w && S && y;
          }
          return !1;
        }
        static logInfo(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1;
            s < t;
            s++
          )
            i[s - 1] = arguments[s];
          z.info("[WebExperiments] ".concat(e), i);
        }
        applyTransforms(e, t, i, s) {
          var n;
          this._is_bot()
            ? nZ.logInfo(
                "Refusing to render web experiment since the viewer is a likely bot"
              )
            : "control" !== t
            ? i.forEach((i) => {
                if (i.selector) {
                  nZ.logInfo(
                    "applying transform of variant "
                      .concat(t, " for experiment ")
                      .concat(e, " "),
                    i
                  );
                  var n,
                    r,
                    o = 0,
                    a =
                      null === (n = document) || void 0 === n
                        ? void 0
                        : n.querySelectorAll(i.selector);
                  null == a ||
                    a.forEach((e) => {
                      (o += 1),
                        i.attributes &&
                          i.attributes.forEach((t) => {
                            switch (t.name) {
                              case "text":
                                e.innerText = t.value;
                                break;
                              case "html":
                                e.innerHTML = t.value;
                                break;
                              case "cssClass":
                                e.className = t.value;
                                break;
                              default:
                                e.setAttribute(t.name, t.value);
                            }
                          }),
                        i.text && (e.innerText = i.text),
                        i.html &&
                          (e.parentElement
                            ? (e.parentElement.innerHTML = i.html)
                            : (e.innerHTML = i.html)),
                        i.css && e.setAttribute("style", i.css);
                    }),
                    this.instance &&
                      this.instance.capture &&
                      this.instance.capture("$web_experiment_applied", {
                        $web_experiment_name: e,
                        $web_experiment_variant: t,
                        $web_experiment_preview: s,
                        $web_experiment_document_url:
                          null === (r = nZ.getWindowLocation()) || void 0 === r
                            ? void 0
                            : r.href,
                        $web_experiment_elements_modified: o,
                      });
                }
              })
            : (nZ.logInfo("Control variants leave the page unmodified."),
              this.instance &&
                this.instance.capture &&
                this.instance.capture("$web_experiment_applied", {
                  $web_experiment_name: e,
                  $web_experiment_preview: s,
                  $web_experiment_variant: t,
                  $web_experiment_document_url:
                    null === (n = nZ.getWindowLocation()) || void 0 === n
                      ? void 0
                      : n.href,
                  $web_experiment_elements_modified: 0,
                }));
        }
        _is_bot() {
          return d && this.instance
            ? n$(d, this.instance.config.custom_blocked_useragents)
            : void 0;
        }
      }
      class n0 {
        constructor(e) {
          this.instance = e;
        }
        sendExceptionEvent(e) {
          this.instance.capture("$exception", e, {
            _noTruncate: !0,
            _batchKey: "exceptionEvent",
          });
        }
      }
      var n1 = ["$set_once", "$set"],
        n2 = j("[SiteApps]");
      class n3 {
        constructor(e) {
          (this.instance = e),
            (this.bufferedInvocations = []),
            (this.apps = {});
        }
        get isEnabled() {
          return !!this.instance.config.opt_in_site_apps;
        }
        eventCollector(e, t) {
          if (t) {
            var i = this.globalsForEvent(t);
            this.bufferedInvocations.push(i),
              this.bufferedInvocations.length > 1e3 &&
                (this.bufferedInvocations = this.bufferedInvocations.slice(10));
          }
        }
        get siteAppLoaders() {
          var e, t;
          return null === (e = m._POSTHOG_REMOTE_CONFIG) ||
            void 0 === e ||
            null === (t = e[this.instance.config.token]) ||
            void 0 === t
            ? void 0
            : t.siteApps;
        }
        init() {
          if (this.isEnabled) {
            var e = this.instance._addCaptureHook(
              this.eventCollector.bind(this)
            );
            this.stopBuffering = () => {
              e(),
                (this.bufferedInvocations = []),
                (this.stopBuffering = void 0);
            };
          }
        }
        globalsForEvent(e) {
          if (!e) throw Error("Event payload is required");
          var t,
            i,
            s,
            n,
            r,
            o,
            a,
            l = {},
            c = this.instance.get_property("$groups") || [];
          for (var [u, d] of Object.entries(
            this.instance.get_property("$stored_group_properties") || {}
          ))
            l[u] = { id: c[u], type: u, properties: d };
          var { $set_once: h, $set: _ } = e;
          return {
            event: J(
              J({}, K(e, n1)),
              {},
              {
                properties: J(
                  J(
                    J({}, e.properties),
                    _
                      ? {
                          $set: J(
                            J(
                              {},
                              null !==
                                (t =
                                  null === (i = e.properties) || void 0 === i
                                    ? void 0
                                    : i.$set) && void 0 !== t
                                ? t
                                : {}
                            ),
                            _
                          ),
                        }
                      : {}
                  ),
                  h
                    ? {
                        $set_once: J(
                          J(
                            {},
                            null !==
                              (s =
                                null === (n = e.properties) || void 0 === n
                                  ? void 0
                                  : n.$set_once) && void 0 !== s
                              ? s
                              : {}
                          ),
                          h
                        ),
                      }
                    : {}
                ),
                elements_chain:
                  null !==
                    (r =
                      null === (o = e.properties) || void 0 === o
                        ? void 0
                        : o.$elements_chain) && void 0 !== r
                    ? r
                    : "",
                distinct_id:
                  null === (a = e.properties) || void 0 === a
                    ? void 0
                    : a.distinct_id,
              }
            ),
            person: {
              properties: this.instance.get_property(
                "$stored_person_properties"
              ),
            },
            groups: l,
          };
        }
        setupSiteApp(e) {
          var t = { id: e.id, loaded: !1, errored: !1 };
          this.apps[e.id] = t;
          var i = (i) => {
            var s;
            for (var n of ((this.apps[e.id].errored = !i),
            (this.apps[e.id].loaded = !0),
            n2.info(
              "Site app with id "
                .concat(e.id, " ")
                .concat(i ? "loaded" : "errored")
            ),
            i &&
              this.bufferedInvocations.length &&
              (n2.info(
                "Processing "
                  .concat(
                    this.bufferedInvocations.length,
                    " events for site app with id "
                  )
                  .concat(e.id)
              ),
              this.bufferedInvocations.forEach((e) => {
                var i;
                return null === (i = t.processEvent) || void 0 === i
                  ? void 0
                  : i.call(t, e);
              })),
            Object.values(this.apps)))
              if (!n.loaded) return;
            null === (s = this.stopBuffering) || void 0 === s || s.call(this);
          };
          try {
            var { processEvent: s } = e.init({
              posthog: this.instance,
              callback: (e) => {
                i(e);
              },
            });
            s && (t.processEvent = s);
          } catch (t) {
            n2.error(
              "Error while initializing PostHog app with config id ".concat(
                e.id
              ),
              t
            ),
              i(!1);
          }
        }
        onCapturedEvent(e) {
          if (0 !== Object.keys(this.apps).length) {
            var t,
              i = this.globalsForEvent(e);
            for (var s of Object.values(this.apps))
              try {
                null === (t = s.processEvent) || void 0 === t || t.call(s, i);
              } catch (t) {
                n2.error(
                  "Error while processing event "
                    .concat(e.event, " for site app ")
                    .concat(s.id),
                  t
                );
              }
          }
        }
        onRemoteConfig(e) {
          var t,
            i,
            s,
            n = this;
          if (null !== (t = this.siteAppLoaders) && void 0 !== t && t.length) {
            if (!this.isEnabled)
              return void n2.error(
                'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'
              );
            for (var r of this.siteAppLoaders) this.setupSiteApp(r);
            this.instance.on("eventCaptured", (e) => this.onCapturedEvent(e));
          } else if (
            (null === (i = this.stopBuffering) || void 0 === i || i.call(this),
            null !== (s = e.siteApps) && void 0 !== s && s.length)
          ) {
            if (this.isEnabled) {
              var o = function (e, t) {
                var i, s;
                (m["__$$ph_site_app_".concat(e)] = n.instance),
                  null === (i = m.__PosthogExtensions__) ||
                    void 0 === i ||
                    null === (s = i.loadSiteApp) ||
                    void 0 === s ||
                    s.call(i, n.instance, t, (t) => {
                      if (t)
                        return n2.error(
                          "Error while initializing PostHog app with config id ".concat(
                            e
                          ),
                          t
                        );
                    });
              };
              for (var { id: a, url: l } of e.siteApps) o(a, l);
            } else
              n2.error(
                'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'
              );
          }
        }
      }
      var n5 = {},
        n6 = () => {},
        n8 = "posthog",
        n4 =
          !sR &&
          -1 === (null == f ? void 0 : f.indexOf("MSIE")) &&
          -1 === (null == f ? void 0 : f.indexOf("Mozilla")),
        n7 = () => {
          var e, t, i;
          return {
            api_host: "https://us.i.posthog.com",
            ui_host: null,
            token: "",
            autocapture: !0,
            rageclick: !0,
            cross_subdomain_cookie:
              !!L(
                (i =
                  null == (t = null == h ? void 0 : h.location)
                    ? void 0
                    : t.hostname)
              ) && "herokuapp.com" !== i.split(".").slice(-2).join("."),
            persistence: "localStorage+cookie",
            persistence_name: "",
            loaded: n6,
            store_google: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageview: !0,
            capture_pageleave: "if_capture_pageview",
            debug:
              (_ &&
                L(null == _ ? void 0 : _.search) &&
                -1 !== _.search.indexOf("__posthog_debug=true")) ||
              !1,
            verbose: !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            enable_recording_console_log: void 0,
            secure_cookie:
              "https:" ===
              (null == o || null === (e = o.location) || void 0 === e
                ? void 0
                : e.protocol),
            ip: !0,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            inapp_protocol: "//",
            inapp_link_new_window: !1,
            request_batching: !0,
            properties_string_max_length: 65535,
            session_recording: {},
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            on_request_error: (e) => {
              var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
              z.error(t);
            },
            get_device_id: (e) => e,
            _onCapture: n6,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: "identified_only",
            __add_tracing_headers: !1,
            before_send: void 0,
          };
        },
        n9 = (e) => {
          var t = {};
          O(e.process_person) || (t.person_profiles = e.process_person),
            O(e.xhr_headers) || (t.request_headers = e.xhr_headers),
            O(e.cookie_name) || (t.persistence_name = e.cookie_name),
            O(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
          var i = ee({}, t, e);
          return (
            R(e.property_blacklist) &&
              (O(e.property_denylist)
                ? (i.property_denylist = e.property_blacklist)
                : R(e.property_denylist)
                ? (i.property_denylist = [
                    ...e.property_blacklist,
                    ...e.property_denylist,
                  ])
                : z.error(
                    "Invalid value for property_denylist config: " +
                      e.property_denylist
                  )),
            i
          );
        };
      class re {
        constructor() {
          Y(this, "__forceAllowLocalhost", !1);
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost;
        }
        set _forceAllowLocalhost(e) {
          z.error(
            "WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"
          ),
            (this.__forceAllowLocalhost = e);
        }
      }
      class rt {
        get decideEndpointWasHit() {
          var e, t;
          return (
            null !==
              (e =
                null === (t = this.featureFlags) || void 0 === t
                  ? void 0
                  : t.hasLoadedFlags) &&
            void 0 !== e &&
            e
          );
        }
        constructor() {
          Y(this, "webPerformance", new re()),
            Y(this, "version", b.LIB_VERSION),
            Y(this, "_internalEventEmitter", new sQ()),
            (this.config = n7()),
            (this.SentryIntegration = sW),
            (this.sentryIntegration = (e) => {
              var t;
              return (t = sj(this, e)), { name: sz, processEvent: (e) => t(e) };
            }),
            (this.__request_queue = []),
            (this.__loaded = !1),
            (this.analyticsDefaultEndpoint = "/e/"),
            (this._initialPageviewCaptured = !1),
            (this._initialPersonProfilesConfig = null),
            (this.featureFlags = new eY(this)),
            (this.toolbar = new sC(this)),
            (this.scrollManager = new nH(this)),
            (this.pageViewManager = new sX(this)),
            (this.surveys = new nx(this)),
            (this.experiments = new nZ(this)),
            (this.exceptions = new n0(this)),
            (this.rateLimiter = new nI(this)),
            (this.requestRouter = new sU(this)),
            (this.consent = new nV(this)),
            (this.people = {
              set: (e, t, i) => {
                var s = L(e) ? { [e]: t } : e;
                this.setPersonProperties(s), null == i || i({});
              },
              set_once: (e, t, i) => {
                var s = L(e) ? { [e]: t } : e;
                this.setPersonProperties(void 0, s), null == i || i({});
              },
            }),
            this.on("eventCaptured", (e) =>
              z.info('send "'.concat(null == e ? void 0 : e.event, '"'), e)
            );
        }
        init(e, t, i) {
          if (i && i !== n8) {
            var s,
              n = null !== (s = n5[i]) && void 0 !== s ? s : new rt();
            return n._init(e, t, i), (n5[i] = n), (n5[n8][i] = n), n;
          }
          return this._init(e, t, i);
        }
        _init(e) {
          var t,
            i,
            s,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = arguments.length > 2 ? arguments[2] : void 0;
          if (O(e) || A(e))
            return (
              z.critical(
                "PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"
              ),
              this
            );
          if (this.__loaded)
            return (
              z.warn(
                "You have already initialized PostHog! Re-initializing is a no-op"
              ),
              this
            );
          (this.__loaded = !0),
            (this.config = {}),
            (this._triggered_notifs = []),
            n.person_profiles &&
              (this._initialPersonProfilesConfig = n.person_profiles),
            this.set_config(ee({}, n7(), n9(n), { name: a, token: e })),
            this.config.on_xhr_error &&
              z.error(
                "on_xhr_error is deprecated. Use on_request_error instead"
              ),
            (this.compression = n.disable_compression ? void 0 : r.GZipJS),
            (this.persistence = new ie(this.config)),
            (this.sessionPersistence =
              "sessionStorage" === this.config.persistence ||
              "memory" === this.config.persistence
                ? this.persistence
                : new ie(
                    J(J({}, this.config), {}, { persistence: "sessionStorage" })
                  ));
          var l = J({}, this.persistence.props),
            c = J({}, this.sessionPersistence.props);
          if (
            ((this._requestQueue = new sI((e) =>
              this._send_retriable_request(e)
            )),
            (this._retryQueue = new sM(this)),
            (this.__request_queue = []),
            this.config.__preview_experimental_cookieless_mode ||
              ((this.sessionManager = new sB(this)),
              (this.sessionPropsManager = new nR(
                this.sessionManager,
                this.persistence
              ))),
            new nG(this).startIfEnabledOrStop(),
            (this.siteApps = new n3(this)),
            null === (t = this.siteApps) || void 0 === t || t.init(),
            this.config.__preview_experimental_cookieless_mode ||
              ((this.sessionRecording = new sy(this)),
              this.sessionRecording.startIfEnabledOrStop()),
            this.config.disable_scroll_properties ||
              this.scrollManager.startMeasuringScrollPosition(),
            (this.autocapture = new nj(this)),
            this.autocapture.startIfEnabled(),
            this.surveys.loadIfEnabled(),
            (this.heatmaps = new nB(this)),
            this.heatmaps.startIfEnabled(),
            (this.webVitalsAutocapture = new nX(this)),
            (this.exceptionObserver = new nY(this)),
            this.exceptionObserver.startIfEnabled(),
            (this.deadClicksAutocapture = new nD(this, nM)),
            this.deadClicksAutocapture.startIfEnabled(),
            (b.DEBUG = b.DEBUG || this.config.debug),
            b.DEBUG &&
              z.info("Starting in debug mode", {
                this: this,
                config: n,
                thisC: J({}, this.config),
                p: l,
                s: c,
              }),
            this._sync_opt_out_with_persistence(),
            void 0 !==
              (null === (i = n.bootstrap) || void 0 === i
                ? void 0
                : i.distinctID))
          ) {
            var u,
              d,
              h = this.config.get_device_id(e3()),
              _ =
                null !== (u = n.bootstrap) && void 0 !== u && u.isIdentifiedID
                  ? h
                  : n.bootstrap.distinctID;
            this.persistence.set_property(
              eL,
              null !== (d = n.bootstrap) && void 0 !== d && d.isIdentifiedID
                ? "identified"
                : "anonymous"
            ),
              this.register({
                distinct_id: n.bootstrap.distinctID,
                $device_id: _,
              });
          }
          if (this._hasBootstrappedFeatureFlags()) {
            var p,
              g,
              v = Object.keys(
                (null === (p = n.bootstrap) || void 0 === p
                  ? void 0
                  : p.featureFlags) || {}
              )
                .filter((e) => {
                  var t, i;
                  return !(
                    null === (t = n.bootstrap) ||
                    void 0 === t ||
                    null === (i = t.featureFlags) ||
                    void 0 === i ||
                    !i[e]
                  );
                })
                .reduce((e, t) => {
                  var i, s;
                  return (
                    (e[t] =
                      (null === (i = n.bootstrap) ||
                      void 0 === i ||
                      null === (s = i.featureFlags) ||
                      void 0 === s
                        ? void 0
                        : s[t]) || !1),
                    e
                  );
                }, {}),
              f = Object.keys(
                (null === (g = n.bootstrap) || void 0 === g
                  ? void 0
                  : g.featureFlagPayloads) || {}
              )
                .filter((e) => v[e])
                .reduce((e, t) => {
                  var i, s, r, o;
                  return (
                    null !== (i = n.bootstrap) &&
                      void 0 !== i &&
                      null !== (s = i.featureFlagPayloads) &&
                      void 0 !== s &&
                      s[t] &&
                      (e[t] =
                        null === (r = n.bootstrap) ||
                        void 0 === r ||
                        null === (o = r.featureFlagPayloads) ||
                        void 0 === o
                          ? void 0
                          : o[t]),
                    e
                  );
                }, {});
            this.featureFlags.receivedFeatureFlags({
              featureFlags: v,
              featureFlagPayloads: f,
            });
          }
          if (this.config.__preview_experimental_cookieless_mode)
            this.register_once({ distinct_id: eU, $device_id: null }, "");
          else if (!this.get_distinct_id()) {
            var m = this.config.get_device_id(e3());
            this.register_once({ distinct_id: m, $device_id: m }, ""),
              this.persistence.set_property(eL, "anonymous");
          }
          return (
            null == o ||
              null === (s = o.addEventListener) ||
              void 0 === s ||
              s.call(
                o,
                "onpagehide" in self ? "pagehide" : "unload",
                this._handle_unload.bind(this)
              ),
            this.toolbar.maybeLoadToolbar(),
            n.segment
              ? (function (e, t) {
                  var i = e.config.segment;
                  if (!i) return t();
                  !(function (e, t) {
                    var i = e.config.segment;
                    if (!i) return t();
                    var s = (i) => {
                        var s = () => i.anonymousId() || e3();
                        (e.config.get_device_id = s),
                          i.id() &&
                            (e.register({
                              distinct_id: i.id(),
                              $device_id: s(),
                            }),
                            e.persistence.set_property(eL, "identified")),
                          t();
                      },
                      n = i.user();
                    "then" in n && F(n.then) ? n.then((e) => s(e)) : s(n);
                  })(e, () => {
                    var s;
                    i.register(
                      ((Promise && Promise.resolve) ||
                        sK.warn(
                          "This browser does not have Promise support, and can not use the segment integration"
                        ),
                      (s = (t, i) => {
                        if (!i) return t;
                        t.event.userId ||
                          t.event.anonymousId === e.get_distinct_id() ||
                          (sK.info("No userId set, resetting PostHog"),
                          e.reset()),
                          t.event.userId &&
                            t.event.userId !== e.get_distinct_id() &&
                            (sK.info("UserId set, identifying with PostHog"),
                            e.identify(t.event.userId));
                        var s,
                          n = e._calculate_event_properties(
                            i,
                            null !== (s = t.event.properties) && void 0 !== s
                              ? s
                              : {},
                            new Date()
                          );
                        return (
                          (t.event.properties = Object.assign(
                            {},
                            n,
                            t.event.properties
                          )),
                          t
                        );
                      }),
                      {
                        name: "PostHog JS",
                        type: "enrichment",
                        version: "1.0.0",
                        isLoaded: () => !0,
                        load: () => Promise.resolve(),
                        track: (e) => s(e, e.event.event),
                        page: (e) => s(e, "$pageview"),
                        identify: (e) => s(e, "$identify"),
                        screen: (e) => s(e, "$screen"),
                      })
                    ).then(() => {
                      t();
                    });
                  });
                })(this, () => this._loaded())
              : this._loaded(),
            F(this.config._onCapture) &&
              this.config._onCapture !== n6 &&
              (z.warn(
                "onCapture is deprecated. Please use `before_send` instead"
              ),
              this.on("eventCaptured", (e) =>
                this.config._onCapture(e.event, e)
              )),
            this
          );
        }
        _onRemoteConfig(e) {
          var t, i, s, n, o, a, l, c, u;
          if (!h || !h.body)
            return (
              z.info(
                "document not ready yet, trying again in 500 milliseconds..."
              ),
              void setTimeout(() => {
                this._onRemoteConfig(e);
              }, 500)
            );
          (this.compression = void 0),
            e.supportedCompression &&
              !this.config.disable_compression &&
              (this.compression = S(e.supportedCompression, r.GZipJS)
                ? r.GZipJS
                : S(e.supportedCompression, r.Base64)
                ? r.Base64
                : void 0),
            null !== (t = e.analytics) &&
              void 0 !== t &&
              t.endpoint &&
              (this.analyticsDefaultEndpoint = e.analytics.endpoint),
            this.set_config({
              person_profiles: this._initialPersonProfilesConfig
                ? this._initialPersonProfilesConfig
                : e.defaultIdentifiedOnly
                ? "identified_only"
                : "always",
            }),
            null === (i = this.siteApps) || void 0 === i || i.onRemoteConfig(e),
            null === (s = this.sessionRecording) ||
              void 0 === s ||
              s.onRemoteConfig(e),
            null === (n = this.autocapture) ||
              void 0 === n ||
              n.onRemoteConfig(e),
            null === (o = this.heatmaps) || void 0 === o || o.onRemoteConfig(e),
            null === (a = this.surveys) || void 0 === a || a.onRemoteConfig(e),
            null === (l = this.webVitalsAutocapture) ||
              void 0 === l ||
              l.onRemoteConfig(e),
            null === (c = this.exceptionObserver) ||
              void 0 === c ||
              c.onRemoteConfig(e),
            null === (u = this.deadClicksAutocapture) ||
              void 0 === u ||
              u.onRemoteConfig(e);
        }
        _loaded() {
          try {
            this.config.loaded(this);
          } catch (e) {
            z.critical("`loaded` function failed", e);
          }
          this._start_queue_if_opted_in(),
            this.config.capture_pageview &&
              setTimeout(() => {
                this.consent.isOptedIn() && this._captureInitialPageview();
              }, 1),
            new sS(this).load(),
            this.featureFlags.decide();
        }
        _start_queue_if_opted_in() {
          var e;
          this.has_opted_out_capturing() ||
            (this.config.request_batching &&
              (null === (e = this._requestQueue) ||
                void 0 === e ||
                e.enable()));
        }
        _dom_loaded() {
          this.has_opted_out_capturing() ||
            Q(this.__request_queue, (e) => this._send_retriable_request(e)),
            (this.__request_queue = []),
            this._start_queue_if_opted_in();
        }
        _handle_unload() {
          var e, t;
          this.config.request_batching
            ? (this._shouldCapturePageleave() && this.capture("$pageleave"),
              null === (e = this._requestQueue) || void 0 === e || e.unload(),
              null === (t = this._retryQueue) || void 0 === t || t.unload())
            : this._shouldCapturePageleave() &&
              this.capture("$pageleave", null, { transport: "sendBeacon" });
        }
        _send_request(e) {
          this.__loaded &&
            (n4
              ? this.__request_queue.push(e)
              : this.rateLimiter.isServerRateLimited(e.batchKey) ||
                ((e.transport = e.transport || this.config.api_transport),
                (e.url = sT(e.url, { ip: this.config.ip ? 1 : 0 })),
                (e.headers = J({}, this.config.request_headers)),
                (e.compression =
                  "best-available" === e.compression
                    ? this.compression
                    : e.compression),
                (e.fetchOptions = e.fetchOptions || this.config.fetch_options),
                ((e) => {
                  var t,
                    i,
                    s,
                    n = J({}, e);
                  (n.timeout = n.timeout || 6e4),
                    (n.url = sT(n.url, {
                      _: new Date().getTime().toString(),
                      ver: b.LIB_VERSION,
                      compression: n.compression,
                    }));
                  var r =
                      null !== (t = n.transport) && void 0 !== t ? t : "fetch",
                    o =
                      null !==
                        (i =
                          null === (s = eo(sL, (e) => e.transport === r)) ||
                          void 0 === s
                            ? void 0
                            : s.method) && void 0 !== i
                        ? i
                        : sL[0].method;
                  if (!o) throw Error("No available transport method");
                  o(n);
                })(
                  J(
                    J({}, e),
                    {},
                    {
                      callback: (t) => {
                        var i, s, n;
                        this.rateLimiter.checkForLimiting(t),
                          t.statusCode >= 400 &&
                            (null ===
                              (s = (n = this.config).on_request_error) ||
                              void 0 === s ||
                              s.call(n, t)),
                          null === (i = e.callback) ||
                            void 0 === i ||
                            i.call(e, t);
                      },
                    }
                  )
                )));
        }
        _send_retriable_request(e) {
          this._retryQueue
            ? this._retryQueue.retriableRequest(e)
            : this._send_request(e);
        }
        _execute_array(e) {
          var t,
            i = [],
            s = [],
            n = [];
          Q(e, (e) => {
            e &&
              (R((t = e[0]))
                ? n.push(e)
                : F(e)
                ? e.call(this)
                : R(e) && "alias" === t
                ? i.push(e)
                : R(e) && -1 !== t.indexOf("capture") && F(this[t])
                ? n.push(e)
                : s.push(e));
          });
          var r = function (e, t) {
            Q(
              e,
              function (e) {
                if (R(e[0])) {
                  var i = t;
                  Z(e, function (e) {
                    i = i[e[0]].apply(i, e.slice(1));
                  });
                } else this[e[0]].apply(this, e.slice(1));
              },
              t
            );
          };
          r(i, this), r(s, this), r(n, this);
        }
        _hasBootstrappedFeatureFlags() {
          var e, t;
          return (
            ((null === (e = this.config.bootstrap) || void 0 === e
              ? void 0
              : e.featureFlags) &&
              Object.keys(
                null === (t = this.config.bootstrap) || void 0 === t
                  ? void 0
                  : t.featureFlags
              ).length > 0) ||
            !1
          );
        }
        push(e) {
          this._execute_array([e]);
        }
        capture(e, t, i) {
          var s;
          if (
            this.__loaded &&
            this.persistence &&
            this.sessionPersistence &&
            this._requestQueue
          ) {
            if (!this.consent.isOptedOut()) {
              if (!O(e) && L(e)) {
                if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                  var n =
                    null != i && i.skip_client_rate_limiting
                      ? void 0
                      : this.rateLimiter.clientRateLimitContext();
                  if (null == n || !n.isRateLimited) {
                    this.sessionPersistence.update_search_keyword(),
                      this.config.store_google &&
                        this.sessionPersistence.update_campaign_params(),
                      this.config.save_referrer &&
                        this.sessionPersistence.update_referrer_info(),
                      (this.config.store_google || this.config.save_referrer) &&
                        this.persistence.set_initial_person_info();
                    var r,
                      o,
                      a,
                      l,
                      c = new Date(),
                      u = (null == i ? void 0 : i.timestamp) || c,
                      d = {
                        uuid: e3(),
                        event: e,
                        properties: this._calculate_event_properties(
                          e,
                          t || {},
                          u
                        ),
                      };
                    n &&
                      (d.properties.$lib_rate_limit_remaining_tokens =
                        n.remainingTokens),
                      (null == i ? void 0 : i.$set) &&
                        (d.$set = null == i ? void 0 : i.$set);
                    var h = this._calculate_set_once_properties(
                      null == i ? void 0 : i.$set_once
                    );
                    h && (d.$set_once = h),
                      (((r = d),
                      (o =
                        null != i && i._noTruncate
                          ? null
                          : this.config.properties_string_max_length),
                      (a = (e) => (L(e) && !M(o) ? e.slice(0, o) : e)),
                      (l = new Set()),
                      (d = (function e(t, i) {
                        var s;
                        return t !== Object(t)
                          ? a
                            ? a(t, i)
                            : t
                          : l.has(t)
                          ? void 0
                          : (l.add(t),
                            R(t)
                              ? ((s = []),
                                Q(t, (t) => {
                                  s.push(e(t));
                                }))
                              : ((s = {}),
                                Z(t, (t, i) => {
                                  l.has(t) || (s[i] = e(t, i));
                                })),
                            s);
                      })(r))).timestamp = u),
                      O(null == i ? void 0 : i.timestamp) ||
                        ((d.properties.$event_time_override_provided = !0),
                        (d.properties.$event_time_override_system_time = c));
                    var _ = J(J({}, d.properties.$set), d.$set);
                    if (
                      ($(_) || this.setPersonPropertiesForFlags(_),
                      !D(this.config.before_send))
                    ) {
                      var p = this._runBeforeSend(d);
                      if (!p) return;
                      d = p;
                    }
                    this._internalEventEmitter.emit("eventCaptured", d);
                    var g = {
                      method: "POST",
                      url:
                        null !== (s = null == i ? void 0 : i._url) &&
                        void 0 !== s
                          ? s
                          : this.requestRouter.endpointFor(
                              "api",
                              this.analyticsDefaultEndpoint
                            ),
                      data: d,
                      compression: "best-available",
                      batchKey: null == i ? void 0 : i._batchKey,
                    };
                    return (
                      !this.config.request_batching ||
                      (i && (null == i || !i._batchKey)) ||
                      (null != i && i.send_instantly)
                        ? this._send_retriable_request(g)
                        : this._requestQueue.enqueue(g),
                      d
                    );
                  }
                  z.critical(
                    "This capture call is ignored due to client rate limiting."
                  );
                }
              } else z.error("No event name provided to posthog.capture");
            }
          } else z.uninitializedWarning("posthog.capture");
        }
        _addCaptureHook(e) {
          return this.on("eventCaptured", (t) => e(t.event, t));
        }
        _calculate_event_properties(e, t, i) {
          if (
            ((i = i || new Date()),
            !this.persistence || !this.sessionPersistence)
          )
            return t;
          var s = this.persistence.remove_event_timer(e),
            n = J({}, t);
          if (
            ((n.token = this.config.token),
            this.config.__preview_experimental_cookieless_mode &&
              (n.$cklsh_mode = !0),
            "$snapshot" === e)
          ) {
            var r = J(
              J({}, this.persistence.properties()),
              this.sessionPersistence.properties()
            );
            return (
              (n.distinct_id = r.distinct_id),
              ((!L(n.distinct_id) && !N(n.distinct_id)) || A(n.distinct_id)) &&
                z.error(
                  "Invalid distinct_id for replay event. This indicates a bug in your implementation"
                ),
              n
            );
          }
          var o = t7.properties();
          if (this.sessionManager) {
            var { sessionId: a, windowId: l } =
              this.sessionManager.checkAndGetSessionAndWindowId();
            (n.$session_id = a), (n.$window_id = l);
          }
          if (
            (this.sessionRecording &&
              (n.$recording_status = this.sessionRecording.status),
            this.requestRouter.region === sN.CUSTOM &&
              (n.$lib_custom_api_host = this.config.api_host),
            this.sessionPropsManager &&
              this.config.__preview_send_client_session_params &&
              ("$pageview" === e || "$pageleave" === e || "$autocapture" === e))
          ) {
            var c = this.sessionPropsManager.getSessionProps();
            n = ee(n, c);
          }
          if (!this.config.disable_scroll_properties) {
            var u = {};
            "$pageview" === e
              ? (u = this.pageViewManager.doPageView(i))
              : "$pageleave" === e && (u = this.pageViewManager.doPageLeave(i)),
              (n = ee(n, u));
          }
          if (("$pageview" === e && h && (n.title = h.title), !O(s))) {
            var d = i.getTime() - s;
            n.$duration = parseFloat((d / 1e3).toFixed(3));
          }
          f &&
            this.config.opt_out_useragent_filter &&
            (n.$browser_type = this._is_bot() ? "bot" : "browser"),
            ((n = ee(
              {},
              o,
              this.persistence.properties(),
              this.sessionPersistence.properties(),
              n
            )).$is_identified = this._isIdentified()),
            R(this.config.property_denylist)
              ? Z(this.config.property_denylist, function (e) {
                  delete n[e];
                })
              : z.error(
                  "Invalid value for property_denylist config: " +
                    this.config.property_denylist +
                    " or property_blacklist config: " +
                    this.config.property_blacklist
                );
          var _ = this.config.sanitize_properties;
          _ && (n = _(n, e));
          var p = this._hasPersonProcessing();
          return (
            (n.$process_person_profile = p),
            p && this._requirePersonProcessing("_calculate_event_properties"),
            n
          );
        }
        _calculate_set_once_properties(e) {
          if (!this.persistence || !this._hasPersonProcessing()) return e;
          var t = ee({}, this.persistence.get_initial_props(), e || {}),
            i = this.config.sanitize_properties;
          return i && (t = i(t, "$set_once")), $(t) ? void 0 : t;
        }
        register(e, t) {
          var i;
          null === (i = this.persistence) || void 0 === i || i.register(e, t);
        }
        register_once(e, t, i) {
          var s;
          null === (s = this.persistence) ||
            void 0 === s ||
            s.register_once(e, t, i);
        }
        register_for_session(e) {
          var t;
          null === (t = this.sessionPersistence) ||
            void 0 === t ||
            t.register(e);
        }
        unregister(e) {
          var t;
          null === (t = this.persistence) || void 0 === t || t.unregister(e);
        }
        unregister_for_session(e) {
          var t;
          null === (t = this.sessionPersistence) ||
            void 0 === t ||
            t.unregister(e);
        }
        _register_single(e, t) {
          this.register({ [e]: t });
        }
        getFeatureFlag(e, t) {
          return this.featureFlags.getFeatureFlag(e, t);
        }
        getFeatureFlagPayload(e) {
          var t = this.featureFlags.getFeatureFlagPayload(e);
          try {
            return JSON.parse(t);
          } catch (e) {
            return t;
          }
        }
        isFeatureEnabled(e, t) {
          return this.featureFlags.isFeatureEnabled(e, t);
        }
        reloadFeatureFlags() {
          this.featureFlags.reloadFeatureFlags();
        }
        updateEarlyAccessFeatureEnrollment(e, t) {
          this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t);
        }
        getEarlyAccessFeatures(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return this.featureFlags.getEarlyAccessFeatures(e, t);
        }
        on(e, t) {
          return this._internalEventEmitter.on(e, t);
        }
        onFeatureFlags(e) {
          return this.featureFlags.onFeatureFlags(e);
        }
        onSessionId(e) {
          var t, i;
          return null !==
            (t =
              null === (i = this.sessionManager) || void 0 === i
                ? void 0
                : i.onSessionId(e)) && void 0 !== t
            ? t
            : () => {};
        }
        getSurveys(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys.getSurveys(e, t);
        }
        getActiveMatchingSurveys(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys.getActiveMatchingSurveys(e, t);
        }
        renderSurvey(e, t) {
          this.surveys.renderSurvey(e, t);
        }
        canRenderSurvey(e) {
          this.surveys.canRenderSurvey(e);
        }
        getNextSurveyStep(e, t, i) {
          return this.surveys.getNextSurveyStep(e, t, i);
        }
        identify(e, t, i) {
          if (!this.__loaded || !this.persistence)
            return z.uninitializedWarning("posthog.identify");
          if (
            (N(e) &&
              ((e = e.toString()),
              z.warn(
                "The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string."
              )),
            e)
          ) {
            if (["distinct_id", "distinctid"].includes(e.toLowerCase()))
              z.critical(
                'The string "'.concat(
                  e,
                  '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'
                )
              );
            else if (this._requirePersonProcessing("posthog.identify")) {
              var s = this.get_distinct_id();
              this.register({ $user_id: e }),
                this.get_property("$device_id") ||
                  this.register_once(
                    { $had_persisted_distinct_id: !0, $device_id: s },
                    ""
                  ),
                e !== s &&
                  e !== this.get_property(el) &&
                  (this.unregister(el), this.register({ distinct_id: e }));
              var n =
                "anonymous" ===
                (this.persistence.get_property(eL) || "anonymous");
              e !== s && n
                ? (this.persistence.set_property(eL, "identified"),
                  this.setPersonPropertiesForFlags(t || {}, !1),
                  this.capture(
                    "$identify",
                    { distinct_id: e, $anon_distinct_id: s },
                    { $set: t || {}, $set_once: i || {} }
                  ),
                  this.featureFlags.setAnonymousDistinctId(s))
                : (t || i) && this.setPersonProperties(t, i),
                e !== s && (this.reloadFeatureFlags(), this.unregister(eO));
            }
          } else z.error("Unique user id has not been set in posthog.identify");
        }
        setPersonProperties(e, t) {
          (e || t) &&
            this._requirePersonProcessing("posthog.setPersonProperties") &&
            (this.setPersonPropertiesForFlags(e || {}),
            this.capture("$set", { $set: e || {}, $set_once: t || {} }));
        }
        group(e, t, i) {
          if (e && t) {
            if (this._requirePersonProcessing("posthog.group")) {
              var s = this.getGroups();
              s[e] !== t && this.resetGroupPropertiesForFlags(e),
                this.register({ $groups: J(J({}, s), {}, { [e]: t }) }),
                i &&
                  (this.capture("$groupidentify", {
                    $group_type: e,
                    $group_key: t,
                    $group_set: i,
                  }),
                  this.setGroupPropertiesForFlags({ [e]: i })),
                s[e] === t || i || this.reloadFeatureFlags();
            }
          } else z.error("posthog.group requires a group type and group key");
        }
        resetGroups() {
          this.register({ $groups: {} }),
            this.resetGroupPropertiesForFlags(),
            this.reloadFeatureFlags();
        }
        setPersonPropertiesForFlags(e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          this.featureFlags.setPersonPropertiesForFlags(e, t);
        }
        resetPersonPropertiesForFlags() {
          this.featureFlags.resetPersonPropertiesForFlags();
        }
        setGroupPropertiesForFlags(e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") &&
            this.featureFlags.setGroupPropertiesForFlags(e, t);
        }
        resetGroupPropertiesForFlags(e) {
          this.featureFlags.resetGroupPropertiesForFlags(e);
        }
        reset(e) {
          if ((z.info("reset"), !this.__loaded))
            return z.uninitializedWarning("posthog.reset");
          var t,
            i,
            s,
            n,
            r,
            o = this.get_property("$device_id");
          if (
            (this.consent.reset(),
            null === (t = this.persistence) || void 0 === t || t.clear(),
            null === (i = this.sessionPersistence) || void 0 === i || i.clear(),
            null === (s = this.surveys) || void 0 === s || s.reset(),
            null === (n = this.persistence) ||
              void 0 === n ||
              n.set_property(eL, "anonymous"),
            null === (r = this.sessionManager) ||
              void 0 === r ||
              r.resetSessionId(),
            this.config.__preview_experimental_cookieless_mode)
          )
            this.register_once({ distinct_id: eU, $device_id: null }, "");
          else {
            var a = this.config.get_device_id(e3());
            this.register_once({ distinct_id: a, $device_id: e ? a : o }, "");
          }
        }
        get_distinct_id() {
          return this.get_property("distinct_id");
        }
        getGroups() {
          return this.get_property("$groups") || {};
        }
        get_session_id() {
          var e, t;
          return null !==
            (e =
              null === (t = this.sessionManager) || void 0 === t
                ? void 0
                : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e
            ? e
            : "";
        }
        get_session_replay_url(e) {
          if (!this.sessionManager) return "";
          var { sessionId: t, sessionStartTimestamp: i } =
              this.sessionManager.checkAndGetSessionAndWindowId(!0),
            s = this.requestRouter.endpointFor(
              "ui",
              "/project/".concat(this.config.token, "/replay/").concat(t)
            );
          if (null != e && e.withTimestamp && i) {
            var n,
              r = null !== (n = e.timestampLookBack) && void 0 !== n ? n : 10;
            if (!i) return s;
            var o = Math.max(
              Math.floor((new Date().getTime() - i) / 1e3) - r,
              0
            );
            s += "?t=".concat(o);
          }
          return s;
        }
        alias(e, t) {
          return e === this.get_property(ea)
            ? (z.critical(
                "Attempting to create alias for existing People user - aborting."
              ),
              -2)
            : this._requirePersonProcessing("posthog.alias")
            ? (O(t) && (t = this.get_distinct_id()),
              e !== t
                ? (this._register_single(el, e),
                  this.capture("$create_alias", { alias: e, distinct_id: t }))
                : (z.warn(
                    "alias matches current distinct_id - skipping api call."
                  ),
                  this.identify(e),
                  -1))
            : void 0;
        }
        set_config(e) {
          var t,
            i,
            s,
            n,
            r = J({}, this.config);
          T(e) &&
            (ee(this.config, n9(e)),
            null === (t = this.persistence) ||
              void 0 === t ||
              t.update_config(this.config, r),
            (this.sessionPersistence =
              "sessionStorage" === this.config.persistence ||
              "memory" === this.config.persistence
                ? this.persistence
                : new ie(
                    J(J({}, this.config), {}, { persistence: "sessionStorage" })
                  )),
            e9.is_supported() &&
              "true" === e9.get("ph_debug") &&
              (this.config.debug = !0),
            this.config.debug &&
              ((b.DEBUG = !0),
              z.info("set_config", {
                config: e,
                oldConfig: r,
                newConfig: J({}, this.config),
              })),
            null === (i = this.sessionRecording) ||
              void 0 === i ||
              i.startIfEnabledOrStop(),
            null === (s = this.autocapture) ||
              void 0 === s ||
              s.startIfEnabled(),
            null === (n = this.heatmaps) || void 0 === n || n.startIfEnabled(),
            this.surveys.loadIfEnabled(),
            this._sync_opt_out_with_persistence());
        }
        startSessionRecording(e) {
          var t,
            i,
            s,
            n,
            r,
            o = !0 === e,
            a = {
              sampling: o || !(null == e || !e.sampling),
              linked_flag: o || !(null == e || !e.linked_flag),
              url_trigger: o || !(null == e || !e.url_trigger),
              event_trigger: o || !(null == e || !e.event_trigger),
            };
          Object.values(a).some(Boolean) &&
            (null === (t = this.sessionManager) ||
              void 0 === t ||
              t.checkAndGetSessionAndWindowId(),
            a.sampling &&
              (null === (i = this.sessionRecording) ||
                void 0 === i ||
                i.overrideSampling()),
            a.linked_flag &&
              (null === (s = this.sessionRecording) ||
                void 0 === s ||
                s.overrideLinkedFlag()),
            a.url_trigger &&
              (null === (n = this.sessionRecording) ||
                void 0 === n ||
                n.overrideTrigger("url")),
            a.event_trigger &&
              (null === (r = this.sessionRecording) ||
                void 0 === r ||
                r.overrideTrigger("event"))),
            this.set_config({ disable_session_recording: !1 });
        }
        stopSessionRecording() {
          this.set_config({ disable_session_recording: !0 });
        }
        sessionRecordingStarted() {
          var e;
          return !(
            null === (e = this.sessionRecording) ||
            void 0 === e ||
            !e.started
          );
        }
        captureException(e, t) {
          var i,
            s = Error("PostHog syntheticException"),
            n = F(
              null === (i = m.__PosthogExtensions__) || void 0 === i
                ? void 0
                : i.parseErrorAsProperties
            )
              ? m.__PosthogExtensions__.parseErrorAsProperties(
                  [e.message, void 0, void 0, void 0, e],
                  { syntheticException: s }
                )
              : J(
                  {
                    $exception_level: "error",
                    $exception_list: [
                      {
                        type: e.name,
                        value: e.message,
                        mechanism: { handled: !0, synthetic: !1 },
                      },
                    ],
                  },
                  t
                );
          this.exceptions.sendExceptionEvent(n);
        }
        loadToolbar(e) {
          return this.toolbar.loadToolbar(e);
        }
        get_property(e) {
          var t;
          return null === (t = this.persistence) || void 0 === t
            ? void 0
            : t.props[e];
        }
        getSessionProperty(e) {
          var t;
          return null === (t = this.sessionPersistence) || void 0 === t
            ? void 0
            : t.props[e];
        }
        toString() {
          var e,
            t = null !== (e = this.config.name) && void 0 !== e ? e : n8;
          return t !== n8 && (t = n8 + "." + t), t;
        }
        _isIdentified() {
          var e, t;
          return (
            "identified" ===
              (null === (e = this.persistence) || void 0 === e
                ? void 0
                : e.get_property(eL)) ||
            "identified" ===
              (null === (t = this.sessionPersistence) || void 0 === t
                ? void 0
                : t.get_property(eL))
          );
        }
        _hasPersonProcessing() {
          var e, t, i, s;
          return !(
            "never" === this.config.person_profiles ||
            ("identified_only" === this.config.person_profiles &&
              !this._isIdentified() &&
              $(this.getGroups()) &&
              (null === (e = this.persistence) ||
                void 0 === e ||
                null === (t = e.props) ||
                void 0 === t ||
                !t[el]) &&
              (null === (i = this.persistence) ||
                void 0 === i ||
                null === (s = i.props) ||
                void 0 === s ||
                !s[eB]))
          );
        }
        _shouldCapturePageleave() {
          return (
            !0 === this.config.capture_pageleave ||
            ("if_capture_pageview" === this.config.capture_pageleave &&
              this.config.capture_pageview)
          );
        }
        createPersonProfile() {
          this._hasPersonProcessing() ||
            (this._requirePersonProcessing("posthog.createPersonProfile") &&
              this.setPersonProperties({}, {}));
        }
        _requirePersonProcessing(e) {
          return "never" === this.config.person_profiles
            ? (z.error(
                e +
                  ' was called, but process_person is set to "never". This call will be ignored.'
              ),
              !1)
            : (this._register_single(eB, !0), !0);
        }
        _sync_opt_out_with_persistence() {
          var e,
            t,
            i,
            s,
            n = this.consent.isOptedOut(),
            r = this.config.opt_out_persistence_by_default,
            o = this.config.disable_persistence || (n && !!r);
          (null === (e = this.persistence) || void 0 === e
            ? void 0
            : e.disabled) !== o &&
            (null === (i = this.persistence) ||
              void 0 === i ||
              i.set_disabled(o)),
            (null === (t = this.sessionPersistence) || void 0 === t
              ? void 0
              : t.disabled) !== o &&
              (null === (s = this.sessionPersistence) ||
                void 0 === s ||
                s.set_disabled(o));
        }
        opt_in_capturing(e) {
          var t;
          this.consent.optInOut(!0),
            this._sync_opt_out_with_persistence(),
            (O(null == e ? void 0 : e.captureEventName) ||
              (null != e && e.captureEventName)) &&
              this.capture(
                null !== (t = null == e ? void 0 : e.captureEventName) &&
                  void 0 !== t
                  ? t
                  : "$opt_in",
                null == e ? void 0 : e.captureProperties,
                { send_instantly: !0 }
              ),
            this.config.capture_pageview && this._captureInitialPageview();
        }
        opt_out_capturing() {
          this.consent.optInOut(!1), this._sync_opt_out_with_persistence();
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn();
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut();
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence();
        }
        _is_bot() {
          return d ? n$(d, this.config.custom_blocked_useragents) : void 0;
        }
        _captureInitialPageview() {
          h &&
            !this._initialPageviewCaptured &&
            ((this._initialPageviewCaptured = !0),
            this.capture(
              "$pageview",
              { title: h.title },
              { send_instantly: !0 }
            ));
        }
        debug(e) {
          !1 === e
            ? (null == o || o.console.log("You've disabled debug mode."),
              localStorage && localStorage.removeItem("ph_debug"),
              this.set_config({ debug: !1 }))
            : (null == o ||
                o.console.log(
                  "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                ),
              localStorage && localStorage.setItem("ph_debug", "true"),
              this.set_config({ debug: !0 }));
        }
        _runBeforeSend(e) {
          if (D(this.config.before_send)) return e;
          var t = R(this.config.before_send)
              ? this.config.before_send
              : [this.config.before_send],
            i = e;
          for (var s of t) {
            if (D((i = s(i)))) {
              var n = "Event '".concat(
                e.event,
                "' was rejected in beforeSend function"
              );
              return (
                H(e.event)
                  ? z.warn(
                      "".concat(n, ". This can cause unexpected behavior.")
                    )
                  : z.info(n),
                null
              );
            }
            (i.properties && !$(i.properties)) ||
              z.warn(
                "Event '".concat(
                  e.event,
                  "' has no properties after beforeSend function, this is likely an error."
                )
              );
          }
          return i;
        }
      }
      !(function (e, t) {
        for (var i = 0; i < t.length; i++)
          e.prototype[t[i]] = es(e.prototype[t[i]]);
      })(rt, ["identify"]);
      var ri,
        rs,
        rn,
        rr,
        ro,
        ra,
        rl =
          ((ra = n5[n8] = new rt()),
          (function () {
            function e() {
              e.done ||
                ((e.done = !0),
                (n4 = !1),
                Z(n5, function (e) {
                  e._dom_loaded();
                }));
            }
            null != h &&
              h.addEventListener &&
              ("complete" === h.readyState
                ? e()
                : h.addEventListener("DOMContentLoaded", e, !1)),
              o && er(o, "load", e, !0);
          })(),
          ra);
    },
  },
]);
