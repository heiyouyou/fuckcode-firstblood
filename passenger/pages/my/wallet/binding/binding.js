// pages/my/wallet/binding/binding.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:true,
    bindingType:1,
    bindingText:'澳币提现账号'
  },
  // 弹出层的显示与隐藏
  maskToggle(){
    app.maskToggle(this)
  },
  // 选择绑定方式
  chooseWay(e){
    this.maskToggle()
    let bindingType = e.currentTarget.dataset.way
    let bindingText = bindingType==1?"澳币提现账号":"微信提现账号"
    this.setData({
      ['bindingType']:bindingType,
      ['bindingText']:bindingText
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