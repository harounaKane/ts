function carre(n) {
    return n * n;
}
console.log(carre(2));
console.log(carre(9));
function afficherInfo(prenom, age) {
    var s = "prenom ".concat(prenom);
    if (age) {
        s += " age ".concat(age, " ans");
    }
    console.log(s);
}
afficherInfo("Toto");
afficherInfo("Tata", 30);
var division = function (a, b) {
    if (b == 0) {
        throw new Error("pas de division par zéro");
    }
    return a / b;
};
console.log(division(5, 2));
var soustraction = function (a, b) { return a - b; };
console.log(soustraction(7, 3));
/**
 * ecrire une fonction qui prend un tableau d'entier
 * et retourne le carré de la somme des éléments
 */
// function carreSomme(liste:number[]):number{
//     return carre( liste.reduce( (somme, val) => somme+val, 0 ) );
// }
var carreSomme = function (liste) {
    return carre(liste.reduce(function (somme, val) { return somme + val; }, 0));
};
console.log(carreSomme([10, 20, 30]));


let personne = {
    age: 30
};

personne.prenom = "toto"

console.log(personne);

personne.age = "toto"
console.log(personne);
