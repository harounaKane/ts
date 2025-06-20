"use strict";
let monLivre = {
    id: 10,
    titre: "Etranger",
    auteur: "Albert",
    disponible: true,
    description: "description du livre étranger"
};
let monLivre2 = {
    id: 10,
    titre: "Etranger",
    auteur: "Albert",
    disponible: true
};
const afficherLivre = (l) => {
    let description = l.description ? "description: " + l.description : '';
    console.log(`
    numéro: ${l.id},
    titre: ${l.titre},
    auteur: ${l.auteur},
    dispo: ${l.disponible},
    ${description} 
    `);
};
afficherLivre(monLivre);
afficherLivre(monLivre2);
