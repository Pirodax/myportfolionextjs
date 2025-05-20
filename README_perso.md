# MyPortfolioNextjs
this is my portfolio the good one 

# Note 
...


# Video tutoriel utilisé:
https://www.youtube.com/watch?v=FTH6Dn3AyIQ&ab_channel=JavaScriptMastery

# liens vers les outils :

## Aceternity UI
https://ui.aceternity.com/

# CSS Gradient (dégrader de couleur generateur de code)
https://cssgradient.io/
# Convertiseur Hex to rgb
http://www.proftnj.com/RGB3.htm


# liens pour mode nuit et jour :
https://ui.shadcn.com/docs/dark-mode/next

 

# liens pour react icons
https://www.npmjs.com/package/react-icons

------------------------------------------------------------
# SENTRY pour les erreurs et suivi du site 
https://esiea-wv.sentry.io/issues/41006465/?project=4509295767715920&referrer=onboarding-first-event-footer 
(connection avec github)
# Deploiment avec CloudFare 
https://dash.cloudflare.com/b3e152525a8f5541cb62c7f3189b8a50/home

------------------------------------------------------------
# Idée pour toujours faire mieux:
## Pour ouvrir mail direct 
mailto: // ouvrir direct la boite mail de l'utilisateur 
back ground qu'on peux changer rendre bcp plus leger 

## Pour montrer tous mes voyage dans le monde :
Remote Connectivity
https://ui.aceternity.com/components/world-map

# tuto publiez votre site statique :

Mettez à jour next.config.js au format suivant :
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // … vos autres options
};
export default nextConfig;

puis publier

npx wrangler pages deploy out \
  --project-name mon-portfolio \
  --branch main


No statique (dynamique)
# Build command
npm ci && npm run cf:build
# Déployer la commande
npx wrangler deploy
////////////////////////////////
# Clean up previous builds
rm -rf .next
rm -rf .wrangler

# Install dependencies
npm install

# Build and deploy
npm run deploy


npm run build           # Next.js prod build
vercel build            # simule la build Vercel
vercel env pull .env.local  # récupère les env vars du dashboard
vercel dev              # dev local “Vercel-like”
vercel                  # deploy preview
vercel --prod           # deploy production

# revenir au git d'avant 
git reset --hard HEAD



