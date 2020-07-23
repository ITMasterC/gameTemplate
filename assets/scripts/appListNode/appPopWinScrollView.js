var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        conterNode: cc.Node,
        itemPrefab: cc.Prefab,
        scrollview: cc.ScrollView,
        itemCount: 4,
    },

    onLoad () {
        // this.node.width = this.node.parent.width - 20;
        // this.node.height = this.node.parent.height - 25;
        // this.node.y += 3;

        this.pause = false;
        this.pauseTime = 0;
        this.flag = 1.5;
        window._notification.on("1130339", this.initLevelItem, this);
    },

    onEnable(){
        _tm_SDK.getFlowConfig(1130339);
    },
    
    start() {
        this.scrollview.node.on('scroll-began', this.callback, this);
    },

    callback() {
        let index = Math.floor(Math.random() * _tm_SDK.appList_1130339.length);
        comFun.jumpOutApp(_tm_SDK.appList_1130339[index].positionId, _tm_SDK.appList_1130339[index].creativeId, _tm_SDK.appList_1130339[index].title, true);
    },
    init(){

    },

    initLevelItem() {
        let randomArr = comFun.randomArr(_tm_SDK.appList_1130339.length, _tm_SDK.appList_1130339.length);
        if(randomArr.length%this.itemCount != 0){
            let cun = randomArr.length;
            for(let i = 0; i < (this.itemCount - cun%this.itemCount); i++){
                randomArr.push(randomArr[i]);
            }
        }
        if (this.conterNode.childrenCount <= 0) {
            let width = this.conterNode.width;
            let itemCount = 0;
            let item = undefined;
            for (let i = 0; i < randomArr.length; i++) {
                let appInfo = _tm_SDK.appList_1130339[randomArr[i]];
                item = cc.instantiate(this.itemPrefab);
                item.getComponent('appPopWinItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, undefined);
                this.conterNode.addChild(item);
                itemCount++;
            }
            let itemWidth = cc.winSize.height * (150/720);
            if(this.node.parent.name == "bgWin1"){
                itemWidth = cc.winSize.height * (180/720);
            }
            var distance_X = (width - itemWidth * this.itemCount) / (this.itemCount+1);
            this.conterNode.getComponent(cc.Layout).spacingX = distance_X * 0.95;
            this.conterNode.getComponent(cc.Layout).spacingY = distance_X * 0.95;
            this.conterNode.getComponent(cc.Layout).paddingLeft = distance_X;
            this.conterNode.getComponent(cc.Layout).paddingTop = 10;
            if(this.node.parent.name == "bgWin1"){
                itemWidth = cc.winSize.height * (180/720);
            }
            this.conterNode.height = itemWidth * Math.ceil(itemCount / this.itemCount) + this.conterNode.getComponent(cc.Layout).spacingY * Math.ceil(itemCount / this.itemCount) + 10;
        } else {
            for (let i = 0; i < randomArr.length; i++) {
                let appInfo = _tm_SDK.appList_1130339[randomArr[i]];
                this.conterNode.children[i].getComponent('appPopWinItem').init(appInfo.show_config.image, appInfo.show_config.title, appInfo.positionId, appInfo.creativeId, appInfo.title, undefined);
                }

        }
    },

    update (dt) {
        if(this.pause){
            this.pauseTime++;
            if(this.pauseTime > 120){
                this.pause = false;
                this.pauseTime = 0;
            }
            return;
        }
        this.conterNode.y += this.flag;
        if(this.conterNode.y > this.conterNode.height - this.conterNode.parent.height/2){
            this.pause = true;
            this.flag = -1.5;
        }else if(this.conterNode.y <= this.conterNode.parent.height/2){
            this.pause = true;
            this.flag = 1.5;
        }
    },
});