"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compte_1 = require("./Compte");
class CompteAvecDec extends Compte_1.default {
    decouvert;
    constructor(numero, montant, titulaire, decouvert) {
        super(numero, montant, titulaire);
        this.decouvert = decouvert;
    }
    retirer(montant) {
        if (this.solde + this.decouvert >= montant) {
            this.solde -= montant;
        }
    }
    presentation() {
        return `${super.presentation()} découvert autorisé: ${this.decouvert}`;
    }
}
exports.default = CompteAvecDec;
