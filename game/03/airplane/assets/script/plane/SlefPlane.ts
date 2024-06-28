import { _decorator, Component, Node, Touch,EventTouch,EventTarget,input,Input, Collider, ITriggerEvent    } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('SlefPlane')
export class SlefPlane extends Component {
    

    update(deltaTime: number) {
        
        
    }
    onDisable(){
        const collider=this.getComponent(Collider);
        collider.off('onTriggerEnter',this._onTriggerEnter,this);
    }

    onEnable(){
        const collider=this.getComponent(Collider);
        collider.on('onTriggerEnter',this._onTriggerEnter,this);
    }

    private _onTriggerEnter(event:ITriggerEvent){
        const collisionGroup = event.otherCollider.getGroup();
        if(collisionGroup==Constant.ColliderType.ENEMY ||collisionGroup==Constant.ColliderType.ENEMY_BULLET ){
            console.log("reduce blood")
        }

    }
}


