import Phaser from "phaser";
import gameConfig from "../gameConfig";

let cursors;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function() {
    Phaser.Scene.call(this, { key: "game" });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();
  },
  update: function() {}
});
