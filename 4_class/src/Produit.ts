class Produit{
    private readonly _id: number;
    private _prix: number;
    private _libelle:  string;
    private _stock: number;

    constructor(id: number, prix: number, libelle: string, stock: number){
        this._id = id;
        this._libelle = libelle;
        this._stock = stock;

        if( prix < 50 || prix > 500 ){
            throw new Error("Le prix doit être [50...500]");
        }

        this._prix = prix;
    }

    get id(): number{ return this._id; }
    get prix():number{ return this._prix; }
    get libelle(): string{ return this._libelle; }
    get stock(): number{ return this._stock; }

    set libelle(libelle: string){ this._libelle = libelle; }
    set prix(prix: number){ 
        if( prix >= 50 && prix <= 500 )
            this._prix = prix; 
    }
    
}

export default Produit;