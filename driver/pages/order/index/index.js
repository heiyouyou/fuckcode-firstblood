// pages/order/index/index.js
let util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cindex:0,//当前接单类型，0:机场接送,1:预约用车,2:班车,3:包车旅游,
    ordersNavs:['机场接送','预约用车','班车','包车旅游'],
    airItemList:['接机','送机','往返'],
    orderFilters:['行程中','已完成','已取消'],
    cfilterIndex:0,
    filterHide:true,
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
  // 过滤选择
  chooseFilter(e){
    let type = e.currentTarget.dataset['type'];
    this.setData({
      cfilterIndex:type,
      filterHide:true
    })
  },
  showFilter(){
    this.setData({
      filterHide:false
    })
  },
  next(){
    util.go(`../detail/detail?type=${this.data.cindex}`)
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
    wx.setNavigationBarTitle({
      title:'订单管理'
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