const chooseLocation = requirePlugin('chooseLocation');

const key = '7WZBZ-3F3C3-RXA3C-3Z45A-EXNP2-2GBO7'; //使用在腾讯位置服务申请的key
const referer = '活动报名冲'; //调用插件的app的名称
let location = JSON.stringify({
  latitude: 39.89631551,
  longitude: 116.323459711
});
const category = '生活服务,休闲娱乐,运动健身';

Page({
  data: {
    nameValue: '',
    typeValue: '点击选择',
    introValue: '',
    siteValue: '',
    introSizeLimit: {
      maxHeight: 100,
      minHeight: 50
    },
    showTree: false,
    typeArrowDirection: '',
    fileList: [],
    items: [{
        // 导航名称
        text: '运动',
        // 该导航下所有的可选项
        children: [{
            text: '羽毛球',
            id: 1
          },
          {
            text: '篮球',
            id: 2,
          },
          {
            text: '其他',
            id: 3,
          },
        ],
      },
      {
        text: '休闲',
        children: [{
            text: '剧本杀',
            id: 3
          },
          {
            text: '钓鱼',
            id: 4
          },
          {
            text: '其他',
            id: 5
          },
        ],
      }
    ],
    mainActiveIndex: 0,
    mainActiveText: '运动',
    activeId: null,
  },
  onNameChange(event) {
    this.setData({
      nameValue: event.detail
    });
  },
  onIntroChange(event) {
    this.setData({
      introValue: event.detail
    });
  },
  onSiteChange(event) {
    this.setData({
      siteValue: event.detail
    });
  },
  onClickType() {
    let typeDirect = 'down'
    if (this.data.typeArrowDirection === 'down') {
      typeDirect = ''
    }
    this.setData({
      showTree: !this.data.showTree,
      typeArrowDirection: typeDirect
    });
  },
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
      mainActiveText: this.data.items[detail.index].text
    });
  },
  onClickItem({
    detail = {}
  }) {
    console.log(detail.text);
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({
      activeId,
      typeValue: this.data.mainActiveText.concat('-', detail.text)
    });
    this.onClickType();
  },
  onClickMap() {
    if (location) {
      wx.navigateTo({
        url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
      });
    }
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        // 上传完成需要更新 fileList
        const {
          fileList = []
        } = this.data;
        fileList.push({
          ...file,
          url: res.data
        });
        this.setData({
          fileList
        });
      },
    });
  },
  onShow: function () {
    location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 'create',
        createIcon: 'edit'
      })
    }
  }
});