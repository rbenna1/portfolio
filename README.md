# Portfolio Personnel

Un portfolio web moderne et interactif construit avec React, TypeScript et Vite, hébergé sur AWS avec Terraform.

## Caractéristiques

- **Interface moderne** : Design épuré et responsive
- **Animations fluides** : Effets de neige, texte rotatif et compteurs animés
- **Formulaire de contact** : Intégration avec AWS SES pour les emails
- **Navigation intelligente** : Spy scroll automatique dans les sections
- **Accessibilité** : Support des préférences de mouvement réduit

##  Stack Technologique

### Frontend
- **React 18** avec TypeScript
- **Vite** - Bundler haute performance
- **CSS3** - Animations et layout réactif
- **Linting** : ESLint avec configuration personnalisée

### Backend & Infrastructure
- **AWS Lambda** - Authentification et traitement des emails
- **AWS SES** - Service d'envoi d'emails
- **DynamoDB** - Base de données NoSQL
- **CloudFront** - CDN pour la distribution
- **S3** - Stockage des fichiers statiques
- **Terraform** - Infrastructure as Code

## Structure du Projet

```
portfolio/
├── client/                  # Application React/Vite
│   ├── src/
│   │   ├── components/      # Composants réutilisables
│   │   ├── utils/           # Fonctions utilitaires
│   │   └── App.tsx          # Composant principal
│   └── vite.config.ts       # Configuration Vite
├── lambda/                  # Fonctions AWS Lambda
├── terraform/               # Configuration Infrastructure as Code
└── README.md               # Ce fichier
```

## Installation et Démarrage

### Prérequis
- Node.js
- pnpm
- AWS CLI
- Terraform

### Développement Local

```bash
# Installation des dépendances
cd client
pnpm install

# Lancer le serveur de développement
pnpm dev

# Construire pour la production
pnpm build

# Prévisualiser la build de production
pnpm preview
```


## Déploiement

### Infrastructure AWS

```bash
# Initialiser Terraform
cd terraform
terraform init

# Vérifier les changements
terraform plan

# Appliquer les changements
terraform apply
```

L'infrastructure déployée inclut :
- Distribution CloudFront
- Bucket S3 pour les fichiers statiques
- Fonction Lambda pour l'authentification
- SES pour l'envoi d'emails

## Composants Principaux

- **Navbar** : Navigation avec scroll spy
- **IntroSection** : Section de présentation avec texte rotatif
- **SkillMatrix** : Matrice de compétences avec compteurs animés
- **ContactForm** : Formulaire de contact avec validation
- **AvailabilityBadge** : Indicateur de disponibilité
- **Snowflakes** : Effet de flocons de neige

##  Sécurité

- Authentification via AWS Lambda
- CORS configuré pour les domaines autorisés
- Variables sensibles gérées via AWS Secrets Manager
- SSL/TLS activé via CloudFront


## Auteur 

Rafik BENNACER [LinkedIn](https://linkedin.com/in/rafik-bennacer)
