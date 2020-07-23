cc.Class({
    extends: cc.Component,

    properties: {
        bgNode: cc.Node,
        tipLabel: cc.Node,
    },

    start () {
        this.bgNode.width = this.tipLabel.width + 100;
    },

    init(data){
        this.tipLabel.getComponent(cc.Label).string = data;
        this.node.setPosition(cc.v2(0, 100));
        this.node.setScale(1);
        this.node.opacity = 0;
        this.node.zIndex = 255;
        this.startAction();
    },

    startAction(){
        let action1 = cc.scaleTo(0.2,1.2);
        let show = cc.fadeIn(0.2);
        let sqe = cc.spawn(action1, show);
        let action2 = cc.scaleTo(0.3,1).easing(cc.easeIn(2.0))
        let action4 = cc.fadeOut(2).easing(cc.easeIn(2.0));
        let finish = cc.callFunc(function(){
            _ui_mager.putNodeInPool("w_tipNode", this.node);
        }, this)
        let action = cc.sequence(sqe, action2,action4,finish);
        this.node.runAction(action);
    },
    lateUpdate(){
        this.bgNode.width = this.tipLabel.width + 80;
    }
});
