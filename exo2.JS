function trouver_chemin(grille, depart, arrivee) {

    const lignes = grille.length;
    const colonnes = grille[0].length;

    //                   haut,   droite,   bas,    gauche
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    // File pour BFS - chaque élément contient la position et le chemin
    const queue = [[depart, [depart]]];
    // Ensemble des cases visitées (utilisant une chaîne comme clé)
    const visite = new Set([`${depart[0]},${depart[1]}`]);

    while (queue.length > 0) {
        const [pos, chemin] = queue.shift();
        const [x, y] = pos;

        if (x === arrivee[0] && y === arrivee[1]) {
            return chemin;
        }

        // j'explore les directions possibles
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            const key = `${nx},${ny}`;

            if (nx >= 0 && nx < lignes &&
                ny >= 0 && ny < colonnes &&
                grille[nx][ny] === 0 &&
                !visite.has(key)) {

                queue.push([[nx, ny], [...chemin, [nx, ny]]]);
                visite.add(key);
            }
        }
    }

    return null;
}

const grille = [
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 0]
];

const depart = [0, 0];
const arrivee = [3, 3];

const chemin = trouver_chemin(grille, depart, arrivee);
console.log(chemin);