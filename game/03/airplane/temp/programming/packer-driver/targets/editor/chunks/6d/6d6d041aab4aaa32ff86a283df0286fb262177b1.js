System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, _dec, _class, _class2, _descriptor, _crd, ccclass, property, SlefPlane;

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
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd111QUtvlHcabP+BkM9uu7", "SlefPlane", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SystemEvent', 'Touch', 'EventTouch', 'EventTarget', 'input', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlefPlane", SlefPlane = (_dec = ccclass('SlefPlane'), _dec(_class = (_class2 = class SlefPlane extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spped", _descriptor, this);
        }

        start() {
          // input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        onTouchStart(event) {// 触碰开始
        }

        onTouchMove(event) {
          // 触碰移动
          const delta = event.getDelta();
          let pos = this.node.position;
          this.node.setPosition(pos.x - this.spped * 0.01 * delta.y, pos.y, pos.z - 0.01 * this.spped * delta.x); //

          console.info(pos, "pos", "delta", delta, "坐标", pos.x - this.spped * 0.01 * delta.x, pos.y, pos.z - 0.01 * this.spped * delta.y);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spped", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d6d041aab4aaa32ff86a283df0286fb262177b1.js.map