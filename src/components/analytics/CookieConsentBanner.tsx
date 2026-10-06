import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X, Check, Lock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { analytics } from '@/services/analyticsService';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('isi_analytics_consent');
      if (!consent) {
        // Delay slightly for smooth page load
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked
    }
  }, []);

  const handleConsent = (status: 'accepted' | 'declined' | 'custom') => {
    try {
      localStorage.setItem('isi_analytics_consent', status);
      localStorage.setItem('isi_analytics_pref_analytics', status === 'declined' ? 'false' : String(analyticsAllowed));
      localStorage.setItem('isi_analytics_pref_marketing', status === 'declined' ? 'false' : String(marketingAllowed));

      // Post consent preference to server
      fetch('/api/analytics/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId: analytics.getVisitorId(),
          status,
          analyticsAllowed: status === 'declined' ? false : analyticsAllowed,
          marketingAllowed: status === 'declined' ? false : marketingAllowed
        })
      }).catch(() => { /* silent fail */ });
    } catch { /* ignore */ }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl p-5 text-white text-sm">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-semibold text-white text-base tracking-wide flex items-center gap-1.5">
                Privacy & Analytics Disclosures
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-300 border border-blue-700/50">
                  DPDP & GDPR
                </span>
              </h3>
              <button
                onClick={() => handleConsent('declined')}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed mb-3">
              ISI Security utilizes strictly privacy-conscious, non-intrusive analytics and security telemetry to protect systems, understand service engagement, and optimize enterprise operations. No passwords, biometric credentials, or confidential form data are ever captured.
            </p>

            {showPreferences && (
              <div className="mb-3.5 p-3 rounded-xl bg-slate-800/90 border border-slate-700/70 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-medium text-slate-200">Strictly Essential Security</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold">Always Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cookie className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-medium text-slate-200">Session & Traffic Intelligence</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="rounded border-slate-600 text-blue-600 focus:ring-blue-500 cursor-pointer h-4 w-4"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                onClick={() => handleConsent('accepted')}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-sm cursor-pointer"
              >
                Accept All
              </button>
              
              <button
                onClick={() => handleConsent('declined')}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                Essential Only
              </button>

              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors ml-auto underline-offset-4 hover:underline"
              >
                {showPreferences ? 'Hide Options' : 'Preferences'}
              </button>

              <Link
                to="/cookiepolicy"
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-0.5 ml-1"
              >
                Policy <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
