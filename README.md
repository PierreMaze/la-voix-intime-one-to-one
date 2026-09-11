# COACHING "INSIDE" ONE-TO-ONE

Page de paiement autonome en React, Tailwind CSS v4 et Vite. Direction artistique reprise du programme « Le Trésor des 9 Portes » : ivoire, bleu profond, touches dorées, logo La Voix Intime et typographie adaptée aux écrans desktop et 2K.

## Développement

- Installer les dépendances : npm install
- Lancer le serveur local : npm run dev

## Production

- Compiler : npm run build
- Vérifier le résultat : npm run preview

Les fichiers compilés sont dans dist/. La base /la-voix-intime-one-to-one/ correspond au chemin GitHub Pages.

## Contenu

- 1 mois d’accompagnement, 100 % individuel sur 4 semaines.
- 4 coachings individuels, 1 par semaine.
- Suivi personnalisé au quotidien et échanges/ressources via WhatsApp.
- Prix total : 460 €.

Le lien PayPal est défini dans src/main.jsx par PAYPAL_URL. Les deux boutons pointent vers https://www.paypal.com/ncp/payment/Q6Y4STA844MT4. Le paiement fractionné dépend de l’éligibilité vérifiée par PayPal. Aucune donnée bancaire n’est collectée sur cette page et aucun suivi automatique du paiement n’est implémenté.

Les visuels fournis sont dans public/images/. Le visuel coaching-inside-four-weeks.jpeg s’affiche intégralement dans ses proportions originales sur mobile et desktop. Les polices DM Sans et Manrope sont chargées depuis Google Fonts avec une police de repli sans-serif.

## GitHub Pages

Site : https://pierremaze.github.io/la-voix-intime-one-to-one/

Dépôt : https://github.com/PierreMaze/la-voix-intime-one-to-one

Après les modifications, enregistrer et pousser les sources avec Git puis lancer `npm run deploy`. Cette commande compile le projet et publie dist/ sur la branche gh-pages. Un push des sources seul ne republie pas le site.
