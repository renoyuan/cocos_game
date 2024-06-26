import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { Bullet } from '../bullet/Bullet';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Node)
    public selfPlane: Node = null;

    @property(Node)
    bulletRoot: Node = null; // 子弹根节点

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


    private _curShootTime = 0;// 当前等待时间
    private _isShooting = false;

    @property
    public bulletSpeed = 1; // 子弹速度

    public isShooting(v: boolean) {
        // UIMain 中判断是否能开始发射子弹
        this._isShooting = v
    }

    start() {
        this._init();

    }
    private _init() {
        // 第一发子弹不用等待
        this._curShootTime = this.shootTime;

    }

    public createSelpBullet() {
        // 创建子弹
        const bullet = instantiate(this.bullet01) // 实例化预制件
        this.node.addChild(bullet);
        // bullet.setParent(this.bulletRoot) // 子弹实例放入子弹根节点
        const pos = this.selfPlane.position; // 获取飞机位置 找到子弹初始位置
        bullet.setPosition(pos.x,pos.y,pos.z - 7);
        const bulletComp = bullet.getComponent(Bullet)// 获取节点上的组件 -- 子弹类
        // console.info("bulletComp", bulletComp)
        bulletComp.bulletSpeed=this.bulletSpeed // 更新子弹移动速度
        console.info("create bullet ok",pos.x,pos.y,pos.z - 7,bullet.active)
    }

    update(deltaTime: number) {
        this._curShootTime += deltaTime;
        if (this._isShooting && this._curShootTime > this.shootTime) {
            // 玩家飞机生产子弹
            this.createSelpBullet();
            this._curShootTime = 0;
        }


    }
}


