/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position


const endX = 39; 
const endY = 17;

let Tx = initialTx;
let Ty = initialTy;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    if ((lightX - Tx != 0) && (lightY - Ty != 0)){
        let diffX = lightX - Tx;
        let diffY = lightY - Ty;
        if (diffX == 0 && diffY < 0){
          Ty += 1;
          console.log('N');
        }
        else if (diffX > 0 && diffY==0){
          Tx-=1;
          console.log('E');
        }
        else if (diffX == 0 && diffY > 0) {
          Ty-=1;
          console.log('S');
        }
        else if (diffX<0 && diffY==0){
          Tx+=1;
          console.log('W');
        }
        else if (diffX > 0 && diffY < 0) {
          Tx-=1;
          Ty+=1;
          console.log('NE');
        }
        else if (diffX > 0 && diffY > 0) {
          Tx-=1;
          Ty-=1;
          console.log('SE');
        }
        else if (diffX < 0 && diffY > 0) {
          Tx+=1;
          Ty-=1;
          console.log('SW');
        }
        else if (diffX < 0 && diffY < 0) {
          Tx+=1;
          Ty+=1;
          console.log('NW');
        }
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    //console.log('SE');
}
