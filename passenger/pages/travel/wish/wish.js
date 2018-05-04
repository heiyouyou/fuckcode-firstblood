// pages/travel/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMask: false,
    show: {},
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
    citys: [{
      name: '墨尔本',
      code: ''
    }, {
      name: '布里斯班',
      code: ''
    }, {
      name: '凯恩斯',
      code: ''
    }, {
      name: '悉尼',
      code: ''
    }]
  },
  onCity(e) {

  },
  onNav(e) {
    let name = e.currentTarget.dataset.name,
      sn = `show.${name}`,
      val = this.data.show[name],
      sm = this.data.showMask
    this.setData({
      [sn]: !val,
      showMask: !sm
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