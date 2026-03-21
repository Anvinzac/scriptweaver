import { useState } from 'react';
import { Check, Copy, Pencil, Trash2 } from 'lucide-react';
import useScriptStore from '../store/useScriptStore';
import TapToSwapEditor from './TapToSwapEditor';

export default function VersionCard({ version, blockId, isActive, isOnly }) {
  const [editing, setEditing] = useState(false);
  const setActiveVersion = useScriptStore((s) => s.setActiveVersion);
  const duplicateVersion = useScriptStore((s) => s.duplicateVersion);
  const deleteVersion = useScriptStore((s) => s.deleteVersion);
  const updateVersionText = useScriptStore((s) => s.updateVersionText);

  const handleSave = (newText) => {
    updateVersionText(blockId, version.id, newText);
    setEditing(false);
  };

  return (
    <div
      className={`flex-shrink-0 snap-center rounded-xl border p-4 flex flex-col gap-3 ${
        isActive
          ? 'border-accent/50 bg-gradient-to-br from-accent-light to-accent-light/5'
          : 'border-border bg-surface-2'
      }`}
      style={{ width: '82%', minWidth: '82%' }}
    >
      {/* Active badge */}
      {isActive && (
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider self-start bg-gradient-to-r from-glow-start to-glow-mid bg-clip-text text-transparent">
          <Check size={10} strokeWidth={3} className="text-accent" />
          Active
        </span>
      )}

      {/* Text or editor */}
      <div className="flex-1 overflow-y-auto min-h-[60px]">
        {editing ? (
          <TapToSwapEditor
            text={version.text}
            onSave={handleSave}
            onCancel={() => setEditing(false)}
          />
        ) : (
          <p className="text-sm leading-6 text-ink">{version.text}</p>
        )}
      </div>

      {/* Action buttons */}
      {!editing && (
        <div className="flex items-center gap-2 border-t border-border pt-3">
          {!isActive && (
            <button
              onClick={() => setActiveVersion(blockId, version.id)}
              className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-glow-start to-glow-end px-2.5 py-1.5 rounded-lg active:scale-95 transition-transform"
            >
              <Check size={12} strokeWidth={2.5} />
              Set Active
            </button>
          )}
          <button
            onClick={() => duplicateVersion(blockId, version.id)}
            className="flex items-center gap-1 text-xs font-medium text-ink-light px-2.5 py-1.5 rounded-lg hover:bg-warm-gray active:scale-95 transition-transform"
          >
            <Copy size={12} />
            Duplicate
          </button>
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-1 text-xs font-medium text-ink-light px-2.5 py-1.5 rounded-lg hover:bg-warm-gray active:scale-95 transition-transform"
          >
            <Pencil size={12} />
            Edit
          </button>
          {!isOnly && (
            <button
              onClick={() => deleteVersion(blockId, version.id)}
              className="flex items-center gap-1 text-xs font-medium text-red-400 px-2.5 py-1.5 rounded-lg hover:bg-red-500/10 active:scale-95 transition-transform ml-auto"
            >
              <Trash2 size={12} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
