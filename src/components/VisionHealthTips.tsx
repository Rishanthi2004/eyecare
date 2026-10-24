import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTICLES_DATA, ArticleItem } from '../data/hospitalData';
import { ArrowUpRight, X } from 'lucide-react';

export const VisionHealthTips: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2 font-mono">
            Clinical Insights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A192F]">
            Vision Health & Science Insights
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Evidence-based perspectives authored by our senior ophthalmic surgeons to help you protect and optimize your sight.
          </p>
        </div>
      </div>

      {/* Articles Grid (Flat, Pearl White Hairline) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES_DATA.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedArticle(article)}
            className="group bg-white hover:bg-slate-50/60 rounded-2xl p-7 border border-slate-200/90 hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-mono">
                <span className="font-semibold text-teal-700">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-teal-700 transition-colors mb-3 leading-snug">
                {article.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-500">{article.author}</span>
              <span className="text-teal-700 font-semibold group-hover:underline flex items-center gap-1">
                <span>Read article</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Article Detail Modal (Flat, Zero Shadows) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 my-8 text-[#0A192F]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-700">
                  {selectedArticle.category} · {selectedArticle.readTime}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article modal"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-3 leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="text-xs text-slate-500 mb-6 font-medium">
                Authored by {selectedArticle.author}
              </div>

              <div className="prose prose-slate text-sm sm:text-base leading-relaxed text-slate-600 mb-8 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">ESKOR Clinical Science Editorial Board</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-full bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
