import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import useScriptStore from '../store/useScriptStore';
import VersionCard from './VersionCard';

export default function MicroEditor() {
  const selectedBlockId = useScriptStore((s) => s.selectedBlockId);
  const clearSelection = useScriptStore((s) => s.clearSelection);
  const getSelectedBlockWithContext = useScriptStore((s) => s.getSelectedBlockWithContext);
  const navigateBlock = useScriptStore((s) => s.navigateBlock);
  const scrollRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const context = getSelectedBlockWithContext();

  useEffect(() => {
    setCurrentIdx(0);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [selectedBlockId]);

  if (!selectedBlockId || !context) return null;

  const { block, prevText, nextText, hasPrev, hasNext } = context;

  const scrollTo = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth * 0.82;
    const gap = 12;
    const nextIdx = direction === 'left'
      ? Math.max(0, currentIdx - 1)
      : Math.min(block.versions.length - 1, currentIdx + 1);
    setCurrentIdx(nextIdx);
    container.scrollTo({ left: nextIdx * (cardWidth + gap), behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth * 0.82;
    const gap = 12;
    const idx = Math.round(container.scrollLeft / (cardWidth + gap));
    setCurrentIdx(idx);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={clearSelection}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface rounded-t-2xl shadow-2xl animate-slide-up max-h-[55dvh] flex flex-col border-t border-border">
        {/* Drag handle + close */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 bg-white/10 rounded-full mx-auto" />
          <button
            onClick={clearSelection}
            className="absolute right-3 top-3 p-1.5 text-ink-light hover:text-ink rounded-full"
          >
            <X size={18} />
          </button>
        </div>

        {/* Context sentences — tappable */}
        <div className="px-5 pt-1 pb-3 border-b border-border flex-shrink-0">
          {/* Previous sentence */}
          {prevText ? (
            <button
              onClick={() => navigateBlock(-1)}
              className="w-full text-left flex items-center gap-2 group mb-1"
            >
              <ChevronUp size={12} className="text-ink-light/30 group-hover:text-accent flex-shrink-0 transition-colors" />
              <p className="text-xs text-ink-light/40 leading-5 line-clamp-1 group-hover:text-ink-light transition-colors">
                {prevText}
              </p>
            </button>
          ) : (
            <p className="text-[10px] text-ink-light/20 mb-1 ml-5">Start of chapter</p>
          )}

          {/* Current sentence */}
          <p className="text-sm font-medium text-ink leading-5 ml-5">
            {block.versions.find((v) => v.id === block.activeVersionId)?.text}
          </p>

          {/* Next sentence */}
          {nextText ? (
            <button
              onClick={() => navigateBlock(1)}
              className="w-full text-left flex items-center gap-2 group mt-1"
            >
              <ChevronDown size={12} className="text-ink-light/30 group-hover:text-accent flex-shrink-0 transition-colors" />
              <p className="text-xs text-ink-light/40 leading-5 line-clamp-1 group-hover:text-ink-light transition-colors">
                {nextText}
              </p>
            </button>
          ) : (
            <p className="text-[10px] text-ink-light/20 mt-1 ml-5">End of chapter</p>
          )}
        </div>

        {/* Version carousel */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between px-5 pt-3 pb-2 flex-shrink-0">
            <span className="text-xs font-medium text-ink-light uppercase tracking-wider">
              Versions ({block.versions.length})
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => scrollTo('left')}
                disabled={currentIdx === 0}
                className="p-1 rounded-full text-ink-light disabled:opacity-20"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs text-ink-light tabular-nums w-8 text-center">
                {currentIdx + 1}/{block.versions.length}
              </span>
              <button
                onClick={() => scrollTo('right')}
                disabled={currentIdx === block.versions.length - 1}
                className="p-1 rounded-full text-ink-light disabled:opacity-20"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-5 pb-5 flex-1 min-h-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {block.versions.map((version) => (
              <VersionCard
                key={version.id}
                version={version}
                blockId={block.id}
                isActive={version.id === block.activeVersionId}
                isOnly={block.versions.length === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
