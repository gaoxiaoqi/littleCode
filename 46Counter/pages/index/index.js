//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ss: '试卷满分为：',
    //ss:'本次成绩为：',
    fen: 710,
    in01: 4,
    in02: 4,
    in03: 5,
    in04: 5,
    in05: 5,
    in06: 5,
    in07: 5,
    in08: 5,
    ssrc: '../../images/kanhaoni.png',
  },
  //事件处理函数
  /*01点击减号*/
  bindSub01: function () {
    var in01 = this.data.in01;
    if (in01 > 0) {
      in01--;
    }
    this.setData({
      in01: in01,
    })
  },
  /*点击加号*/
  bindPlus01: function () {
    var in01 = this.data.in01;
    if (in01 < 8) {
      in01++;
    }
    this.setData({
      in01: in01,
    })
  },
  bindManual01: function (e) {
    var in01 = e.detail.value;
    this.setData({
      in01: in01,
    })
  },

  /*02点击减号*/
  bindSub02: function () {
    var in02 = this.data.in02;
    if (in02 > 0) {
      in02--;
    }
    this.setData({
      in02: in02,
    })
  },
  /*点击加号*/
  bindPlus02: function () {
    var in02 = this.data.in02;
    if (in02 < 7) {
      in02++;
    }
    this.setData({
      in02: in02,
    })
  },
  bindManual02: function (e) {
    var in02 = e.detail.value;
    this.setData({
      in02: in02,
    })
  },
  /*03点击减号*/
  bindSub03: function () {
    var in03 = this.data.in03;
    if (in03 > 0) {
      in03--;
    }
    this.setData({
      in03: in03,
    })
  },
  /*点击加号*/
  bindPlus03: function () {
    var in03 = this.data.in03;
    if (in03 < 10) {
      in03++;
    }
    this.setData({
      in03: in03,
    })
  },
  bindManual03: function (e) {
    var in03 = e.detail.value;
    this.setData({
      in03: in03,
    })
  },

  /*04点击减号*/
  bindSub04: function () {
    var in04 = this.data.in04;
    if (in04 > 0) {
      in04--;
    }
    this.setData({
      in04: in04,
    })
  },
  /*点击加号*/
  bindPlus04: function () {
    var in04 = this.data.in04;
    if (in04<10){
      in04++;
    } 
    this.setData({
      in04: in04,
    })
  },
  bindManual04: function (e) {
    var in04 = e.detail.value;
    this.setData({
      in04: in04,
    })
  },
  /*05点击减号*/
  bindSub05: function () {
    var in05 = this.data.in05;
    if (in05 > 0) {
      in05--;
    }
    this.setData({
      in05: in05,
    })
  },
  /*点击加号*/
  bindPlus05: function () {
    var in05 = this.data.in05;
    if (in05 < 10) {
      in05++;
    }
    this.setData({
      in05: in05,
    })
  },
  bindManual05: function (e) {
    var in05 = e.detail.value;
    this.setData({
      in05: in05,
    })
  },
  /*06点击减号*/
  bindSub06: function () {
    var in06 = this.data.in06;
    if (in06 > 0) {
      in06--;
    }
    this.setData({
      in06: in06,
    })
  },
  /*点击加号*/
  bindPlus06: function () {
    var in06 = this.data.in06;
    if (in06 < 10) {
      in06++;
    }
    this.setData({
      in06: in06,
    })
  },
  bindManual06: function (e) {
    var in06 = e.detail.value;
    this.setData({
      in06: in06,
    })
  },
  bindManual07: function (e) { 
    var in07 = e.detail.value;
    if (in07>15){
      this.setData({
        in07: 0, 
      })
      wx.showModal({
        title: '提示信息',
        content:'超出范围，请重新输入',
      }) 
    }
    else{
      this.setData({
        in07: in07,
      })
    }  
  },

  bindManual08: function (e) {
    var in08 = e.detail.value;
    if (in08 > 15) {
      this.setData({
        in08: 0,
      })
      wx.showModal({
        title: '提示信息',
        content: '超出范围，请重新输入',
      })
    }
    else {
      this.setData({
        in08: in08,
      })
    } 
 
  },


formSubmit:function(e){
  var input01 = e.detail.value.input01
  var input02 = e.detail.value.input02
  var input03 = e.detail.value.input03
  var input04 = e.detail.value.input04
  var input05 = e.detail.value.input05
  var input06 = e.detail.value.input06

  var input07 = e.detail.value.input07
  var input08 = e.detail.value.input08

  var num = input01 * 7.1 + input02 * 7.1 + input03 * 14.2 + input04 * 3.55 + input05 * 7.1 + input06 * 14.2 + input07 * 7.1 + input08 * 7.1
   
  if (num <= 280) {
    this.setData({
      fen: num.toFixed(0),
      ss: '您的本次成绩为：',
      ssrc: '../../images/mimang.png',
    })
  }  
  else if (280 < num && num <= 360) {
    this.setData({
      fen: num.toFixed(0),
      ss: '您的本次成绩为：',
      ssrc: '../../images/ku.png',
    })
  }
  else if (360 < num && num< 425) {
    this.setData({
      fen: num.toFixed(0),
      ss: '您的本次成绩为：',
      ssrc: '../../images/fanu.png',
    })
  }
  else if(425<=num && num<=445){
    this.setData({
      fen: num.toFixed(0),
      ss: '您的本次成绩为：',
      ssrc: '../../images/weixiao.png',
    })
  }
  else if(445<num && num<485){
    this.setData({
      fen: num.toFixed(0),
      ss: '您的本次成绩为：',
      ssrc: '../../images/kanhaoni.png',
    })
  }
  else if (485 < num ) {
    this.setData({
      fen: num.toFixed(0),
      ss: '您的本次成绩为：',
      ssrc: '../../images/xin.png',
    })
  }
},

formReset:function(){
  this.setData({
    ss: '试卷满分为：',
    fen: 710,
    in01: 4,
    in02: 4,
    in03: 5,
    in04: 5,
    in05: 5,
    in06: 5,
    in07: 5,
    in08: 5,
    ssrc: '../../images/kanhaoni.png',
  })
}
})
