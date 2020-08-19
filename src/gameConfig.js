import MainMenu from "./scenes/MainMenu";
import Game from "./scenes/Game";
import GameOver from "./scenes/GameOver";

const gameConfig = {
  width: 800,
  height: 600,
  scene: [MainMenu, Game, GameOver]
};

export default gameConfig;
