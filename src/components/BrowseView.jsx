import { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, Layers, FileText, Plus, Check, X } from 'lucide-react';
import useScriptStore from '../store/useScriptStore';
import { demoScripts } from '../store/demoData';

function useScripts() {
  const demoMode = useScriptStore((s) => s.demoMode);
  const userScripts = useScriptStore((s) => s.userScripts);
  return demoMode ? demoScripts : userScripts;
}

// Hook for double-tap detection
function useDoubleTap(callback, delay = 300) {
  const lastTap = useRef(0);
  return useCallback((e) => {
    const now = Date.now();
    if (now - lastTap.current < delay) {
      e.preventDefault();
      e.stopPropagation();
      callback(e);
      lastTap.current = 0;
    } else {
      lastTap.current = now;
    }
  }, [callback, delay]);
}

// Edit popup modal
function EditPopup({ title, value, onSave, onClose, multiline = false }) {
  const [text, setText] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleSave = () => {
    if (text.trim()) {
      onSave(text.trim());
      onClose();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={onClose} />
      <div className="fixed left-4 right-4 top-1/2 -translate-y-1/2 z-[70] bg-surface-2 rounded-2xl border border-white/10 shadow-2xl p-5 max-w-md mx-auto">
        <h3 className="text-sm font-semibold text-ink mb-3">{title}</h3>
        {multiline ? (
          <textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && e.metaKey) handleSave(); if (e.key === 'Escape') onClose(); }}
            rows={4}
            className="w-full bg-white/8 text-sm text-ink rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-accent/50 placeholder:text-ink-light/30 resize-none leading-relaxed"
          />
        ) : (
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') onClose(); }}
            className="w-full bg-white/8 text-sm text-ink rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-accent/50 placeholder:text-ink-light/30"
          />
        )}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="text-xs font-medium text-ink-light/60 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-xs font-medium text-white bg-gradient-to-r from-glow-start to-glow-end px-4 py-2 rounded-lg active:scale-95 transition-transform"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

function TopicCard({ script, stats, isSelected, demoMode, onTap, onDoubleTap }) {
  const lastTap = useRef(0);

  const handleClick = (e) => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      e.preventDefault();
      e.stopPropagation();
      onDoubleTap();
      lastTap.current = 0;
    } else {
      lastTap.current = now;
      onTap();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-full rounded-xl overflow-hidden aspect-[4/3] group active:scale-[0.97] transition-all duration-150 ${
        isSelected ? 'ring-2 ring-cyan-400/60 ring-offset-1 ring-offset-transparent' : ''
      }`}
    >
      <img src={script.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className={`absolute inset-0 transition-colors ${isSelected ? 'bg-gradient-to-t from-cyan-900/80 via-black/40 to-black/20' : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'}`} />
      <div className="absolute bottom-0 left-0 right-0 p-2.5">
        <h3 className="text-[12px] font-semibold text-white leading-tight mb-0.5 line-clamp-2">
          {script.title}
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-white/50">{stats.chapters} ch</span>
          <span className="text-[9px] text-white/50">{stats.sentences} s</span>
        </div>
      </div>
    </button>
  );
}

