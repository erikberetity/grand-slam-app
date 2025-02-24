// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grand Slam App</title>
      </head>
      <body className="font-sans bg-gray-50">
        {children} {/* This will render the content of the page */}
      </body>
    </html>
  );
}
