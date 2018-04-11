// pages/components/pay-way/pay-way.js
let app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 支付数额
    'payAmout':{
      'type':String,
      'value':'￥198.00'
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
    title:"SKY-CAR在线支付",
    payWay:1,//支付类型，1:余额支付,2:微信支付,3:支付宝支付
    wayList:[
      {
        'way':1,
        'chooseImg':'../../imgs/common/yuezhifu_xuanzhong@2x.png',
        'unchooseImg':'../../imgs/common/yuezhifu_weixuanzhong@2x.png'
      },{
        'way':2,
        'chooseImg':'../../imgs/common/weixinzhifu_xuanzhong@2x.png',
        'unchooseImg':'../../imgs/common/weixinzhifu_weixuanzhong@2x.png'
      },{
        'way':3,
        'chooseImg':'../../imgs/common/zhifubao_xuanzhong@2x.png',
        'unchooseImg':'../../imgs/common/zhifubao_weixuanzhong@2x.png'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选择支付方式
    _choosePayWay(e){
      let way = e.currentTarget.dataset.way
      this.setData({
        payWay:way
      })
    },
    // 确认支付
    _confirmPay(){
      let payWay = this.data.payWay
      this.triggerEvent('payEvent',{payWay})
      this.maskToggle()
    },
    // 显示隐藏支付组件
    maskToggle(){
      app.maskToggle(this)
      this.setData({
        payWay:1
      })
    },
  },
  ready(){
    
  }
})
