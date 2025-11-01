import React from "react";
// import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Navigation / Title */}
    
      <Navbar/>

      {/* Main Student Profile Section */}
      <main className="flex-grow flex justify-center items-center py-10">
        <ProfileCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
