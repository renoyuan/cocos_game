System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, Vec3, Animation, SkeletalAnimation, AudioClip, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, PlayerController;

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
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      SkeletalAnimation = _cc.SkeletalAnimation;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72fa9UQXkZPe790p9RzEw2c", "PlayerController", undefined);

      // import {AudioMgr} from "./AudioMgr"
      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'EventMouse', 'EventTouch', 'Vec3', 'Animation', 'SkeletalAnimation', 'AudioClip', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: SkeletalAnimation
      }), _dec3 = property({
        type: Animation
      }), _dec4 = property(AudioClip), _dec5 = property(AudioSource), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "CocosAnim", _descriptor, this);

          // 添加动画属性
          _initializerDefineProperty(this, "BodyAnim", _descriptor2, this);

          // 跳跃音效资源
          _initializerDefineProperty(this, "clip", _descriptor3, this);

          // 音效控制
          _initializerDefineProperty(this, "audioSource", _descriptor4, this);

          // 触碰节点
          _initializerDefineProperty(this, "OneTouch", _descriptor5, this);

          _initializerDefineProperty(this, "TwoTouch", _descriptor6, this);

          // private audioMgr: AudioMgr = null!;
          // 是否接收到跳跃指令
          this._startJump = false;
          // 跳跃步长
          this._jumpStep = 0;
          // 当前跳跃时间
          this._curJumpTime = 0;
          // 每次跳跃时长
          this._jumpTime = 0.3;
          // 当前跳跃速度
          this._curJumpSpeed = 0;
          // 当前角色位置
          this._curPos = new Vec3();
          // 当前角色上一个位置
          this._lastPos = new Vec3();
          // 每次跳跃过程中，当前帧移动位置差
          this._deltaPos = new Vec3(0, 0, 0);
          // 角色目标位置
          this._targetPos = new Vec3();
          this._curMoveIndex = 0;

          // 停留时间
          _initializerDefineProperty(this, "stayTime", _descriptor7, this);
        }

        // 播放音效
        playOneShot() {
          // this.audioMgr.playOneShot(this.clip, 1);
          this.audioSource.playOneShot(this.clip, 1);
        }

        start() {// input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        reset() {
          // 清空步数以及等待时间
          this._curMoveIndex = 0;
          this.stayTime = 0;
        } // 激活鼠标监控 主程序控制


        setInputActive(active) {
          if (active) {
            input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
            this.OneTouch.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            this.TwoTouch.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          } else {
            input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
            this.OneTouch.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
            this.TwoTouch.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          }
        } //   监控鼠标事件在 EventMouse


        onMouseUp(event) {
          // 如果是鼠标左键，那么 getButton 方法会返回 0，而如果是右键，则返回 2。
          if (event.getButton() === 0) {
            this.jumpByStep(1);
          } else if (event.getButton() === 2) {
            this.jumpByStep(2);
          }
        } // 监控触摸事件 回调


        onTouchStart(event) {
          var target = event.target;

          if ((target == null ? void 0 : target.name) == 'OneTouch') {
            this.jumpByStep(1);
          } else if ((target == null ? void 0 : target.name) == 'TwoTouch') {
            this.jumpByStep(2);
          } else {
            console.log("无效touch");
          }
        } //计算目标位置、速度的方法 移动 && 运行动画


        jumpByStep(step) {
          // 执行跳跃中则不运行动画
          if (this._startJump) {
            return;
          }

          this._startJump = true; // 表示开始跳跃

          this._jumpStep = step; // 本次跳跃的步数

          this._curJumpTime = 0; // 重置下跳跃的时间

          this._curJumpSpeed = this._jumpStep / this._jumpTime; // 计算跳跃的速度

          this.node.getPosition(this._curPos); // 获取角色当前的位置放入this._curPos
          // 计算目标位置 目标位置 = 当前位置 + 步长 向量加法 结果存在 _targetPos 中

          Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0)); // 播放动画

          if (this.CocosAnim) {
            if (step === 1 || step === 2) {
              this.playOneShot();
              this.CocosAnim.getState('cocos_anim_jump').speed = 3.5; // 跳跃动画时间比较长，这里加速播放

              this.CocosAnim.play('cocos_anim_jump'); // 播放跳跃动画
            }
          } // if (this.BodyAnim) {
          //     if (step === 1) {
          //         this.BodyAnim.play('oneStep');
          //     } else if (step === 2) {
          //         this.BodyAnim.play('twoStep');
          //     }
          //     this._curMoveIndex += step;
          // }


          this._curMoveIndex += step;
        } // 跳跃结束，执行待机动画


        onOnceJumpEnd(deltaTime) {
          if (this.CocosAnim) {
            this.CocosAnim.getState('cocos_anim_idle').speed = 3.5;
            this.CocosAnim.play('cocos_anim_idle');
          }

          this.node.emit('JumpEnd', this._curMoveIndex, deltaTime);
        } //游戏循环 


        update(deltaTime) {
          // 处理跳跃的分支逻辑
          if (this._startJump) {
            // console.log("deltaTime",deltaTime)
            this._curJumpTime += deltaTime; // 更新_curJumpTime

            if (this._curJumpTime > this._jumpTime) {
              // 跳跃结束 更新位置
              this._lastPos = this._curPos; // 更新上一步位置&& 清空等待时间

              this.stayTime = 0;
              this.node.setPosition(this._targetPos); // 强制位移到目标位置

              this._startJump = false; // 标记跳跃结束

              this.onOnceJumpEnd(deltaTime); // 执行待机动画
            } else {
              // 执行跳跃动画
              // tween
              this.node.getPosition(this._curPos); // 获取当前的位置 

              this._deltaPos.x = this._curJumpSpeed * deltaTime; // 计算本帧应该位移的长度

              Vec3.add(this._curPos, this._curPos, this._deltaPos); // 将当前位置加上位移的长度

              this.node.setPosition(this._curPos); // 设置位移后的位置               
            }
          } else {
            if (this._lastPos) {
              // 记录停滞时间
              this.stayTime += deltaTime;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CocosAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BodyAnim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "OneTouch", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "TwoTouch", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stayTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d197c1f4d7ef58c102a03b0a6451d3515ee4419a.js.map