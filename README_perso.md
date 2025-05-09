# MyPortfolioNextjs
this is my portfolio the good one 

# Note 
On est le 03/05/25 et je m'engage à avoir un site fonctionnelle pour demain ou je serais moi Ludovic BERGERON une grosse dinde 07/05/2025(embiteux mais pour ce weekend tkt)


# Video tutoriel utilisé:
https://www.youtube.com/watch?v=FTH6Dn3AyIQ

21:46 sur 2:44:25 J1
44:10 sur 2:44:25 J2
1:08:31 sur 2:44:25 J3
x J4
1:35:49 sur 2:44:25 J5
? J6
fini par pitié J7


# liens pour tous les contents:
https://jsmastery.pro/module/build-an-amazing-modern-portfolio-with-next-js-and-framer-motion/introduction-spotlight

# liens dirrect vers le github 
https://github.com/adrianhajdin/portfolio


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




# Idée pour toujours faire mieux:
## Pour ouvrir mail direct 
mailto: // ouvrir direct la boite mail de l'utilisateur 


## Pour montrer tous mes voyage dans le monde :
Remote Connectivity
https://ui.aceternity.com/components/world-map







# code global non fonctionnel mais avec un peu tout
``` /* styles/globals.css */ 

/* 1) Import unique : Preflight + Components + Utilities */
@import "tailwindcss";

/* 2) Design tokens globaux (namespace @theme ⇒ génère automatiquement
      bg-*, text-*, fill-*, ring-*, etc. pour chaque variable) */
@theme {
  /* — Couleurs étendues — */
  --color-black:              #000000;
  --color-black-100:          #000319;
  --color-black-200:          rgba(17,25,40,0.75);
  --color-black-300:          rgba(255,255,255,0.125);

  --color-white:              #ffffff;
  --color-white-100:          #BEC1DD;
  --color-white-200:          #C1C2D3;

  --color-blue-100:           #E4ECFF;
  --color-purple:             #CBACF9;

  /* — Variables dynamiques (nées de votre config JS) — */
  --color-border:             hsl(var(--border));
  --color-input:              hsl(var(--input));
  --color-ring:               hsl(var(--ring));
  --color-background:         hsl(var(--background));
  --color-foreground:         hsl(var(--foreground));
  --color-primary:            hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary:          hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-destructive:        hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-muted:              hsl(var(--muted));
  --color-muted-foreground:   hsl(var(--muted-foreground));
  --color-accent:             hsl(var(--accent));
  --color-accent-foreground:  hsl(var(--accent-foreground));
  --color-popover:            hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-card:               hsl(var(--card));
  --color-card-foreground:    hsl(var(--card-foreground));

  /* — Radius personnalisés via namespace --radius-* — */
  --radius-lg:                var(--radius);
  --radius-md:                calc(var(--radius) - 2px);
  --radius-sm:                calc(var(--radius) - 4px);
}

/* 3) Variables light / dark pour ton design system (card, popover, primary…) */
@layer base {
  :root {
    --background:              0 0% 100%;
    --foreground:              240 10% 3.9%;

    --card:                    0 0% 100%;
    --card-foreground:         240 10% 3.9%;

    --popover:                 0 0% 100%;
    --popover-foreground:      240 10% 3.9%;

    --primary:                 240 5.9% 10%;
    --primary-foreground:      0 0% 98%;

    --secondary:               240 4.8% 95.9%;
    --secondary-foreground:    240 5.9% 10%;

    --muted:                   240 4.8% 95.9%;
    --muted-foreground:        240 3.8% 46.1%;

    --accent:                  240 4.8% 95.9%;
    --accent-foreground:       240 5.9% 10%;

    --destructive:             0 84.2% 60.2%;
    --destructive-foreground:  0 0% 98%;

    --border:                  240 5.9% 90%;
    --input:                   240 5.9% 90%;
    --ring:                    240 10% 3.9%;
  }

  .dark {
    --background:              240 10% 3.9%;
    --foreground:              0 0% 98%;

    --card:                    240 10% 3.9%;
    --card-foreground:         0 0% 98%;

    --popover:                 240 10% 3.9%;
    --popover-foreground:      0 0% 98%;

    --primary:                 0 0% 98%;
    --primary-foreground:      240 5.9% 10%;

    --secondary:               240 3.7% 15.9%;
    --secondary-foreground:    0 0% 98%;

    --muted:                   240 3.7% 15.9%;
    --muted-foreground:        240 5% 64.9%;

    --accent:                  240 3.7% 15.9%;
    --accent-foreground:       0 0% 98%;

    --destructive:             0 62.8% 30.6%;
    --destructive-foreground:  0 0% 98%;

    --border:                  240 3.7% 15.9%;
    --input:                   240 3.7% 15.9%;
    --ring:                    240 4.9% 83.9%;
  }

  /* Reset & styles de base */
  * {
    @apply scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

/* 4) Utilitaires personnalisés */
@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }
  .rounded-lg { border-radius: var(--radius-lg); }
  .rounded-md { border-radius: var(--radius-md); }
  .rounded-sm { border-radius: var(--radius-sm); }

  @keyframes accordion-down { from { height: 0 } to { height: var(--radix-accordion-content-height) } }
  @keyframes accordion-up   { from { height: var(--radix-accordion-content-height) } to { height: 0 } }
  @keyframes spotlight      { 0% { opacity: 0; transform: translate(-72%, -62%) scale(.5) } 100% { opacity: 1; transform: translate(-50%,-40%) scale(1) } }
  @keyframes shimmer        { from { background-position: 0 0 } to { background-position: -200% 0 } }
  @keyframes moveHorizontal { 0% { transform: translateX(-50%) translateY(-10%) } 50% { transform: translateX(50%) translateY(10%) } 100% { transform: translateX(-50%) translateY(-10%) } }
  @keyframes moveInCircle   { 0% { transform: rotate(0deg) } 50% { transform: rotate(180deg) } 100% { transform: rotate(360deg) } }
  @keyframes moveVertical   { 0% { transform: translateY(-50%) } 50% { transform: translateY(50%) } 100% { transform: translateY(-50%) } }
  @keyframes scroll         { to { transform: translate(calc(-50% - .5rem)) } }

  .animate-accordion-down { animation: accordion-down 0.2s ease-out; }
  .animate-accordion-up   { animation: accordion-up   0.2s ease-out; }
  .spotlight              { animation: spotlight      2s ease .75s forwards; }
  .shimmer                { animation: shimmer        2s linear infinite; }
  .first                  { animation: moveVertical   30s ease infinite; }
  .second                 { animation: moveInCircle   20s reverse infinite; }
  .third                  { animation: moveInCircle   40s linear infinite; }
  .fourth                 { animation: moveHorizontal 40s ease infinite; }
  .fifth                  { animation: moveInCircle   20s ease infinite; }
  .scroll                 { animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite; }
}
```