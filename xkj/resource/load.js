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
    './images/bg1.jpg',
    './images/bg2.jpg',
    './images/bg3.jpg',
    './images/bg4.jpg',
    './images/bg5.jpg',
    './images/bg6.jpg',
    './images/bg7.jpg',
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
    './images/production.jpg',
    './images/test1.png'
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
