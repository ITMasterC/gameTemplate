/*使用方式
    1 调用getInstance实例化对象
    2 从不显示的场景到显示场景
        this.isShowBanner = true;
        this.showBannerAd(2);
    2 隐藏
        this.isShowBanner = false;
        this.showBannerAd();
*/
class bannerEvent {
    constructor() {
        this.instance = undefined;
        this.bannerAd = undefined;
        this.isShowBanner = false;
        this.bannerHeight = 180;
        this.showTimes = 0;
    }

    static getInstance(idList) {
        if (!this.instance) {
            this.instance = new bannerEvent();
            this.bannerIdList = idList;
            this.bannerIdIndex = Math.floor(Math.random() * this.bannerIdList.length);
        }
        return this.instance;
    }

    showBannerAd = function (isPop) { //2：不显示的窗口回来
        if (cc.sys.platform != cc.sys.WECHAT_GAME || !wx.createBannerAd) return;
        if (this.bannerAd)
            if (!this.isShowBanner) {
                this.bannerAd.hide();
                this.bannerIdIndex++;
                if (this.bannerIdIndex >= this.bannerIdList.length) this.bannerIdIndex = this.bannerIdIndex % this.bannerIdList.length;
                this.bannerAd.destroy();
            } else if (isPop == 2) {
            this.showTimes++;
            this.bannerAd.show();
            return;
        }
        this.showTimes++;
        let ad = this.bannerIdList[this.bannerIdIndex];
        this.bannerAd = wx.createBannerAd({
            adUnitId: ad,
            adIntervals: 30,
            style: {
                left: 5,
                top: 500,
                width: _pl_fun.screenIfon.screenHeight - 80
            }
        })
        this.bannerAd.onError(err => {})
        this.bannerAd.onLoad(err => {})
        this.bannerAd.onResize(res => {
            this.bannerHeight = res.height;
            this.bannerAd.style.left = (_pl_fun.screenIfon.screenWidth - res.width) / 2;
            this.bannerAd.style.top = _pl_fun.screenIfon.screenHeight - res.height;
        })
        if (this.isShowBanner) {
            this.bannerAd.show()
        } else {
            this.bannerAd.hide()
        }
    }
}
module.exports = bannerEvent;