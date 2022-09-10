/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GoalRight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tunnel", "./GoalRight/costumes/tunnel.svg", {
        x: 3.4999999999999716,
        y: 2.649999618530302
      })
    ];

    this.sounds = [new Sound("pop", "./GoalRight/sounds/pop.wav")];

    this.triggers = [];
  }
}
