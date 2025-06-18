/*
1. Déclare une variable "prenom" de type string et donne-lui ton prénom
2. Déclare une variable "age" de type number
3. Crée une fonction "retourneInfos" qui retourne ces deux infos
4. Crée un tableau de nombres
5. Crée un tuple [string, number] pour une personne
*/
var prenom = "Azzedine";
var age = 20;
var nombre = [10, 30, 5, 12];
var personne = ["toto", 12];
function somme() {
    return nombre.reduce(function (ac, n) { return ac + n; }, 0);
}
function retourneInfos() {
    return "\n    pr\u00E9nom ".concat(prenom, " \n    age: ").concat(age);
}
console.log(somme());
