(function(S) {
  var $ = S.all;

  var $canvas = $('#panel');
  var canvas = $canvas.getDOMNode();
  if (!canvas.getContext){
    alert('your broswer don\'t support canvas');
    return;
  }
  var ctx = canvas.getContext('2d');

  function g1024() {
    var self = this;
    self.config = {};
    self.points = [];

    self.init = function(cfg) {
      S.mix(self.config, cfg);
      self._getPoints();
      self._drawMap();
      self._drawRandomBlock();
    };

    self._getPoints = function() {
      var row = self.config.row;
      var col = self.config.col;
      for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
          self.points.push({
            x: 10*(j+1) + 80*j,
            y: 10*(i+1) + 120*i,
            val: ''
          });
        }
      }
    }

    self._drawMap = function() {
      S.each(self.points, function(item) {
        self._drawEmptyBlock(item.x, item.y);
      })
    };

    self._drawEmptyBlock = function(x, y) {
      ctx.fillStyle = 'rgb(234,234,234)';
      ctx.fillRect(x,y,80,120);
    };

    self._drawRandomBlock = function() {
      var length = self.points.length;
      var rad = parseInt(Math.random()*length,10);
      self._drawNumberBlock(self.points[rad].x,self.points[rad].y,2);
    };

    self._drawNumberBlock = function(x, y, num) {
      ctx.fillStyle = 'rgb(129, 192, 247)';
      ctx.fillRect(x,y,80,120);
      ctx.font = '40px Arial';
      ctx.fillStyle = 'Black';
      ctx.fillText(num, x+30,y+70);
    };

  }

  var newGame = new g1024();
  newGame.init({
    row: 4,
    col: 4
  });

})(KISSY);
