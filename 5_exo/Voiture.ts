class Voiture{

    constructor(private _marque: string, private _vitesse: number){
    }

    accelerer(): void{
        this._vitesse += 10;
    }

    decelerer(): void{
        if( this._vitesse > 0 ){
            this._vitesse -= 10;
        }
    }

    get marque(): string{ return this._marque; }
    get vitesse(): number{ return this._vitesse; }

    set marque(marque: string){
        this._marque = marque;
     }

    set vitesse(vitesse: number){
        this._vitesse = vitesse;
    }
}

const voiture = new Voiture("Audi", 0);

// voiture.accelerer();
// console.log(voiture.vitesse);
// voiture.decelerer();
// console.log(voiture.vitesse);
// voiture.decelerer();
// console.log(voiture.vitesse);


class VoitureSport extends Voiture{
    turbo(){
        this.vitesse += 50;
    }
}

// const vs = new VoitureSport("Ferrari", 0);

// vs.turbo();

// console.log(vs.vitesse);
// vs.decelerer();

// console.log(vs.vitesse);


let prenoms: Array<String> = ["toto", "tata"];
let prix: Array<number> = [10, 20];

let x: any = 10;

console.log( typeof x );

function retourner<T>(val: T): T {
  return val;
}

console.log( retourner(10) );
console.log( retourner("toto") );

