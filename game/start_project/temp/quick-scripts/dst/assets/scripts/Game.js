
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