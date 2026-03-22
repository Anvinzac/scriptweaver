import { useRef, useCallback, useState } from 'react';
import {
  ArrowLeft, Layers, ChevronLeft, ChevronRight,
  ChevronDown, ChevronRight as ChevronRightIcon,
  Plus, Pencil, Trash2, Check, X, MessageSquarePlus,
  Camera, Lightbulb,
} from 'lucide-react';
import useScriptStore from '../store/useScriptStore';
import { demoScripts as demoScriptsRef } from '../store/demoData';
import MicroEditor from './MicroEditor';

function ExampleSection({ idea, chapterId }) {
  const toggleCollapsed = useScriptStore((s) => s.toggleIdeaCollapsed);
  const updateIdeaTitle = useScriptStore((s) => s.updateIdeaTitle);
  const updateIdeaCaption = useScriptStore((s) => s.updateIdeaCaption);
  const deleteIdea = useScriptStore((s) => s.deleteIdea);

  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editingCaption, setEditingCaption] = useState(false);
  const [captionText, setCaptionText] = useState('');

  const startEdit = () => { setEditTitle(idea.title); setEditing(true); };
  const saveEdit = () => { if (editTitle.trim()) updateIdeaTitle(idea.id, editTitle.trim()); setEditing(false); };
  const startCaptionEdit = () => { setCaptionText(idea.caption || ''); setEditingCaption(true); };
  const saveCaptionEdit = () => { updateIdeaCaption(idea.id, captionText.trim()); setEditingCaption(false); };

  return (
    <div className="border-b border-amber-400/10 animate-fade-in-up">
      {/* Example header — amber themed */}
      <div className="flex items-center gap-2 px-4 py-3 bg-amber-400/[0.04]">
        <button
          onClick={() => toggleCollapsed(idea.id)}
          className="flex items-center gap-2 flex-1 min-w-0"
        >
          {idea.collapsed ? (
            <ChevronRightIcon size={16} className="text-amber-400/60 flex-shrink-0" />
          ) : (
            <ChevronDown size={16} className="text-amber-400/60 flex-shrink-0" />
          )}
          <Camera size={14} className="text-amber-400/70 flex-shrink-0" />
          {editing ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') setEditing(false); }}
              onClick={(e) => e.stopPropagation()}
              autoFocus
              className="flex-1 bg-white/10 text-sm text-ink rounded px-2 py-0.5 outline-none border border-amber-400/30 focus:border-amber-400/60"
            />
          ) : (
            <span className="text-[13px] font-medium text-amber-300/80 truncate">
              {idea.title}
            </span>
          )}
        </button>

        <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 rounded flex-shrink-0">
          Example
        </span>

        {editing ? (
          <div className="flex gap-1 flex-shrink-0">
            <button onClick={saveEdit} className="p-1 text-green-400/70 hover:text-green-400"><Check size={14} /></button>
            <button onClick={() => setEditing(false)} className="p-1 text-ink-light/40 hover:text-ink-light"><X size={14} /></button>
          </div>
        ) : (
          <div className="flex gap-0.5 flex-shrink-0">
            <button onClick={startEdit} className="p-1 text-ink-light/30 hover:text-ink-light/60"><Pencil size={12} /></button>
            <button onClick={() => { if (confirm('Delete this example?')) deleteIdea(idea.id); }} className="p-1 text-ink-light/30 hover:text-red-400/70"><Trash2 size={12} /></button>
          </div>
        )}
      </div>

      {/* Content — collapsible */}
      {!idea.collapsed && (
        <div className="px-4 py-3 bg-amber-400/[0.02]">
          {/* Image preview */}
          {idea.image ? (
            <div className="rounded-xl overflow-hidden mb-3 border border-amber-400/10">
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-44 object-cover"
              />
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-amber-400/15 h-36 flex flex-col items-center justify-center gap-2 mb-3 text-amber-400/30">
              <Camera size={24} strokeWidth={1.5} />
              <span className="text-xs">Add reference image</span>
            </div>
          )}

          {/* Caption */}
          {editingCaption ? (
            <div className="flex items-start gap-2">
              <textarea
                value={captionText}
                onChange={(e) => setCaptionText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); saveCaptionEdit(); } if (e.key === 'Escape') setEditingCaption(false); }}
                placeholder="Describe this example..."
                autoFocus
                rows={3}
                className="flex-1 bg-white/10 text-sm text-ink rounded-lg px-3 py-2 outline-none border border-amber-400/20 focus:border-amber-400/50 placeholder:text-ink-light/30 resize-none"
              />
              <div className="flex flex-col gap-1">
                <button onClick={saveCaptionEdit} className="p-1.5 text-green-400/70 hover:text-green-400"><Check size={14} /></button>
                <button onClick={() => setEditingCaption(false)} className="p-1.5 text-ink-light/40 hover:text-ink-light"><X size={14} /></button>
              </div>
            </div>
          ) : (
            <button
              onClick={startCaptionEdit}
              className="w-full text-left"
            >
              {idea.caption ? (
                <p className="text-[13px] leading-relaxed text-amber-200/60 italic">
                  {idea.caption}
                </p>
              ) : (
                <p className="text-xs text-amber-400/30 italic">
                  Tap to add notes about this example...
                </p>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function IdeaSection({ idea, chapterId, selectedBlockId, selectBlock, globalIndexRef }) {
  const toggleCollapsed = useScriptStore((s) => s.toggleIdeaCollapsed);
  const updateIdeaTitle = useScriptStore((s) => s.updateIdeaTitle);
  const deleteIdea = useScriptStore((s) => s.deleteIdea);
  const addSentenceToIdea = useScriptStore((s) => s.addSentenceToIdea);

  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [addingSentence, setAddingSentence] = useState(false);
  const [newSentence, setNewSentence] = useState('');

  const startEdit = () => { setEditTitle(idea.title); setEditing(true); };
  const saveEdit = () => { if (editTitle.trim()) updateIdeaTitle(idea.id, editTitle.trim()); setEditing(false); };

  const handleAddSentence = () => {
    if (newSentence.trim()) {
      addSentenceToIdea(idea.id, newSentence.trim());
      setNewSentence('');
      setAddingSentence(false);
    }
  };

  const sentenceCount = idea.sentenceBlocks.length;

  return (
    <div className="border-b border-white/5 animate-fade-in-up">
      {/* Idea header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03]">
        <button
          onClick={() => toggleCollapsed(idea.id)}
          className="flex items-center gap-2 flex-1 min-w-0"
        >
          {idea.collapsed ? (
            <ChevronRightIcon size={16} className="text-cyan-400/60 flex-shrink-0" />
          ) : (
            <ChevronDown size={16} className="text-cyan-400/60 flex-shrink-0" />
          )}
          <Lightbulb size={14} className="text-cyan-400/50 flex-shrink-0" />
          {editing ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') setEditing(false); }}
              onClick={(e) => e.stopPropagation()}
              autoFocus
              className="flex-1 bg-white/10 text-sm text-ink rounded px-2 py-0.5 outline-none border border-cyan-400/30 focus:border-cyan-400/60"
            />
          ) : (
            <span className="text-[13px] font-medium text-cyan-300/80 truncate">
              {idea.title}
            </span>
          )}
        </button>

        <span className="text-[10px] text-ink-light/40 tabular-nums flex-shrink-0">
          {sentenceCount}
        </span>

        {editing ? (
          <div className="flex gap-1 flex-shrink-0">
            <button onClick={saveEdit} className="p-1 text-green-400/70 hover:text-green-400"><Check size={14} /></button>
            <button onClick={() => setEditing(false)} className="p-1 text-ink-light/40 hover:text-ink-light"><X size={14} /></button>
          </div>
        ) : (
          <div className="flex gap-0.5 flex-shrink-0">
            <button onClick={startEdit} className="p-1 text-ink-light/30 hover:text-ink-light/60"><Pencil size={12} /></button>
            <button onClick={() => { if (confirm('Delete this idea and all its sentences?')) deleteIdea(idea.id); }} className="p-1 text-ink-light/30 hover:text-red-400/70"><Trash2 size={12} /></button>
          </div>
        )}
      </div>

      {/* Sentences — collapsible */}
      {!idea.collapsed && (
        <div>
          {idea.sentenceBlocks
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((sb) => {
              globalIndexRef.current++;
              const activeVersion = sb.versions.find((v) => v.id === sb.activeVersionId);
              const hasVariants = sb.versions.length > 1;
              const isSelected = sb.id === selectedBlockId;
              const idx = globalIndexRef.current;

              return (
                <button
                  key={sb.id}
                  onClick={() => selectBlock(sb.id)}
                  className={`w-full text-left pl-9 pr-5 py-3 border-b border-white/[0.04] transition-colors duration-100 flex items-start gap-3 animate-fade-in-up ${
                    isSelected
                      ? 'bg-highlight border-l-2 border-l-accent'
                      : 'active:bg-warm-gray/50'
                  }`}
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  <span className="text-[11px] font-mono text-ink-light/25 pt-0.5 w-5 flex-shrink-0 text-right">
                    {idx}
                  </span>
                  <span className="text-[15px] leading-6 text-ink flex-1">
                    {activeVersion?.text}
                  </span>
                  {hasVariants && (
                    <span className="flex items-center gap-0.5 text-[11px] text-accent bg-accent-light px-1.5 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                      <Layers size={10} strokeWidth={2} />
                      {sb.versions.length}
                    </span>
                  )}
                </button>
              );
            })}

          {/* Add sentence placeholder */}
          {addingSentence ? (
            <div className="ml-9 mr-5 my-2 flex items-center gap-2">
              <input
                value={newSentence}
                onChange={(e) => setNewSentence(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddSentence(); if (e.key === 'Escape') { setAddingSentence(false); setNewSentence(''); } }}
                placeholder="Type a new sentence..."
                autoFocus
                className="flex-1 bg-white/10 text-sm text-ink rounded-lg px-3 py-2 outline-none border border-cyan-400/20 focus:border-cyan-400/50 placeholder:text-ink-light/30"
              />
              <button onClick={handleAddSentence} className="p-1.5 text-green-400/70 hover:text-green-400"><Check size={16} /></button>
              <button onClick={() => { setAddingSentence(false); setNewSentence(''); }} className="p-1.5 text-ink-light/40 hover:text-ink-light"><X size={16} /></button>
            </div>
          ) : (
            <button
              onClick={() => setAddingSentence(true)}
              className="w-[calc(100%-3.25rem)] ml-9 mr-5 my-2 py-2.5 rounded-lg border border-dashed border-white/10 flex items-center justify-center gap-2 text-ink-light/25 hover:text-cyan-400/50 hover:border-cyan-400/20 transition-colors"
            >
              <Plus size={14} strokeWidth={1.5} />
              <span className="text-xs">New sentence</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ReaderView() {
  const demoMode = useScriptStore((s) => s.demoMode);
  const userScripts = useScriptStore((s) => s.userScripts);
  const selectedScriptId = useScriptStore((s) => s.selectedScriptId);
  const selectedChapterId = useScriptStore((s) => s.selectedChapterId);
  const scripts = demoMode ? demoScriptsRef : userScripts;
  const script = scripts.find((s) => s.id === selectedScriptId) || null;
  const selectedBlockId = useScriptStore((s) => s.selectedBlockId);
  const goBack = useScriptStore((s) => s.goBack);
  const selectBlock = useScriptStore((s) => s.selectBlock);
  const navigateChapter = useScriptStore((s) => s.navigateChapter);
  const getChapterNav = useScriptStore((s) => s.getChapterNav);
  const addIdea = useScriptStore((s) => s.addIdea);
  const addExample = useScriptStore((s) => s.addExample);

  const [addingIdea, setAddingIdea] = useState(false);
  const [newIdeaTitle, setNewIdeaTitle] = useState('');
  const [addingExample, setAddingExample] = useState(false);
  const [newExampleTitle, setNewExampleTitle] = useState('');

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) > 80 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) navigateChapter(1);
      else navigateChapter(-1);
    }
  }, [navigateChapter]);

  const handleAddIdea = () => {
    if (newIdeaTitle.trim()) {
      addIdea(selectedChapterId, newIdeaTitle.trim());
      setNewIdeaTitle('');
      setAddingIdea(false);
    }
  };

  const handleAddExample = () => {
    if (newExampleTitle.trim()) {
      addExample(selectedChapterId, newExampleTitle.trim());
      setNewExampleTitle('');
      setAddingExample(false);
    }
  };

  if (!script) return null;
  const chapter = script.chapters.find((c) => c.id === selectedChapterId);
  if (!chapter) return null;

  const { hasPrev, hasNext } = getChapterNav();
  const globalIndexRef = { current: 0 };

  return (
    <div
      className="max-w-lg mx-auto pb-12"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <header className="sticky top-0 bg-cream/90 backdrop-blur-sm z-10 pt-4 pb-3 px-5 border-b border-border">
        <button
          onClick={goBack}
          className="flex items-center gap-1.5 text-accent text-sm font-medium"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Back
        </button>
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => navigateChapter(-1)}
            disabled={!hasPrev}
            className="p-1 -ml-1 text-ink-light disabled:opacity-15 active:scale-90 transition-transform"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold text-ink truncate flex-1 text-center px-2">
            {chapter.title}
          </h1>
          <button
            onClick={() => navigateChapter(1)}
            disabled={!hasNext}
            className="p-1 -mr-1 text-ink-light disabled:opacity-15 active:scale-90 transition-transform"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </header>

      <div className="mt-1">
        {chapter.ideas
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((idea) =>
            idea.type === 'example' ? (
              <ExampleSection key={idea.id} idea={idea} chapterId={chapter.id} />
            ) : (
              <IdeaSection
                key={idea.id}
                idea={idea}
                chapterId={chapter.id}
                selectedBlockId={selectedBlockId}
                selectBlock={selectBlock}
                globalIndexRef={globalIndexRef}
              />
            )
          )}

        {/* Add placeholders */}
        <div className="flex gap-3 mx-4 my-3">
          {/* New Idea */}
          {addingIdea ? (
            <div className="flex-1 flex items-center gap-2">
              <input
                value={newIdeaTitle}
                onChange={(e) => setNewIdeaTitle(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddIdea(); if (e.key === 'Escape') { setAddingIdea(false); setNewIdeaTitle(''); } }}
                placeholder="Idea title..."
                autoFocus
                className="flex-1 bg-white/10 text-sm text-ink rounded-lg px-3 py-2 outline-none border border-cyan-400/20 focus:border-cyan-400/50 placeholder:text-ink-light/30"
              />
              <button onClick={handleAddIdea} className="p-1.5 text-green-400/70"><Check size={16} /></button>
              <button onClick={() => { setAddingIdea(false); setNewIdeaTitle(''); }} className="p-1.5 text-ink-light/40"><X size={16} /></button>
            </div>
          ) : (
            <button
              onClick={() => setAddingIdea(true)}
              className="flex-1 py-3 rounded-xl border-2 border-dashed border-cyan-400/10 flex items-center justify-center gap-2 text-cyan-400/30 hover:text-cyan-400/60 hover:border-cyan-400/25 transition-colors"
            >
              <Lightbulb size={15} strokeWidth={1.5} />
              <span className="text-xs font-medium">New Idea</span>
            </button>
          )}

          {/* New Example */}
          {addingExample ? (
            <div className="flex-1 flex items-center gap-2">
              <input
                value={newExampleTitle}
                onChange={(e) => setNewExampleTitle(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddExample(); if (e.key === 'Escape') { setAddingExample(false); setNewExampleTitle(''); } }}
                placeholder="Example title..."
                autoFocus
                className="flex-1 bg-white/10 text-sm text-ink rounded-lg px-3 py-2 outline-none border border-amber-400/20 focus:border-amber-400/50 placeholder:text-ink-light/30"
              />
              <button onClick={handleAddExample} className="p-1.5 text-green-400/70"><Check size={16} /></button>
              <button onClick={() => { setAddingExample(false); setNewExampleTitle(''); }} className="p-1.5 text-ink-light/40"><X size={16} /></button>
            </div>
          ) : (
            <button
              onClick={() => setAddingExample(true)}
              className="flex-1 py-3 rounded-xl border-2 border-dashed border-amber-400/10 flex items-center justify-center gap-2 text-amber-400/30 hover:text-amber-400/60 hover:border-amber-400/25 transition-colors"
            >
              <Camera size={15} strokeWidth={1.5} />
              <span className="text-xs font-medium">New Example</span>
            </button>
          )}
        </div>
      </div>

      <MicroEditor />
    </div>
  );
}
