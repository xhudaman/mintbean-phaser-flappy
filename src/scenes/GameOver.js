import Phaser from "phaser";
import gameConfig from "../gameConfig";

let graphics;
let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function() {
    Phaser.Scene.call(this, { key: "gameOver" });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();

    graphics = this.add.graphics();
    graphics.fillStyle(0xff7da0, 1);
    graphics.fillRect(0, 0, gameConfig.width, gameConfig.height);
  },
  update: function() {
    if (cursors.space.isDown) {
      this.scene.start("game");
    }
  }
});
