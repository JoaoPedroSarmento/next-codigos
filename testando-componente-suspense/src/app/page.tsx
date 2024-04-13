"use client";
import { Suspense } from "react";
import AsyncComponent from "../components/AsyncComponent";
import { NextPage } from "next";
function waitFor(ms: number | undefined) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
}

const App: NextPage = async () => {
  {
    await waitFor(5000);
  }
  return (
    <div>
      <h1>Next.js Suspense Example</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <AsyncComponent />
      </Suspense>
    </div>
  );
};

export default App;
