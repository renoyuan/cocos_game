System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AudioSource, AudioClip, resources, director, _dec, _class, _class2, _crd, ccclass, property, AudioMgr;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AudioSource = _cc.AudioSource;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0eea260sS9Ib7fZRo2azVU6", "AudioMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'AudioClip', 'resources', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioMgr", AudioMgr = (_dec = ccclass('AudioMgr'), _dec(_class = (_class2 = class AudioMgr extends Component {
        static get inst() {
          if (this._inst == null) {
            this._inst = new AudioMgr();
          }

          return this._inst;
        }

        constructor() {
          super(); //@en create a node as audioMgr
          //@zh 创建一个节点作为 audioMgr

          this._audioSource = void 0;
          var audioMgr = new Node();
          audioMgr.name = '__audioMgr__'; //@en add to the scene.
          //@zh 添加节点到场景

          director.getScene().addChild(audioMgr); //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(audioMgr); //@en add AudioSource componrnt to play audios.
          //@zh 添加 AudioSource 组件，用于播放音频。

          this._audioSource = audioMgr.addComponent(AudioSource);
        }

        get audioSource() {
          return this._audioSource;
        }
        /**
        * @en
        * play short audio, such as strikes,explosions
        * @zh
        * 播放短音频,比如 打击音效，爆炸音效等
        * @param sound clip or url for the audio
        * @param volume 
        */


        playOneShot(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, volume);
          } else {
            resources.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.playOneShot(clip, volume);
              }
            });
          }
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param volume 
         */


        play(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (sound instanceof AudioClip) {
            this._audioSource.stop();

            this._audioSource.clip = sound;

            this._audioSource.play();

            this.audioSource.volume = volume;
          } else {
            resources.load(sound, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                this._audioSource.stop();

                this._audioSource.clip = clip;

                this._audioSource.play();

                this.audioSource.volume = volume;
              }
            });
          }
        }
        /**
         * stop the audio play
         */


        stop() {
          this._audioSource.stop();
        }
        /**
         * pause the audio play
         */


        pause() {
          this._audioSource.pause();
        }
        /**
         * resume the audio play
         */


        resume() {
          this._audioSource.play();
        }

        update(deltaTime) {}

      }, _class2._inst = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6c031ef8877443b488515756780a579088d7032.js.map