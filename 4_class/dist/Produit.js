"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produit {
    _id;
    _prix;
    _libelle;
    _stock;
    constructor(id, prix, libelle, stock) {
        this._id = id;
        this._libelle = libelle;
        this._stock = stock;
        if (prix < 50 || prix > 500) {
            throw new Error("Le prix doit être [50...500]");
        }
        this._prix = prix;
    }
    get id() { return this._id; }
    get prix() { return this._prix; }
    get libelle() { return this._libelle; }
    get stock() { return this._stock; }
    set libelle(libelle) { this._libelle = libelle; }
    set prix(prix) {
        if (prix >= 50 && prix <= 500)
            this._prix = prix;
    }
}
exports.default = Produit;
