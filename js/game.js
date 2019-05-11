var Game = new Object();

Game.minion = false;
Game.chosen = false;

// updates per second
Game.ups = 30;

// can be used to slow down or speed up time
Game.speed = 1.0;

Game.start = function() {
  Game.minionPic = new Image();
  Game.minionPic.src = 'res/minion.png';
  Game.bobPic = new Image();
  Game.bobPic.src = 'res/bob.png';
}

Game.update = function() {
  
}

Game.choose = function() {
  if (Math.random() < .5) {
    Game.minion = false;
  }
  else {
    Game.minion = true;
  }
  Game.chosen = true;
}

Game.draw = function() {
  if (Game.chosen) {
    // draw to the screen using Game.ctx.*
    if (Game.minion) {
      // its the minion fo today
      Game.ctx.drawImage(Game.minionPic, 0, 0, 200, 200);
    }
    else {
      // its the bob fo today
      Game.ctx.drawImage(Game.bobPic, 0, 0, 200, 200);
    }
  }
}
