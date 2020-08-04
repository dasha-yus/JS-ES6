import {roads} from './modules/roads.js';
import {VillageState, runRobot, randomPick, randomRobot} from './modules/state.js';
import {mailRoute, findRoute} from './modules/route.js';
import {routeRobot, goalOrientedRobot} from './modules/robots.js';

//Measuring a robot

function countSteps(state, robot, memory) {
  for (var i = 0;; i++) {
    if (state.parcels.length == 0) return i;
    var action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  var total1 = 0;
  var total2 = 0;
  const numOfTasks = 100;
  for (var i = 0; i < numOfTasks; i++) {
    var state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  }
  
  console.log(`The average for Robot1 is ${total1 / numOfTasks}`);
  console.log(`The average for Robot2 is ${total2 / numOfTasks}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);