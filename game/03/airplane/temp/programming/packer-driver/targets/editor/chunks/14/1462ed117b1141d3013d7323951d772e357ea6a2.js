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

      _cclegacy._RF.push({}, "9ba7ak0TVBK4bJaIq49qiJK", "Constant", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Constant
       * DateTime = Mon Nov 15 2021 18:26:06 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = Constant.ts
       * FileBasenameNoExtension = Constant
       * URL = db://assets/script/framework/Constant.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Constant", Constant = class Constant {});
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      Constant.EnemyType = {
        TYPE1: 1,
        TYPE2: 2
      };
      Constant.Combination = {
        PLAN1: 1,
        PLAN2: 2,
        PLAN3: 3
      };
      Constant.CollisionType = {
        SELF_PLANE: 1 << 1,
        ENEMY_PLANE: 1 << 2,
        SELF_BULLET: 1 << 3,
        ENEMY_BULLET: 1 << 4,
        BULLET_PROP: 1 << 5
      };
      Constant.BulletPropType = {
        BULLET_M: 1,
        BULLET_H: 2,
        BULLET_S: 3
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