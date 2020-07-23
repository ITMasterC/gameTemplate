class level_prefabs {
    constructor() {
        this.instance = null;
        this.levelNode = undefined;
    }

    //获取全局单例
    static getInstance() {
        if (!this.instance) {
            this.instance = new level_prefabs();
        }
        return this.instance;
    }

    initLevel() {
        window._notification.emit('updateTimes');
        _playerData.saveNewData();
        if(this.levelNode){    
            this.levelNode.destroy();
            this.levelNode = undefined;
        }
        this.index = _playerData.playLevelIndex%20;
        var str = "prefabs/levelPrefabs/levelPrefab_" + (this.index);
        cc.loader.loadRes(str, (err, prefab) => {
            this.levelNode = cc.instantiate(prefab);
            let canNode = cc.find('/Canvas');
            this.levelNode.parent = canNode;
        });
        _playerData.maxPlayTimes = _playerData.hadPlayTimes;
    }

    removeLevelNode(){
        if(this.levelNode){
            this.levelNode.destroy();
            this.levelNode = undefined;
            var str = "prefabs/levelPrefabs/levelPrefab_" + this.index;
            cc.loader.releaseRes(str);
        }
    }

};
module.exports = level_prefabs;