# Portfolio de Nadir El Moutaouakil 🚀

Un portfolio moderne et interactif développé avec React, Vite et TailwindCSS, présentant mes compétences en développement web et data engineering.

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Liquid Glass Effect** : Effets de glassmorphisme avancés avec animations fluides
- **Mode Sombre/Clair** : Basculement automatique selon les préférences système
- **Animations CSS** : Transitions élégantes et animations de défilement
- **Design Responsif** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Curseur Personnalisé** : Effets de curseur interactifs

### 🎭 Interactions Avancées
- **Micro-interactions** : Boutons avec effets ripple et animations hover
- **Effets 3D Tilt** : Cartes avec rotation 3D au survol
- **Effets Sonores** : Sons synthétiques pour les interactions (optionnel)
- **Mouse Trail** : Traînée de particules qui suit le curseur
- **Parallax** : Effets de parallaxe sur les éléments de fond

### 📱 Progressive Web App (PWA)
- **Installation** : Installable comme une app native
- **Mode Hors-ligne** : Fonctionne sans connexion internet
- **Raccourcis** : Accès rapide aux sections importantes
- **Partage** : Capacité de partage natif

### 🔄 Animations & Transitions
- **Scroll Reveal** : Révélation des éléments au défilement
- **Staggered Animations** : Animations en cascade
- **Loading Screen** : Écran de chargement avec barre de progression
- **Floating Elements** : Particules flottantes animées

### 🧩 Composants Spécialisés
- **Timeline Interactive** : Présentation chronologique du parcours
- **Blog Section** : Articles avec filtrage par catégorie
- **Project Showcase** : Galerie de projets avec effets visuels
- **Contact Cards** : Cartes de contact interactives

## 🛠️ Technologies Utilisées

- **React 18** : Framework JavaScript moderne
- **Vite** : Build tool ultra-rapide
- **TailwindCSS** : Framework CSS utility-first
- **React Router** : Navigation client-side
- **Web Audio API** : Effets sonores synthétiques
- **Intersection Observer** : Détection d'éléments visibles
- **CSS3 Animations** : Animations et transitions avancées

## 🚀 Installation & Démarrage

1. **Cloner le projet**
```bash
git clone https://github.com/ND59/portfolio-nadir.git
cd portfolio-nadir
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer en mode développement**
```bash
npm run dev
```

4. **Builder pour la production**
```bash
npm run build
```

## 📂 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── About.jsx       # Section À propos
│   ├── Blog.jsx        # Section Blog
│   ├── Contact.jsx     # Section Contact
│   ├── Cursor.jsx      # Curseur personnalisé
│   ├── DarkModeToggle.jsx # Basculeur de thème
│   ├── Footer.jsx      # Pied de page
│   ├── Header.jsx      # En-tête navigation
│   ├── Hero.jsx        # Section héros
│   ├── InteractiveElements.jsx # Boutons interactifs
│   ├── LoadingScreen.jsx # Écran de chargement
│   ├── Projects.jsx    # Section projets
│   ├── Skills.jsx      # Section compétences
│   └── Timeline.jsx    # Timeline du parcours
├── hooks/              # Hooks personnalisés
│   ├── useAnimations.js # Animations et scroll
│   ├── useSoundEffects.js # Effets sonores
│   └── useTilt.js      # Effets 3D tilt
├── pages/              # Pages de l'application
│   ├── AboutPage.jsx   # Page À propos
│   ├── Home.jsx        # Page d'accueil
│   └── ProjectsPage.jsx # Page projets
├── App.jsx             # Composant principal
├── index.css           # Styles globaux
└── main.jsx            # Point d'entrée
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales peuvent être modifiées dans `src/index.css` :
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #f093fb;
}
```

### Animations
Les durées et effets d'animation sont configurables dans les classes CSS et les hooks personnalisés.

### Effets Sonores
Les effets sonores peuvent être désactivés en supprimant les appels à `useSoundEffects()`.

## 📱 Fonctionnalités PWA

- **Manifest** : Configuration dans `public/manifest.json`
- **Service Worker** : Mise en cache automatique
- **Installation** : Bouton d'installation natif
- **Mode Hors-ligne** : Fonctionnement sans internet

## 🌟 Points Forts

- **Performance** : Optimisé pour la vitesse avec Vite
- **Accessibilité** : Respect des standards WCAG
- **SEO** : Meta tags optimisés pour le référencement
- **Responsive** : Design adaptatif sur tous les écrans
- **Moderne** : Utilise les dernières technologies web

## 👤 À Propos

**Nadir El Moutaouakil**
- 🎓 Étudiant en BUT Informatique
- 💼 Data Engineer chez Crédit Agricole PFM Roubaix
- 📧 nadirelmoutaouakil59@gmail.com
- 🐙 [GitHub](https://github.com/ND59)
- 💼 [LinkedIn](https://linkedin.com/in/nadir-el-moutaouakil)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

---

Développé avec ❤️ par Nadir El Moutaouakil+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
