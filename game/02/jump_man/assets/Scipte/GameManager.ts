import { _decorator, Component, Node ,Prefab,instantiate,CCInteger,Vec3,Label } from 'cc';
const { ccclass, property } = _decorator;
import { PlayerController } from "./PlayerController";


enum GameState{
    GS_INIT,
    GS_PLAYING,
    GS_END,
};

// 赛道格子类型，坑（BT_NONE）或者实路（BT_STONE）
enum BlockType{
    BT_NONE,
    BT_STONE,
};



@ccclass('GameManager')
export class GameManager extends Component {
    
    //分数
    @property({type: Label})
    public stepsLabel: Label | null = null;

    @property({type: Node})
    public startMenu: Node | null = null;

    // 角色
    @property({type: PlayerController})
    public playerCtrl: PlayerController | null = null;
    
    // 赛道预制
    @property({type: Prefab})
    public cubePrfb: Prefab | null = null;

    // 赛道长度
    @property
    public roadLength = 10;

    // 赛道轮次
    @property
    public roadTurn = 1;

    _road: BlockType[] = [];
    
    // 持续时间
    @property
    public stayOverTime = 5

    // 计时器
    timer = 0; 

    
    start() {
        
        this.curState = GameState.GS_INIT; // 初始化游戏状态
        // '?.' 是 Typescript 的可选链写法
        //== if(this.playerCtrl != null) this.playerCtrl.node.on('JumpEnd', this.onPlayerJumpEnd, this);        
        this.playerCtrl?.node.on('JumpEnd', this.onPlayerJumpEnd, this);
    }
    
    onPlayerJumpEnd(moveIndex: number) {
        if (this.stepsLabel) {
            // 因为在最后一步可能出现步伐大的跳跃，但是此时无论跳跃是步伐大还是步伐小都不应该多增加分数
            // this.stepsLabel.string = '' + (moveIndex >= this.roadLength ? this.roadLength : moveIndex);
            this.stepsLabel.string = '' + moveIndex;
        }
        this.checkResult(moveIndex);
    }


    init() {
        // 激活主界面
        if (this.startMenu) {
            this.startMenu.active = true;
        }
        // 生成赛道
        this.generateRoad();
        if(this.playerCtrl){
            // 禁止接收用户操作人物移动指令
            this.playerCtrl.setInputActive(false);
            // 重置人物位置
            this.playerCtrl.node.setPosition(Vec3.ZERO);
            // 重置分数
            this.playerCtrl.reset();
            // 重置赛道轮次
            this.roadTurn = 1
        }
        
    }

    onStartButtonClicked() {
        this.curState = GameState.GS_PLAYING;
    }

    checkResult(moveIndex: number) {
        if (moveIndex < this.roadLength*this.roadTurn) {
            // 跳到了坑上
            if (this._road[moveIndex] == BlockType.BT_NONE) {
                this.curState = GameState.GS_INIT;
            }
        } else {    
            // 取消最大长度限制，生成新的赛道--跳过了最大长度
            // this.curState = GameState.GS_INIT;
            console.info("生成新的赛道");
            this.generateRoad();
        }
    }

    set curState (value: GameState) {
        switch(value) {
            case GameState.GS_INIT:
                this.init();
                break;
            case GameState.GS_PLAYING:
                if (this.startMenu) {
                    this.startMenu.active = false;
                }
                if (this.stepsLabel) {
                    this.stepsLabel.string = '0';   // 将步数重置为0
                }
                // 设置 active 为 true 时会直接开始监听鼠标事件，此时鼠标抬起事件还未派发
                // 会出现的现象就是，游戏开始的瞬间人物已经开始移动
                // 因此，这里需要做延迟处理
                setTimeout(() => {
                    if (this.playerCtrl) {
                        this.playerCtrl.setInputActive(true);
                    }
                }, 0.1);
                break;
            case GameState.GS_END:
                break;
        }
    }
    
    // 生成赛道
    generateRoad() {

        // 防止游戏重新开始时，赛道还是旧的赛道
        // 因此，需要移除旧赛道，清除旧赛道数据
        this.node.removeAllChildren();
        this._road = [];
        // 确保游戏运行时，人物一定站在实路上
        this._road.push(BlockType.BT_STONE);

        // 确定好每一格赛道类型
        for (let i = 1; i < this.roadLength; i++) {
            // 如果上一格赛道是坑，那么这一格一定不能为坑
            if (this._road[i-1] === BlockType.BT_NONE) {
                this._road.push(BlockType.BT_STONE);
            } else {
                this._road.push(Math.floor(Math.random() * 2));
            }
        }

        // 根据赛道类型生成赛道
        for (let j = 0; j < this._road.length; j++) {
            let block: Node = this.spawnBlockByType(this._road[j]);
            // 判断是否生成了道路，因为 spawnBlockByType 有可能返回坑（值为 null）
            if (block) {
                this.node.addChild(block);
                block.setPosition(((this.roadTurn-1)*this.roadLength)+j, -1.5, 0);
            }
        }
        
        }
    
    // 生成石块
    spawnBlockByType(type: BlockType) {
        if (!this.cubePrfb) {
            return null;
        }
    
        let block: Node | null = null;
        // 赛道类型为实路才生成
        switch(type) {
            case BlockType.BT_STONE:
                block = instantiate(this.cubePrfb);
                break;
        }
    
        return block;
    }
    update(deltaTime: number) {
        // 如果在 一个位置停留时间超过 设置时间 则 gameover ok
        // console.info("this.startMenu.active",this.startMenu.active,"deltaTime",deltaTime ,"this.playerCtrl.stayTime", this.playerCtrl.stayTime,"stayOverTime",this.stayOverTime)
        if (!this.startMenu.active && this.playerCtrl.stayTime > this.stayOverTime ){
            console.info("重新开始")
            this.curState = GameState.GS_INIT;
        }
        

        
    }
}


