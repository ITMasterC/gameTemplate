class pool_prefabs {
    constructor() {
        this.instance = null;
        this.init();
    }

    init() {
        var self = this;
        cc.loader.loadResDir("prefabs/pools", function (err, assets) {
            for(let i = 0; i < assets.length; i++){
                self[assets[i].name+"_pool"] = new cc.NodePool();
                self[assets[i].name] = assets[i];
            }
        });
    }

    //获取全局单例
    static getInstance() {
        if (!this.instance) {
            this.instance = new pool_prefabs();
        }
        return this.instance;
    }

    getUiByName(ui_name) {
        var node = null;
        if (this[ui_name + '_pool'].size() > 0) {
            node = this[ui_name + '_pool'].get();
        } else {
            node = cc.instantiate(this['' + ui_name]);
        }
        return node;
    }

    putUiByName(ui_name, obj) {
        if (!this[ui_name + '_pool']) return;
        this[ui_name + '_pool'].put(obj);
    }

};
module.exports = pool_prefabs;