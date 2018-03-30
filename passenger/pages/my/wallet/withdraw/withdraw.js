// pages/my/wallet/withdraw/withdraw.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:true,
    way:1,
    withdrawWay:'人民币（RMB）',
    disabled:true
  },
  // 弹出层的显示与隐藏
  maskToggle(){
    app.maskToggle(this)
  },
  // 选择提现方式
  chooseWay(e){
    this.maskToggle()
    let way = e.currentTarget.dataset.way
    let withdrawWay = way==1?"人民币（RMB）":"澳币（AUD）"
    let disabled = way==1?true:false
    this.setData({
      ['way']:way,
      ['withdrawWay']:withdrawWay,
      ['disabled']:disabled
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