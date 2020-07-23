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
        _pl_fun.stopCreateVideo();
        setTimeout(() => {
            _pl_fun.showInterstitalAd();
        }, 1000);
        _audioCon.playAudioEff('fail');
        _ui_mager.removeLevelNode();
    },

    btnCallBack(e, data) {
        _audioCon.playAudioEff('click');
        switch (data) {
            case 'continue':
                this.continue();
                break;
            case 'home':
                this.returnHome();
                break;
        }
    },

    returnHome() {
        this.removeNode();
    },

    continue () {
        if (this.selectToggole.isChecked){
            _pl_fun.showAdVideo(this.reward);
        }else{
            this.removeNode();
        }
    },

    reward() {
        _pl_fun.hideBanner();
        this.removeNode();
    },

    removeNode() {
        _ui_mager.showPrefabWin('mainPrefab');
        _ui_mager.hidePrefabWin('rebrithPrefab');
    }

    // update (dt) {},
});