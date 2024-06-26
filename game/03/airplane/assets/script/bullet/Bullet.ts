import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

const OUTRANGE = 80;
@ccclass('Bullet')
export class Bullet extends Component {
    @property
    public bulletSpeed = 0;



    start() {

    }

    update(deltaTime: number) {
        const pos = this.node.position;
        const moveZ = pos.z-this.bulletSpeed;  
        this.node.setPosition(pos.x,pos.y,moveZ) // 移动子弹位置
        if (moveZ>OUTRANGE){
            this.node.destroy();//销毁子弹
            console.info("bullet destroy" ,moveZ,OUTRANGE)
        }
    }
}


