// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        index: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    btnCallBack() {
        _audioCon.playAudioEff('click');
        if (this.index > _playerData.levelIndex) {
            _ui_mager.getNodeByPool("w_tipNode", "还没有玩到这一关喔！");
        } else {
            _playerData.playLevelIndex = this.index;
            _ui_mager.hidePrefabWin('levelNode');
            _ui_mager.initLevelMap();
            window._notification.emit('startGame');
        }
    },

    updateView() {
        if (this.index > _playerData.levelIndex) {
            this.node.getChildByName("unlockNode").active = 255;
        } else {
            this.node.getChildByName("unlockNode").active = 0;
        }
    },

    onEnable() {
        this.updateView();
    }

    // update (dt) {},
});