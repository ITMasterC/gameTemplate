var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconNodeArr: [cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window._notification.on("1130036", this.initLevelItem, this);
    },

    start() {

    },
    onEnable() {
        _tm_SDK.getFlowConfig(1130036);
    },

    init(){

    },

    initLevelItem() {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
        this.updateIcon();
        if (cc.director.getScheduler().isScheduled(this.updateIcon, this)) return;
        this.schedule(this.updateIcon, 4);
    },

    updateIcon() {
        let randomArr = comFun.randomArr(6, _tm_SDK.appList_1130036.length);
        for (let i = 0; i < randomArr.length; i++) {
            let appInfo = _tm_SDK.appList_1130036[randomArr[i]];
            this.iconNodeArr[i].getComponent('appSideItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, undefined);
        }
    },

    // update (dt) {},
});