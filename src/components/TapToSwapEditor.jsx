import { useState, useRef, useEffect } from 'react';
import { Check, X, AlignLeft } from 'lucide-react';

export default function TapToSwapEditor({ text, onSave, onCancel }) {
  const [words, setWords] = useState(text.split(' '));
  const [editingIdx, setEditingIdx] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [rawMode, setRawMode] = useState(false);
  const [rawText, setRawText] = useState(text);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (editingIdx !== null && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingIdx]);

  useEffect(() => {
    if (rawMode && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [rawMode]);

  const handleWordTap = (idx) => {
    setEditingIdx(idx);
    setInputValue(words[idx]);
  };

  const commitWord = () => {
    if (editingIdx === null) return;
    const newWords = [...words];
    const replacement = inputValue.trim().split(' ');
    newWords.splice(editingIdx, 1, ...replacement);
    setWords(newWords);
    setEditingIdx(null);
    setInputValue('');
  };

  const cancelWord = () => {
    setEditingIdx(null);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitWord();
    } else if (e.key === 'Escape') {
      cancelWord();
    }
  };

  if (rawMode) {
    return (
      <div className="flex flex-col gap-2">
        <textarea
          ref={textareaRef}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          className="w-full text-sm leading-6 text-ink bg-warm-gray border border-border rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-accent/30"
          rows={3}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSave(rawText)}
            className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-glow-start to-glow-end px-3 py-1.5 rounded-lg active:scale-95 transition-transform"
          >
            <Check size={12} />
            Save
          </button>
          <button
            onClick={onCancel}
            className="text-xs font-medium text-ink-light px-3 py-1.5 rounded-lg hover:bg-warm-gray"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setRawMode(false);
              setWords(rawText.split(' '));
            }}
            className="text-xs font-medium text-ink-light px-3 py-1.5 rounded-lg hover:bg-warm-gray ml-auto"
          >
            Word Mode
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Word pills */}
      <div className="flex flex-wrap gap-1.5">
        {words.map((word, idx) =>
          editingIdx === idx ? (
            <span key={idx} className="inline-flex items-center gap-0.5">
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={commitWord}
                className="text-sm px-2 py-0.5 border-2 border-accent rounded-md bg-accent-light text-ink focus:outline-none min-w-[40px]"
                style={{ width: `${Math.max(inputValue.length, 3)}ch` }}
              />
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => handleWordTap(idx)}
              className="text-sm px-2 py-0.5 bg-warm-gray rounded-md text-ink hover:bg-accent-light active:scale-95 transition-all duration-75"
            >
              {word}
            </button>
          )
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() => onSave(words.join(' '))}
          className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-glow-start to-glow-end px-3 py-1.5 rounded-lg active:scale-95 transition-transform"
        >
          <Check size={12} />
          Save
        </button>
        <button
          onClick={onCancel}
          className="text-xs font-medium text-ink-light px-3 py-1.5 rounded-lg hover:bg-warm-gray"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setRawMode(true);
            setRawText(words.join(' '));
          }}
          className="flex items-center gap-1 text-xs font-medium text-ink-light px-3 py-1.5 rounded-lg hover:bg-warm-gray ml-auto"
        >
          <AlignLeft size={12} />
          Raw Text
        </button>
      </div>
    </div>
  );
}
