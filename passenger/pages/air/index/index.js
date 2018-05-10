// pages/air/index/index.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBack: false,
    banner: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    flag: 0,
    nav: [{
      t: 'to',
      src: '/pages/imgs/home_nav/air.png',
      activeSrc: '',
      name: '接机'
    }, {
      t: 'back',
      src: '/pages/imgs/home_nav/air.png',
      activeSrc: '',
      name: '送机'
    }, {
      t: 'toBack',
      src: '/pages/imgs/home_nav/air.png',
      activeSrc: '',
      name: '往返'
    }],
    airplan: [{
      name: '墨尔本',
      id: 3304
    }, {
      name: '悉尼',
      id: 1213
    }],
    index: 0,
    busAdultNum: {
      name: '成人>7岁',
      val: 0
    },
    busChildNum: {
      name: '儿童<7岁',
      val: 0
    },
    bigLuggage: {
      name: '大行李',
      val: 0
    },
    smallLuggage: {
      name: '小行李',
      val: 0
    },
    landDate: {},
    form: {
      use_time: '', // 用车时间
      address: [], // 出发地址，可以多个地址
      airport_id: '', // 机场id
      big_luggage: '', // 大行李数量
      small_luggage: '', // 小行李数量
      mission_type: '', // 1接机，2送机
      passenger: '', // 成人数量
      children: '' // 儿童数量
    }
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  onNav(e) {
    let i = e.currentTarget.dataset.i
    this.setData({
      flag: i
    })
  },
  toggle(e) {
    let elem = e.currentTarget.dataset.elem
    let selem = this.data[elem]
    this.setData({
      [elem]: !selem
    })
  },
  bindKeyInput(e) {
    let that = this, value = e.detail.value, param = e.currentTarget.dataset.p, t = e.currentTarget.dataset.t
    if (t) {
      that.setData({
        [param]: [value]
      })
    } else {
      that.setData({
        [param]: value
      })
    }
  },
  bindPickerChange(e) {
    let fai = 'form.airport_id',
        airplan = this.data.airplan,
        i = e.detail.value
    this.setData({
      index: i,
      [fai]: airplan[i].id
    })
  },
  show(e) {
    let id = e.currentTarget.dataset.id
    this[id].show()
  },
  onBtn(e) {
    let t = e.currentTarget.dataset.t,
      val = e.currentTarget.dataset.val,
      v = this.data[val].val
    if (t == 'minus' && v > 0) {
      this.setData({
        [`${val}.val`]: --v
      })
    } else if (t == 'add') {
      this.setData({
        [`${val}.val`]: ++v
      })
    }
  },
  _onConfirm() {
    let an = this.data.busAdultNum.val,
        cn = this.data.busChildNum.val,
        fp = 'form.passenger',
        fc = 'form.children'
    this.setData({
      [fp]: an,
      [fc]: cn
    })
  },
  _onDatePickcfm() {
    this.setData({
      landDate: this.datePick.getDateVal()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取弹框组件
    this.cusPick = this.selectComponent('#cusPick')
    this.subcusPick = this.selectComponent('#subcusPick')
    this.datePick = this.selectComponent('#datePick')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})