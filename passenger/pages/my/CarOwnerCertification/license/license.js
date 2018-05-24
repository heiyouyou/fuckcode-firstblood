// pages/my/CarOwnerCertification/license/license.js
let util = require('../../../../utils/util')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:true,
    agree_base_rule:0,
    agree_car_rule:0,
    carIndex:0,
    carTypeArray:['舒适型','豪华型'],
    c_type:'舒适型',
    seatIndex:0,
    seatArray: ['不提供', '提供'],
    seat:'不提供',
    insuranceImgUrl:'',
    insuranceImgError: false,
    insuranceImgId:'',
    passportImgUrl:'',
    passportImgError: false,
    passportImgId: '',
    driverImgUrl: '',
    driverImgError: false,
    driverImgId: '',
    carfrontImgUrl: '',
    carfrontImgError: false,
    carfrontImgId: '',
    carsideImgUrl: '',
    carsideImgError: false,
    carsideImgId: '',
  },
  maskToggle(e){
    app.maskToggle(this)
  },
  // 阻止冒泡
  stopBubble(){
    console.log(22)
  },
  // 条例勾选
  checkboxChange(e){
    if (e.detail.value.length==2){
      this.setData({
        agree_base_rule:1,
        agree_car_rule:1,
      });
    }
  },
  // 上传照片
  uploadPhoto(e) {
    const that = this;
    let type = e.currentTarget.dataset.type;
    util.updImg({
      cb(res) {
        let data = JSON.parse(res.data);
        let setObj = {
          hide: true
        }
        if (type == 'insurance'){//上传全险
          setObj.insuranceImgId = data.data.id,
          setObj.insuranceImgUrl = data.data.link
        } else if (type == 'passport') {//上传护照
          setObj.passportImgId = data.data.id,
          setObj.passportImgUrl = data.data.link
        }else if(type == 'carfront'){//上传汽车正面
            setObj.carfrontImgId = data.data.id,
            setObj.carfrontImgUrl = data.data.link
        } else if (type == 'carside') {//上传汽车侧面
          setObj.carsideImgId = data.data.id,
          setObj.carsideImgUrl = data.data.link
        } else if (type == 'driver') {//上传驾照
          setObj.driverImgId = data.data.id,
          setObj.driverImgUrl = data.data.link
        }
        that.setData(setObj);
      },
      fail(res){
        let data = JSON.parse(res.data);
        let setObj = {
          hide: true
        }
        if (type == 'insurance') {
          setObj.insuranceImgError = true;
        } else if (type == 'passport') {
          setObj.passportImgError = true;
        } else if (type == 'carfront') {
          setObj.carfrontImgError = true;
        } else if (type == 'carside') {
          setObj.carsideImgError = true;
        } else if (type == 'driver') {
          setObj.driverImgError = true;
        }
        that.setData(setObj);
      }
    })
  },
  // 资料提交
  uploadInfo(e) {
    let data = e.detail.value;
    let car_model = this.data.carIndex + 1;
    let is_supply_children_seat = this.data.seatIndex;
    let insurance_img_id = this.data.insuranceImgId;
    let driver_img_id = this.data.driverImgId;
    let car_img_front_id = this.data.carfrontImgId;
    let car_img_side_id = this.data.carsideImgId;
    let img_id = this.data.passportImgId;
    let agree_base_rule = this.data.agree_base_rule;
    let agree_car_rule = this.data.agree_car_rule;
    Object.assign(data, {
      car_model,
      is_supply_children_seat,
      insurance_img_id,
      driver_img_id,
      car_img_front_id,
      car_img_side_id,
      img_id,
      agree_base_rule,
      agree_car_rule
    })
    console.log(data);
    if (this.data.agree_base_rule == 0 || this.data.agree_car_rule == 0){
      util.toast('请同意服务条例！')
      return
    }
    wx.showModal({
      title: '确认提交',
      cancelColor: "#999999",
      confirmColor: "#F1604F",
      content: '确认提交申请司机吗?\r\n一般审核时间为7个工作日',
      success: function (res) {
        if (res.confirm) {
          util._ajax_({
            url: '/apply/driver-apply-step2',
            data,
            method:'POST',
            success(res){
              util.go('../../../results/licenseCertified/licenseCertified',2)
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 车辆类型选择
  bindPickerCarChange: function(e) {
    this.setData({
      carIndex: e.detail.value,
      c_type:this.data.carTypeArray[e.detail.value]
    })
  },
  // 儿童座椅选择
  bindPickerSeatChange: function(e) {
    this.setData({
      seatIndex: e.detail.value,
      seat:this.data.seatArray[e.detail.value]
    })
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