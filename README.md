# Présentation d’Angular

**Angular** est un framework frontend open-source développé par Google. Il permet de créer des applications web dynamiques, notamment des applications monopages (_SPA - Single Page Application_).

Contrairement à des solutions comme **React**, **Angular** est un framework complet, ce qui signifie qu’il intègre nativement un grand nombre de fonctionnalités nécessaires au développement.
Il repose principalement sur **TypeScript**, ce qui améliore la fiabilité du code grâce au typage.

## Fonctionnement et principes

Angular est basé sur une architecture en **composants**. Chaque partie de l’interface est isolée dans un composant regroupant le **HTML**, le style et la logique.

```
ng generate component nomDuComposant

# CREATE src/app/nom-du-composant/nom-du-composant.spec.ts (612 bytes)
# CREATE src/app/nom-du-composant/nom-du-composant.ts (235 bytes)
# CREATE src/app/nom-du-composant/nom-du-composant.css (0 bytes)
# CREATE src/app/nom-du-composant/nom-du-composant.html (32 bytes)
```

Cette organisation facilite la maintenance et le travail en équipe.
Le framework propose également un système de liaison de données qui permet de synchroniser automatiquement les informations entre l’interface et les données. De plus, l’**injection de dépendances** permet d’organiser le code de manière modulaire et réutilisable.

## Avantages

Angular se distingue par son côté complet, car il intègre directement des fonctionnalités essentielles :

- **Routing** : gestion de la navigation dans l'application
- **Gestion des formulaires** : deux méthodes pour construire des formulaires (_Reactive Forms_ ou _Template-Driven Forms_)
- **HTTP Client** : fournit une **API HTTP** cliente pour l'application
- **Testing**

Contrairement à **React** qui nécessite plusieurs librairies, celles-ci sont natives à **Angular**.

Sa structure forte est également un avantage dans les projets d’équipe, car elle impose des règles claires et facilite la collaboration. Enfin, le fait qu’il soit maintenu par Google garantit une certaine stabilité et durabilité.

## Inconvénients

Malgré ses qualités, **Angular** peut être difficile à apprendre en raison de sa complexité et du nombre de concepts à maîtriser. Il est également parfois considéré comme plus lourd que d’autres solutions, ce qui peut avoir un impact sur les performances.

- **Courbe d’apprentissage élevée** : Complexe pour les débutants, concepts nombreux (_RxJS_, DI, modules ...)
- **Performance** : Plus lourd et Blundle plus important
- **Boilerplate** important : Beaucoup de fichiers/configuration

## Comparaison avec React

Face à **React**, **Angular** offre une solution plus complète, mais moins flexible. **React** permet davantage de liberté, au prix d’une configuration plus importante.

| Critère     | Angular           | React                   |
| ----------- | ----------------- | ----------------------- |
| Type        | Framework complet | Bibliothèque IU         |
| Langage     | TypeScript        | JavaScript / TypeScript |
| Structure   | Imposée           | Flexible                |
| Courbe      | Difficile         | Moyenne                 |
| Performance | Bonne             | Très bonne              |
| Ecosystème  | Intégré           | A construire            |

## Pertinence pour l’entreprise

Dans le contexte de l’entreprise, **Angular** constitue un choix pertinent. La présence de développeurs formés permet un gain de temps et une réduction des coûts de formation. De plus, la structure imposée par le framework favorise la qualité et la maintenabilité du projet.

## Conclusion

**Angular** est un framework robuste et complet, particulièrement adapté aux applications complexes et aux environnements professionnels. Malgré une courbe d’apprentissage plus importante, il offre des avantages solides en matière d’organisation et de productivité, ce qui en fait un choix cohérent pour l’entreprise.
