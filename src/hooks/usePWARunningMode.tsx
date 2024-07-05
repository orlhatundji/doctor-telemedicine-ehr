import { useEffect, useState } from "react";

interface PWARunningMode {
  isStandalone: boolean;
  isInstalled: boolean;
  isAndroid: boolean;
  isIOS: boolean;
}

const usePWARunningMode = (): PWARunningMode => {
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);

  useEffect(() => {
    // Check if running in standalone mode (for iOS Safari)
    const isStandaloneMode = (window.navigator as any).standalone;

    // Check if running in standalone mode (for other browsers)
    const matchMediaStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;

    // Update the states
    setIsStandalone(!!isStandaloneMode || matchMediaStandalone);

    // Detect Android or iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(userAgent));
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Check if app is installed using the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setIsInstalled(false); // If this event fires, the app is not installed
    });

    // Check if the app is installed using the appinstalled event
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true); // App is installed
    });

    // Initial install status check
    const initialInstallCheck = matchMediaStandalone;
    setIsInstalled(initialInstallCheck);

  }, []);

  return { isStandalone, isInstalled, isAndroid, isIOS };
};

export default usePWARunningMode;
