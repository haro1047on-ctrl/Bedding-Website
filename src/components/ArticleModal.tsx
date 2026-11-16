import React from 'react';
import { JournalArticle } from '../types';
import { X, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

interface ArticleModalProps {
  article: JournalArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onExploreBedding: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onExploreBedding,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 sm:py-12">
        <div className="relative w-full max-w-3xl bg-chalk border border-sand-border shadow-elevated p-6 sm:p-12 z-10 max-h-[92vh] overflow-y-auto">
          
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-porcelain border border-sand-border text-umber hover:text-soft-graphite transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Article Header */}
          <div className="space-y-4 pb-6 border-b border-sand-border">
            <div className="flex items-center space-x-3 text-xs font-sans text-olive-ink uppercase tracking-wider font-medium">
              <span>{article.category}</span>
              <span>·</span>
              <span className="flex items-center space-x-1 text-umber/60">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
              <span>·</span>
              <span className="text-umber/60">{article.date}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-umber font-normal leading-[1.15] text-balance">
              {article.title}
            </h1>

            <p className="font-serif text-base sm:text-lg text-umber/80 italic leading-relaxed">
              "{article.excerpt}"
            </p>
          </div>

          {/* Lead Photo */}
          <div className="my-8 aspect-[16/9] w-full overflow-hidden bg-oat/20 border border-sand-border">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Editorial Content */}
          <div className="space-y-5 text-sm sm:text-base font-sans text-soft-graphite/90 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Atelier Sign-off */}
          <div className="mt-10 pt-8 border-t border-sand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-serif text-base text-umber block">SEREIN Atelier Editorial</span>
              <span className="text-xs text-soft-graphite/60 font-sans">Curated for slow living & restful spaces.</span>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onExploreBedding();
              }}
              className="px-6 py-2.5 bg-umber text-porcelain text-xs font-sans uppercase tracking-widest font-medium hover:bg-soft-graphite transition-colors flex items-center space-x-2"
            >
              <span>Explore The Bedding Pieces</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
