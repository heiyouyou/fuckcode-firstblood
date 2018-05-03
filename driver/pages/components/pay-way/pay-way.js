// pages/components/pay-way/pay-way.js
let app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 支付组件标题
    'title':{
      'type':String,
      'value':"SKY-CAR在线支付",
    },
    // 支付数额
    'payAmout':{
      'type':String,
      'value':'￥00.00'
    },
    // 支付组件隐藏属性
    'hide':{
      'type':Boolean,
      'value':true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    payText:['skycar余额支付','微信支付'],
    payIcon:['../../../images/icon_pay_app_skycar@2x.png','../../../images/icon_pay_app_wechat@2x.png','../../../images/icon_pay_app_alli@2x.png'],
    payWay:0//支付类型，0:余额支付,1:微信支付,2:支付宝支付

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选择支付方式
    _choosePayWay(e){
      let type = e.currentTarget.dataset.type;
      this.setData({
        payWay:type
      })
    },
    // 确认支付
    _confirmPay(){
      let payWay = this.data.payWay
      let payAmout = this.data.payAmout
      this.triggerEvent('paySure',{payWay,payAmout})
      this.maskToggle()
    },
    // 显示隐藏支付组件
    maskToggle(){
      app.maskToggle(this)
      this.setData({
        payWay:0
      })
    },
  },
  ready(){
    
  }
})
