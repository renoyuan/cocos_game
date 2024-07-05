System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        cc.Class({
          extends: cc.Component,
          properties: {
            swap: {
              type: cc.AudioClip,
              default: null
            },
            click: {
              type: cc.AudioClip,
              default: null
            },
            eliminate: {
              type: [cc.AudioClip],
              default: []
            },
            continuousMatch: {
              type: [cc.AudioClip],
              default: []
            }
          },

          // LIFE-CYCLE CALLBACKS:
          onLoad() {},

          start() {},

          playClick: function playClick() {
            cc.audioEngine.play(this.click, false, 1);
          },
          playSwap: function playSwap() {
            cc.audioEngine.play(this.swap, false, 1);
          },
          playEliminate: function playEliminate(step) {
            step = Math.min(this.eliminate.length - 1, step);
            cc.audioEngine.play(this.eliminate[step], false, 1);
          },
          playContinuousMatch: function playContinuousMatch(step) {
            console.log("step = ", step);
            step = Math.min(step, 11);

            if (step < 2) {
              return;
            }

            cc.audioEngine.play(this.continuousMatch[Math.floor(step / 2) - 1], false, 1);
          } // update (dt) {},

        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=73f293b4d0835bd2c931abcaf47fd9d3ed5a1033.js.map