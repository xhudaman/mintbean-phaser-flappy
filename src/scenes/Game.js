import Phaser from "phaser";
import gameConfig from "../gameConfig";

let cursors;
let character;
let keyPressed = false;

export default new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function() {
    Phaser.Scene.call(this, { key: "game" });
  },
  preload: function() {
    this.load.spritesheet("sprites", gameConfig.spritesheetSettings.src, {
      frameWidth: gameConfig.spritesheetSettings.frameWidth,
      frameHeight: gameConfig.spritesheetSettings.frameHeight
    });
  },
  create: function() {
    cursors = this.input.keyboard.createCursorKeys();
    character = this.physics.add.image(
      gameConfig.width / 2,
      gameConfig.height / 2,
      "sprites",
      gameConfig.spritesheetSettings.characterTile
    );
  },
  update: function() {
    const { velocity } = character.body;
    if (cursors.space.isDown && keyPressed === false) {
      keyPressed = true;
      character.setVelocityY(-150);
    } else if (cursors.space.isUp && keyPressed === true) {
      keyPressed = false;
    }
  }
});
