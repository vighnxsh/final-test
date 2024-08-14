import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { CanvasClient } from "@dscvr-one/canvas-client-sdk";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(function onFirstMount() {
    if (window.self !== window.top) {
      const canvasClient = new CanvasClient();
    }
  }, []); // empty dependencies array means "run this once on first mount"

  return (
   <div>
     <meta property="dscvr:canvas:version" content="vNext" />
    <h1 className=" p-10 text-8xl font-bold underline">Hii </h1>
   </div>
  );
}
