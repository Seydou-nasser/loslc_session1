### 🔁 **Exercice - Bubble Sort (15 pts)**

**Sujet :** Implémenter le tri à bulles.

**Énoncé :**  
Écris une fonction `tri_bulle(liste)` qui prend une liste de nombres entiers et la trie **en ordre croissant** en utilisant l'algorithme du **tri à bulles**.

**Exemple :**

```python
tri_bulle([5, 2, 9, 1])  # doit renvoyer [1, 2, 5, 9]
```

---

### 🧭 **Exercice - Algorithme de recherche de chemin (20pts)**

**Sujet :** Trouver un chemin dans un labyrinthe avec BFS.

**Énoncé :**  
Tu as une grille 2D représentée par une liste de listes de 0 (case libre) et 1 (mur). Écris une fonction `trouver_chemin(grille, depart, arrivee)` qui utilise **Breadth-First Search (BFS)** pour trouver le **chemin le plus court** entre deux points.

**Exemple de grille :**

```python
grille = [
  [0, 1, 0, 0],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [1, 1, 0, 0]
]
```

**Entrée :**  
`depart = (0, 0)` et `arrivee = (3, 3)`

**Sortie attendue :**  
Liste des coordonnées représentant le chemin le plus court, ex: `[(0,0), (1,0), (2,0), (2,1), ..., (3,3)]`

---

### 🧮 **Exercice - Interpréteur arithmétique (15pts)**

**Sujet :** Mini interpréteur d'expressions arithmétiques.

**Énoncé :**  
Écris un petit interpréteur qui peut **évaluer** des expressions arithmétiques simples avec les **opérateurs `+`, `-`, `*`, `/`** et les **parenthèses**.

**Fonction :** `evaluer(expression: str) -> float`

**Exemples :**

```python
evaluer("2 + 3 * (4 - 1)")  # renvoie 11.0
evaluer("10 / (2 + 3)")    # renvoie 2.0
```

Vous aurez besoin de 40 points pour passer à la session suivante.

Lorsque vous finisez, envoyez le nom de votre team et le repo github contenant les 3 projets.
