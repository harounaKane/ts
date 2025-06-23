/**
 * Crée un type Sexe qui accepte uniquement "homme" ou "femme"
Crée une variable genre de type Sexe
Crée deux types : Employé (avec id) et Profil (avec nom)
Crée un type combiné EmployéComplet avec intersection (&)
Déclare un objet e1 de type EmployéComplet

 */

type Sexe = "Homme" | "Femme";
let genre: Sexe = "Homme"; // "Femme"


type Employe = {id: number};
type Profil = {nom: string};

type EmployeComplet = Employe & Profil;

const e1: EmployeComplet = {
    id: 1,
    nom: "Barthes"
};

console.log(e1);
