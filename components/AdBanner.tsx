"use client";
import { useEffect, useRef } from "react";
export default function AdBanner(): JSX.Element {
  const banner = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const atOptions = {
      key: "e621b74378d874e0bbd6ef1ae6b2a295",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      // Append configuration and script to the banner
      banner.current.append(conf);
      banner.current.append(script);

      // Optional: Add error handling for script loading
      script.onerror = () => {
        console.error("Failed to load the ad script:", script.src);
      };
    }
  }, []); // Ensure this runs only once on mount

  return <div className="" ref={banner}></div>;
}
