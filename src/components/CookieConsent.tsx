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
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto p-4">
        <div className="glass rounded-2xl p-6 shadow-2xl border border-white/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                🍪 Piškotki
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Uporabljamo piškotke za izboljšanje vaše uporabniške izkušnje, analizo prometa in prilagajanje vsebine. 
                S klikom na "Sprejmi vse" se strinjate z uporabo piškotkov.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={acceptCookies}
                  className="bg-galactic-purple px-6 py-2.5 rounded-full text-white font-semibold glow-purple-hover transition-all duration-300 hover:scale-105 text-sm"
                >
                  Sprejmi vse
                </button>
                <button
                  onClick={declineCookies}
                  className="bg-white/10 px-6 py-2.5 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  Zavrni
                </button>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Zapri"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
