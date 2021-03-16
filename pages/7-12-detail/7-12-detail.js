Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.showLoading({
      title: '牛年大吉',
    })
    console.log(options)
    wx.setNavigationBarTitle({
      title: '最近热映>>'+options.filmname,
    })
    wx.request({
      url: 'https://frodo.douban.com/api/v2/movie/'+options.filmid+'?apiKey=054022eaeae0b00e0fc068c0c0a2102a',

      header: {
        'content-type': 'application/json' // 默认值
        },
      
        success(res){
        console.log(res)
          that.setData({
            detail:res.data
          })
        wx.hideLoading()
      }
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