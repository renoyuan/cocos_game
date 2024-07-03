System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider, Constant, PoolManager, _dec, _class, _crd, ccclass, property, BulletProp;

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../framework/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../framework/PoolManager", _context.meta, extras);
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
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d351VWDVBPOL25g4/P5xJW", "BulletProp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider', 'ITriggerEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletProp", BulletProp = (_dec = ccclass('BulletProp'), _dec(_class = class BulletProp extends Component {
        constructor() {
          super(...arguments);
          this._propSpeed = 0.3;
          this._propXSpeed = 0.3;
          this._gameManager = null;
        }

        onEnable() {
          var collider = this.getComponent(Collider);
          collider.on('onTriggerEnter', this._onTriggerEnter, this);
        }

        onDisable() {
          var collider = this.getComponent(Collider);
          collider.off('onTriggerEnter', this._onTriggerEnter, this);
        }

        start() {}

        update(deltaTime) {
          var pos = this.node.position;

          if (pos.x >= 15) {
            this._propXSpeed = -this._propSpeed;
          } else if (pos.x <= -15) {
            this._propXSpeed = this._propSpeed;
          }

          this.node.setPosition(pos.x + this._propXSpeed, pos.y, pos.z + this._propSpeed);
          pos = this.node.position;

          if (pos.z > 40) {
            // console.log("BulletProp destroy")
            // this.node.destroy();
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().putNode(this.node);
          }
        }

        show(gameManager, speed) {
          this._gameManager = gameManager;
          this._propSpeed = speed;
        }

        _onTriggerEnter(event) {
          var name = event.selfCollider.node.name;

          if (name === 'bulletH') {
            this._gameManager.changeBulletType((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_H);
          } else if (name === 'bulletS') {
            this._gameManager.changeBulletType((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_S);
          } else {
            this._gameManager.changeBulletType((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_M);
          }

          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6547ad624f5712065025ab07a45093d165bcfe64.js.map