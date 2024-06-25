import { _decorator, Component, Node, SystemEvent,Touch,EventTouch,EventTarget,input,Input    } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SlefPlane')
export class SlefPlane extends Component {
    @property
    public spped = 1000;

    start() {
        
        // input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }
    
    onTouchStart( event: EventTouch){
        
        // 触碰开始
        

    }
    onTouchMove(  event: EventTouch){
        // 触碰移动
        const delta = event.getDelta();
        let pos = this.node.position;
        this.node.setPosition(pos.x-(this.spped * 0.01*delta.y),pos.y,pos.z- (0.01*this.spped * delta.x)) //
        console.info(pos,"pos","delta",delta,"坐标",pos.x-this.spped * 0.01*delta.x,pos.y,pos.z- 0.01*this.spped * delta.y)
        
    }

    update(deltaTime: number) {
        
    }
}


