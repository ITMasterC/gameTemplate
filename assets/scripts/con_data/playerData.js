class playerData {
    constructor() {
        this.instance = undefined;
        this.levelIndex = 0;
        this.playLevelIndex = 0;
        this.user_id = undefined;
        this.user_city = "广州";
        this.channel = '无';
        this.version = "1.0.0";
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new playerData();
        }
        return this.instance;
    }

    getPastData() {
        //cc.sys.localStorage.removeItem('home_levelIndex');
        var user_id = cc.sys.localStorage.getItem('user_id');
        if (user_id) this.user_id = user_id;
        var levelIndex = cc.sys.localStorage.getItem('home_levelIndex');
        if (levelIndex) this.levelIndex = Number(levelIndex);
    }

    saveNewData() {
        cc.sys.localStorage.setItem('home_levelIndex', this.levelIndex);
    }

};
module.exports = playerData;