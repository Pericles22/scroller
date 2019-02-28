import Phaser from 'phaser'
import pokeSprites from '../assets/pokeboy-sprites.png'

const config = {
  type: Phaser.AUTO,
  width: 256,
  height: 192,
  parent: "game-container",
  pixelArt: true,
  zoom: 3,
  backgroundColor: "#333",
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 }
    }
  }
};

new Phaser.Game(config)

function preload() {
  console.log('this', this)
  this.load.spritesheet('pokeboy', pokeSprites, { frameWidth: 1000, frameHeight: 1000 })
}

function create() {
  this.add.sprite(50, 50, 'pokeboy', 0);
}

function update() {
}
