System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ProgressBar, Button, AudioClip, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, LoginController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      Button = _cc.Button;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef6edDebJRDwaOnEqEJfvQ9", "LoginController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar', 'Button', 'AudioClip', 'AudioSource', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginController", LoginController = (_dec = ccclass('LoginController'), _dec2 = property(ProgressBar), _dec3 = property(Button), _dec4 = property(AudioClip), _dec5 = property(AudioSource), _dec(_class = (_class2 = class LoginController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loadingBar", _descriptor, this);

          _initializerDefineProperty(this, "loginButton", _descriptor2, this);

          _initializerDefineProperty(this, "worldSceneBGM", _descriptor3, this);

          _initializerDefineProperty(this, "audioSource", _descriptor4, this);
        }

        start() {}

        onLoad() {
          // 确保你的AudioSource组件已经被添加到节点上
          this.audioSource = this.node.getComponent(AudioSource); // 设置音频循环播放

          this.audioSource.loop = true; // 开始播放音频

          this.audioSource.play();
        }

        onDestroy() {
          this.audioSource.stop();
        }

        onLogin() {
          // 滚动条设置
          var last = 0;
          console.log(this.loadingBar);
          this.loadingBar.node.active = true;
          this.loginButton.node.active = false;
          this.loadingBar.progress = 0;
          this.loadingBar.barSprite.fillRange = 0; //loadingBar
          // onProgress() (count, amount, item) => {
          //     let progress:number = parseFloat((count / amount).toFixed(2));
          //     if (progress > this.loadingBar.progress) {
          //       this.loadingBar.progress  = progress;
          //     }
          //   };
          //preloadScene
          // director.preloadScene("Game", function () {
          // this.loadingBar.node.active = false;
          // this.loginButton.node.active = false;
          // director.loadScene("Game");
          // cc.log("加载成功");
          // });
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loginButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "worldSceneBGM", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fbcf6143103fb52859feebe21af050cdc85c37d.js.map