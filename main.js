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

    self.init = function(cfg) {
      S.mix(self.config, cfg);
      self._drawMap();
    };

    self._drawMap = function() {
      var row = self.config.row;
      var col = self.config.col;
      for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
          self._drawEmptyBlock(10*(j+1) + 80*j, 10*(i+1) + 120*i);
        }
      }
    };

    self._drawEmptyBlock = function(x, y) {
      ctx.fillStyle = 'rgb(234,234,234)';
      ctx.fillRect(x,y,80,120);
    }

  }

  var newGame = new g1024();
  newGame.init({
    row: 4,
    col: 4
  });

})(KISSY);
