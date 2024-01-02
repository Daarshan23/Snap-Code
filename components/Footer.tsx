"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link 
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.instagram.com/daarshan.23/" target="_blank" 
      >
        Follow Me &nbsp;&#129109;
      </Link>
      <Link
        href="https://thecodedealer.com"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <Image src="logo-white.svg" width={20} height={20} alt="" />
        <span className="pl-1 font-medium text-slate-200">DJ-Dev</span>
      </Link>
      <Link
        href="https://github.com/Daarshan23/Snap-Code"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code Here &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
