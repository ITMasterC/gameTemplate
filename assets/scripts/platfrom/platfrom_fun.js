import videoAdEvent from './adEvent/videoEvent';
import bannerEvent from './adEvent/bannerEvent';
import createVideoEvent from './createVideo';
import shareEvent from './shareEvent/shareEvent';
import interstitialEvent from './adEvent/interstitialEvent';
class platfrom_fun {
    constructor() {
        this.instance = undefined;
        this.screenIfon = undefined;
        this.ad_videoEvent = undefined;
        this.ad_bannerEvent = undefined;
        this.ad_createVideo = undefined;
        this.ad_interstitial = undefined;
        this.showBannerInDown = false;
    }

    init() {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.screenIfon = wx.getSystemInfoSync(); //获取设备数据
            this.jumpInScene = wx.getLaunchOptionsSync();//启动小游戏的场景值
        }
        this.ad_videoEvent = videoAdEvent.getInstance('q0qhb4stuq1fajlao1');
        this.ad_interstitial = interstitialEvent.getInstance('i9724633jn81479466');
        this.ad_bannerEvent = bannerEvent.getInstance(['adunit-f0c76553c3742a44', 'adunit-31311959cf5f090f', 'adunit-ccb098880f98cf09']);
        this.createVideoEvent = createVideoEvent.getInstance();
        this.shareEvent = shareEvent.getInstance();
    }


    showAdVideo(successCb, failCb = undefined) {
        if (!this.ad_videoEvent) {
            _ui_mager.getNodeByPool("w_tipNode", "暂无广告，请稍后再试");
            this.init();
            return;
        }
        this.ad_videoEvent.successCb = successCb;
        this.ad_videoEvent.failCb = failCb;
        this.ad_videoEvent.startVideoAd();
    }

    showBanner(isPop = 2) {
        this.ad_bannerEvent.isShowBanner = true;
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            this.ad_bannerEvent.showBannerAd(isPop);
        }
    }

    updateBanner(){
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            this.ad_bannerEvent.showBannerAd(4);
        }
    }

    hideBanner() {
        this.ad_bannerEvent.isShowBanner = false;
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            this.ad_bannerEvent.showBannerAd();
        }
    }

    showInterstitalAd(){
       this.ad_interstitial.showAd();
    }

    startCreateVideo(){
        this.createVideoEvent.startCreate();
    }

    stopCreateVideo(){
        this.createVideoEvent.stopCreate();
    }

    onShare(){
        this.shareEvent.onShare();
    }
}
// module.exports = platfrom_fun;

window._pl_fun = new platfrom_fun();