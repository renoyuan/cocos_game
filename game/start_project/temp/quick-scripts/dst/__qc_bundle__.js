
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aed45YDI9RDbJFLcxSh2f9M', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    // 星星和主角之间的距离小于这个数值时，就会完成收集
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    // 根据 Player 节点位置判断距离
    var playerPos = this.game.player.getPosition();
    // 根据两点位置计算两点之间距离
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  // LIFE-CYCLE CALLBACKS:
  onPicked: function onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    this.game.spawnNewStar();

    // 调用 Game 脚本的得分方法
    this.game.gainScore();
    console.info("gainScore");
    // 然后销毁当前星星节点
    this.node.destroy();
  },
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    // 每帧判断星星和主角之间的距离是否小于收集距离
    console.log(this.getPlayerDistance(), this.pickRadius);
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    }
    // 根据 Game 脚本中的计时器更新星星的透明度
    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImNvbnNvbGUiLCJpbmZvIiwiZGVzdHJveSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJsb2ciLCJvcGFjaXR5UmF0aW8iLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsIm1pbk9wYWNpdHkiLCJvcGFjaXR5IiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFVBQVUsRUFBRTtFQUNoQixDQUFDO0VBQ0RDLGlCQUFpQixFQUFFLFNBQUFBLGtCQUFBLEVBQVk7SUFDM0I7SUFDQSxJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO0lBQzlDO0lBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQ1AsU0FBUyxDQUFDLENBQUNRLEdBQUcsRUFBRTtJQUNsRCxPQUFPSixJQUFJO0VBQ2YsQ0FBQztFQUNEO0VBQ0FLLFFBQVEsRUFBRSxTQUFBQSxTQUFBLEVBQVc7SUFFakI7SUFDQSxJQUFJLENBQUNSLElBQUksQ0FBQ1MsWUFBWSxFQUFFOztJQUV4QjtJQUNBLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxTQUFTLEVBQUU7SUFDckJDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QjtJQUNBLElBQUksQ0FBQ1IsSUFBSSxDQUFDUyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUNEO0VBRUFDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQztFQUVEQyxNQUFNLEVBQUUsU0FBQUEsT0FBVUMsRUFBRSxFQUFFO0lBQ2xCO0lBQ0FMLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLElBQUksQ0FBQ25CLGlCQUFpQixFQUFFLEVBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUM7SUFDckQsSUFBSSxJQUFJLENBQUNDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDRCxVQUFVLEVBQUU7TUFDNUM7TUFDQSxJQUFJLENBQUNXLFFBQVEsRUFBRTtNQUNmO0lBQ0o7SUFDQTtJQUNBLElBQUlVLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDbEIsSUFBSSxDQUFDbUIsS0FBSyxHQUFDLElBQUksQ0FBQ25CLElBQUksQ0FBQ29CLFlBQVk7SUFDN0QsSUFBSUMsVUFBVSxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDakIsSUFBSSxDQUFDa0IsT0FBTyxHQUFHRCxVQUFVLEdBQUdFLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixZQUFZLElBQUksR0FBRyxHQUFHRyxVQUFVLENBQUMsQ0FBQztFQUNsRjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5pif5pif5ZKM5Li76KeS5LmL6Ze055qE6Led56a75bCP5LqO6L+Z5Liq5pWw5YC85pe277yM5bCx5Lya5a6M5oiQ5pS26ZuGXG4gICAgICAgIHBpY2tSYWRpdXM6IDAsXG4gICAgfSxcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDmoLnmja4gUGxheWVyIOiKgueCueS9jee9ruWIpOaWrei3neemu1xuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICAvLyDmoLnmja7kuKTngrnkvY3nva7orqHnrpfkuKTngrnkuYvpl7Tot53nprtcbiAgICAgICAgdmFyIGRpc3QgPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllclBvcykubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH0sXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgLy8g5b2T5pif5pif6KKr5pS26ZuG5pe277yM6LCD55SoIEdhbWUg6ISa5pys5Lit55qE5o6l5Y+j77yM55Sf5oiQ5LiA5Liq5paw55qE5pif5pifXG4gICAgICAgIHRoaXMuZ2FtZS5zcGF3bk5ld1N0YXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOiwg+eUqCBHYW1lIOiEmuacrOeahOW+l+WIhuaWueazlVxuICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKCk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcImdhaW5TY29yZVwiKVxuICAgICAgICAvLyDnhLblkI7plIDmr4HlvZPliY3mmJ/mmJ/oioLngrlcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyDmr4/luKfliKTmlq3mmJ/mmJ/lkozkuLvop5LkuYvpl7TnmoTot53nprvmmK/lkKblsI/kuo7mlLbpm4bot53nprtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpLHRoaXMucGlja1JhZGl1cyk7XG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSYWRpdXMpIHtcbiAgICAgICAgICAgIC8vIOiwg+eUqOaUtumbhuihjOS4ulxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNriBHYW1lIOiEmuacrOS4reeahOiuoeaXtuWZqOabtOaWsOaYn+aYn+eahOmAj+aYjuW6plxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lci90aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44adaLHkElEkrOHfyCs0be7', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // 背景节点，用于确定背景宽度
    bg: {
      "default": null,
      type: cc.Node
    },
    // Player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2;

    // 初始化计时器
    this.timer = 0;
    this.starDuration = 0;

    // 初始化计分
    this.score = 0;

    // 给player 中添加回去game 信息 跳动不能超过页面
    this.player.getComponent('Player').game = this;

    // 生成一个新的星星
    this.spawnNewStar();
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab);

    // 将新增的节点添加到 Canvas 节点下面
    this.node.addChild(newStar);

    // 为星星设置一个随机位置
    newStar.setPosition(this.getNewStarPosition());

    // 在星星脚本组件上保存 Game 对象的引用
    newStar.getComponent('Star').game = this;

    // 重置计时器，根据消失时间范围随机取一个值
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;

    // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;

    // 根据屏幕宽度，随机得到一个星星 x 坐标
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;

    // 返回星星坐标
    return cc.v2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1;
    // 更新 scoreDisplay Label 的文字
    this.scoreDisplay.string = 'Score: ' + this.score;
    // 播放得分音效
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  start: function start() {},
  update: function update(dt) {
    // 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration && false) {
      this.gameOver();
      return;
    }
    this.timer += dt;
  },
  gameOver: function gameOver() {
    // 停止 Player 节点的跳跃动作
    this.player.stopAllActions();

    // 重新加载场景 game
    cc.director.loadScene('game');
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsImJnIiwicGxheWVyIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJzY29yZUF1ZGlvIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZ3JvdW5kWSIsInkiLCJoZWlnaHQiLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsInNjb3JlIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsInNwYXduTmV3U3RhciIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiTWF0aCIsInJhbmRvbSIsInJhbmRYIiwicmFuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUVSO0lBQ0FDLFVBQVUsRUFBRTtNQUNSLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFDYixDQUFDO0lBRUQ7SUFDQUMsZUFBZSxFQUFFLENBQUM7SUFDbEJDLGVBQWUsRUFBRSxDQUFDO0lBRWxCO0lBQ0FDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFBSTtNQUNi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OEIsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FDVCxDQUFDO0VBRURDLE1BQU0sRUFBRSxTQUFBQSxPQUFVQyxFQUFFLEVBQUU7SUFDbEI7SUFDQTtJQUNBLElBQUksSUFBSSxDQUFDMUIsS0FBSyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxJQUFJLEtBQUssRUFBRTtNQUN6QyxJQUFJLENBQUMwQixRQUFRLEVBQUU7TUFDZjtJQUNKO0lBQ0EsSUFBSSxDQUFDM0IsS0FBSyxJQUFJMEIsRUFBRTtFQUNwQixDQUFDO0VBRURDLFFBQVEsRUFBRSxTQUFBQSxTQUFBLEVBQVk7SUFDbEI7SUFDQSxJQUFJLENBQUNwQyxNQUFNLENBQUNxQyxjQUFjLEVBQUU7O0lBRTVCO0lBQ0FqRCxFQUFFLENBQUNrRCxRQUFRLENBQUNDLFNBQVMsQ0FBQyxNQUFNLENBQUM7RUFDakM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFxuICAgICAgICAvLyDov5nkuKrlsZ7mgKflvJXnlKjkuobmmJ/mmJ/pooTliLbotYTmupBcbiAgICAgICAgc3RhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxuICAgICAgICBtYXhTdGFyRHVyYXRpb246IDAsXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcblxuICAgICAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOiDjOaZr+iKgueCue+8jOeUqOS6juehruWumuiDjOaZr+WuveW6plxuICAgICAgICBiZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLy8gUGxheWVyIOiKgueCue+8jOeUqOS6juiOt+WPluS4u+inkuW8uei3s+eahOmrmOW6pu+8jOWSjOaOp+WItuS4u+inkuihjOWKqOW8gOWFs1xuICAgICAgICBwbGF5ZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gc2NvcmUgbGFiZWwg55qE5byV55SoXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG5cbiAgIFxuXG4gICAgICAgIC8vIOW+l+WIhumfs+aViOi1hOa6kFxuICAgICAgICBzY29yZUF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g6I635Y+W5Zyw5bmz6Z2i55qEIHkg6L205Z2Q5qCHXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjtcbiAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5YiGXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8g57uZcGxheWVyIOS4rea3u+WKoOWbnuWOu2dhbWUg5L+h5oGvIOi3s+WKqOS4jeiDvei2hei/h+mhtemdolxuICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmdhbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xuICAgIH0sXG5cbiAgICBzcGF3bk5ld1N0YXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xuICAgICAgICBcbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XG4gICAgICAgIFxuICAgICAgICAvLyDlnKjmmJ/mmJ/ohJrmnKznu4Tku7bkuIrkv53lrZggR2FtZSDlr7nosaHnmoTlvJXnlKhcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIC8vIOmHjee9ruiuoeaXtuWZqO+8jOagueaNrua2iOWkseaXtumXtOiMg+WbtOmaj+acuuWPluS4gOS4quWAvFxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfSxcblxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8g5qC55o2u5Zyw5bmz6Z2i5L2N572u5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pif55qEIHkg5Z2Q5qCHXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcbiAgICAgICAgXG4gICAgICAgIC8vIOagueaNruWxj+W5leWuveW6pu+8jOmaj+acuuW+l+WIsOS4gOS4quaYn+aYnyB4IOWdkOagh1xuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aC8yO1xuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuXG4gICAgICAgIC8vIOi/lOWbnuaYn+aYn+WdkOagh1xuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICB9LFxuXG4gICAgZ2FpblNjb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgLy8g5pu05pawIHNjb3JlRGlzcGxheSBMYWJlbCDnmoTmloflrZdcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcbiAgICAgICAgLy8g5pKt5pS+5b6X5YiG6Z+z5pWIXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgLy8g5q+P5bin5pu05paw6K6h5pe25Zmo77yM6LaF6L+H6ZmQ5bqm6L+Y5rKh5pyJ55Sf5oiQ5paw55qE5pif5pifXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxuICAgICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uICYmIGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICB9LFxuICAgIFxuICAgIGdhbWVPdmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOWBnOatoiBQbGF5ZXIg6IqC54K555qE6Lez6LeD5Yqo5L2cXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7IFxuXG4gICAgICAgIC8vIOmHjeaWsOWKoOi9veWcuuaZryBnYW1lXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab8fdpKgXVCeJEuAfzQ6uGM', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 跳跃音效资源
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;
      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;
      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    });
    // 下落
    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    });

    // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作
    var tween = cc.tween()
    // 按 jumpUp，jumpDown 的顺序执行动作
    .sequence(jumpUp, jumpDown)
    // 添加一个回调函数，在前面的动作都结束时调用我们定义的 playJumpSound() 方法
    .call(this.playJumpSound, this);
    // 不断重复
    return cc.tween().repeatForever(tween);
  },
  // LIFE-CYCLE CALLBACKS:
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  // onLoad () {},
  onLoad: function onLoad() {
    // 初始化跳跃动作
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
    // 加速度方向开关
    this.accLeft = false;
    this.accRight = false;
    // 主角当前水平方向速度
    this.xSpeed = 0;
    // 初始化键盘输入监听
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }
    ;

    // 限制主角的速度不能超过最大值
    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }
    ;

    // 根据当前速度更新主角的位置 &  限制主角位置不能超过边界  this.bg_min = -this.bg.width/2; this.bg_max = this.bg.width/2;

    if (this.node.x + this.xSpeed * dt <= -480) {
      console.info("bg_min update", -480);
      this.node.x = -480;
    } else if (this.node.x + this.xSpeed * dt >= 480) {
      console.info("bg_max update", 480);
      this.node.x = 480;
    } else {
      this.node.x += this.xSpeed * dt;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwicnVuSnVtcEFjdGlvbiIsImp1bXBVcCIsInR3ZWVuIiwiYnkiLCJ5IiwiZWFzaW5nIiwianVtcERvd24iLCJzZXF1ZW5jZSIsImNhbGwiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4IiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsVUFBVSxFQUFFLENBQUM7SUFDYjtJQUNBQyxZQUFZLEVBQUUsQ0FBQztJQUNmO0lBQ0FDLFlBQVksRUFBRSxDQUFDO0lBQ2Y7SUFDQUMsS0FBSyxFQUFFLENBQUM7SUFFUjtJQUNBQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBQUk7TUFDYkMsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0lBQ2I7RUFDSixD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QyxJQUFJLENBQUNsQixJQUFJLENBQUNnQixDQUFDLEdBQUcsQ0FBQyxHQUFHO0lBQ3RCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2hCLElBQUksQ0FBQ2dCLENBQUMsR0FBRyxJQUFJLENBQUNiLE1BQU0sR0FBR1UsRUFBRSxJQUFJLEdBQUcsRUFBRTtNQUM5Q0ksT0FBTyxDQUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQztNQUNsQyxJQUFJLENBQUNsQixJQUFJLENBQUNnQixDQUFDLEdBQUcsR0FBRztJQUNyQixDQUFDLE1BQUs7TUFDRixJQUFJLENBQUNoQixJQUFJLENBQUNnQixDQUFDLElBQUksSUFBSSxDQUFDYixNQUFNLEdBQUdVLEVBQUU7SUFDbkM7RUFNSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXG4gICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXG4gICAgICAgIC8vIOWKoOmAn+W6plxuICAgICAgICBhY2NlbDogMCxcblxuICAgICAgICAvLyDot7Pot4Ppn7PmlYjotYTmupBcbiAgICAgICAganVtcEF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcbiAgICAgICAgLy8gc2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbktleVVwIChldmVudCkge1xuICAgICAgICAvLyB1bnNldCBhIGZsYWcgd2hlbiBrZXkgcmVsZWFzZWRcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcnVuSnVtcEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIOi3s+i3g+S4iuWNh1xuICAgICAgICB2YXIganVtcFVwID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IHRoaXMuanVtcEhlaWdodH0sIHtlYXNpbmc6ICdzaW5lT3V0J30pO1xuICAgICAgICAvLyDkuIvokL1cbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IC10aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luZUluJ30pO1xuXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqO+8jOaMiSBqdW1wVXDjgIFqdW1wRG93biDnmoTpobrluo/miafooYzliqjkvZxcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKVxuICAgICAgICAgLy8g5oyJIGp1bXBVcO+8jGp1bXBEb3duIOeahOmhuuW6j+aJp+ihjOWKqOS9nFxuICAgICAgICAuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bilcbiAgICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOWcqOWJjemdoueahOWKqOS9nOmDvee7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahCBwbGF5SnVtcFNvdW5kKCkg5pa55rOVXG4gICAgICAgIC5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxuICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKHR3ZWVuKTtcbiAgICB9LFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcbiAgICB9LFxuICAgIC8vIG9uTG9hZCAoKSB7fSxcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcbiAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xuICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXG4gICAgICAgIC8vIOWKoOmAn+W6puaWueWQkeW8gOWFs1xuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xuICAgICAgICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7ICAgXG4gICAgfSxcbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICAvLyDlj5bmtojplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkKSB7XG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uICYgIOmZkOWItuS4u+inkuS9jee9ruS4jeiDvei2hei/h+i+ueeVjCAgdGhpcy5iZ19taW4gPSAtdGhpcy5iZy53aWR0aC8yOyB0aGlzLmJnX21heCA9IHRoaXMuYmcud2lkdGgvMjtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCArIHRoaXMueFNwZWVkICogZHQgPD0gLTQ4MCl7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJiZ19taW4gdXBkYXRlXCIsIC00ODAgKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLTQ4MDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5vZGUueCArIHRoaXMueFNwZWVkICogZHQgPj0gNDgwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJiZ19tYXggdXBkYXRlXCIsIDQ4MCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDQ4MDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
