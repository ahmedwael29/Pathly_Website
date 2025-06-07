"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Logo({ size = "default" }) {
  const dimensions =
    size === "large" ? { width: 60, height: 60 } : { width: 70, height: 40 };
  const textSize = size === "large" ? "text-2xl" : "text-xl";
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Link
      href="/"
      className="flex items-center space-x-2 group"
      onClick={handleClick}
    >
      <motion.div
        // className={`rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden`}
        className={`flex items-center justify-center overflow-hidden`}
        style={dimensions}
        whileHover={{ scale: 1.2}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        
        <Image
          src="/Logo.png"
          alt="Logo"
          width={dimensions.width}
          height={dimensions.height}
          className="object-cover"
        />
      </motion.div>
      {/* <motion.span
        className={`${textSize} font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        PATHLY
      </motion.span> */}
    </Link>
  );
}
