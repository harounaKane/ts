import Compte from "./Compte";

    
    let c1 = new Compte(10, 1500, "Azzedine");
    let c2 = new Compte(11, 1500, "Salah");

    // c2.presentation();
    // c1.presentation();

    // c2.virerVers(50, c1);
    c2.retirer(1500);

    // c1.presentation();




import Produit from "./Produit";
let p = new Produit(100, 200, "Clavier", 12);

c2.presentation();


// console.log("apres new");

// console.log( p.prix );
// p.prix = 10;
// console.log( p.prix );
