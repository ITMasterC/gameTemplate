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
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.moreGameBtn = undefined;
    },

    onEnable(){
        if (_is_tt_game)
        this.showBtn();
    },

    onDisable(){
        if (_is_tt_game)this.hideBtn();
    },

    createBtn() {
        let node = this.node;
        var imgUrl = "other/moreGame.png";
        if (!tt.createMoreGamesButton) return;
        if (!cc.sys.platform === cc.sys.WECHAT_GAME) return;
        this.moreGameBtn = tt.createMoreGamesButton({
            type: "image",
            image: imgUrl,
            style: {
                left: _platfromData.screenIfon.screenWidth - _platfromData.screenIfon.screenWidth * ((cc.winSize.width/2 - node.x-node.width/3) / 1280),
                top: _platfromData.screenIfon.screenHeight / 2 - _platfromData.screenIfon.screenHeight * ((node.y+node.height/3) / 720),
                width: _platfromData.screenIfon.screenHeight * (130/ 720),
                height: _platfromData.screenIfon.screenHeight * (130 / 720),
                lineHeight: 40,
                backgroundColor: "#00000000",
                textColor: "#ffffff",
                textAlign: "center",
                fontSize: 16,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "#ffffff00"
            },
            appLaunchOptions: [],
            onNavigateToMiniGame(res) {
                console.log("跳转其他小游戏", res)
                if (res.errCode == 0) {
                    console.log("成功跳转其他小游戏", res)
                    if (tt.reportAnalytics) tt.reportAnalytics('jumpOutSuccess', {});
                }
            }
        });
        this.moreGameBtn.show();
        this.moreGameBtn.onTap(() => {
            console.log("点击更多游戏")
            if (tt.reportAnalytics) tt.reportAnalytics('moreGameClick', {});
        });
    },

    showBtn () {
        if (!cc.sys.platform === cc.sys.WECHAT_GAME || !tt.createMoreGamesButton) return;
        if (this.moreGameBtn) {
            this.moreGameBtn.show();
        } else {
            this.createBtn();
        }
    },
    
    hideBtn() {
        if (!cc.sys.platform === cc.sys.WECHAT_GAME || !tt.createMoreGamesButton || !this.moreGameBtn) return;
        this.moreGameBtn.hide();
    },

    // update (dt) {},
});
