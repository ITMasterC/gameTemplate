cc.Class({
    extends: cc.Component,

    properties: {},
    // onLoad () {},

    start() {

    },

    init(data) {
        console.log('--------------main');
        _pl_fun.hideBanner();
    },

    btnCallBack(e, data) {
        _audioCon.playAudioEff('click');
        switch (data) {
            case 'start':
                this.showStartWin();
                break;
        }
    },

    showStartWin() {
        _ui_mager.showPrefabWin('levelNode');
        this.removeNode();
    },
    removeNode() {
        _ui_mager.hidePrefabWin('mainPrefab');
    }

});