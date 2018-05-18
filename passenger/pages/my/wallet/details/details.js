// pages/my/wallet/details/details.js 
let util = require('../../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],
    noMore:false,
    nextPage: util.server + '/user/account-log',
    noData:false,
    clearList:false,
  },
  // 获取收入详细列表
  getList(){
    const that = this;
    util._ajax_({
      url: that.data.nextPage,
      success(res){
        let list = that.data.clearList ? res.data.data.list : [...that.data.detailList, ...res.data.data.list];
        that.setData({
          noData: (list.length == 0),
          nextPage: res.data.data.next_page || '',
          noMore: (list.length != 0 && !res.data.data.next_page),
          detailList: list
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
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
    this.setData({
      clearList:true,
      nextPage: util.server + '/user/account-log',
    })
    this.getList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.nextPage){
      this.getList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})