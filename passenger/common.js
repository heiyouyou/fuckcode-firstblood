/**
 * 公用的业务方法
 */

/**
 * 重定向到登录页面的方法
 */
let goLogin = function () {
    wx.redirectTo({
        url: '/pages/login/login/login'
    })
    wx.removeStorageSync('skycar');
}

export { goLogin}