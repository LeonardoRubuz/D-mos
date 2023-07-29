// First exercise : while loop

function loopTriangle(){
    let condition = 1;
    let triangle = "#"
    while (condition <= 7) {
        console.log(triangle);
        triangle += '#';
        condition += 1;
    }
}
//loopTriangle()

// Second exercise : Fizzbuzz
function fizzBuzz(){
    for (let index = 0; index <= 100; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log(index + ' FizzBuzz');
        }
        else if(index % 5 === 0){
            console.log(index + ' Buzz');
        }
        else if(index % 3 === 0){
            console.log(index + ' Fizz');
        }
        else{
            continue;
        };
    }
}
fizzBuzz()