class dyAbilityFun {
    /*
    * 在小程序内调起关注小程序的引导组件，用于引导用户关注小程序。
    * https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/api/interface/interaction/tt-show-favorite-guide
    * 调用方式：_dy_ability_fun.showFavoriteGuide();
    */
    showFavoriteGuide = function(){
        if(tt.showFavoriteGuide)tt.showFavoriteGuide({
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
}
window._dy_ability_fun = new dyAbilityFun();