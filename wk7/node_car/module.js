var car {
  var color = 'red'
  var convertible = true
  var speed = 0
  accelerate: accelerate;
  decelerate:decelerate
}

function accelerate(){
  currentspeed = speed +1;
  return 'old speed: '+ speed + ', new speed: ' + currentspeed;
}

function decelerate = function() {
  currentspeed = speed - 1
  return 'old speed: '+ speed + ', new speed: ' + currentspeed;
}

car.accelerate();
car.decelerate();

module.exports.car = car
