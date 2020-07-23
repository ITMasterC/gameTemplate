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
        listNode: cc.Node,
        closeBtn: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        window._notification.on("1130137", this.initIcons, this);
    },

    onEnable(){
        _tm_SDK.getFlowConfig(1130137);
    },

    init() {
        this.isShowBanner = _pl_fun.ad_bannerEvent.isShowBanner;
        if (_serverData.serverAppListData.conf.shangtiao > Math.random() * 1 && _serverData.inSaveLocal) {
            _pl_fun.hideBanner();
            this.closeBtn.y = this.closeBtn.height / 2 - cc.winSize.height / 2;
            this.closeBtn.x = 0;
            this.closeBtn.getComponent(cc.Button).interactable = false;
            setTimeout(() => {
                _pl_fun.showBanner();
            }, 1500);
            
            setTimeout(() => {
                if(cc.sys.platform === cc.sys.WECHAT_GAME)this.closeBtn.y = -cc.winSize.height/2 + (this.closeBtn.height / 2 + _pl_fun.ad_bannerEvent.bannerHeight * (cc.winSize.height/_pl_fun.screenIfon.screenHeight));
                this.closeBtn.getComponent(cc.Button).interactable = true;
            }, 2000);
        }else{
            _pl_fun.showBanner();
        }

    },

    initIcons(){
        this.listNode.getComponent("appPopWinScrollView").init();
    },

    close() {
        if(!this.isShowBanner && !window._isInLevelNode){
            _pl_fun.hideBanner();
        }
        if(window._isInLevelNode){
            _ui_mager.showPrefabWin('appWinListPrefab');
        }
        _ui_mager.hidePrefabWin('popNewListNode');
    }

    // update (dt) {},
});