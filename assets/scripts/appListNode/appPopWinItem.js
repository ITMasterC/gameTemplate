var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconSprite: cc.Sprite,
        flagNode: cc.Node,
        flagFrame: [cc.SpriteFrame]
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let winSize = cc.winSize;
       // console.log('--sss-----aaaaa', this.node);
        if(this.node.parent.name == "content1"){
            this.node.width = winSize.height * (180/720);
            this.node.height = winSize.height * (180/720);
        }else{
            this.node.width = winSize.height * (150/720);
            this.node.height = winSize.height * (150/720);
        }
        this.node.on(cc.Node.EventType.TOUCH_END, this.btnCallBack, this);
    },

    start() {

    },

    init(iconUrl, nameStr, app_id, path, title, isWin = false) {
        comFun.createImage(this.iconSprite, iconUrl);
        this.app_id = app_id;
        this.path = path;
        this.title = title;
        this.isWin = isWin;
        if(this.flagFrame.length == 0){
            this.flagNode.opacity = 0;
            return;
        }
        if(Math.random()*1 < 0.5){
            this.flagNode.opacity = 255;
            if(Math.random()*1 < 0.5){
                this.flagNode.getComponent(cc.Sprite).spriteFrame = this.flagFrame[1];
            }else{
                this.flagNode.getComponent(cc.Sprite).spriteFrame = this.flagFrame[0];
            }
        }else{
            this.flagNode.opacity = 0;
        }
    },

    btnCallBack() {
        comFun.jumpOutApp(this.app_id, this.path, this.title, this.isWin);
       
    },
});
