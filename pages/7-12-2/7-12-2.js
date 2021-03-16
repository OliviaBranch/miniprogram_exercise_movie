// pages/7-12-2/7-12-2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listjson:[]
  },

  todetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../7-12-detail/7-12-detail?filmid='+e.currentTarget.dataset.filmid+'&filmname='+e.currentTarget.dataset.filmname,
    })
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
      title: "榜单>>"+options.listname,
    })
    wx.request({
      url: 'https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=20&apiKey=054022eaeae0b00e0fc068c0c0a2102a',
      /*data:{
        apikey:"0b2bdeda43b5688921839c8ecb20399b"
      },*/
      header: {
        'content-type': 'application/json' // 默认值
        },
      success(res){
        console.log(res.data)
        that.setData({
          listjson:res.data.subject_collection_items
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