import { EventBus } from "../EventBus";
import { Scene } from "phaser";
import localFont from "next/font/local";

const appleKid = localFont({ src: "../fonts/Apple-Kid.woff" });

// class Racecar extends Phaser.Physics.Arcade.Image

class Player extends Phaser.Physics.Arcade.Sprite {

}

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameText: Phaser.GameObjects.Text;
  player: Phaser.GameObjects.Sprite;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  layer: any;
  // matter: Phaser.Events.EventEmitter;

  constructor() {
    super("Game");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tiles = map.addTilesetImage("MyRoomTileset", "home-tiles");
    this.cursors = this.input.keyboard?.createCursorKeys()!;
    // this.background = this.add.image(0, 0, 'background');
    this.layer = map.createLayer(0, tiles!, 0, 0);
    // this.matter.world.setBounds(0, 0, 500, 200);
    this.player =
      // this.add.image(80, 95, "leo").setOrigin(0.5, 0.85);
      this.add.sprite(80, 95, "leo").setOrigin(0.5, 0.85).play("down");

    this.camera = this.cameras.main.startFollow(this.player);
    this.camera.setBackgroundColor(0x000000);

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("leo", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "down-left",
      frames: this.anims.generateFrameNumbers("leo", { start: 2, end: 3 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("leo", { start: 4, end: 5 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "up-left",
      frames: this.anims.generateFrameNumbers("leo", { start: 6, end: 7 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("leo", { start: 8, end: 9 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "up-right",
      frames: this.anims.generateFrameNumbers("leo", { start: 10, end: 11 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("leo", { start: 12, end: 13 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "down-right",
      frames: this.anims.generateFrameNumbers("leo", { start: 14, end: 15 }),
      frameRate: 5,
      repeat: -1,
    });

    this.add.text(0, 0, 'Hello World', appleKid.style);

    EventBus.emit("current-scene-ready", this);

    this.player.getBounds()
  }

  update() {
    let oldPos = { x: this.player.x, y: this.player.y };
    let newPos = { x: this.player.x, y: this.player.y };


    if (this.cursors.right.isDown) {
      newPos.x += 1;
      const tile = this.layer.getTileAtWorldXY(newPos.x, newPos.y, true);
      if (tile != null && tile.index == 2) {
        this.player.x = newPos.x;
      }
    }
    if (this.cursors.left.isDown) {
      newPos.x -= 1;
      const tile = this.layer.getTileAtWorldXY(newPos.x, newPos.y, true);
      if (tile != null && tile.index == 2) {
        this.player.x = newPos.x;
      }
    }
    if (this.cursors.down.isDown) {
      newPos.y += 1;
      const tile = this.layer.getTileAtWorldXY(newPos.x, newPos.y, true);
      if (tile != null && tile.index == 2) {
        this.player.y = newPos.y;
      }
    }
    if (this.cursors.up.isDown) {
      newPos.y -= 1;
      const tile = this.layer.getTileAtWorldXY(newPos.x, newPos.y, true);
      if (tile != null && tile.index == 2) {
        this.player.y = newPos.y;
      }
    }

    
    let direction = {
      x: newPos.x - oldPos.x,
      y: newPos.y - oldPos.y,
    };
    if (direction.x == 0 && direction.y == 1) {
      this.player.play("down", true);
    } else if (direction.x == 1 && direction.y == 1) {
      this.player.play("down-right", true);
    } else if (direction.x == 1 && direction.y == 0) {
      this.player.play("right", true);
    } else if (direction.x == 1 && direction.y == -1) {
      this.player.play("up-right", true);
    } else if (direction.x == 0 && direction.y == -1) {
      this.player.play("up", true);
    } else if (direction.x == -1 && direction.y == -1) {
      this.player.play("up-left", true);
    } else if (direction.x == -1 && direction.y == 0) {
      this.player.play("left", true);
    } else if (direction.x == -1 && direction.y == 1) {
      this.player.play("down-left", true);
    } else {
      this.player.play(this.player.anims.getName());
      this.player.stop();
    }
  }

  changeScene() {
    this.scene.start("GameOver");
  }
}
