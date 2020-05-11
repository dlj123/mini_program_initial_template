App({
  onLaunch: function () {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log('env', res);
        if (res.platform == "devtools")
          that.globalData.url.host = that.globalData.url.host_dev;
        else
          that.globalData.url.host = that.globalData.url.host_real;
      },
    })
  },
  globalData: {
    url: {
      host: "",
      host_dev: "https://wxapphis.gzfuture.cn",
      host_real: "https://wxapphis.gzfuture.cn"
    },
  }
})