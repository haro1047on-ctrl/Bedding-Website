import React from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { JournalArticle } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-sand-border">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium mb-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>The Atelier Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-umber font-normal">
              Essays on sleep rituals & textiles
            </h2>
          </div>
          <p className="text-xs text-soft-graphite/70 font-sans mt-2 sm:mt-0 max-w-sm">
            Practical care guides, styling methodologies, and fabric science from our workshop.
          </p>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article 
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-oat/20 border border-sand-border mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-chalk/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-sans uppercase tracking-wider text-olive-ink">
                    {article.category}
                  </div>
                </div>

                {/* Article Meta */}
                <div className="flex items-center space-x-2 text-[11px] text-umber/50 font-sans mb-1.5">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-umber group-hover:text-olive-ink transition-colors font-normal leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-2 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Action */}
              <div className="pt-4 mt-4 border-t border-sand-border/60">
                <span className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest text-olive-ink group-hover:text-umber font-medium">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
