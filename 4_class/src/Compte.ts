class Compte{

    // private numero: number;
    // private solde: number;
    // private titulaire: string;

    constructor(private numero: number, private solde: number, private titulaire: string){}

    presentation(): void {
        console.log(
            `titulaire: ${this.titulaire}, solde: ${this.solde}`
        );        
    }

    getSolde(): number{ return this.solde;}
    getTitulaire(): string{ return this.titulaire; }
    getNumero(): number{ return this.numero; }

    setSolde(montant: number): void{
        if( montant >= 0 )
            this.solde = montant;
    }

    setTitulaire(titulaire: string): void{
        this.titulaire = titulaire;
    }

    deposer(montant: number): void{
        if( montant <= 0){
            throw new Error("Monatant doit être supérieur à zéro");
        }
        this.solde += montant;
    }

    retirer(montant: number){
        if( montant <= 0){
            throw new Error("Monatant doit être supérieur à zéro");
        }
        if( montant > this.solde ){
            throw new Error("Fond insuffisant");
        }

        this.solde -= montant; // this.solde = this.solde - montant;
    }

    virerVers(montant: number, dest: Compte){
         if( montant <= 0){
            throw new Error("Monatant doit être supérieur à zéro");
        }

        this.retirer(montant);
        dest.deposer(montant);
    }
}


export default Compte;

