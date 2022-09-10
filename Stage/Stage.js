/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "bizarre-beasties-snow3",
        "./Stage/costumes/bizarre-beasties-snow3.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow2",
        "./Stage/costumes/bizarre-beasties-snow2.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow4",
        "./Stage/costumes/bizarre-beasties-snow4.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow7",
        "./Stage/costumes/bizarre-beasties-snow7.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow5",
        "./Stage/costumes/bizarre-beasties-snow5.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow9",
        "./Stage/costumes/bizarre-beasties-snow9.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow11",
        "./Stage/costumes/bizarre-beasties-snow11.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow16",
        "./Stage/costumes/bizarre-beasties-snow16.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow6",
        "./Stage/costumes/bizarre-beasties-snow6.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow12",
        "./Stage/costumes/bizarre-beasties-snow12.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow8",
        "./Stage/costumes/bizarre-beasties-snow8.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow21",
        "./Stage/costumes/bizarre-beasties-snow21.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow20",
        "./Stage/costumes/bizarre-beasties-snow20.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow22",
        "./Stage/costumes/bizarre-beasties-snow22.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow10",
        "./Stage/costumes/bizarre-beasties-snow10.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow26",
        "./Stage/costumes/bizarre-beasties-snow26.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow27",
        "./Stage/costumes/bizarre-beasties-snow27.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow28",
        "./Stage/costumes/bizarre-beasties-snow28.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow29",
        "./Stage/costumes/bizarre-beasties-snow29.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow31",
        "./Stage/costumes/bizarre-beasties-snow31.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow33",
        "./Stage/costumes/bizarre-beasties-snow33.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow32",
        "./Stage/costumes/bizarre-beasties-snow32.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow34",
        "./Stage/costumes/bizarre-beasties-snow34.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow37",
        "./Stage/costumes/bizarre-beasties-snow37.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow38",
        "./Stage/costumes/bizarre-beasties-snow38.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow39",
        "./Stage/costumes/bizarre-beasties-snow39.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow40",
        "./Stage/costumes/bizarre-beasties-snow40.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow44",
        "./Stage/costumes/bizarre-beasties-snow44.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow45",
        "./Stage/costumes/bizarre-beasties-snow45.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow46",
        "./Stage/costumes/bizarre-beasties-snow46.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow13",
        "./Stage/costumes/bizarre-beasties-snow13.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "bizarre-beasties-snow14",
        "./Stage/costumes/bizarre-beasties-snow14.png",
        { x: 480, y: 360 }
      )
    ];

    this.sounds = [
      new Sound("media", "./Stage/sounds/media.mp3"),
      new Sound("media2", "./Stage/sounds/media2.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 2;
    this.vars.score = 277;
    this.vars.highScore = 3292;
    this.vars.pause = "true";

    this.watchers.score = new Watcher({
      label: "score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 249,
      y: 168
    });
    this.watchers.highScore = new Watcher({
      label: "high score",
      style: "normal",
      visible: true,
      value: () => this.vars.highScore,
      x: 577,
      y: 173
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.95);
      yield;
    }
  }
}
