// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },

  navigate(options){
    let ZLitem = options.currentTarget.dataset.name
    console.log(ZLitem)
    wx.navigateTo({
      url: '../logs/logs?name=' + ZLitem,
    })
  },

  onLoad() {

  },


})
