Page({
  data: { // 初始化
    active: 'home',
    createIcon: 'add-o',
    tabs: {
      home: "/pages/home/home",
      create: "/pages/create/create",
      square: "/pages/square/square",
      mine: "/pages/mine/mine"
    }
  },
  onChange(event) {
    wx.switchTab({
      url: this.data.tabs[event.detail]
    })
  }
});