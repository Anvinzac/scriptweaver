import { useState } from 'react';
import { ArrowLeft, FileText, Plus, Check, X } from 'lucide-react';
import useScriptStore from '../store/useScriptStore';
import { demoScripts } from '../store/demoData';

export default function OutlinerView() {
  const demoMode = useScriptStore((s) => s.demoMode);
  const userScripts = useScriptStore((s) => s.userScripts);
  const selectedScriptId = useScriptStore((s) => s.selectedScriptId);
  const selectChapter = useScriptStore((s) => s.selectChapter);
  const goBackToTopics = useScriptStore((s) => s.goBackToTopics);
  const addChapter = useScriptStore((s) => s.addChapter);

  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState('');

  const scripts = demoMode ? demoScripts : userScripts;
  const script = scripts.find((s) => s.id === selectedScriptId) || null;
  if (!script) return null;

  const getChapterStats = (chapter) => {
    let sentences = 0;
    let versions = 0;
    for (const p of chapter.ideas) {
      for (const sb of p.sentenceBlocks) {
        sentences++;
        versions += sb.versions.length;
      }
    }
    return { sentences, versions };
  };

  const handleAdd = () => {
    if (title.trim()) {
      addChapter(script.id, title.trim());
      setTitle('');
      setAdding(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <header className="pt-6 pb-5">
        <button
          onClick={goBackToTopics}
          className="flex items-center gap-1.5 text-accent text-sm font-medium mb-3"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          All Scripts
        </button>
        <h1 className="text-2xl font-semibold tracking-tight text-ink">
          {script.title}
        </h1>
        <p className="text-ink-light text-sm mt-1">
          {script.chapters.length} chapters
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {script.chapters
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((chapter) => {
            const stats = getChapterStats(chapter);
            return (
              <button
                key={chapter.id}
                onClick={() => selectChapter(chapter.id)}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] group active:scale-[0.97] transition-transform duration-100"
              >
                <img
                  src={chapter.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-3.5">
                  <h2 className="text-sm font-semibold text-white leading-tight mb-1.5">
                    {chapter.title}
                  </h2>
                  {chapter.description && (
                    <p className="text-[13px] leading-[1.5] text-white/60 line-clamp-4 mb-2">
                      {chapter.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-0.5 text-[10px] text-white/60">
                      <FileText size={9} strokeWidth={1.5} />
                      {stats.sentences}
                    </span>
                    <span className="text-[10px] text-white/60">
                      {stats.versions} ver
                    </span>
                  </div>
                </div>
              </button>
            );
          })}

        {/* Add chapter placeholder */}
        {adding ? (
          <div className="rounded-2xl border-2 border-dashed border-white/15 aspect-[4/5] flex flex-col items-center justify-center p-4 gap-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAdd(); if (e.key === 'Escape') { setAdding(false); setTitle(''); } }}
              placeholder="Chapter title..."
              autoFocus
              className="w-full bg-white/10 text-sm text-ink rounded-lg px-3 py-2 outline-none border border-cyan-400/20 focus:border-cyan-400/50 placeholder:text-ink-light/30 text-center"
            />
            <div className="flex gap-2">
              <button onClick={handleAdd} className="p-1.5 text-green-400/70 hover:text-green-400">
                <Check size={18} />
              </button>
              <button onClick={() => { setAdding(false); setTitle(''); }} className="p-1.5 text-ink-light/40 hover:text-ink-light">
                <X size={18} />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setAdding(true)}
            className="rounded-2xl border-2 border-dashed border-white/15 aspect-[4/5] flex flex-col items-center justify-center gap-2 text-ink-light/30 hover:text-cyan-400/60 hover:border-cyan-400/30 transition-colors active:scale-[0.97]"
          >
            <Plus size={24} strokeWidth={1.5} />
            <span className="text-xs font-medium">New Chapter</span>
          </button>
        )}
      </div>
    </div>
  );
}
