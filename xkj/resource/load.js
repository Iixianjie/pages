function Load() {}
Load.prototype.loadImgs = function(urls, callback) {
  this.urls = urls;
  this.imgNumbers = urls.length;
  this.loadImgNumbers = 0;
  var that = this;
  for (var i = 0; i < urls.length; i++) {
    var obj = new Image();
    obj.src = urls[i];
    obj.onload = function() {
      that.loadImgNumbers++;
      callback(parseInt((that.loadImgNumbers / that.imgNumbers) * 100));
    };
  }
};

var loader = new Load();

loader.loadImgs(
  [
    '/pages/xkj/resource/images/bg1.jpg',
    '/pages/xkj/resource/images/bg2.jpg',
    '/pages/xkj/resource/images/bg3.jpg',
    '/pages/xkj/resource/images/bg4.jpg',
    '/pages/xkj/resource/images/bg5.jpg',
    '/pages/xkj/resource/images/bg6.jpg',
    '/pages/xkj/resource/images/bg7.jpg',
    // '/resource/images/ewm.png',
    // '/resource/images/list-bg1.png',
    // '/resource/images/list-bg2.png',
    // '/resource/images/list-bg3.png',
    // '/resource/images/list-bg4.png',
    // '/resource/images/list-bg5.png',
    // '/resource/images/masonry1.png',
    // '/resource/images/masonry2.png',
    // '/resource/images/masonry3.png',
    // '/resource/images/masonry4.png',
    // '/resource/images/news-img1.png',
    // '/resource/images/news-img2.png',
    // '/resource/images/news-img3.png',
    '/pages/xkj/resource/images/production.jpg',
    '/pages/xkj/resource/images/test1.png'
  ],
  function(percent) {
    var loadText = document.getElementById('load-text');
    if (loadText) {
      loadText.innerHTML = percent + '%';
      if (percent >= 100) {
        document.querySelector('.load-mask').style.display = 'none';
      }
    }
  }
);

Load();
