cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:


    btnCallBack(e, data) {
        _audioCon.playAudioEff('click');
        switch (data) {
            case 'success':
                this.success();
                break;
            case 'fail':
                this.fail();
                break;
        }
    },

    success(){
        _ui_mager.removeLevelNode();
        _ui_mager.showPrefabWin('passOnePrefab');
    },

    fail(){
        _ui_mager.removeLevelNode();
        _ui_mager.showPrefabWin('rebrithPrefab');
    }

});