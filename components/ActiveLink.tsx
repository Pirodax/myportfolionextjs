
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
