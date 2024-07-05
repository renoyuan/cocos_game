System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, req, loader, d, _crd;

  function _reportPossibleCrUseOfreq(extras) {
    _reporterNs.report("req", "./AudioUtils.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfd(extras) {
    _reporterNs.report("d", "./AudioUtils.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_unresolved_2) {
      req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      loader = _unresolved_3.default;
    }, function (_unresolved_4) {
      var _exportObj = {};

      for (var _key in _unresolved_4) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _unresolved_4[_key];
      }

      _export(_exportObj);
    }, function (_unresolved_5) {
      d = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true; // I am the facade module who provides access to the CommonJS module './AudioUtils.js'~

      if (!(_crd && req === void 0 ? (_reportPossibleCrUseOfreq({
        error: Error()
      }), req) : req)) {
        loader.throwInvalidWrapper('./AudioUtils.js', _context.meta.url);
      }

      loader.require(_crd && req === void 0 ? (_reportPossibleCrUseOfreq({
        error: Error()
      }), req) : req);

      _export("default", d);

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f748ec3da5d0cbd9bdd57c12143329289f6a8b8.js.map