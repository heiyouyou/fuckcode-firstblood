/**
 * 公用的业务方法
 */

let util = require('./utils/util')

/**
 * 重定向到登录页面的方法
 */
let goLogin = function () {
    util.go('/pages/login/login/login', 2)
    wx.removeStorageSync('skycar');
}

export { goLogin}