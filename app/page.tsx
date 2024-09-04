"use client";

import Flow from "@/components/flow";
import Navbar from "@/components/navbar";


export default function App() {
  return (
    <>
      <Navbar/>
      <div className="xNodeFlow">
        <Flow />
      </div>
    </>
  );
}