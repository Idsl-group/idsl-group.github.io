import React from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

type Props = {};

export default function Page({}: Props) {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Navbar />
    </main>
  );
}
