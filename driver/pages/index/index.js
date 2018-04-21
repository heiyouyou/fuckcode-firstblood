// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:['../../images/bybus-banner.png','../../images/bybus-banner.png','../../images/bybus-banner.png','../../images/bybus-banner.png'],
    navigationIcons:[{imgUrl:'../../images/shuttlebus@2x.png',title:'发布班车'},{imgUrl:'../../images/orders@2x.png',title:'接单城市'},{imgUrl:'../../images/checktheflight@2x.png',title:'查询航班'},{imgUrl:'../../images/translate@2x.png',title:'驾照翻译'}],
    commentHide:true,
  },
  loadCommentData(e){
    console.log(e)
    this.setData({
      commentHide:false
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