function evaluer(expression) {
    // j'enleve les espaces
    expression = expression.replace(/\s+/g, '');

    function evaluerTerm(idx) {
        let [resultat, nouvelIdx] = evaluerFacteur(idx);

        while (nouvelIdx < expression.length) {
            const char = expression[nouvelIdx];
            if (char !== '*' && char !== '/') break;

            const [valeur, nextIdx] = evaluerFacteur(nouvelIdx + 1);
            if (char === '*') resultat *= valeur;
            if (char === '/') resultat /= valeur;
            nouvelIdx = nextIdx;
        }

        return [resultat, nouvelIdx];
    }

    function evaluerFacteur(idx) {
        const char = expression[idx];
        if (char === '(') {
            const [resultat, nouvelIdx] = evaluerExpr(idx + 1);
            return [resultat, nouvelIdx + 1];
        }

        let nombre = '';
        while (idx < expression.length &&
            !isNaN(expression[idx]) &&
            expression[idx] !== ' ') {
            nombre += expression[idx];
            idx++;
        }
        return [parseFloat(nombre), idx];
    }

    function evaluerExpr(idx) {
        let [resultat, nouvelIdx] = evaluerTerm(idx);

        while (nouvelIdx < expression.length && expression[nouvelIdx] !== ')') {
            const operateur = expression[nouvelIdx];
            if (operateur !== '+' && operateur !== '-') break;

            const [valeur, nextIdx] = evaluerTerm(nouvelIdx + 1);
            if (operateur === '+') resultat += valeur;
            if (operateur === '-') resultat -= valeur;
            nouvelIdx = nextIdx;
        }

        return [resultat, nouvelIdx];
    }

    return evaluerExpr(0)[0];
}


console.log(evaluer("2 + 3 * (4 - 1)")); //  11
console.log(evaluer("10 / (2 + 3)")); //  2