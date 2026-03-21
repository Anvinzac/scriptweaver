import { useState } from 'react';
import { BookOpen, Layers, Plus, Check, X } from 'lucide-react';
import useScriptStore from '../store/useScriptStore';
import { demoScripts } from '../store/demoData';

function useScripts() {
  const demoMode = useScriptStore((s) => s.demoMode);
  const userScripts = useScriptStore((s) => s.userScripts);
  return demoMode ? demoScripts : userScripts;
}

export default function TopicsView() {
  const scripts = useScripts();
  const demoMode = useScriptStore((s) => s.demoMode);
  const toggleDemoMode = useScriptStore((s) => s.toggleDemoMode);
  const selectScript = useScriptStore((s) => s.selectScript);
  const addScript = useScriptStore((s) => s.addScript);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState('');

  const getStats = (script) => {
    let sentences = 0;
    for (const ch of script.chapters) {
      for (const p of ch.ideas) {
        sentences += p.sentenceBlocks.length;
      }
    }
    return { chapters: script.chapters.length, sentences };
  };

  const handleAdd = () => {
    if (title.trim()) {
      addScript(title.trim());
      setTitle('');
      setAdding(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <header className="pt-12 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-glow-start to-glow-end">
              <BookOpen size={18} strokeWidth={1.5} className="text-white" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-glow-start to-glow-mid bg-clip-text text-transparent">
              ScriptWeaver
            </span>
          </div>

          {/* Demo / My Data toggle */}
          <button
            onClick={toggleDemoMode}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className={`w-8 h-[18px] rounded-full relative transition-colors duration-200 ${demoMode ? 'bg-amber-400/40' : 'bg-cyan-400/40'}`}>
              <div className={`absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white shadow-sm transition-transform duration-200 ${demoMode ? 'translate-x-[16px]' : 'translate-x-[2px]'}`} />
            </div>
            <span className="text-[11px] font-medium text-ink-light/60">
              {demoMode ? 'Demo' : 'My Data'}
            </span>
          </button>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          {demoMode ? 'Demo Scripts' : 'My Scripts'}
        </h1>
        <p className="text-ink-light text-sm mt-1">
          {scripts.length} topics
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {scripts.map((script) => {
          const stats = getStats(script);
          return (
            <button
              key={script.id}
              onClick={() => selectScript(script.id)}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] group active:scale-[0.97] transition-transform duration-100"
            >
              <img
                src={script.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <h2 className="text-sm font-semibold text-white leading-tight mb-1.5">
                  {script.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/60">
                    {stats.chapters} ch
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-white/60">
                    <Layers size={9} strokeWidth={1.5} />
                    {stats.sentences}
                  </span>
                </div>
              </div>
            </button>
          );
        })}

        {/* Add topic placeholder — only in user mode */}
        {!demoMode && (
          adding ? (
            <div className="rounded-2xl border-2 border-dashed border-white/15 aspect-[4/5] flex flex-col items-center justify-center p-4 gap-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAdd(); if (e.key === 'Escape') { setAdding(false); setTitle(''); } }}
                placeholder="Script title..."
                autoFocus
                className="w-full bg-white/10 text-sm text-ink rounded-lg px-3 py-2 outline-none border border-cyan-400/20 focus:border-cyan-400/50 placeholder:text-ink-light/30 text-center"
              />
              <div className="flex gap-2">
                <button onClick={handleAdd} className="p-1.5 text-green-400/70 hover:text-green-400"><Check size={18} /></button>
                <button onClick={() => { setAdding(false); setTitle(''); }} className="p-1.5 text-ink-light/40 hover:text-ink-light"><X size={18} /></button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setAdding(true)}
              className="rounded-2xl border-2 border-dashed border-white/15 aspect-[4/5] flex flex-col items-center justify-center gap-2 text-ink-light/30 hover:text-cyan-400/60 hover:border-cyan-400/30 transition-colors active:scale-[0.97]"
            >
              <Plus size={24} strokeWidth={1.5} />
              <span className="text-xs font-medium">New Script</span>
            </button>
          )
        )}
      </div>
    </div>
  );
}
