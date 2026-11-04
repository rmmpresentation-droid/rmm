# RMM Luxe Suite

Crée une plateforme e-commerce complète en React / Next.js / Tailwind pour "RMM" (Raise Mindset Master), entreprise tunisienne de network marketing et franchise officielle de SwisDerm Switzerland. Le site doit être luxueux, dark mode premium, avec une identité visuelle noire profond (#0A0A0A) et or (#D4AF37). Style : élégant, minimaliste, inspiré des maisons de cosmétiques suisses de luxe.

---

## 🎨 DIRECTION ARTISTIQUE OBLIGATOIRE

- **Palette** : Fond #0A0A0A, cards #121212, texte #FAF9F6, accents or #D4AF37, or clair #F4E4BC, gris #8A8A8A.

- **Typographie** : Titres en Playfair Display ou Cormorant Garamond (serif élégant), corps en Inter (sans-serif).

- **Effets** : Glassmorphism léger (backdrop-blur), micro-animations au scroll (fade-up), hover dorés subtils, bordures fines 1px rgba(212,175,55,0.08).

- **Ambiance** : "Luxe suisse, ascension tunisienne". Pas de couleurs criardes. Tout doit respirer le premium.

- **Responsive** : Mobile-first, menu hamburger élégant, grilles adaptatives.

---

## 📄 PAGE 1 : HOME / ACCUEIL

Structure :

1. **Navbar fixe** : Logo RMM (R blanc, M doré, M blanc) + "Raise Mindset Master" en micro-texte. Liens : Accueil | Boutique | Devenir Networker | Espace Membre | Connexion. Panier avec compteur doré. Bouton "Connexion" bordure or.

2. **Hero Section** : Fond noir avec glows dorés flous animés. Titre "Rise in Mindset. Master Your Future." avec gradient doré animé sur "Mindset" et "Future". Sous-titre : "L'excellence suisse au service de votre bien-être. Franchise officielle SwisDerm en Tunisie." Deux CTA : "Découvrir la boutique" (bouton or plein) et "Rejoindre le réseau" (bouton outline or).

3. **Section "Nos Best-Sellers"** : Grille 4 cartes produits avec image, nom, prix TND, badge "Best-Seller" or, étoiles dorées, hover zoom image.

4. **Section "The Four Pillars"** : 4 cartes iconiques (Leadership/Soin Visage, Mastery/Soin Corps, Vision/Compléments, Action/Bien-être) avec icônes dorées et texte.

5. **Section "Avis d'Experts"** : 3 témoignages de médecins fictifs tunisiens avec photo ronde, badge "Expert vérifié", citation italique.

6. **Section "Témoignages Networkers"** : 3 cards avec photo, nom, rang (Diamond, Gold, Silver), citation sur leur succès.

7. **Footer** : Logo RMM, liens rapides, catégories produits, contact Tunisie, réseaux sociaux (Instagram, Facebook), copyright "© 2024 Raise Mindset Master. Franchise SwisDerm Switzerland."

---

## 📄 PAGE 2 : BOUTIQUE / CATALOGUE PRODUITS

Structure :

1. **Header** : Titre "Boutique SwisDerm" avec badge "Collection Exclusive".

2. **Filtres** : Boutons catégories : Tous | Soin Visage | Soin Corps | Compléments | Bien-être | Maquillage.

3. **Grille produits** : Cards avec image réelle (aspect-ratio 3:4), nom en serif, prix TND, volume, badge catégorie, étoiles, hover avec bouton "Voir" qui apparaît.

4. **Section "Packs de Démarrage"** (CRITIQUE) : Une section distincte en dessous ou à côté, très visible, présentant les packs pour rejoindre le réseau :

   | Pack | PP (Points Produit) | Prix TND | Avantages |

   |------|----------------------|----------|-----------|

   | **Bronze** | 60 PP | 750 TND | Accès catalogue networker, prix préférentiels -15% |

   | **Business** | 120 PP | 1,500 TND | Accès + formation démarrage + support coach |

   | **Silver** | 180 PP | 2,000 TND | Accès + formation avancée + outils marketing |

   | **Gold** | 420 PP | 5,000 TND | Rang Gold immédiat + commissions élevées + événements exclusifs |

   | **Platinum** | 840 PP | 9,000 TND | Rang Platinum + revenus résiduels + accès direct direction |

   Chaque pack doit être une card avec bordure dorée qui s'intensifie au hover, le nom du rang en gros, le prix en or, la liste des avantages en check-list dorée, et un CTA "Choisir ce pack" bouton or.

5. **CTA final** : "Vous êtes déjà networker ? Connectez-vous pour voir vos prix" lien vers /dashboard.

---

## 📄 PAGE 3 : FICHE PRODUIT DÉTAILLÉE

Template obligatoire pour chaque produit (exemple avec 3S Capsule) :

**A. Galerie & Info principale**

- Breadcrumb : Accueil > Boutique > Catégorie > Nom

- Galerie : Image principale grande (aspect 4:5) + thumbnails en dessous (3-4 miniatures cliquables)

- Nom produit (H1, Playfair Display)

- Sous-titre accrocheur

- Prix TND + volume

- Badges : "SwisDerm Switzerland", "Bio", "Sans Parabène", etc.

- Résumé 3-4 bénéfices avec icônes check dorées

- Sélecteur quantité (+/-) + bouton "Ajouter au panier" (or plein, large) + icônes cœur et partage

- Bloc PV : "Ce produit vous rapporte X PP pour votre qualification de rang"

**B. Onglets (Tabs avec indicateur doré animé)**

- **"Description"** : Texte long du produit.

- **"Bénéfices"** : Liste détaillée avec icônes dorées sur fond #121212.

- **"Ingrédients Actifs"** : Grille de cartes style "fiche botanique premium". Chaque ingrédient : image illustrative (icône circulaire avec bordure or), nom scientifique + commun, vertus en bullet points dorés. Style glassmorphism.

- **"Mode d'Emploi"** : Timeline verticale numérotée (1, 2, 3) avec étapes, icônes dorées, texte clair.

- **"Vidéo"** : Placeholder d'une section vidéo (16:9) avec un bouton play doré centré et le texte "Vidéo descriptive à venir". Fond dégradé or/noir. Cette section doit être facilement remplaçable par une vraie vidéo YouTube/Vimeo plus tard.

- **"Avis Clients"** : Système d'étoiles dorées, 4-6 avis avec photo initiale, nom, badge "Achat vérifié", texte, date.

- **"Avis des Experts"** : Section distincte avec fond légèrement différent (#0F0F0F). Photo ronde du médecin, bordure or 2px, nom, spécialité, institution, citation entre guillemets dorés, badge "Avis Expert Vérifié — RMM".

**C. Section Before / After (CRÉDIBILITÉ)**

- Titre "Résultats Réels" avec icônes caméra.

- 1 ou 2 comparatifs interactifs type "slider draggable" (avant/après).

- Ligne séparatrice verticale dorée avec poignée ronde or draggable.

- Légendes : "Avant — Semaine 0" / "Après — Semaine 6".

- Mention : "Résultats réels — Testé sous contrôle dermatologique".

- Mention légale discrète : "Les résultats individuels peuvent varier selon la peau et l'assiduité d'utilisation."

**D. Section "Complétez votre Routine"**

- 3 produits complémentaires en mini-cards (image, nom, prix, lien).

**E. Section "Témoignages Networkers"**

- 2-3 cards avec photo, nom, rang RMM, histoire avec le produit.

---

## 📄 PAGE 4 : DEVENIR NETWORKER / BÉNÉFICES & GAINS

Cette page est CRITIQUE pour convertir des prospects en networkers.

Structure :

1. **Hero** : "Transformez votre passion en revenus. Rejoignez RMM." avec image d'un networker tunisien réussi (placeholder).

2. **Section "Pourquoi rejoindre RMM ?"** : 6 bénéfices en grille 3x2 avec icônes dorées :

   - Produits premium suisses (SwisDerm)

   - Prix d'achat préférentiels jusqu'à -30%

   - Formation gratuite continue

   - Communauté soudée et événements exclusifs

   - Revenus complémentaires → revenus principaux

   - Pas de stock obligatoire (dropshipping possible)

3. **Section "Nos Packs de Démarrage"** (réutiliser les 5 packs décrits plus haut mais en plus grand, plus détaillé) :

   - Chaque pack est une card verticale luxueuse avec bordure or, prix en gros, liste PP, avantages en check-list, CTA "Commencer avec ce pack".

   - Le pack Gold doit avoir un badge "Le plus populaire" avec un ruban doré.

   - Le pack Platinum doit avoir un effet de brillance/glow subtil.

4. **Section "Système de Récompenses"** : Expliquer le système de points :

   - Chaque produit = X PP (Points Produit)

   - Accumulation des PP = montée en rang (Bronze → Business → Silver → Gold → Platinum)

   - À chaque rang : nouveaux pourcentages de commission, bonus, accès exclusifs

   - Barre de progression visuelle montrant les seuils

5. **Section "Témoignages de Networkers"** : Avant/après de leur vie (pas de peau, mais de leur situation financière/professionnelle). Photos, noms, rangs, revenus approximatifs ("Passé de 0 à 2,500 TND/mois en 6 mois").

6. **Section "FAQ Rejoindre RMM"** : Accordéon (expand/collapse) avec questions fréquentes :

   - "Faut-il un capital de départ ?" → Non, choisissez votre pack.

   - "Faut-il stocker des produits ?" → Non, nous gérons la logistique.

   - "Combien de temps pour le premier revenu ?" → Dès votre première vente.

   - "Y a-t-il des frais cachés ?" → Non, transparent total.

   - "Puis-je cumuler avec mon emploi actuel ?" → Oui, 100% flexible.

7. **CTA final massif** : "Prêt à changer de vie ?" avec formulaire d'intérêt (Nom, Email, Téléphone, Pack souhaité) et bouton "Recevoir ma présentation personnalisée".

---

## 📄 PAGE 5 : ESPACE NETWORKER (Dashboard Privé)

Page après connexion (simuler un état "connecté").

Structure :

1. **Header** : "Bienvenue, [Prénom]" + rang actuel (ex: "Diamond") avec badge doré.

2. **KPI Cards** (4 cartes en haut) :

   - Volume Personnel (PP accumulés)

   - Volume Groupe (PP équipe)

   - Nombre de filleuls directs

   - Commandes ce mois

   (Style glassmorphism, chiffres en or gros, icônes dorées)

3. **Section "Progression de Rang"** :

   - Barre de progression horizontale avec les 5 rangs (Bronze, Business, Silver, Gold, Platinum)

   - Indicateur actuel positionné sur la barre

   - Texte : "X PP sur Y PP requis pour [rang suivant]"

   - Pourcentage d'avancement

4. **Section "Mon Lien de Parrainage"** :

   - URL unique affichée dans un champ copiable

   - Bouton "Copier" avec icône

   - Boutons de partage rapide (WhatsApp, Facebook, copier lien)

   - Compteur "X personnes ont cliqué sur votre lien"

5. **Section "Mes Commandes"** :

   - Tableau avec : N° commande, Date, Produits, Total TND, PP gagnés, Statut (badge coloré : À traiter/En préparation/Expédiée/Livrée)

   - Filtre par statut

6. **Section "Prix Networker"** :

   - Liste des produits avec prix public barré et prix networker en or

   - Bouton "Commander" rapide

7. **Section "Mes Filleuls"** :

   - Liste des networkers parrainés (nom, date d'inscription, rang, volume)

   - Mini-arbre hiérarchique (1 niveau visible)

8. **Section "Outils & Formations"** :

   - Liens vers : Catalogue PDF, Fiches produits, Scripts de vente, Calendrier événements, Groupe WhatsApp/Discord

---

## 📄 PAGE 6 : INTERFACE ADMIN (Tableau de Bord Direction)

Layout sidebar sombre à gauche + contenu principal.

**Sidebar** : Logo RMM compact. Menu : Vue d'ensemble | Commandes | Produits | Networkers | Analytics | Paramètres. Icônes dorées, item actif avec fond or et texte noir.

**Onglet "Vue d'ensemble"** :

- 4 KPI cards : CA total TND, Commandes du jour, Networkers actifs, Panier moyen.

- Graphique barres : Évolution ventes mensuelles (6 derniers mois).

- Graphique camembert : Répartition ventes par catégorie produit.

- Top 5 produits les plus vendus (liste avec barres de progression).

- Top 10 networkers (classement par volume PP).

**Onglet "Commandes"** :

- Pipeline Kanban (4 colonnes : À Traiter → En Préparation → Expédiée → Livrée).

- Chaque card commande : N°, client, produits, total TND, PP, statut.

- Action : changer statut via drag & drop ou dropdown.

- Filtres : par date, par networker, par statut.

**Onglet "Produits"** :

- Tableau CRUD complet : Image, Nom, Catégorie, Prix public, Prix networker, Stock, PP, Statut (Actif/Inactif).

- Bouton "+ Ajouter un produit" (modal avec formulaire : nom, description, ingrédients dynamiques, upload image, prix, PP, catégorie, badges).

- Recherche et filtres.

**Onglet "Networkers"** :

- Tableau : Nom, Email, Téléphone, ID RMM, Parrain (upline), Rang, PP personnels, PP groupe, Nombre filleuls, Date inscription, Statut.

- Vue "Arbre Hiérarchique" : Visualisation en arbre du réseau (root RMM → niveau 1 → niveau 2). Lignes connectrices dorées. Cliquer sur un node pour voir ses filleuls.

- Filtre par rang, par ville, par date.

**Onglet "Analytics / Insights"** :

- Taux de conversion (visites → inscriptions → commandes).

- Taux de rétention des networkers (actifs vs inactifs sur 30j).

- Carte de chaleur : Ventes par région de Tunisie (Grand Tunis, Sfax, Sousse, etc.).

- Taux d'annulation/retour par produit.

- Courbe de croissance du réseau (nouveaux networkers par mois).

---

## 📄 PAGE 7 : CATALOGUE PRÉSENTATION (Optionnel mais élégant)

Une page "Showroom" ou "Lookbook" pour que les networkers présentent les produits en réunion/visio.

Structure :

- Mode "Presentation Mode" : fond noir, produits en plein écran un par un.

- Navigation flèches gauche/droite ou scroll vertical snap.

- Chaque slide : Image produit grand format (60% écran) + infos à droite (nom, bénéfices clés, prix, PP).

- Bouton "Télécharger la fiche PDF" (placeholder).

- Bouton "Passer en mode catalogue PDF" (génération côté client si possible, sinon lien).

Si c'est trop complexe pour un MVP, remplacer par une page "Téléchargements" avec des cards produits + bouton "Télécharger fiche produit".

---

## 🛠️ SPÉCIFICATIONS TECHNIQUES

- **Framework** : Next.js 14 App Router + React 18 + TypeScript.

- **Styling** : Tailwind CSS + shadcn/ui pour les composants (tabs, accordéon, tableaux, modals).

- **Animations** : Framer Motion pour les fade-up, hover smooth, transitions de page.

- **Icônes** : Lucide React.

- **Images** : Utiliser des placeholders avec les noms des produits (ex: placeholder "3S Capsule - SwisDerm") pour que je puisse les remplacer facilement. Aspect-ratio strict 3:4 pour les produits, 4:5 pour les fiches détaillées.

- **Données** : Créer un fichier data.ts avec tous les produits SwisDerm (11 produits) et les packs pré-remplis.

- **Devise** : Toutes les prix en TND (Dinar Tunisien). Format : "1,250.000 TND" ou "1250 TND".

- **Langue** : Interface 100% en Français.

- **SEO** : Metadata dynamiques par page, titres H1 pertinents.

---

## 🧪 DONNÉES À PRÉ-REMPLIR (Seed Data)

### Les 11 produits SwisDerm (à inclure dans data.ts) :

1. **3S Capsule** | Soin Visage | 189 TND | 30 capsules | Anti-âge triple cellules souches (Pomme, Rose, Orange) + Jojoba. Bénéfices : renouvellement cellulaire, éclaircissement, anti-rides, pores, sébum. PP: 120.

2. **Bio White Cream** | Soin Visage | 145 TND | 50ml | SPF 25. Anti-taches. Ingrédients : Citron, Colza, Vitamine C & E, Myrtille. PP: 90.

3. **B Cream (Botox Naturel)** | Soin Visage | 210 TND | 30ml | Effet 5X : raffermissement -78% rides, pores 84% plus fins, lifting joues 68%, hydratation 75%, lissage 98%. PP: 150.

4. **Hydrating Toning Lotion** | Soin Visage | 95 TND | 200ml | Sans parabène, sans alcool. Anti-rides, anti-pigmentation, pores, points noirs/blancs. PP: 70.

5. **S Fem Serum** | Soin Corps | 165 TND | 150ml | Nano-spray anti-cellulite, fermeté bras/cuisses/ventre. Guarana, Lierre, Tournesol, Colza. PP: 110.

6. **S Hydro** | Bien-être | 450 TND | Bouteille | Générateur eau hydrogénée H2. Antioxydant, anti-inflammatoire, neuroprotection, cardio, métabolisme. PP: 300.

7. **S Xtra Caffe** | Compléments | 85 TND | 12 sachets | Café Arabica/Robusta + Tongkat Ali + Galangal (enXtra). Sans sucre. Mental focus, énergie. PP: 60.

8. **S-Factor** | Compléments | 195 TND | 20 sachets | Poudre anti-âge 4-en-1. Cassis, Mangoustan, Curcuma blanc, Açaï, cellules souches pomme, canneberge, collagène poisson, vitamine C, prémix antioxydant. PP: 130.

9. **Sun Protector** | Soin Visage | 110 TND | 50ml | SPF 30 teinté. Arbutine, Olive, Cire abeille, Argan. PP: 75.

10. **Gentle Cleansing Cream** | Soin Visage | 85 TND | 100ml | Nettoyant doux. Camomille, Thé vert, Aloe vera, Glycérine, Papaye. PP: 55.

11. **Revitalizing Foundation** | Maquillage | 125 TND | 30ml | Fond de teint SPF 30. Jojoba, Amande douce, Cire abeille, Vitamine C & E. PP: 85.

### Les 5 Packs Networker :

| Nom | PP | Prix | Avantages |

|-----|----|------|-----------|

| Bronze | 60 | 750 TND | Prix préférentiels -15%, accès boutique networker |

| Business | 120 | 1,500 TND | + Formation démarrage, coach dédié |

| Silver | 180 | 2,000 TND | + Formation avancée, kit marketing digital |

| Gold | 420 | 5,000 TND | + Rang Gold, commissions élevées, événements VIP |

| Platinum | 840 | 9,000 TND | + Rang Platinum, revenus résiduels, accès direction |

---

## ⚡ EXIGENCES DE QUALITÉ

- **Transitions de page** : Animations douces (fade + slide-up) entre les pages.

- **Micro-interactions** : Boutons qui glow légèrement au hover, cards qui se soulèvent (translateY -4px), bordures qui passent de transparent à or.

- **Loading states** : Skeleton screens élégants (shimmer doré sur fond noir) pendant le chargement des données.

- **Empty states** : Messages élégants quand pas de données ("Aucune commande pour le moment" avec icône dorée).

- **Accessibilité** : Contraste suffisant, focus visible doré, navigation clavier.

- **Performance** : Images lazy-loadées, fonts optimisées, pas de layout shift.

---

## 🎯 OBJECTIF FINAL

L'utilisateur doit avoir l'impression de naviguer sur le site d'une maison de cosmétiques suisse de luxe (type La Prairie, Valmont) mais avec une opportunité business tunisienne claire et accessible. Le design doit convertir : visiteur → client → networker. Chaque page doit inciter à l'action (CTA or visible, pas agressif).

Génère le code complet de toutes ces pages avec les données pré-remplies. Assure-toi que le routing fonctionne (/, /shop, /product/[id], /join, /dashboard, /admin). Commence par le layout global et la navigation, puis chaque page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6f4fe5e7-ed15-4ab2-a981-53ba33c1ef44).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
