// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  onLoad(e) {
    var that = this
    console.log(e)
    that.setData({
      name: e.name,
      website: 'https://zoomlook.com/su/tutorials/' + e.name + '.php'
    })
  }

})
