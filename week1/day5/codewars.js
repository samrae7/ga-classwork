console.log('Hi Sam');

var nArray = [];
var output = ''

makeArray(10);
pattern(nArray);

 //write something that gives me the first line of the pattern



function makeArray(n){
  for (i=n; i>0; i-=1) {
    nArray.push(i);
       // Happy Coding ^_^
     }
  console.log(nArray);
  }


function pattern(array) {
  array.forEach(function printNumber(element, index, arr){
    console.log(element);
    output = output +element;
    console.log(output)
  });

}

//You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
