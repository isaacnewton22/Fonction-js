function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let annee = 2024;
// Vérifie si l'entrée est un nombre et un entier
if (typeof annee === 'number' && Number.isInteger(annee)) {
    if (estBissextile(annee)) {
        console.log(`L'année ${annee} est bissextile.`);
    } else {
        console.log(`L'année ${annee} n'est pas bissextile.`);
    }
} else {
    console.log("Entrée invalide. Veuillez entrer un nombre entier.");
}