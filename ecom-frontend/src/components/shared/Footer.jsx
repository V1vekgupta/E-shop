import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaBook } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  // ✅ ONLY homepage
  const showFooter = pathname === "/";

  if (!showFooter) return null;

  return (
      <footer className="mt-16 bg-gradient-to-r from-black via-gray-900 to-black text-white border-t border-gray-800">

        <div className="lg:px-14 sm:px-8 px-4 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">

          {/* Left Section */}
          <div>
            <div className="text-lg font-semibold tracking-wide">
              Developed by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Vivek Gupta
            </span>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Building modern & scalable web experiences 🚀
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 flex-wrap">

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/vivek-gupta-0bb0992b7/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-gray-700 hover:bg-[#0A66C2] hover:text-white transition duration-300 hover:scale-105"
            >
              <FaLinkedin />
              <span className="text-sm">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/v1vekgupta"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-gray-700 hover:bg-white hover:text-black transition duration-300 hover:scale-105"
            >
              <FaGithub />
              <span className="text-sm">GitHub</span>
            </a>

            {/* ✅ Documentation Button */}
            <a
                href="https://github.com/v1vekgupta"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-gray-700 hover:bg-white hover:text-black transition duration-300 hover:scale-105"
            >
              <FaGithub />
              <span className="text-sm">Docs</span>
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-500 pb-4 flex items-center justify-center gap-1">
          Made with <FaHeart className="text-red-500" /> by Vivek Gupta © {new Date().getFullYear()}
        </div>

      </footer>
  );
};

export default Footer;