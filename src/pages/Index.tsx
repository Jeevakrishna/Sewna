import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { LandingPage } from "@/components/landing/LandingPage";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if loading has been shown in this session
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");
    if (hasLoadedBefore) {
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasLoadedBefore", "true");
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return <LandingPage />;
};

export default Index;
