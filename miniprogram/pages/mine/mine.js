Page({
  data: {
    option1: [{
        text: '全部活动',
        value: 0
      },
      {
        text: '我创建的',
        value: 1
      },
      {
        text: '我参与的',
        value: 2
      },
    ],
    option2: [{
        text: '默认排序',
        value: 'a'
      },
      {
        text: '时间优先',
        value: 'b'
      },
      {
        text: '距离优先',
        value: 'c'
      },
    ],
    value1: 0,
    value2: 'a',
  },
  onFirstChange({
    detail
  }) {
    this.setData({
      value1: detail
    })
  },
  onSecondChange({
    detail
  }) {
    this.setData({
      value2: detail
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 'mine'
      })
    }
  }
})