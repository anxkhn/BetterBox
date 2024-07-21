import { Component } from "@/components/component/component";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Component />
    </div>
  );
}
export const metadata = {
  title: "BetterBox",
  description: "Better AmbitionBox",
  icons: {
    icon: "/logo.svg",
  },

}
