cc.Class({
    extends: cc.Component,

    properties: {
        selectToggole: cc.Toggle
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    init(data) {
        this.selectToggole.check();
        _audioCon.playAudioEff('finish');
        _pl_fun.stopCreateVideo();
        _playerData.playLevelIndex++;
        if (_playerData.playLevelIndex > _playerData.levelIndex) {
            _playerData.levelIndex = _playerData.playLevelIndex;
        }
        _pl_fun.showBanner(2);
        _pl_fun.showInterstitalAd();
        this.rewardNum = Math.floor(_playerData.hadPlayTimes * 50 * 1.5 + 50);
        _playerData.saveNewData();
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //加速垃圾处理
            wx.triggerGC();
        }
        _ui_mager.removeLevelNode();
    },

    btnCallBack(e, data) {
        _audioCon.playAudioEff('click');
        switch (data) {
            case 'triple':
                if (this.selectToggole.isChecked) {
                    _pl_fun.showAdVideo(this.reward);
                } else {
                    this.passReward();
                }
                break;
        }
    },

    passReward() {
        this.removeNode();
    },

    reward() {
        //奖励逻辑

        this.removeNode();
    },

    removeNode() {
        _ui_mager.showPrefabWin('mainPrefab');
        _ui_mager.hidePrefabWin('passOnePrefab');
    },
});