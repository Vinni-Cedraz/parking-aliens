/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AlienCar4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AlienCar4/costumes/costume1.svg", {
        x: 93.5,
        y: 68
      })
    ];

    this.sounds = [new Sound("pop", "./AlienCar4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.x4 = 2;
  }

  *park() {
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

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    while (true) {
      this.visible = false;
      this.goto(0, 0);
      this.size = 8;
      if (
        Math.hypot(
          this.sprites["AlienCar3"].x - this.x,
          this.sprites["AlienCar3"].y - this.y
        ) > 8 &&
        Math.hypot(
          this.sprites["AlienCar3"].x - this.x,
          this.sprites["AlienCar3"].y - this.y
        ) < 11
      ) {
        if (
          Math.hypot(
            this.sprites["AlienCar2"].x - this.x,
            this.sprites["AlienCar2"].y - this.y
          ) > 8 &&
          Math.hypot(
            this.sprites["AlienCar2"].x - this.x,
            this.sprites["AlienCar2"].y - this.y
          ) < 58
        ) {
          if (this.stage.vars.score > 1450) {
            this.visible = true;
            yield* this.park();
          }
        }
      }
      yield;
    }
  }
}
