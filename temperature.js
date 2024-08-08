function ConseilVetements(temperature) {
    // Conseils en fonction de la température
    if (temperature < 0) {
        return "portez un manteau épais, une écharpe, des gants et un chapeau" ;
    } else if (temperature >= 0 && temperature <= 10) {
        return "Portez un manteau, un pull et un chapeau.";
    } else if (temperature > 10 && temperature <= 20) {
        return "Portez une veste légère ou un pull.";
    } else if (temperature > 20 && temperature <= 30) {
        return "Portez un t-shirt et un short.";
    } else {
        return "Portez des vêtements très légers, comme un débardeur et un short.";
    }
}
let temperature = 37;

// Convertir la température en nombre
temperature = parseFloat(temperature);

if (!isNaN(temperature)) {
    let conseilVetements = ConseilVetements(temperature);
    console.log(conseilVetements);
} else {
    console.log("Entrée de température invalide.");
}
