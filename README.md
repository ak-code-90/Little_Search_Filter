# Little_Search_Filter

[https://little-search-filter.vercel.app/](https://little-search-filter.vercel.app/)

Logique du filtre :

1 - stocker la saisie de l'utilisateur dans un state, puis filtrer le tableau de prénoms

2 - si l'utilisateur n'a rien saisi, afficher toutes les valeurs du tableau

3 - si l'utilisateur a saisi quelque chose, filtrer le tableau pour retourner les éléments qui incluent (.includes()) la saisie de l'utilisateur

⚠️ pour que le filtre fonctionne correctement, il faut que la saisie de l'utilisateur et les données filtrées soient en lettres minuscules (.toLowerCase())