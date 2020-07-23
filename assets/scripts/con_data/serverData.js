class serverData {
    constructor() {
        this.instance = null;
        this.appListLength = 10;
        this.isGotNetData = false;
        this.inSaveLocal = true;
        this.serverJsonData = {
            testEvent: 0
        };
        this.serverAppListData = {
            "conf": {
                "kuangdian": 0,
                "wudian": 0,
                "shangtiao": 0,
                "city": [
                    "北京",
                    "上海",
                    "深圳",
                    "广州"
                ],
                "share": {
                    "title": '一玩就上瘾的小游戏……',
                    "img": 'other/share.jpg'
                }
            },
            "ads": [{
                    "appid": "wx3829760cd377dfa9",
                    "title": "咪佰-天天割草",
                    "name": "天天割草",
                    "path": "",
                    "icon": "icon_1"
                },
                {
                    "appid": "wx59a1074e827d5c80",
                    "title": "咪佰-最强大冒险",
                    "name": "最强大冒险",
                    "path": "",
                    "icon": "icon_0"
                },
                {
                    "appid": "wx0141284d98f4ff14",
                    "title": "咪佰-面条别走",
                    "name": "面条别走",
                    "path": "",
                    "icon": "icon_7"
                },
                {
                    "appid": "wxd0b0ac550396871c",
                    "title": "咪佰-球球入洞",
                    "name": "球球入洞",
                    "path": "",
                    "icon": "icon_8"
                },
                {
                    "appid": "wx3cfc239be3465530",
                    "title": "咪佰-小鸟吃虫",
                    "name": "小鸟吃虫",
                    "path": "",
                    "icon": "icon_6"
                },
                {
                    "appid": "wxb5e366d4fd9bf358",
                    "title": "咪佰-欢乐达人来了",
                    "name": "欢乐达人来了",
                    "path": "",
                    "icon": "icon_2"
                },
                {
                    "appid": "wxcdeef97cb5e3865f",
                    "title": "咪佰-梦想城市",
                    "name": "梦想城市",
                    "path": "",
                    "icon": "icon_3"
                },
                {
                    "appid": "wx77b3205acee62479",
                    "title": "咪佰-狗狗来啦",
                    "name": "狗狗来啦",
                    "path": "",
                    "icon": "icon_4"
                },
                {
                    "appid": "wx73281e8edec4de16",
                    "title": "咪佰-列车大作战",
                    "name": "列车大作战",
                    "path": "",
                    "icon": "icon_9"
                }
            ]
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new serverData();
        }
        return this.instance;
    }

    judgeSaveLocal() {
        this.indexFlag++;
        if(this.indexFlag<2)return;
        var that = this;
        for (let i = 0; i < _serverData.serverAppListData.conf.city.length; i++)
            if (_playerData.user_city.indexOf(_serverData.serverAppListData.conf.city[i]) != -1) {
                that.inSaveLocal = false;
            }
    }

    getServerData() {
        return;
        //https://all-1258575882.cos.ap-guangzhou.myqcloud.com/daixiaoyanghuijia_v1.0.0.json
        var that = this;
        let url = 'https://all-1258575882.cos.ap-guangzhou.myqcloud.com/daixiaoyanghuijia_' + _playerData.version + '.json';
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.request({
                url: url,
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success(res) {
                    if (res.statusCode == 200) {
                        that.serverAppListData = res.data;
                        _serverData.judgeSaveLocal();
                        //that.isGotNetData = true;
                    }
                },
                fail(res) {
                },
            })
        } else {
        }
    }

    getUserId() {
        if (_playerData.user_id) return;

        function s() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return e() + e() + e() + e() + e() + e();
        }
        var timestamp = (new Date()).getTime().toString();
        _playerData.user_id = s() + timestamp.substring(timestamp.length - 8);
        window.localStorage.setItem('user_id', _playerData.user_id);
    }
};

module.exports = serverData;