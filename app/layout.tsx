import React from "react";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className}>
      <head>
        <title>RFC Layout test</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
