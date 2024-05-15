import Phaser from 'phaser';

import Bootloader from './bootloader.js';
import MainMenu from './scenes/MainMenu.js';
import SceneA from './scenes/sceneA.js';
import UIScene from './scenes/ui.js';
import Gameover from './scenes/Gameover.js';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "container",
  backgroundColor: '#d3d3d3',
  scene: [Bootloader, MainMenu, SceneA, UIScene, Gameover],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
   
  }
}
new Phaser.Game(config);
