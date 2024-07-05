import { _decorator, Component, Node ,v2,SpriteFrame, Vec2} from 'cc';
const { ccclass, property } = _decorator;
import {CELL_STATUS, CELL_WIDTH, CELL_HEIGHT, ANITIME} from '../model/Const';
import {AudioUtils} from '../utils/AudioUtils';

// 控制游戏内的网格元素特效
@ccclass('GridView')
export class GridView extends Component {

    @property(SpriteFrame)
    public defaultFrame:SpriteFrame=null;
    @property(Animation)
    public animation:Animation=null;
    
    private isSelect =false;

    public controller:Node = null;
    onLoad () {
        //this.model = null;
        this.isSelect = false;
    }

    initWithModel(model){
        let x =CELL_WIDTH * (model.startX - 0.5);
        let y = CELL_HEIGHT * (model.startY - 0.5) ;
  
        this.node.setPosition(x, y)
       
        
        if (model.status == CELL_STATUS.COMMON){
            this.animation.pause();
        } 
        else{
            this.animation.play();
        }
    }

    setController(controller){
        this.controller = controller;
    }
    
    // 执行移动动作
    updateView(model){
        let cmd = model.cmd;
        if(cmd.length <= 0){
            return ;
        }
        let actionArray = [];
        let curTime = 0;
        for(var i in cmd){
            if( cmd[i].playTime > curTime){
                let delay =cmd[i].playTime - curTime;
                actionArray.push(delay);
            }
            if(cmd[i].action == "moveTo"){
                let x = (cmd[i].pos.x - 0.5) * CELL_WIDTH;
                let y = (cmd[i].pos.y - 0.5) * CELL_HEIGHT;
                var move = cc.moveTo(ANITIME.TOUCH_MOVE, cc.v2(x,y));
                actionArray.push(move);
            }
            else if(cmd[i].action == "toDie"){
                if(this.status == CELL_STATUS.BIRD){
                    let animation = this.node.getComponent(cc.Animation);
                    animation.play("effect");
                    actionArray.push(cc.delayTime(ANITIME.BOMB_BIRD_DELAY));
                }
                var callFunc = cc.callFunc(function(){
                    this.node.destroy();
                },this);
                actionArray.push(callFunc);
            }
            else if(cmd[i].action == "setVisible"){
                let isVisible = cmd[i].isVisible;
                actionArray.push(cc.callFunc(function(){
                    if(isVisible){
                        this.node.opacity = 255;
                    }
                    else{
                        this.node.opacity = 0;
                    }
                },this));
            }
            else if(cmd[i].action == "toShake"){
                let rotateRight = cc.rotateBy(0.06,30);
                let rotateLeft = cc.rotateBy(0.12, -60);
                actionArray.push(cc.repeat(cc.sequence(rotateRight, rotateLeft, rotateRight), 2));
            }
            curTime = cmd[i].playTime + cmd[i].keepTime;
        }
       
        if(actionArray.length == 1){
            this.node.runAction(actionArray[0]);
        }
        else{
            this.node.runAction(cc.sequence(...actionArray));
        }

    }


    setSelect(flag){
        
        let bg = this.node.getChildByName("select");
        if(flag == false && this.isSelect && this.model.status == CELL_STATUS.COMMON){
            this.animation.pause();
            this.node.getComponent(cc.Sprite).spriteFrame = this.defaultFrame;
        }
        else if(flag && this.model.status == CELL_STATUS.COMMON){
            animation.play(CELL_STATUS.CLICK);
        }
        else if(flag && this.model.status == CELL_STATUS.BIRD){
            animation.play(CELL_STATUS.CLICK);
        }
        bg.active = flag; 
        this.isSelect = flag;
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


