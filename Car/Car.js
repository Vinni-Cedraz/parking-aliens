/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Car extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sprite", "./Car/costumes/sprite.png", { x: 276, y: 241 })
    ];

    this.sounds = [
      new Sound("media", "./Car/sounds/media.mp3"),
      new Sound("Toy Honk", "./Car/sounds/Toy Honk.wav"),
      new Sound("media2", "./Car/sounds/media2.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.goto(0, -84);
    while (true) {
      if (this.touching(Color.rgb(68, 206, 255))) {
        yield* this.playSoundUntilDone("Toy Honk");
        this.stage.vars.score = 0;
      } else {
        if (this.stage.vars.score < 1000) {
          this.stage.costumeNumber += 1;
          yield* this.wait(0.01);
          this.stage.vars.score += 1;
          if (this.stage.vars.score > this.stage.vars.highScore) {
            this.stage.vars.highScore = this.stage.vars.score;
          }
        }
      }
      yield;
    }
  }

  *whenKeyLeftArrowPressed() {
    yield* this.glide(0.25, -50, -84);
  }

  *whenKeyRightArrowPressed() {
    yield* this.glide(0.25, 50, -84);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.playSoundUntilDone("media");
      yield* this.playSoundUntilDone("media2");
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.score > 999) {
        this.stage.costumeNumber += 1;
        this.stage.vars.score += 1;
        if (this.stage.vars.score > this.stage.vars.highScore) {
          this.stage.vars.highScore = this.stage.vars.score;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(3);
    yield* this.sayAndWait("Well... at least the music is good", 2);
  }

  *whenGreenFlagClicked5() {
    this.stage.watchers.score.visible = true;
  }

  *whenGreenFlagClicked6() {
    this.stage.watchers.highScore.visible = true;
  }
}
