const actionAudio = cc.Class({
  extends: cc.Component,

  init() {
    this.audioEngine = cc.audioEngine;
  },

  resumeBGM() {
    cc.audioEngine.resumeMusic();
  },

  pauseBGM() {
    cc.audioEngine.pauseMusic()
  },

  stopBGM() {
    this.audioEngine.stopMusic(this.bgmId);
  },

  playBGM() {
    if (this.audioEngine.isMusicPlaying()) return;
    if (this.audioEngine) this.bgmId = this.audioEngine.playMusic(_audioCon.dataAudio.clipNames.bgm, true);
  },

  playAudioEff(type) {
    if (this.audioEngine) {
      this.audioEngine.play(type, false, 1);
    }
  },

});

export default actionAudio;