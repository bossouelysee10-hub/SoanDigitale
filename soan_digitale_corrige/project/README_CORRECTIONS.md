# Soan Digitale — Corrections appliquées

## Corrections incluses

- Suppression des identifiants fictifs Google Analytics et Meta Pixel.
- Correction du sitemap pour ne conserver que l'URL principale indexable.
- Ajout de `.env.example`.
- Renforcement de `.gitignore` pour les variables d'environnement.
- Validation explicite de `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`.
- Ajout d'une migration Supabase pour limiter les longueurs et statuts des formulaires.
- Ajout d'un contrôle honeypot anti-spam côté frontend.
- Ajout d'une validation email côté formulaire de contact lorsque le flux existant le permet.

## Avant mise en ligne

1. Copier `.env.example` vers `.env.local`.
2. Renseigner les variables Supabase.
3. Vérifier les migrations Supabase et les appliquer sur le projet distant.
4. Remplacer les liens sociaux génériques par les vrais comptes officiels.
5. Ajouter les vrais identifiants Analytics / Meta Pixel uniquement si nécessaire.
6. Tester les formulaires Contact et Demande de devis.
7. Lancer :
   - `npm ci`
   - `npm run build`
   - `npm run lint` si le script existe.
8. Vérifier le site sur mobile et desktop.

## Important

Le honeypot est une protection légère. Pour un site public recevant beaucoup de trafic, ajouter une protection anti-bot côté serveur/infrastructure (par exemple Turnstile) et une limitation de fréquence.
