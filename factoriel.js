function factoriel(x) {
    let i = 1; // Variable d'itération
    let fact = i; // Factoriel initial
    while (i <= x) { // Tant que la variable d'itération est inférieure à 
        fact *= i;
        i++;
    }
    console.log('Le factoriel de '+ x + ' est ' + fact);
}


//factoriel(0)

function productSign(n, m) {
    if (m*n >0) {
        console.log("1");
    } else if( m*n === 0) {
        console.log('0');
    }else{
        console.log('-1');
    };
  }
  
//productSign(10, -1)
function multiple_3_5(n) {
    // corps de la fonction ici
    let somme = 0;
    for (let index = 1; index < n; index++) {
        
        if (index % 3 === 0 || index % 5 === 0) {
            somme += index;
        }
        
    }
    console.log("La somme est de " + somme);
    return n;
  }
  
//multiple_3_5(9)

function nParite(n, parite) {
    let somme = 0;
    let limite = 0;
    if (parite === true) {
        for (let index = 0; limite < n ; index++) {
            if (index % 2 ===0) {
                somme += index;
                limite += 1;
            }
        
        }
    } else {
        for (let index = 0; limite < n; index++) {
            if (index % 2 !==0) {
                somme += index;
                limite += 1;
                //console.log("index :",index);
               // console.log("limite :",limite);
            }
            
        }
    }
    //return somme;
    //console.log(somme);
  }

//nParite(4, true)

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop() // Removes last element

console.log(secretMessage.length);

secretMessage.push(["to", "Program"])

secretMessage.splice()