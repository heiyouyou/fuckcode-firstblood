// pages/my/addressAndContact/updateContact/updateContact.js
let util = require('../../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    name:'',
    mobile:''
  },
  // 获取
  get(){
    const that = this;
    util._ajax_({
      url: '/contacts/info',
      data:{
        id: that.data.id
      },
      success(res){
        that.setData({
          name: res.data.data.name,
          mobile: res.data.data.mobile
        })
      }
    })
  },
  // 更新
  update(e) {
    let name = e.detail.value.name;
    let mobile = e.detail.value.mobile;
    let id = this.data.id;
    util._ajax_({
      loadingText: '提交中',
      method: 'POST',
      url: '/contacts/edit',
      data: {
        mobile,
        name,
        id
      },
      success(res) {
        util.toast(res.data.msg, 1);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.get();
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