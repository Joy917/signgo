
import Toast from '@vant/weapp/toast/toast';
const timer = require('../../utils/timer.js')

Page({
  data: {
    nameValue: '',
    typeValue: '点击选择类型',
    introValue: '',
    locationText: '',
    location: {},
    introSizeLimit: {
      maxHeight: 100,
      minHeight: 50
    },
    peopleNumber: 1,
    price: 0,
    startTime: 0,
    startTimeText: '',
    endTime: 0,
    endTimeText: '',
    minDate: new Date().getTime(),
    popStartTime: false,
    popEndTime: false,
    showTree: false,
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
    queueChecked: true,
    queueDisabled: false,
    signChecked: true,
    signDisabled: false,
    privateChecked: false,
    privateDisabled: false,

  },
  onChangePrivate(event) { // 后期需要会员制才可以私密
    this.setData({
      privateChecked: event.detail
    })
  },
  onChangeSign(event) {
    this.setData({
      signChecked: event.detail
    })
  },
  onChangeQueue(event) {
    this.setData({
      queueChecked: event.detail
    })
  },
  onNameChange(event) {
    this.setData({
      nameValue: event.detail
    });
  },
  onNumberChange(event) {
    this.setData({
      peopleNumber: event.detail
    });
  },
  onIntroChange(event) {
    this.setData({
      introValue: event.detail
    });
  },
  onLocationChange(event) {
    this.setData({
      locationText: event.detail
    });
  },
  onPriceChange(event) {
    const price = Number(event.detail)
    if (price && price >= 0) {
      this.setData({
        price: event.detail
      });
    }
  },
  onClickType() {
    this.setData({
      showTree: !this.data.showTree,
    });
  },
  onCloseTreeSelect() {
    this.setData({
      showTree: false
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
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({
      activeId,
      typeValue: this.data.mainActiveText.concat('-', detail.text)
    });
    this.onClickType();
  },
  // 选择活动地点
  onClickLocation() {
    if (!this.data.locationText) {
      wx.chooseLocation({
        success: res => {
          this.setData({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            locationText: res.address
          })
        },
        fail: res => {
          // console.log('cancel select')
        }
      })
    }
  },
  onClickStartTime() {
    this.setData({
      popStartTime: true
    })
  },
  onClickEndTime() {
    this.setData({
      popEndTime: true
    })
  },
  onStartTimeConfirm(event) {
    if (this.data.endTime !== 0 && event.detail > this.data.endTime) {
      Toast({
        message: '开始时间不能晚于结束时间',
        position: 'top'
      });
      return
    }
    this.setData({
      startTime: event.detail,
      startTimeText: timer.format(event.detail),
      popStartTime: false
    });
  },
  onEndTimeConfirm(event) {
    if (this.data.startTime !== 0 && event.detail < this.data.startTime) {
      Toast({
        message: '结束时间不能早于开始时间',
        position: 'top'
      });
      return
    }
    this.setData({
      endTime: event.detail,
      endTimeText: timer.format(event.detail),
      popEndTime: false
    });
  },
  onStartTimeCancel() {
    this.setData({
      popStartTime: false
    });
  },
  onEndTimeCancel() {
    this.setData({
      popEndTime: false
    });
  },

  imgOver() {
    Toast('文件大小不能超过15KB !');
  },
  deleteImg() {
    this.setData({
      fileList: []
    })
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    console.log(event);
    this.setData({
      fileList: [{
        url: file.url
      }],
    })

  },
  onClickCancel() {
    // 跳转回上一个页面
  },
  onClickConfirm() {
    // 创建数据库记录
    // 实际上传图片

    // wx.cloud.uploadFile({
    //   cloudPath: 'example.png', // 上传至云端的路径，取日期+数据库id
    //   filePath: '', // 小程序临时文件路径
    //   success: res => {
    //     // 返回文件 ID
    //     console.log(res.fileID)
    //   },
    //   fail: Toast('文件上传失败，请稍后重试')
    // })
    // 提示用户创建成功
    Toast('创建成功！快去分享活动链接吧~')
  },

  onShow: function () {
    // 自定义tabbar初始化
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 'create',
        createIcon: 'edit'
      })
    }

  }

});