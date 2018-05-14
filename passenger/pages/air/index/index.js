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
    airport: [],
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
    userTime: {},
    form: {
      use_time: '', // 用车时间
      address: [], // 出发地址，可以多个地址 420 spencer street,Melbourne station
      airport_id: '', // 机场id
      big_luggage: '', // 大行李数量
      small_luggage: '', // 小行李数量
      mission_type: '1', // 1接机，2送机
      passenger: '', // 成人数量
      children: '' // 儿童数量
    }
  },
  go(e) {
    let url = e.currentTarget.dataset.url,
      t = e.currentTarget.dataset.t
    if (t) {
      let form = JSON.stringify(this.data.form)
      util.go(`${url}?form=` + form)
    } else {
      util.go(url)
    }
  },
  onNav(e) {
    let i = e.currentTarget.dataset.i,
      fm = 'form.mission_type'
    this.setData({
      flag: i,
      [fm]: i + 1
    })
  },
  toggle(e) {
    let elem = e.currentTarget.dataset.elem
    let selem = this.data[elem]
    this.setData({
      [elem]: !selem
    })
  },
  bindInput(e) {
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
        airport = this.data.airport,
        i = e.detail.value
    this.setData({
      index: i,
      [fai]: airport[i].id
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
    let time =  this.datePick.getDateVal(),
        ft = 'form.use_time'
    this.setData({
      userTime: time,
      [ft]: `${time.dates} ${time.hours}:${time.mins}`
    })
  },
  getAirportList() {
    let self = this
    util.ajax('/index/airport-list', {}, res => {
      let _res = res.data
      self.setData({
        airport: _res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAirportList()
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