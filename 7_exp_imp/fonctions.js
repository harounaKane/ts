"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sommeTab;
exports.somme = somme;
exports.taillePrenom = taillePrenom;
function somme(a, b) { return a + b; }
function taillePrenom(prenom) { return prenom.length; }
function sommeTab(tab) {
    return tab.reduce(function (ac, val) { return ac + val; }, 0);
}
