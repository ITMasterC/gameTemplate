var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconSprite: cc.Sprite,
        flagNode: cc.Node,
        namaLabel: cc.Label,
        flagFrame: [cc.SpriteFrame],

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let winSize = cc.winSize;
        this.node.height = winSize.height * (229/720);
        this.node.width = winSize.height * (192/720);
        this.node.on(cc.Node.EventType.TOUCH_END, this.btnCallBack, this);
    },

    start() {

    },

    init(iconUrl, nameStr, app_id, path, title, index) {
        this.namaLabel.string = nameStr;
        comFun.createImage(this.iconSprite, iconUrl);
        this.app_id = app_id;
        this.path = path;
        this.title = title;

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

        // let num = 200 + Math.floor(Math.random()*300);
        // let str = "<color=#ff0000>"+num+"万</c><color=#000000>人在玩</color>";
        // this.numberLabel.string = str;
    },

    btnCallBack() {
        comFun.jumpOutApp(this.app_id, this.path, this.title, true);
    },

    // update (dt) {},
});
