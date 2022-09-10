/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NaveCenogrFica4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("alien car", "./NaveCenogrFica4/costumes/alien car.png", {
        x: 259,
        y: 240.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.visible = false;
    while (true) {
      if (this.stage.vars.score > 1500) {
        yield* this.wait(12);
        this.goto(212, 131);
        this.visible = true;
        yield* this.glide(1, 212, 131);
        yield* this.glide(1, -235, 128);
        yield* this.glide(1, 227, 95);
        yield* this.glide(1, 206, 36);
        yield* this.glide(1, 102, 97);
        yield* this.glide(1, -110, 77);
        yield* this.glide(1, -64, 28);
        this.visible = false;
      }
      yield;
    }
  }
}
