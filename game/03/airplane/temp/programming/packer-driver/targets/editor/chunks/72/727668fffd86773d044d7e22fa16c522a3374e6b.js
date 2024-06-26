System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SystemEvent, GameManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, UIMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      SystemEvent = _cc.SystemEvent;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0f4aCpPB1Ce52fft+ETTQN", "UIMainod", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'systemEvent', 'SystemEvent', 'Touch', 'EventTouch', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = UIMain
       * DateTime = Mon Nov 15 2021 14:10:01 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = UIMain.ts
       * FileBasenameNoExtension = UIMain
       * URL = db://assets/script/ui/UIMain.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("UIMain", UIMain = (_dec = ccclass('UIMain'), _dec2 = property(Node), _dec3 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class UIMain extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "planeSpeed", _descriptor, this);

          _initializerDefineProperty(this, "playerPlane", _descriptor2, this);

          _initializerDefineProperty(this, "gameManager", _descriptor3, this);

          _initializerDefineProperty(this, "gameStart", _descriptor4, this);

          _initializerDefineProperty(this, "game", _descriptor5, this);

          _initializerDefineProperty(this, "gameOver", _descriptor6, this);
        }

        start() {
          this.node.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
          this.node.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
          this.node.on(SystemEvent.EventType.TOUCH_END, this._touchEnd, this);
          this.gameStart.active = true;
        } // update (deltaTime: number) {
        //     // [4]
        // }


        reStart() {
          this.gameOver.active = false;
          this.game.active = true;
          this.gameManager.playAudioEffect('button');
          this.gameManager.gameReStart();
        }

        returnMain() {
          this.gameOver.active = false;
          this.gameStart.active = true;
          this.gameManager.playAudioEffect('button');
          this.gameManager.returnMain();
        }

        _touchStart(touch, event) {
          if (this.gameManager.isGameStart) {
            this.gameManager.isShooting(true);
          } else {
            this.gameStart.active = false;
            this.game.active = true;
            this.gameManager.playAudioEffect('button');
            this.gameManager.gameStart();
          }
        }

        _touchMove(touch, event) {
          if (!this.gameManager.isGameStart) {
            return;
          }

          const delta = touch.getDelta();
          let pos = this.playerPlane.position;
          this.playerPlane.setPosition(pos.x + 0.01 * this.planeSpeed * delta.x, pos.y, pos.z - 0.01 * this.planeSpeed * delta.y);
        }

        _touchEnd(touch, event) {
          if (!this.gameManager.isGameStart) {
            return;
          }

          this.gameManager.isShooting(false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "planeSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameStart", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameOver", [_dec6], {
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
//# sourceMappingURL=727668fffd86773d044d7e22fa16c522a3374e6b.js.map