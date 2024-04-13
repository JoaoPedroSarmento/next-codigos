import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Layout da página sobre</h2>
      {children}
    </div>
  );
}
