// components/AdsterraNativeAd.tsx
"use client";

import { useEffect } from "react";

const AdsterraNativeAd: React.FC = () => {
  useEffect(() => {
    // Check if the script is already present (prevents duplicate scripts)
    if (document.getElementById("adsterra-script")) {
      return;
    }

    // Create and append the Adsterra script
    const script = document.createElement("script");
    script.id = "adsterra-script";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl25614958.profitablecpmrate.com/ab8cfd6f2c18177fd9416fcc2affa545/invoke.js";

    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Adsterra ad container - must match the ID provided by Adsterra */}
      <div id="container-ab8cfd6f2c18177fd9416fcc2affa545" />
    </>
  );
};

export default AdsterraNativeAd;
