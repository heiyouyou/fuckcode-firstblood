// pages/bus/bus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    date:''
  },
  bindTimeChange(e){
    this.setData({
      time:e.detail.value
    })
  },
  bindDateChange(e){
    this.setData({
      date:e.detail.value
    })
  },
  createBus(){
    wx.showModal({
      title: '确认创建班车',
      content: '确认创建您的班车吗？ \n创建后您可以手动开关您的班车',
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