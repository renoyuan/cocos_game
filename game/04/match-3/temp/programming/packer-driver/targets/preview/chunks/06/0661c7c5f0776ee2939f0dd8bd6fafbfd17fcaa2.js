System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        //一个简单的tost组件，用法：
        // let Toast = reqire('Toast.js')
        // Toast(text,{gravity,duration,bg_color})
        //text:要显示的字符串
        //gravity(可选):位置，String类型，可选值('CENTER','TOP','BOTTOM'),默认为'CENTER'
        //duration(可选):时间，Number类型，单位为秒，默认1s
        //bg_color(可选):颜色，cc.color类型，默认cc.color(102, 102, 102, 200)
        function Toast(text, _temp) {
          if (text === void 0) {
            text = "";
          }

          var {
            gravity = "CENTER",
            duration = 1,
            bg_color = cc.color(102, 102, 102, 200)
          } = _temp === void 0 ? {} : _temp;
          // canvas
          var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
          var width = canvas.node.width;
          var height = canvas.node.height;
          var bgNode = new cc.Node(); // Lable文本格式设置

          var textNode = new cc.Node();
          var textLabel = textNode.addComponent(cc.Label);
          textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
          textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
          textLabel.fontSize = 30;
          textLabel.string = text; // 当文本宽度过长时，设置为自动换行格式

          if (text.length * textLabel.fontSize > width * 3 / 5) {
            textNode.width = width * 3 / 5;
            textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
          } else {
            textNode.width = text.length * textLabel.fontSize;
          }

          var lineCount = ~~(text.length * textLabel.fontSize / (width * 3 / 5)) + 1;
          textNode.height = textLabel.fontSize * lineCount; // 背景设置

          var ctx = bgNode.addComponent(cc.Graphics);
          ctx.arc(-textNode.width / 2, 0, textNode.height / 2 + 20, 0.5 * Math.PI, 1.5 * Math.PI, true);
          ctx.lineTo(textNode.width / 2, -(textNode.height / 2 + 20));
          ctx.arc(textNode.width / 2, 0, textNode.height / 2 + 20, 1.5 * Math.PI, 0.5 * Math.PI, true);
          ctx.lineTo(-textNode.width / 2, textNode.height / 2 + 20);
          ctx.fillColor = bg_color;
          ctx.fill();
          bgNode.addChild(textNode); // gravity 设置Toast显示的位置

          if (gravity === "CENTER") {
            bgNode.y = 0;
            bgNode.x = 0;
          } else if (gravity === "TOP") {
            bgNode.y = bgNode.y + height / 5 * 2;
          } else if (gravity === "BOTTOM") {
            bgNode.y = bgNode.y - height / 5 * 2;
          }

          canvas.node.addChild(bgNode);
          var finished = cc.callFunc(function () {
            bgNode.destroy();
          });
          var action = cc.sequence(cc.moveBy(duration, cc.v2(0, 0)), cc.fadeOut(0.3), finished);
          bgNode.runAction(action);
        }

        module.exports = Toast; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=0661c7c5f0776ee2939f0dd8bd6fafbfd17fcaa2.js.map