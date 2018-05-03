// pages/results/success/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{
      result_url:'../../imgs/common/zhifuchenggong@2x.png',
      result_content:'支付成功\n感谢您选择与Skycar同行'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let payCount = 'AUD123';
    let payWay = '上车支付';
    // this.setData({
    //   'data.result_content':`支付方式：${payWay}\n订单金额：${payCount}`
    // })
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