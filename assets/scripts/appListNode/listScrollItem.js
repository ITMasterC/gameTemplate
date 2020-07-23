var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconSprite: cc.Sprite,
       // namaLabel: cc.Label,
        flagNode: cc.Node,
        flagFrame: [cc.SpriteFrame],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //let winSize = cc.winSize;
        if(this.node.parent.height > this.node.parent.width){
            this.node.height = this.node.parent.width - 5;
            this.node.width = this.node.height;
        }else{
            this.node.height = this.node.parent.height - 5;
            this.node.width = this.node.height;
        }
        this.node.on(cc.Node.EventType.TOUCH_END, this.btnCallBack, this);
    },

    start() {

    },

    init(iconUrl, nameStr, app_id, path, title, index) {
       // this.namaLabel.string = nameStr;
        comFun.createImage(this.iconSprite, iconUrl);
        this.app_id = app_id;
        this.path = path;
        this.title = title;

        if (index == 3 || index == 5 || index == 7 || index == 8 || index == 10 || index == 12) {
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
    // update (dt) {},
});