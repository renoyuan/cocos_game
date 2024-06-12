
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