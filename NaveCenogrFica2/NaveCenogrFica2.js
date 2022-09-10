/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NaveCenogrFica2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("alien car", "./NaveCenogrFica2/costumes/alien car.png", {
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
      if (this.stage.vars.score > 875) {
        yield* this.wait(25);
        this.goto(-215, 115);
        this.visible = true;
        yield* this.glide(1, -156, 53);
        yield* this.glide(1, -117, 67);
        yield* this.glide(1, -96, 51);
        yield* this.glide(1, -55, 40);
        this.visible = false;
      }
      yield;
    }
  }
}
