import Toast from '@vant/weapp/toast/toast';

Page({
  data: {
    value: "",
    banner_url: [{
        "id": 0,
        "url": "/images/茶杯-小.jpeg"
      },
      {
        "id": 1,
        "url": "/images/运动女孩.jpeg"
      }
    ],
    open: false,
    indicatorDots: true, //是否显示面板指示点 
    autoplay: true, //是否开启自动切换 
    interval: 4000, //自动切换时间间隔 
    duration: 500 //滑动动画时长
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 'home'
      })
    }
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  }
});