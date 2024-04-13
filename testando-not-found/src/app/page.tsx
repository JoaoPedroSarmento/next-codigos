"use client"
import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => console.log("Hello from Next.js") , []);
  return <div>Welcome to my Next.js homepage!</div>;
}
