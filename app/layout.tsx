import React from "react";
import "../styles/globals.css"

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <html>
      <head>
        <title>RFC Layout test</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
