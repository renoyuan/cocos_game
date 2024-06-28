System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider, Constant, _dec, _class, _crd, ccclass, property, SlefPlane;

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd111QUtvlHcabP+BkM9uu7", "SlefPlane", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Touch', 'EventTouch', 'EventTarget', 'input', 'Input', 'Collider', 'ITriggerEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlefPlane", SlefPlane = (_dec = ccclass('SlefPlane'), _dec(_class = class SlefPlane extends Component {
        update(deltaTime) {}

        onDisable() {
          var collider = this.getComponent(Collider);
          collider.off('onTriggerEnter', this._onTriggerEnter, this);
        }

        onEnable() {
          var collider = this.getComponent(Collider);
          collider.on('onTriggerEnter', this._onTriggerEnter, this);
        }

        _onTriggerEnter(event) {
          var collisionGroup = event.otherCollider.getGroup();

          if (collisionGroup == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).ColliderType.ENEMY || collisionGroup == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).ColliderType.ENEMY_BULLET) {
            console.log("reduce blood");
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=974916829426e2e2c1017a6c68a1cc54f20491c8.js.map