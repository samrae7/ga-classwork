var number = 7;
// not exported hence not accessible in app.js

module.exports.name = 'Alex'

module.exports.arr = [1,2,3]

module.exports.getNumber = function(){
  console.log("get the number. ", number);
 
}

console.log('End of module file');