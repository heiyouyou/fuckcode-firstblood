// pages/order/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordersType:0,
    markers: [{
      // iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30,
      callout:{
        content:'test',
        color:'#fff',
        bgColor:'#F1604F',
        display:'ALWAYS',
        padding:20,
        borderRadius:40
      }
    }],
  },
  cancelOrder(){
    wx.showModal({
      title: '取消订单',
      content: '您确定要取消订单吗？\n可能会会有惩罚',
      confirmColor:'#F1604F',
      cancelColor:'#8F8E94',
      success: function(res) {
        if (res.confirm) {

        } else if (res.cancel) {
          
        }
      }
    })
  },
  transferOrder(){
    wx.showModal({
      title: '确认订单',
      content: '您确定要转订单吗？\n每月转单超过X次，会有惩罚',
      confirmColor:'#F1604F',
      cancelColor:'#8F8E94',
      success: function(res) {
        if (res.confirm) {

        } else if (res.cancel) {
          
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type
    console.log(type)
    this.setData({
      ordersType:type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title:'订单详情'
    })
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