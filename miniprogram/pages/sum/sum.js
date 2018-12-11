// miniprogram/pages/sum/sum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    this.setData({result:"hello world!"});
    wx.cloud.callFunction({
      name: 'sum',
      data: {a:10,b:10},
      success: res => {
        console.log('[云函数] [sum] user openid: ', res.result.sum)
        this.setData({ result:res.result.sum});
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })

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

  },
  goBaidu:function(){
    wx.setStorageSync("src_url", "https://tuchong.com/388306/");//这是个同步方法,进行存储数据
    wx.navigateTo({
      url: '../out/out', //
      success: function () {},       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})