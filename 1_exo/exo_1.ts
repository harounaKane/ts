/*
1. Déclare une variable "prenom" de type string et donne-lui ton prénom
2. Déclare une variable "age" de type number
3. Crée une fonction "retourneInfos" qui retourne ces deux infos
4. Crée un tableau de nombres
5. Crée un tuple [string, number] pour une personne
*/

let prenom: string = "Azzedine";
let age:number = 20;
let nombre: Array<number> = [10, 30, 5, 12]; // number[]
let personne:[string, number] = ["toto", 12];

function somme():number{
    return nombre.reduce( (ac, n) => ac+n, 0 );
}

function retourneInfos(): string{
    return `
    prénom ${prenom} 
    age: ${age}`;
}

console.log( somme() );
