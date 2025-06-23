/**
 * Crée une fonction inverser<T> qui prend un tableau de type T[] et retourne le même tableau à l’envers.
Crée un type générique Paire<T, U> qui contient deux propriétés : premier et second.
Crée une variable de type Paire<string, number>.

 */

// function inverser<T>(param: T[]): T[]{
//     let temp: T[] = [];

//     for(let i=0; i<param.length; i++){
//         temp[i] = param[param.length - (1+i)];
//     }
      
        // param = temp;
//     return temp;
// }

function inverser<T>(param: T[]): T[]{
    return [...param].reverse();
}

let tab1: number[] = [10, 20, 30, 5, 17];
let tab2: string[] = ["Toto", "Tata", "Titi"];

let tab1Inverser: number[] = inverser(tab1);

type Paire<T, S> = {
    premier: T,
    second: S
};

let p: Paire<number, boolean> = {
    premier: 10,
    second: true
};

let p2: Paire<string, {nom: string, prenom?: string}> = {
    premier: "Valeur 1",
    second: {nom: "Toto"}
}