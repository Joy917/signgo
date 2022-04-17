// mine.js
Page({
    data: {
        needTitle: true,
        isShowPop: false, // 控制组件是否显示
        sitem: '', // 已经选择的属性
        selectList: [{ // 供选择的list
            id: 0,
            name: '我创建的'
        }, {
            id: 1,
            name: '我参与的'
        }]
    },
    onTabItemTap: function () {
        this.setData({
            isShowPop: !this.data.isShowPop
        });
    },
    onLoad: function () {
        // 初始化默认选择第一个
        let sitem = this.data.selectList[0];
        this.setData({
            sitem: sitem
        });
        // this.sitem = sitem;
    },
    selectLi(event) {
        // 获取选择的属性
        let item = event.currentTarget.dataset.item;
        this.setData({
            sitem: item
        });
        // 选择完关闭pop，也可以通过`确定`按钮关闭，如没有needTitle就自动关闭
        this.setData({
            isShowPop: false
        });
        this.sitem = item;
    },
    /**
     * 显示pop事件
     */
    showPop() {
        this.setData({
            isShowPop: true
        });
    }
})