"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Compte {
    numero;
    solde;
    titulaire;
    // private numero: number;
    // private solde: number;
    // private titulaire: string;
    constructor(numero, solde, titulaire) {
        this.numero = numero;
        this.solde = solde;
        this.titulaire = titulaire;
    }
    presentation() {
        console.log(`titulaire: ${this.titulaire}, solde: ${this.solde}`);
    }
    getSolde() { return this.solde; }
    getTitulaire() { return this.titulaire; }
    getNumero() { return this.numero; }
    setSolde(montant) {
        if (montant >= 0)
            this.solde = montant;
    }
    setTitulaire(titulaire) {
        this.titulaire = titulaire;
    }
    deposer(montant) {
        if (montant <= 0) {
            throw new Error("Monatant doit être supérieur à zéro");
        }
        this.solde += montant;
    }
    retirer(montant) {
        if (montant <= 0) {
            throw new Error("Monatant doit être supérieur à zéro");
        }
        if (montant > this.solde) {
            throw new Error("Fond insuffisant");
        }
        this.solde -= montant; // this.solde = this.solde - montant;
    }
    virerVers(montant, dest) {
        if (montant <= 0) {
            throw new Error("Monatant doit être supérieur à zéro");
        }
        this.retirer(montant);
        dest.deposer(montant);
    }
}
exports.default = Compte;
