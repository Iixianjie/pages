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
    '/resource/images/bg1.jpg',
    '/resource/images/bg2.jpg',
    '/resource/images/bg3.jpg',
    '/resource/images/bg4.jpg',
    '/resource/images/bg5.jpg',
    '/resource/images/bg6.jpg',
    '/resource/images/bg7.jpg',
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
    '/resource/images/production.jpg',
    '/resource/images/test1.png'
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
