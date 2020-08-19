import Phaser from "phaser";
import gameConfig from "../gameConfig";

let graphics;
let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function() {
    Phaser.Scene.call(this, { key: "mainMenu" });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();

    graphics = this.add.graphics();
    graphics.fillStyle(0x757575, 1);
    graphics.fillRect(0, 0, 800, 600);

    this.add.text(
      gameConfig.width / 2,
      gameConfig.height / 2,
      "Press space to start the game!"
    );
  },
  update: function() {
    if (cursors.space.isDown) {
      this.scene.start("game");
    }
  }
});
