System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, CELL_STATUS, CELL_WIDTH, CELL_HEIGHT, ANITIME, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GridView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCELL_STATUS(extras) {
    _reporterNs.report("CELL_STATUS", "../model/Const", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCELL_WIDTH(extras) {
    _reporterNs.report("CELL_WIDTH", "../model/Const", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCELL_HEIGHT(extras) {
    _reporterNs.report("CELL_HEIGHT", "../model/Const", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANITIME(extras) {
    _reporterNs.report("ANITIME", "../model/Const", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CELL_STATUS = _unresolved_2.CELL_STATUS;
      CELL_WIDTH = _unresolved_2.CELL_WIDTH;
      CELL_HEIGHT = _unresolved_2.CELL_HEIGHT;
      ANITIME = _unresolved_2.ANITIME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63561/O7fNHJJdwK7eBIcip", "GridView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'v2', 'SpriteFrame', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      // 控制游戏内的网格元素特效
      _export("GridView", GridView = (_dec = ccclass('GridView'), _dec2 = property(SpriteFrame), _dec3 = property(Animation), _dec(_class = (_class2 = class GridView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "defaultFrame", _descriptor, this);

          _initializerDefineProperty(this, "animation", _descriptor2, this);

          this.isSelect = false;
          this.controller = null;
        }

        onLoad() {
          //this.model = null;
          this.isSelect = false;
        }

        initWithModel(model) {
          var x = (_crd && CELL_WIDTH === void 0 ? (_reportPossibleCrUseOfCELL_WIDTH({
            error: Error()
          }), CELL_WIDTH) : CELL_WIDTH) * (model.startX - 0.5);
          var y = (_crd && CELL_HEIGHT === void 0 ? (_reportPossibleCrUseOfCELL_HEIGHT({
            error: Error()
          }), CELL_HEIGHT) : CELL_HEIGHT) * (model.startY - 0.5);
          this.node.setPosition(x, y);

          if (model.status == (_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
            error: Error()
          }), CELL_STATUS) : CELL_STATUS).COMMON) {
            this.animation.pause();
          } else {
            this.animation.play();
          }
        }

        setController(controller) {
          this.controller = controller;
        } // 执行移动动作


        updateView(model) {
          var _this = this;

          var cmd = model.cmd;

          if (cmd.length <= 0) {
            return;
          }

          var actionArray = [];
          var curTime = 0;

          var _loop = function _loop() {
            if (cmd[i].playTime > curTime) {
              var delay = cmd[i].playTime - curTime;
              actionArray.push(delay);
            }

            if (cmd[i].action == "moveTo") {
              var x = (cmd[i].pos.x - 0.5) * (_crd && CELL_WIDTH === void 0 ? (_reportPossibleCrUseOfCELL_WIDTH({
                error: Error()
              }), CELL_WIDTH) : CELL_WIDTH);
              var y = (cmd[i].pos.y - 0.5) * (_crd && CELL_HEIGHT === void 0 ? (_reportPossibleCrUseOfCELL_HEIGHT({
                error: Error()
              }), CELL_HEIGHT) : CELL_HEIGHT);
              move = cc.moveTo((_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
                error: Error()
              }), ANITIME) : ANITIME).TOUCH_MOVE, cc.v2(x, y));
              actionArray.push(move);
            } else if (cmd[i].action == "toDie") {
              if (_this.status == (_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
                error: Error()
              }), CELL_STATUS) : CELL_STATUS).BIRD) {
                var _animation = _this.node.getComponent(cc.Animation);

                _animation.play("effect");

                actionArray.push(cc.delayTime((_crd && ANITIME === void 0 ? (_reportPossibleCrUseOfANITIME({
                  error: Error()
                }), ANITIME) : ANITIME).BOMB_BIRD_DELAY));
              }

              callFunc = cc.callFunc(function () {
                this.node.destroy();
              }, _this);
              actionArray.push(callFunc);
            } else if (cmd[i].action == "setVisible") {
              var isVisible = cmd[i].isVisible;
              actionArray.push(cc.callFunc(function () {
                if (isVisible) {
                  this.node.opacity = 255;
                } else {
                  this.node.opacity = 0;
                }
              }, _this));
            } else if (cmd[i].action == "toShake") {
              var rotateRight = cc.rotateBy(0.06, 30);
              var rotateLeft = cc.rotateBy(0.12, -60);
              actionArray.push(cc.repeat(cc.sequence(rotateRight, rotateLeft, rotateRight), 2));
            }

            curTime = cmd[i].playTime + cmd[i].keepTime;
          },
              move,
              callFunc;

          for (var i in cmd) {
            _loop();
          }

          if (actionArray.length == 1) {
            this.node.runAction(actionArray[0]);
          } else {
            this.node.runAction(cc.sequence(...actionArray));
          }
        }

        setSelect(flag) {
          var bg = this.node.getChildByName("select");

          if (flag == false && this.isSelect && this.model.status == (_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
            error: Error()
          }), CELL_STATUS) : CELL_STATUS).COMMON) {
            this.animation.pause();
            this.node.getComponent(cc.Sprite).spriteFrame = this.defaultFrame;
          } else if (flag && this.model.status == (_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
            error: Error()
          }), CELL_STATUS) : CELL_STATUS).COMMON) {
            animation.play((_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
              error: Error()
            }), CELL_STATUS) : CELL_STATUS).CLICK);
          } else if (flag && this.model.status == (_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
            error: Error()
          }), CELL_STATUS) : CELL_STATUS).BIRD) {
            animation.play((_crd && CELL_STATUS === void 0 ? (_reportPossibleCrUseOfCELL_STATUS({
              error: Error()
            }), CELL_STATUS) : CELL_STATUS).CLICK);
          }

          bg.active = flag;
          this.isSelect = flag;
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
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
//# sourceMappingURL=4514b2d587caffdfed7db22675702e90c3c90b82.js.map