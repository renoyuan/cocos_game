
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwicnVuSnVtcEFjdGlvbiIsImp1bXBVcCIsInR3ZWVuIiwiYnkiLCJ5IiwiZWFzaW5nIiwianVtcERvd24iLCJzZXF1ZW5jZSIsImNhbGwiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4IiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsVUFBVSxFQUFFLENBQUM7SUFDYjtJQUNBQyxZQUFZLEVBQUUsQ0FBQztJQUNmO0lBQ0FDLFlBQVksRUFBRSxDQUFDO0lBQ2Y7SUFDQUMsS0FBSyxFQUFFLENBQUM7SUFFUjtJQUNBQyxTQUFTLEVBQUU7TUFDUCxXQUFTLElBQUk7TUFDYkMsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0lBQ2I7RUFDSixDQUFDO0VBRURDLFNBQVMsV0FBQUEsVUFBRUMsS0FBSyxFQUFFO0lBQ2Q7SUFDQSxRQUFPQSxLQUFLLENBQUNDLE9BQU87TUFDaEIsS0FBS2IsRUFBRSxDQUFDYyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQztRQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7UUFDbkI7TUFDSixLQUFLakIsRUFBRSxDQUFDYyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0csQ0FBQztRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7UUFDcEI7SUFBTTtFQUVsQixDQUFDO0VBQ0RDLE9BQU8sV0FBQUEsUUFBRVIsS0FBSyxFQUFFO0lBQ1o7SUFDQSxRQUFPQSxLQUFLLENBQUNDLE9BQU87TUFDaEIsS0FBS2IsRUFBRSxDQUFDYyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQztRQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7UUFDcEI7TUFDSixLQUFLakIsRUFBRSxDQUFDYyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0csQ0FBQztRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEtBQUs7UUFDckI7SUFBTTtFQUVsQixDQUFDO0VBQ0RFLGFBQWEsV0FBQUEsY0FBQSxFQUFJO0lBQ2I7SUFDQSxJQUFJQyxNQUFNLEdBQUd0QixFQUFFLENBQUN1QixLQUFLLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ25CLFlBQVksRUFBRTtNQUFDb0IsQ0FBQyxFQUFFLElBQUksQ0FBQ3JCO0lBQVUsQ0FBQyxFQUFFO01BQUNzQixNQUFNLEVBQUU7SUFBUyxDQUFDLENBQUM7SUFDeEY7SUFDQSxJQUFJQyxRQUFRLEdBQUczQixFQUFFLENBQUN1QixLQUFLLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ25CLFlBQVksRUFBRTtNQUFDb0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDckI7SUFBVSxDQUFDLEVBQUU7TUFBQ3NCLE1BQU0sRUFBRTtJQUFRLENBQUMsQ0FBQzs7SUFFMUY7SUFDQSxJQUFJSCxLQUFLLEdBQUd2QixFQUFFLENBQUN1QixLQUFLO0lBQ25CO0lBQUEsQ0FDQUssUUFBUSxDQUFDTixNQUFNLEVBQUVLLFFBQVE7SUFDekI7SUFBQSxDQUNBRSxJQUFJLENBQUMsSUFBSSxDQUFDQyxhQUFhLEVBQUUsSUFBSSxDQUFDO0lBQy9CO0lBQ0EsT0FBTzlCLEVBQUUsQ0FBQ3VCLEtBQUssRUFBRSxDQUFDUSxhQUFhLENBQUNSLEtBQUssQ0FBQztFQUMxQyxDQUFDO0VBQ0Q7RUFDQU8sYUFBYSxFQUFFLFNBQUFBLGNBQUEsRUFBWTtJQUN2QjtJQUNBOUIsRUFBRSxDQUFDZ0MsV0FBVyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDekIsU0FBUyxFQUFFLEtBQUssQ0FBQztFQUNwRCxDQUFDO0VBQ0Q7RUFDQTBCLE1BQU0sRUFBRSxTQUFBQSxPQUFBLEVBQVk7SUFDakI7SUFDQSxJQUFJQyxVQUFVLEdBQUcsSUFBSSxDQUFDZCxhQUFhLEVBQUU7SUFDckNyQixFQUFFLENBQUN1QixLQUFLLENBQUMsSUFBSSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixVQUFVLENBQUMsQ0FBQ0csS0FBSyxFQUFFO0lBQzNDO0lBQ0EsSUFBSSxDQUFDckIsT0FBTyxHQUFHLEtBQUs7SUFDcEIsSUFBSSxDQUFDRSxRQUFRLEdBQUcsS0FBSztJQUNyQjtJQUNBLElBQUksQ0FBQ29CLE1BQU0sR0FBRyxDQUFDO0lBQ2Y7SUFDQXZDLEVBQUUsQ0FBQ3dDLFdBQVcsQ0FBQ0MsRUFBRSxDQUFDekMsRUFBRSxDQUFDMEMsV0FBVyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBQzFFWCxFQUFFLENBQUN3QyxXQUFXLENBQUNDLEVBQUUsQ0FBQ3pDLEVBQUUsQ0FBQzBDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQztFQUMxRSxDQUFDO0VBQ0QwQixTQUFTLFdBQUFBLFVBQUEsRUFBSTtJQUNUO0lBQ0E5QyxFQUFFLENBQUN3QyxXQUFXLENBQUNPLEdBQUcsQ0FBQy9DLEVBQUUsQ0FBQzBDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQztJQUMzRVgsRUFBRSxDQUFDd0MsV0FBVyxDQUFDTyxHQUFHLENBQUMvQyxFQUFFLENBQUMwQyxXQUFXLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUM7RUFDM0UsQ0FBQztFQUNEa0IsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDO0VBRURVLE1BQU0sRUFBRSxTQUFBQSxPQUFVQyxFQUFFLEVBQUU7SUFDbEI7SUFDQSxJQUFJLElBQUksQ0FBQ2hDLE9BQU8sRUFBRTtNQUNkLElBQUksQ0FBQ3NCLE1BQU0sSUFBSSxJQUFJLENBQUNoQyxLQUFLLEdBQUcwQyxFQUFFO0lBQ2xDLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQzlCLFFBQVEsRUFBRTtNQUNwQixJQUFJLENBQUNvQixNQUFNLElBQUksSUFBSSxDQUFDaEMsS0FBSyxHQUFHMEMsRUFBRTtJQUNsQztJQUFDOztJQUVEO0lBQ0EsSUFBSUMsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDWixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUNqQyxZQUFZLEVBQUU7TUFDM0M7TUFDQSxJQUFJLENBQUNpQyxNQUFNLEdBQUcsSUFBSSxDQUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQ2lDLE1BQU0sR0FBR1csSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDWixNQUFNLENBQUM7SUFDekU7SUFBQzs7SUFFRDs7SUFFQSxJQUFJLElBQUksQ0FBQ0gsSUFBSSxDQUFDZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ2IsTUFBTSxHQUFHVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7TUFDdkNJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBRTtNQUNwQyxJQUFJLENBQUNsQixJQUFJLENBQUNnQixDQUFDLEdBQUcsQ0FBQyxHQUFHO0lBQ3RCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2hCLElBQUksQ0FBQ2dCLENBQUMsR0FBRyxJQUFJLENBQUNiLE1BQU0sR0FBR1UsRUFBRSxJQUFJLEdBQUcsRUFBRTtNQUM5Q0ksT0FBTyxDQUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQztNQUNsQyxJQUFJLENBQUNsQixJQUFJLENBQUNnQixDQUFDLEdBQUcsR0FBRztJQUNyQixDQUFDLE1BQUs7TUFDRixJQUFJLENBQUNoQixJQUFJLENBQUNnQixDQUFDLElBQUksSUFBSSxDQUFDYixNQUFNLEdBQUdVLEVBQUU7SUFDbkM7RUFNSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXG4gICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXG4gICAgICAgIC8vIOWKoOmAn+W6plxuICAgICAgICBhY2NlbDogMCxcblxuICAgICAgICAvLyDot7Pot4Ppn7PmlYjotYTmupBcbiAgICAgICAganVtcEF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcbiAgICAgICAgLy8gc2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbktleVVwIChldmVudCkge1xuICAgICAgICAvLyB1bnNldCBhIGZsYWcgd2hlbiBrZXkgcmVsZWFzZWRcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcnVuSnVtcEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIOi3s+i3g+S4iuWNh1xuICAgICAgICB2YXIganVtcFVwID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IHRoaXMuanVtcEhlaWdodH0sIHtlYXNpbmc6ICdzaW5lT3V0J30pO1xuICAgICAgICAvLyDkuIvokL1cbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IC10aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luZUluJ30pO1xuXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqO+8jOaMiSBqdW1wVXDjgIFqdW1wRG93biDnmoTpobrluo/miafooYzliqjkvZxcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKVxuICAgICAgICAgLy8g5oyJIGp1bXBVcO+8jGp1bXBEb3duIOeahOmhuuW6j+aJp+ihjOWKqOS9nFxuICAgICAgICAuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bilcbiAgICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOWcqOWJjemdoueahOWKqOS9nOmDvee7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahCBwbGF5SnVtcFNvdW5kKCkg5pa55rOVXG4gICAgICAgIC5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxuICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKHR3ZWVuKTtcbiAgICB9LFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcbiAgICB9LFxuICAgIC8vIG9uTG9hZCAoKSB7fSxcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcbiAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xuICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXG4gICAgICAgIC8vIOWKoOmAn+W6puaWueWQkeW8gOWFs1xuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xuICAgICAgICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7ICAgXG4gICAgfSxcbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICAvLyDlj5bmtojplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkKSB7XG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uICYgIOmZkOWItuS4u+inkuS9jee9ruS4jeiDvei2hei/h+i+ueeVjCAgdGhpcy5iZ19taW4gPSAtdGhpcy5iZy53aWR0aC8yOyB0aGlzLmJnX21heCA9IHRoaXMuYmcud2lkdGgvMjtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCArIHRoaXMueFNwZWVkICogZHQgPD0gLTQ4MCl7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJiZ19taW4gdXBkYXRlXCIsIC00ODAgKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLTQ4MDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5vZGUueCArIHRoaXMueFNwZWVkICogZHQgPj0gNDgwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJiZ19tYXggdXBkYXRlXCIsIDQ4MCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDQ4MDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0sXG59KTtcbiJdfQ==