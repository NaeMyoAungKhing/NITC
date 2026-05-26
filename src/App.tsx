/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PortalMode } from "./types";
import LandingScreen from "./components/LandingScreen";
import DashboardScreen from "./components/DashboardScreen";
import MissionsScreen from "./components/MissionsScreen";
import ProgressScreen from "./components/ProgressScreen";
import ParentScreen from "./components/ParentScreen";
import ContactFacultyModal from "./components/ContactFacultyModal";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";

// Imported as modules so Vite fingerprints them and they resolve in production builds
// (the previous "/src/..." string paths only worked in the dev server).
import CAMPUS_BG from "./assets/images/nitc_campus_1779805442158.png";
import ROBOTICS_LAB_IMG from "./assets/images/robotics_lab_1779805462376.png";

export default function App() {
  const [currentMode, setCurrentMode] = useState<PortalMode>("onboarding");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleSetMode = (mode: PortalMode) => {
    setCurrentMode(mode);
  };

  const selectDashboardMissions = () => {
    setCurrentMode("missions");
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Top Banner Navigation */}
      <Navbar 
        currentMode={currentMode} 
        onSetMode={handleSetMode} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Core Screen Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
        {currentMode === "onboarding" && (
          <LandingScreen 
            onSelectMode={handleSetMode} 
            backgroundImageUrl={CAMPUS_BG}
          />
        )}

        {currentMode === "dashboard" && (
          <DashboardScreen 
            onNavigateToMissions={selectDashboardMissions}
            roboticsLabImage={ROBOTICS_LAB_IMG}
          />
        )}

        {currentMode === "missions" && (
          <MissionsScreen />
        )}

        {currentMode === "progress" && (
          <ProgressScreen />
        )}

        {currentMode === "parent" && (
          <ParentScreen 
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
      </main>

      {/* Bottom Sticky Tab controller */}
      <FooterNav 
        currentMode={currentMode} 
        onSetMode={handleSetMode}
      />

      {/* Popovers & Floating Modals */}
      <ContactFacultyModal 
        isOpen={is