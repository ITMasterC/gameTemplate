var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        conterNode: cc.Node,
        itemPrefab: cc.Prefab,
        returnBtn: cc.Node,
        scrollview: cc.ScrollView,
        nextBtn: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.pause = false;
        this.pauseTime = 0;
        this.flag = 1.5;
        window._notification.on("1129935", this.initIcons, this);
    },

    start() {
        this.scrollview.node.on('scroll-began', this.callback, this);
    },

    onEnable() {
        _tm_SDK.getFlowConfig(1129935);
    },
    init() {
        _gameData.isWinAppNode = true;
        this.isClickPassFrist = true;
    },

    initIcons() {
        this.isShowBanner = _pl_fun.ad_bannerEvent.isShowBanner;
        if(_pl_fun.ad_bannerEvent.isShowBanner)_pl_fun.hideBanner();
        if (_serverData.serverAppListData.conf.wudian > Math.random() * 1 && _serverData.inSaveLocal) {
            this.returnBtn.active = false;
            this.nextBtn.active = true;
        } else {
            this.nextBtn.active = false;
            this.returnBtn.active = false;
            setTimeout(() => {
                this.returnBtn.active = true;
            }, 3000);
        }
        this.scheduleOnce(function () {
            this.node.zIndex = 230;
        }, 0.1);
        let randomArr = comFun.randomArr(_tm_SDK.appList_1129935.length, _tm_SDK.appList_1129935.length);
        if (randomArr.length % 5 != 0) {
            let cun = randomArr.length;
            for (let i = 0; i < (5 - cun % 5); i++) {
                randomArr.push(randomArr[i]);
            }
        }
        if (randomArr.length < 15) {
            for (let i = 0; i < 5; i++) {
                randomArr.push(randomArr[i]);
            }
        }
        if (this.conterNode.childrenCount <= 0) {
            let width = this.conterNode.width;
            let itemCount = 0;
            let item = undefined;
            for (let i = 0; i < randomArr.length; i++) {
                let appInfo = _tm_SDK.appList_1129935[randomArr[i]];
                item = cc.instantiate(this.itemPrefab);
                item.getComponent('appWinItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, undefined);
                this.conterNode.addChild(item);
                itemCount++;
            }
            var distance_X = (width - item.width * 5) / 6;
            this.conterNode.getComponent(cc.Layout).spacingX = distance_X * 0.95;
            this.conterNode.getComponent(cc.Layout).spacingY = distance_X * 1;
            this.conterNode.getComponent(cc.Layout).paddingLeft = distance_X * 1;
            this.conterNode.getComponent(cc.Layout).paddingRight = distance_X * 1;
            this.conterNode.getComponent(cc.Layout).paddingTop = distance_X * 1;
            let count = Math.ceil(itemCount / 5);
            this.conterNode.height = cc.winSize.height * (229 / 720) * count + distance_X * 2 * (count + 1);
        } else {
            for (let i = 0; i < randomArr.length; i++) {
                let appInfo = _tm_SDK.appList_1129935[randomArr[i]];
                this.conterNode.children[i].getComponent('appWinItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, undefined);
            }

        }
    },

    removeNode() {
        _audioCon.playAudioEff('click');
        if (this.isClickPassFrist && _serverData.serverAppListData.conf.wudian > Math.random() * 1 && _serverData.inSaveLocal) {
            this.isClickPassFrist = false;
            this.nextBtn.active = false;
            _pl_fun.showBanner(2);
            setTimeout(() => {
                this.nextBtn.active = true;
                _pl_fun.hideBanner(2);
            }, 1000);
            return;
        }
        _ui_mager.hidePrefabWin('appWinListPrefab');
        _gameData.isWinAppNode = false;
        if (!_gameData.isShowDeathClick && _playerData.isOver) {
            _gameData.isShowDeathClick = true;
            if (Number(_serverData.serverAppListData.conf.kuangdian) > Math.random() * 1 && _serverData.inSaveLocal) {
                _ui_mager.showPrefabWin('crazyClickPrefab');
            }
        } else {
            if (this.isShowBanner) {
                _pl_fun.showBanner();
            } else {

            }
        }
    },

    update(dt) {
        if (this.pause) {
            this.pauseTime++;
            if (this.pauseTime > 120) {
                this.pause = false;
                this.pauseTime = 0;
            }
            return;
        }
        this.conterNode.y += this.flag;
        if (this.conterNode.y > this.conterNode.height - this.conterNode.parent.height / 2) {
            this.pause = true;
            this.flag = -1.5;
        } else if (this.conterNode.y <= this.conterNode.parent.height / 2) {
            this.pause = true;
            this.flag = 1.5;
        }
    },

    callback() {
        console.log('-----aaaaa  callback')
        let index = Math.floor(Math.random() * _tm_SDK.appList_1129935.length);
        comFun.jumpOutApp(_tm_SDK.appList_1129935[index].positionId, _tm_SDK.appList_1129935[index].creativeId, _tm_SDK.appList_1129935[index].title, true);
    },
});