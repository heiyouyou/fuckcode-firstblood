// pages/components/num-of-people.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*
     * 公有方法
     */
    hide() {
      this.setData({
        show: false
      })
    },
    show() {
      this.setData({
        show: true
      })
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _onCancle() {
      this.triggerEvent("conCancle")      
    },
    _onConfirm() {
      //确定回调
      this.triggerEvent("confirm")
    }
  }
})
