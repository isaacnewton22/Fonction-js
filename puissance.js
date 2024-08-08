function puissance(base, exposant) {
    if (exposant === 0) {
        return 1;
    }
    
    return base * puissance(base, exposant - 1);
    }
    let base = 2;
    let exposant = 3;
    console.log(`${base} élevé à la puissance ${exposant} est : ${puissance(base, exposant)}`);