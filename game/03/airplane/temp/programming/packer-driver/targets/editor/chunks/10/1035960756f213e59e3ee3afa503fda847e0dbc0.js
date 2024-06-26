System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, Bullet, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "976aflcBOdLpJhZLrgnsfXN", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "selfPlane", _descriptor, this);

          _initializerDefineProperty(this, "bulletRoot", _descriptor2, this);

          // 子弹根节点
          _initializerDefineProperty(this, "bullet01", _descriptor3, this);

          _initializerDefineProperty(this, "bullet02", _descriptor4, this);

          _initializerDefineProperty(this, "bullet03", _descriptor5, this);

          _initializerDefineProperty(this, "bullet04", _descriptor6, this);

          _initializerDefineProperty(this, "bullet05", _descriptor7, this);

          _initializerDefineProperty(this, "shootTime", _descriptor8, this);

          // 射击周期 
          this._curShootTime = 0;
          // 当前等待时间
          this._isShooting = false;

          _initializerDefineProperty(this, "bulletSpeed", _descriptor9, this);
        }

        // 子弹速度
        isShooting(v) {
          // UIMain 中判断是否能开始发射子弹
          this._isShooting = v;
        }

        start() {
          this._init();
        }

        _init() {
          // 第一发子弹不用等待
          this._curShootTime = this.shootTime;
        }

        createSelpBullet() {
          // 创建子弹
          const bullet = instantiate(this.bullet01); // 实例化预制件

          this.node.addChild(bullet); // bullet.setParent(this.bulletRoot) // 子弹实例放入子弹根节点

          const pos = this.selfPlane.position; // 获取飞机位置 找到子弹初始位置

          bullet.setPosition(pos.x, pos.y, pos.z - 7);
          const bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet); // 获取节点上的组件 -- 子弹类
          // console.info("bulletComp", bulletComp)

          bulletComp.bulletSpeed = this.bulletSpeed; // 更新子弹移动速度

          console.info("create bullet ok", pos.x, pos.y, pos.z - 7, bullet.active);
        }

        update(deltaTime) {
          this._curShootTime += deltaTime;

          if (this._isShooting && this._curShootTime > this.shootTime) {
            // 玩家飞机生产子弹
            this.createSelpBullet();
            this._curShootTime = 0;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bullet01", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bullet02", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullet03", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bullet04", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bullet05", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "shootTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bulletSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1035960756f213e59e3ee3afa503fda847e0dbc0.js.map