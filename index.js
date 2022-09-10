import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Car from "./Car/Car.js";
import GoalLeft from "./GoalLeft/GoalLeft.js";
import GoalRight from "./GoalRight/GoalRight.js";
import AlienCar2 from "./AlienCar2/AlienCar2.js";
import AlienCar1 from "./AlienCar1/AlienCar1.js";
import AlienCar3 from "./AlienCar3/AlienCar3.js";
import AlienCar4 from "./AlienCar4/AlienCar4.js";
import AlienCar5 from "./AlienCar5/AlienCar5.js";
import NaveCenogrFica from "./NaveCenogrFica/NaveCenogrFica.js";
import NaveCenogrFica2 from "./NaveCenogrFica2/NaveCenogrFica2.js";
import NaveCenogrFica3 from "./NaveCenogrFica3/NaveCenogrFica3.js";
import NaveCenogrFica4 from "./NaveCenogrFica4/NaveCenogrFica4.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 16 });

const sprites = {
  Car: new Car({
    x: -50,
    y: -84,
    direction: 90,
    costumeNumber: 1,
    size: 27,
    visible: true,
    layerOrder: 1
  }),
  GoalLeft: new GoalLeft({
    x: -185.15971858380084,
    y: -174.36409571898784,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 3
  }),
  GoalRight: new GoalRight({
    x: 204.18458703643006,
    y: -174.45636108796398,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 2
  }),
  AlienCar2: new AlienCar2({
    x: 0,
    y: 0,
    direction: -133.28006435431467,
    costumeNumber: 1,
    size: 8,
    visible: false,
    layerOrder: 7
  }),
  AlienCar1: new AlienCar1({
    x: 82.87097029500688,
    y: -70.80538314538012,
    direction: 130.51074733161033,
    costumeNumber: 1,
    size: 56.00000000000001,
    visible: false,
    layerOrder: 8
  }),
  AlienCar3: new AlienCar3({
    x: 0,
    y: 0,
    direction: -133.28006435431467,
    costumeNumber: 1,
    size: 8,
    visible: false,
    layerOrder: 6
  }),
  AlienCar4: new AlienCar4({
    x: 0,
    y: 0,
    direction: 130.51074733161033,
    costumeNumber: 1,
    size: 8,
    visible: false,
    layerOrder: 5
  }),
  AlienCar5: new AlienCar5({
    x: 0,
    y: 0,
    direction: -133.28006435431467,
    costumeNumber: 1,
    size: 8,
    visible: false,
    layerOrder: 4
  }),
  NaveCenogrFica: new NaveCenogrFica({
    x: 60,
    y: 38,
    direction: 101.53694466143406,
    costumeNumber: 1,
    size: 5,
    visible: false,
    layerOrder: 9
  }),
  NaveCenogrFica2: new NaveCenogrFica2({
    x: -55,
    y: 40,
    direction: 101.53694466143406,
    costumeNumber: 1,
    size: 5,
    visible: false,
    layerOrder: 10
  }),
  NaveCenogrFica3: new NaveCenogrFica3({
    x: 58,
    y: 45.96,
    direction: 101.53694466143406,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 11
  }),
  NaveCenogrFica4: new NaveCenogrFica4({
    x: -64,
    y: 28,
    direction: 101.53694466143406,
    costumeNumber: 1,
    size: 5,
    visible: false,
    layerOrder: 12
  }),
  Sprite1: new Sprite1({
    x: 50,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 27.77777777777778,
    visible: false,
    layerOrder: 13
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
