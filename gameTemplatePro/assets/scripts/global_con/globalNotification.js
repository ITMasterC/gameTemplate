let _notification = {};

_notification.init = function(){
    _notification.instance = new cc.EventTarget();
}
//https://docs.cocos.com/creator/api/zh/classes/EventTarget.html?h=eventtarget

window._notification = new cc.EventTarget();
