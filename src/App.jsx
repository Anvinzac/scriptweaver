import { useEffect } from 'react';
import useScriptStore from './store/useScriptStore';
import BrowseView from './components/BrowseView';
import ReaderView from './components/ReaderView';

export default function App() {
  const ready = useScriptStore((s) => s.ready);
  const selectedChapterId = useScriptStore((s) => s.selectedChapterId);
  const init = useScriptStore((s) => s.init);

  useEffect(() => {
    init();
  }, [init]);

  if (!ready) {
    return (
      <div className="min-h-dvh bg-cream flex items-center justify-center">
        <div className="text-ink-light text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  if (selectedChapterId) {
    return <div className="min-h-dvh bg-cream"><ReaderView /></div>;
  }

  return <BrowseView />;
}
