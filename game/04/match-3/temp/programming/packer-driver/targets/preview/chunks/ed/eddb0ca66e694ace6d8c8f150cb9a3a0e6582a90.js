System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, AudioUtils;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba4c7+SUjdOQIko6sj8NAAY", "AudioUtils", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'v2', 'SpriteFrame', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioUtils", AudioUtils = (_dec = ccclass('AudioUtils'), _dec(_class = class AudioUtils extends Component {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eddb0ca66e694ace6d8c8f150cb9a3a0e6582a90.js.map