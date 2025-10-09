import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm">
      <div className="bg-black rounded-lg p-6 shadow-2xl border-2 border-galactic-purple">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              🍪 Piškotki
            </h3>
            <button
              onClick={declineCookies}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Zapri"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-white/80 text-sm leading-relaxed">
            Uporabljamo piškotke za izboljšanje vaše uporabniške izkušnje.
          </p>
          
          <div className="flex flex-col gap-2">
            <button
              onClick={acceptCookies}
              className="bg-galactic-purple px-4 py-2 rounded-lg text-white font-semibold glow-purple-hover transition-all duration-300 hover:scale-105 text-sm w-full"
            >
              Sprejmi
            </button>
            <button
              onClick={declineCookies}
              className="bg-white/10 px-4 py-2 rounded-lg text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm w-full"
            >
              Zavrni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
