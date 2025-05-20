# Utilisation de useRoute

# redirection des page j'utilese useRouter 
voirs doc:
https://nextjs.org/docs/pages/api-reference/functions/use-router

## Voici un exemple complet :

ActiveLink qui accepte n’importe quel enfant (ici une image).

Une page app/page.tsx (ou app/layout.tsx) qui utilise ce lien-image.

Le routeur Next.js App Router recommande bien de placer chaque route dans un dossier app/nom-de-la-route/page.tsx.

tsx
Copier le code
// app/components/ActiveLink.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { MouseEvent } from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === href;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        display: 'inline-block',
        opacity: isActive ? 0.6 : 1,
        cursor: 'pointer'
      }}
    >
      {children}
    </a>
  );
}
tsx
Copier le code
// app/page.tsx  (votre "home" qui donne accès à Projet1 via une image)
import ActiveLink from './components/ActiveLink';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Bienvenue sur mon site</h1>
      <ActiveLink href="/projet1">
        <Image
          src="/images/projet1-thumbnail.png"
          alt="Accéder au projet 1"
          width={200}
          height={200}
          style={{ borderRadius: 8 }}
        />
      </ActiveLink>
    </main>
  );
}
tsx
Copier le code
// app/projet1/page.tsx  (la page Projet1)
export default function Projet1Page() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Projet 1</h1>
      <p>Contenu de votre projet 1…</p>
    </main>
  );
}