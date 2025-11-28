# 🚀 Déploiement Rapide - Portfolio

## Méthode la Plus Simple : Vercel (5 minutes)

### Étape 1 : Créer un compte GitHub
1. Allez sur https://github.com
2. Créez un compte (gratuit)

### Étape 2 : Créer un dépôt sur GitHub
1. Cliquez sur le "+" en haut à droite → "New repository"
2. Nom : `nadine-portfolio` (ou autre nom)
3. Cochez "Public"
4. **NE cochez PAS** "Add a README file"
5. Cliquez sur "Create repository"

### Étape 3 : Pousser votre code vers GitHub

Ouvrez un terminal dans le dossier de votre projet et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio"

# Connecter à GitHub (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/nadine-portfolio.git

# Renommer la branche en main
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

### Étape 4 : Déployer sur Vercel
1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez votre dépôt `nadine-portfolio`
5. Vercel détectera automatiquement React - cliquez sur "Deploy"
6. Attendez 1-2 minutes
7. ✅ **Votre portfolio est en ligne !**

Vous obtiendrez un lien comme : `nadine-portfolio.vercel.app`

---

## Alternative : Netlify (Aussi simple)

1. Allez sur https://netlify.com
2. Créez un compte (gratuit)
3. Cliquez sur "Add new site" → "Import an existing project"
4. Connectez votre dépôt GitHub
5. Sélectionnez votre dépôt
6. Netlify détectera automatiquement les paramètres
7. Cliquez sur "Deploy site"
8. ✅ **Votre portfolio est en ligne !**

---

## 📝 Note Importante

Avant de pousser vers GitHub, assurez-vous que :
- ✅ Tous vos fichiers images sont dans `public/`
- ✅ Votre CV PDF est dans `public/`
- ✅ Votre vidéo CV est dans `public/`

---

## 🎉 C'est tout !

Une fois déployé, vous aurez un lien que vous pourrez partager partout (LinkedIn, email, etc.)

