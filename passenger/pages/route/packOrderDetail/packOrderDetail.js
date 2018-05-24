// pages/route/packOrderDetail/packOrderDetail.js
let util = require('../../../utils/util');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId: 0,
    orderDetailObj: {},
    textarea_content: '',
    success: false,
    score_start: [],
    star_level: 0,
    hide: true,
    showCancel: false,
    showPay: false,
    commentShow: true
  },
  // 评论弹窗
  maskToggle() {
    app.maskToggle(this)
    this.setData({
      'textarea_content': '',
      'success': false,
      'star_level': 0,
    })
  },
  // 评论点赞
  commentStar(e) {
    let level = e.currentTarget.dataset.level
    this.setData({
      'star_level': level
    })
  },
  // 评论框内容获取
  textareaInput(e) {
    let content = e.detail.value
    this.setData({
      'textarea_content': content
    })
  },
  // 提交评论的内容
  commitCommentData() {
    const that = this;
    let comment = this.data.textarea_content;
    let star = this.data.star_level;
    let id = this.data.orderId;
    let url = '/charter/comment';
    util._ajax_({
      loadingText: '提交中',
      method: 'POST',
      url: url,
      data: {
        id,
        comment,
        star
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            'success': !that.data.success
          })
          that.getCommentData();
        } else {
          util.toast(res.data.msg);
        }
      }
    })
  },
  // 获取评论的数据
  getCommentData() {
    const that = this;
    let id = this.data.orderId;
    let url = '';
    util._ajax_({
      loadingShow: false,
      method: 'GET',
      url: url,
      data: {
        id
      },
      success: function (res) {
        if (res.data.status == 1) {
          that.setData({
            'star_level': res.data.data.score,
            'textarea_content': res.data.comment,
            'success': !that.data.success
          })
        } else {
          util.toast(res.data.msg);
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