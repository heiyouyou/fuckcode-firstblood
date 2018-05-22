// pages/register/phone/phone.js
let util = require('../../../utils/util')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    country:'中国',
    country_code: '+86',
    countryArray: [],
    index: 0,
  },
  // 选择国家
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
      country:this.data.countryArray[e.detail.value].name,
      country_code:this.data.countryArray[e.detail.value].code
    })
  },
  // 注册手机号
  register(data) {
    const that = this;
    let areaCode = this.data.country_code;
    let mobile = data.detail.value.phone;
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          wx.openSetting({
            success: function (res) {
              if (res.authSetting['scope.userInfo']) {
                that.getCountryData();
              }
            }
          });
        } else {
          util._ajax_({
            loadingText:'提交中',
            method:'POST',
            url: util.server+'/user/register-phone',
            data:{areaCode,mobile},
            success(res) {
              util.go(`../code/code?phone=${mobile}&areaCode=${areaCode}`, 1)
            }
          })
        }
      }
    })
  },
  // 获取微信code和用户信息
  getWxCode(callback) {
    const that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          let code = res.code;
          wx.getSetting({
            success: res => {
              if (!res.authSetting['scope.userInfo']) {
                wx.openSetting({
                  success: function (res) {
                    if (res.authSetting['scope.userInfo']) {
                      wx.getUserInfo({
                        success: function (res) {
                          app.globalData.iv = res.iv;
                          app.globalData.encryptedData = res.encryptedData;
                          callback && callback(code);
                        }
                      })
                    }
                  }
                })
              }else{
                callback && callback(code);
              }
            }
          })
        } else {
          wx.showToast({
            title: `${res.errMsg}`,
            icon: 'none',
          })
        }
      },
      fail(res){
        util.toast(res.errMsg)
      }
    });
  },
  // 获取国家和代号数据
  getCountryData(){
    const that = this;
    this.getWxCode((code) => {
      let params = {
        code: code,
        iv: app.globalData.iv,
        encryptedData: app.globalData.encryptedData,
        sign: app.globalData.scene
      }
      util._ajax_({
        loadingShow: false,
        method: 'POST',
        data: params,
        url: util.server + '/account/register',
        success(res) {
          wx.setStorageSync('skycar', res.data.data.token);
          that.setData({
            countryArray:res.data.data.country,
            country: res.data.data.country[0].name,
            country_code: res.data.data.country[0].code
          })
        }
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCountryData();
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