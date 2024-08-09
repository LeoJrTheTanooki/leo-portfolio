import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameText: Phaser.GameObjects.Text;
  player: Phaser.GameObjects.Image;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  matter: Phaser.Events.EventEmitter;

  constructor() {
    super("Game");
  }

  create() {
    this.cursors = this.input.keyboard?.createCursorKeys()!;
    this.background = this.add.image(0, 0, 'background');
    this.matter.world.setBounds(0, 0, 500, 200);
    this.player = this.add.image(0, 0, "leo");
    
    this.camera = this.cameras.main.startFollow(this.player);
    this.camera.setBackgroundColor(0x00ff00);


    EventBus.emit("current-scene-ready", this);
  }

  update() {
    if (this.cursors.right.isDown) {
      this.player.x += 1;
    }
    if (this.cursors.left.isDown) {
      this.player.x -= 1;
    }
    if (this.cursors.down.isDown) {
      this.player.y += 1;
    }
    if (this.cursors.up.isDown) {
      this.player.y -= 1;
    }
  }

  changeScene() {
    this.scene.start("GameOver");
  }
}