function ChapterCard({ chapter, stats, demoMode, onTap, onDoubleTapTitle, onDoubleTapDesc }) {
  const lastTap = useRef(0);
  const lastTapTarget = useRef(null);

  const handleClick = (e) => {
    const now = Date.now();
    const target = e.target.closest('[data-field]');
    const field = target?.dataset?.field;

    if (now - lastTap.current < 300 && !demoMode) {
      e.preventDefault();
      e.stopPropagation();
      if (field === 'desc' || lastTapTarget.current === 'desc') {
        onDoubleTapDesc();
      } else {
        onDoubleTapTitle();
      }
      lastTap.current = 0;
      lastTapTarget.current = null;
    } else {
      lastTap.current = now;
      lastTapTarget.current = field;
      // Delay single tap to distinguish from double tap
      setTimeout(() => {
        if (lastTap.current === now) {
          onTap();
        }
      }, 300);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full rounded-xl overflow-hidden group active:scale-[0.97] transition-transform duration-100 cursor-pointer"
    >
      <img src={chapter.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
      <div className="relative p-3.5">
        <h3 data-field="title" className="text-[13px] font-semibold text-white leading-tight mb-1">
          {chapter.title}
        </h3>
        {chapter.description && (
          <p data-field="desc" className="text-[11px] leading-[1.45] text-white/50 line-clamp-3 mb-2">
            {chapter.description}
          </p>
        )}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-0.5 text-[9px] text-white/50">
            <FileText size={8} strokeWidth={1.5} />
            {stats.sentences} sentences
          </span>
          <span className="text-[9px] text-white/50">
            {stats.ideas} ideas
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BrowseView() {
  const scripts = useScripts();
  const demoMode = useScriptStore((s) => s.demoMode);
  const toggleDemoMode = useScriptStore((s) => s.toggleDemoMode);
  const selectedScriptId = useScriptStore((s) => s.selectedScriptId);
  const selectScript = useScriptStore((s) => s.selectScript);
  const selectChapter = useScriptStore((s) => s.selectChapter);
  const addScript = useScriptStore((s) => s.addScript);
  const addChapter = useScriptStore((s) => s.addChapter);
  const updateScriptTitle = useScriptStore((s) => s.updateScriptTitle);
  const updateChapterTitle = useScriptStore((s) => s.updateChapterTitle);
  const updateChapterDescription = useScriptStore((s) => s.updateChapterDescription);

  const [addingTopic, setAddingTopic] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [addingChapter, setAddingChapter] = useState(false);
  const [newChapterTitle, setNewChapterTitle] = useState('');

  // Edit popup state
  const [editPopup, setEditPopup] = useState(null); // { type, id, title, value, multiline }

  const selectedScript = scripts.find((s) => s.id === selectedScriptId) || null;

  // Auto-select first topic if none selected
  useEffect(() => {
    if (!selectedScriptId && scripts.length > 0) {
      selectScript(scripts[0].id);
    }
  }, [scripts, selectedScriptId, selectScript]);

  const getTopicStats = (script) => {
    let sentences = 0;
    for (const ch of script.chapters) {
      for (const idea of ch.ideas) {
        sentences += idea.sentenceBlocks.length;
      }
    }
    return { chapters: script.chapters.length, sentences };
  };

  const getChapterStats = (chapter) => {
    let sentences = 0;
    for (const idea of chapter.ideas) {
      sentences += idea.sentenceBlocks.length;
    }
    return { sentences, ideas: chapter.ideas.length };
  };

  const handleAddTopic = () => {
    if (newTopicTitle.trim()) {
      addScript(newTopicTitle.trim());
      setNewTopicTitle('');
      setAddingTopic(false);
    }
  };

  const handleAddChapter = () => {
    if (newChapterTitle.trim() && selectedScriptId) {
      addChapter(selectedScriptId, newChapterTitle.trim());
      setNewChapterTitle('');
      setAddingChapter(false);
    }
  };

  const handleEditSave = (newValue) => {
    if (!editPopup) return;
    if (editPopup.type === 'topicTitle') updateScriptTitle(editPopup.id, newValue);
    else if (editPopup.type === 'chapterTitle') updateChapterTitle(editPopup.id, newValue);
    else if (editPopup.type === 'chapterDesc') updateChapterDescription(editPopup.id, newValue);
  };

  return (
    <div className="h-dvh flex flex-col">
      {/* Edit popup */}
      {editPopup && (
        <EditPopup
          title={editPopup.title}
          value={editPopup.value}
          multiline={editPopup.multiline}
          onSave={handleEditSave}
          onClose={() => setEditPopup(null)}
        />
      )}
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-glow-start to-glow-end">
            <BookOpen size={16} strokeWidth={1.5} className="text-white" />
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase bg-gradient-to-r from-glow-start to-glow-mid bg-clip-text text-transparent">
            ScriptWeaver
          </span>
        </div>
        <button
          onClick={toggleDemoMode}
          className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors"
        >
          <div className={`w-7 h-[16px] rounded-full relative transition-colors duration-200 ${demoMode ? 'bg-amber-400/40' : 'bg-cyan-400/40'}`}>
            <div className={`absolute top-[2px] w-[12px] h-[12px] rounded-full bg-white shadow-sm transition-transform duration-200 ${demoMode ? 'translate-x-[14px]' : 'translate-x-[2px]'}`} />
          </div>
          <span className="text-[10px] font-medium text-ink-light/60">
            {demoMode ? 'Demo' : 'Mine'}
          </span>
        </button>
      </header>

      {/* Split panels */}
      <div className="flex flex-1 min-h-0">
        {/* ─── Left: Topics ─── */}
        <div className="w-[38%] border-r border-white/5 flex flex-col min-h-0">
          <div className="px-3 pt-3 pb-2 flex-shrink-0">
            <h2 className="text-[11px] font-semibold uppercase tracking-wider text-ink-light/40">
              Topics ({scripts.length})
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto px-2 pb-3 space-y-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {scripts.map((script) => {
              const stats = getTopicStats(script);
              const isSelected = script.id === selectedScriptId;
              return (
                <TopicCard
                  key={script.id}
                  script={script}
                  stats={stats}
                  isSelected={isSelected}
                  demoMode={demoMode}
                  onTap={() => selectScript(script.id)}
                  onDoubleTap={() => !demoMode && setEditPopup({
                    type: 'topicTitle',
                    id: script.id,
                    title: 'Edit Topic Name',
                    value: script.title,
                  })}
                />
              );
            })}

            {/* Add topic placeholder */}
            {!demoMode && (
              addingTopic ? (
                <div className="rounded-xl border-2 border-dashed border-white/15 p-3 flex flex-col gap-2">
                  <input
                    value={newTopicTitle}
                    onChange={(e) => setNewTopicTitle(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleAddTopic(); if (e.key === 'Escape') { setAddingTopic(false); setNewTopicTitle(''); } }}
                    placeholder="Title..."
                    autoFocus
                    className="w-full bg-white/10 text-xs text-ink rounded-lg px-2.5 py-1.5 outline-none border border-cyan-400/20 focus:border-cyan-400/50 placeholder:text-ink-light/30"
                  />
                  <div className="flex justify-center gap-2">
                    <button onClick={handleAddTopic} className="p-1 text-green-400/70"><Check size={14} /></button>
                    <button onClick={() => { setAddingTopic(false); setNewTopicTitle(''); }} className="p-1 text-ink-light/40"><X size={14} /></button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setAddingTopic(true)}
                  className="w-full rounded-xl border-2 border-dashed border-white/10 py-4 flex flex-col items-center gap-1 text-ink-light/25 hover:text-cyan-400/50 hover:border-cyan-400/20 transition-colors"
                >
                  <Plus size={16} strokeWidth={1.5} />
                  <span className="text-[10px]">New Topic</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* ─── Right: Chapters ─── */}
        <div className="w-[62%] flex flex-col min-h-0">
          {selectedScript ? (
            <>
              <div className="px-3 pt-3 pb-2 flex-shrink-0">
                <h2 className="text-[13px] font-semibold text-ink truncate">
                  {selectedScript.title}
                </h2>
                <p className="text-[10px] text-ink-light/40 mt-0.5">
                  {selectedScript.chapters.length} chapters
                </p>
              </div>
              <div className="flex-1 overflow-y-auto px-2 pb-3 space-y-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                {selectedScript.chapters
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((chapter) => {
                    const stats = getChapterStats(chapter);
                    return (
                      <ChapterCard
                        key={chapter.id}
                        chapter={chapter}
                        stats={stats}
                        demoMode={demoMode}
                        onTap={() => selectChapter(chapter.id)}
                        onDoubleTapTitle={() => setEditPopup({
                          type: 'chapterTitle',
                          id: chapter.id,
                          title: 'Edit Chapter Title',
                          value: chapter.title,
                        })}
                        onDoubleTapDesc={() => setEditPopup({
                          type: 'chapterDesc',
                          id: chapter.id,
                          title: 'Edit Chapter Description',
                          value: chapter.description || '',
                          multiline: true,
                        })}
                      />
                    );
                  })}

                {/* Add chapter placeholder */}
                {!demoMode && (
                  addingChapter ? (
                    <div className="rounded-xl border-2 border-dashed border-white/15 p-3 flex flex-col gap-2">
                      <input
                        value={newChapterTitle}
                        onChange={(e) => setNewChapterTitle(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleAddChapter(); if (e.key === 'Escape') { setAddingChapter(false); setNewChapterTitle(''); } }}
                        placeholder="Chapter title..."
                        autoFocus
                        className="w-full bg-white/10 text-xs text-ink rounded-lg px-2.5 py-1.5 outline-none border border-cyan-400/20 focus:border-cyan-400/50 placeholder:text-ink-light/30"
                      />
                      <div className="flex justify-center gap-2">
                        <button onClick={handleAddChapter} className="p-1 text-green-400/70"><Check size={14} /></button>
                        <button onClick={() => { setAddingChapter(false); setNewChapterTitle(''); }} className="p-1 text-ink-light/40"><X size={14} /></button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setAddingChapter(true)}
                      className="w-full rounded-xl border-2 border-dashed border-white/10 py-4 flex flex-col items-center gap-1 text-ink-light/25 hover:text-cyan-400/50 hover:border-cyan-400/20 transition-colors"
                    >
                      <Plus size={16} strokeWidth={1.5} />
                      <span className="text-[10px]">New Chapter</span>
                    </button>
                  )
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm text-ink-light/30">Select a topic</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
