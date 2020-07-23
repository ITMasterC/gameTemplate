/**
 * 1 将音效资源放到 resources/audio 文件夹下
 * 2 播放声音文件前先调用 _audioCon.loadRes(), 加载完成后方能播放音效
 */
let audioCon = {};
import actionAudio from './action_audio';
import dataAudio from './data_audio';
audioCon.audioAction = new actionAudio;
audioCon.dataAudio = dataAudio;
audioCon.bgmFlag = true;
audioCon.effectFlag = true;
//加载音效资源
audioCon.loadRes = function (cbFun) {
    cc.loader.loadResDir('audio', cc.AudioClip, function (err, assets) {
        if (err) {
            cc.error(err);
            window._notification.emit('loadRes');
            return;
        }
        for (var i = 0; i < assets.length; i++) {
            dataAudio.clipNames[assets[i].name] = assets[i];
        }
        audioCon.audioAction.init();
        window._notification.emit('loadRes');
    });
};

//播放指定音效
audioCon.playAudioEff = function (type) {
    if (!audioCon.effectFlag) return;
    audioCon.audioAction.playAudioEff(dataAudio.clipNames[type]);
};

//恢复播放背景音乐
audioCon.resumeBGM = function () {
    if (audioCon.bgmFlag) audioCon.audioAction.resumeBGM();
};
//暂停背景音乐
audioCon.pauseBGM = function () {
    audioCon.audioAction.pauseBGM();
};
//停止背景音乐
audioCon.stopBGM = function () {
   audioCon.audioAction.stopBGM();
};
//播放背景音乐
audioCon.playBGM = function () {
    if (audioCon.bgmFlag) audioCon.audioAction.playBGM();
};

window._audioCon = audioCon;