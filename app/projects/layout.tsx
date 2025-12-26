"use client";

import { useEffect } from 'react';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Set body background to white for project pages
    document.body.style.background = '#ffffff';
    
    // Cleanup: restore black background when leaving project pages
    return () => {
      document.body.style.background = 'linear-gradient(to bottom, #000000 0%, #0f0f0f 50%, #1b1b1b 100%)';
    };
  }, []);

  return <>{children}</>;
}
