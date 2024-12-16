import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    // Function to check current mode
    const checkDarkMode = () => {
      setDarkMode(htmlElement.classList.contains("dark"));
    };

    // Observe changes in the `class` attribute of the <html> element
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    // Start observing the `class` attribute for changes
    observer.observe(htmlElement, { attributes: true, attributeFilter: ["class"] });

    // Set initial state
    checkDarkMode();

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return darkMode;
}