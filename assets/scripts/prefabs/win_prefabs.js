class win_prefabs {
    constructor() {
        this.instance = null;
        this.init();
    }

    init() {
        window.winSize = cc.v2(cc.winSize.width, Math.floor(cc.winSize.width*1.7777778));
        var self = this;
        cc.loader.loadResDir("prefabs/winPrefabs", function (err, assets) {
            console.log('------------所有弹窗场景资源', assets);
            for(let i = 0; i < assets.length; i++){
                self[assets[i].name] = cc.instantiate(assets[i]);
                self[assets[i].name + "Prefab"] = assets[i];
                self[assets[i].name].active = false;
            }
            _notification.emit('loadRes');
        });

        // cc.loader.loadResDir("prefabs/appListPrefab/appParent", function (err, assets) {
        //     //console.log('------------所有导出相关', assets);
        //     for(let i = 0; i < assets.length; i++){
        //         self[assets[i].name] = cc.instantiate(assets[i]);
        //         self[assets[i].name + "Prefab"] = assets[i];
        //         self[assets[i].name].active = false;
        //     }
        //     _notification.emit('loadRes');
        // });
    }

    //获取全局单例
    static getInstance() {
        if (!this.instance) {
            this.instance = new win_prefabs();
        }
        return this.instance;
    }

    getUiByName(ui_name) {
        if (!this[ui_name]) {
            console.log('---------------------------this[ui_name]', ui_name);
            return null;
        }
        return this[ui_name];
    }

    putUiByName(ui_name) {
        if (!this[ui_name]) return;
        this[ui_name].removeFromParent(false);
        this[ui_name].active = false;
    }

};
module.exports = win_prefabs;