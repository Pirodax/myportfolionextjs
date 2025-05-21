'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  const root = document.getElementById('modal-root');
  return root ? createPortal(children, root) : null;
}