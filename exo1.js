function tri_bulle(liste) {
    let tailleListe = liste.length;
    for (let i = 0; i < tailleListe - 1; i++) {
        for (let j = 0; j < tailleListe - i - 1; j++) {
            if (liste[j] > liste[j + 1]) {
                let temp = liste[j];
                liste[j] = liste[j + 1];
                liste[j + 1] = temp;
            }
        }
    }
    return liste;
}
console.log(tri_bulle([5, 2, 9, 1, 52]));