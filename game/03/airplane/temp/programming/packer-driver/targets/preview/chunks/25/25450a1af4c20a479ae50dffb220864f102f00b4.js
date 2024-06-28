System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider, Constant, _dec, _class, _class2, _descriptor, _crd, ccclass, property, OUTOFBOUNCE, EnemyPlane;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../framework/GameManager", _context.meta, extras);
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

      _cclegacy._RF.push({}, "1f3ccbn67VCT54g6rKeQv/9", "EnemyPlane", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider', 'ITriggerEvent']);

      ({
        ccclass,
        property
      } = _decorator);
      OUTOFBOUNCE = 40;

      _export("EnemyPlane", EnemyPlane = (_dec = ccclass('EnemyPlane'), _dec(_class = (_class2 = class EnemyPlane extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "createBulletTime", _descriptor, this);

          this._enemySpeed = 0;
          this._needBullet = false;
          this._gameManager = null;
          this._currCreateBulletTime = 0;
        }

        start() {}

        update(deltaTime) {
          var pos = this.node.position;
          var movePos = pos.z + this._enemySpeed;
          this.node.setPosition(pos.x, pos.y, movePos);

          if (this._needBullet) {
            this._currCreateBulletTime += deltaTime;

            if (this._currCreateBulletTime > this.createBulletTime) {
              this._gameManager.createEnemyBullet(this.node.position);

              console.log("createEnemyBullet");
              this._currCreateBulletTime = 0;
            }
          }

          if (movePos > OUTOFBOUNCE) {
            this.node.destroy();
          }
        }

        show(gameManager, speed, needBullet) {
          this._gameManager = gameManager;
          this._enemySpeed = speed;
          this._needBullet = needBullet;
        }

        onDisable() {
          var collider = this.getComponent(Collider);
          collider.off('onTriggerEnter', this._onTriggerEnter, this);
          console.log("enemy onTriggerEnter");
        }

        onEnable() {
          var collider = this.getComponent(Collider);
          collider.on('onTriggerEnter', this._onTriggerEnter, this);
        }

        _onTriggerEnter(event) {
          var collisionGroup = event.otherCollider.getGroup();

          if (collisionGroup == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).ColliderType.PLAYER || collisionGroup == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).ColliderType.BULLET) {
            console.log("BOOM destroy  enemy");
            this.node.destroy();

            this._gameManager.addScore();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "createBulletTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25450a1af4c20a479ae50dffb220864f102f00b4.js.map