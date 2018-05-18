// pages/register/info/info.js
let util = require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    male_src:'../../imgs/male_selected@2x.png',
    female_src:'../../imgs/female_unchecked@2x.png',
    sex:1,
  },
  /**
   * 选择性别
   * @param {*} e 
   */
  tabImg(e){
    let type = e.target.dataset.sex
    if(type==1){
      this.setData({
        male_src:'../../imgs/male_selected@2x.png',
        female_src:'../../imgs/female_unchecked@2x.png',
        sex:1
      })
    }else{
      this.setData({
        male_src:'../../imgs/male_unchecked@2x.png',
        female_src:'../../imgs/female_selected@2x.png',
        sex:2
      })
    }
  },
  register(data) {
    const that = this;
    let nickname = data.detail.value.nickname;
    let email = data.detail.value.email;
    let sex = this.data.sex;
    util._ajax_({
      loadingText: '提交中',
      method: 'POST',
      url: util.server + '/user/register-info',
      data: {
        nickname,
        email,
        sex
      },
      success(res) {
        util.go(`'../password/password`, 1)
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