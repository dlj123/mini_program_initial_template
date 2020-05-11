const app = getApp();
const cRequest = require('../../comFunc/cRequest.js');
const createRecycleContext = require('miniprogram-recycle-view');

Page({
  data: {
    
  },
  
  onLoad: function () {
    
  },

  onReady: function() {
    let that = this
    wx.showLoading({
      title: '数据获取中',
    })
    cRequest.requstGet({
      appName: 'IMall',
      funcName: 'GetCusList',
      data: {
        id:'r41b5454764',
        type: 'nav'
      }
    }).then(res => {
      console.log(JSON.parse(res))
      wx.setNavigationBarTitle({
        title: JSON.parse(res).title
      })
      var ctx = createRecycleContext({
        id: 'recycleId',
        dataKey: 'recycleList',
        page: that,
        itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
          width: 162,
          height: 182
        }
      })
      let listAppend = JSON.parse(res).list
      ctx.append(listAppend)
      // ctx.update(beginIndex, list)
      // ctx.destroy()
    });
    wx.hideLoading();
    
  },
  itemSizeFunc: function (item, idx) {
    return {
        width: 162,
        height: 182
    }
  }
})
