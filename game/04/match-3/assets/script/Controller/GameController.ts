import { _decorator, Component, Node, AudioSource, Button } from 'cc';
const { ccclass, property } = _decorator;

import { GameModel } from "../model/GameModel";


// Game 场景主体
@ccclass('GameController')
export class GameController extends Component {
    @property(Node)
    public grid: Node = null; // 网格组件
    @property(Button)
    public audioButton: Button = null;
    @property(AudioSource)
    public audioSource: AudioSource = null;

   

    
    onAudioButton(event:Event,custom:string){
        custom === "1" ? this.audioSource.pause() : this.audioSource.play();
        //Toast(state === 1 ? '关闭背景音乐🎵' : '打开背景音乐🎵' )

    }
    onLoad() {
        // let audioButton = this.node.parent.getChildByName('audioButton')
        // init gamemodel
        const gameModel = new GameModel();
        gameModel.init(4);
        const gridScript = this.grid.getComponent("GridView");
        // gridScript.setController(this); // 传入setController 节点
        // gridScript.initWithCellModels(this.gameModel.getCells());
        // this.audioSource = cc.find('Canvas/GameScene')._components[1].audio;
        // this.audioSource = cc.find('Canvas/GameScene')._components[1].audio;
    }




    start() {

    }

    update(deltaTime: number) {

    }
}


