import MainMenu from "./scenes/MainMenu";
import Game from "./scenes/Game";
import GameOver from "./scenes/GameOver";
import spritesheet from "./assets/spritesheet.png";

const gameConfig = {
  width: 800,
  height: 600,
  scene: [MainMenu, Game, GameOver],
  spritesheetSettings: {
    src: spritesheet,
    frameWidth: 23.1,
    frameHeight: 23.1,
    characterTile: 86
  }
};

export default gameConfig;
