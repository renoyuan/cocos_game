import { _decorator, Component, Node, Touch,EventTouch,EventTarget,input,Input, Collider,AudioSource, ITriggerEvent    } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('SelfPlane')
export class SelfPlane extends Component {
    @property(Node)
    public explode: Node = null;
    @property(Node)
    public bloodFace: Node = null;
    @property(Node)
    public blood: Node = null;
    public lifeValue = 5;
    public isDie = false;

    private _currLife = 0;
    private _audioEffect: AudioSource = null;

    public init(){
        this._currLife = this.lifeValue;
        this.isDie = false;
        this.explode.active = false;
        this.blood.active = true;
        this.bloodFace.setScale(1, 1, 1);
    }
    start(){
        this._audioEffect = this.getComponent(AudioSource);
    }

    // update(deltaTime: number) {
        
        
    // }
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
            this._currLife --;
            this.bloodFace.setScale(this._currLife / this.lifeValue, 1, 1);
            if(this._currLife <=0){
                this.isDie = true;
                this._audioEffect.play();
                this.explode.active = true;
                this.blood.active = false;
                // console.log('self plane is die');
            }
        }

    }
}


