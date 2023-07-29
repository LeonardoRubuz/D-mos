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