class reportEvent {
    constructor() {
        this.author_id = undefined;
        this.video_id = undefined;
    }
    
    static getInstance() {
        if (!this.instance) {
            this.instance = new reportEvent();
        }
        return this.instance;
    }

    init(author_id, video_id) {
        this.author_id = author_id;
        this.video_id = video_id;
        this.reportVideoData("uv");
    }

    /**
     * 统计来源于达人视频的用户数据
     * @param {any} name: 事件标识
     * 
     */
    reportVideoData(name) {
        if (!this.author_id) return;
        let reportName = "from_author_video_" + name;
        let reportName = name;
        tt.reportAnalytics(reportName, {
            author_id: this.author_id,
            video_id: this.video_id,
        });
    }
};
window._report_event = new reportEvent();