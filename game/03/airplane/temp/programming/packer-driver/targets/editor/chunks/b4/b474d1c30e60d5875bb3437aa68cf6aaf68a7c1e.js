System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Collider, AudioSource, Constant, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SelfPlane;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      Collider = _cc.Collider;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c839482eSFDR5T6mXfibPxw", "SelfPlane", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider', 'ITriggerEvent', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SelfPlane
       * DateTime = Mon Nov 15 2021 10:27:19 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = SelfPlane.ts
       * FileBasenameNoExtension = SelfPlane
       * URL = db://assets/script/SelfPlane.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("SelfPlane", SelfPlane = (_dec = ccclass('SelfPlane'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class SelfPlane extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "explode", _descriptor, this);

          _initializerDefineProperty(this, "bloodFace", _descriptor2, this);

          _initializerDefineProperty(this, "blood", _descriptor3, this);

          this.lifeValue = 5;
          this.isDie = false;
          this._currLife = 0;
          this._audioEffect = null;
        }

        start() {
          this._audioEffect = this.getComponent(AudioSource);
        }

        onEnable() {
          const collider = this.getComponent(Collider);
          collider.on('onTriggerEnter', this._onTriggerEnter, this);
        }

        onDisable() {
          const collider = this.getComponent(Collider);
          collider.off('onTriggerEnter', this._onTriggerEnter, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        init() {
          this._currLife = this.lifeValue;
          this.isDie = false;
          this.explode.active = false;
          this.bloodFace.setScale(1, 1, 1);
        }

        _onTriggerEnter(event) {
          // some trick to fix "trigger vs trigger problem" in physx
          if (event.otherCollider.material.friction == 100) {
            return;
          }

          const collisionGroup = event.otherCollider.getGroup();

          if (collisionGroup === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).CollisionType.ENEMY_PLANE || collisionGroup === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).CollisionType.ENEMY_BULLET) {
            if (this._currLife === this.lifeValue) {
              this.blood.active = true;
            }

            this._currLife--;
            this.bloodFace.setScale(this._currLife / this.lifeValue, 1, 1);

            if (this._currLife <= 0) {
              this.isDie = true;

              this._audioEffect.play();

              this.explode.active = true;
              this.blood.active = false;
              console.log('self plane is die');
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "explode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bloodFace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blood", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b474d1c30e60d5875bb3437aa68cf6aaf68a7c1e.js.map