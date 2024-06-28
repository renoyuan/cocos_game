import { _decorator, Component, Node,Collider,ITriggerEvent } from 'cc';
const { ccclass, property } = _decorator;
import { Constant } from '../framework/Constant';
import { GameManager } from '../framework/GameManager';

const OUTOFBOUNCE=40;
@ccclass('EnemyPlane')
export class EnemyPlane extends Component {
   
    @property
    public createBulletTime = 0.5;
    private _enemySpeed = 0;
    private _needBullet = false;
    private _gameManager: GameManager = null;
    private _currCreateBulletTime = 0;
    start() {

    }

    update(deltaTime: number) {
        const pos= this.node.position;
        const movePos = pos.z + this._enemySpeed;
        this.node.setPosition(pos.x, pos.y, movePos);

        if(this._needBullet){
            this._currCreateBulletTime += deltaTime;
            if(this._currCreateBulletTime > this.createBulletTime){
                this._gameManager.createEnemyBullet(this.node.position);
                console.log("createEnemyBullet")
                this._currCreateBulletTime = 0;
            }
        }

        if(movePos > OUTOFBOUNCE){
            this.node.destroy();
        }
    }
    show(gameManager: GameManager, speed: number, needBullet: boolean){
        this._gameManager = gameManager;
        this._enemySpeed = speed;
        this._needBullet = needBullet;
    }

    onDisable(){
        const collider=this.getComponent(Collider);
        collider.off('onTriggerEnter',this._onTriggerEnter,this);
        console.log("enemy onTriggerEnter")
    }

    onEnable(){
        const collider=this.getComponent(Collider);
        collider.on('onTriggerEnter',this._onTriggerEnter,this);
    }

    private _onTriggerEnter(event:ITriggerEvent){
        const collisionGroup = event.otherCollider.getGroup();
        if(collisionGroup==Constant.ColliderType.PLAYER ||collisionGroup==Constant.ColliderType.BULLET ){
            console.log("BOOM destroy  enemy")
            this.node.destroy();
            this._gameManager.addScore();
            
        }

    }
}


