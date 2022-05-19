Page({
  data: {
    nameValue: '',
    typeValue: '点击选择',
    introValue: '',
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 'create',
        createIcon: 'edit'
      })
    }
  }
});