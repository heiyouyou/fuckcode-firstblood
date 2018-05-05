// pages/travel/bill/bill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      name: '大洋路一日——行走在山与海的边缘，邂逅万年雕琢的石灰岩海岸风光',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      startTime: '2018-03-22',
      endTime: '2018-03-22'
    },
    carType: [{
      name: '紧凑5座',
      type: 1,
    }, {
      name: '舒适5座',
      type: 2
    }, {
      name: '豪华5座',
      type: 3
    }],
    carIntro: {
      name: '紧凑5座+中文司导',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      intro: '丰田凯美瑞马自达等同级车',
      peopleNum: 5,
      luggageNum: 5,
      price: '1123.55'
    },
    form: {
      adult: '',
      child: '',
      luggage: '',
      user: '',
      mobile: '',
      wechat: '',
      startTime: '',
      startPoint: '',
      ps: '',
      coupon: '',
      couponNum: ''
    }
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