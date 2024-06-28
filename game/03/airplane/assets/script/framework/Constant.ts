import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

// 游戏内的类型
export class Constant {
    // 敌机类型
    public static EnemyType = {
        TYPE1: 1,
        TYPE2: 2,
    }
    // 敌机组合类型 组合一 单架飞机 组合间隔 1 开始出现时间 0 组合二 一字型（5） 组合间隔 0.8 开始出现时间11 组合三 v字型（7） 组合间隔 0.6 开始出现时间20+ 
    public static Combination = {
        PLAN1: 1,
        PLAN2: 2,
        PLAN3: 3,
    }
    // 顺序要和设置的碰撞矩阵一致 且要是二进制
    public static ColliderType = {
        PLAYER:1<<1,
        ENEMY:1<<2,
        BULLET:1<<3,
        ENEMY_BULLET:1<<4,
        BULLET_PROP: 1 << 5,
    }
    public static BulletPropType = {
        BULLET_M: 1,
        BULLET_H: 2,
        BULLET_S: 3,
        BULLET_INIT: 4,
    }

    public static Direction = {
        LEFT: 1,
        MIDDLE: 2,
        RIGHT: 3,
    }
    
}


