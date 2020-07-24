module.exports = {
    randomArr(needCount, maxLength) {
        var randomArr = [];
        function getNoRepeatNum() {
            var random = parseInt(maxLength * Math.random());
            for (var i = 0; i < randomArr.length; i++) {
                if (randomArr[i] == random) {
                    return getNoRepeatNum();
                }
            }
            randomArr.push(random);
            return random;
        }
        var arr = [];
        for (var i = 0; i < needCount && i < maxLength; i++) {
            arr.push(getNoRepeatNum());
        }
        return arr;
    },

    
    //获取当前时间(从1970.1.1开始的秒数)
    getDateSeconds() {
        var myDate = new Date(); //获取系统当前时间
        var second = Math.floor(myDate.getTime() / 1000);
        return second;
    },

    getToday() { //获取当前日期
        var time = new Date();
        var lastTime = time.getTime().toString();
        var today = Math.floor(lastTime / 86400000);
        return today;
    },

    //天幕微信小游戏跳转
    jumpOutApp(positionId, creativeId, title, isWin = false) {
        _tm_SDK.flowNavigate(positionId, creativeId);
    },

    //天幕小游戏icon获取
    createImage(sprite, avatarUrl) {
       // console.log('------------_gameData.imageList', _gameData.imageList);
        if(_gameData.imageList.length > 0){
            for(let i = 0; i < _gameData.imageList.length; i++){
                if(_gameData.imageList[i].url == avatarUrl){
                    sprite.spriteFrame = _gameData.imageList[i].spriteFrame;
                    return;
                }
            }
        }
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            try {
                let image = wx.createImage();
                image.onload = () => {
                    try {
                        let texture = new cc.Texture2D();
                        texture.initWithElement(image);
                        texture.handleLoadedTexture();
                        let spriteFrame = new cc.SpriteFrame(texture);
                        sprite.spriteFrame = spriteFrame;
                        _gameData.imageList.push({"url": avatarUrl, "spriteFrame": spriteFrame})
                    } catch (e) {
                        cc.log(e);
                        if (sprite) sprite.node.active = false;
                    }
                };
                image.src = avatarUrl;
            } catch (e) {
                cc.log(e);
                if (sprite) sprite.node.active = false;
            }
        } else {
            return;
        }
    },
}