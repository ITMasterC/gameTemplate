var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        scrollViewContent: cc.Node,
        passItemPrefab: cc.Prefab,
        rootNode: cc.Node,
        _initEnd: false,
        scrollview: cc.ScrollView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.itemNodeArr = [];
        if (!this.distanceX) this.distanceX = 10;
        if (!_playerData.unRestrictedUser) this.scrollViewContent.x = -this.scrollViewContent.width / 2;
        //this.init();
        this.scrollview.node.on('scroll-began', this.callback, this);
        window._notification.on("1130238", this.initLevelItem, this);
    },
    callback() {
        console.log('-----aaaaa  callback')
        let index = Math.floor(Math.random() * _tm_SDK.appList_1130238.length);
        comFun.jumpOutApp(_tm_SDK.appList_1130238[index].positionId, _tm_SDK.appList_1130238[index].creativeId, _tm_SDK.appList_1130238[index].title, true);
    },

    onEnable() {
        _tm_SDK.getFlowConfig(1130238);
    },

    start() {
        //this.initLevelItem();
    },

    init(data) {
    },

    initLevelItem(type = 2) {
        this.addNumber = 0.8;
        var item = null;
        var itemCount = 0;
        let randomArr = comFun.randomArr(_tm_SDK.appList_1130238.length, _tm_SDK.appList_1130238.length);
        if (this.itemNodeArr.length == 0) {
            for (var i = 0; i < randomArr.length; i++) {
                var appInfo = _tm_SDK.appList_1130238[randomArr[i]];
                item = cc.instantiate(this.passItemPrefab);
                item.getComponent('listScrollItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, i);
                this.scrollViewContent.addChild(item);
                itemCount++;
                this.itemNodeArr.push(item);
            }
            var distance_X = item.height / 10;
            this.distanceX = distance_X;
            this.scrollViewContent.getComponent(cc.Layout).spacingY = distance_X;
            this.scrollViewContent.getComponent(cc.Layout).paddingTop = distance_X;
            this.scrollViewContent.height = item.height * itemCount + (itemCount) * this.scrollViewContent.getComponent(cc.Layout).spacingY;
        } else {
            for (var i = 0; i < _tm_SDK.appList_1130238.length && i < this.itemNodeArr.length; i++) {
                var appInfo = _tm_SDK.appList_1130238[randomArr[i]];
                this.itemNodeArr[i].getComponent('listScrollItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, i);
            }
        }
    },

    update(dt) {
        if (this.scrollViewContent.y <= this.scrollViewContent.parent.height / 2) {
            this.addNumber = 0.8;
        } else if (this.scrollViewContent.y >= -this.scrollViewContent.parent.height / 2 + this.scrollViewContent.height) {
            this.addNumber = -0.8;
        }
        this.scrollViewContent.y += this.addNumber;
    },
});