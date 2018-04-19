// pages/order/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cindex:0,//当前接单类型，0:机场接送,1:预约用车,2:班车,3:包车旅游,
    ordersNavs:['机场接送','预约用车','班车','包车旅游'],
    airItemList:['接机','送机','往返'],
    airItemImgUrl:['../../../images/icon_pickup@2x.png','../../../images/icon_send copy@2x.png','../../../images/icon_goandback@2x.png'],
    notAirItemImgUrl:['../../../images/icon_pickup_grey@2x.png','../../../images/icon_send_grey@2x.png','../../../images/icon_goandback_grey@2x.png']
  },
  // tab选择
  chooseType(e){
    let type = e.currentTarget.dataset['type'];
    this.setData({
      cindex:type
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