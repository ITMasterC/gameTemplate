class videoAdEvent {
    /*使用方式
        1 实例化对象后，注意只调用一次onInitVedio()函数预加载广告
        2 this.videoAd.onClose 中设置何时给何种奖励
        3 需要显示的地方调用 startVideoAd()
    */
    constructor() {
        this.instance = null;
        this.videoAd = undefined;
        this.failCb = undefined;
        this.successCb = undefined;
        this.videoLoad = false;
        this.adId = "";
    }
    // 构造一个广为人知的接口，供用户对该类进行实例化
    static getInstance(adId) {
        if (!this.instance) {
            this.instance = new videoAdEvent();
            this.adId = adId;
        }
        return this.instance;
    }

    onInitVedio = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && wx.createRewardedVideoAd) {
            this.videoAd = wx.createRewardedVideoAd({
                adUnitId: this.adId
            });
            this.videoAd.onLoad((err) => {
                console.log('---------------window.globalData.comFunVideo 加载成功!')
            });
            this.videoAd
                .show()
                .then(() => {
                    console.log("广告显示成功");
                })
                .catch((err) => {
                    console.log("广告组件出现问题", err);
                    // 可以手动加载一次
                    this.videoAd.load().then(() => {
                        console.log("手动加载成功");
                        // 加载成功后需要再显示广告
                        return this.videoAd.show();
                    });
                });
            this.videoAd.onError(err => {
                console.log('---------------window.globalData.comFunVideo 加载失败!', err)
            })
            this.videoAd.onClose(res => {
                if (res.isEnded) {
                    if(this.successCb){
                        this.successCb();
                    }
                } else {
                    if(this.failCb){
                        this.failCb();
                    }
                    _ui_mager.getNodeByPool("w_tipNode", "观看完整视频才能获得奖励");
                }
                this.successCb = undefined;
                this.failCb = undefined;
            });
        }
    };


    startVideoAd = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if (this.videoAd) {
                this.videoAd
                    .show()
                    .then(() => {
                        console.log("广告显示成功");
                    })
                    .catch((err) => {
                        console.log("广告组件出现问题", err);
                        // 可以手动加载一次
                        this.videoAd.load().then(() => {
                            console.log("手动加载成功");
                            // 加载成功后需要再显示广告
                            return this.videoAd.show();
                        });
                    });
            } else {
                _ui_mager.getNodeByPool("w_tipNode", "暂无广告,请稍后再试");
                this.onInitVedio();
            }
        } else {
            _ui_mager.getNodeByPool("w_tipNode", "暂无广告,请稍后再试");
        }
    }
};
module.exports = videoAdEvent;