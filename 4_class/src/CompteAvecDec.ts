import Compte from "./Compte";
import Produit from "./Produit";

class CompteAvecDec extends Compte{

    decouvert: number;

    constructor(numero: number, montant: number, titulaire: string, decouvert: number){
        super(numero, montant, titulaire);
        this.decouvert = decouvert;
    }

    retirer(montant: number): void {
        if( this.solde + this.decouvert >= montant ){
            this.solde -= montant;
        }
    }

    presentation(): string {
        return `${super.presentation()} découvert autorisé: ${this.decouvert}`;
        
    }

}

export default CompteAvecDec;