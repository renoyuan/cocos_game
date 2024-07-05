System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Toast, _crd;

  _export("Toast", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3241si4NBFEKWxvBkUiAXw", "Toast", undefined);

      //一个简单的tost组件，用法：
      // let Toast = reqire('Toast.js')
      // Toast(text,{gravity,duration,bg_color})
      //text:要显示的字符串
      //gravity(可选):位置，String类型，可选值('CENTER','TOP','BOTTOM'),默认为'CENTER'
      //duration(可选):时间，Number类型，单位为秒，默认1s
      //bg_color(可选):颜色，cc.color类型，默认cc.color(102, 102, 102, 200)
      _export("Toast", Toast = class Toast {
        constructor() {
          this.text = "";
          this.grid = null;
        }

        start() {}

        update(deltaTime) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9f310f95a883dc926411fa34e10ee410ad0fdebb.js.map