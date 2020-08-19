import Phaser from "phaser";
// import { width, height } from "../gameConfig";

// let graphics;
let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function() {
    Phaser.Scene.call(this, { key: "gameOver" });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();
  },
  update: function() {
    if (cursors.space.isDown) {
      this.scene.start("game");
    }
  }
});
