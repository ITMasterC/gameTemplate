class dyAbilityFun {
    /*
     * 在小程序内调起关注小程序的引导组件，用于引导用户关注小程序。
     * https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/api/interface/interaction/tt-show-favorite-guide
     * 调用方式：_dy_ability_fun.showFavoriteGuide();
     */
    showFavoriteGuide = function () {
        if (tt.showFavoriteGuide) tt.showFavoriteGuide({
            type: "bar",
            content: "收藏小程序，玩游戏更便捷",
            position: "bottom",
            success(res) {
                console.log("引导组件展示成功");
            },
            fail(res) {
                console.log("引导组件展示失败");
            },
        });
    }

    /* 
     * 添加到桌面 -- 注意适配不同app端 
     * https://bytedance.feishu.cn/docs/doccnvUnsraQOXfPjn0IHE1azJb
     */
    addShortcut(successCb, failCb) {
        if (tt.addShortcut)
            tt.addShortcut({
                success: (res) => {
                    successCb();
                    console.log('-------success----addShortcut', res);
                },
                fail: (res) => {
                    failCb();
                    console.log('-------fail----addShortcut', res);
                }
            })
    };

    /*
     * 检查是否存在桌面快捷方式 
     * https://bytedance.feishu.cn/docs/doccnvUnsraQOXfPjn0IHE1azJb
     */
    checkShortcut(successCb, failCb) {
        if (tt.addShortcut)
            tt.checkShortcut({
                success: function (res) {
                    //获取快捷方式是否存在 res.status.exist
                    if (res.status.exist) {
                        console.log('------------------已存在桌面快捷放弃', res);
                    } else {
                        console.log('------------------不存在桌面快捷方式', res);
                    }
                    successCb(res.status.exist);
                },
                fail: function (res) {
                    failCb();
                }
            })
    };

    /* 
     * 关注抖音号  -- 仅抖音端支持
     * https://bytedance.feishu.cn/docs/doccn1dQ6bztM5wJAv9pgTsYZDc
     */
    addAttention(successCb, failCb) {
        tt.openAwemeUserProfile({
            success: function (res) {
                if (res.hasFollowed) {
                    console.log('-----openAwemeUserProfile---成功关注', res);
                } else {
                    console.log('-----openAwemeUserProfile---没有关注', res);
                }
            },
            fail: function (err) {
                console.log('-----openAwemeUserProfile---api调用失败', err);
            },
            complete: function (res) {
                // console.log('---- open complete, res: ',res)
            }
        })
    };
}
window._dy_ability_fun = new dyAbilityFun();