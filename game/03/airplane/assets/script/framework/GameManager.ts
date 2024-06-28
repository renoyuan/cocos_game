import { _decorator, Component, instantiate, Node, Prefab, math,Vec3, macro } from 'cc';
import { Bullet } from '../bullet/Bullet';
import { BulletProp } from '../bullet/BulletProp';
import { Constant } from './Constant';
import { EnemyPlane } from '../plane/EnemyPlane';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    // palyer plane
    @property(Node)
    public selfPlane: Node = null;

    public score = 0;

    //bullet
    @property(Prefab)
    public bullet01: Prefab = null;
    @property(Prefab)
    public bullet02: Prefab = null;
    @property(Prefab)
    public bullet03: Prefab = null;
    @property(Prefab)
    public bullet04: Prefab = null;
    @property(Prefab)
    public bullet05: Prefab = null;
    @property
    public shootTime = 0.3; // 射击周期 
    @property
    public bulletSpeed = 1; // 子弹速度
    @property(Node)
    bulletRoot: Node = null; 

    // prop
    @property(Prefab)
    public bulletPropM: Prefab = null;
    @property(Prefab)
    public bulletPropH: Prefab = null;
    @property(Prefab)
    public bulletPropS: Prefab = null;
    @property
    public bulletPropSpeed = 0.3;



    // enemy plane
    @property(Prefab)
    public enemy01: Prefab = null;
    @property(Prefab)
    public enemy02: Prefab = null;
    
    @property
    public createEnemyTime = 1;
    @property
    public enemy1Speed = 0.5;
    @property
    public enemy2Speed = 0.7;

    private _curCreateEnemyTime = 0;
    private _combinationInterval = Constant.Combination.PLAN1;

    private _bulletType = Constant.BulletPropType.BULLET_INIT;
    


    private _curShootTime = 0;// 当前等待时间
    public _isShooting = false;
    

    start() {
        this._init();
        this._changePlaneMode();
        // this._bulletType = Constant.BulletPropType.BULLET_M;
        // this.createBulletProp();
        // this._bulletType = Constant.BulletPropType.BULLET_INIT;

    }





    update(deltaTime: number) {
        // createSelpBullet
        this._curShootTime += deltaTime;
        if (this._isShooting && this._curShootTime > this.shootTime) {
            
            if (this._bulletType === Constant.BulletPropType.BULLET_H) {
                this.createPlayerBulletH();
                console.log("createPlayerBulletH");
            } else if (this._bulletType === Constant.BulletPropType.BULLET_S) {
                this.createPlayerBulletS();
                console.log("createPlayerBulletS");
            } else if (this._bulletType === Constant.BulletPropType.BULLET_M) {
                this.createPlayerBulletM();
                console.log("createPlayerBulletM");
            }   
            else {
                this.createPlayerBullet();
                console.log("createPlayerBullet");
            }

            

            this._curShootTime = 0;
        }

        // create enemy 随机选一个不会同时出现 也可以 _combinationInterval 出现是定时任务改的也有点问题
        this._curCreateEnemyTime+=deltaTime;
        
        if(this._combinationInterval===Constant.Combination.PLAN1 ){
            if(this._curCreateEnemyTime > this.createEnemyTime){
                this.createEnemyPlan1();
                // console.log("_combinationInterval createEnemyPlan1")
                this._curCreateEnemyTime = 0;
            }
        }else if(this._combinationInterval === Constant.Combination.PLAN2){
            if(this._curCreateEnemyTime > this.createEnemyTime * 0.9){

                const randomCombination = math.randomRangeInt(1, 3);
                if (randomCombination === Constant.Combination.PLAN2) {
                    this.createEnemyPlan2();
                } else {
                    this.createEnemyPlan1();
                }

                this._curCreateEnemyTime = 0;
            }

        }else {
            if(this._curCreateEnemyTime > this.createEnemyTime * 0.8){
                const randomCombination = math.randomRangeInt(1, 4);
                if (randomCombination === Constant.Combination.PLAN2) {
                    this.createEnemyPlan3();
                } else if (randomCombination === Constant.Combination.PLAN3) {
                    this.createEnemyPlan2();
                } else {
                    this.createEnemyPlan1();
                }

                this._curCreateEnemyTime = 0;
            }
        }

    }



    public createEnemyPlan1(){
        // 单个即是plan1
        const whichEnemy = math.randomRangeInt(1, 3);
        let prefab: Prefab = null;
        let speed = 0;
        if (whichEnemy === Constant.EnemyType.TYPE1) {
            prefab = this.enemy01;
            speed = this.enemy1Speed;
        } else {
            prefab = this.enemy02;
            speed = this.enemy2Speed;
        }

        const enemy = instantiate(prefab);
        enemy.setParent(this.node);
        const enemyComp = enemy.getComponent(EnemyPlane);
        enemyComp.show(this, speed, true); // update parms

        const randomPos = math.randomRangeInt(-25, 26);
        enemy.setPosition(randomPos, 0, -40);
    }

    public createEnemyPlan2(){
        // plan2 一字型
        const enemyArray = new Array<Node>(5);
        for (let i = 0; i < enemyArray.length; i++) {
            enemyArray[i] = instantiate(this.enemy01);
            const element = enemyArray[i];
            element.parent = this.node;
            element.setPosition(-20 + i * 10, 0, -50);
            const enemyComp = element.getComponent(EnemyPlane);
            enemyComp.show(this, this.enemy1Speed, false);
        }
    }

    public createEnemyPlan3(){
        // v字型 7个
        const enemyArray = new Array<Node>(7);
        // 后续 x,z 考虑增加偏移
        const combinationPos = [
            -21, 0, -60,
            -14, 0, -55,
            -7, 0, -50,
            0, 0, -45,
            7, 0, -50,
            14, 0, -55,
            21, 0, -60,
        ];

        for (let i = 0; i < enemyArray.length; i++) {
            enemyArray[i] = instantiate(this.enemy02);
            const element = enemyArray[i];
            element.parent = this.node;
            const startIndex = i * 3;
            element.setPosition(combinationPos[startIndex], combinationPos[startIndex + 1], combinationPos[startIndex + 2]);
            const enemyComp = element.getComponent(EnemyPlane);
            enemyComp.show(this, this.enemy2Speed, false);
        }
    }


    public isShooting(v: boolean) {
        // UIMain 中判断是否能开始发射子弹
        this._isShooting = v
    }


    private _init() {
        // 第一发子弹不用等待
        this._curShootTime = this.shootTime;

    }

    public createPlayerBulletM(){
        const bullet = instantiate(this.bullet05);
        bullet.setParent(this.bulletRoot);
        const pos = this.selfPlane.position;
        bullet.setPosition(pos.x, pos.y, pos.z - 7);
        const bulletComp = bullet.getComponent(Bullet);
        bulletComp.show(this.bulletSpeed, false);
    }

    public createPlayerBulletH(){
        const pos = this.selfPlane.position;
        // left
        const bullet1 = instantiate(this.bullet03);
        bullet1.setParent(this.bulletRoot);
        bullet1.setPosition(pos.x - 2.5, pos.y, pos.z - 7);
        const bulletComp1 = bullet1.getComponent(Bullet);
        bulletComp1.show(this.bulletSpeed, false);

        // right
        const bullet2 = instantiate(this.bullet03);
        bullet2.setParent(this.bulletRoot);
        bullet2.setPosition(pos.x + 2.5, pos.y, pos.z - 7);
        const bulletComp2 = bullet2.getComponent(Bullet);
        bulletComp2.show(this.bulletSpeed, false);
    }

    public createPlayerBulletS(){
        const pos = this.selfPlane.position;
        // middle
        const bullet = instantiate(this.bullet01);
        bullet.setParent(this.bulletRoot);
        bullet.setPosition(pos.x, pos.y, pos.z - 7);
        const bulletComp = bullet.getComponent(Bullet);
        bulletComp.show(this.bulletSpeed, false);

        // left
        const bullet1 = instantiate(this.bullet01);
        bullet1.setParent(this.bulletRoot);
        bullet1.setPosition(pos.x - 4, pos.y, pos.z - 7);
        const bulletComp1 = bullet1.getComponent(Bullet);
        bulletComp1.show(this.bulletSpeed, false, Constant.Direction.LEFT);

        // right
        const bullet2 = instantiate(this.bullet01);
        bullet2.setParent(this.bulletRoot);
        bullet2.setPosition(pos.x + 4, pos.y, pos.z - 7);
        const bulletComp2 = bullet2.getComponent(Bullet);
        bulletComp2.show(this.bulletSpeed, false, Constant.Direction.RIGHT);
    }

    public createPlayerBullet(){
        const bullet = instantiate(this.bullet01);
        bullet.setParent(this.bulletRoot)
        // this.node.addChild(bullet);
        const pos = this.selfPlane.position;
        bullet.setPosition(pos.x, pos.y, pos.z - 7);
        const bulletComp = bullet.getComponent(Bullet);
        bulletComp.show(this.bulletSpeed, false);
    }

    public createEnemyBullet(targetPos: Vec3){
        const bullet = instantiate(this.bullet02);
        bullet.setParent(this.node);
        bullet.setPosition(targetPos.x, targetPos.y, targetPos.z + 6);
        const bulletComp = bullet.getComponent(Bullet);
        bulletComp.show(1, true);
    }

    public createSelpBullet() {
        // 创建子弹
        const bullet = instantiate(this.bullet01) // 实例化预制件
        // this.node.addChild(bullet);
        bullet.setParent(this.bulletRoot) // 子弹实例放入子弹根节点
        const pos = this.selfPlane.position; // 获取飞机位置 找到子弹初始位置
        bullet.setPosition(pos.x,pos.y,pos.z - 5);
        const bulletComp = bullet.getComponent(Bullet)// 获取节点上的组件 -- 子弹类
        // console.info("bulletComp", bulletComp)
        bulletComp.bulletSpeed=this.bulletSpeed // 更新子弹移动速度
        console.info("create bullet ok",pos.x,pos.y,pos.z - 5,bullet.active)
    }

    // createBulletProp
    public createBulletProp(){
        // 这一块的逻辑可能需要更改 道具也许不应该是 永久的
        const randomProp = math.randomRangeInt(1, 4);
        
        let prefab: Prefab = null;
        if(randomProp === Constant.BulletPropType.BULLET_H){
            prefab = this.bulletPropH;
        } else if(randomProp === Constant.BulletPropType.BULLET_S){
            prefab = this.bulletPropS;
        } else {
            prefab = this.bulletPropM;
        }

        const prop = instantiate(prefab);

        prop.setParent(this.node);
        prop.setPosition(15, 0, -40);
        console.info("create bulletPropM ",prefab)
        const propComp = prop.getComponent(BulletProp);
        propComp.show(this, this.bulletPropSpeed);
    }

    public changeBulletType(type: number){
        this._bulletType = type;
        console.log("_bulletType",this._bulletType)
    }

    private _modeChanged(){
        this._combinationInterval ++; // update combination
        this.createBulletProp();    // update 
    }

    public addScore(){
        this.score ++
    }

    // all 模式改变 schedule
    private _changePlaneMode(){
        // _changePlaneMode
        this.schedule(this._modeChanged, 10,  macro.REPEAT_FOREVER); //cc 调度器 callback  间隔/s 次数  macro.REPEAT_FOREVER 无止境
    }


}


