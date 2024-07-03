System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider, Component, Constant, PoolManager, _dec, _class, _crd, ccclass, property, OUTRANGE, ENEMYOUTRANGE, Bullet;

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
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
      Collider = _cc.Collider;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29575GxgTFH85HbGxUHjO3p", "Bullet", undefined);

      __checkObsolete__(['_decorator', 'Collider', 'Component', 'ITriggerEvent', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      OUTRANGE = -40;
      ENEMYOUTRANGE = 40;

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = class Bullet extends Component {
        constructor() {
          super(...arguments);
          this.bulletSpeed = 0;
          this._direction = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Direction.MIDDLE;
          this._isEnemyBullet = false;
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
          var moveLength = 0;

          if (this._isEnemyBullet) {
            // 往 +z 方向
            moveLength = pos.z + this.bulletSpeed;
            this.node.setPosition(pos.x, pos.y, moveLength);

            if (moveLength > ENEMYOUTRANGE) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance().putNode(this.node); // this.node.destroy();
              // console.log('enemy bullet destroy');
            }
          } else {
            // 往 -z 方向
            moveLength = pos.z - this.bulletSpeed; // console.info("bullet moveZ" ,moveLength,OUTRANGE)
            // bullet move

            if (this._direction === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Direction.LEFT) {
              this.node.setPosition(pos.x - this.bulletSpeed * 0.2, pos.y, moveLength);
            } else if (this._direction === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Direction.RIGHT) {
              this.node.setPosition(pos.x + this.bulletSpeed * 0.2, pos.y, moveLength);
            } else {
              this.node.setPosition(pos.x, pos.y, moveLength);
            }

            if (moveLength < OUTRANGE) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance().putNode(this.node); // this.node.destroy();//销毁子弹
              // console.info("bullet destroy" ,moveLength,OUTRANGE)
            }
          }
        }

        show(speed, isEnemyBullet, direction) {
          if (direction === void 0) {
            direction = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Direction.MIDDLE;
          }

          this.bulletSpeed = speed;
          this._isEnemyBullet = isEnemyBullet;
          this._direction = direction;
        }

        _onTriggerEnter(event) {
          // console.log('trigger  bullet destroy');
          // this.node.destroy();
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().putNode(this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d066e09c21b41646e5a3a6857e5e4058f896294.js.map