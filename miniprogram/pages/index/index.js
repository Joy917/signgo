// index.js
// const app = getApp()

Page({
    data: {
        banner_url: [{
                "id": 0,
                "url": "../../images/茶杯-小.jpeg"
            },
            {
                "id": 1,
                "url": "../../images/运动女孩.jpeg"
            }
        ],
        open: false,
        indicatorDots: true, //是否显示面板指示点
        autoplay: true, //是否开启自动切换
        interval: 3000, //自动切换时间间隔
        duration: 500 //滑动动画时长
    }
});