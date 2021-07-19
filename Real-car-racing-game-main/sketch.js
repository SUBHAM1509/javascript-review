function setup() {



var name = 'shubham'

switch(name){
  case 'shubham':
    console.log('condition1');
    break;

    case 'Shubham':
      console.log('condition2');
      break;
  default:
  console.log('none of above case matced')
}



for(var i =0; i<=5; i++) {
  console.log(i)
}

// var paddle = new object();

// paddle.length=16;
// paddle.showLegth=function() {
//   console.log(paddle.length)
// }

var i = 0;
while(i<=5){
  console.log(i);
  i = i+1;
}

circumference(10);

}

function draw() {

}


function circumference(radius) {
var circumference = 2*3.14*radius
return circumference;
}