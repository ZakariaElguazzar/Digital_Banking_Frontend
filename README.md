# DigitalBanking - Application de Gestion Bancaire

DigitalBanking est une application Angular moderne pour la gestion des clients et des comptes bancaires. Elle offre une interface utilisateur intuitive avec authentification et autorisation basées sur les rôles.

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture](#architecture)
3. [Composants](#composants)
4. [Guards](#guards)
5. [Interceptors](#interceptors)
6. [Services](#services)
7. [Modèles](#modèles)
8. [Configuration d'environnement](#configuration-denvironnement)
9. [Installation et démarrage](#installation-et-démarrage)
10. [Tests](#tests)
11. [Déploiement](#déploiement)
12. [Ressources additionnelles](#ressources-additionnelles)

## Vue d'ensemble

DigitalBanking est une application bancaire qui permet de gérer des clients et leurs comptes. L'application implémente un système d'authentification et d'autorisation basé sur les rôles, permettant différents niveaux d'accès selon le profil de l'utilisateur.

## Architecture

L'application est construite avec Angular et suit une architecture modulaire. Elle utilise:
- **Composants** pour l'interface utilisateur
- **Services** pour la logique métier et les appels API
- **Guards** pour protéger les routes
- **Interceptors** pour gérer les requêtes HTTP
- **Modèles** pour définir la structure des données

## Composants

L'application comprend les composants suivants:

### Composant principal
- **AppComponent**: Composant racine de l'application

### Composants de navigation
- **NavbarComponent**: Barre de navigation principale avec options de menu

### Composants d'authentification
- **LoginComponent**: Gère l'authentification des utilisateurs
- **AdminTemplateComponent**: Template principal pour les utilisateurs authentifiés
- **NotAuthorizedComponent**: Page affichée lorsqu'un utilisateur n'a pas les droits nécessaires

### Composants de gestion des clients
- **CustomersComponent**: Affiche la liste des clients
- **NewcustomerComponent**: Permet d'ajouter un nouveau client (réservé aux administrateurs)

### Composants de gestion des comptes
- **AccountsComponent**: Affiche la liste des comptes bancaires

## Guards

L'application utilise deux guards pour protéger les routes:

### AuthenticationGuard
- **Fichier**: `src/app/guards/authentication/authentication.guard.ts`
- **Fonction**: Vérifie si l'utilisateur est authentifié avant d'accéder aux routes protégées
- **Comportement**: Redirige vers la page de login si l'utilisateur n'est pas authentifié

### AuthorizationGuard
- **Fichier**: `src/app/guards/authorization/authorization.guard.ts`
- **Fonction**: Vérifie si l'utilisateur a le rôle requis pour accéder à certaines fonctionnalités
- **Comportement**: Redirige vers la page "Non autorisé" si l'utilisateur n'a pas les droits nécessaires

## Interceptors

### AppHttpInterceptor
- **Fichier**: `src/app/interceptors/app-http.interceptor.ts`
- **Fonction**: Intercepte toutes les requêtes HTTP (sauf login)
- **Comportement**:
  - Ajoute un token JWT dans l'en-tête Authorization
  - Gère les erreurs 401 (non autorisé) en déconnectant l'utilisateur

## Services

L'application utilise trois services principaux:

### LoginService
- **Fichier**: `src/app/services/Login/login.service.ts`
- **Fonctionnalités**:
  - Authentification des utilisateurs
  - Gestion des tokens JWT
  - Stockage des informations utilisateur (rôles, nom d'utilisateur)
  - Déconnexion

### CustomersService
- **Fichier**: `src/app/services/Cust/customers.service.ts`
- **Fonctionnalités**:
  - Récupération de la liste des clients
  - Recherche de clients par mot-clé
  - Création de nouveaux clients
  - Suppression de clients

### AccountsService
- **Fichier**: `src/app/services/Acc/accounts.service.ts`
- **Fonctionnalités**:
  - Récupération de la liste des comptes bancaires

## Modèles

L'application définit deux modèles principaux:

### Customer
- **Propriétés**:
  - `id`: Identifiant unique du client
  - `name`: Nom du client
  - `email`: Adresse email du client

### Account
- **Propriétés**:
  - `id`: Identifiant unique du compte
  - `number`: Numéro de compte
  - `balance`: Solde du compte
  - `status`: Statut du compte
  - `createdAt`: Date de création
  - `type`: Type de compte

## Configuration d'environnement

L'application utilise deux configurations d'environnement:

### Environnement de développement
- **Fichier**: `src/environments/environment.ts`
- **Configuration**:
  - `production`: false
  - `apiUrlCustomers`: 'http://localhost:8080/customers'
  - `apiUrlAccounts`: 'http://localhost:8080/bank_accounts'
  - `apiUrlLogin`: 'http://localhost:8080/auth'

### Environnement de production
- **Fichier**: `src/environments/environment.prod.ts`
- **Configuration**:
  - `production`: true
  - `apiUrl`: 'https://yourdomain.com/api'

## Installation et démarrage

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)
- Angular CLI (version 19.2.4)

### Installation
```bash
# Cloner le dépôt
git clone [URL_DU_REPO]

# Accéder au répertoire du projet
cd hoop

# Installer les dépendances
npm install
```

### Démarrage du serveur de développement
```bash
ng serve
```

Une fois le serveur démarré, ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Tests

### Tests unitaires
Pour exécuter les tests unitaires avec [Karma](https://karma-runner.github.io), utilisez la commande suivante:

```bash
ng test
```

### Tests end-to-end
Pour les tests end-to-end, exécutez:

```bash
ng e2e
```

Angular CLI ne fournit pas de framework de test end-to-end par défaut. Vous pouvez choisir celui qui convient le mieux à vos besoins.

## Déploiement

Pour construire le projet pour la production:

```bash
ng build --configuration production
```

Cela compilera votre projet et stockera les artefacts de construction dans le répertoire `dist/`. Par défaut, la construction de production optimise votre application pour les performances et la vitesse.

## Ressources additionnelles

- [Documentation Angular](https://angular.dev/)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [JWT Decode](https://github.com/auth0/jwt-decode)
