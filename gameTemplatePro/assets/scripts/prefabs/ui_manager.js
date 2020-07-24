var ui_magr = cc.Class({
    extends: cc.Component,

    properties: {

    },

    ctor: function () {
        this.winPrefabsIns = require('./win_prefabs').getInstance()
        this.poolPrefabsIns = require('./pool_prefabs').getInstance()
        this.levelprefabsIns = require('./level_prefabs').getInstance()
        this.start();
    },

    start() {},

    showPrefabWin(ui_name, parent = undefined,data = undefined) {
        var node = this.winPrefabsIns.getUiByName(ui_name);
        if (node) {
            if(parent){
                node.parent = parent;
            }else{
                node.parent = cc.find('/Canvas');
            }
            node.active = true;
            //console.log('---------------------node', node);
            node.getComponent(ui_name).init(data);
        }
    },
    
    hidePrefabWin(ui_name) {
        this.winPrefabsIns.putUiByName(ui_name);
    },
    
    getNodeByPool(ui_name, data = undefined, parent = undefined){
        var node = this.poolPrefabsIns.getUiByName(ui_name);
        if (node) {
            if(parent){
                node.parent = parent;
            }else{
                node.parent = cc.find('/Canvas');
            }
            node.active = true;
            node.getComponent(ui_name).init(data);
            return node;
        }
    },

    putNodeInPool(ui_name, obj){
        this.poolPrefabsIns.putUiByName(ui_name, obj);
    },

    initLevelMap(){
        _pl_fun.hideBanner();
        this.levelprefabsIns.initLevel();
        _playerData.passLevel = false;
        window._notification.emit('updateLevel');
        setTimeout(() => {
            _pl_fun.startCreateVideo();
        }, 500);
        _audioCon.playAudioEff('startLevel');
    },

    removeLevelNode(){
        this.levelprefabsIns.removeLevelNode();
    }

    // update (dt) {},
});

module.exports = ui_magr;