System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, math, macro, Bullet, BulletProp, Constant, EnemyPlane, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletProp(extras) {
    _reporterNs.report("BulletProp", "../bullet/BulletProp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyPlane(extras) {
    _reporterNs.report("EnemyPlane", "../plane/EnemyPlane", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      math = _cc.math;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }, function (_unresolved_3) {
      BulletProp = _unresolved_3.BulletProp;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
    }, function (_unresolved_5) {
      EnemyPlane = _unresolved_5.EnemyPlane;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "976aflcBOdLpJhZLrgnsfXN", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'math', 'Vec3', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          // palyer plane
          _initializerDefineProperty(this, "selfPlane", _descriptor, this);

          this.score = 0;

          //bullet
          _initializerDefineProperty(this, "bullet01", _descriptor2, this);

          _initializerDefineProperty(this, "bullet02", _descriptor3, this);

          _initializerDefineProperty(this, "bullet03", _descriptor4, this);

          _initializerDefineProperty(this, "bullet04", _descriptor5, this);

          _initializerDefineProperty(this, "bullet05", _descriptor6, this);

          _initializerDefineProperty(this, "shootTime", _descriptor7, this);

          // 射击周期 
          _initializerDefineProperty(this, "bulletSpeed", _descriptor8, this);

          // 子弹速度
          _initializerDefineProperty(this, "bulletRoot", _descriptor9, this);

          // prop
          _initializerDefineProperty(this, "bulletPropM", _descriptor10, this);

          _initializerDefineProperty(this, "bulletPropH", _descriptor11, this);

          _initializerDefineProperty(this, "bulletPropS", _descriptor12, this);

          _initializerDefineProperty(this, "bulletPropSpeed", _descriptor13, this);

          // enemy plane
          _initializerDefineProperty(this, "enemy01", _descriptor14, this);

          _initializerDefineProperty(this, "enemy02", _descriptor15, this);

          _initializerDefineProperty(this, "createEnemyTime", _descriptor16, this);

          _initializerDefineProperty(this, "enemy1Speed", _descriptor17, this);

          _initializerDefineProperty(this, "enemy2Speed", _descriptor18, this);

          this._curCreateEnemyTime = 0;
          this._combinationInterval = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN1;
          this._bulletType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BulletPropType.BULLET_INIT;
          this._curShootTime = 0;
          // 当前等待时间
          this._isShooting = false;
        }

        start() {
          this._init();

          this._changePlaneMode(); // this._bulletType = Constant.BulletPropType.BULLET_M;
          // this.createBulletProp();
          // this._bulletType = Constant.BulletPropType.BULLET_INIT;

        }

        update(deltaTime) {
          // createSelpBullet
          this._curShootTime += deltaTime;

          if (this._isShooting && this._curShootTime > this.shootTime) {
            if (this._bulletType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_H) {
              this.createPlayerBulletH();
              console.log("createPlayerBulletH");
            } else if (this._bulletType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_S) {
              this.createPlayerBulletS();
              console.log("createPlayerBulletS");
            } else if (this._bulletType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_M) {
              this.createPlayerBulletM();
              console.log("createPlayerBulletM");
            } else {
              this.createPlayerBullet();
              console.log("createPlayerBullet");
            }

            this._curShootTime = 0;
          } // create enemy 随机选一个不会同时出现 也可以 _combinationInterval 出现是定时任务改的也有点问题


          this._curCreateEnemyTime += deltaTime;

          if (this._combinationInterval === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN1) {
            if (this._curCreateEnemyTime > this.createEnemyTime) {
              this.createEnemyPlan1(); // console.log("_combinationInterval createEnemyPlan1")

              this._curCreateEnemyTime = 0;
            }
          } else if (this._combinationInterval === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN2) {
            if (this._curCreateEnemyTime > this.createEnemyTime * 0.9) {
              var randomCombination = math.randomRangeInt(1, 3);

              if (randomCombination === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).Combination.PLAN2) {
                this.createEnemyPlan2();
              } else {
                this.createEnemyPlan1();
              }

              this._curCreateEnemyTime = 0;
            }
          } else {
            if (this._curCreateEnemyTime > this.createEnemyTime * 0.8) {
              var _randomCombination = math.randomRangeInt(1, 4);

              if (_randomCombination === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).Combination.PLAN2) {
                this.createEnemyPlan3();
              } else if (_randomCombination === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).Combination.PLAN3) {
                this.createEnemyPlan2();
              } else {
                this.createEnemyPlan1();
              }

              this._curCreateEnemyTime = 0;
            }
          }
        }

        createEnemyPlan1() {
          // 单个即是plan1
          var whichEnemy = math.randomRangeInt(1, 3);
          var prefab = null;
          var speed = 0;

          if (whichEnemy === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EnemyType.TYPE1) {
            prefab = this.enemy01;
            speed = this.enemy1Speed;
          } else {
            prefab = this.enemy02;
            speed = this.enemy2Speed;
          }

          var enemy = instantiate(prefab);
          enemy.setParent(this.node);
          var enemyComp = enemy.getComponent(_crd && EnemyPlane === void 0 ? (_reportPossibleCrUseOfEnemyPlane({
            error: Error()
          }), EnemyPlane) : EnemyPlane);
          enemyComp.show(this, speed, true); // update parms

          var randomPos = math.randomRangeInt(-25, 26);
          enemy.setPosition(randomPos, 0, -40);
        }

        createEnemyPlan2() {
          // plan2 一字型
          var enemyArray = new Array(5);

          for (var i = 0; i < enemyArray.length; i++) {
            enemyArray[i] = instantiate(this.enemy01);
            var element = enemyArray[i];
            element.parent = this.node;
            element.setPosition(-20 + i * 10, 0, -50);
            var enemyComp = element.getComponent(_crd && EnemyPlane === void 0 ? (_reportPossibleCrUseOfEnemyPlane({
              error: Error()
            }), EnemyPlane) : EnemyPlane);
            enemyComp.show(this, this.enemy1Speed, false);
          }
        }

        createEnemyPlan3() {
          // v字型 7个
          var enemyArray = new Array(7); // 后续 x,z 考虑增加偏移

          var combinationPos = [-21, 0, -60, -14, 0, -55, -7, 0, -50, 0, 0, -45, 7, 0, -50, 14, 0, -55, 21, 0, -60];

          for (var i = 0; i < enemyArray.length; i++) {
            enemyArray[i] = instantiate(this.enemy02);
            var element = enemyArray[i];
            element.parent = this.node;
            var startIndex = i * 3;
            element.setPosition(combinationPos[startIndex], combinationPos[startIndex + 1], combinationPos[startIndex + 2]);
            var enemyComp = element.getComponent(_crd && EnemyPlane === void 0 ? (_reportPossibleCrUseOfEnemyPlane({
              error: Error()
            }), EnemyPlane) : EnemyPlane);
            enemyComp.show(this, this.enemy2Speed, false);
          }
        }

        isShooting(v) {
          // UIMain 中判断是否能开始发射子弹
          this._isShooting = v;
        }

        _init() {
          // 第一发子弹不用等待
          this._curShootTime = this.shootTime;
        }

        createPlayerBulletM() {
          var bullet = instantiate(this.bullet05);
          bullet.setParent(this.bulletRoot);
          var pos = this.selfPlane.position;
          bullet.setPosition(pos.x, pos.y, pos.z - 7);
          var bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(this.bulletSpeed, false);
        }

        createPlayerBulletH() {
          var pos = this.selfPlane.position; // left

          var bullet1 = instantiate(this.bullet03);
          bullet1.setParent(this.bulletRoot);
          bullet1.setPosition(pos.x - 2.5, pos.y, pos.z - 7);
          var bulletComp1 = bullet1.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp1.show(this.bulletSpeed, false); // right

          var bullet2 = instantiate(this.bullet03);
          bullet2.setParent(this.bulletRoot);
          bullet2.setPosition(pos.x + 2.5, pos.y, pos.z - 7);
          var bulletComp2 = bullet2.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp2.show(this.bulletSpeed, false);
        }

        createPlayerBulletS() {
          var pos = this.selfPlane.position; // middle

          var bullet = instantiate(this.bullet01);
          bullet.setParent(this.bulletRoot);
          bullet.setPosition(pos.x, pos.y, pos.z - 7);
          var bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(this.bulletSpeed, false); // left

          var bullet1 = instantiate(this.bullet01);
          bullet1.setParent(this.bulletRoot);
          bullet1.setPosition(pos.x - 4, pos.y, pos.z - 7);
          var bulletComp1 = bullet1.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp1.show(this.bulletSpeed, false, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Direction.LEFT); // right

          var bullet2 = instantiate(this.bullet01);
          bullet2.setParent(this.bulletRoot);
          bullet2.setPosition(pos.x + 4, pos.y, pos.z - 7);
          var bulletComp2 = bullet2.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp2.show(this.bulletSpeed, false, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Direction.RIGHT);
        }

        createPlayerBullet() {
          var bullet = instantiate(this.bullet01);
          bullet.setParent(this.bulletRoot); // this.node.addChild(bullet);

          var pos = this.selfPlane.position;
          bullet.setPosition(pos.x, pos.y, pos.z - 7);
          var bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(this.bulletSpeed, false);
        }

        createEnemyBullet(targetPos) {
          var bullet = instantiate(this.bullet02);
          bullet.setParent(this.node);
          bullet.setPosition(targetPos.x, targetPos.y, targetPos.z + 6);
          var bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(1, true);
        }

        createSelpBullet() {
          // 创建子弹
          var bullet = instantiate(this.bullet01); // 实例化预制件
          // this.node.addChild(bullet);

          bullet.setParent(this.bulletRoot); // 子弹实例放入子弹根节点

          var pos = this.selfPlane.position; // 获取飞机位置 找到子弹初始位置

          bullet.setPosition(pos.x, pos.y, pos.z - 5);
          var bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet); // 获取节点上的组件 -- 子弹类
          // console.info("bulletComp", bulletComp)

          bulletComp.bulletSpeed = this.bulletSpeed; // 更新子弹移动速度

          console.info("create bullet ok", pos.x, pos.y, pos.z - 5, bullet.active);
        } // createBulletProp


        createBulletProp() {
          // 这一块的逻辑可能需要更改 道具也许不应该是 永久的
          var randomProp = math.randomRangeInt(1, 4);
          var prefab = null;

          if (randomProp === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BulletPropType.BULLET_H) {
            prefab = this.bulletPropH;
          } else if (randomProp === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BulletPropType.BULLET_H) {
            prefab = this.bulletPropS;
          } else {
            prefab = this.bulletPropM;
          }

          var prop = instantiate(prefab);
          prop.setParent(this.node);
          prop.setPosition(15, 0, -40);
          console.info("create bulletPropM ", prefab);
          var propComp = prop.getComponent(_crd && BulletProp === void 0 ? (_reportPossibleCrUseOfBulletProp({
            error: Error()
          }), BulletProp) : BulletProp);
          propComp.show(this, this.bulletPropSpeed);
        }

        changeBulletType(type) {
          this._bulletType = type;
          console.log("_bulletType", this._bulletType);
        }

        _modeChanged() {// this._combinationInterval ++; // update combination
          // this.createBulletProp();    // update 
        }

        addScore() {
          this.score++;
        } // all 模式改变 schedule


        _changePlaneMode() {
          // _changePlaneMode
          this.schedule(this._modeChanged, 10, macro.REPEAT_FOREVER); //cc 调度器 callback  间隔/s 次数  macro.REPEAT_FOREVER 无止境
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bullet01", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bullet02", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bullet03", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullet04", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bullet05", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "shootTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bulletSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bulletRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropM", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropH", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropS", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "enemy01", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "enemy02", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "createEnemyTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "enemy1Speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "enemy2Speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.7;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1035960756f213e59e3ee3afa503fda847e0dbc0.js.map