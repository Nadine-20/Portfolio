# Guide de Déploiement du Portfolio

## 🚀 Options de Déploiement Gratuites

### Option 1 : Vercel (Recommandé - Le plus simple)

#### Étapes :

1. **Créer un compte GitHub** (si vous n'en avez pas)
   - Allez sur [github.com](https://github.com)
   - Créez un compte gratuit

2. **Initialiser Git et pousser vers GitHub**
   ```bash
   # Dans le terminal, à la racine du projet
   git init
   git add .
   git commit -m "Initial commit - Portfolio"
   
   # Créez un nouveau dépôt sur GitHub (sans README)
   # Puis connectez-le :
   git remote add origin https://github.com/VOTRE-USERNAME/nadine-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Déployer sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub
   - Cliquez sur "Add New Project"
   - Sélectionnez votre dépôt `nadine-portfolio`
   - Vercel détectera automatiquement React
   - Cliquez sur "Deploy"
   - Attendez 1-2 minutes
   - ✅ Votre portfolio sera en ligne avec un lien comme : `nadine-portfolio.vercel.app`

4. **Personnaliser le domaine** (optionnel)
   - Dans les paramètres du projet Vercel
   - Vous pouvez ajouter un domaine personnalisé

---

### Option 2 : Netlify

#### Étapes :

1. **Préparer le build**
   ```bash
   npm run build
   ```

2. **Créer un compte Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Créez un compte gratuit

3. **Déployer**
   - Méthode 1 : Drag & Drop
     - Allez dans "Sites"
     - Glissez-déposez le dossier `build` (créé après `npm run build`)
   
   - Méthode 2 : Via GitHub
     - Connectez votre dépôt GitHub
     - Netlify détectera automatiquement les paramètres
     - Build command : `npm run build`
     - Publish directory : `build`
     - Cliquez sur "Deploy"

4. **Obtenir votre lien**
   - Netlify génère un lien comme : `random-name-123.netlify.app`
   - Vous pouvez le personnaliser dans les paramètres

---

### Option 3 : GitHub Pages

#### Étapes :

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifier package.json**
   Ajoutez dans `package.json` :
   ```json
   {
     "homepage": "https://VOTRE-USERNAME.github.io/nadine-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

4. **Activer GitHub Pages**
   - Allez dans les paramètres de votre dépôt GitHub
   - Section "Pages"
   - Source : `gh-pages` branch
   - Votre site sera sur : `VOTRE-USERNAME.github.io/nadine-portfolio`

---

## 📝 Commandes Git Essentielles

Si vous n'avez pas encore initialisé Git :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio Nadine Mouadhen"

# Créer un dépôt sur GitHub, puis :
git remote add origin https://github.com/VOTRE-USERNAME/nadine-portfolio.git
git branch -M main
git push -u origin main
```

---

## ✅ Vérifications Avant Déploiement

- [ ] Tous les fichiers images sont dans le dossier `public/`
- [ ] Le fichier `package.json` contient toutes les dépendances
- [ ] Le projet se build sans erreur : `npm run build`
- [ ] Tous les liens fonctionnent (CV, vidéo, etc.)

---

## 🔗 Liens Utiles

- **Vercel** : https://vercel.com
- **Netlify** : https://netlify.com
- **GitHub** : https://github.com

---

## 💡 Recommandation

**Vercel est la meilleure option** car :
- ✅ Déploiement automatique à chaque push
- ✅ Configuration automatique pour React
- ✅ HTTPS gratuit
- ✅ Très rapide
- ✅ Interface simple

Une fois déployé, vous obtiendrez un lien que vous pourrez partager partout ! 🎉

