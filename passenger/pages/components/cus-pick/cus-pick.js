// pages/components/num-of-people.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    cancelTxt: {
      type: String,
      value: '取消'
    },
    confirmTxt: {
      type: String,
      value: '下一步'
    },
    firstItme: {
      type: Object,
      value: {
        name: '',
        val: 0
      }
    },
    lastItme: {
      type: Object,
      value: {
        name: '',
        val: 0
      }
    }
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
    onBtn(e) {
      let t = e.currentTarget.dataset.t,
        val = e.currentTarget.dataset.val
        console.log(val)
      if (t == 'minus' && val > 0) {
        this.setData({
          [val]: --val
        })
      } else {
        this.setData({
          [val]: ++val
        })
      }
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _onCancel() {
      this.triggerEvent("conCancel")
      this.hide()
    },
    _onConfirm() {
      //确定回调
      this.triggerEvent("confirm")
      this.hide()      
    }
  }
})
