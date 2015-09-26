var my = require('./module.js')

console.log('Number is ' + typeof number)

console.log('Name is ', my.name)
// needs the my. because everything is wrapped in my

console.log('The number is:' + my.getNumber());
// This is an example of a closure. The called function retains the value from the global scope of the other file. Even though we've exported a function we've made the variables accesible to the thing that imported it ( even though we don't have access to the variable directly). We could have another variable in this file with the same name (number) and it woouldn't conflict. That's why closures are used.

console.log('The array contains ' + my.arr.length + ' elements')

console.log(my)