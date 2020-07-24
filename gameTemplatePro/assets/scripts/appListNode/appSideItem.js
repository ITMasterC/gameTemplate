var comFun = require('./../commonFun.js');
cc.Class({
    extends: cc.Component,

    properties: {
        iconSprite: cc.Sprite,
        flagNode: cc.Node,
        flagFrame: [cc.SpriteFrame],
        index: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let winSize = cc.winSize;
        this.node.width = winSize.width * (165 / 720);
        this.node.height = winSize.width * (165 / 720);

        this.scheduleOnce(function () {
            var action1 = cc.rotateTo(0.2, 8);
            var action2 = cc.rotateTo(0.3, -8);
            var action3 = cc.rotateTo(0.2, 0);
            var action4 = cc.rotateTo(0.1, 8);
            var action5 = cc.rotateTo(0.1, -8);
            var action6 = cc.rotateTo(0.1, 0);
            var action7 = cc.rotateTo(6, 0);
            var sqe = cc.sequence(action1, action2, action3, action4, action5, action6, action7);
            var action = cc.repeatForever(sqe);
            this.node.runAction(action);
        }, this.index)

        this.node.on(cc.Node.EventType.TOUCH_END, this.btnCallBack, this);
    },

    start() {

    },

    init(iconUrl, nameStr, app_id, path, title, index) {
        comFun.createImage(this.iconSprite, iconUrl);
        this.app_id = app_id;
        this.path = path;
        this.title = title;

        if (Math.random() * 1 < 0.5) {
            this.flagNode.opacity = 255;
            if (Math.random() * 1 < 0.5) {
                this.flagNode.getComponent(cc.Sprite).spriteFrame = this.flagFrame[1];
            } else {
                this.flagNode.getComponent(cc.Sprite).spriteFrame = this.flagFrame[0];
            }
        } else {
            this.flagNode.opacity = 0;
        }
    },

    btnCallBack() {
        comFun.jumpOutApp(this.app_id, this.path, this.title);
    },

    // update (dt) {},
});