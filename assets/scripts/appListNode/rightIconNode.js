var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconNode_0: cc.Node,
        iconNode_1: cc.Node,
        iconNode_2: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        window._notification.on("1130238", this.initLevelItem, this);
        this.iconNode_0.stopAllActions();
        this.iconNode_1.stopAllActions();
        var action1 = cc.rotateTo(0.2, 8);
        var action2 = cc.rotateTo(0.3, -8);
        var action3 = cc.rotateTo(0.2, 0);
        var action4 = cc.rotateTo(0.1, 8);
        var action5 = cc.rotateTo(0.1, -8);
        var action6 = cc.rotateTo(0.1, 0);
        var action7 = cc.rotateTo(2, 0);
        var sqe = cc.sequence(action1, action2, action3, action4, action5, action6, action7);
        var action = cc.repeatForever(sqe);
        this.iconNode_0.runAction(action);

        this.scheduleOnce(function () {
            var action1 = cc.rotateTo(0.2, 8);
            var action2 = cc.rotateTo(0.3, -8);
            var action3 = cc.rotateTo(0.2, 0);
            var action4 = cc.rotateTo(0.1, 8);
            var action5 = cc.rotateTo(0.1, -8);
            var action6 = cc.rotateTo(0.1, 0);
            var action7 = cc.rotateTo(2, 0);
            var sqe = cc.sequence(action1, action2, action3, action4, action5, action6, action7);
            var action = cc.repeatForever(sqe);
            this.iconNode_1.runAction(action);
        }, 1)

        this.scheduleOnce(function () {
            var action1 = cc.rotateTo(0.2, 8);
            var action2 = cc.rotateTo(0.3, -8);
            var action3 = cc.rotateTo(0.2, 0);
            var action4 = cc.rotateTo(0.1, 8);
            var action5 = cc.rotateTo(0.1, -8);
            var action6 = cc.rotateTo(0.1, 0);
            var action7 = cc.rotateTo(2, 0);
            var sqe = cc.sequence(action1, action2, action3, action4, action5, action6, action7);
            var action = cc.repeatForever(sqe);
            this.iconNode_2.runAction(action);
        }, 2)
    },

    onEnable() {
       // _tm_SDK.getFlowConfig(1130238);
    },

    start() {

    },

    init(){

    },

    initLevelItem() {
        if(cc.sys.platform != cc.sys.WECHAT_GAME)return;
        this.updateItem();
        if(cc.director.getScheduler().isScheduled(this.updateItem, this)) return;
        this.schedule(this.updateItem, 4);
    },
    
    updateItem(){
        let randomArr = comFun.randomArr(3, _tm_SDK.appList_1130238.length);
        let appInfo0 = _tm_SDK.appList_1130238[randomArr[0]];
        this.iconNode_0.getComponent('appPopWinItem').init(appInfo0.show_config.image, appInfo0.show_config.title, appInfo0.positionId, appInfo0.creativeId,appInfo0.title, undefined);
        let appInfo1 = _tm_SDK.appList_1130238[randomArr[1]];
        this.iconNode_1.getComponent('appPopWinItem').init(appInfo1.show_config.image, appInfo1.show_config.title, appInfo1.positionId, appInfo1.creativeId, appInfo1.title, undefined);
        let appInfo2 = _tm_SDK.appList_1130238[randomArr[2]];
        this.iconNode_2.getComponent('appPopWinItem').init(appInfo2.show_config.image, appInfo2.show_config.title, appInfo2.positionId, appInfo2.creativeId, appInfo2.title, undefined);
    },
    // update (dt) {},
});