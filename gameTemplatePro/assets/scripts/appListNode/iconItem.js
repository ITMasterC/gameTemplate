var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconSprite: cc.Sprite,
        flagNode: cc.Node,
        flagFrame: [cc.SpriteFrame],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //let winSize = cc.winSize;
        // this.node.height = this.node.parent.height - 10;
        // this.node.width = this.node.height * (150/175);
        this.node.on(cc.Node.EventType.TOUCH_END, this.btnCallBack, this);
        this.rotationFlag = 0.2;
    },

    start() {

    },

    init(iconUrl, nameStr, app_id, path, title, index) {
        comFun.createImage(this.iconSprite, iconUrl);
        this.app_id = app_id;
        this.path = path;
        this.title = title;
        if(this.flagFrame.length == 0)return;
        if (Math.random() * 1 < 0.5) {
            if (Math.random() * 1 < 0.5) {
                this.flagNode.getComponent(cc.Sprite).spriteFrame = this.flagFrame[1];
            } else {
                this.flagNode.getComponent(cc.Sprite).spriteFrame = this.flagFrame[0];
            }
            this.flagNode.active = true;
        }else{
            this.flagNode.active = false;
        }
    },

    btnCallBack() {
        comFun.jumpOutApp(this.app_id, this.path, this.title);
    },
    update (dt) {
        this.node.angle += this.rotationFlag;
        if(this.node.angle >= 8){
            this.rotationFlag = -0.2;

        }else if(this.node.angle <= -8){
            this.rotationFlag = 0.2;
        }
    },
});