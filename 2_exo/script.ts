
function carre(n: number): number{
    return n*n;
}


console.log( carre(2) );
console.log( carre(9) );

function afficherInfo(prenom: string, age?: number): void{
    let s:string = `prenom ${prenom}`;

    if( age ){
        s+= ` age ${age} ans`;
    }   
    console.log( s );
}

afficherInfo("Toto");
afficherInfo("Tata", 30);


const division = (a: number, b: number): number => {
    if (b == 0){
        throw new Error("pas de division par zéro");
    }
    return a/b
}; 

console.log( division(5, 2) );

const soustraction = (a: number, b: number): number => a-b; 
console.log( soustraction(7, 3) );



/**
 * ecrire une fonction qui prend un tableau d'entier 
 * et retourne le carré de la somme des éléments
 */

// function carreSomme(liste:number[]):number{
//     return carre( liste.reduce( (somme, val) => somme+val, 0 ) );
// }

const carreSomme = (liste:number[]):number => 
    carre( liste.reduce( (somme, val) => somme+val, 0 ) );


console.log( carreSomme([10, 20, 30]) );
