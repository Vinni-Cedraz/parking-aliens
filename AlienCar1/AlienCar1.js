/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AlienCar1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AlienCar1/costumes/costume1.svg", {
        x: 93.5,
        y: 68
      })
    ];

    this.sounds = [new Sound("pop", "./AlienCar1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.x2 = 2;
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.visible = false;
    this.size = 8;
    this.goto(0, 0);
    yield* this.wait(5);
    this.visible = true;
    while (true) {
      yield* this.park();
      yield* this.reset();
      yield;
    }
  }

  *park() {
    this.vars.x2 = this.random(1, 2);
    if (this.vars.x2 == 1) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["GoalLeft"].y - this.y,
          this.sprites["GoalLeft"].x - this.x
        )
      );
      for (let i = 0; i < 30; i++) {
        this.move(0.3);
        this.size += 0.2;
        yield;
      }
      for (let i = 0; i < 40; i++) {
        this.move(1);
        this.size += 0.5;
        yield;
      }
      for (let i = 0; i < 20; i++) {
        this.move(3);
        this.size += 1;
        yield;
      }
    } else {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["GoalRight"].y - this.y,
          this.sprites["GoalRight"].x - this.x
        )
      );
      for (let i = 0; i < 30; i++) {
        this.move(0.3);
        this.size += 0.2;
        yield;
      }
      for (let i = 0; i < 40; i++) {
        this.move(1);
        this.size += 0.5;
        yield;
      }
      for (let i = 0; i < 20; i++) {
        this.move(3);
        this.size += 1;
        yield;
      }
    }
  }

  *reset() {
    this.visible = false;
    yield* this.wait(1.2);
    this.size = 10;
    this.goto(0, 0);
    this.visible = true;
  }
}
