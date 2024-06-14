import { _decorator, Component, Node, input, Input, EventMouse, Vec3,Animation    } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
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
    private _jumpTime: number = 0.1;
    // 当前跳跃速度
    private _curJumpSpeed: number = 0;
    // 当前角色位置
    private _curPos: Vec3 = new Vec3();
    // 每次跳跃过程中，当前帧移动位置差
    private _deltaPos: Vec3 = new Vec3(0, 0, 0);
    // 角色目标位置
    private _targetPos: Vec3 = new Vec3();

    private _curMoveIndex = 0;
    start() {
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }
    setInputActive(active: boolean) {
        if (active) {
            input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        } else {
            input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }
    }
    
    onMouseUp(event: EventMouse) {
        //   监控鼠标事件在 EventMouse 中，
        // 如果是鼠标左键，那么 getButton 方法会返回 0，而如果是右键，则返回 2。
        if (event.getButton() === 0) {
            this.jumpByStep(1);
        }else if (event.getButton() === 2) {
            this.jumpByStep(2);
        }

    }
    onOnceJumpEnd() {
        this.node.emit('JumpEnd', this._curMoveIndex);
    }
    //计算目标位置、速度的方法
    jumpByStep(step: number) {
        // 播放动画
        if (this.BodyAnim) {
            if (step === 1) {
                this.BodyAnim.play('oneStep');
            } else if (step === 2) {
                this.BodyAnim.play('twoStep');
            }
            this._curMoveIndex += step;
        }
        // 执行跳跃
        if (this._startJump) {
            return;
        }
        this._startJump = true; // 表示开始跳跃
        this._jumpStep = step; // 本次跳跃的步数
        this._curJumpTime = 0; // 重置下跳跃的时间
        this._curJumpSpeed = this._jumpStep / this._jumpTime; // 计算跳跃的速度
        this.node.getPosition(this._curPos); // 获取角色当前的位置
        
        // 目标位置 = 当前位置 + 步长 向量加法 结果存在 _targetPos 中
        Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0));  
    }


    reset() {
        this._curMoveIndex = 0;
    }
    update(deltaTime: number): void {
        if( this._startJump){ // 处理跳跃的分支逻辑
            this._curJumpTime += deltaTime;     
            if (this._curJumpTime > this._jumpTime) { // 跳跃结束
                // end
                this.node.setPosition(this._targetPos);  // 强制位移到目标位置
                this._startJump = false; // 标记跳跃结束
            } else { // 跳跃中
                // tween
                this.node.getPosition(this._curPos);  // 获取当前的位置 
                this._deltaPos.x = this._curJumpSpeed * deltaTime; // 计算本帧应该位移的长度
                Vec3.add(this._curPos, this._curPos, this._deltaPos); // 将当前位置加上位移的长度
                this.node.setPosition(this._curPos); // 设置位移后的位置
                                
                }
            this.onOnceJumpEnd();
        }
        
    }
}


