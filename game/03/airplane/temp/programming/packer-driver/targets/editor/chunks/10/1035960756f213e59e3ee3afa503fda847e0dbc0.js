System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, math, BoxCollider, macro, Label, Animation, Bullet, BulletProp, EnemyPlane, SelfPlane, AudioManager, Constant, PoolManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletProp(extras) {
    _reporterNs.report("BulletProp", "../bullet/BulletProp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyPlane(extras) {
    _reporterNs.report("EnemyPlane", "../plane/EnemyPlane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelfPlane(extras) {
    _reporterNs.report("SelfPlane", "../plane/SelfPlane", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./PoolManager", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      math = _cc.math;
      BoxCollider = _cc.BoxCollider;
      macro = _cc.macro;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }, function (_unresolved_3) {
      BulletProp = _unresolved_3.BulletProp;
    }, function (_unresolved_4) {
      EnemyPlane = _unresolved_4.EnemyPlane;
    }, function (_unresolved_5) {
      SelfPlane = _unresolved_5.SelfPlane;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      Constant = _unresolved_7.Constant;
    }, function (_unresolved_8) {
      PoolManager = _unresolved_8.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83611dElfRHkaQJyGfbjwko", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'math', 'Vec3', 'BoxCollider', 'macro', 'Label', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = GameManager
       * DateTime = Mon Nov 15 2021 16:15:32 GMT+0800 (China Standard Time)
       * Author = mywayday
       * 
       * FileBasename = GameManager.ts
       * FileBasenameNoExtension = GameManager
       * URL = db://assets/script/framework/GameManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && SelfPlane === void 0 ? (_reportPossibleCrUseOfSelfPlane({
        error: Error()
      }), SelfPlane) : SelfPlane), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Animation), _dec20 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playerPlane", _descriptor, this);

          // bullet
          _initializerDefineProperty(this, "bullet01", _descriptor2, this);

          _initializerDefineProperty(this, "bullet02", _descriptor3, this);

          _initializerDefineProperty(this, "bullet03", _descriptor4, this);

          _initializerDefineProperty(this, "bullet04", _descriptor5, this);

          _initializerDefineProperty(this, "bullet05", _descriptor6, this);

          _initializerDefineProperty(this, "shootTime", _descriptor7, this);

          _initializerDefineProperty(this, "bulletSpeed", _descriptor8, this);

          _initializerDefineProperty(this, "bulletRoot", _descriptor9, this);

          // enemy
          _initializerDefineProperty(this, "enemy01", _descriptor10, this);

          _initializerDefineProperty(this, "enemy02", _descriptor11, this);

          _initializerDefineProperty(this, "createEnemyTime", _descriptor12, this);

          _initializerDefineProperty(this, "enemy1Speed", _descriptor13, this);

          _initializerDefineProperty(this, "enemy2Speed", _descriptor14, this);

          _initializerDefineProperty(this, "enemyExplode", _descriptor15, this);

          // prop
          _initializerDefineProperty(this, "bulletPropM", _descriptor16, this);

          _initializerDefineProperty(this, "bulletPropH", _descriptor17, this);

          _initializerDefineProperty(this, "bulletPropS", _descriptor18, this);

          _initializerDefineProperty(this, "bulletPropSpeed", _descriptor19, this);

          // ui
          _initializerDefineProperty(this, "gamePage", _descriptor20, this);

          _initializerDefineProperty(this, "gameOverPage", _descriptor21, this);

          _initializerDefineProperty(this, "gameScore", _descriptor22, this);

          _initializerDefineProperty(this, "gameOverScore", _descriptor23, this);

          _initializerDefineProperty(this, "overAnim", _descriptor24, this);

          // audio
          _initializerDefineProperty(this, "audioEffect", _descriptor25, this);

          this.isGameStart = false;
          this._currShootTime = 0;
          this._isShooting = false;
          this._currCreateEnemyTime = 0;
          this._combinationInterval = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN1;
          this._bulletType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BulletPropType.BULLET_M;
          this._score = 0;
        }

        start() {
          this._init();
        }

        update(deltaTime) {
          if (!this.isGameStart) {
            return;
          }

          if (this.playerPlane.isDie) {
            this.gameOver();
            return;
          }

          this._currShootTime += deltaTime;

          if (this._isShooting && this._currShootTime > this.shootTime) {
            if (this._bulletType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_H) {
              this.createPlayerBulletH();
            } else if (this._bulletType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_S) {
              this.createPlayerBulletS();
            } else {
              this.createPlayerBulletM();
            }

            const name = 'bullet' + (this._bulletType % 2 + 1);
            this.playAudioEffect(name);
            this._currShootTime = 0;
          }

          this._currCreateEnemyTime += deltaTime;

          if (this._combinationInterval === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN1) {
            if (this._currCreateEnemyTime > this.createEnemyTime) {
              this.createEnemyPlane();
              this._currCreateEnemyTime = 0;
            }
          } else if (this._combinationInterval === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN2) {
            if (this._currCreateEnemyTime > this.createEnemyTime * 3) {
              const randomCombination = math.randomRangeInt(1, 3);

              if (randomCombination === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).Combination.PLAN2) {
                this.createCombination1();
              } else {
                this.createEnemyPlane();
              }

              this._currCreateEnemyTime = 0;
            }
          } else {
            if (this._currCreateEnemyTime > this.createEnemyTime * 2) {
              const randomCombination = math.randomRangeInt(1, 4);

              if (randomCombination === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).Combination.PLAN2) {
                this.createCombination1();
              } else if (randomCombination === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).Combination.PLAN3) {
                this.createCombination2();
              } else {
                this.createEnemyPlane();
              }

              this._currCreateEnemyTime = 0;
            }
          }
        }

        returnMain() {
          this._currShootTime = 0;
          this._currCreateEnemyTime = 0;
          this._combinationInterval = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN1;
          this._bulletType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BulletPropType.BULLET_M;
          this.playerPlane.node.setPosition(0, 0, 15);
          this._score = 0;
        }

        gameStart() {
          this.isGameStart = true;

          this._changePlaneMode();

          this._score = 0;
          this.gameScore.string = this._score.toString();
          this.playerPlane.init();
        }

        gameReStart() {
          this.gameStart();
          this._currShootTime = 0;
          this._currCreateEnemyTime = 0;
          this._combinationInterval = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Combination.PLAN1;
          this._bulletType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BulletPropType.BULLET_M;
          this.playerPlane.node.setPosition(0, 0, 15);
        }

        gameOver() {
          this.isGameStart = false;
          this.gamePage.active = false;
          this.gameOverPage.active = true;
          this.gameOverScore.string = this._score.toString();
          this.overAnim.play();
          this._isShooting = false; // this.playerPlane.init();

          this.unschedule(this._modeChanged);

          this._destroyAll();
        }

        addScore() {
          this._score++;
          this.gameScore.string = this._score.toString();
        }

        createPlayerBulletM() {
          const bullet = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet01, this.bulletRoot);
          const pos = this.playerPlane.node.position;
          bullet.setPosition(pos.x, pos.y, pos.z - 7);
          const bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(this.bulletSpeed, false);
        }

        createPlayerBulletH() {
          const pos = this.playerPlane.node.position; // left
          // const bullet1 = instantiate(this.bullet03);

          const bullet1 = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet03, this.bulletRoot); // bullet1.setParent(this.bulletRoot);

          bullet1.setPosition(pos.x - 2.5, pos.y, pos.z - 7);
          const bulletComp1 = bullet1.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp1.show(this.bulletSpeed, false); // right

          const bullet2 = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet03, this.bulletRoot); // bullet2.setParent(this.bulletRoot);

          bullet2.setPosition(pos.x + 2.5, pos.y, pos.z - 7);
          const bulletComp2 = bullet2.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp2.show(this.bulletSpeed, false);
        }

        createPlayerBulletS() {
          const pos = this.playerPlane.node.position; // middle
          // const bullet = instantiate(this.bullet05);

          const bullet = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet05, this.bulletRoot); // bullet.setParent(this.bulletRoot);

          bullet.setPosition(pos.x, pos.y, pos.z - 7);
          const bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(this.bulletSpeed, false); // left

          const bullet1 = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet05, this.bulletRoot); // bullet1.setParent(this.bulletRoot);

          bullet1.setPosition(pos.x - 4, pos.y, pos.z - 7);
          const bulletComp1 = bullet1.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp1.show(this.bulletSpeed, false, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Direction.LEFT); // right

          const bullet2 = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet05, this.bulletRoot); // bullet2.setParent(this.bulletRoot);

          bullet2.setPosition(pos.x + 4, pos.y, pos.z - 7);
          const bulletComp2 = bullet2.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp2.show(this.bulletSpeed, false, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Direction.RIGHT);
        }

        createEnemyBullet(targetPos) {
          // const bullet = instantiate(this.bullet01);
          const bullet = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.bullet02, this.bulletRoot); // bullet.setParent(this.bulletRoot);

          bullet.setPosition(targetPos.x, targetPos.y, targetPos.z + 6);
          const bulletComp = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          bulletComp.show(1, true);
          const colliderComp = bullet.getComponent(BoxCollider);
          colliderComp.setGroup((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).CollisionType.ENEMY_BULLET);
          colliderComp.setMask((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).CollisionType.SELF_PLANE);
        }

        createEnemyPlane() {
          const whichEnemy = math.randomRangeInt(1, 3);
          let prefab = null;
          let speed = 0;

          if (whichEnemy === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EnemyType.TYPE1) {
            prefab = this.enemy01;
            speed = this.enemy1Speed;
          } else {
            prefab = this.enemy02;
            speed = this.enemy2Speed;
          } // const enemy = instantiate(prefab);


          const enemy = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(prefab, this.node); // enemy.setParent(this.node);

          const enemyComp = enemy.getComponent(_crd && EnemyPlane === void 0 ? (_reportPossibleCrUseOfEnemyPlane({
            error: Error()
          }), EnemyPlane) : EnemyPlane);
          enemyComp.show(this, speed, true);
          const randomPos = math.randomRangeInt(-25, 26);
          enemy.setPosition(randomPos, 0, -50);
        }

        createCombination1() {
          const enemyArray = new Array(5);

          for (let i = 0; i < enemyArray.length; i++) {
            // enemyArray[i] = instantiate(this.enemy01);
            enemyArray[i] = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().getNode(this.enemy01, this.node);
            const element = enemyArray[i]; // element.parent = this.node;

            element.setPosition(-20 + i * 10, 0, -50);
            const enemyComp = element.getComponent(_crd && EnemyPlane === void 0 ? (_reportPossibleCrUseOfEnemyPlane({
              error: Error()
            }), EnemyPlane) : EnemyPlane);
            enemyComp.show(this, this.enemy1Speed, false);
          }
        }

        createCombination2() {
          const enemyArray = new Array(7);
          const combinationPos = [-21, 0, -60, -14, 0, -55, -7, 0, -50, 0, 0, -45, 7, 0, -50, 14, 0, -55, 21, 0, -60];

          for (let i = 0; i < enemyArray.length; i++) {
            enemyArray[i] = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().getNode(this.enemy02, this.node); // enemyArray[i] = instantiate(this.enemy02);

            const element = enemyArray[i];
            element.parent = this.node;
            const startIndex = i * 3;
            element.setPosition(combinationPos[startIndex], combinationPos[startIndex + 1], combinationPos[startIndex + 2]);
            const enemyComp = element.getComponent(_crd && EnemyPlane === void 0 ? (_reportPossibleCrUseOfEnemyPlane({
              error: Error()
            }), EnemyPlane) : EnemyPlane);
            enemyComp.show(this, this.enemy2Speed, false);
          }
        }

        createEnemyEffect(pos) {
          const effect = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(this.enemyExplode, this.node);
          effect.setPosition(pos);
        }

        createBulletProp() {
          const randomProp = math.randomRangeInt(1, 4);
          let prefab = null;

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
          } // const prop = instantiate(prefab);


          const prop = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().getNode(prefab, this.node); // prop.setParent(this.node);

          prop.setPosition(15, 0, -50);
          const propComp = prop.getComponent(_crd && BulletProp === void 0 ? (_reportPossibleCrUseOfBulletProp({
            error: Error()
          }), BulletProp) : BulletProp);
          propComp.show(this, -this.bulletPropSpeed);
        }

        isShooting(value) {
          this._isShooting = value;
        }

        changeBulletType(type) {
          this._bulletType = type;
        }

        playAudioEffect(name) {
          this.audioEffect.play(name);
        }

        _init() {
          this._currShootTime = this.shootTime;
          this.playerPlane.init();
        }

        _changePlaneMode() {
          this.schedule(this._modeChanged, 10, macro.REPEAT_FOREVER);
        }

        _modeChanged() {
          this._combinationInterval++;
          this.createBulletProp();
        }

        _destroyAll() {
          let children = this.node.children;
          let length = children.length;
          let i = 0;

          for (i = length - 1; i >= 0; i--) {
            const child = children[i];
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().putNode(child); // child.destroy();
          }

          children = this.bulletRoot.children;
          length = children.length;

          for (i = length - 1; i >= 0; i--) {
            const child = children[i];
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().putNode(child); // child.destroy();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bullet01", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bullet02", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bullet03", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullet04", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bullet05", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "shootTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bulletSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bulletRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "enemy01", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "enemy02", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "createEnemyTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "enemy1Speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "enemy2Speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.7;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "enemyExplode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropM", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropH", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropS", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "bulletPropSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.3;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "gamePage", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "gameOverPage", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "gameScore", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "gameOverScore", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "overAnim", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "audioEffect", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=1035960756f213e59e3ee3afa503fda847e0dbc0.js.map