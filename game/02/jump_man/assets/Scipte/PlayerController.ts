import { _decorator, Component, Node, input, Input, EventMouse, Vec3,Animation,SkeletalAnimation    } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    @property({type: SkeletalAnimation})
    public CocosAnim: SkeletalAnimation|null = null;
    // 添加动画属性
    @property({type: Animation})
    public BodyAnim: Animation | null = null;

    // 是否接收到跳跃指令
    private _startJump: boolean = false;
    // 跳跃步长
    private _jumpStep: number = 0;
    // 当前跳跃时间
    private _curJumpTime: number = 0;
    // 每次跳跃时长
    private _jumpTime: number = 0.3;
    // 当前跳跃速度
    private _curJumpSpeed: number = 0;
    // 当前角色位置
    private _curPos: Vec3 = new Vec3();
    // 当前角色上一个位置
    private _lastPos: Vec3 = new Vec3();
    // 每次跳跃过程中，当前帧移动位置差
    private _deltaPos: Vec3 = new Vec3(0, 0, 0);
    // 角色目标位置
    private _targetPos: Vec3 = new Vec3();

    private _curMoveIndex = 0;

    // 停留时间
    @property
    public stayTime = 0;

    start() {
        // input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    reset() {
        // 清空步数以及等待时间
        this._curMoveIndex = 0;
        this.stayTime=0
    }

    // 激活鼠标监控 主程序控制
    setInputActive(active: boolean) {
        if (active) {
            input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        } else {
            input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }
    }
    
    //   监控鼠标事件在 EventMouse
    onMouseUp(event: EventMouse) {
        
        // 如果是鼠标左键，那么 getButton 方法会返回 0，而如果是右键，则返回 2。
        if (event.getButton() === 0) {
            this.jumpByStep(1);
        }else if (event.getButton() === 2) {
            this.jumpByStep(2);
        }

    }

    //计算目标位置、速度的方法 移动 && 运行动画
    jumpByStep(step: number) {
        
        // 执行跳跃中则不运行动画
        if (this._startJump) {
            return;
        }
        this._startJump = true; // 表示开始跳跃
        this._jumpStep = step; // 本次跳跃的步数
        this._curJumpTime = 0; // 重置下跳跃的时间
        this._curJumpSpeed = this._jumpStep / this._jumpTime; // 计算跳跃的速度
        this.node.getPosition(this._curPos); // 获取角色当前的位置放入this._curPos
        
        // 计算目标位置 目标位置 = 当前位置 + 步长 向量加法 结果存在 _targetPos 中
        Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0));  

        // 播放动画
        if (this.CocosAnim) {
            if (step === 1 || step === 2){
                this.CocosAnim.getState('cocos_anim_jump').speed = 3.5; // 跳跃动画时间比较长，这里加速播放
                this.CocosAnim.play('cocos_anim_jump'); // 播放跳跃动画
            }
           
        }
        // if (this.BodyAnim) {
        //     if (step === 1) {
        //         this.BodyAnim.play('oneStep');
        //     } else if (step === 2) {
        //         this.BodyAnim.play('twoStep');
        //     }
        //     this._curMoveIndex += step;
        // }

        this._curMoveIndex += step;
    }

    // 跳跃结束，执行待机动画
    onOnceJumpEnd() {
        
        if (this.CocosAnim) {
            this.CocosAnim.getState('cocos_anim_idle').speed = 3.5;
            this.CocosAnim.play('cocos_anim_idle');
        }
        this.node.emit('JumpEnd', this._curMoveIndex);
    }



    //游戏循环 
    update(deltaTime: number): void {

        // 处理跳跃的分支逻辑
        if( this._startJump){ 
            // console.log("deltaTime",deltaTime)
            this._curJumpTime += deltaTime;     // 更新_curJumpTime

            if (this._curJumpTime > this._jumpTime) { // 跳跃结束 更新位置
                
                this._lastPos= this._curPos; // 更新上一步位置&& 清空等待时间
                this.stayTime = 0;
                this.node.setPosition(this._targetPos);  // 强制位移到目标位置
                this._startJump = false; // 标记跳跃结束
                this.onOnceJumpEnd(); // 执行待机动画
            } else { // 执行跳跃动画
                // tween
                this.node.getPosition(this._curPos);  // 获取当前的位置 
                this._deltaPos.x = this._curJumpSpeed * deltaTime; // 计算本帧应该位移的长度
                Vec3.add(this._curPos, this._curPos, this._deltaPos); // 将当前位置加上位移的长度
                this.node.setPosition(this._curPos); // 设置位移后的位置               
                }  
        } 
        else{
            if (this._lastPos){
                // 记录停滞时间
                this.stayTime += deltaTime
            }
        }
        
    }
}


