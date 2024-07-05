import { _decorator, Component, Node,ProgressBar,Button,AudioClip,AudioSource,director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoginController')
export class LoginController extends Component {
    start() {

    }
    @property(ProgressBar)
    public loadingBar:ProgressBar = null

    @property(Button)
    public loginButton:Button = null

    @property(AudioClip)
    public worldSceneBGM:AudioClip = null

    @property(AudioSource)
    public audioSource: AudioSource = null!;

    public onLoad() {
        // 确保你的AudioSource组件已经被添加到节点上
        this.audioSource = this.node.getComponent(AudioSource);

        // 设置音频循环播放
        this.audioSource.loop = true;

        // 开始播放音频
        this.audioSource.play();
      }
    public onDestroy () {
        this.audioSource.stop();
      }

    public onLogin () {
        // 滚动条设置
        const last = 0
        console.log(this.loadingBar)
        this.loadingBar.node.active = true;
        this.loginButton.node.active = false;
        this.loadingBar.progress = 0;
        this.loadingBar.barSprite.fillRange = 0;
        
        //loadingBar
        // onProgress() (count, amount, item) => {
        //     let progress:number = parseFloat((count / amount).toFixed(2));

        //     if (progress > this.loadingBar.progress) {
        //       this.loadingBar.progress  = progress;
        //     }
        //   };

        //preloadScene
        // director.preloadScene("Game", function () {
            // this.loadingBar.node.active = false;
            // this.loginButton.node.active = false;
            // director.loadScene("Game");
            // cc.log("加载成功");
            
        // });

        
       
      
  }

    update(deltaTime: number) {
        
    }

}


