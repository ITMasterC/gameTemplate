class createVideoEvent {
    constructor() {
        this.instance = null;
        this.manager = undefined;
        this.videoPath = undefined;
        this.isCreateVing = undefined;
        this.startCreateVideoTime = undefined;
    }
    // 构造一个广为人知的接口，供用户对该类进行实例化
    static getInstance() {
        if (!this.instance) {
            this.instance = new createVideoEvent();
        }
        return this.instance;
    }

    initManager = function(key){
        if (cc.sys.platform === cc.sys.WECHAT_GAME && tt.getGameRecorderManager) {
            this.manager = tt.getGameRecorderManager();
            this.manager.onStart(res => {
                var time = new Date();
                this.startCreateVideoTime = Number(time.getTime().toString());
                this.videoPath = undefined;
            })
    
            this.manager.onStop(res => {
                var time = new Date();
                this.endCreateVideoTime = Number(time.getTime().toString());
                if(this.endCreateVideoTime - this.startCreateVideoTime > 4000){
                    this.videoPath = res.videoPath;
                    window._notification.emit('stopCreateVideo');
                }else{
                    _ui_mager.getNodeByPool("w_tipNode", "视频录制时间过短！");
                }
            })
        }
    }

    startCreate = function(){
        if (!cc.sys.platform === cc.sys.WECHAT_GAME || !this.manager)return;
        if(this.isCreateVing) return;
        this.isCreateVing = true;
        this.manager.start({
            duration: 200,
        });
    }
    
    stopCreate = function(){
        if (!cc.sys.platform === cc.sys.WECHAT_GAME || !this.manager)return;
        this.isCreateVing = false;
        this.manager.stop();
    }
};
module.exports = createVideoEvent;

