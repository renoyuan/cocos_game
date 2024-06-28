System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Constant, _crd, ccclass, property;

  _export("Constant", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66a7fesKfFNA76VRc1TtzxM", "Constant", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); // 游戏内的类型

      _export("Constant", Constant = class Constant {});

      // 敌机类型
      Constant.EnemyType = {
        TYPE1: 1,
        TYPE2: 2
      };
      // 敌机组合类型 组合一 单架飞机 组合间隔 1 开始出现时间 0 组合二 一字型（5） 组合间隔 0.8 开始出现时间11 组合三 v字型（7） 组合间隔 0.6 开始出现时间20+ 
      Constant.Combination = {
        PLAN1: 1,
        PLAN2: 2,
        PLAN3: 3
      };
      // 顺序要和设置的碰撞矩阵一致 且要是二进制
      Constant.ColliderType = {
        PLAYER: 1 << 1,
        ENEMY: 1 << 2,
        BULLET: 1 << 3,
        ENEMY_BULLET: 1 << 4,
        BULLET_PROP: 1 << 5
      };
      Constant.BulletPropType = {
        BULLET_M: 1,
        BULLET_H: 2,
        BULLET_S: 3,
        BULLET_INIT: 4
      };
      Constant.Direction = {
        LEFT: 1,
        MIDDLE: 2,
        RIGHT: 3
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1462ed117b1141d3013d7323951d772e357ea6a2.js.map