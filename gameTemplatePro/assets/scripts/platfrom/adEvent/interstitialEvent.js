/*使用方式
    1 首次加载完成时调用 window.interstitalEvent.createrAd() 预加载插屏广告 
    2 需要显示的地方调用 window.interstitalEvent.showAd()
*/

class interstitalEvent {
    constructor() {
        this.instance = null;
        this.interstitialAd = undefined;
        this.adId = "";
    }
    // 构造一个广为人知的接口，供用户对该类进行实例化
    static getInstance(adId) {
        if (!this.instance) {
            this.instance = new interstitalEvent();
            this.adId = adId;
        }
        return this.instance;
    }

    createrAd = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && wx.createInterstitialAd) {
            const isToutiaio = tt.getSystemInfoSync().appName === "Toutiao";
            // 插屏广告仅今日头条安卓客户端支持
            if (isToutiaio) {
                this.interstitialAd = tt.createInterstitialAd({
                    adUnitId: this.adId,
                });
                this.interstitialAd
                    .load()
                    .then(() => {
                        this.interstitialAd.show();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                this.interstitialAd.onError(() => {});
                this.interstitialAd.onClose(() => {
                    this.interstitialAd.destroy();
                });
            }
        }
    }

    showAd = function () {
        this.createrAd();
    }
};
module.exports = interstitalEvent;
