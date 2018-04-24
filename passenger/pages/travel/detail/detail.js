// pages/travel/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      city: '墨尔本',
      destination: '弗林德斯大街车站',
      esl: 'Flinders Street Station',
      collect: 123, 
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      intro: '墨尔本中央火车站，又叫弗林顿斯大道火车站。弗林德斯街站，是澳大利亚最早的火车站，集合所有城市火车的换乘，如同墨尔本发散型火车网络的圆心。这',
      day: 2,
      strTime: '8:30am',
      endTime: '6:00pm',
      type: '包车/拼团',
      adr: '指定地点接送，全程约888公里',
      routePlan: [{
        city: '墨尔本',
        day: 1,
        duration: 20,
        kilometer: 888,
        list: [{
          time: '08:30',
          plan: '乘车约5小时',
          star: 'CROWN酒店出发'
        }, {
          time: '08:30',
          plan: '乘车约5小时',
          star: 'CROWN酒店出发'
        }, {
          time: '08:30',
          plan: '乘车约5小时',
          star: 'CROWN酒店出发'
        }]
      }, {
        city: '墨尔本',
        day: 1,
        duration: 20,
        kilometer: 888,
        list: [{
          time: '08:30',
          plan: '乘车约5小时',
          star: 'CROWN酒店出发'
        }, {
          time: '08:30',
          plan: '乘车约5小时',
          star: 'CROWN酒店出发'
        }, {
          time: '08:30',
          plan: '乘车约5小时',
          star: 'CROWN酒店出发'
        }]
      }],
      evaluation: [{

      }]
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