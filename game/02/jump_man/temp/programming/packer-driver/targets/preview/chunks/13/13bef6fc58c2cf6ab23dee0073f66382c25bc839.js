System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Vec3, Label, PlayerController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, GameState, BlockType, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5b34Qd0HNAe56gS/qf5wis", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'CCInteger', 'Vec3', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["GS_INIT"] = 0] = "GS_INIT";
        GameState[GameState["GS_PLAYING"] = 1] = "GS_PLAYING";
        GameState[GameState["GS_END"] = 2] = "GS_END";
        return GameState;
      }(GameState || {});

      ; // 赛道格子类型，坑（BT_NONE）或者实路（BT_STONE）

      BlockType = /*#__PURE__*/function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
        return BlockType;
      }(BlockType || {});

      ;

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec5 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          //分数
          _initializerDefineProperty(this, "stepsLabel", _descriptor, this);

          _initializerDefineProperty(this, "startMenu", _descriptor2, this);

          // 角色
          _initializerDefineProperty(this, "playerCtrl", _descriptor3, this);

          // 赛道预制
          _initializerDefineProperty(this, "cubePrfb", _descriptor4, this);

          // 赛道长度
          _initializerDefineProperty(this, "roadLength", _descriptor5, this);

          // 赛道轮次
          _initializerDefineProperty(this, "roadTurn", _descriptor6, this);

          this._road = [];

          // 持续时间
          _initializerDefineProperty(this, "stayOverTime", _descriptor7, this);

          // 计时器
          this.timer = 0;
        }

        start() {
          var _this$playerCtrl;

          this.curState = GameState.GS_INIT; // 初始化游戏状态
          // '?.' 是 Typescript 的可选链写法
          //== if(this.playerCtrl != null) this.playerCtrl.node.on('JumpEnd', this.onPlayerJumpEnd, this);        

          (_this$playerCtrl = this.playerCtrl) == null || _this$playerCtrl.node.on('JumpEnd', this.onPlayerJumpEnd, this);
        }

        onPlayerJumpEnd(moveIndex) {
          if (this.stepsLabel) {
            // 因为在最后一步可能出现步伐大的跳跃，但是此时无论跳跃是步伐大还是步伐小都不应该多增加分数
            // this.stepsLabel.string = '' + (moveIndex >= this.roadLength ? this.roadLength : moveIndex);
            this.stepsLabel.string = '' + moveIndex;
          }

          this.checkResult(moveIndex);
        }

        init() {
          // 激活主界面
          if (this.startMenu) {
            this.startMenu.active = true;
          } // 生成赛道


          this.generateRoad();

          if (this.playerCtrl) {
            // 禁止接收用户操作人物移动指令
            this.playerCtrl.setInputActive(false); // 重置人物位置

            this.playerCtrl.node.setPosition(Vec3.ZERO); // 重置分数

            this.playerCtrl.reset(); // 重置赛道轮次

            this.roadTurn = 1;
          }
        }

        onStartButtonClicked() {
          this.curState = GameState.GS_PLAYING;
        }

        checkResult(moveIndex) {
          if (moveIndex < this.roadLength * this.roadTurn) {
            // 跳到了坑上
            if (this._road[moveIndex] == BlockType.BT_NONE) {
              this.curState = GameState.GS_INIT;
            }
          } else {
            // 取消最大长度限制，生成新的赛道--跳过了最大长度
            // this.curState = GameState.GS_INIT;
            console.info("生成新的赛道");
            this.generateRoad();
          }
        }

        set curState(value) {
          switch (value) {
            case GameState.GS_INIT:
              this.init();
              break;

            case GameState.GS_PLAYING:
              if (this.startMenu) {
                this.startMenu.active = false;
              }

              if (this.stepsLabel) {
                this.stepsLabel.string = '0'; // 将步数重置为0
              } // 设置 active 为 true 时会直接开始监听鼠标事件，此时鼠标抬起事件还未派发
              // 会出现的现象就是，游戏开始的瞬间人物已经开始移动
              // 因此，这里需要做延迟处理


              setTimeout(() => {
                if (this.playerCtrl) {
                  this.playerCtrl.setInputActive(true);
                }
              }, 0.1);
              break;

            case GameState.GS_END:
              break;
          }
        } // 生成赛道


        generateRoad() {
          // 防止游戏重新开始时，赛道还是旧的赛道
          // 因此，需要移除旧赛道，清除旧赛道数据
          this.node.removeAllChildren();
          this._road = []; // 确保游戏运行时，人物一定站在实路上

          this._road.push(BlockType.BT_STONE); // 确定好每一格赛道类型


          for (var i = 1; i < this.roadLength; i++) {
            // 如果上一格赛道是坑，那么这一格一定不能为坑
            if (this._road[i - 1] === BlockType.BT_NONE) {
              this._road.push(BlockType.BT_STONE);
            } else {
              this._road.push(Math.floor(Math.random() * 2));
            }
          } // 根据赛道类型生成赛道


          for (var j = 0; j < this._road.length; j++) {
            var block = this.spawnBlockByType(this._road[j]); // 判断是否生成了道路，因为 spawnBlockByType 有可能返回坑（值为 null）

            if (block) {
              this.node.addChild(block);
              block.setPosition((this.roadTurn - 1) * this.roadLength + j, -1.5, 0);
            }
          }
        } // 生成石块


        spawnBlockByType(type) {
          if (!this.cubePrfb) {
            return null;
          }

          var block = null; // 赛道类型为实路才生成

          switch (type) {
            case BlockType.BT_STONE:
              block = instantiate(this.cubePrfb);
              break;
          }

          return block;
        }

        update(deltaTime) {
          // 如果在 一个位置停留时间超过 设置时间 则 gameover ok
          // console.info("this.startMenu.active",this.startMenu.active,"deltaTime",deltaTime ,"this.playerCtrl.stayTime", this.playerCtrl.stayTime,"stayOverTime",this.stayOverTime)
          if (!this.startMenu.active && this.playerCtrl.stayTime > this.stayOverTime) {
            console.info("重新开始");
            this.curState = GameState.GS_INIT;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stepsLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startMenu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "roadTurn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stayOverTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13bef6fc58c2cf6ab23dee0073f66382c25bc839.js.map