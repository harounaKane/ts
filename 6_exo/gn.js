/**
 * Crée une fonction inverser<T> qui prend un tableau de type T[] et retourne le même tableau à l’envers.
Crée un type générique Paire<T, U> qui contient deux propriétés : premier et second.
Crée une variable de type Paire<string, number>.

 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function inverser<T>(param: T[]): T[]{
//     let temp: T[] = [];
//     for(let i=0; i<param.length; i++){
//         temp[i] = param[param.length - (1+i)];
//     }
// param = temp;
//     return temp;
// }
function inverser(param) {
    var temp = __spreadArray([], param, true);
    return temp.reverse();
}
var tab1 = [10, 20, 30, 5, 17];
var tab2 = ["Toto", "Tata", "Titi"];
console.log(tab1);
console.log(inverser(tab1));
console.log(tab1);
