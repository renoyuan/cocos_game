import { _decorator, Collider, Component, ITriggerEvent, Node } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

const OUTRANGE = -40;
const ENEMYOUTRANGE = 40;
@ccclass('Bullet')
export class Bullet extends Component {
    public bulletSpeed = 0;
    private _direction = Constant.Direction.MIDDLE;
    private _isEnemyBullet = false;

    onEnable () {
        const collider = this.getComponent(Collider);
        collider.on('onTriggerEnter', this._onTriggerEnter, this);
    }

    onDisable () {
        const collider = this.getComponent(Collider);
        collider.off('onTriggerEnter', this._onTriggerEnter, this);
    }

    start() {

    }

    update(deltaTime: number) {
        const pos = this.node.position;
        let moveLength = 0;
        if (this._isEnemyBullet) { // 往 +z 方向
            moveLength = pos.z + this.bulletSpeed;
            this.node.setPosition(pos.x, pos.y, moveLength);
            if (moveLength > ENEMYOUTRANGE) {
                this.node.destroy();
                console.log('enemy bullet destroy');
            }
        } else { // 往 -z 方向
            moveLength = pos.z-this.bulletSpeed;  
            // console.info("bullet moveZ" ,moveLength,OUTRANGE)
            
            // bullet move
            if(this._direction === Constant.Direction.LEFT){
                this.node.setPosition(pos.x - this.bulletSpeed * 0.2, pos.y, moveLength);
            } else if(this._direction === Constant.Direction.RIGHT){
                this.node.setPosition(pos.x + this.bulletSpeed * 0.2, pos.y, moveLength);
            } else{
                this.node.setPosition(pos.x, pos.y, moveLength);
            }
            
            if (moveLength<OUTRANGE){
                this.node.destroy();//销毁子弹
                // console.info("bullet destroy" ,moveLength,OUTRANGE)
            }
        }
    }

    show(speed: number, isEnemyBullet: boolean, direction = Constant.Direction.MIDDLE){
        this.bulletSpeed = speed;
        this._isEnemyBullet = isEnemyBullet;
        this._direction = direction;
        
    }

    private _onTriggerEnter(event: ITriggerEvent){
        console.log('trigger  bullet destroy');
        this.node.destroy();
    }

}


