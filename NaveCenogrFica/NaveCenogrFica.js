/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NaveCenogrFica extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("alien car", "./NaveCenogrFica/costumes/alien car.png", {
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
      this.goto(207, 113);
      this.visible = true;
      yield* this.glide(1, -6, 112);
      yield* this.glide(1, 121, 47);
      yield* this.glide(1, 60, 38);
      this.visible = false;
      yield* this.wait(10);
      yield;
    }
  }
}
