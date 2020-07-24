let tm_SDK = {};

//初始化天幕sdk
tm_SDK.init = function () {
    tm_SDK.appList_1130238 = JSON.parse(JSON.stringify(_serverData.serverAppListData.ads)); //横条滚动图 1130238
    tm_SDK.appList_1131551 = JSON.parse(JSON.stringify(_serverData.serverAppListData.ads)); //主页横条滚动图 1131551
    tm_SDK.appList_1129935 = JSON.parse(JSON.stringify(_serverData.serverAppListData.ads)); //全屏导出1 1129935
    tm_SDK.appList_1130137 = JSON.parse(JSON.stringify(_serverData.serverAppListData.ads)); //继续导出页 1130137
    tm_SDK.appList_1130036 = JSON.parse(JSON.stringify(_serverData.serverAppListData.ads)); //对联广告位 1130036
    tm_SDK.appList_1130339 = JSON.parse(JSON.stringify(_serverData.serverAppListData.ads)); //关卡结束页 1130339
    if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
    wx.tmSDK.init({
        hideRequestLog: false,
        appVersion: '1.0.0'
    });
}

//登陆接口获取用户基础信息
tm_SDK.login = function () {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
    wx.tmSDK.login().then(res => {
        console.log('===login 接口：', res);
        _playerData.user_id = res.open_id;
        _playerData.user_city = res.login_city;
        window.localStorage.setItem('user_id', _playerData.user_id);
        _serverData.judgeSaveLocal();
    }).catch((error) => {
        _serverData.getUserId();
    })
}

//获取广告位开关状态
tm_SDK.checkFlowIsOpen = function (positionId) {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
    wx.tmSDK.checkFlowIsOpen({
        positionId: positionId
    }).then(({
        isOpen
    }) => {
        console.log('该广告位是否开启:', isOpen);
    });
}

//获取创意广告位
tm_SDK.getFlowConfig = function (positionId) {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
    wx.tmSDK.getFlowConfig({
        positionId: positionId
    }).then((config) => {
        //console.log('该广告位当前配置', config, config.creatives[0].positionId);
        _tm_SDK["appList_" + config.creatives[0].positionId] = config.creatives;
        //console.log('获取的配置:',  _tm_SDK["appList_" + config.creatives[0].positionId]);
        window._notification.emit("" + config.creatives[0].positionId);
    });
}

//点击广告
tm_SDK.flowNavigate = function (positionId, creativeId) {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
    wx.tmSDK.flowNavigate({
        positionId: positionId, // 广告位id, 请先使用该id获取推广创意列表
        creativeId: creativeId, // 传入获取到的creativeId
    }).then((newList) => {
        console.log('跳转成功')
        //console.log('自动刷新列表：', newList)//返回最新列表 
        _tm_SDK["appList_" + newList.creatives[0].positionId] = newList.creatives;
        window._notification.emit("" + newList.creatives[0].positionId);
        if (newList.navigateMessage && newList.navigateMessage.errMsg && newList.navigateMessage.errMsg.indexOf("cancel") > -1) {
            if (!_gameData.isWinAppNode) {
                _ui_mager.showPrefabWin('appWinListPrefab');
            }
        }
    }).catch((error) => {
        console.log('跳转失败', error);
        if (!_gameData.isWinAppNode) {
            _ui_mager.showPrefabWin('appWinListPrefab');
        }
    })
}

//获取控制字段
tm_SDK.getAppJSONConfig = function () {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
    wx.tmSDK.getAppJSONConfig('config').then((res) => {
       // console.log('在线配置 key 对应的配置:', res);
        _serverData.serverAppListData.conf = res;
        _serverData.judgeSaveLocal();
        _serverData.isGotNetData = true;
        if(_serverData.serverAppListData.conf.version != _playerData.version){
            _serverData.inSaveLocal = false;
        }
    });
}

window._tm_SDK = tm_SDK;