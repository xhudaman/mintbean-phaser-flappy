import Phaser from "phaser";
import gameConfig from "./gameConfig";

const config = {
  type: Phaser.AUTO,
  width: gameConfig.width,
  height: gameConfig.height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 100, x: 0 }
    }
  },
  scene: gameConfig.scene
};

const game = new Phaser.Game(config);
