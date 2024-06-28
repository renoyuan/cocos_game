
import { _decorator, Component, Node, input, Input, Touch, EventTouch, Vec2 } from 'cc';
import { GameManager } from '../framework/GameManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIMain
 * DateTime = Mon Nov 15 2021 14:10:01 GMT+0800 (China Standard Time)
 * Author = mywayday
 * FileBasename = UIMain.ts
 * FileBasenameNoExtension = UIMain
 * URL = db://assets/script/ui/UIMain.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('UIMain')
export class UIMain extends Component {
    @property
    public spped = 5;
    // 控制飞机
    @property(Node)
    public playerPlane: Node = null;

    @property(GameManager)
    public gameManager: GameManager = null;
    

    start() {
        // 监听全局事件
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        // 
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }
    
    onTouchStart(event: EventTouch){
        this.gameManager.isShooting(true);

    }
    onTouchEnd(event: EventTouch){
        this.gameManager.isShooting(false);
    }
    onTouchMove(  event: EventTouch){
        // 触碰移动
        const delta = event.getDelta();
        let pos = this.playerPlane.position;
        console.info("self palne pos",pos)
        this.playerPlane.setPosition(pos.x+(this.spped * 0.01*delta.x),pos.y, pos.z- (0.01*this.spped * delta.y)) //
        // console.info(pos,"pos","delta",delta,"坐标",pos.x+(this.spped * 0.01*delta.x),pos.z- (0.01*this.spped * delta.y))
        
    }
}

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
