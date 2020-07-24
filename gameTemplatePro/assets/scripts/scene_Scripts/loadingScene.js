var UI_magr = require("./../prefabs/ui_manager");
let serverData = require('./../con_data/serverData.js');
let playerData = require('./../con_data/playerData.js');
let platfrom_fun = require('./../platfrom/platfrom_fun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        ballNode: cc.Node,
        flagNode: cc.Node,
        versionLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        window.loadingScene = this;
        this.loadResCount = 0;
        this.allResCount = 3;

        this.endPos = this.flagNode.getPosition();
        this.startPos = this.ballNode.getPosition();
        this.flag_X = Math.floor((Math.abs(this.endPos.x) + Math.abs(this.startPos.x)) / this.allResCount);

        window._serverData = serverData.getInstance();
        _serverData.getServerData();
        window._playerData = playerData.getInstance();
        _playerData.getPastData();
        this.versionLabel.string = _playerData.version;
        _audioCon.loadRes();
        this.finishLoadPage();
        _notification.on('loadRes', this.loadRes, this);
        _pl_fun.init();
    },

    finishLoadPage() {
        if (!window._ui_mager) {
            window._ui_mager = new UI_magr();
            this.loadRes();
        }
    },

    start() {},

    loadRes() {
        this.loadResCount++;
        this.ballNode.stopAllActions();
        this.ballNode.setPosition(cc.v2(this.startPos.x + (this.flag_X - 1) * this.loadResCount, this.startPos.y));
        let action = cc.moveTo(0.05, cc.v2(this.startPos.x + this.flag_X * this.loadResCount, this.startPos.y));
        this.ballNode.runAction(action);
        if (this.loadResCount >= this.allResCount) {
            _notification.removeAll('loadRes');
            _audioCon.audioAction.playBGM();
            cc.director.loadScene("gameScene");
        }
    },

});