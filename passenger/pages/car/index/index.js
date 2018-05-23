// pages/car/index/index.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: {
      rmb: 28,
      usd: 2.8
    },
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
    userTime: {},
    form: {
      departure: [], //出发地
      destination: [], //目的地
      city_id: '', //城市id
      adults: '', //成人数量
      childre: '', //儿童数量
      use_time_local: '', //用车时间
      bigBaggage: '', //大行李数量
      smallBaggage: '', //小行李数量
    }
  },
  show(e) {
    let id = e.currentTarget.dataset.id
    this[id].show()
  },
  bindInput(e) {
    let value = e.detail.value, param = e.currentTarget.dataset.p, t = e.currentTarget.dataset.t
    if (t) {
      this.setData({
        [param]: [value]
      })
    } else {
      this.setData({
        [param]: value
      })
    }
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
      ft = 'form.use_time_local'
    this.setData({
      userTime: time,
      [ft]: `${time.dates} ${time.hours}:${time.mins}`
    })
  },
  getPrice() {
    let self = this,
      form = this.data.form
    util.ajax('/appoint-car/check-price', form, res => {

    })
  },
  getSysInfo() {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight
        })
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
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