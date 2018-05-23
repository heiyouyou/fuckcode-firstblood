// pages/air/next/next.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: '',
    car: [{
      type: 1,
      src: 'https://pic.lanhuapp.com/FliHx2wk49s_O3Q-Y6SmzeQyRQXH',
      intro: '经济车：卡罗拉、伊兰特、宝莱等同级车。'
    }, {
      type: 2,
      src: 'https://pic.lanhuapp.com/FrJb4yGe1HjIiiUT4AIfjd89R06a',
      intro: '豪华车：卡罗拉、伊兰特、宝莱等同级车。'
    }],
    form: {},
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
  _onLugConfirm() {
    let bl = this.data.bigLuggage.val,
      sl = this.data.smallLuggage.val,
      fbl = 'form.big_luggage',
      fsl = 'form.small_luggage'
    this.setData({
      [fbl]: bl,
      [fsl]: sl
    })
  },
  _onPerConfirm() {
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
    let time = this.datePick.getDateVal(),
      ft = 'form.use_time'
    this.setData({
      userTime: time,
      [ft]: `${time.dates} ${time.hours}:${time.mins}`
    })
  },
  onCar (e) {
    let t = e.currentTarget.dataset.t,
      // fct = 'form.leave.car_type',
      fct = 'form.back.car_type'
    this.setData({
      flag: t,
      [fct]: t + 1
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