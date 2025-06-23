function somme(a: number, b: number): number{return a+b;}

function taillePrenom(prenom: string): number{return prenom.length; }

export default function sommeTab(tab: number[]): number{
    return tab.reduce((ac, val) => ac+val, 0);
}

export const API = "www.toto.fr?var=12&rer=111";

export {somme, taillePrenom};