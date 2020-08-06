import {connections, storageFor, Network, $storage, Node, ser,
        network, bigOak, everywhere, defineRequestType} from "./modules/crow-tech.js";
import {storage, Timeout, request, requestType, availableNeighbors,
        sendGossip, broadcastConnections, findRoute, routeRequest,
        findInStorage, findInRemoteStorage, Group, anyStorage, chicks} from "./modules/additional.js";

async function locateScalpel(nest) {
  var cur = nest.name;
  for (;;) {
    var next = await anyStorage(nest, cur, "scalpel");
    if (next == cur) return cur;
    cur = next;
  }
}

function locateScalpel2(nest) {
  function loop(cur) {
    return anyStorage(nest, cur, "scalpel").then(next => {
      if (next == cur) return cur;
      else return loop(next);
    });
  }
  
  return loop(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);
// → Butcher's Shop