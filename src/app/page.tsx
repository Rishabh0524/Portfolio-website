import { Metadata, Viewport } from "next";
import HomeWrapper from "./HomeWrapper";

// 1. Viewport aur ThemeColor ko alag export kiya (Warning Fix)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Rishabh Malviya - MERN Stack Developer Portfolio",
  description:
    "Portfolio of Rishabh Malviya, a MERN Stack and Next.js Developer specializing in React, Node.js, TypeScript, and modern web development.",
  keywords: [
    "Rishabh Malviya",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "JavaScript Developer",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Rishabh Malviya- MERN Stack Developer Portfolio",
    description:
      "Portfolio of Rishabh Malviya, a MERN Stack and Next.js Developer specializing in React, Node.js, TypeScript, and modern web development.",
  },
  twitter: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Rishabh Malviya - MERN Stack Developer Portfolio",
    description:
      "Portfolio of Rishabh Malviya, a MERN Stack and Next.js Developer specializing in React, Node.js, TypeScript, and modern web development.",
  },
  // Note: Viewport aur themeColor yahan se hata kar upar alag export kar diya hai
};

export default function Home() {
  // 2. Yahan 'profileImg' variable ki jagah seedha string path diya hai
  return <HomeWrapper profileImg="/profile.jpg" />;
}