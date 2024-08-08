function PrixBillet(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Erreur";
    }
}
let ageInput = 19;
let age = parseInt(ageInput);

if (!isNaN(age) && age >= 0) {
    let price = PrixBillet(age);
    console.log(`Votre age est : ${age}ans et le prix du billet est : ${price}$`);
} else {
    console.log("Veuillez entrer un âge valide.");
}
