// index.js
// const app = getApp()

Page({
    data: {
        list: [{
                "current": 0,
                "pagePath": "pages/index/index",
                "text": "首页"
            },
            {

                "current": 1,
                "pagePath": "pages/create/create",
                "text": "创建活动"
            },
            {

                "current": 2,
                "pagePath": "pages/square/square",
                "text": "活动广场"
            },
            {
                "current": 3,
                "pagePath": "",
                "text": "我的"
            }
        ]
    },
    tabbarChange: function (events) {
        console.log(events);
    }
});