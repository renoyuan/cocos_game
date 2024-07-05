System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AudioSource, Button, GameModel, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameModel(extras) {
    _reporterNs.report("GameModel", "../model/GameModel", _context.meta, extras);
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
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      GameModel = _unresolved_2.GameModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74d07sOSsNOYISWxEpfYDNS", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      // Game 场景主体
      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(AudioSource), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "grid", _descriptor, this);

          // 网格组件
          _initializerDefineProperty(this, "audioButton", _descriptor2, this);

          _initializerDefineProperty(this, "audioSource", _descriptor3, this);
        }

        onAudioButton(event, custom) {
          custom === "1" ? this.audioSource.pause() : this.audioSource.play(); //Toast(state === 1 ? '关闭背景音乐🎵' : '打开背景音乐🎵' )
        }

        onLoad() {
          // let audioButton = this.node.parent.getChildByName('audioButton')
          // init gamemodel
          const gameModel = new (_crd && GameModel === void 0 ? (_reportPossibleCrUseOfGameModel({
            error: Error()
          }), GameModel) : GameModel)();
          gameModel.init(4);
          const gridScript = this.grid.getComponent("GridView"); // gridScript.setController(this); // 传入setController 节点
          // gridScript.initWithCellModels(this.gameModel.getCells());
          // this.audioSource = cc.find('Canvas/GameScene')._components[1].audio;
          // this.audioSource = cc.find('Canvas/GameScene')._components[1].audio;
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "grid", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=889752235ed96e08c65fe26dd6e4c64d6b7b0909.js.map