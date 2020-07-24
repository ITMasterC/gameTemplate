class shareEvent {
    constructor() {
        this.instance = null;
    }
    // 构造一个广为人知的接口，供用户对该类进行实例化
    static getInstance(adId) {
        if (!this.instance) {
            this.instance = new shareEvent();
            this.instance.judgeReward();
        }
        return this.instance;
    }

    onShare = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var title = "小游戏分享标题";
            var url = "./other/share.jpg";
            //被动分享 显示
            wx.showShareMenu({
                withShareTicket: true
            })
            wx.aldShareAppMessage({
                title: title,
                imageUrl: url
            })

            if (cc.sys.platform === cc.sys.WECHAT_GAME && wx.aldStage) {
                wx.aldSendEvent('分享', {
                    "行为": "按钮分享",
                });
            }
        }
    };

    judgeReward = function () {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
        var title = "小游戏分享标题";
        var url = "./other/share.jpg";
        wx.showShareMenu({
            withShareTicket: false
        });
        wx.onShareAppMessage(function () {
            return {
                title: title,
                imageUrl: url,
                query: 'k1=v1&ke=v2'
            }
        });
        wx.onShow(function (res) {
        });
        wx.onHide(function (res) {
        });
    };
}
module.exports = shareEvent;

