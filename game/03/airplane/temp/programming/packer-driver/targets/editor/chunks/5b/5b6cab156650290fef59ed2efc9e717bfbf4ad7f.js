System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, NodePool, instantiate, _dec, _class, _class2, _crd, ccclass, property, PoolManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f490aFvLS9C/bqwLGmSZgIL", "PoolManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'NodePool', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PoolManager
       * DateTime = Fri Nov 26 2021 18:00:45 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = PoolManager.ts
       * FileBasenameNoExtension = PoolManager
       * URL = db://assets/script/framework/PoolManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec(_class = (_class2 = class PoolManager {
        constructor() {
          this._dictPool = {};
          this._dictPrefab = {};
        }

        static instance() {
          if (!this._instance) {
            this._instance = new PoolManager();
          }

          return this._instance;
        }

        getNode(prefab, parent) {
          let name = prefab.data.name; // console.log('get node   ' + name);

          let node = null;
          this._dictPrefab[name] = prefab;
          const pool = this._dictPool[name];

          if (pool) {
            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            this._dictPool[name] = new NodePool();
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.active = true;
          return node;
        }

        putNode(node) {
          let name = node.name; // console.log('put node   ' + name);

          node.parent = null;

          if (!this._dictPool[name]) {
            this._dictPool[name] = new NodePool();
          }

          this._dictPool[name].put(node);
        }

      }, _class2._instance = void 0, _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b6cab156650290fef59ed2efc9e717bfbf4ad7f.js.map