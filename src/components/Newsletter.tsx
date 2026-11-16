import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-chalk py-16 sm:py-20 border-b border-sand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium">
          <Mail className="w-3.5 h-3.5" />
          <span>The Atelier Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-umber font-normal text-balance">
          Join us for quiet dispatches on home, textiles & sleep.
        </h2>

        <p className="font-sans text-xs sm:text-sm text-soft-graphite/80 max-w-lg mx-auto leading-relaxed">
          Receive seasonal dye release previews, bedroom styling guides, and a 10% welcome privilege toward your first bed set. We never flood your inbox.
        </p>

        {subscribed ? (
          <div className="p-4 bg-olive-ink/10 border border-olive-ink/30 text-olive-ink max-w-md mx-auto text-xs font-sans flex items-center justify-center space-x-2">
            <Check className="w-4 h-4" />
            <span>Thank you. Your 10% welcome privilege code has been sent to your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3.5 bg-porcelain border border-sand-border text-xs text-soft-graphite placeholder:text-soft-graphite/40 focus:outline-none focus:border-umber"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-umber text-porcelain hover:bg-soft-graphite text-xs font-sans uppercase tracking-widest font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Join Circle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-umber/50 font-sans">
          You may unsubscribe at any time. Read our Privacy Charter.
        </p>

      </div>
    </section>
  );
};
