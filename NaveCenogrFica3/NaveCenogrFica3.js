/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NaveCenogrFica3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("alien car", "./NaveCenogrFica3/costumes/alien car.png", {
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
      yield* this.wait(5);
      this.goto(-212, 96);
      this.visible = true;
      yield* this.glide(1, -122, 110);
      yield* this.glide(1, -47, 120);
      yield* this.glide(1, 58, 87);
      yield* this.glide(1, 58, 33);
      this.visible = false;
      yield;
    }
  }
}
