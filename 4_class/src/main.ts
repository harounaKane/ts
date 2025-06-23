import Compte from "./Compte";
import CompteAvecDec from "./CompteAvecDec";

    
    let c1 = new Compte(10, 1500, "Azzedine");
    let c2 = new CompteAvecDec(11, 1500, "Salah", 500);

    console.log( c2 instanceof Compte );
    
    c2.retirer(2001);
    console.log( c1.presentation() );
    console.log( c2.presentation() );
    

 
