// pages/travel/city/city.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFilter: false,
    flag: '',
    fFlag: '',
    fiFlag: '',
    nav: [{
      name: '小众路线游'
    }, {
      name: '经典路线游'
    }, {
      name: '更多筛选'
    }],
    list: [{
      name: '大洋路',
      score: 4,
      day: 2,
      collect: 123445,
      price: 666,
      recommend: 1,
      intro: '大洋路2日-经典小镇缤纷游，邂逅万年雕琢的不一样的海岸风光'
    }, {
      name: '大洋路',
      score: 4,
      day: 2,
      collect: 123445,
      price: 666,
      recommend: 0,
      intro: '大洋路2日-经典小镇缤纷游，邂逅万年雕琢的不一样的海岸风光'
    }],
    filter: [{
      name: '景点关键字',
      list: [{
        name: '全部',
        type: ''
      }, {
        name: '国家公园',
        type: ''
      }, {
        name: '野餐BBQ',
        type: ''
      }, {
        name: '沙滩海浪',
        type: ''
      }, {
        name: '丰收果园',
        type: ''
      }, {
        name: '自然风光',
        type: ''
      }, {
        name: '拍照打卡',
        type: ''
      }, {
        name: '森林浴场',
        type: ''
      }, {
        name: '户外运动',
        type: ''
      }, {
        name: '休闲体验',
        type: ''
      }]
    }, {
      name: '游玩天数',
      list: [{
        name: '全部',
        type: ''
      }, {
        name: '1天',
        type: ''
      }, {
        name: '2天',
        type: ''
      }, {
        name: '3天',
        type: ''
      }, {
        name: '3-6天',
        type: ''
      }, {
        name: '7天以上',
        type: ''
      }]
    }]
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  onNav(e) {
    let i = e.currentTarget.dataset.i
    this.setData({
      flag: i,
      showFilter: i == 2 ? true : false
    })
  },
  onFilterNav(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      fFlag: index
    })
  },
  onFilterItem(e) {
    let idx = e.currentTarget.dataset.idx
    this.setData({
      fiFlag: idx,
      showFilter: false
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