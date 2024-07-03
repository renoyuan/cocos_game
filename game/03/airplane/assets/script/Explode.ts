import { _decorator, Component, Node } from 'cc';
import { PoolManager } from './framework/PoolManager';

const { ccclass, property } = _decorator;

@ccclass('Explode')
export class Explode extends Component {
    // start() {

    // }
    onEnable () {
        this.scheduleOnce(this._putBack, 1);
    }

    private _putBack(){
        PoolManager.instance().putNode(this.node);
    }


    // update(deltaTime: number) {
        
    // }
}


