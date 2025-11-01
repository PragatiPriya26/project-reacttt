import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-3 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Department of Computer Science Engineering
      </p>
    </footer>
  );
}

export default Footer;
